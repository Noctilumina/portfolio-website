# Een Cyberpunk Red Regels-wiki Bouwen (Van PDF naar 500 Doorzoekbare Items)

Ik DM een Cyberpunk Red-campagne en ik kan prima met de regels overweg. Ik draai lang genoeg sessies om door de meeste situaties heen te improviseren. Maar elke minuut die ik besteed aan het opzoeken van een specifieke DV of het dubbelchecken hoe suppressive fire werkt, is een minuut die ik niet besteed aan het daadwerkelijke GM'en. De improvisatie, de NPC-stemmen, het verhaal, dat is het leuke deel. Door een PDF van 400 pagina's bladeren niet.

Dus heb ik een doorzoekbare regels-wiki gebouwd. In mijn portfolio. Met een panieknop.

## Het Efficiëntieprobleem

Ik kon de regels altijd wel vinden. Maar "uiteindelijk" betekent dat de flow van een scène breekt. Grappling staat op pagina 176. Death saves op pagina 222. De Nachtmarkt-tabellen op pagina 337. Ik vond het wel, maar tegen die tijd is de spanning die ik had opgebouwd verdwenen en zit iedereen op zijn telefoon.

Ik wilde mijn energie besteden aan het memorabel maken van sessies, niet aan het zijn van een regelneuzige jurist. Dus had ik nodig:
1. Een **snelreferentie** voor "hoe werkt X?" met stapsgewijze procedures, direct beschikbaar
2. Een **volledige wiki** met doorzoekbare, onderling gelinkte artikelen voor voorbereiding en diepere duiken

## De Regels Extraheren

Het Cyberpunk Red-kernregelboek is een PDF. Ik gebruikte een **retrieval-augmented generation** aanpak: specifieke paginareeksen naar tekst extraheren, en vervolgens een LLM gebruiken voor **gestructureerde data-extractie**, waarbij ruwe tekst en tabellen werden omgezet naar georganiseerde wiki-items met consistente schema's (ID, titel, categorie, markdown-inhoud, kruisverwijzingen).

Voor grotere secties gebruikte ik **taakdecompositie**, waarbij het boek werd opgesplitst in thematische stukken die parallel werden verwerkt door aparte LLM-agents. Elke agent had een gefocust bereik (gevechtsmechanismen, uitrustingscatalogi, lore) wat de extractienauwkeurigheid verbeterde ten opzichte van alles tegelijk proberen te verwerken.

## De Wiki: 100 Artikelen, 23 Categorieën

De wiki heeft een zijbalk + inhoud-layout. Klik op een categorie, klik op een artikel, lees de regels. Interne links gebruiken een `[[entry-id]]` syntax die wordt omgezet naar klikbare kruisverwijzingen.

Categorieën dekken alles: Statistieken, Vaardigheden, Gevecht, Schade & Pantser, Melee, Afstandswapens, Netrunning, Genezing, Kritieke Verwondingen, Reputatie, Voertuiggevecht, Drugs, alle 10 Rollen, Cyberware, Night City (districten, bendes, locaties), Uitrustingscatalogi, GM Tools, Karaktercreatie, Levensstijl, Lore & Geschiedenis, Corporaties, Dagelijks Leven en Avonturen.

Tabellen worden netjes weergegeven met pop-art styling die bij de rest van het portfolio past. Dit is belangrijk omdat het CPR-regelboek *vol* staat met tabellen.

## De Snelreferentie: 400+ Paniekscenario's

Dit is het deel waar ik het meest enthousiast over ben om te gebruiken. De "Snelref"-modus heeft een grote zoekbalk bovenaan. Typ "grapple" of "death save" of "autofire" en je krijgt direct een stapsgewijze procedurekaart met de exacte mechanismen vetgedrukt.

400+ scenario's georganiseerd in 17 onderwerpscategorieën met filterchips:

- **Gevecht (72):** Hoe je iemand neerschiet, hoe autofire werkt, elk wapentype, elk exotisch wapen, elk munitietype, tactische situaties
- **Medisch (23):** Death saves, genezing, elke kritieke verwonding individueel, chirurgie, Trauma Team
- **Uitrusting (53):** Elk wapen uitgelegd, pantserstrafffen, munitievergelijking, koopgidsen
- **Netrunning (37):** Stapsgewijs netrunnen, elk programma, elke Black ICE
- **Rollen (32):** Wat elke rol kan doen, elke subvaardigheid uitgelegd
- **Sociaal (20):** Overtuiging, facedowns, onderhandeling, contacten
- Plus: Stats, Vaardigheden, Cyberware, Drugs, Voertuigen, Omgeving, Night City, Lore, GM Tips, Karaktercreatie, Levensstijl

## Verificatie: LLM-as-Judge

Het punt met LLM-gegenereerde inhoud is dat het vol vertrouwen dingen fout heeft op manieren die moeilijk te spotten zijn. Mijn eerste extractiepass had death saves omgekeerd, grapple-schade fout, suppressive fire die schade deed (doet het niet), en drugeffecten die volledig gehalluccineerd waren.

Om dit op te vangen gebruikte ik een **LLM-as-judge** patroon: aparte verificatie-agents die elke snelreferentie kruislings vergeleken met de bron-PDF-tekst en afwijkingen markeerden. Dit is in essentie **geautomatiseerde peer review**, waarbij de beoordelaar-agent geen kennis heeft van wat de extractie-agent heeft geproduceerd en puur evalueert tegen het bronmateriaal.

De beoordelaars vonden 67 fouten in 47 items, plus 35 ontbrekende mechanismen:

- Death saves: gooi ONDER BODY om te overleven, 10 faalt altijd (extractie-agent had het omgekeerd)
- Kritieke verwondingen worden getriggerd door twee of meer zessen op schadedobbelstenen (niet door het overschrijden van wonddrempels, een **confabulatie** waarbij de LLM plausibel klinkende maar incorrecte logica invulde)
- Valschade is 2d6 per 10m en pantser helpt WEL (volledig verzonnen schadeschaal)
- Elk drugitem had gehalluccineerde statbonussen
- Meerdere "bendes" kwamen uit Cyberpunk 2077, niet uit het RED-kernboek (**domeincontaminatie** uit trainingsdata)

Het beoordelaarspatroon ving problemen op die ik zelf niet zou hebben opgemerkt, aangezien veel van de fouten mechanisch redelijk klonken. Het is een goede herinnering dat LLM-extractie systematische validatie nodig heeft, niet alleen een snelle blik.

## Het Testen

Ik heb het nog niet in een live sessie kunnen gebruiken, maar ik ben teruggegaan door mijn aantekeningen van vorige sessie en heb retroactief alle regels opgezocht waar ik mee worstelde of voor moest pauzeren. Elk van die momenten komt nu direct op in de snelreferentie. Grappling, suppressive fire, een specifiek drugeffect, hoe shotgun shells daadwerkelijk spreiden.

Volgende sessie is de echte test. Ik ben van plan het open te hebben op mijn laptop naast mijn aantekeningen om te zien of het het tempo daadwerkelijk op peil houdt zoals ik hoop.
