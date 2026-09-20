/**
 * Gera as páginas de artigo a partir do feed do ADC.
 *
 * POR QUE ISTO EXISTE, e por que o site deixou de ser "sem build".
 *
 * Os outros três sites da empresa são Next.js e buscam o feed no servidor, a
 * cada revalidação. Aqui não há servidor: o deploy é a cópia da pasta `site/`.
 * Restavam três caminhos, e dois estão fechados.
 *
 * 1. Buscar o feed pelo NAVEGADOR está fora de questão. A `ADC_CHAVE` é um
 *    segredo, e num site estático ela iria parar no código-fonte da página —
 *    qualquer visitante leria o feed inteiro deste site. E, de quebra, o texto
 *    só existiria depois do JavaScript rodar, justo numa seção que existe para
 *    ser indexada.
 * 2. Versionar o HTML gerado encheria o repositório de arquivo de máquina e
 *    poria um robô commitando na `main`.
 * 3. GERAR NO DEPLOY, que é o que este arquivo faz. A chave fica na Vercel, o
 *    HTML sai pronto e indexável, e o repositório continua só com fonte.
 *
 * Zero dependência, de propósito: só embutidos do Node. O site nunca teve
 * `package.json` e não passa a ter por causa disto.
 *
 * REGRA DURA: este script NUNCA derruba o deploy. ADC fora do ar, chave errada,
 * JSON quebrado — em todos os casos ele escreve a página no estado vazio, avisa
 * no log e sai com 0. O site é da caçamba, não do blog.
 *
 * Uso:
 *   ADC_URL=... ADC_CHAVE=... node scripts/gerar-artigos.mjs
 */

import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const RAIZ = path.resolve(import.meta.dirname, "..");
const SAIDA = path.join(RAIZ, "site");
const PASTA_ARTIGOS = path.join(SAIDA, "artigos");

const SITE_URL = (process.env.SITE_URL?.trim() || "https://www.saentulho.com.br")
  .replace(/\/+$/, "");

/** Versão da folha de estilo. Tem de bater com o `?v=` de index.html e faq.html. */
const VERSAO_CSS = 3;

const WHATSAPP = "5592994341227";
const TELEFONE_EXIBICAO = "(92) 3030-1112";
const TELEFONE_LINK = "+559230301112";
const WHATSAPP_EXIBICAO = "(92) 99434-1227";

const TITULO_SECAO = "Artigos";
const DESCRICAO_SECAO =
  "Entulho, caçamba, fossa e documentação ambiental explicados sem juridiquês, por quem opera em Manaus, Iranduba e Manacapuru.";

/* ------------------------------------------------------------------ feed -- */

/**
 * Busca o feed. Devolve `[]` em qualquer falha — ver a REGRA DURA no topo.
 *
 * O `site` que o feed devolve vem da CHAVE, nunca de parâmetro na URL: artigo
 * endereçado a outro dos quatro sites não chega aqui de jeito nenhum.
 */
async function buscarArtigos() {
  const base = process.env.ADC_URL?.trim();
  const chave = process.env.ADC_CHAVE?.trim();

  if (!base || !chave) {
    console.warn(
      "[artigos] ADC_URL e/ou ADC_CHAVE ausentes: gerando a seção no estado vazio.",
    );
    return [];
  }

  try {
    const resposta = await fetch(
      `${base.replace(/\/+$/, "")}/api/publico/artigos?limite=100`,
      { headers: { Authorization: `Bearer ${chave}` } },
    );

    if (!resposta.ok) {
      console.error(`[artigos] o feed respondeu ${resposta.status}.`);
      return [];
    }

    const dados = await resposta.json();
    return Array.isArray(dados?.artigos) ? dados.artigos : [];
  } catch (erro) {
    console.error("[artigos] não foi possível buscar o feed:", erro?.message ?? erro);
    return [];
  }
}

/* ------------------------------------------------------------- utilidades -- */

