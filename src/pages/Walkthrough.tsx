import type { CoverageType } from '../types'
import { walkthroughSteps } from '../data/walkthroughSteps'
import { planPlaceholders } from '../data/planPlaceholders'
import { OptionCard } from '../components/OptionCard'
import { SummaryPanel } from '../components/SummaryPanel'
import { KbTipLink } from '../components/KbTipLink'
import { buildRecommendation } from '../utils/recommendations'
import { useConsultStorage } from '../hooks/useConsultStorage'
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'

const coverageOptions: { value: CoverageType; label: string; description: string }[] = [
  {
    value: 'original',
    label: 'Original Medicare (A/B)',
    description: 'Government A/B, possibly without Medigap/PDP yet',
  },
  {
    value: 'medigap',
    label: 'Medigap (Supplement)',
    description: 'Letter plan helping with A/B cost-sharing — no Rx',
  },
  {
    value: 'ma',
    label: 'Medicare Advantage',
    description: 'Part C plan, often with drugs / extras',
  },
  {
    value: 'employer',
    label: 'Employer / retiree',
    description: 'Group or union coverage still in force',
  },
  {
    value: 'medicaid',
    label: 'Medicaid / dual',
    description: 'Also has Medicaid assistance',
  },
  {
    value: 'none',
    label: 'None / new to Medicare',
    description: 'Turning 65 or newly entitled',
  },
  {
    value: 'unsure',
    label: 'Unsure — review cards together',
    description: 'Bring EOBs / ID cards to the table',
  },
]

