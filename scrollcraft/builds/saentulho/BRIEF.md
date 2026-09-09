# S.A. Entulho · BRIEF

> **Auto-autorado, não entrevistado.** O cliente delegou a entrevista
> ("pode confiar na skill totalmente") e deu três instruções diretas:
> recriar e redesenhar o site, usar vídeo e foto de caminhões e caçambas
> perto de prédios, e que ele pode enviar as fotos de base.
> As oito respostas abaixo foram escritas na voz da marca a partir do
> conteúdo real do site atual. Onde há um número ou uma licença, ela veio
> do site deles, verbatim. Nada foi inventado.

## O que a empresa é (extraído do site atual, verbatim)

> "Uma empresa especializada em retirada de resíduos de construção civil e
> material reciclável através de caçamba estacionária (Caixa de Entulho).
> Conta com uma equipe de atendimento capacitada e motoristas treinados para
> melhor atender os clientes. Nosso objetivo é a excelência para garantir a
> satisfação de todos os nossos contratantes, nossos serviços são de absoluta
> qualidade, com caixas de entulho em perfeito estado e caminhões novos e
> adequados. Foi criada visando a preservação do meio ambiente, porque sabe a
> importância da destinação correta dos resíduos."

Serviços: Coleta de Entulho Padrão · Caminhão VUC · Resíduos Recicláveis ·
Limpeza de fossa.

Fatos reais disponíveis (os únicos números que podem aparecer na página):

- Licenças de operação: **Ibama, Semmas, Ipaam, Semulsp**
- **Pioneira em Manaus com caminhão VUC** (afirmação própria da empresa)
- Aceita cartão de crédito e débito
- Atende toda Manaus
- Telefone **(92) 3030-1112** · WhatsApp **(92) 99434-1227**

**Não há estatística verificada.** Logo, nenhum contador na página.
Nenhum "98% de satisfação", nenhum "500 obras atendidas". Se o cliente
mandar um número auditável, ele entra depois.

### Achado sobre o site atual, fora do escopo do design

O site em produção está comprometido. Cada `<title>` e cada item de menu
carrega spam de SEO injetado (`nawin @ hoya77`, `deso55 @ maha24`,
`macan83 @ indomievip`), o `<meta name="description">` do tema ainda diz
"BeInsurance | Best WordPress theme for Insurance companies", e o rodapé
carrega uma link farm de cassino indonésio (`hoya77`, `lakuemas`,
`slotmania98`, `SUPERPLAY777` e mais dez). `/fale-conosco` retorna 404
apesar de estar no menu. Isso é uma invasão de WordPress, não um problema
de layout, e precisa ser tratado no servidor.

---

## As oito respostas

**1. Vibe em três a cinco palavras, mais referências de qualquer meio.**

Pesado, honesto, documental, resolvido.

Referências: as fotos de canteiro de obra do Sebastião Salgado (trabalho,
poeira, escala humana, sem pose). A sinalização de um pátio de obra:
tinta refletiva, estêncil, número de licença estampado no aço. O corte
seco de "No Country for Old Men": nada de trilha, o silêncio faz o
trabalho. Nenhum site foi nomeado, de propósito.

**2. A jornada de scroll, seção por seção.**

Primeiro a pessoa vê o próprio pátio: o monte encostado no muro de um
lado e o mesmo pátio limpo do outro, os dois ao mesmo tempo. Depois o
monte cresce enquanto ela rola, e ela lê o que aquilo custa. Depois
descobre que cada tipo de resíduo tem um caminho diferente. Depois vê o
documento: as licenças, sem foto, sem venda. E no fim a caçamba vira, tudo
sai de quadro, e sobra o pátio inteiro com um telefone nele.

**3. A curva de energia.**

Começa contida e sobe devagar. O ato dos documentos é o mais quieto da
página inteira, de propósito, porque é o ponto mais baixo antes do único
ponto alto. A virada é a única coisa alta do site. Depois dela, nada mais
acontece: acaba.

**4. Como a pessoa deve se sentir, estágio por estágio, e o UM momento.**

Ver abaixo, em **A curva de sentimento**. O momento é a caçamba virando.

**5. Uma coisa que este site deve fazer que nenhum outro faz.**

O entulho tem que se acumular de verdade na tela, do lado de quem está
lendo, e não sair até alguém tirar. E aí a caçamba vira e tira.

**6. Quão longe do premium-minimal.**

