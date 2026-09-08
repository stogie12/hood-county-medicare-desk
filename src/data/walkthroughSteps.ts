export interface StepDef {
  id: string
  title: string
  subtitle: string
  tipArticleIds: string[]
}

export const walkthroughSteps: StepDef[] = [
  {
    id: 'coverage',
    title: 'Current coverage',
    subtitle: 'What does the client have today?',
    tipArticleIds: ['medicare-basics', 'medigap-vs-ma', 'medicare-acronyms'],
  },
  {
    id: 'county',
    title: 'County & service area',
    subtitle: 'Confirm where they live for plan availability.',
    tipArticleIds: ['hood-county-context'],
  },
  {
    id: 'providers',
    title: 'Doctors, specialists & hospital',
    subtitle: 'Capture providers and how important the network is.',
    tipArticleIds: ['network-doctors', 'medigap-vs-ma', 'ma-plan-types'],
  },
  {
    id: 'drugs',
    title: 'Prescription drugs',
    subtitle: 'Medigap does not include Rx — Part D comparison matters.',
    tipArticleIds: ['part-d-basics'],
  },
  {
    id: 'preferences',
    title: 'Care style & extras',
    subtitle: 'Premium vs OOP, DVH extras, and travel.',
    tipArticleIds: ['budget-and-oop', 'medigap-vs-ma'],
  },
  {
    id: 'budget',
    title: 'Budget',
    subtitle: 'Monthly comfort zone (no PII required).',
    tipArticleIds: ['budget-and-oop'],
  },
  {
    id: 'special',
    title: 'Special situations',
    subtitle: 'ESRD, disability, duals, employer, move, enrollment window.',
    tipArticleIds: ['special-situations', 'esrd-coverage', 'enrollment-periods', 'appeals-msn'],
  },
  {
    id: 'summary',
    title: 'Recommendation summary',
    subtitle: 'Plan-type path, why, verify-next checklist, compliance.',
    tipArticleIds: ['compliance-verify', 'plan-placeholders'],
  },
]