/** Escapa texto que vai para dentro do HTML. Tudo que vem do feed passa aqui. */
function esc(valor) {
  return String(valor ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * O slug vira NOME DE ARQUIVO, então ele é conferido antes de virar caminho.
 * Um slug com `../` escreveria fora da pasta do site. O ADC já gera slug
 * normalizado, mas quem escreve em disco a partir de dado de fora confere.
 */
const SLUG_VALIDO = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function textoDoHtml(html) {
  return String(html ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    // Tag virou espaço, e `<strong>dias</strong>,` virou "dias ,".
    .replace(/\s+([,.;:!?…)\]])/g, "$1")
    .replace(/([(\[])\s+/g, "$1")
    .trim();
}

/** A chamada do artigo. Usa o resumo quando existe; senão, o começo do texto. */
function chamada(artigo, limite = 180) {
  const resumo = artigo.resumo?.trim();
  if (resumo) return resumo;

  const texto = textoDoHtml(artigo.conteudo);
  if (texto.length <= limite) return texto;

  const corte = texto.slice(0, limite);
  return `${corte.slice(0, corte.lastIndexOf(" "))}…`;
}

const FORMATO_LONGO = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: "America/Manaus",
});

const FORMATO_CURTO = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "America/Manaus",
});

function data(iso, formato) {
  if (!iso) return null;
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? null : formato.format(d);
}

function quando(artigo) {
  return new Date(artigo.publicadoEm ?? artigo.atualizadoEm).getTime();
}

/** JSON-LD com `<` escapado, para não fechar a tag script por acidente. */
function jsonLd(dados) {
  return `<script type="application/ld+json">\n${JSON.stringify(dados, null, 2).replace(
    /</g,
    "\\u003c",
  )}\n</script>`;
}

/* ----------------------------------------------------------------- chrome -- */

/**
 * Cabeça, topo, botão flutuante e rodapé — os mesmos de `index.html` e
 * `faq.html`.
 *
 * Os caminhos dos assets aqui são ABSOLUTOS (`/assets/...`), e as duas páginas
 * escritas à mão usam relativos. Não é descuido: com `cleanUrls`, um artigo é
 * servido em `/artigos/<slug>`, e ali um caminho relativo resolveria para
 * `/artigos/assets/...`, que não existe. Absoluto funciona nos dois níveis.
 */
const SVG_WHATSAPP = `<path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.885 3.4"/>`;

function cabeca({ titulo, descricao, caminho, og }) {
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(titulo)}</title>
<meta name="description" content="${esc(descricao)}">
<meta name="theme-color" content="#F3F6EF">
<link rel="canonical" href="${SITE_URL}${caminho}">
<meta property="og:locale" content="pt_BR">
<meta property="og:type" content="${og?.tipo ?? "website"}">
<meta property="og:site_name" content="S.A. Entulho">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(descricao)}">
<meta property="og:url" content="${SITE_URL}${caminho}">${
    og?.imagem ? `\n<meta property="og:image" content="${esc(og.imagem)}">` : ""
  }
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%232C332C'/><path d='M4 10h24v3H4z' fill='%23069A2C'/><path d='M6 13h20l-5 12H11z' fill='%23069A2C'/></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=Geist:wght@400;500;600&display=swap">
<!-- A mesma folha da home. Ver o comentário em index.html sobre o \`?v=\`. -->
<link rel="stylesheet" href="/assets/estilo.css?v=${VERSAO_CSS}">
<!-- A mesma tag das paginas escritas a mao. Ver o comentario em index.html:
     o carregador e o do Google Ads, e o GA4 entra no mesmo gtag.js com um
     segundo \`config\`. Se esta secao carregasse so o GA4, a tag do Ads faltaria
     em todas as paginas de artigo e as conversoes vindas dali nao contariam. -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-18387814949"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18387814949');
  gtag('config', 'G-B8PXC97HZ7');
</script>
</head>
<body>

<div class="grao" aria-hidden="true"></div>

<header class="topo">
  <div class="topo__in">
    <a class="marca" href="/" aria-label="S.A. Entulho, início">
      <img src="/assets/logo.png" width="600" height="132" alt="S.A. Entulho · gestão e destinação de resíduos">
    </a>
    <nav class="nav" aria-label="Seções">
      <span class="nav__links">
        <a href="/#servicos">Serviços</a>
        <a href="/#empresa">A empresa</a>
        <a href="/artigos">Artigos</a>
        <a href="/faq">Perguntas</a>
      </span>
      <a class="btn btn--wa" href="https://wa.me/${WHATSAPP}">
        <svg class="btn__i" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${SVG_WHATSAPP}</svg>
        <span class="btn__t">Peça agora</span>
      </a>
    </nav>
  </div>
</header>
`;
}

