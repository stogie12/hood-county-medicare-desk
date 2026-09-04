import type { PlanPlaceholder } from '../types'

/**
 * PLACEHOLDER plan cards for Hood County, TX.
 * Replace with real carrier-approved 2026 data before client-facing quotes.
 * Never present these numbers as actual premiums or benefits.
 */
export const planPlaceholders: PlanPlaceholder[] = [
  {
    id: 'ph-ma-hmo-1',
    carrier: '[PLACEHOLDER Carrier A]',
    planName: '[PLACEHOLDER] Hood County MA HMO Example',
    planType: 'MA-HMO',
    county: 'Hood County, TX',
    premiumMonthly: '$[PLACEHOLDER]/0–XX]/premium',
    maxOop: '$[PLACEHOLDER] in-network MOOP',
    highlights: [
      'Includes Part D (verify formulary)',
      'Dental / vision / hearing extras — amounts PLACEHOLDER',
      'Local PCP network emphasis — VERIFY providers',
    ],
    caveats: [
      'PLACEHOLDER only — not a real 2026 plan',
      'HMO: referrals / network rules likely',
      'Confirm hospital and specialist participation',
    ],
    placeholder: true,
  },
  {
    id: 'ph-ma-ppo-1',
    carrier: '[PLACEHOLDER Carrier B]',
    planName: '[PLACEHOLDER] Hood County MA PPO Example',
    planType: 'MA-PPO',
    county: 'Hood County, TX',
    premiumMonthly: '$[PLACEHOLDER]/premium',
    maxOop: '$[PLACEHOLDER] in / out-of-network MOOP',
    highlights: [
      'PPO flexibility vs HMO — still verify OON costs',
      'Drug coverage included (MA-PD) — VERIFY',
      'Travel within service rules — VERIFY',
    ],
    caveats: [
      'PLACEHOLDER only — not a real 2026 plan',
      'OON benefits may have higher cost-sharing',
      'Prior authorization may still apply',
    ],
    placeholder: true,
  },
  {
    id: 'ph-pdp-1',
    carrier: '[PLACEHOLDER Carrier C]',
    planName: '[PLACEHOLDER] Texas PDP Example',
    planType: 'PDP',
    county: 'Hood County, TX (statewide PDP region)',
    premiumMonthly: '$[PLACEHOLDER] PDP premium',
    maxOop: 'N/A (drug stages / redesign — VERIFY year rules)',
    highlights: [
      'Pair with Original + Medigap when Rx needed',
      'Compare formulary tiers + preferred pharmacy',
      'Watch deductible and utilization management',
    ],
    caveats: [
      'PLACEHOLDER only — not a real 2026 plan',
      'Enter actual drug list in Plan Finder',
      'Creditable coverage / LEP check required',
    ],
    placeholder: true,
  },
  {
    id: 'ph-medigap-g',
    carrier: '[PLACEHOLDER Carrier D]',
    planName: '[PLACEHOLDER] Medigap Plan G Example',
    planType: 'Medigap',
    county: 'Hood County, TX (Texas standardized)',
    premiumMonthly: '$[PLACEHOLDER] Medigap premium (+ Part B)',
    maxOop: 'Primarily Part B deductible risk with Plan G — VERIFY letter plan',
    highlights: [
      'Works with Original Medicare providers accepting assignment',
      'Does NOT include Part D — add PDP separately',
      'Strong fit when network flexibility is critical',
    ],
    caveats: [
      'PLACEHOLDER only — not a real 2026 rate',
      'Underwriting / GI / open enrollment rules apply',
      'Texas Medigap letter benefits are standardized; price varies by carrier',
    ],
    placeholder: true,
  },
]
