# Convertor

Interaktiv presentationssida byggd i Next.js för Convertor. Projektet bevarar den ursprungliga visuella identiteten med samma färgpalett, samma berättande sektioner och samma scrollidé i heron, men i en modernare och mer stabil kodbas.

## Vad projektet innehåller

- En single-page upplevelse med sektionerna `Välkommen till`, `Vi är passionerade`, `Vi är prestigelösa`, `Vi är resultatdrivna` och `Vi är doers`.
- En hero-sektion där den turkosa ellipsen reagerar på scroll och touch.
- Responsiv navigation och mobil meny.
- Bildoptimering via `next/image`.

## Teknik

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 3

## Lokal körning

Installera beroenden:

```bash
npm install
```

Starta utvecklingsläge:

```bash
npm run dev
```

Bygg produktionsversion:

```bash
npm run build
```

Kör lint:

```bash
npm run lint
```

## Versionsstrategi

Repo:t bör använda:

- `main` för den aktuella produktionen
- tags för historiska versionspunkter
- ett litet antal `release/*`-grenar bara för de versioner som också ska ha egna Netlify branch deploys

Det här följer bättre praxis än att låta varje experiment eller deploy leva kvar som en separat långlivad branch.

## Rekommenderade historiska milstolpar

De viktigaste versionspunkterna i den äldre deploykedjan kan representeras så här:

- `v0.1.0` – grundversionen före scrollspåret
- `v0.2.0` – första tydliga scrollförbättringen från 24 april 2024
- `v0.3.0` – mobile-first-steg från 25 april 2024
- `v0.4.0` – touchscroll stabiliserad den 27 april 2024
- `v0.5.0` – sista historiska deploylinjen från 28 april 2024
- `v1.0.0` – moderniserad huvudversion

## Netlify-upplägg

För ett rent och hållbart upplägg på Netlify rekommenderas:

- `main` som production branch med automatisk deploy till huvud-URL:en
- `release/v0.2`, `release/v0.3`, `release/v0.4` och `release/v0.5` som branch deploys för äldre publika versionslänkar
- Deploy previews för framtida förbättringar via pull requests

Det ger en huvuddeploy som alltid uppdateras automatiskt, samtidigt som du kan behålla ett litet antal tydliga historiska versionsdeployer under samma Netlify-site.

## Förbättringar i den moderniserade versionen

- Mer stabil scroll- och touchlogik i hero-sektionen
- Bättre metadata och svensk språkkonfiguration
- Bättre bildhantering och prestanda genom `next/image`
- Städade beroenden och modernare lint-skript
- Gemensam reveal-logik för innehållssektionerna
