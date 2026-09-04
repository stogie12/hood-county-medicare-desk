import type { ConsultAnswers } from '../types'
import { formatCoverageLabel } from '../utils/recommendations'

interface SummaryPanelProps {
  answers: ConsultAnswers
  stepLabel: string
}

function Row({ label, value }: { label: string; value: string }) {
  if (!value || value === '—') return null
  return (
    <div className="border-b border-slate-100 py-2 last:border-0">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <div className="mt-0.5 text-sm font-medium text-slate-900 whitespace-pre-wrap">
        {value}
      </div>
    </div>
  )
}

function yn(v: boolean | null): string {
  if (v === true) return 'Yes'
  if (v === false) return 'No'
  return ''
}

export function SummaryPanel({ answers, stepLabel }: SummaryPanelProps) {
  const coverage =
    answers.currentCoverage.length > 0
      ? answers.currentCoverage.map(formatCoverageLabel).join(', ')
      : ''

  const providers = [
    answers.doctorsNotes && `PCP: ${answers.doctorsNotes}`,
    answers.specialistsNotes && `Specialists: ${answers.specialistsNotes}`,
    answers.hospitalNotes && `Hospital: ${answers.hospitalNotes}`,
    answers.networkImportance && `Network: ${answers.networkImportance}`,
  ]
    .filter(Boolean)
    .join('\n')

  const specials = [
    answers.esrd !== null && `ESRD: ${yn(answers.esrd)}`,
    answers.under65Disability !== null &&
      `Under-65 disability: ${yn(answers.under65Disability)}`,
    answers.dualEligible !== null && `Duals: ${yn(answers.dualEligible)}`,
    answers.employerCoverage !== null &&
      `Employer coverage: ${yn(answers.employerCoverage)}`,
    answers.planningMove !== null && `Planning move: ${yn(answers.planningMove)}`,
    answers.enrollmentWindow && `Window: ${answers.enrollmentWindow.toUpperCase()}`,
  ]
    .filter(Boolean)
    .join('\n')

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-slate-850 px-4 py-3 text-white rounded-t-2xl">
        <div className="text-xs font-semibold uppercase tracking-wide text-brand-200">
          Live consult summary
        </div>
        <div className="mt-1 text-sm font-medium text-slate-200">{stepLabel}</div>
      </div>
      <div className="max-h-[70vh] overflow-y-auto px-4 py-2">
        <Row label="County" value={answers.county} />
        <Row label="Current coverage" value={coverage} />
        <Row label="Providers / network" value={providers} />
        <Row
          label="Prescriptions"
          value={
            answers.takesRx === null
              ? ''
              : `${yn(answers.takesRx)}${answers.rxNotes ? ` — ${answers.rxNotes}` : ''}`
          }
        />
        <Row
          label="Preferences"
          value={[
            answers.careStyle && `Care style: ${answers.careStyle}`,
            answers.premiumVsOop && `Premium vs OOP: ${answers.premiumVsOop}`,
            answers.wantsDentalVisionHearing !== null &&
              `DVH extras: ${yn(answers.wantsDentalVisionHearing)}`,
            answers.travelNeed && `Travel: ${answers.travelNeed}`,
          ]
            .filter(Boolean)
            .join('\n')}
        />
        <Row
          label="Budget"
          value={[answers.monthlyBudget, answers.budgetNotes]
            .filter(Boolean)
            .join(' — ')}
        />
        <Row label="Special situations" value={specials} />
        <Row label="Agent notes (local only)" value={answers.agentNotes} />
      </div>
    </aside>
  )
}
