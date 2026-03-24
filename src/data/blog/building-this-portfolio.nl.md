# Dit Portfolio Bouwen: Een Pop Art Experiment

Toen ik begon met het bouwen van mijn portfolio, wist ik dat ik geen standaard developer-site wilde. Ik wilde iets met persoonlijkheid. Iets waardoor mensen stoppen met scrollen en echt kijken.

## Het Beginpunt

Het project begon als een vrij standaard React portfolio: donker thema, vloeiende animaties, een 3D hero met Three.js, en de gebruikelijke secties. Het werkte, maar het voelde... veilig. Zoals elke andere developer portfolio.

## De Draai naar Neo-Brutalisme

Het keerpunt kwam toen ik begon te experimenteren met kaartontwerpen. Ik vond deze stoere, neo-brutalistische stijl met dikke zwarte randen, harde slagschaduwen en geometrische accentvormen. Ineens had de site *karakter*. Ik schrapte het donkere thema, schakelde over naar een warme crème basis en herbouwde alles rond deze esthetiek.

De belangrijkste designelementen:

- **Harde schaduwen:** elke kaart, knop en invoerveld heeft een solide zwarte offset-schaduw
- **Dikke randen:** geen subtiele 1px randonzin
- **Space Mono:** een monospace lettertype voor koppen geeft het die dev/terminal-uitstraling
- **Halftoon dithering:** de sectie-overgangen gebruiken een echt halftoon-puntenpatroon, gerenderd op canvas voor performance
- **Zwevende accentvormen:** de projectkaarten hebben kleine geroteerde diamanten in mint en goud die animeren bij hover

## De Tech Stack

Niets exotisch. De fundamenten goed uitgevoerd:

- **React 18 + Vite:** snelle ontwikkeling, snelle builds
- **React Router v7:** met `useBlocker` voor het onderscheppen van navigatie en het afspelen van dither-overgangen
- **Framer Motion:** scroll-reveal animaties met `prefers-reduced-motion` ondersteuning
- **CSS Modules:** scoped styling, geen classnaam-conflicten
- **Canvas API:** voor de dithering-effecten (zowel sectie-overgangen als paginatransities)

## De Dither Transitie

Mijn favoriete feature. Wanneer je navigeert tussen pagina's, vult het scherm zich met groeiende halftoon-punten in een diagonale golf, waarna ze krimpen om de nieuwe pagina te onthullen. Het wordt gerenderd op een `<canvas>` element met `requestAnimationFrame` voor vloeiende 60fps animatie.

De truc was de integratie met React Router. Ik gebruikte `useBlocker()` om *alle* navigatie te onderscheppen (inclusief browser terug/vooruit), de cover-animatie af te spelen, de navigatie te laten voltooien terwijl het scherm bedekt is, en dan de reveal af te spelen. De timing goed krijgen zonder flitsen of dubbele transities was het moeilijkste deel van het hele project.

## Lokalisatie

De site ondersteunt Engels en Nederlands, met automatische detectie op basis van browsertaal. Elke tekst gaat door een simpele i18n context. Geen zware bibliotheken nodig. Blogposts hebben aparte `.md` bestanden per taal.

## Wat Ik Geleerd Heb

- **Minder is meer met animaties.** De scroll reveals zijn snel (0.35s) en subtiel. Zware animaties worden snel vervelend.
- **Brutalisme heeft terughoudendheid nodig.** Het is makkelijk om te overdrijven. De accentvormen en patronen zitten alleen op projectkaarten. Al het andere gebruikt alleen randen en schaduwen.
- **Canvas verslaat SVG voor herhalende vormen.** De dithering begon als 800+ SVG cirkels per overgang. Overschakelen naar canvas was een enorme performancewinst.
- **`useBlocker` is krachtig.** Het is de juiste manier om paginatransities te doen in React Router v7. Geen hacky popstate-listeners nodig.

## Wat Komt Er Nog

Deze site is een levend project. Ik blijf itereren op het design, blogposts toevoegen en misschien experimenteren met nieuwe interactiepatronen. Als je gedachten of feedback hebt, neem contact op via het contactformulier!
