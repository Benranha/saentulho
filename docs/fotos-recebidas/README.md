# Fotos recebidas, fora da publicação

O cliente enviou nove arquivos. Três foram para `site/assets/` e estão na
página. Os outros ficam aqui: continuam versionados, mas fora de `site/`, então
o Vercel não os publica e eles não pesam no carregamento.

| Arquivo | Por que não está na página |
|---|---|
| `001-logoogogo.png` | é byte a byte o mesmo arquivo que `site/assets/logo.png` |
| `sumauma-nome-antigo.jpg` | caminhão com a marca **Sumaúma Ambiental**, nome antigo da mesma empresa. Quem chega no site lê um nome diferente do título e duvida se achou a empresa certa |
| `005-Post-Blog-Compostagem--960x720.png` | arte de post de blog, com texto embutido na imagem |
| `006-Post-Blog-Fossa-no-verao-960x720.png` | idem, e a marca d'água está cortada na borda do quadro |
| `007-Post-Blog-Queimadas-960x720.png` | idem, e mostra queima de resíduo a céu aberto: descarte irregular, o oposto do que uma empresa licenciada vende |
| `logo-gerado-por-ia.png` | logo gerado por IA, 2170x725 sem canal alpha, com o "O" de ENTULHO cortado na borda direita. O logo real tem alpha e está inteiro |

## O que foi aproveitado

| Arquivo enviado | Virou |
|---|---|
| `002-sa2.jpg` | `site/assets/fotos/cacamba.jpg` |
| `003-c1.jpg` | `site/assets/fotos/patio.jpg` |
| `008-asdfads.png` | `site/assets/logo-claro.png`, a marca sobre fundo escuro no rodapé |

As artes de blog ficam guardadas porque servem para redes sociais, que é para
onde foram feitas. Não servem para fundo de seção: têm texto embutido, e texto
dentro de imagem não é lido por buscador nem por leitor de tela, além de não
acompanhar o tamanho da tela.