const RODAPE = `
<a class="wa-flutua" href="https://wa.me/${WHATSAPP}?text=Ol%C3%A1%2C%20quero%20pedir%20uma%20ca%C3%A7amba."
   aria-label="Chamar no WhatsApp">
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${SVG_WHATSAPP}</svg>
</a>

<footer class="pe">
  <div class="wrap">
    <div class="pe__in">
      <img class="pe__marca" src="/assets/logo-claro.png" width="600" height="132"
           alt="S.A. Entulho · gestão e destinação de resíduos">
      <div class="pe__col">
        <b>Contato</b>
        <span>WhatsApp <a href="https://wa.me/${WHATSAPP}">${WHATSAPP_EXIBICAO}</a></span>
        <span>Telefone <a href="tel:${TELEFONE_LINK}">${TELEFONE_EXIBICAO}</a></span>
      </div>
      <div class="pe__col">
        <b>Atendimento</b>
        <span>Manaus, Iranduba e Manacapuru · AM</span>
        <span>Pix, cartão de crédito e débito</span>
      </div>
      <div class="pe__col">
        <b>Páginas</b>
        <span><a href="/">Início</a></span>
        <span><a href="/artigos">Artigos</a></span>
        <span><a href="/faq">Perguntas frequentes</a></span>
      </div>
    </div>
    <div class="pe__legal">
      <p>S.A. Entulho · Gestão e destinação de resíduos · Manaus, Amazonas.</p>
      <p class="pe__credito">
        Desenvolvido por
        <a href="https://awtecnologia.net.br" target="_blank" rel="noopener">AW Tecnologia</a>
      </p>
    </div>
  </div>
</footer>

<!-- As mesmas conversoes das paginas escritas a mao. Entra aqui no RODAPE, e
     nao em cada template, porque o rodape e o unico pedaco que a listagem e
     todo artigo compartilham: assim nenhuma pagina nova nasce sem medir.
     Sem isto, os quatro links desta pagina (o botao do topo, o flutuante e os
     dois do pe) abririam o WhatsApp sem contar conversao nenhuma.

     \`beacon\` nao e enfeite: nenhum destes links e target="_blank", entao o
     clique ja esta descarregando a pagina quando o registro precisa sair. -->
<script>
(function () {
  var CONVERSOES = {
    whatsapp: 'AW-18387814949/h4SdCP76if0cEKWU_79E',
    telefone: 'AW-18387814949/WDX0COT-if0cEKWU_79E'
  };

  function disparar(sendTo) {
    if (typeof gtag !== 'function') return;
    gtag('event', 'conversion', {
      'send_to': sendTo,
      'value': 1.0,
      'currency': 'BRL',
      'transport_type': 'beacon'
    });
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (/wa\.me|api\.whatsapp\.com/i.test(href)) {
      disparar(CONVERSOES.whatsapp);
    } else if (/^tel:/i.test(href)) {
      disparar(CONVERSOES.telefone);
    }
  }, true);
})();
</script>

</body>
</html>
`;

/* ------------------------------------------------------------- a listagem -- */

