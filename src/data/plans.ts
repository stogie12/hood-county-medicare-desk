import type { PlaceholderPlanType, PlanPlaceholder } from '../types'

/**
 * Logan's selling-carrier roster for sit-down structure.
 * This is not a Hood County availability list and is not licensed 2026 plan data.
 */
export const sellingCarriers: ReadonlyArray<{
  id: string
  name: string
  planType: PlaceholderPlanType
  typicalProductFamily: string
}> = [
  {
    id: 'uhc',
    name: 'UnitedHealthcare',
    planType: 'MA/PDP',
    typicalProductFamily: 'Typically MA and/or PDP — verify for Hood County 2026',
  },
  {
    id: 'humana',
    name: 'Humana',
    planType: 'MA/PDP',
    typicalProductFamily: 'Typically MA and/or PDP — verify for Hood County 2026',
  },
  {
    id: 'aetna',
    name: 'Aetna',
    planType: 'MA/PDP',
    typicalProductFamily: 'Typically MA and/or PDP — verify for Hood County 2026',
  },
  {
    id: 'wellcare',
    name: 'Wellcare',
    planType: 'MA/PDP',
    typicalProductFamily: 'Typically MA and/or PDP — verify for Hood County 2026',
  },
  {
    id: 'bsw',
    name: 'Baylor Scott & White',
    planType: 'MA/PDP',
    typicalProductFamily: 'Typically MA and/or PDP — verify for Hood County 2026',
  },
  {
    id: 'bcbs-ar',
    name: 'Blue Cross Arkansas',
    planType: 'MA/PDP',
    typicalProductFamily: 'Typically MA and/or PDP — verify for Hood County 2026',
  },
  {
    id: 'silverscript',
    name: 'SilverScript',
    planType: 'PDP',
    typicalProductFamily: 'Typically PDP / Part D — verify for Hood County 2026',
  },
  {
    id: 'healthspring',
    name: 'HealthSpring',
    planType: 'MA/PDP',
    typicalProductFamily: 'Typically MA and/or PDP — verify for Hood County 2026',
  },
]

const PLACEHOLDER_PREMIUM = '$[PLACEHOLDER] — no 2026 premium loaded'
const PLACEHOLDER_MOOP = '$[PLACEHOLDER] — no 2026 MOOP, stars, or benefits loaded'
const COUNTY_DISCLAIMER =
  'Hood County consult market — ZIP / service-area availability NOT confirmed'

/**
 * PLACEHOLDER cards keyed to Logan's selling carriers.
 * Replace each row with licensed 2026 plan data before any client-facing quote.
 * Never present these as actual premiums, MOOP, star ratings, benefits, or local offers.
 */
export const planPlaceholders: PlanPlaceholder[] = sellingCarriers.map((carrier) => ({
  id: `ph-${carrier.id}`,
  carrier: carrier.name,
  planName: `[PLACEHOLDER] ${carrier.name} — paste licensed 2026 plan`,
  planType: carrier.planType,
  typicalProductFamily: carrier.typicalProductFamily,
  county: COUNTY_DISCLAIMER,
  premiumMonthly: PLACEHOLDER_PREMIUM,
  maxOop: PLACEHOLDER_MOOP,
  highlights: [
    carrier.typicalProductFamily,
    'No formulary, extras, or network directory loaded',
    'Do not quote until licensed 2026 data is pasted',
  ],
  caveats: [
    'PLACEHOLDER only — not a real 2026 plan',
    'Carrier name is Logan’s selling roster, not a confirmed Hood County / ZIP offer',
    'Verify Plan Finder and carrier materials for the client ZIP and plan year',
  ],
  placeholder: true,
}))
