# De Cyberpunk Red GM Toolkit Die Ik Wilde Hebben Toen Ik Begon

Ik DM al een tijdje Cyberpunk Red. Ik kan ontmoetingen improviseren, NPC's ter plekke verzinnen en een sessie draaiende houden. Maar die improvisatie kost energie, en hoe meer ik daarvan verbrand aan het genereren van een willekeurige verkopersinventaris of het onthouden van de exacte Nachtmarkt-tabellen, hoe minder ik overhoud voor de dingen die een sessie echt geweldig maken: reageren op spelerskeuzes, spanning opbouwen, stemmen doen.

Ik wilde het mechanische busywork automatiseren zodat ik me kon richten op GM zijn, niet op regelreferentie zijn. Dus bouwde ik een volledige toolkit in mijn portfolio.

## De Ontmoetingsgenerator

Vier tabbladen: Ontmoetingen, NPC's, Buit en Locaties. Druk op "Opnieuw Rollen" en nieuwe content stapelt zich bovenop, met oudere worpen die vervagen zodat je een geschiedenis kunt bijhouden.

**Willekeurige Ontmoetingen** geven je een vijandtype (Maelstrom, Arasaka-agenten, MAX-TAC), aantal, dreigingsniveau, scenario ("deal misgegaan in een parkeergarage") en een tactische opmerking ("vijanden hebben een netrunner die overwatch biedt").

**NPC Generator** rolt een compleet karakter: naam met straathandle, rol, persoonlijkheid, motivatie, cyberware-loadout en een volledig 10-stats blok. "Vex 'Phantom' Nakamura, Fixer. Charismatische gladde prater, bouwt een crimineel imperium. Cyberware: Kerenzikov, Cybereye (targeting scope), Monowire."

**Buittabellen** zijn waar het serieus werd. Ik wilde elk wapen uit het boek met daadwerkelijke smaaktekst. Niet alleen "Heavy Pistol" maar "Malorian Arms 3516. Johnny Silverhand's custom exemplaar. Er zijn er maar een handvol gemaakt. Te vinden bij: Alleen legendarische fixers. Als je moet vragen, kun je het niet betalen." Het buittabblad heeft een wapentype-filter zodat je kunt zeggen "laat me alle aanvalsgeweren zien" en de volledige catalogus krijgt met schade, kwaliteit, kosten en waar je ze kunt vinden.

## De Nachtmarktgenerator (Volgens de Regels)

Deze volgt de daadwerkelijke Cyberpunk Red-regels exact:

1. Gooi 1d6 twee keer voor twee winkelcategorieën (Eten & Drugs, Persoonlijke Elektronica, Wapens & Pantser, Cyberware, Kleding & Fashionware, Overlevingsuitrusting)
2. Gooi 1d10 per categorie voor hoeveel itemtypes beschikbaar zijn
3. Gooi d100 per item op de categorietabel

Elk resultaat toont de d100-worp, itemnaam, kosten en prijscategorie. Het komt overeen met wat je zou krijgen als je op de daadwerkelijke tabellen rolt, alleen dan direct.

Er is ook een Midnight Market-tabblad (Rang 9+ Fixer) dat 1d10 + 5 zeldzame items genereert uit alle categorieën.

## De Ontmoetingsbalancer

Je voegt je spelers toe met hun belangrijkste stats (REF, beste gevechtsvaardigheid, HP, pantser SP, gemiddelde wapenschade), drukt op "Analyseer" en het genereert vijf moeilijkheidsgraden gebaseerd op de CPR-regels:

| Moeilijkheid | Formule |
|---|---|
| Makkelijk | Spelers - 1 Mooks |
| Gemiddeld | Gelijk aantal Mooks aan spelers |
| Moeilijk | 1 Luitenant per 2 spelers + Mooks |
| Heel Moeilijk | 1 Mini Boss per 3 spelers + Mooks |
| Dodelijk | Cyberpsycho (alleen als de groep er klaar voor is) |

Het analyseert ook de groep op kwetsbaarheden: "2 spelers hebben lage HP (<25), ze kunnen in 1-2 hits door zware wapens neergaan" of "Groot krachtsverschil tussen spelers, zwakkere karakters kunnen zich buitengesloten voelen."

De NPC-statblokken komen overeen met het boek: Boosterganger (20 HP, SP 4), Security Officer (40 HP, SP 13), Cyberpsycho (55 HP, SP 11, vaardigheid 17).

## De Regels-wiki

Ik heb een aparte post geschreven hierover, maar de korte versie: 100 wiki-artikelen die het hele regelboek dekken, plus 400+ snelreferentieprocedures doorzoekbaar op trefwoord met onderwerpfilterchips. Typ "grapple" en krijg stapsgewijs. Typ "death save" en krijg het exacte mechanisme. Filter op "Gevecht" of "Netrunning" om te browsen.

## De Data

De volledige uitrustingscatalogus bevat:
- **40+ afstandswapens** met fabrikant, schade, ROF, magazijn, kwaliteit, kosten, smaaktekst en waar je ze kunt vinden
- **10+ melee-wapens** van gevechsmessen tot voorhamers
- **14 exotische wapens** met volledige unieke mechanismen (Malorian 3516, Kendachi Mono-Three, Rhinemetall Railgun, etc.)
- **13 munitietypes** met effecten
- **35+ cyberware-onderdelen** georganiseerd per slot
- **27+ uitrustingsitems** (elektronica, medisch, explosieven, gereedschap, pantser, voorraden)

Alle items hebben smaaktekst en een "Te vinden bij:"-veld zodat je weet waar karakters ze daadwerkelijk kunnen bemachtigen in Night City.

## Wat Ik Heb Geleerd

1. **Volg de daadwerkelijke regels.** Mijn eerste Nachtmarktgenerator verzon gewoon dingen. Het werkte prima voor improvisatie, maar het boek heeft specifieke tabellen die betere variatie produceren dan ik ter plekke zou bedenken.
2. **Smaaktekst doet ertoe.** "Heavy Pistol, 3d6, 100eb" is vergeetbaar. "Midnight Arms Borg. Enorme handkanon. Vernoemd naar wat er nodig is om de terugslag te hanteren" maakt dat je spelers het willen. Goede smaaktekst is gratis wereldbouw.
3. **Verificatie is essentieel.** Ik gebruikte LLM-gebaseerde gestructureerde data-extractie om de regels uit de PDF te halen, en voerde vervolgens een LLM-as-judge verificatiepass uit om te kruisverwijzen met de bron. De eerste versie had death saves omgekeerd en drugeffecten gehalluccineerd. De mechanismen waren dichtbij genoeg dat ik ze sessies lang "ongeveer goed" had gedaan, maar de exacte regels hebben betekent minder discussies en eerlijkere uitkomsten.
4. **Automatiseer het busywork, niet de creativiteit.** Ik wil geen tool die mijn sessies voor me runt. Ik wil er een die de saaie mechanische opzoekingen afhandelt zodat ik me kan richten op reageren op mijn spelers, sfeer opbouwen en de momenten improviseren die het spel memorabel maken.

Als je een CPR GM bent, het hele ding staat in de Tools-sectie van mijn portfolio. Rol wat ontmoetingen, genereer een Nachtmarkt, en laat me weten als je regels vindt die ik fout heb.
