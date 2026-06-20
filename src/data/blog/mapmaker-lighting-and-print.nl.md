# Map Maker Update: Verlichting, Schaduwen en Eindelijk een Printknop

In de oorspronkelijke blogpost over de map maker stond een lijstje met dingen die ik daarna wilde bouwen. Twee van de grootste: verlichting en een fatsoenlijk printproces. Allebei zijn ze er nu.

## Verlichting

Lichten op een battle map veranderen de hele sfeer. Een flikkerende tl-balk boven een serverrek, een enkel peertje in een steegje, tl-buizen in een corpo-gang. Dat telt mee voor de sfeer, en ook mechanisch — Cyberpunk Red heeft zichtbaarheidsregels die het gevecht beïnvloeden, en een map met echte lichten maakt meteen duidelijk welke gebieden donker zijn.

De map maker heeft nu een lichttool (druk op **L**). Twee typen: **puntlichten** (een cirkelvormige gloed vanuit één bron) en **barlichten** (capsulevormig, zoals een tl-buis). Beide berekenen occlusie — muren blokkeren het licht, zodat schaduwen correct op de geometrie erachter vallen.

![Puntlicht dat schaduwen werpt op wandtegels](/images/blog/mapmaker-lighting-and-print/lighting-point.png)

![Barlicht in een gang met occlusie](/images/blog/mapmaker-lighting-and-print/lighting-bar.png)

Elk licht heeft instelbare straal, intensiteit en kleur. Er is ook een "verberg bron"-optie die de fysieke lichtmarker uit de export haalt, zodat alleen de gloed overblijft — handig als de lichtbron gesuggereerd is in plaats van zichtbaar geplaatst.

Elementen kunnen nu ook vergrendeld worden. Als muren en vloeren eenmaal goed staan, vergrendel je ze zodat je ze niet per ongeluk verschuift terwijl je objecten erboven plaatst.

## Printen

PNG-export werkte prima voor digitaal gebruik, maar printen is anders. Cyberpunk Red gevechten spelen zich af op een fysieke tafel met miniaturen. Dat betekent A4, een goed DPI, en soms mappen die groter zijn dan één pagina.

Het printdialoogvenster regelt dat allemaal. Je stelt DPI in (150 voor conceptdrukken, 300 voor de uiteindelijke print), kiest vakjes per inch passend bij je miniatuurschaal, en de map wordt verdeeld over zoveel A4-pagina's als nodig zijn, met een live preview. De paginavolgorde is EU-first — kolommen van links naar rechts, daarna rijen van boven naar beneden. Zo plak je de pagina's op tafel zonder te hoeven nadenken over de volgorde.

![Printdialoog met meerpagina-preview en DPI-instellingen](/images/blog/mapmaker-lighting-and-print/print-dialog.png)

Grote mappen kunnen even duren om te renderen, dus er is nu ook een laadscherm tijdens PNG-export.

Ctrl+C en Ctrl+V voor kopiëren en plakken zijn ook in deze update terechtgekomen. Klein detail, maar het scheelt veel klikken bij het dupliceren van elementgroepen.
