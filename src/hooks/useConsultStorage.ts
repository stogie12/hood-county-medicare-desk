import { useCallback, useEffect, useState } from 'react'
import type { ConsultAnswers, WalkthroughState } from '../types'

const STORAGE_KEY = 'medicare-consult-hood-v1'

export const defaultAnswers = (): ConsultAnswers => ({
  currentCoverage: [],
  county: 'Hood County, TX',
  doctorsNotes: '',
  specialistsNotes: '',
  hospitalNotes: '',
  networkImportance: '',
  takesRx: null,
  rxNotes: '',
  careStyle: '',
  premiumVsOop: '',
  wantsDentalVisionHearing: null,
  travelNeed: '',
  monthlyBudget: '',
  budgetNotes: '',
  esrd: null,
  under65Disability: null,
  dualEligible: null,
  employerCoverage: null,
  planningMove: null,
  enrollmentWindow: 'aep',
  agentNotes: '',
})

export const defaultState = (): WalkthroughState => ({
  stepIndex: 0,
  answers: defaultAnswers(),
  updatedAt: new Date().toISOString(),
})

function loadState(): WalkthroughState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw) as WalkthroughState
    return {
      ...defaultState(),
      ...parsed,
      answers: { ...defaultAnswers(), ...parsed.answers },
    }
  } catch {
    return defaultState()
  }
}

export function useConsultStorage() {
  const [state, setState] = useState<WalkthroughState>(() =>
    typeof window !== 'undefined' ? loadState() : defaultState(),
  )

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...state, updatedAt: new Date().toISOString() }),
    )
  }, [state])

  const setStepIndex = useCallback((stepIndex: number) => {
    setState((s) => ({ ...s, stepIndex }))
  }, [])

  const patchAnswers = useCallback((patch: Partial<ConsultAnswers>) => {
    setState((s) => ({
      ...s,
      answers: { ...s.answers, ...patch },
    }))
  }, [])

  const resetConsult = useCallback(() => {
    const next = defaultState()
    setState(next)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }, [])

  return { state, setStepIndex, patchAnswers, resetConsult }
}
