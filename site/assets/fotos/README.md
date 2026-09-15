# As fotos

Três arquivos, três papéis diferentes. Todos recortados das fotos que a cliente
enviou em setembro de 2026 — as originais estão em `docs/fotos-recebidas/`.

| Arquivo | Onde | Como |
|---|---|---|
| `cacamba.jpg` | no herói, ao lado do texto | **conteúdo**: aparece inteira, sem véu, com legenda e texto alternativo |
| `faixa.jpg` | fundo da faixa "Como funciona" | **atmosfera**: atrás do véu escuro, e é a camada de parallax da faixa |
| `contato.jpg` | fundo da faixa de contato | idem |

`cacamba.jpg` é a caixa cheia na calçada de um condomínio, com a marca e os
dois telefones pintados em branco, e o caminhão chegando. É a única exibida
nítida e inteira, então é a que precisa ser a melhor: mostra o produto, a marca
e o serviço na mesma imagem.

Se qualquer um dos três sumir, o `onerror` tira a tag: o herói perde a figura
inteira, e as faixas voltam ao fundo escuro chapado. A página não quebra.

## Como cortar uma foto nova para as faixas escuras

As duas faixas são **altas**: o texto ocupa a maior parte, e sobra um rodapé
grande embaixo só para a foto aparecer. Com `object-fit: cover`, isso significa
que uma foto 16:9 é **ampliada 1,5 vez** para cobrir a altura, e as bordas
laterais se perdem.

Então, ao contrário do que parece:

- **melhor 4:3 ou 5:4** (por exemplo 960×900, 1280×1000) do que 16:9
- **quanto mais larga em pixels, melhor**: a faixa tem a largura da tela, e uma
  foto de 960px já é ampliada 1,4 vez numa tela de 1440px
- **o assunto à direita**: o véu é opaco no terço esquerdo, onde mora o texto, e
  vai abrindo para a direita
- **nada importante no alto**: no telefone o véu deita, escuro em cima, e é a
  parte de baixo da foto que aparece

O herói é diferente: quadro 5:3, assunto no centro, exibido com no máximo uns
500px de largura — 1200×720 já sobra.

Em todas: JPG, qualidade ~78, até uns 200 KB.

## O que precisa aparecer, e o que não pode

Caçamba **laranja** com a marca S.A. Entulho pintada em branco, caminhão e braço
**verdes**, rua, obra ou pátio de Manaus, luz de dia, serviço acontecendo.

Não pode: o nome **Sumaúma Ambiental** (nome antigo da mesma empresa) nem
**Seringueira** ou **Carapanaúba** (outras marcas que aparecem nas portas de
alguns caminhões da frota); lixo queimando; entulho em descampado; caixa
enferrujada ou amassada em foto nítida; marca d'água de banco de imagem.

**Marca de terceiro também conta.** A foto mais bonita do lote mostra o
caminhão novo carregado de caixas zero-bala, mas foi tirada na concessionária:
"Tracbel" e "VOLVO" aparecem legíveis no fundo, e numa faixa de fundo isso vira
propaganda de outra empresa. Ficou em `docs/fotos-recebidas/`.
