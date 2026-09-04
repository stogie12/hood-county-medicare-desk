# Medicare Consult Desk - Hood County, TX

Agent-facing web app for in-person Medicare consultations.

## Run

npm install
npm run dev

## Build

npm run build

## Edit KB: src/data/kbArticles.ts
## Edit plans: src/data/planPlaceholders.ts
## Recommendations: src/utils/recommendations.ts

PLACEHOLDER plans only. Verify with CMS/carrier tools. Not CMS-approved marketing.

## Features

- Home: start walkthrough or search KB
- Walkthrough with live summary panel (localStorage + Reset consult)
- Searchable tagged KB articles with walkthrough tip links
- Recommendation summary: plan-TYPE path, why, verify-next, compliance note
- No required SSN/name fields; optional local notes only
- Disclaimer banner on every page

## Tech

React + TypeScript + Vite + Tailwind CSS 4 + React Router + Lucide