Longe. Premium-minimal (escuro, muito ar, um acento) é a fantasia errada
para uma empresa que trabalha com poeira e aço em Manaus. A família aqui é
**densa e industrial-documental**: concreto e osso, tipografia de placa de
obra, foto real, laranja de sinalização. Confiança vem de parecer real,
não de parecer caro.

**7. Um mundo contínuo, ou cenas distintas?**

Nem um nem outro: **duas colunas em tensão pela página inteira**. O negócio
é literalmente binário (sujo, limpo), então a página é binária, e o scroll
existe para resolver a tensão em vez de viajar por um lugar.

**8. Quais assets já existem?**

O cliente disse que pode enviar as fotos de base (caminhões e caçambas
perto de prédios). Nada foi recebido até o momento deste arquivo.
Não há `KIE_AI_API_KEY` configurada, então **não há geração de imagem**:
esta build é 100% dependente do material real da empresa. As lacunas estão
listadas em `assets/_ENVIAR/README.md`.

---

## A gramática

**Split stage** (uniqueness.md §2.7). Duas colunas em tensão pela página
inteira, resolvidas pelo scroll.

Por que as outras sete perderam:

| Gramática | Por que não |
|---|---|
| Filmic one-shot | É o default que carrega ônus da prova, e o negócio não tem um arco emocional contínuo: tem um estado binário. Um one-shot proíbe a mudança dura de estado que é justamente o produto aqui. |
| Chaptered editorial | O visitante não quer ler uma matéria. Quer saber se vem caçamba amanhã. Decisão curta, local, com telefone no fim. |
| Live surface | Não existe superfície. Não há software para operar. |
| Continuous world | Exige worldflight, é a mais frágil e a mais cara, e depende de um voo de câmera contínuo que eu não tenho asset para produzir. O negócio também não é uma viagem por um lugar. |
| Typographic poster | Proíbe fundo fotográfico e proíbe `scrub`. O cliente pediu vídeo e foto de caminhão e caçamba, explicitamente. Conflito direto. |
| Gallery / catalog | São quatro serviços, e a pergunta real do visitante não é "quais são as opções", é "eles vêm buscar". |
| Rhythmic cutlist | Gramática de marca de energia. Registro errado para uma empresa licenciada de resíduos, onde o produto é confiança. |

O que a split stage dá de graça e nenhuma outra dava: o **colapso** como
final. O divisor corre para uma borda, uma coluna vence, e o CTA mora na
coluna vencedora. Isso é, literalmente, "a gente leva o entulho e sobra o
espaço". A gramática e o negócio são a mesma forma.

Proibições da gramática, respeitadas nesta build: nada full-bleed antes da
resolução, nada de cópia centralizada, nada de herói ancorado em canto,
nada de fechamento simétrico, nenhuma coluna decorativa. Banidos: `pan`,
`spotlight`, `magnet`, `drift`, e mais de um `scrub`.

**Chrome:** não há barra fixa. **O divisor é o chrome.** Ele carrega o
rótulo dos dois lados (`ENTULHO` / `ESPAÇO`) e um medidor de carga que
mostra o quanto a caçamba já encheu, que é o progresso do argumento.

---

## A paleta, tirada do site atual

Amostrada do logo real (`logoogogo.png`) e do CSS do tema em produção.

| Cor | Onde estava | Onde está agora |
|---|---|---|
| `#069A2C` | a palavra ENTULHO e a folhagem da árvore | a cor da marca: caçamba, filete da borda, link de salto |
| `#146821` | o "S.A." e a tagline | acento do lado claro (CTA, links) |
| `#60BC4A` | a folha clara da árvore | borda superior da caçamba, medidor de carga |
| `#B83232` | cor primária do tema BeTheme | **descartada.** Era cor de template, não da marca |

Os dois chãos foram clareados a pedido: o lado do entulho saiu de `#171310`
(quase preto) para `#2C332C` (carvão esverdeado), e o lado do espaço de
`#E9E4DA` (osso quente) para `#E9EDE4` (osso levemente verde). Um tom, duas
claridades, como a gramática de split stage exige quando há dois chãos.

## O logo

`assets/logo.png`, 600x132 com alpha real, tirado do próprio site
(`logoogogo.png`). Aparece em dois lugares e em nenhum outro:

1. **Na primeira tela**, no alto da coluna clara, em cores. A gramática de
   split stage não tem barra de topo, então a marca não vira chrome fixo: ela
   é parte da composição do herói, e a manchete desce para abrir a diagonal.
