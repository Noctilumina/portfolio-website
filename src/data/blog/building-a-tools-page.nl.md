# Een Tools-pagina Bouwen (Want Mijn Portfolio Werd Te Vol)

Ik maak al een tijd tools. Een CV-bouwer hier, een markdown-editor daar, een JSON-formatter voor wanneer ik te lui ben om een volledige IDE te openen. Ze lagen in willekeurige folders's, half vergeten. Toen realiseerde ik me: mijn portfolio heeft de infrastructuur al. Waarom geef ik ze geen eigen plek?

## Het Probleem

Mijn portfolio begon rommelig aan te voelen. Projecten, blogposts, een CV-pagina, en nu wilde ik ook deze utility tools laten zien. Ze bij de "Projecten"-sectie proppen voelde niet goed. Het zijn geen projecten in de traditionele zin. Het zijn dingen die ik heb gebouwd omdat ik ze nodig had.

## De Oplossing: Een Aparte Tools-pagina

Ik heb een `/tools` route gemaakt met een eigen overzichtspagina. Elke tool krijgt een kaart met een titel, beschrijving, tech-tags, en ofwel een interne route (voor tools die in de site zijn gebouwd) of externe links (voor losse repo's).

De tools-pagina heeft:
- **Fuzzy zoeken**: typ "json" of "markdown" en het filtert direct
- **Categorie-filterchips**: filter op wat de tool doet (Productiviteit, Developer, Creatief, TTRPG, etc.)
- **Pop-art chipstijl**: de filterchips gebruiken dezelfde ingedrukte-knop animatie als de rest van de site

## Wat Staat Er Op

Op dit moment 9 tools:

- **CV Bouwer**: vul je gegevens in, krijg een live tweekoloms CV-preview, print als PDF. Vooraf ingevuld met mijn eigen data als demo
- **Markdown Editor**: schrijf markdown, bekijk het gerenderd in de pop-art stijl van het portfolio
- **JSON Formatter**: plak, verfraai, minimaliseer, of verken als inklapbare boom
- **Diff Checker**: tekstvergelijking naast elkaar met markering per regel
- **CSS Stijl Verkenner**: kies een designstroming (Pop Art, Cyberpunk 2077, Glassmorphism, etc.) en pas elke CSS-eigenschap aan met sliders
- **Cyberpunk Red Generator**: willekeurige ontmoetingen, NPC's, buit en Nachtmarkten voor mijn TTRPG-sessies
- **CPR Regelreferentie**: een volledige doorzoekbare wiki van het Cyberpunk Red-regelboek (meer hierover in een andere post)
- Plus placeholders voor mijn Image Tagger, Sprite Selector en TTRPG Map Maker

## Geleerde Lessen

1. **Maak het overzicht niet te complex.** Een simpel grid met zoeken en filterchips is alles wat je nodig hebt.
2. **Interne tools zijn beter dan externe links.** Als een tool in je portfolio leeft, kunnen bezoekers het daadwerkelijk uitproberen. Een GitHub-link is voor de meeste mensen een dood spoor.
3. **Vul vooraf in met echte data.** De CV-bouwer laadt met mijn eigen CV-informatie. Het toont de tool direct in actie in plaats van een leeg formulier te presenteren.
4. **Categorietags zijn belangrijker dan tech-tags.** Niemand filtert tools op "React" of "CSS Modules." Ze filteren op "wat doet dit ding?"

## Wat Nu

Ik blijf waarschijnlijk tools toevoegen naarmate ik ze bouw. De CSS Stijl Verkenner begon als een simpele schaduwgenerator en groeide van daaruit, zoals dat soort dingen gaat.
