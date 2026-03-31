# Een Collectie Kunsttools Bouwen (Want Waarom Niet)

De tools-sectie van mijn portfolio begon met praktische developer-hulpmiddelen. CV-bouwer, JSON-formatter, dat soort dingen. Toen bracht ik een avond door met bladeren door Artvee's uitstekende collectie van publiek domein kunst, op zoek naar prints om in mijn huis te hangen. Ergens tussen Mondriaan en Bridget Riley dacht ik: dit kan ik ook genereren. En nu zijn het er zes kunsttools. Hier is wat ik heb gemaakt en hoe ze werken.

## Mondriaan Generator

Dit was de eerste kunsttool. Je stelt een rastergrootte in, kiest welke kleuren je wilt gebruiken uit Mondriaans klassieke palet (rood, blauw, geel, zwart, wit) en drukt op genereren. Het algoritme voegt willekeurig cellen samen om die kenmerkende asymmetrische rechthoeken te maken, en vult er vervolgens een aantal met kleur op basis van een dichtheidsschuifbalk.

![Mondriaan Generator met geel en zwart compositie](/images/blog/art-tools/mondriaan-generator-yellow.png)

Elke compositie is anders. De lijndikte is instelbaar, en alles exporteert als SVG zodat je schone vectoruitvoer krijgt op elk formaat.

![Nog een Mondriaan compositie met rood, blauw en geel](/images/blog/art-tools/mondriaan-generator-red.png)

## Halftoon Omzetter

Upload een afbeelding en zet het om naar een halftoonpatroon. De grootte van elke stip wordt bepaald door de helderheid van dat deel van de afbeelding. Donkere gebieden krijgen grotere stippen, lichtere gebieden kleinere.

![Kattenfoto omgezet naar halftoon stippen](/images/blog/art-tools/halftone-converter-cat.png)

Met de bediening kun je de stipafstand instellen, kiezen tussen cirkel-, vierkant- of ruitvorm, contrast aanpassen en de hoek van het stippenraster roteren. Er is ook een kleurmodus: zwart-wit, een enkele aangepaste kleur, of de originele beeldkleuren behouden. Exporteert als zowel SVG (vector) als PNG.

## Op Art Generator

Vijf verschillende optische-illusiepatronen die je kunt genereren en aanpassen. Concentrische ringen, moirecirkels, vervormde rasters, dambordvervormingen en golfinterferentiepatronen.

![Concentrische ringen optisch illusiepatroon](/images/blog/art-tools/op-art-concentric-rings.png)

Het leuke is de animatieschakelaar. Zet die aan en het patroon begint te bewegen, wat dat klassieke op-art hypnotische effect creëert. Elke parameter (frequentie, amplitude, lijndikte, kleuren) wordt live bijgewerkt op het canvas.

## Kleurenpalet uit Afbeelding

Upload een foto en extraheer de dominante kleuren. Gebruikt een median-cut algoritme dat recursief de kleurruimte opsplitst om de meest representatieve kleuren te vinden.

![Kleurenpalet geëxtraheerd uit een kattenfoto](/images/blog/art-tools/color-palette-cat.png)

Je kunt kiezen hoeveel kleuren je wilt extraheren (3 tot 12), en elke swatch toont de hex-waarde, RGB-uitsplitsing en het geschatte percentage van de afbeelding dat het beslaat. Klik op een swatch om de hex-waarde te kopiëren, of exporteer het hele palet als CSS-variabelen of een JSON-array.

## ASCII Art Generator

Zet elke afbeelding om naar ASCII-tekens. De tool koppelt pixelhelderheid aan tekens uit een dichtheidsbereik, waarbij spaties heldere gebieden voorstellen en dichte tekens zoals `@` en `#` donkere gebieden.

![ASCII-kunst van een kat in terminal-stijl preview](/images/blog/art-tools/ascii-art-cat.png)

Vier tekensets om uit te kiezen: standaard, bloktekens, een gedetailleerde set met meer gradatie, of een volledig aangepast bereik dat je zelf typt. De preview rendert in een terminal-achtig venster met donkere achtergrond en groene tekst. Uitvoerbreedte, contrast en inversie zijn allemaal instelbaar. Kopieer naar klembord of download als .txt-bestand.

## Geometrisch Patroon Tiler

Kies een vorm (zeshoek, driehoek, cirkel, ster, ruit of vierkant), kies een layoutpatroon (raster, baksteen, diagonaal of radiaal) en bekijk hoe het over het canvas tegelt.

![Roze zeshoekpatroon in rasterindeling](/images/blog/art-tools/pattern-tiler-hexagons.png)

Twee vulmodi: "Edge to Edge" tegelt het hele canvas met vormen die aan de randen worden afgesneden, terwijl "Whole Tiles" alleen volledige vormen toont. Alles is instelbaar: tegelgrootte, tussenruimte, rotatie, vulkleur, lijnkleur, lijndikte. Exporteert als PNG of SVG, en de printmodus vult de hele pagina met het patroon.

## Wat Ze Gemeen Hebben

Alle zes tools volgen dezelfde layout: bediening in de linkerzijbalk, live preview in het midden. Ze exporteren allemaal hun uitvoer (SVG, PNG of tekst, afhankelijk van de tool), en ze gebruiken allemaal dezelfde pop-art design tokens als de rest van het portfolio. De canvas-gebaseerde tools tekenen live opnieuw als je aan schuifbalken draait, dus er is geen aparte "render" knop nodig voor de meeste.

Het was leuk om te bouwen. De halftoon-omzetter sluit mooi aan bij de bestaande dither-paginatransities van het portfolio, en de Mondriaan-generator voelt thuis naast de pop-art styling. Als niets anders, maken ze de tools-pagina interessanter om door te bladeren.
