# S.A. Entulho

Landing page estática da S.A. Entulho — caçamba estacionária, caminhão VUC,
recicláveis e limpeza de fossa em Manaus.

## O que é

Páginas estáticas, sem dependência e sem framework: a home, o FAQ e a seção de
artigos. O único JavaScript da página são ~25 linhas no fim do `index.html` que
fazem o parallax das camadas decorativas (prédios e caçamba), desligado quando
o sistema pede menos movimento. O FAQ abre e fecha em `<details>`, sem script.

**Existe um passo de build, e só um:** `scripts/gerar-artigos.mjs` escreve as
páginas de artigo a partir do feed do ADC antes de o deploy copiar a pasta. Ele
não tem dependência nenhuma — só embutidos do Node — e o repositório continua
sem `package.json`. O porquê está em **Os artigos**, no fim.

```
site/
  index.html          a home
  faq.html            as 120 perguntas, servidas em /faq
  artigos.html        GERADO — a listagem, servida em /artigos
  artigos/<slug>.html GERADO — um por artigo aprovado no ADC
  sitemap.xml         GERADO
  robots.txt          GERADO
  assets/estilo.css   a folha de todas as páginas
  assets/logo.png     o logo real, 600x132 com alpha
  assets/grain.png    o grão, mosaico de 128px
  assets/fotos/       fotos opcionais — veja o README de lá
scripts/
  gerar-artigos.mjs   o único passo de build
docs/
  conteudo.md              os fatos reais usados nas páginas
  brief-v1-scrollcraft.md  registro da versão anterior (scroll animado)
```

Os quatro arquivos marcados como GERADO estão no `.gitignore`: saem prontos no
deploy e não se versionam.

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

Para ver a seção de artigos, gere-a antes — sem isso as páginas não existem no
seu disco:

```bash
ADC_URL=https://<o ADC> ADC_CHAVE=saentulho.<segredo> node scripts/gerar-artigos.mjs
```

Sem as duas variáveis o script roda igual e escreve a listagem no estado vazio,
que é o que o site mostra enquanto não há artigo aprovado.

Uma diferença do local para o ar: os links apontam para `/faq`, sem extensão,
porque o `vercel.json` liga `cleanUrls`. O servidor do Python não faz isso,
então para ver o FAQ na sua máquina abra `/faq.html`.

## Publicar

Vercel. O `vercel.json` roda `node scripts/gerar-artigos.mjs` como
`buildCommand` e depois publica a pasta `site` (`outputDirectory`).

As duas variáveis do feed — `ADC_URL` e `ADC_CHAVE` — ficam no painel da
Vercel. **A chave é um segredo e nunca pode ir para o HTML**, que é o motivo de
os artigos serem escritos no build e não buscados pelo navegador.

## Mexer no conteúdo

Telefone, WhatsApp, licenças e textos estão escritos direto no HTML. Os
números aparecem em mais de um lugar (topo, herói, contato e rodapé) e em
todas as páginas, então ao trocar um deles procure por `5592994341227` e
`559230301112` em `site/` **e em `scripts/gerar-artigos.mjs`**, que carrega o
mesmo topo e o mesmo rodapé das páginas geradas. Os fatos que podem aparecer nas páginas estão em
`docs/conteudo.md`.

No `faq.html`, cada pergunta aparece duas vezes: uma no `<details>` visível e
outra no `FAQPage` do schema.org, no fim do arquivo. **As duas têm que
bater** — marcação que não corresponde ao conteúdo visível é penalizada pelo
Google. Ao editar uma resposta, edite as duas.

## Os artigos

Os textos vêm do **ADC**, o ambiente onde são pautados, escritos e aprovados. O
site não tem servidor, então eles não podem ser buscados na hora da visita.
Restavam três caminhos, e dois estão fechados:

| Caminho | Por que não |
|---|---|
| Buscar pelo navegador | A `ADC_CHAVE` é segredo e iria parar no código-fonte: qualquer visitante leria o feed. E o texto só existiria depois do JavaScript, numa seção feita para ser indexada. |
| Versionar o HTML gerado | Enche o repositório de arquivo de máquina e põe um robô commitando na `main`. |
| **Gerar no deploy** | É o que fazemos. A chave fica na Vercel, o HTML sai pronto e indexável, e o repositório continua só com fonte. |

`scripts/gerar-artigos.mjs` **nunca derruba o deploy**. ADC fora do ar, chave
errada, JSON quebrado: em todos os casos ele escreve a listagem no estado
vazio, avisa no log e sai com 0. O site é da caçamba, não do blog.

O feed devolve **só os artigos endereçados ao S.A. Entulho**, e quem decide
isso é a chave, não parâmetro de URL: artigo escrito para outro dos quatro
sites da empresa não chega aqui de jeito nenhum.

O `slug` de cada artigo vira nome de arquivo, então ele é conferido contra
`^[a-z0-9]+(-[a-z0-9]+)*$` antes de virar caminho. Slug fora do formato é
ignorado com aviso no log — quem escreve em disco a partir de dado de fora
confere.

### O artigo aprovado só aparece no próximo deploy

É a diferença real entre este site e os outros três da empresa, que revalidam
sozinhos de cinco em cinco minutos. Aqui, aprovar no ADC não basta: alguém tem
de disparar um deploy.

`.github/workflows/atualizar-artigos.yml` resolve isso cutucando um Deploy Hook
da Vercel quatro vezes por dia útil, e pode ser disparado à mão pela aba
Actions quando você quiser ver um artigo no ar agora. **Ele fica inerte até o
segredo `VERCEL_DEPLOY_HOOK` existir** — as instruções estão no topo do próprio
arquivo.