2. **No fecho**, de novo, onde a página assina o que disse.
3. **Pintado na lateral da caçamba**, em recorte claro. Não é um texto
   parecido posto no lugar: é o alpha do PNG real usado como `mask-image`,
   então a forma é a marca de verdade, incluindo a árvore e a tagline.

O arquivo que o cliente enviou (1910x823, gerado por IA) foi descartado como
fonte por dois defeitos medidos: não tem canal alpha, o preto é chapado, e o
"O" de ENTULHO está cortado na borda direita (brilho 157 na última coluna de
pixels). Ficou guardado em `assets/_ENVIAR/logo-fundo-preto.png` para
referência. **Se existir o vetor, ele substitui os dois.**

## O movimento assinatura: a linha de carga

O divisor vertical é a **borda de aço de uma caçamba**, com luz de aresta e
um filete de tinta de sinalização.

1. **A caçamba está lá desde a primeira tela**, vazia, no pé da coluna do
   entulho, com a pintura da empresa na lateral.
2. Cada afirmação que a página faz **solta um caco dentro dela**. Caco real no
   DOM, com massa, rotação e assentamento próprios, e ele **fica**. A carga é
   cumulativa: quando chega no pico a caçamba está cheia, cristando acima da
   borda como uma caçamba cheia de verdade fica.
3. O medidor no divisor sobe junto, porque ele mede a carga, não o scroll.
4. **No pico o caminhão engata.** A frente dela levanta, e ela sai carregada
   enquanto o divisor corre para a borda esquerda. O que fica é o pátio.

A caçamba é SVG em duas camadas, fundo e frente, com o entulho entre as duas:
é isso que faz a carga parecer **dentro** da caixa em vez de colada por cima
dela. Caçamba, carga e pintura viajam dentro de um mesmo invólucro, senão cada
camada gira em torno do próprio centro e a carga descola no engate.

Isto é a frase da própria empresa executada em vez de escrita: no ato 3 a
página diz "você enche, a gente tira", e é literalmente o que acontece na
tela.
4. O ponteiro perto da borda cutuca o topo da pilha. Gated a
   `(hover: hover) and (pointer: fine)`, desligado sob reduced motion.
   Essa é a única técnica de corporificação da página (feel.md §4).

Nada disso é parâmetro de device do kit. É JS da própria página lendo
`--sc-p` e atributos `data-sae-*` próprios. **O motor não é editado.**

## A frase de contar pra alguém

> É o site onde tem uma caçamba parada do seu lado da tela e cada coisa que
> você lê cai dentro dela, até encher. Aí o caminhão engata e leva.

---

## A curva de sentimento

Escrita antes dos atos existirem.

```
1  Reconhecimento  o pátio deles, os dois estados na tela ao mesmo tempo,
                   a marca no alto da coluna clara e a caçamba vazia
                   embaixo, esperando
2  Incômodo        o clipe roda dentro da coluna da esquerda enquanto a
                   caçamba enche sozinha; a direita nomeia o que aquilo
                   custa
3  Clareza         cada resíduo tem um destino diferente, e uma linha
                   limpa a outra ao passar
4  Confiança       a direita para de vender e mostra documento: Ibama,
                   Semmas, Ipaam, Semulsp. Letra pequena, sem foto.
                   O ato mais quieto do site.
5  Alívio          o caminhão engata, a caçamba cheia sai de quadro,
                   e sobra o pátio inteiro com um telefone nele
```

Nenhum sentimento se repete em atos vizinhos. O ato 4 é o mais baixo da
página e fica imediatamente antes do pico, de propósito.

## O pico

**Ato 5, "A virada".**

A frase que o visitante diria a um amigo:

> a caçamba foi enchendo com tudo que eu lia, e no fim o caminhão engatou e
> levou ela cheia. sobrou o pátio limpo inteiro

Ele recebe as três coisas: o maior `data-sc-span` da página (3.8 contra 2.8
do segundo maior), o silêncio na frente dele (o ato 4 não tem mídia nem
movimento além de um fade escalonado), e o orçamento de asset (a foto do
pátio limpo, em resolução cheia, é a única imagem que ocupa a tela inteira
na página toda, e só ocupa depois do colapso).

**O fim resolve.** Depois do colapso a página fica parada, com uma coluna,
uma foto, um número de telefone e um botão. Não há footer separado: o
rodapé mora dentro do palco do último ato, então não sobra cauda morta.

## Silêncio autorado

Declarado para que a verificação distinga silêncio de scroll morto:

1. **Ato 4 inteiro.** Sem mídia, sem clipe, sem movimento contínuo.
   Tipografia menor da página, fade escalonado na entrada e nada mais.
   Isso é o vale antes do pico, não uma seção quebrada.
