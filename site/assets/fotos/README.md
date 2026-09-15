# As fotos

| Arquivo | Onde | Como |
|---|---|---|
| `cacamba.jpg` | no herói, ao lado do texto | **conteúdo**: aparece inteira, sem véu, com legenda e texto alternativo |
| `patio.jpg` | em lugar nenhum, hoje | guardada no repositório, fora da página |

A do herói é a caçamba laranja com a pintura branca da marca, sendo içada pelo
caminhão. É a foto que mostra o produto e a marca ao mesmo tempo, e é exibida
numa coluna com teto de 30rem — perto do tamanho do próprio arquivo, então
fica nítida.

Se o arquivo for removido, a foto do herói some junto com a legenda e a página
não quebra.

## A faixa escura está sem foto

A `cacamba.jpg` morava no fundo da faixa "Você enche. A gente tira." e passou a
abrir a página. A que sobrou, `patio.jpg`, foi recusada pela cliente — e, de
qualquer forma, são 500px esticados quase três vezes na largura de uma tela de
1440px, com um pneu e uma caixa enferrujada em primeiro plano.

Então a faixa ficou com a classe `faixa--limpa`: fundo chapado, sem véu, sem
sombra no texto e sem o rodapé alto que existia para caber a foto.

**Para trazer uma foto de volta ali**: salve como `faixa.jpg`, devolva a tag
que está comentada no HTML logo antes da `<section class="faixa">` e tire a
classe `faixa--limpa`. O véu, o parallax e a sombra do texto continuam no CSS.

## Se você for gerar ou pedir fotos novas

O que a página precisa, em ordem de utilidade:

| Nome do arquivo | Tamanho | Enquadramento |
|---|---|---|
| `faixa.jpg` | **1920×1080**, paisagem | o assunto à **direita** — o texto da faixa ocupa o terço esquerdo e o véu escurece esse lado. Serve para a faixa "Como funciona" |
| `cacamba.jpg` | **1500×900** (5:3) | a caçamba laranja inteira no quadro, a pintura branca legível. Substitui a atual no herói com mais nitidez |
| `contato.jpg` | **1920×1080**, paisagem | mesma regra da `faixa.jpg`. Hoje a faixa de contato é escura e limpa, e uma foto ali fecha a página |

Em todas: JPG, qualidade ~75, até ~300 KB.

**O que precisa aparecer:** caçamba **laranja** com a marca **S.A. Entulho**
pintada em branco na lateral, caminhão e braço **verdes**, rua, obra ou pátio
de Manaus atrás, luz de dia, serviço acontecendo (entrega, içamento, retirada).

**O que não pode aparecer:**

- **O nome Sumaúma Ambiental.** É o nome antigo da mesma empresa, mas na página
  faz o visitante duvidar se achou a empresa certa. A foto que a cliente enviou
  com essa marca está guardada em `docs/fotos-recebidas/`.
- **Lixo queimando.** Queima a céu aberto é descarte irregular — o oposto do que
  uma empresa licenciada vende.
- **Entulho jogado em descampado**, pelo mesmo motivo.
- **Caixa enferrujada ou amassada.** A página promete "caixa em bom estado".
- **Marca d'água de banco de imagem.**