function paginaDaListagem(artigos) {
  const entradas = artigos
    .map((artigo) => {
      const dataCurta = data(artigo.publicadoEm ?? artigo.atualizadoEm, FORMATO_CURTO);

      return `        <li class="artigo-item">
          ${dataCurta ? `<p class="artigo-item__data">${esc(dataCurta)}</p>` : ""}
          <h2 class="artigo-item__t">
            <a href="/artigos/${esc(artigo.slug)}">${esc(artigo.titulo)}</a>
          </h2>
          <p class="artigo-item__c">${esc(chamada(artigo))}</p>
        </li>`;
    })
    .join("\n");

  /* Vazio é um estado legítimo, e vai ser o estado normal até o primeiro artigo
     ser aprovado. A página continua de pé, porque quem chegou por busca ou por
     link tem de encontrar alguma coisa — e o caminho do orçamento fica visível. */
  const corpo = artigos.length
    ? `      <ul class="artigos">
${entradas}
      </ul>`
    : `      <div class="artigos-vazio">
        <p class="artigos-vazio__t">Ainda não há artigo publicado.</p>
        <p>
          Os textos passam por pauta, redação e aprovação antes de aparecer
          aqui. Enquanto o primeiro não sai, as dúvidas que chegam ao
          atendimento estão respondidas nas perguntas frequentes.
        </p>
        <p class="artigos-vazio__acao">
          <a class="btn btn--ghost" href="/faq">Ver as 120 perguntas</a>
        </p>
      </div>`;

  const esquema = jsonLd({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/artigos`,
    url: `${SITE_URL}/artigos`,
    name: `${TITULO_SECAO} · S.A. Entulho`,
    description: DESCRICAO_SECAO,
    inLanguage: "pt-BR",
  });

  return `${cabeca({
    titulo: `${TITULO_SECAO} · S.A. Entulho`,
    descricao: DESCRICAO_SECAO,
    caminho: "/artigos",
  })}
<main>

  <section class="cabeca-faq">
    <div class="wrap">
      <p class="eyebrow">${TITULO_SECAO}</p>
      <h1>Quem carrega, explica.</h1>
      <p class="lead">${DESCRICAO_SECAO}</p>
    </div>
  </section>

  <section class="secao secao--artigos">
    <div class="wrap">
${corpo}
    </div>
  </section>

</main>
${esquema}
${RODAPE}`;
}

/* --------------------------------------------------------------- o artigo -- */

function paginaDoArtigo(artigo) {
  const dataLonga = data(artigo.publicadoEm ?? artigo.atualizadoEm, FORMATO_LONGO);
  const descricao = chamada(artigo, 155);
  const caminho = `/artigos/${artigo.slug}`;

  /* O `conteudo` entra CRU, e isso é deliberado: ele já chega sanitizado do
     ADC, por canal autenticado, contra uma allowlist curta (p, h2, h3, strong,
     em, ul, ol, li, a, blockquote, br). A fronteira de confiança é a chave do
     feed. Se um dia a origem deixar de ser o ADC, sanitize antes daqui.
     Todo o resto — título, legenda, chamada — passa por `esc`. */
  const foto = artigo.foto
    ? `      <figure class="artigo-foto">
        <img src="${esc(artigo.foto.url)}"${
          artigo.foto.largura ? ` width="${Number(artigo.foto.largura)}"` : ""
        }${artigo.foto.altura ? ` height="${Number(artigo.foto.altura)}"` : ""} alt="${esc(
          artigo.foto.legenda ?? "",
        )}" loading="lazy" decoding="async">
${artigo.foto.legenda ? `        <figcaption>${esc(artigo.foto.legenda)}</figcaption>\n` : ""}      </figure>`
    : "";

  const esquema = [
    jsonLd({
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${SITE_URL}${caminho}`,
      url: `${SITE_URL}${caminho}`,
      headline: artigo.titulo,
      description: descricao,
      inLanguage: "pt-BR",
      datePublished: artigo.publicadoEm ?? artigo.atualizadoEm,
      dateModified: artigo.atualizadoEm,
      // Autor e editor são a EMPRESA. O nome de quem escreve no ADC é interno
      // e não foi pedido para ir ao ar.
      author: { "@type": "Organization", name: "S.A. Entulho" },
      publisher: { "@type": "Organization", name: "S.A. Entulho" },
      ...(artigo.foto ? { image: [artigo.foto.url] } : {}),
    }),
    jsonLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: TITULO_SECAO, item: `${SITE_URL}/artigos` },
        { "@type": "ListItem", position: 3, name: artigo.titulo, item: `${SITE_URL}${caminho}` },
      ],
    }),
  ].join("\n");

  return `${cabeca({
    titulo: `${artigo.titulo} · S.A. Entulho`,
    descricao,
    caminho,
    og: { tipo: "article", imagem: artigo.foto?.url },
  })}
<main>

  <article>
    <section class="cabeca-faq">
      <div class="wrap">
        <p class="eyebrow">${esc(dataLonga ?? TITULO_SECAO)}</p>
        <h1>${esc(artigo.titulo)}</h1>
      </div>
    </section>

    <section class="secao">
      <div class="wrap">
${foto}
      <div class="prosa">
${artigo.conteudo}
      </div>

      <p class="artigo-volta">
        <a href="/artigos">← Todos os artigos</a>
      </p>
      </div>
    </section>
  </article>

</main>
${esquema}
${RODAPE}`;
}