2. **Os primeiros ~0.35 de progresso do ato 5.** A coluna direita fica
   propositalmente vazia enquanto a pilha esquerda está no seu ponto mais
   cheio, para que a virada tenha de onde vir. Isso é a respiração antes do
   único ponto alto do site.

## O telefone é outro desenho, não o mesmo espremido

No desktop a caçamba mora no pé da coluna do entulho e a cópia fica no alto do
palco, então elas nunca se encontram. No telefone não há coluna: há uma tela
estreita onde tudo passa por todas as alturas enquanto rola. A caçamba
flutuava no meio da tela por cima do texto.

O que resolveu, depois de duas tentativas erradas:

1. **A caçamba desceu para o rodapé da tela** e o entulho passou a cair de
   cima, atravessando as palavras, até dentro dela.
2. **Reservar espaço por padding não funcionou.** Enquanto a página rola,
   todo conteúdo passa por todas as alturas da tela: a caçamba só trocou de
   vítima, saiu de cima das linhas do ato 3 e foi para cima da lista de
   licenças do ato 4.
3. **O pátio.** Uma faixa fixa e opaca no rodapé, alta o bastante para conter
   a caçamba inteira com a crista da carga. Ela esconde o que rola por trás,
   em vez de pedir espaço. Aresta superior em gradiente, senão ela decepa a
   manchete no meio de uma linha.
4. **O divisor subiu.** Com o pátio ocupando 29vh, um divisor em 50% jogava
   quase toda a metade de baixo para dentro dele. No telefone a linha fica em
   torno de 33% da tela, e os dois lados cabem inteiros acima do pátio.

Empilhamento: palcos em 1, pátio em 4, caçamba em 5, grão em 6, botão em 90.
O pátio precisou passar de 1 para 4 porque `.sc-stage` também vive em 1 e vem
depois no documento, então empatava e ganhava.

## Três correções vindas de uso real

O cliente olhou a página pronta e trouxe três críticas. Todas procedem.

**1. "No início os usuários ficam em dúvida pra saber o que fazer."**
A página tem um mecanismo próprio, e ninguém adivinha mecanismo: nada dizia
que a caçamba enche com o que se lê. Entrou uma linha na primeira tela, junto
da caçamba: *"Role a página. Cada coisa que você ler cai dentro da caçamba."*
E uma demonstração: um segundo depois de abrir, alguns cacos caem sozinhos,
passando pela boca da caçamba antes de assentar.

A primeira versão dessa linha era pequena demais e o cliente pediu mais
destaque. Ficou em duas partes com hierarquia de verdade: **"Role a página."**
em display, corpo `--sc-t-xl`, no verde da marca, e a explicação embaixo em
corpo normal. E desceu para junto da boca da caçamba, para o olho ligar a
ordem ao objeto que ela descreve, em vez de ela flutuar perto do título.
O verde não é enfeite: na página inteira ele é a caçamba, o medidor e a ação,
então já significa "o mecanismo". Ênfase por peso, tamanho e cor, que é o que
a tipografia tem. Nada de seta, ícone de mouse ou barra colorida na lateral.

Isto é um desvio consciente da regra que proíbe indicação de rolagem. A regra
existe contra enfeite vazio, do tipo "role para explorar". Aqui é instrução de
uso de um mecanismo bespoke, dita uma vez, e some no fim do primeiro ato.
Sem ela o site tem um truque que ninguém descobre.

**2. "A barra do meio não ficou boa."**
Era uma chapa de aço de 16px com gradiente de cinco paradas, duas sombras
externas e uma luz de aresta. Competia com o conteúdo pelo olho. Virou uma
linha de 3px em cinza-verde, com o medidor de carga em verde da marca
correndo dentro dela. O divisor continua sendo o chrome, só parou de gritar.

**3. "As frases são muito rápidas e ficam difíceis de ler."**
Procede, e a primeira correção foi pelo lado errado: aumentei o span dos
atos, a página foi para 13.8vh no desktop e 14.1 no telefone, ou seja, dentro
da faixa que o registro manda evitar e acima do teto de 14.

O que deixa uma frase legível não é o comprimento do ato, é o **platô da
cue**: o trecho em que ela fica em opacidade cheia, em vez de estar sempre
subindo ou descendo uma rampa. As janelas do ato 2 passaram a ter rampas
curtas e platô longo (`0.12 0.66 0.12 0.20` no lugar de `0.14 0.62`), e os
spans voltaram para 2.4 / 3.4 / 2.4 / 4.2. Resultado: 12.8vh no desktop,
13.1 no telefone, e a frase para de piscar.

