import type { KbArticle } from '../types'

/** Filter chips shown first on the Knowledge base page (mid-sitting tabs). */
export const pinnedTags = ['MA plan types', 'Acronyms'] as const

export function getKbFilterTags(): string[] {
  const set = new Set<string>()
  kbArticles.forEach((a) => a.tags.forEach((t) => set.add(t)))
  const pinnedSet = new Set<string>(pinnedTags)
  const pinned = pinnedTags.filter((t) => set.has(t))
  const rest = Array.from(set)
    .filter((t) => !pinnedSet.has(t))
    .sort((a, b) => a.localeCompare(b))
  return [...pinned, ...rest]
}

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
    relatedIds: ['medigap-vs-ma', 'ma-plan-types', 'medicare-acronyms', 'part-d-basics'],
  },
  {
    id: 'medigap-vs-ma',
    title: 'Original + Medigap + Part D vs Medicare Advantage',
    summary: 'Decision framing for network flexibility, predictability of costs, and extras.',
    tags: ['medigap', 'advantage', 'comparison', 'network', 'travel'],
    body: [
      'Original Medicare + Medigap + Part D: Broad provider access (any provider accepting Medicare/assignment for A/B). Medigap can make cost-sharing predictable. Travel within the U.S. is generally easier. Tradeoff: higher combined premiums (Part B + Medigap + PDP) and fewer “extras.”',
      'Medicare Advantage: Often $0 or low plan premium (Part B premium still due). May include dental/vision/hearing and drug coverage in one card. Tradeoff: network (HMO/PPO), referrals/prior auth, and annual max OOP that can still be significant. MA must still cover Part A and B services (basic benefits) — the plan type (HMO, PPO, PFFS, MSA) changes how the client uses those benefits.',
      'Key agent questions: Do preferred doctors/hospitals participate? Is travel or snowbird status important? Does the client value predictable OOP vs lower monthly premium? Any ESRD, dual, or employer coverage complications?',
      'Always verify networks, formularies, and benefits in official CMS Plan Finder / carrier tools before enrollment recommendations. For HMO vs PPO vs less-common PFFS/MSA talking points, open the MA plan types article.',
    ],
    relatedIds: [
      'medicare-basics',
      'ma-plan-types',
      'medicare-acronyms',
      'hood-county-context',
      'enrollment-periods',
    ],
  },
  {
    id: 'ma-plan-types',
    title: 'Medicare Advantage Plan Types — HMO, PPO, PFFS, MSA',
    summary:
      'Sit-down map of MA plan types: coordinated care (HMO/POS, PPO), Private Fee-for-Service, and Medical Savings Accounts.',
    tags: ['MA plan types', 'advantage', 'network'],
    body: [
      'Medicare Advantage (Part C) is a private-plan way to receive Medicare. By rule, MA plans must cover the Part A and Part B services CMS treats as “basic benefits” — hospital, medical, and other Original Medicare–covered care. Cost-sharing, networks, referrals, and prior authorization can differ from Original Medicare. Most MA plans also include Part D drugs; extras such as dental, vision, or hearing are optional, not basic benefits. This desk is educational decision-support for in-person consults — not CMS-approved marketing. Do not quote premiums or named Hood County plans from memory; verify the current plan year in official tools.',
      'The types of Medicare Advantage plans you will walk through at the table are: Coordinated Care Plans (a network of preferred providers — mainly HMOs and PPOs), Private Fee-for-Service (PFFS) plans, and Medical Savings Account (MSA) plans. Start with type before shopping plan names. Availability is service-area based — confirm Hood County / ZIP first.',
      'Coordinated Care — HMO (some with POS): HMOs use a defined network. Clients usually choose a PCP, need referrals for specialists, and have little or no coverage out-of-network except emergencies. Some HMOs add a point-of-service (POS) benefit that allows limited out-of-network use, subject to plan rules and typically higher cost-sharing. Agent prompt: “Are they comfortable staying in-network, or do they need a POS-style escape hatch for a particular doctor?”',
      'Coordinated Care — PPO (local or regional): PPOs have a preferred network but usually allow out-of-network care at a higher cost, often without a referral. PPOs may be local (county / defined service area) or regional (multi-county or multi-state). Regional PPOs can matter for Granbury clients who see Fort Worth specialists or travel seasonally. Agent prompt: “Where do they actually get care — Hood County only, DFW referrals, or snowbird months?”',
      'Private Fee-for-Service (PFFS): The plan sets its own payment terms. A provider may accept or decline those terms for a visit (emergencies excepted). Some PFFS plans have a network; if not, the client should confirm the doctor or hospital will accept the plan before each service. PFFS is less common in many markets — check current Hood County availability in Plan Finder rather than assuming one is offered.',
      'Medical Savings Account (MSA): An MSA pairs a high-deductible MA plan with a medical savings account that Medicare funds. The client generally pays covered A/B services until the deductible; unused account dollars can roll forward. MSA plans typically do not include Part D — pair with a standalone PDP if they need outpatient drugs. Fit is narrow: higher-deductible tolerance and willingness to track an account. Treat as a specialist-review path, not a default recommendation.',
      'Sit-down checklist: (1) Confirm county/ZIP — type availability follows the service area. (2) Map named doctors and the preferred hospital to HMO vs PPO before comparing brands. (3) Frequent travel or snowbird status usually argues PPO or Original + Medigap over a tight HMO. (4) Lead with coordinated care; explain PFFS/MSA if the client already has one or asks. (5) Separate the conversations: basic benefits (A/B), drugs (Part D / MA-PD), and extras. (6) Verify network, referrals, out-of-network rules, MOOP, and formulary in CMS Plan Finder and carrier materials for the correct year.',
    ],
    relatedIds: [
      'medigap-vs-ma',
      'medicare-basics',
      'medicare-acronyms',
      'network-doctors',
      'hood-county-context',
    ],
  },
  {
    id: 'medicare-acronyms',
    title: 'Medicare Acronyms — Agent Quick Reference',
    summary:
      'Sit-down glossary: Parts, MA plan types, the SNP family, enrollment windows, costs, and AHIP/marketing terms.',
    tags: ['Acronyms', 'basics', 'advantage', 'enrollment'],
    body: [
      'Use this page mid-sitting when a letter-soup term comes up. Definitions are short, educational, and for agent decision-support — not CMS-approved marketing and not a substitute for the current AHIP module or CMS manuals. Verify any election period, SNP type, or dual category against this year’s rules.',
      'Hierarchy at the table: Original Medicare is Part A + Part B (federal program). On that path you may add Medigap (A/B cost-sharing) and a standalone PDP (Part D). Medicare Advantage (Part C) is an alternative way to receive A + B “basic benefits” through a private MAO; most MA plans are MA-PDs (medical + drugs). Do not stack Medigap with MA. See the MA plan types article for HMO / POS / PPO / PFFS / MSA talking points.',
      'Parts and product paths: Part A — Hospital Insurance (inpatient, SNF with conditions, hospice, some home health). Part B — Medical Insurance (doctors, outpatient, preventive, DME; premium + deductible). Part C / MA — Medicare Advantage private plan covering A/B basic benefits. Part D / PDP — outpatient drugs (standalone PDP or inside an MA-PD). MA-PD — MA plan that includes Part D. Medigap / Medicare Supplement — standardized letter plan that helps with A/B cost-sharing; no Rx. MAO — Medicare Advantage Organization (the carrier offering the MA plan).',
      'MA coordinated-care and other types (details in the MA plan types tab): HMO — defined network, usually PCP + referrals; little OON except emergencies. POS — HMO add-on allowing limited out-of-network use, typically at higher cost. PPO — preferred network; OON usually allowed at higher cost, often no referral; may be local or regional. PFFS — plan sets payment terms; providers may accept or decline (except emergencies). MSA — high-deductible MA plus a Medicare-funded savings account; typically no Part D (pair a PDP). MOOP — MA maximum out-of-pocket for A/B services (in-network vs OON can differ).',
      'SNP family (group these together — all are MA plan types for a CMS-defined population; confirm Hood County / ZIP availability before naming one): SNP — Special Needs Plan. C-SNP — Chronic Condition SNP (qualifying chronic conditions; use the current CMS list). D-SNP — Dual Eligible SNP (Medicare + Medicaid). I-SNP — Institutional SNP (usually a long-term care facility). IE-SNP — Institutional Equivalent SNP (lives in the community but needs an institutional level of care). FIDE SNP — Fully Integrated Dual Eligible SNP (Medicare + full Medicaid through one highly integrated plan). HIDE SNP — Highly Integrated Dual Eligible SNP (substantial Medicaid integration, not full FIDE). AIP — Applicable Integrated Plan (CMS integration label for certain D-SNPs that must coordinate with Medicaid). MMP — Medicare-Medicaid Plan (state/CMS combined plan; not offered in every state). D-SNP look-alike — a regular MA plan with many dual members that is not a D-SNP and does not have SNP Medicaid-coordination duties — do not treat it as a D-SNP.',
      'Duals / Medicaid Medicare (brief): QMB — Qualified Medicare Beneficiary (Medicaid help with Part A/B premiums and usually cost-sharing). SLMB — Specified Low-Income Medicare Beneficiary (Part B premium help). QI — Qualifying Individual (Part B premium help; limited program). FBDE — Full Benefit Dual Eligible (full Medicaid plus Medicare). ESRD — End-Stage Renal Disease (dialysis/transplant timing; see the ESRD article). Dual level changes SEP and D-SNP eligibility — verify Medicaid status, do not guess.',
      'Enrollment windows: IEP — Initial Enrollment Period (typically 7 months around first Part B eligibility). ICEP — Initial Coverage Election Period to join MA when first entitled to Part A and enrolled in Part B (related to IEP; confirm the client’s dates). AEP — Annual Enrollment Period, Oct 15–Dec 7, MA/PDP changes effective Jan 1. OEP — MA Open Enrollment, Jan 1–Mar 31, one change if already in MA as of Jan 1. OEPI — Open Enrollment Period for Institutionalized individuals. SEP — Special Enrollment Period (qualifying event). GEP — General Enrollment Period (typically Jan 1–Mar 31 to enroll in Part B if they missed IEP; MA/PDP rules around GEP differ — verify). GI — Guaranteed Issue (Medigap right to buy certain letter plans without underwriting; not created by AEP alone).',
      'Costs, subsidies, penalties: IRMAA — Income-Related Monthly Adjustment Amount (higher Part B and usually Part D premiums). LIS / Extra Help — Low-Income Subsidy that lowers Part D costs. LEP — Late Enrollment Penalty (Part D after 63+ days without creditable drug coverage; Part B has a separate LEP). Creditable coverage — other drug coverage at least as good as Part D (often employer) that can delay the Part D LEP. TrOOP — True Out-of-Pocket for Part D (what counts toward catastrophic / current-year redesign — verify this year). Star Ratings — CMS 1–5 quality scores for MA/PDP; never invent stars from this desk.',
      'Notices, IDs, claims: MSN — Medicare Summary Notice (Original Medicare; first-level appeal generally 120 days). MBI — Medicare Beneficiary Identifier (the number on the red-white-blue card). SOB — Summary of Benefits. EOC — Evidence of Coverage (the plan contract). ANOC — Annual Notice of Change (fall notice of next-year changes). ANP is not a standard CMS product acronym — if it comes up, they usually mean the fall ANOC / annual notice packet, or an agency agent-of-record form; say ANOC, EOC, or SOB by name. MAC — Medicare Administrative Contractor (processes Original Medicare claims). CMS — Centers for Medicare & Medicaid Services.',
      'AHIP / marketing / compliance (exam-usable, then verify current MCMG): AHIP — America’s Health Insurance Plans; common MA/Part D certification course. SOA — Scope of Appointment (document the products you will discuss before most MA/PDP marketing appointments). PEC — Pre-Enrollment Checklist (items to review before an enrollment; confirm the current CMS/carrier list — shops sometimes use PEC for other checklists). TPMO — Third-Party Marketing Organization (CMS marketing rules). FMO — Field Marketing Organization (IMO/upline; not a plan type). MCMG — Medicare Communications and Marketing Guidelines (CMS marketing rules; confirm the current title and year). FWA — Fraud, Waste, and Abuse. PHI — Protected Health Information (HIPAA). PII — Personally Identifiable Information (this desk: no SSN). SHIP — State Health Insurance Assistance Program (free counseling; Texas SHIP). HICAP — Health Insurance Counseling and Advocacy Program (California SHIP brand — not the Texas name).',
    ],
    relatedIds: [
      'ma-plan-types',
      'medicare-basics',
      'enrollment-periods',
      'part-d-basics',
      'medigap-vs-ma',
      'esrd-coverage',
      'special-situations',
      'appeals-msn',
      'compliance-verify',
    ],
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
    relatedIds: ['medicare-basics', 'medigap-vs-ma', 'medicare-acronyms'],
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
    relatedIds: ['special-situations', 'enrollment-periods', 'medicare-acronyms'],
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
    relatedIds: ['medicare-basics', 'medicare-acronyms'],
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
    relatedIds: ['medigap-vs-ma', 'special-situations', 'hood-county-context', 'medicare-acronyms'],
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
    relatedIds: ['enrollment-periods', 'esrd-coverage', 'part-d-basics', 'medicare-acronyms'],
  },
  {
    id: 'hood-county-context',
    title: 'Hood County, TX — Local Consult Context',
    summary: 'Market framing for in-person consults in Hood County (Granbury area). PLACEHOLDER plan data only.',
    tags: ['hood-county', 'texas', 'local', 'aep', 'network'],
    body: [
      'Primary market for this tool: Hood County, Texas (Granbury and surrounding communities). Confirm the client’s county of residence — MA and PDP availability is service-area based.',
      'Common local priorities: preferred primary care and specialists in Granbury / Fort Worth referral patterns, hospital preference, pharmacy (chain vs independent), and seasonal travel.',
      'Plan cards show Logan’s selling carriers (UnitedHealthcare, Humana, Aetna, Wellcare, Baylor Scott & White, Blue Cross Arkansas, SilverScript, HealthSpring) and are clearly labeled PLACEHOLDER. That roster is not a confirmation any carrier offers a plan in a given Hood County ZIP. No 2026 premiums, star ratings, or networks are loaded — paste licensed data before any client-facing enrollment discussion.',
      'AEP begins mid-October. Use this walkthrough to structure the conversation, then verify every benefit, network, and formulary in official tools before application.',
    ],
    relatedIds: ['medigap-vs-ma', 'ma-plan-types', 'enrollment-periods', 'plan-placeholders'],
  },
  {
    id: 'plan-placeholders',
    title: 'How to Read PLACEHOLDER Plan Cards',
    summary: 'Why numbers are labeled PLACEHOLDER and how to swap in real carrier data.',
    tags: ['placeholder', 'plans', 'compliance', 'hood-county'],
    body: [
      'Cards on Home and the walkthrough summary are keyed to Logan’s selling carriers: UnitedHealthcare, Humana, Aetna, Wellcare, Baylor Scott & White, Blue Cross Arkansas, SilverScript, and HealthSpring. Each row is marked PLACEHOLDER. The names are a roster for sit-down structure — not a claim that any carrier is offered in a specific Hood County ZIP.',
      'Product-type lines are generic family hints only (SilverScript is typically PDP / Part D; the others are typically MA and/or PDP). They are labeled “typical product family — verify for Hood County 2026.” Do not treat them as confirmed local 2026 offers.',
      'Never quote placeholder premiums, MOOP, star ratings, or benefits as real. Official CMS Medicare Plan Finder and carrier SOBs / EOCs are the source of truth.',
      'To update: edit src/data/plans.ts (re-exported from src/data/planPlaceholders.ts) with licensed 2026 plan name, type, premium, MOOP, and benefits — keep PLACEHOLDER labels until compliance review approves client-facing use.',
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
      'PPO vs HMO matters for out-of-network access and referrals. Use the MA plan types article for HMO/POS, local vs regional PPO, and the less-common PFFS and MSA talking points. Document answers in the summary panel notes.',
    ],
    relatedIds: ['medigap-vs-ma', 'ma-plan-types', 'hood-county-context'],
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
