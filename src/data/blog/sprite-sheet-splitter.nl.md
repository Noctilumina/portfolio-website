# Sprite Sheet Splitter: Upload een Sheet, Krijg Losse Sprites

Als je werkt met game-assets ken je het formaat: één grote afbeelding met een raster van sprites op een effen achtergrondkleur. Deze tool neemt zo'n afbeelding en knipt hem automatisch op in losse sprites.

## Hoe Het Werkt

Upload een sprite sheet. De tool detecteert de achtergrondkleur door pixels langs de randen van de afbeelding te samplen — de meeste sprite sheets gebruiken een effen kleur (magenta, wit, zwart of transparant) als opvulling tussen sprites. Vervolgens scant het de kolommen en rijen op plaatsen waar pixels overeenkomen met die achtergrondkleur, en dat geeft de rasterindeling.

Je hoeft de rastergrootte niet op te geven. Als de sheet consistente tussenruimte heeft, figureert de tool het zelf uit.

![Sprite sheet met rasterdetectie-overlay die rijen en kolommen toont](/images/blog/sprite-sheet-splitter/detection-overlay.png)

Het gedetecteerde raster verschijnt als overlay op de preview. Als de automatische detectie randen mist — wat voorkomt bij sheets met lichte anti-aliasing op de achtergrond — kun je met een tolerantieschuifregelaar instellen hoe strikt achtergrondpixels worden gematcht.

Als het raster er goed uitziet, klik je op splitsen. Elke sprite wordt uitgeknipt en getoond in een previewraster. Download losse sprites of exporteer de hele set als ZIP.

![Raster van gesplitste sprites met individuele downloadknoppen](/images/blog/sprite-sheet-splitter/split-result.png)

## Waarom

Ik knipt sprite sheets voor de map maker met de hand op. Afbeelding openen, elk frame handmatig slicen, elk stuk exporteren, alles een naam geven. Voor een sheet met vijftien sprites is dat een kwartier mechanisch werk. Dit doet het in zo'n tien seconden.

Ook handig voor iedereen die werkt met pixel art-tilesets, retro game-assets of animatieframes als sprite sheets — en dat zijn behoorlijk veel mensen die games maken of met game-assets werken.
