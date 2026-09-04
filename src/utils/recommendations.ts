import type { ConsultAnswers, Recommendation } from '../types'

const COMPLIANCE =
  'Educational agent decision-support only — not CMS-approved marketing. Verify all benefits, networks, formularies, premiums, and enrollment eligibility with official CMS Plan Finder and carrier tools before any enrollment. PLACEHOLDER plan cards in this app are not real 2026 offers.'

export function buildRecommendation(a: ConsultAnswers): Recommendation {
  const why: string[] = []
  const verifyNext: string[] = [
    'Confirm county of residence and plan year (AEP → Jan 1 effective).',
    'Verify every named doctor, specialist, and hospital in the plan directory.',
    'Run Part D / MA-PD comparison with full drug list and preferred pharmacies.',
    'Review SOB/EOC and required disclosures; use approved marketing materials only.',
  ]

  const networkCritical = a.networkImportance === 'critical'
  const wantsFlexibility =
    a.careStyle === 'flexible' || a.travelNeed === 'frequent' || a.travelNeed === 'seasonal'
  const wantsExtras = a.wantsDentalVisionHearing === true
  const lowPremium = a.premiumVsOop === 'low-premium'
  const lowOop = a.premiumVsOop === 'low-oop'
  const special =
    a.esrd === true ||
    a.under65Disability === true ||
    a.dualEligible === true ||
    a.employerCoverage === true

  if (a.esrd === true) {
    why.push(
      'ESRD flagged: Medicare often begins the 4th month of dialysis — confirm dialysis/transplant timing and other coverage before pathing.',
    )
    verifyNext.unshift(
      'Document dialysis start month / transplant status and Part A/B effective dates.',
    )
  }
  if (a.under65Disability === true) {
    why.push(
      'Under-65 disability flagged — confirm Medicare entitlement and Medigap/MA availability rules.',
    )
  }
  if (a.dualEligible === true) {
    why.push(
      'Dual-eligible flagged — check Extra Help / LIS and whether a D-SNP or other integrated option fits.',
    )
    verifyNext.push(
      'Verify Medicaid level and any dual-special-needs plan eligibility in Hood County.',
    )
  }
  if (a.employerCoverage === true) {
    why.push(
      'Employer/retiree coverage present — confirm creditable coverage and coordinate before dropping anything.',
    )
    verifyNext.push(
      'Call employer benefits admin; do not drop group coverage without written confirmation.',
    )
  }
  if (a.planningMove === true) {
    why.push(
      'Move planned — service area / SEP may apply; avoid locking into wrong county network.',
    )
    verifyNext.push('Document move date and new county; check SEP rules.')
  }
  if (a.takesRx === true) {
    why.push(
      'Rx in use: remember Medigap does not include drugs — compare PDP or MA-PD formulary and cost-sharing.',
    )
  }
  if (a.enrollmentWindow === 'aep') {
    why.push(
      'Enrollment window set to AEP (Oct 15–Dec 7) — primary Hood County selling season starting October.',
    )
  } else if (a.enrollmentWindow === 'oep') {
    why.push(
      'OEP selected — only for clients already in MA as of Jan 1; one change to another MA or back to Original + PDP.',
    )
  } else if (a.enrollmentWindow === 'sep') {
    why.push('SEP selected — document the qualifying event before enrollment.')
  }

  if (special && (a.esrd === true || a.employerCoverage === true)) {
    return {
      pathTitle: 'Specialist-review path — pause and verify eligibility first',
      pathType: 'specialist-review',
      why:
        why.length > 0
          ? why
          : [
              'Complex coverage situation — verify eligibility and other insurance before recommending a product type.',
            ],
      verifyNext,
      complianceNote: COMPLIANCE,
    }
  }

  if (networkCritical || (wantsFlexibility && !lowPremium) || lowOop) {
    if (networkCritical) {
      why.push(
        'Network importance is critical — Original Medicare + Medigap (+ Part D if Rx) usually preserves broad provider choice.',
      )
    }
    if (wantsFlexibility) {
      why.push(
        'Care style / travel favors flexibility often associated with Original + Medigap.',
      )
    }
    if (lowOop) {
      why.push(
        'Preference for lower out-of-pocket variability aligns with Medigap cost-sharing help (after underwriting/GI checks).',
      )
    }
    if (wantsExtras) {
      why.push(
        'DVH extras desired — note Medigap path usually needs separate dental/vision solutions; weigh against MA extras.',
      )
    }
    return {
      pathTitle: 'Original Medicare + Medigap + Part D (if Rx)',
      pathType: 'original-medigap-pdp',
      why:
        why.length > 0
          ? why
          : [
              'Default lean toward flexibility and predictable A/B cost-sharing via Medigap, with standalone Part D for drugs.',
            ],
      verifyNext: [
        ...verifyNext,
        'Check Medigap open enrollment / guaranteed issue / underwriting in Texas.',
        'Price Plan G (or appropriate letter) across carriers — rates are PLACEHOLDER until loaded.',
        'If Rx: compare PDPs on premium + formulary + pharmacy (Medigap never includes Rx).',
      ],
      complianceNote: COMPLIANCE,
    }
  }

  if (lowPremium || wantsExtras || a.careStyle === 'predictable') {
    if (lowPremium) {
      why.push(
        'Lower monthly premium preference often points to Medicare Advantage (Part B premium still applies).',
      )
    }
    if (wantsExtras) {
      why.push(
        'Dental/vision/hearing interest is commonly packaged in MA — verify actual allowances.',
      )
    }
    if (
      a.networkImportance === 'flexible' ||
      a.networkImportance === 'important'
    ) {
      why.push(
        'Client can work within a network if preferred providers participate — verify before recommending MA.',
      )
    }
    return {
      pathTitle: 'Medicare Advantage (MA-PD) path',
      pathType: 'medicare-advantage',
      why:
        why.length > 0
          ? why
          : [
              'Lean MA for integrated medical + drug + possible extras, subject to network verification.',
            ],
      verifyNext: [
        ...verifyNext,
        'Compare HMO vs PPO for this client’s specialists and travel pattern.',
        'Confirm MOOP, prior auth, and referrals in the plan SOB.',
        'If already on MA in January, remember OEP rules separately from AEP.',
      ],
      complianceNote: COMPLIANCE,
    }
  }

  if (a.takesRx === true && a.currentCoverage.includes('medigap')) {
    return {
      pathTitle: 'Part D (PDP) focus — Medigap does not include Rx',
      pathType: 'pdp-focus',
      why: [
        ...why,
        'Client has or wants Medigap-style coverage with prescriptions — prioritize PDP comparison (premium, formulary, cost-sharing).',
      ],
      verifyNext: [
        ...verifyNext,
        'Build drug list + pharmacies in Plan Finder.',
        'Screen for late enrollment penalty / creditable coverage history.',
      ],
      complianceNote: COMPLIANCE,
    }
  }

  return {
    pathTitle: 'Balanced review — compare MA vs Original + Medigap + Part D',
    pathType: 'medicare-advantage',
    why:
      why.length > 0
        ? why
        : [
            'Answers are mixed or incomplete — present both plan-TYPE paths at a high level, then verify providers and Rx in official tools.',
          ],
    verifyNext,
    complianceNote: COMPLIANCE,
  }
}

export function formatCoverageLabel(v: string): string {
  const map: Record<string, string> = {
    original: 'Original Medicare (A/B)',
    medigap: 'Medigap',
    ma: 'Medicare Advantage',
    employer: 'Employer / retiree',
    medicaid: 'Medicaid / dual',
    none: 'None / new to Medicare',
    unsure: 'Unsure',
  }
  return map[v] ?? v
}
