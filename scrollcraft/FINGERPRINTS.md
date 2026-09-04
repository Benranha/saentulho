# Fingerprints

Every site you build with **scroll-craft** gets one row here, appended after it
ships. The registry exists so your next build can prove it is a different page
rather than a re-skin of one you already made.

This file is **yours**. It starts empty on purpose: the gate is about not
repeating *yourself*, so it has nothing to say until you have built something.

The rules and the gate live in the skill's
`references/uniqueness.md`. Short version:

**A new build must differ from EVERY row below on at least 4 of the 6
dimensions.** Four against each row individually, not four on average across the
table. If a planned build fails, change the plan. Never edit a row to make room
for it.

The six dimensions are: **grammar**, **nav treatment**, **hero device**,
**act-sequence shape**, **close pattern**, **signature move**.

Dimension 6 is free, because a signature move is unique by definition. So the
gate really asks for three more out of the remaining five, and a build that
changes only grammar and world will fail it.

---

## The registry

| Build | Grammar | Nav treatment | Hero device | Act-sequence shape | Close pattern | Signature move | World | Port |
|---|---|---|---|---|---|---|---|---|

*(empty: your first build has nothing to clear, so build whatever the interview
points at. From the second onwards, this table is the constraint.)*

---

## What is taken

Add a bullet here whenever a build claims something a later build should avoid
reusing: a grammar, a nav treatment, a close pattern, a signature move, an
act-count-and-length band. The shared columns are what the next build inherits
as a constraint, so writing them down is the whole point.

Nothing is taken yet.

---

## Appending a row

After shipping, add one line to the table and one bullet to **What is taken** if
the build claimed something new. Fill every column. Say what the build shares
with existing rows.

Rows are append-only. A build that has been superseded stays in the table,
because the space it occupies is still occupied.

---

## Worked example

The skill's author kept a registry of twelve builds across eight page grammars.
If you want to see what a filled-in table looks like, and which shapes tend to
collide, read `EXAMPLES.md` in the scroll-craft repository. Treat it as
illustration only: those rows are somebody else's builds and they do **not**
constrain yours.

| # | Build | Gramática | Chrome | Herói | Sequência | Fechamento | Assinatura | Mundo | Porte |
|---|---|---|---|---|---|---|---|---|---|
| 1 | saentulho | Split stage | Sem barra. O divisor é o chrome: rótulo dos dois lados (`ENTULHO` / `ESPAÇO`) mais medidor de carga. Um botão flutuante de WhatsApp acompanha a página e some quando o CTA do fecho abre | Split 50/50 na primeira tela, marca no alto da coluna clara, caçamba vazia embaixo da escura, duas manchetes legíveis ao mesmo tempo, `pin` + `parallax` | pin 2.4 · scrub 2.8 · pin/reveal 2.2 · flow · pin 4.6 = 5 atos, 12.4vh | Colapso: o divisor corre para a borda, a coluna limpa toma a largura toda, CTA dentro da coluna vencedora, rodapé dentro do palco | A linha de carga: uma caçamba em SVG de duas camadas está na tela desde o topo e cada afirmação da página solta um caco dentro dela; no pico o caminhão engata e leva a caçamba cheia | Documental natural, carvão esverdeado e osso, verde da marca (#069A2C, amostrado do logo) | Denso industrial |

Compartilha com linhas anteriores: nada, é a primeira linha do registro.
A próxima build precisa divergir desta em 4 das 6 dimensões.
