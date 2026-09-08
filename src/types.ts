export type CoverageType =
  | 'original'
  | 'medigap'
  | 'ma'
  | 'employer'
  | 'medicaid'
  | 'none'
  | 'unsure'

export type NetworkImportance = 'critical' | 'important' | 'flexible' | 'unsure'

export type CareStyle = 'predictable' | 'flexible' | 'balanced' | 'unsure'

export type PremiumVsOop = 'low-premium' | 'low-oop' | 'balanced' | 'unsure'

export type TravelNeed = 'local' | 'seasonal' | 'frequent' | 'unsure'

export type EnrollmentWindow = 'aep' | 'oep' | 'sep' | 'iep' | 'unsure' | 'none'

export interface ConsultAnswers {
  currentCoverage: CoverageType[]
  county: string
  doctorsNotes: string
  specialistsNotes: string
  hospitalNotes: string
  networkImportance: NetworkImportance | ''
  takesRx: boolean | null
  rxNotes: string
  careStyle: CareStyle | ''
  premiumVsOop: PremiumVsOop | ''
  wantsDentalVisionHearing: boolean | null
  travelNeed: TravelNeed | ''
  monthlyBudget: string
  budgetNotes: string
  esrd: boolean | null
  under65Disability: boolean | null
  dualEligible: boolean | null
  employerCoverage: boolean | null
  planningMove: boolean | null
  enrollmentWindow: EnrollmentWindow | ''
  agentNotes: string
}

export interface WalkthroughState {
  stepIndex: number
  answers: ConsultAnswers
  updatedAt: string
}

export interface KbArticle {
  id: string
  title: string
  summary: string
  tags: string[]
  body: string[]
  relatedIds?: string[]
}

export type PlaceholderPlanType = 'MA' | 'MA/PDP' | 'MA-HMO' | 'MA-PPO' | 'PDP' | 'Medigap'

export interface PlanPlaceholder {
  id: string
  carrier: string
  planName: string
  planType: PlaceholderPlanType
  /** Generic family hint only — not a confirmed Hood County 2026 offer. */
  typicalProductFamily: string
  county: string
  premiumMonthly: string
  maxOop: string
  highlights: string[]
  caveats: string[]
  placeholder: true
}

export interface Recommendation {
  pathTitle: string
  pathType: 'original-medigap-pdp' | 'medicare-advantage' | 'pdp-focus' | 'specialist-review'
  why: string[]
  verifyNext: string[]
  complianceNote: string
}
