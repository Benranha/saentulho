# As fotos

As duas aparecem de formas diferentes, e é de propósito.

| Arquivo | Onde | Como |
|---|---|---|
| `patio.jpg` | no herói, ao lado do texto | **conteúdo**: aparece inteira, sem véu, com legenda e texto alternativo |
| `cacamba.jpg` | faixa "Você enche. A gente tira." | **atmosfera**: fundo da faixa, atrás de um véu, e é a camada de parallax dela |

A do herói é a que fica nítida, porque é exibida numa coluna com teto de 30rem
— perto do tamanho do próprio arquivo. A da faixa é esticada na largura da
tela, e o véu com a opacidade baixa é o que disfarça isso.

Se o arquivo for removido, a foto do herói some junto com a legenda e a da
faixa deixa o fundo chapado. A página não quebra em nenhum dos dois casos.

## A faixa de contato não tem foto

De propósito. A única foto de caminhão com a marca atual é a `patio.jpg`, e ela
passou a abrir a página; repetir a mesma imagem numa página de cinco telas lê
como falta de material. O fecho fica no escuro limpo, com a ação sozinha.

**Se aparecer outra foto de caminhão**, ela entra ali: basta salvar como
`contato.jpg` e me pedir para ligar — são duas linhas.

## Limitação atual

**As duas são 500x300.** No herói isso basta. No fundo da faixa, numa tela de
1440px, a imagem é esticada quase três vezes e fica mole; o véu e a opacidade
escondem quase todo o problema. Se existir o **original em resolução cheia**,
é só substituir o arquivo pelo de mesmo nome que a nitidez melhora sozinha,
sem mexer em código.

Ideal: 1920px de largura, JPG com qualidade ~75 (até ~300 KB).

## O que não usar

- **Foto com o nome Sumaúma Ambiental.** É o nome antigo da mesma empresa, mas
  na página ela faz o visitante duvidar se achou a empresa certa. A que o
  cliente enviou está guardada em `docs/fotos-recebidas/`.
- **Lixo queimando.** Queima de resíduo a céu aberto é descarte irregular — o
  oposto do que uma empresa licenciada vende. Numa seção de serviços, lê como
  "é isso que fazem com o seu entulho".
- **Entulho jogado em descampado**, pelo mesmo motivo. As duas só funcionariam
  se a legenda enquadrasse explicitamente como *o problema*, e a página hoje
  não tem esse espaço.
- **Foto de banco de imagem com a marca d'água aplicada por cima**, ainda mais
  quando o carimbo está cortado na borda do quadro.

O que funciona é o serviço acontecendo, com a marca atual visível: caçamba
laranja, caminhão verde, prédio ou rua de Manaus atrás.
