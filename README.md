# S.A. Entulho

Landing page estática da S.A. Entulho — caçamba estacionária, caminhão VUC,
recicláveis e limpeza de fossa em Manaus.

## O que é

Duas páginas estáticas, sem build, sem dependência, sem framework: a home e o
FAQ. O único JavaScript são ~25 linhas no fim do `index.html` que fazem o
parallax das camadas decorativas (prédios e caçamba), desligado quando o
sistema pede menos movimento. O FAQ abre e fecha em `<details>`, sem script.

```
site/
  index.html          a home
  faq.html            as 120 perguntas, servidas em /faq
  assets/estilo.css   a folha das duas páginas
  assets/logo.png     o logo real, 600x132 com alpha
  assets/grain.png    o grão, mosaico de 128px
  assets/fotos/       fotos opcionais — veja o README de lá
docs/
  conteudo.md              os fatos reais usados nas páginas
  brief-v1-scrollcraft.md  registro da versão anterior (scroll animado)
```

O CSS era um `<style>` dentro do `index.html` até o FAQ nascer. Virou arquivo
para as duas páginas dividirem a mesma folha em vez de manter duas cópias que
se desencontram na primeira mudança de cor.

**Ao mexer no CSS, suba o `?v=` nos dois HTML.** O `vercel.json` serve
`/assets/*` como `immutable` por um ano: sem trocar o número, quem já visitou o
site continua vendo a folha antiga.

## Rodar local

Não precisa de nada instalado além de um servidor de arquivos:

```bash
python3 -m http.server 8000 --directory site
# abre http://localhost:8000
```

Abrir o `index.html` direto pelo navegador também funciona.

Uma diferença do local para o ar: os links apontam para `/faq`, sem extensão,
porque o `vercel.json` liga `cleanUrls`. O servidor do Python não faz isso,
então para ver o FAQ na sua máquina abra `/faq.html`.

## Publicar

Vercel, projeto estático. `vercel.json` aponta `outputDirectory` para `site`,
então não há passo de build: o deploy é a cópia da pasta.

## Mexer no conteúdo

Telefone, WhatsApp, licenças e textos estão escritos direto no HTML. Os
números aparecem em mais de um lugar (topo, herói, contato e rodapé) e agora
nas duas páginas, então ao trocar um deles procure por `5592994341227` e
`559230301112` em `site/`. Os fatos que podem aparecer nas páginas estão em
`docs/conteudo.md`.

No `faq.html`, cada pergunta aparece duas vezes: uma no `<details>` visível e
outra no `FAQPage` do schema.org, no fim do arquivo. **As duas têm que
bater** — marcação que não corresponde ao conteúdo visível é penalizada pelo
Google. Ao editar uma resposta, edite as duas.
