# Map Maker Update: Zeven Nieuwe Plaatsingstools (En een Prefab Systeem)

Eén tegel tegelijk plaatsen werkt prima voor kleine ruimtes. Voor grotere mappen is het gewoon tijdrovend. Deze update voegt zeven nieuwe manieren toe om tegels te plaatsen, een automatiseringstool voor wanden, en een systeem voor herbruikbare groepen.

## De Nieuwe Stempeltools

**Rechthoekstempel** (F): Sleep een rechthoek en die wordt gevuld met de geselecteerde tegel. Voor vloeren is dit onmisbaar. Een kamer die voorheen veertig klikken kostte, kost nu één.

**Lijnstempel** (N): Sleep om tegels in een rechte lijn te plaatsen. Houd shift ingedrukt om te vergrendelen op de horizontale of verticale as. Handig voor wanden langs gangen, hekken, barricades, rijen serverrekken.

**Scatter** (X): Plaatst tegels willekeurig uit een set die je zelf samenstelt. Kies een paar verschillende vloertegels, verf scatter over een gebied, en je krijgt organische variatie in plaats van een herhalend patroon.

**Vervangen**: Klik een tegel op het canvas om hem te samplen, verf daarna over andere tegels om ze te vervangen door de gesampelde tegel. Handig als je halverwege van gedachten verandert over een tegel en alles wil omwisselen zonder te gummen.

![De nieuwe stempeltools in de toolzijbalk](/images/blog/mapmaker-new-tools/stamp-tools.png)

## Bouwtools

**Automatische wandranden**: Selecteer het vloergebied van een kamer, klik de knop, en randwandtegels worden automatisch rondom de buitenkant geplaatst. Scheelt veel fijn puzzelwerk bij rechthoekige kamers.

**Opening-besturing**: Deuren en ramen kunnen na plaatsing worden verplaatst langs hun wandrand en worden vergroot of verkleind. Je kunt ook instellen naar welke kant een deur openzwaait. Klinkt klein, maar het speelt constant op als een kamer net niet past in de layout die je had bedacht.

![Automatische wandrandplaatsing op een kamer en deurpositioneringsbesturing](/images/blog/mapmaker-new-tools/building-tools.png)

## Prefabs

Een prefab is een opgeslagen selectie van elementen die je later opnieuw als groep kunt plaatsen. Bouw een werkplek (bureau, stoel, monitor, kabelzooi), sla die op als prefab, en stempel hem over een kantoervloer. Werkt voor alles wat zich herhaalt: serverrekken, beveiligingspunten, barricades, wachtposten.

Prefabs worden opgeslagen in het projectbestand, dus ze blijven bewaard tussen sessies door en laden opnieuw wanneer je een map heropent.

![Prefab-opslagdialoog met een opgeslagen groep geselecteerd](/images/blog/mapmaker-new-tools/prefabs.png)

## Meetgereedschap

Druk op **M** voor het meetgereedschap. Klik twee punten op de map en je krijgt de afstand in rastervakken. Handig om te checken of een gang breed genoeg is voor twee tokens naast elkaar, of een scherpschutterspost zichtlijn heeft naar een deuropening, of een kamer de juiste schaal heeft.

## Verbeterde Meervoudige Selectie

Klikken door gestapelde elementen heen cirkelt nu door alle lagen in volgorde — als er een vloertegel, een object en een token in hetzelfde vakje zitten, klik je er gewoon doorheen om elk apart te selecteren zonder de lagenstructuur te hoeven aanpassen. Kopiëren en plakken behoudt ook de groepsstructuur, zodat een geselecteerde groep als geheel wordt geplakt in plaats van als losse elementen.
