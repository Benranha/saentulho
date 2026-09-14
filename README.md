# S.A. Entulho

Landing page estática da S.A. Entulho — caçamba estacionária, caminhão VUC,
recicláveis e limpeza de fossa em Manaus.

## O que é

Um arquivo: `site/index.html`. HTML e CSS na mesma página, sem build, sem
dependência, sem framework. O único JavaScript são ~25 linhas no fim do
documento que fazem o parallax das camadas decorativas (prédios e caçamba),
desligado quando o sistema pede menos movimento.

```
site/
  index.html          a página inteira
  assets/logo.png     o logo real, 600x132 com alpha
  assets/grain.png    o grão, mosaico de 128px
  assets/fotos/       fotos opcionais — veja o README de lá
docs/
  conteudo.md              os fatos reais usados na página
  brief-v1-scrollcraft.md  registro da versão anterior (scroll animado)
```

## Rodar local

Não precisa de nada instalado além de um servidor de arquivos:

```bash
python3 -m http.server 8000 --directory site
# abre http://localhost:8000
```

Abrir o `index.html` direto pelo navegador também funciona.

## Publicar

Vercel, projeto estático. `vercel.json` aponta `outputDirectory` para `site`,
então não há passo de build: o deploy é a cópia da pasta.

## Mexer no conteúdo

Telefone, WhatsApp, licenças e textos estão escritos direto no HTML. Os
números aparecem em mais de um lugar (topo, herói, contato e rodapé), então
ao trocar um deles procure por `5592994341227` e `559230301112` no arquivo.
Os fatos que podem aparecer na página estão em `docs/conteudo.md`.
