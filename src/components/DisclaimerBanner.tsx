import { AlertTriangle } from 'lucide-react'

export function DisclaimerBanner() {
  return (
    <div className="no-print border-b border-amber-300 bg-amber-50 text-amber-950">
      <div className="mx-auto flex max-w-7xl items-start gap-3 px-4 py-2.5 text-sm sm:px-6">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden />
        <p>
          <strong>Educational agent decision-support</strong> for in-person Medicare
          consultations — <strong>not</strong> CMS-approved marketing. Verify benefits,
          networks, and formularies with official CMS / carrier tools. Plan figures are{' '}
          <strong>PLACEHOLDERS</strong> until replaced with approved data. No SSN or
          required name fields.
        </p>
      </div>
    </div>
  )
}