export function Walkthrough() {
  const { state, setStepIndex, patchAnswers } = useConsultStorage()
  const { stepIndex, answers } = state
  const step = walkthroughSteps[stepIndex]
  const isLast = stepIndex === walkthroughSteps.length - 1
  const recommendation = buildRecommendation(answers)

  const toggleCoverage = (value: CoverageType) => {
    const set = new Set(answers.currentCoverage)
    if (set.has(value)) set.delete(value)
    else set.add(value)
    patchAnswers({ currentCoverage: Array.from(set) })
  }

  const goNext = () => {
    if (stepIndex < walkthroughSteps.length - 1) setStepIndex(stepIndex + 1)
  }
  const goBack = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="space-y-5">
        <div>
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-semibold text-brand-700">
              Step {stepIndex + 1} of {walkthroughSteps.length}
            </p>
            <div className="flex gap-1">
              {walkthroughSteps.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  title={s.title}
                  onClick={() => setStepIndex(i)}
                  className={[
                    'h-2.5 w-8 rounded-full transition',
                    i === stepIndex
                      ? 'bg-brand-600'
                      : i < stepIndex
                        ? 'bg-brand-300'
                        : 'bg-slate-200',
                  ].join(' ')}
                />
              ))}
            </div>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{step.title}</h1>
          <p className="mt-1 text-slate-600">{step.subtitle}</p>
        </div>

        {step.tipArticleIds.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {step.tipArticleIds.map((id) => (
              <KbTipLink key={id} articleId={id} />
            ))}
          </div>
        )}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          {step.id === 'coverage' && (
            <div className="grid gap-3 sm:grid-cols-2">
              {coverageOptions.map((opt) => (
                <OptionCard
                  key={opt.value}
                  multi
                  selected={answers.currentCoverage.includes(opt.value)}
                  label={opt.label}
                  description={opt.description}
                  onClick={() => toggleCoverage(opt.value)}
                />
              ))}
            </div>
          )}

          {step.id === 'county' && (
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">County</span>
                <input
                  value={answers.county}
                  onChange={(e) => patchAnswers({ county: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-base outline-none focus:border-brand-500"
                />
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                <OptionCard
                  selected={answers.county === 'Hood County, TX'}
                  label="Hood County, TX"
                  description="Default market for this desk"
                  onClick={() => patchAnswers({ county: 'Hood County, TX' })}
                />
                <OptionCard
                  selected={answers.county !== 'Hood County, TX' && answers.county !== ''}
                  label="Other county (edit field)"
                  description="Type the correct county above"
                  onClick={() => {
                    if (answers.county === 'Hood County, TX') {
                      patchAnswers({ county: '' })
                    }
                  }}
                />
              </div>
            </div>
          )}

          {step.id === 'providers' && (
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Primary doctor(s)
                </span>
                <textarea
                  value={answers.doctorsNotes}
                  onChange={(e) => patchAnswers({ doctorsNotes: e.target.value })}
                  rows={2}
                  placeholder="Optional — names / clinics only, no SSN"
                  className="mt-1.5 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-base outline-none focus:border-brand-500"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Specialists</span>
                <textarea
                  value={answers.specialistsNotes}
                  onChange={(e) => patchAnswers({ specialistsNotes: e.target.value })}
                  rows={2}
                  className="mt-1.5 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-base outline-none focus:border-brand-500"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Preferred hospital
                </span>
                <input
                  value={answers.hospitalNotes}
                  onChange={(e) => patchAnswers({ hospitalNotes: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-base outline-none focus:border-brand-500"
                />
              </label>
              <p className="text-sm font-semibold text-slate-700">
                How important is staying in a preferred network?
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {(
                  [
                    ['critical', 'Critical', 'Must keep these providers'],
                    ['important', 'Important', 'Strong preference'],
                    ['flexible', 'Flexible', 'Open if tradeoffs are clear'],
                    ['unsure', 'Unsure', 'Need to look up together'],
                  ] as const
                ).map(([value, label, description]) => (
                  <OptionCard
                    key={value}
                    selected={answers.networkImportance === value}
                    label={label}
                    description={description}
                    onClick={() => patchAnswers({ networkImportance: value })}
                  />
                ))}
              </div>
            </div>
          )}

          {step.id === 'drugs' && (
            <div className="space-y-4">
              <p className="rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-900">
                <strong>Remember:</strong> Medigap no longer includes Rx. Pair Original +
                Medigap with a Part D PDP, or use an MA-PD. Compare premium, formulary,
                and cost-sharing.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <OptionCard
                  selected={answers.takesRx === true}
                  label="Takes prescriptions"
                  onClick={() => patchAnswers({ takesRx: true })}
                />
                <OptionCard
                  selected={answers.takesRx === false}
                  label="No regular Rx"
                  onClick={() => patchAnswers({ takesRx: false })}
                />
                <OptionCard
                  selected={answers.takesRx === null}
                  label="Not discussed yet"
                  onClick={() => patchAnswers({ takesRx: null })}
                />
              </div>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Drug / pharmacy notes (optional)
                </span>
                <textarea
                  value={answers.rxNotes}
                  onChange={(e) => patchAnswers({ rxNotes: e.target.value })}
                  rows={3}
                  placeholder="Drug names, specialty Rx, preferred pharmacy…"
                  className="mt-1.5 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-base outline-none focus:border-brand-500"
                />
              </label>
            </div>
          )}

          {step.id === 'preferences' && (
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">Care style</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {(
                    [
                      ['predictable', 'More managed / one-card simplicity'],
                      ['flexible', 'Maximum provider flexibility'],
                      ['balanced', 'Balanced / compare both'],
                      ['unsure', 'Unsure'],
                    ] as const
                  ).map(([value, label]) => (
                    <OptionCard
                      key={value}
                      selected={answers.careStyle === value}
                      label={label}
                      onClick={() => patchAnswers({ careStyle: value })}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">
                  Premium vs out-of-pocket
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {(
                    [
                      ['low-premium', 'Prefer lower monthly premium'],
                      ['low-oop', 'Prefer lower / predictable OOP'],
                      ['balanced', 'Balance both'],
                      ['unsure', 'Unsure'],
                    ] as const
                  ).map(([value, label]) => (
                    <OptionCard
                      key={value}
                      selected={answers.premiumVsOop === value}
                      label={label}
                      onClick={() => patchAnswers({ premiumVsOop: value })}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">
                  Dental / vision / hearing extras?
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  <OptionCard
                    selected={answers.wantsDentalVisionHearing === true}
                    label="Yes — important"
                    onClick={() => patchAnswers({ wantsDentalVisionHearing: true })}
                  />
                  <OptionCard
                    selected={answers.wantsDentalVisionHearing === false}
                    label="Not a driver"
                    onClick={() => patchAnswers({ wantsDentalVisionHearing: false })}
                  />
                  <OptionCard
                    selected={answers.wantsDentalVisionHearing === null}
                    label="TBD"
                    onClick={() => patchAnswers({ wantsDentalVisionHearing: null })}
                  />
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">Travel</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {(
                    [
                      ['local', 'Mostly local (Hood County area)'],
                      ['seasonal', 'Snowbird / seasonal travel'],
                      ['frequent', 'Frequent multi-state travel'],
                      ['unsure', 'Unsure'],
                    ] as const
                  ).map(([value, label]) => (
                    <OptionCard
                      key={value}
                      selected={answers.travelNeed === value}
                      label={label}
                      onClick={() => patchAnswers({ travelNeed: value })}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {step.id === 'budget' && (
            <div className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                {(
                  [
                    'Under $50 / mo extra',
                    '$50–150 / mo',
                    '$150–300 / mo',
                    'Flexible if value is clear',
                    'Unsure',
                  ] as const
                ).map((label) => (
                  <OptionCard
                    key={label}
                    selected={answers.monthlyBudget === label}
                    label={label}
                    onClick={() => patchAnswers({ monthlyBudget: label })}
                  />
                ))}
              </div>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Budget notes (optional)
                </span>
                <textarea
                  value={answers.budgetNotes}
                  onChange={(e) => patchAnswers({ budgetNotes: e.target.value })}
                  rows={2}
                  className="mt-1.5 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-base outline-none focus:border-brand-500"
                />
              </label>
            </div>
          )}

          {step.id === 'special' && (
            <div className="space-y-6">
              {(
                [
                  ['esrd', 'ESRD / dialysis', 'Coverage often starts 4th month of dialysis'],
                  ['under65Disability', 'Under-65 disability', 'Medicare via disability'],
                  ['dualEligible', 'Dual eligible', 'Medicare + Medicaid'],
                  ['employerCoverage', 'Employer / retiree coverage', 'Still has group coverage'],
                  ['planningMove', 'Planning a move', 'May create SEP / network change'],
                ] as const
              ).map(([key, label, description]) => (
                <div key={key}>
                  <p className="mb-2 text-sm font-semibold text-slate-700">
                    {label}
                    <span className="ml-2 font-normal text-slate-500">{description}</span>
                  </p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <OptionCard
                      selected={answers[key] === true}
                      label="Yes"
                      onClick={() => patchAnswers({ [key]: true })}
                    />
                    <OptionCard
                      selected={answers[key] === false}
                      label="No"
                      onClick={() => patchAnswers({ [key]: false })}
                    />
                    <OptionCard
                      selected={answers[key] === null}
                      label="Unknown"
                      onClick={() => patchAnswers({ [key]: null })}
                    />
                  </div>
                </div>
              ))}
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">
                  Enrollment window
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {(
                    [
                      ['aep', 'AEP (Oct 15–Dec 7)', 'Main fall selling season'],
                      ['oep', 'MA OEP (Jan 1–Mar 31)', 'Already in MA only'],
                      ['sep', 'SEP', 'Qualifying life event'],
                      ['iep', 'IEP / new to Medicare', 'Around Part B start'],
                      ['none', 'Not changing now', 'Education only'],
                      ['unsure', 'Unsure', 'Confirm eligibility'],
                    ] as const
                  ).map(([value, label, description]) => (
                    <OptionCard
                      key={value}
                      selected={answers.enrollmentWindow === value}
                      label={label}
                      description={description}
                      onClick={() => patchAnswers({ enrollmentWindow: value })}
                    />
                  ))}
                </div>
              </div>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Optional agent notes (stored locally only)
                </span>
                <textarea
                  value={answers.agentNotes}
                  onChange={(e) => patchAnswers({ agentNotes: e.target.value })}
                  rows={3}
                  placeholder="No SSN / government ID — local browser notes only"
                  className="mt-1.5 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-base outline-none focus:border-brand-500"
                />
              </label>
            </div>
          )}

          {step.id === 'summary' && (
            <div className="space-y-6">
              <div className="rounded-2xl border-2 border-brand-200 bg-brand-50 p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 text-brand-700" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-brand-700">
                      Plan-TYPE path
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      {recommendation.pathTitle}
                    </h2>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                  Why this path
                </h3>
                <ul className="mt-2 space-y-2">
                  {recommendation.why.map((w, i) => (
                    <li
                      key={i}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800"
                    >
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                  Verify next
                </h3>
                <ol className="mt-2 list-decimal space-y-2 pl-5">
                  {recommendation.verifyNext.map((v, i) => (
                    <li key={i} className="text-sm text-slate-800">
                      {v}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950">
                <strong>Compliance:</strong> {recommendation.complianceNote}
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                  Selling-carrier PLACEHOLDER cards — availability not confirmed
                </h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {planPlaceholders.map((p) => (
                    <div
                      key={p.id}
                      className="rounded-xl border border-dashed border-amber-400 bg-white p-4"
                    >
                      <div className="text-[10px] font-bold uppercase text-amber-700">
                        PLACEHOLDER · {p.planType}
                      </div>
                      <div className="mt-1 font-bold text-slate-900">{p.carrier}</div>
                      <div className="text-xs text-slate-500">{p.planName}</div>
                      <div className="mt-1 text-[11px] font-medium text-amber-900">
                        {p.typicalProductFamily}
                      </div>
                      <div className="mt-2 text-sm font-semibold">{p.premiumMonthly}</div>
                      <ul className="mt-2 space-y-1 text-xs text-slate-600">
                        {p.highlights.map((h) => (
                          <li key={h}>• {h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="no-print flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={goBack}
            disabled={stepIndex === 0}
            className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-5 py-3 text-base font-semibold text-slate-700 transition enabled:hover:bg-slate-50 disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" />
            Back
          </button>
          {!isLast ? (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-6 py-3 text-base font-bold text-white shadow transition hover:bg-brand-800"
            >
              Next
              <ChevronRight className="h-5 w-5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setStepIndex(0)}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-6 py-3 text-base font-bold text-white shadow transition hover:bg-slate-900"
            >
              Review from start
            </button>
          )}
        </div>
      </div>

      <div className="lg:sticky lg:top-4 lg:self-start">
        <SummaryPanel answers={answers} stepLabel={step.title} />
      </div>
    </div>
  )
}