## As telas em branco, e o aviso de continuar

O cliente relatou que em alguns pontos a tela ficava vazia quando ele parava
de rolar. Procede, e o harness **não pegava**: ele mede se algo se move, não
se há conteúdo. Varri a página de 0.25 em 0.25 de tela contando caracteres
visíveis (opacidade efetiva acima de 0.35, dentro da viewport) e achei dois
buracos:

- **1.25 a 1.75 alturas de tela: zero caracteres.** A cauda do ato 1.
- **8.5 a 11.0: quase nada por 2.5 alturas de tela.** O silêncio do ato 5.

A causa do primeiro é a regra do kit que eu tinha quebrado: todo ato menos o
último fecha a última cue numa janela que termina em 1. As do ato 1 fechavam
em 0.86 e 0.9. Corrigido, ainda sobrava tela vazia, porque **um palco preso
continua visível por uma tela inteira depois que o pin acaba**, deslizando
para cima: com rampa de saída a cópia some antes disso. A forma correta ali é
`0 1 0 0`, que segura em opacidade cheia e deixa a cópia sair de quadro junto
com o palco.

O segundo era o silêncio autorado esticado demais. A linha "Tudo isso subiu
enquanto você lia" fechava em 0.24 e depois vinham o engate e a saída da
caçamba sem texto nenhum. Ela passa a segurar até 0.72, e o fecho abre em
0.68, então as duas se cruzam.

Depois das correções o mínimo da página inteira saiu de **0 para 34
caracteres**.

**O aviso.** Mesmo sem buraco, o cliente pediu um sinal para quem para. Ele
aparece quando o scroll fica 1.5s parado, some no primeiro toque na roda, e
não existe em dois lugares: no herói, onde a instrução grande já está
escrita, e depois que a caçamba saiu, porque aí a pessoa chegou. No desktop
ele fica centrado na coluna de leitura, não no meio da página, senão monta em
cima da linha do divisor.

## A ação

Uma só, com **um rótulo, usado em todo lugar**: **"Chamar no WhatsApp"**,
apontando para `https://wa.me/5592994341227`. O telefone
**(92) 3030-1112** aparece como texto, não como segundo botão.

Ela vive num **botão flutuante**, presente desde a primeira tela: pílula verde
no canto inferior direito no desktop, faixa de largura cheia com 56px de
altura no telefone, com o glifo do WhatsApp em SVG (não emoji). É o primeiro
alvo de teclado da página.

**Ele some sozinho quando o CTA do fecho abre**, pelo mesmo sinal que revela o
fecho, então a página nunca mostra o mesmo botão duas vezes ao mesmo tempo, e
o alvo invisível sai da ordem de foco junto.

Isto é a única concessão à gramática: split stage não tem chrome de marketing,
e um botão fixo é exatamente isso. A concessão foi pedida pelo cliente e é
defensável aqui, porque numa empresa de serviço local a ação é o produto.
Registrado como desvio consciente, não como descuido.

---

## O portão de impressão digital

Registro: `/Users/benjamimaranha/Projects/saentulho/scrollcraft/FINGERPRINTS.md`,
**vazio**. Esta é a primeira build deste workspace, então não há linha
contra a qual comparar e o portão passa por ausência de concorrência, não
por mérito. Registrado honestamente como tal.

A build também evita, por escolha, a faixa que as builds anteriores do
autor da skill ocuparam: 6 a 7 atos entre 13.6 e 13.8 alturas de viewport.
Esta tem **5 atos e 12.4 alturas**.

Linha a ser anexada ao registro depois do envio:

| Dim | Valor |
|---|---|
| Gramática | Split stage |
| Chrome | Sem barra. O divisor é o chrome: rótulo dos dois lados mais medidor de carga |
| Herói | Split 50/50 estabelecido na primeira tela, duas manchetes legíveis ao mesmo tempo, `pin` |
| Sequência | pin 2.4 · scrub 2.8 · reveal 2.2 · flow 1.2 · pin 3.8 = 5 atos, 12.4vh |
| Fechamento | Colapso: divisor corre para a borda esquerda, coluna limpa toma a largura toda, CTA dentro da coluna vencedora, rodapé dentro do palco |
| Assinatura | A linha de carga: pilha de entulho cumulativa no DOM que a caçamba despeja de uma vez no pico |
| Mundo | Documental natural, luz disponível, concreto e osso, laranja de sinalização |

