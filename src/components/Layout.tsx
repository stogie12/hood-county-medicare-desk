import { Link, NavLink, Outlet } from 'react-router-dom'
import { BookOpen, Home, RotateCcw, Stethoscope } from 'lucide-react'
import { DisclaimerBanner } from './DisclaimerBanner'

const navClass = ({ isActive }: { isActive: boolean }) =>
  [
    'inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition',
    isActive
      ? 'bg-brand-700 text-white shadow-sm'
      : 'text-slate-700 hover:bg-slate-200/80',
  ].join(' ')

interface LayoutProps {
  onReset?: () => void
}

export function Layout({ onReset }: LayoutProps) {
  return (
    <div className="flex min-h-full flex-col">
      <DisclaimerBanner />
      <header className="no-print border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-700 text-white shadow">
              <Stethoscope className="h-5 w-5" />
            </span>
            <div>
              <div className="text-base font-bold text-slate-900">
                Medicare Consult Desk
              </div>
              <div className="text-xs font-medium text-slate-500">
                Hood County, TX · Agent walkthrough + KB
              </div>
            </div>
          </Link>
          <nav className="flex flex-wrap items-center gap-2">
            <NavLink to="/" end className={navClass}>
              <Home className="h-4 w-4" />
              Home
            </NavLink>
            <NavLink to="/walkthrough" className={navClass}>
              <Stethoscope className="h-4 w-4" />
              Walkthrough
            </NavLink>
            <NavLink to="/kb" className={navClass}>
              <BookOpen className="h-4 w-4" />
              Knowledge base
            </NavLink>
            {onReset && (
              <button
                type="button"
                onClick={onReset}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <RotateCcw className="h-4 w-4" />
                Reset consult
              </button>
            )}
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6">
        <Outlet />
      </main>
      <footer className="no-print border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
        In-person agent tool · Hood County market · AEP readiness · Verify officially
      </footer>
    </div>
  )
}
