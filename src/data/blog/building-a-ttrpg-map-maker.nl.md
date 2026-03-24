# Een TTRPG Map Maker Bouwen (Want de Gratis Zijn Bagger)

Ik run een paar Cyberpunk Red-campagnes. Als je ooit een fatsoenlijke battle map hebt geprobeerd te maken voor een tabletop RPG zonder een vermogen uit te geven, ken je de pijn. De meeste gratis tools zijn of lomp, beperkt, of zien eruit alsof ze in 2005 zijn ontworpen. De betaalde zijn prima, maar ik ben een developer. Hoe moeilijk kan het zijn?

Beroemde laatste woorden.

## De Frustratie

Elke sessie besteedde ik veel te lang aan het worstelen met een of andere map tool die bijna deed wat ik wilde, maar net niet helemaal. De problemen bleven zich opstapelen:

**Moderne assets bestaan eigenlijk niet.** Bijna elke map maker is gebouwd voor fantasy. Dungeons, tavernes, bossen, kastelen. Prima als je D&D runt, maar ik heb neon-verlichte Night City straten nodig, regenachtige steegjes, corpo-kantoren met flikkerende TL-verlichting en verdachte serverruimtes. Succes met het vinden van sprite sheets daarvoor. Ik genereer sommige assets met AI en teken andere zelf, maar het zou niet zo moeilijk moeten zijn.

**Alles is in Amerikaans papierformaat.** De meeste gratis maps die ik online kon vinden zijn in letter-formaat, niet A4. Dat betekent dat als ik ze probeer te printen er altijd witte randen rond de zijkanten zitten. De map moet of krimpen om te passen of wordt uitgerekt en samengedrukt. Geen van beide is ideaal als je een gridschaal wilt behouden voor gevechten.

**Watermerken verpesten de immersie.** Veel gratis maps hebben watermerken zoals "Cyberpunk Maps" of "Donate to My Patreon" in de achtergrond zitten. Ik snap het, makers verdienen erkenning, en het voelde verkeerd om ze gewoon weg te halen. Maar die tekst zichtbaar hebben tijdens een spannend vuurgevecht in een pakhuis helpt het de immersie niet bepaald.

**Passende maps vinden is een nachtmerrie.** Ik besteedde eeuwen aan het zoeken naar maps die bij het verhaal pasten dat ik wilde vertellen, en vaak moest ik compromissen sluiten. Gevechten over meerdere verdiepingen? Vergeet het. Ik kon geen bijpassende verdiepingen vinden voor hetzelfde gebouw. Het verhaal wordt beperkt door welke maps beschikbaar zijn, en dat is de omgekeerde wereld.

**Pen en papier werkt, maar...** Natuurlijk tekende ik maps met de hand. Pen op ruitjespapier, snelle schetsen, doet z'n werk. Maar als je eenmaal hebt gezien hoe een goed getekende top-down map met echte assets eruitziet op tafel, is het lastig om terug te gaan. De spelers zijn meer betrokken, het tactische gevecht is duidelijker, en eerlijk gezegd ziet het er gewoon gaaf uit. Ik wil dat niveau van kwaliteit zonder het gedoe.

Eerlijk gezegd zou het al enorm helpen om gewoon een bestaande map in te kunnen laden en er een eigen grid overheen te leggen. Niet alle maps hebben zichtbare tegels. Je hebt niet per se een grid nodig, maar ik vind het persoonlijk prettig omdat het dingen wat simpeler maakt.

## Het Plan

Dus ik bouw mijn eigen tool. Een browser-gebaseerde grid map editor waar je:

- Tegels op een grid kunt schilderen (muren, vloeren, terrein)
- Objecten en tokens kunt plaatsen
- Verlichting en zichtlijnen kunt instellen
- Maps kunt exporteren als afbeeldingen in correct A4-formaat voor printen
- Standaard met moderne/cyberpunk tilesets wordt geleverd, niet alleen fantasy

## Waar Ik Nu Ben

Nog vroeg in het proces. Ik ben aan het uitzoeken wat de juiste aanpak is voor de rendering-laag. Ga ik vol canvas? Gebruik ik een library zoals Pixi.js? Hoe ga ik om met layers en z-ordering zonder dat het een performance-nachtmerrie wordt?

Het grid-systeem werkt, basis tegel-schilderen zit erin, en ik heb een ruwe UI. Niets wat ik al zou laten zien, maar de basis staat.

![Vroege staat van de map maker](/images/blog/Mapmaker_initial_state.png)

## Het Moeilijke Deel

Rendering is eigenlijk het makkelijke deel. Het moeilijke is UX. Map tools hebben dit probleem dat je een ton aan functionaliteit nodig hebt maar het niet achter 50 menu's kunt verstoppen. Elke tool die ik heb gebruikt heeft hier last van. Krachtig maar vervelend om daadwerkelijk te gebruiken.

Ik probeer het zoveel mogelijk keyboard-gestuurd te houden. Snelle sneltoetsen voor veelgebruikte acties, minimaal klikken. Als ik meer dan twee keer moet klikken om een muur te plaatsen, klopt er iets niet.

## Wordt Het Ooit Af?

Waarschijnlijk niet in de "af product" zin. Het is een side project waar ik aan werk tussen werk, HEMA-training en alle andere dingen die om mijn tijd strijden. Maar dat is prima. Zelfs een half-af map maker die precies doet wat ik nodig heb is beter dan een gepolijste die dat niet doet.

Ik post hier updates naarmate het vordert. Als je een mede-DM bent die gefrustreerd is door dezelfde problemen, blijf op de hoogte.
