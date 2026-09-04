import type { KbArticle } from '../types'

export const kbArticles: KbArticle[] = [
  {
    id: 'medicare-basics',
    title: 'Medicare Parts A, B, C, and D — Quick Map',
    summary: 'High-level map of Original Medicare, Advantage, Medigap, and Part D for agent walkthroughs.',
    tags: ['basics', 'parts', 'original', 'advantage', 'part-d'],
    body: [
      'Part A (Hospital Insurance) covers inpatient hospital, skilled nursing (with conditions), hospice, and some home health. Most people pay $0 premium if they or a spouse paid Medicare taxes long enough.',
      'Part B (Medical Insurance) covers outpatient care, doctor visits, preventive services, and durable medical equipment. Part B has a monthly premium and an annual deductible; after deductible, Medicare typically pays 80% of approved amounts for many services (client pays 20% with no annual OOP cap on Original Medicare alone).',
      'Part C (Medicare Advantage) is an alternative way to receive A + B benefits through a private plan. Most MA plans include Part D drug coverage and may offer extras (dental/vision/hearing, fitness). Networks and prior auth rules usually apply.',
      'Part D is outpatient prescription drug coverage. It is not included in Medigap. Clients on Original Medicare + Medigap typically need a standalone PDP. MA members usually get drugs through the MA-PD plan.',
      'Medigap (Medicare Supplement) helps pay Part A/B cost-sharing. Sold by private carriers, standardized by letter plan in most states (including Texas). Medigap does not cover Rx — pair with Part D.',
    ],
    relatedIds: ['medigap-vs-ma', 'part-d-basics'],
  },
  {
    id: 'medigap-vs-ma',
    title: 'Original + Medigap + Part D vs Medicare Advantage',
    summary: 'Decision framing for network flexibility, predictability of costs, and extras.',
    tags: ['medigap', 'advantage', 'comparison', 'network', 'travel'],
    body: [
      'Original Medicare + Medigap + Part D: Broad provider access (any provider accepting Medicare/assignment for A/B). Medigap can make cost-sharing predictable. Travel within the U.S. is generally easier. Tradeoff: higher combined premiums (Part B + Medigap + PDP) and fewer “extras.”',
      'Medicare Advantage: Often $0 or low plan premium (Part B premium still due). May include dental/vision/hearing and drug coverage in one card. Tradeoff: network (HMO/PPO), referrals/prior auth, and annual max OOP that can still be significant.',
      'Key agent questions: Do preferred doctors/hospitals participate? Is travel or snowbird status important? Does the client value predictable OOP vs lower monthly premium? Any ESRD, dual, or employer coverage complications?',
      'Always verify networks, formularies, and benefits in official CMS Plan Finder / carrier tools before enrollment recommendations.',
    ],
    relatedIds: ['medicare-basics', 'hood-county-context', 'enrollment-periods'],
  },
  {
    id: 'part-d-basics',
    title: 'Part D Drugs — Premium, Formulary, Cost-Sharing',
    summary: 'What to compare on PDPs and MA-PDs; Medigap never covers Rx.',
    tags: ['part-d', 'drugs', 'formulary', 'pdp', 'pharmacy'],
    body: [
      'Medigap no longer includes prescription drug coverage. Clients who need Rx coverage with Original Medicare must enroll in a standalone Part D plan (PDP), unless they have other creditable coverage.',
      'When comparing Part D (standalone or inside MA-PD), look at: (1) monthly premium, (2) deductible, (3) formulary (are the client’s drugs covered and on which tier?), (4) pharmacy network / preferred pharmacies, (5) cost-sharing (copay/coinsurance) and any utilization management (PA, step therapy, quantity limits).',
      'Late enrollment penalty can apply if a client goes without creditable drug coverage for 63+ continuous days after they are first eligible. Flag this early.',
      'Use Plan Finder / carrier tools with the actual drug list and pharmacies. Do not rely on memory or placeholder cards for enrollment.',
    ],
    relatedIds: ['medicare-basics', 'medigap-vs-ma'],
  },
  {
    id: 'esrd-coverage',
    title: 'ESRD and Medicare Timing',
    summary: 'Dialysis timing: Medicare often starts the 4th month of dialysis; transplant and MA rules matter.',
    tags: ['esrd', 'dialysis', 'special', 'eligibility'],
    body: [
      'For most people with End-Stage Renal Disease (ESRD) who start dialysis, Medicare coverage often begins the 4th month of dialysis. There are exceptions (e.g., self-dialysis training programs may allow earlier coverage — verify current CMS rules).',
      'Kidney transplant timing and coordination with employer group health plans can change the start date and who pays first. Document other coverage carefully.',
      'ESRD no longer automatically bars Medicare Advantage in the way older rules did; eligibility and plan participation still need current-year verification.',
      'Treat ESRD as a specialist-review path: confirm dialysis start month, transplant status, other insurance, and Part B enrollment timing before recommending a product path.',
    ],
    relatedIds: ['special-situations', 'enrollment-periods'],
  },
  {
    id: 'appeals-msn',
    title: 'MSN and First-Level Appeals (120 Days)',
    summary: 'Medicare Summary Notice appeal window and agent talking points.',
    tags: ['appeals', 'msn', 'claims', 'original'],
    body: [
      'On Original Medicare, clients receive a Medicare Summary Notice (MSN) — not a bill — summarizing claims processed.',
      'If the client disagrees with a denial or amount on the MSN, the first appeal (redetermination request) generally must be filed within 120 days of receiving the MSN. Confirm the date on the notice.',
      'Medicare Advantage and Part D have their own appeal/grievance processes and timelines (often starting with the plan). Do not mix MA appeal steps with Original Medicare MSN steps.',
      'Agent tip: Keep copies of MSNs, EOBs, and denial letters. Direct clients to the instructions printed on the notice or to 1-800-MEDICARE / official CMS resources.',
    ],
    relatedIds: ['medicare-basics'],
  },
  {
    id: 'enrollment-periods',
    title: 'AEP, OEP, SEP, and IEP — When Changes Are Allowed',
    summary: 'Enrollment windows agents use during Hood County consults, especially AEP starting October.',
    tags: ['aep', 'oep', 'sep', 'iep', 'enrollment'],
    body: [
      'IEP (Initial Enrollment Period): typically 7 months around the 65th birthday month (3 before, birthday month, 3 after) for Part B / plan enrollment when first eligible. Disability under 65 has related rules.',
      'AEP (Annual Enrollment Period): Oct 15 – Dec 7. Clients can join, switch, or drop MA and Part D plans for Jan 1 effective dates. Core selling season for Hood County starting October.',
      'OEP (Medicare Advantage Open Enrollment): Jan 1 – Mar 31. For clients already in an MA plan as of Jan 1 — one change to another MA or back to Original (+ PDP if needed). Not for people on Original-only to newly join MA (that is AEP/SEP territory).',
      'SEP (Special Enrollment Period): life events (move, loss of coverage, dual status changes, etc.). Document the qualifying event and effective-date rules carefully.',
      'Medigap has separate underwriting / guaranteed-issue / open enrollment rules (Texas Medigap open enrollment around Part B start). Do not assume AEP alone creates Medigap guaranteed issue.',
    ],
    relatedIds: ['medigap-vs-ma', 'special-situations', 'hood-county-context'],
  },
  {
    id: 'special-situations',
    title: 'Special Situations Checklist',
    summary: 'Under-65 disability, duals, employer coverage, moves, and when to slow down.',
    tags: ['disability', 'duals', 'employer', 'move', 'sep', 'special'],
    body: [
      'Under-65 disability: Medicare eligibility after SSDI waiting period (generally). Plan options and Medigap availability can differ; confirm age and disability status before pathing.',
      'Dual eligible (Medicare + Medicaid): Extra help / LIS, D-SNP / C-SNP options, and care coordination may apply. Verify Medicaid level and county Medicaid managed care context.',
      'Employer / union / retiree coverage: Creditable coverage affects Part D penalty; dropping employer coverage can be irreversible. Coordinate with benefits administrator before changing.',
      'Planning a move (including within Texas or out of county): Networks and plan service areas are county-based for many MA/PDP options. A move can create an SEP — document new address/county.',
      'When in doubt, pause product talk and verify eligibility windows and other coverage first.',
    ],
    relatedIds: ['enrollment-periods', 'esrd-coverage', 'part-d-basics'],
  },
  {
    id: 'hood-county-context',
    title: 'Hood County, TX — Local Consult Context',
    summary: 'Market framing for in-person consults in Hood County (Granbury area). PLACEHOLDER plan data only.',
    tags: ['hood-county', 'texas', 'local', 'aep', 'network'],
    body: [
      'Primary market for this tool: Hood County, Texas (Granbury and surrounding communities). Confirm the client’s county of residence — MA and PDP availability is service-area based.',
      'Common local priorities: preferred primary care and specialists in Granbury / Fort Worth referral patterns, hospital preference, pharmacy (chain vs independent), and seasonal travel.',
      'Plan cards in this app are clearly labeled PLACEHOLDERS — not 2026 premiums, star ratings, or networks. Replace them with carrier-approved data before any client-facing enrollment discussion.',
      'AEP begins mid-October. Use this walkthrough to structure the conversation, then verify every benefit, network, and formulary in official tools before application.',
    ],
    relatedIds: ['medigap-vs-ma', 'enrollment-periods', 'plan-placeholders'],
  },
  {
    id: 'plan-placeholders',
    title: 'How to Read PLACEHOLDER Plan Cards',
    summary: 'Why numbers are labeled PLACEHOLDER and how to swap in real carrier data.',
    tags: ['placeholder', 'plans', 'compliance', 'hood-county'],
    body: [
      'This app ships with illustrative Hood County plan cards marked PLACEHOLDER. They are for UI practice and conversation structure only.',
      'Never quote placeholder premiums, MOOP, or benefits as real. Official CMS Medicare Plan Finder and carrier SOBs / EOCs are the source of truth.',
      'To update: edit src/data/planPlaceholders.ts with carrier name, plan name, type, and clearly still-labeled fields until compliance review approves client-facing use — or remove cards until real data is loaded.',
      'Compliance posture: educational agent decision-support; not CMS-approved marketing material.',
    ],
    relatedIds: ['hood-county-context', 'medigap-vs-ma'],
  },
  {
    id: 'network-doctors',
    title: 'Doctors, Specialists, Hospitals & Network Importance',
    summary: 'How to capture provider preferences and map them to MA vs Medigap paths.',
    tags: ['network', 'doctors', 'hospital', 'providers'],
    body: [
      'Ask for PCP, key specialists, preferred hospital, and whether staying in-network is critical vs flexible.',
      'If network is critical and preferred doctors are out of many MA networks, lean Original + Medigap (+ PDP) after verifying Medigap eligibility/underwriting.',
      'If client accepts a defined network for lower premium / extras, MA may fit — but verify every named provider and facility in the plan directory for the correct year.',
      'PPO vs HMO matters for out-of-network access and referrals. Document answers in the summary panel notes.',
    ],
    relatedIds: ['medigap-vs-ma', 'hood-county-context'],
  },
  {
    id: 'budget-and-oop',
    title: 'Budget: Premium vs Out-of-Pocket Tradeoffs',
    summary: 'Framing monthly premium against deductible, copays, and annual MOOP.',
    tags: ['budget', 'premium', 'oop', 'moop'],
    body: [
      'Low monthly premium is not the same as low total cost. Original Medicare alone has no annual OOP maximum for Part B coinsurance; Medigap or MA changes that picture.',
      'MA plans advertise a maximum out-of-pocket (MOOP) for in-network A/B services. Clients can still hit high costs before MOOP.',
      'Compare: Part B premium (always) + plan premium + expected utilization (Rx, specialists, hospital risk) + extras value (DVH).',
      'Capture a monthly budget comfort zone in the walkthrough, then stress-test with “what if hospitalized?” scenarios using official numbers.',
    ],
    relatedIds: ['medigap-vs-ma', 'part-d-basics'],
  },
  {
    id: 'compliance-verify',
    title: 'Compliance Note — Verify Officially',
    summary: 'Required posture for this educational decision-support tool.',
    tags: ['compliance', 'cms', 'disclaimer'],
    body: [
      'This application is educational agent decision-support for in-person consultations. It is not CMS-approved marketing and does not replace required disclosures, SOBs, or Plan Finder.',
      'Always verify benefits, networks, formularies, premiums, and enrollment eligibility with official CMS and carrier tools for the correct plan year.',
      'Do not collect SSN or other unnecessary PII in this app. Optional local notes stay in the browser only.',
      'If presenting plan options, use approved materials and follow carrier / CMS marketing guidelines for AEP and SEPs.',
    ],
    relatedIds: ['plan-placeholders', 'enrollment-periods'],
  },
]

export function getArticleById(id: string): KbArticle | undefined {
  return kbArticles.find((a) => a.id === id)
}

export function searchArticles(query: string): KbArticle[] {
  const q = query.trim().toLowerCase()
  if (!q) return kbArticles
  const terms = q.split(/\s+/).filter(Boolean)
  return kbArticles.filter((article) => {
    const hay = [
      article.title,
      article.summary,
      ...article.tags,
      ...article.body,
    ]
      .join(' ')
      .toLowerCase()
    return terms.every((t) => hay.includes(t))
  })
}