## A partitura

| Ato | Beat | Device | Span | Por que este |
|---|---|---|---|---|
| 1 · A obra | Reconhecimento | `pin` + `kinetic` + `parallax` | 2.4 | O split tem que ser entendido antes de rolar, então o quadro segura enquanto as duas manchetes chegam. As camadas dão profundidade sem tirar o olho do divisor. |
| 2 · O acúmulo | Incômodo | `scrub` (único da página) | 2.8 | A câmera andando sob a mão do leitor é a coisa mais forte disponível, e ela cabe dentro de uma coluna só, o que a gramática exige antes da resolução. |
| 3 · O destino | Clareza | `reveal` | 2.2 | Uma limpeza é literalmente uma mudança de estado, e é isso que um wipe é. Cada linha limpa a anterior. |
| 4 · O documento | Confiança | `flow` + `in` | 1.2 | Credencial é informação, não experiência. Comprimir é o que faz o pico seguinte ter de onde subir. |
| 5 · A virada | Alívio → Decisão | `pin` + bespoke `--sc-p` | 3.8 | O colapso é o final que a gramática prescreve, e é o pico. O maior span da página por margem visível. |

Checagens: 6 famílias de device (`pin`, `scrub`, `reveal`, `flow`+`in`,
`kinetic`, `parallax`), nenhuma repetida em atos vizinhos, **um** `scrub`
(a gramática permite no máximo um), nenhum contador porque não há número
verificado, nenhum sentimento repetido em vizinhos, pico com o maior span
por margem clara. Medido no harness: **12.4 alturas de viewport** no
desktop, 12.7 no telefone. Dentro do orçamento de 8 a 14, e fora da faixa
13.6-13.8.

### As quatro fases do pico

O pico deixou de ser um movimento e virou quatro, em progresso do ato:

| Progresso | O que acontece |
|---|---|
| 0 a 0.30 | silêncio. a caçamba está cheia, a coluna direita está vazia |
| 0.30 a 0.48 | o engate: o caminhão levanta a frente dela |
| 0.48 a 0.72 | ela sai carregada, e o divisor corre para a borda |
| 0.72 a 1 | resolvido: uma coluna, o telefone, o WhatsApp |

A chegada e a queda saíram das fases do pico porque as duas passaram a
acontecer ao longo da página inteira. O pico agora é só a partida, que é a
promessa da empresa: **a gente leva**.

**Uma cue de um valor só não fecha dentro do último ato.** O motor só
estaciona a cue quando o ato sai de alcance, e o último ato nunca sai:
começando em 0.88 ela para em 0.741 no fundo absoluto da página, e o CTA
ficava permanentemente meio transparente. Medido, não deduzido. Regra
prática: no ato final, toda cue que precisa segurar começa em **0.84 ou
antes**. É por isso que as fases acima terminam em 0.74.


---

## A checagem de sentimento

Feita a frio contra a folha de contato, uma palavra por ato, antes de reabrir
este arquivo.

| Ato | Curva pretendida | Curva sentida | Veredito |
|---|---|---|---|
| 1 · A obra | Reconhecimento | **Contraste** | Diverge |
| 2 · O acúmulo | Incômodo | Incômodo | Bate |
| 3 · O destino | Clareza | Clareza | Bate |
| 4 · O documento | Confiança | Confiança | Bate |
| 5 · A virada | Alívio | Alívio | Bate |

**A divergência do ato 1 é de asset, não de desenho.** O reconhecimento ia
vir da pessoa ver o próprio pátio, e não existe foto de pátio ainda: as duas
colunas são chapas graduadas. Sem a fotografia o ato entrega uma proposição
tipográfica limpa, que é contraste, não reconhecimento. Não reescrevi a curva
para caber no que foi construído. O conserto é `01-entulho.jpg` e
`01-patio.jpg` entrarem, e a checagem tem que ser refeita depois disso.

Os três testes específicos:

- **O pico lê como pico?** Sim. Na folha é a maior mudança visual da página
  inteira (metade escura vira tela cheia clara) e ocupa a maior faixa de
  scroll.
- **Há silêncio na frente dele?** Sim. O ato 4 não tem mídia nem movimento
  contínuo, e o trecho logo antes da virada deixa a coluna direita vazia de
  propósito.
- **O fim resolve?** Sim. O último quadro segura manchete, CTA, telefone e
  rodapé em opacidade 1 nas três configurações (desktop, telefone,
  reduced motion).
