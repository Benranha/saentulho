# O conteúdo da página

Tudo que está escrito no site sai daqui. Estes são os fatos reais da empresa,
tirados do site antigo. **Não há estatística verificada**, então a página não
tem contador, não tem "98% de satisfação" e não tem "500 obras atendidas". Se
aparecer um número auditável, ele entra depois.

## A empresa, na voz dela (verbatim do site antigo)

> "Uma empresa especializada em retirada de resíduos de construção civil e
> material reciclável através de caçamba estacionária (Caixa de Entulho).
> Conta com uma equipe de atendimento capacitada e motoristas treinados para
> melhor atender os clientes. Nosso objetivo é a excelência para garantir a
> satisfação de todos os nossos contratantes, nossos serviços são de absoluta
> qualidade, com caixas de entulho em perfeito estado e caminhões novos e
> adequados. Foi criada visando a preservação do meio ambiente, porque sabe a
> importância da destinação correta dos resíduos."

## Os serviços

Texto aprovado pela cliente em setembro de 2026, usado verbatim na página.

| Serviço | O que está escrito |
|---|---|
| Coleta de entulho | Locação de caixa de entulho para resíduos de construção, reforma e demolição. Você solicita, nós entregamos e retiramos após o uso. |
| Caminhão VUC | Coleta prática para locais com acesso restrito, como garagens, ruas estreitas e áreas onde caminhões maiores não conseguem operar. |
| Resíduos recicláveis | Coleta e transporte de materiais recicláveis, com encaminhamento para destinação adequada e foco no reaproveitamento. |
| Limpeza de fossa | Sucção, limpeza e transporte de efluentes, com atendimento para residências, condomínios e empresas. |
| Banheiro químico | **Texto ainda não aprovado.** Escrito por nós a partir da sugestão de incluir o serviço. |
| Desentupimento | **Texto ainda não aprovado.** Idem. |

Os dois últimos entraram porque foram sugeridos, mas não vieram do site antigo
nem de texto da cliente. Antes de publicar, confirmar com ela: a empresa faz
mesmo os dois, e o texto está certo? Se não fizer, é só apagar os dois
`<article class="servico">` do fim da grade.

## Como funciona, em quatro passos

Texto aprovado pela cliente, verbatim:

1. **Você solicita** — Entre em contato pelo WhatsApp ou telefone, informe o
   endereço, o tipo de resíduo e o período necessário.
2. **A caixa de entulho chega** — Entregamos a caixa de entulho no local
   combinado, posicionada em local adequado para utilização.
3. **Você enche a caixa de entulho** — O cliente é responsável por colocar os
   resíduos dentro da caixa. A S.A. Entulho não disponibiliza mão de obra para
   o carregamento do material.
4. **A gente retira** — Quando finalizar o uso, solicite a retirada. Nossa
   equipe recolhe a caixa de entulho e encaminha os resíduos para a destinação
   adequada.

## Os fatos

- Licenças de operação: **Ibama, Semmas, Ipaam, Semulsp**
- **Pioneira em Manaus com caminhão VUC** (afirmação própria da empresa)
- Aceita cartão de crédito e débito
- Atende toda Manaus
- Telefone **(92) 3030-1112** · WhatsApp **(92) 99434-1227**
- **Sumaúma Ambiental é o nome antigo da mesma empresa.** Fotos antigas ainda
  mostram essa marca pintada no caminhão. Não usar na página: quem chega lê um
  nome diferente do título e fica na dúvida se achou a empresa certa.

## As cores da frota (confirmado por foto do cliente)

A **caçamba é laranja**, com a marca e os dois telefones pintados em branco na
lateral. O **caminhão e o braço são verdes**. Isso não sai do logo, sai das
fotos reais — a primeira versão desta página desenhou a caçamba em verde, tirando
a cor do logo, e estava errada.

| Peça | Cor |
|---|---|
| Corpo da caçamba | `#DD6317` |
| Barra superior | `#F0842F`, com fio de luz em `#FFB877` |
| Faixa de reforço e sombra | `#B84C0E` / `#A8450B` |
| Pés | `#8A3A0A` |
| Pintura na lateral | branco, o alpha do logo usado como máscara |

## O desenho da caixa (confirmado por desenho técnico do cliente)

A caçamba desenhada na página — e os ícones que a repetem — seguem o modelo
real da frota, não uma caixa genérica:

- **de perfil, um trapézio**: as duas pontas são inclinadas e a base tem pouco
  mais da metade da largura da boca
- **barra superior correndo o comprimento todo**, passando das bordas, com um
  pé inclinado na ponta
- **dois pinos de içamento** despontando da barra
- **faixa de reforço** no alto da lateral, com a emenda visível
- **chapinhas com furo** nos cantos de baixo, onde a corrente engata
- lateral lisa: **não tem nervura vertical**, que era o que a primeira versão
  desenhava

Vale para o desenho do herói, para o ícone de coleta de entulho, para a caçamba
do caminhão VUC e para o favicon.

## A paleta, amostrada do logo

| Cor | Onde estava no logo | Onde está na página |
|---|---|---|
| `#069A2C` | a palavra ENTULHO e a folhagem | cor da marca: caçamba, ícones, destaques |
| `#146821` | o "S.A." e a tagline | links e botões secundários no claro |
| `#60BC4A` | a folha clara | borda da caçamba, destaque sobre fundo escuro |
| `#2C332C` | — | o carvão esverdeado das faixas escuras |
| `#F3F6EF` / `#E9EDE4` | — | os dois fundos claros |

O `#B83232` do tema BeTheme do site antigo foi descartado: era cor de
template, não da marca.

## Pendência fora do site

O WordPress em produção está comprometido: os `<title>` e os itens de menu
carregam spam de SEO injetado (`nawin @ hoya77`, `deso55 @ maha24`,
`macan83 @ indomievip`), a `<meta name="description">` ainda é a do tema
("BeInsurance | Best WordPress theme for Insurance companies") e o rodapé
carrega uma link farm de cassino. `/fale-conosco` dá 404 apesar de estar no
menu. Isso é invasão de servidor, não problema de layout, e esta página nova
não conserta — o WordPress antigo precisa sair do ar ou ser limpo.