/* ---------------------------------------------------------------- sitemap -- */

function sitemap(artigos) {
  const hoje = new Date().toISOString().slice(0, 10);

  const urls = [
    { loc: `${SITE_URL}/`, lastmod: hoje, priority: "1.0" },
    { loc: `${SITE_URL}/faq`, lastmod: hoje, priority: "0.8" },
    { loc: `${SITE_URL}/artigos`, lastmod: hoje, priority: "0.7" },
    ...artigos.map((artigo) => ({
      loc: `${SITE_URL}/artigos/${artigo.slug}`,
      // A data do ADC, não a de hoje: dizer que todo artigo mudou no dia do
      // deploy é ruído para o buscador e mentira sobre o conteúdo.
      lastmod: (artigo.atualizadoEm ?? "").slice(0, 10) || hoje,
      priority: "0.6",
    })),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${esc(u.loc)}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;
}

const ROBOTS = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

/* ------------------------------------------------------------------ saída -- */

async function main() {
  const brutos = await buscarArtigos();

  const artigos = brutos
    .filter((artigo) => {
      if (typeof artigo?.slug === "string" && SLUG_VALIDO.test(artigo.slug)) {
        return true;
      }
      console.error(`[artigos] slug recusado, artigo ignorado: ${JSON.stringify(artigo?.slug)}`);
      return false;
    })
    // O feed vem crescente, porque lá a ordem serve de cursor. Aqui quem manda
    // é o leitor: o mais novo primeiro.
    .sort((a, b) => quando(b) - quando(a));

  // A pasta é refeita do zero a cada geração: artigo renomeado ou despublicado
  // não pode deixar HTML velho para trás numa geração local.
  await rm(PASTA_ARTIGOS, { recursive: true, force: true });
  await mkdir(PASTA_ARTIGOS, { recursive: true });

  await writeFile(path.join(SAIDA, "artigos.html"), paginaDaListagem(artigos), "utf8");

  for (const artigo of artigos) {
    await writeFile(
      path.join(PASTA_ARTIGOS, `${artigo.slug}.html`),
      paginaDoArtigo(artigo),
      "utf8",
    );
  }

  await writeFile(path.join(SAIDA, "sitemap.xml"), sitemap(artigos), "utf8");
  await writeFile(path.join(SAIDA, "robots.txt"), ROBOTS, "utf8");

  console.log(
    `[artigos] ${artigos.length} artigo(s), mais a listagem, o sitemap e o robots.txt.`,
  );
}

// A REGRA DURA do topo, aplicada: nenhuma falha aqui derruba o deploy.
main().catch((erro) => {
  console.error("[artigos] falha inesperada ao gerar:", erro);
  process.exit(0);
});
