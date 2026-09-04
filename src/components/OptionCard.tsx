interface OptionCardProps {
  selected: boolean
  label: string
  description?: string
  onClick: () => void
  multi?: boolean
}

export function OptionCard({
  selected,
  label,
  description,
  onClick,
  multi,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={[
        'option-card w-full rounded-xl border-2 px-4 py-3.5 text-left transition',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
        selected
          ? 'border-brand-600 bg-brand-50 shadow-sm'
          : 'border-slate-200 bg-white hover:border-brand-300 hover:bg-slate-50',
      ].join(' ')}
    >
      <div className="flex items-start gap-3">
        <span
          className={[
            'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2',
            multi ? 'rounded' : 'rounded-full',
            selected
              ? 'border-brand-600 bg-brand-600 text-white'
              : 'border-slate-300 bg-white',
          ].join(' ')}
        >
          {selected && (
            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="M2.5 6.5L5 9L9.5 3.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        <span>
          <span className="block text-base font-semibold text-slate-900">{label}</span>
          {description && (
            <span className="mt-0.5 block text-sm text-slate-600">{description}</span>
          )}
        </span>
      </div>
    </button>
  )
}
