import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  MapPin,
  ShieldCheck,
} from 'lucide-react'
import { planPlaceholders } from '../data/planPlaceholders'

export function Home() {
  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 via-brand-700 to-slate-850 px-6 py-10 text-white shadow-lg sm:px-10">
        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-brand-100">
          <MapPin className="h-4 w-4" />
          Hood County, Texas · In-person agent consults · AEP from October
        </div>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
          Sit with the client. Walk the decision. Search the facts.
        </h1>
        <p className="mt-3 max-w-2xl text-base text-brand-50/90 sm:text-lg">
          Agent-facing walkthrough with a live summary panel and a searchable Medicare
          knowledge base. Not a customer self-serve quiz. Not phone-sales framing.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/walkthrough"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-bold text-brand-800 shadow transition hover:bg-brand-50"
          >
            <ClipboardList className="h-5 w-5" />
            Start consult walkthrough
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/kb"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-6 py-3.5 text-base font-bold text-white backdrop-blur transition hover:bg-white/20"
          >
            <BookOpen className="h-5 w-5" />
            Search knowledge base
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: 'Click-through guide',
            body: 'Coverage → county → doctors → Rx → preferences → budget → special situations → recommendation summary.',
          },
          {
            title: 'Live answer panel',
            body: 'Everything you tap shows up in the side summary so you can narrate clearly across the table.',
          },
          {
            title: 'KB tips inline',
            body: 'Jump from walkthrough tips into articles (Medigap ≠ Rx, ESRD 4th month, MSN 120-day appeal, and more).',
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-bold text-slate-900">{card.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.body}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-dashed border-amber-400 bg-amber-50/60 p-5">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 text-amber-700" />
          <div>
            <h2 className="text-lg font-bold text-amber-950">
              Selling carriers — PLACEHOLDER cards
            </h2>
            <p className="mt-1 text-sm text-amber-900/90">
              Logan’s roster for sit-down structure only. Not confirmed Hood County /
              ZIP offers. Replace via{' '}
              <code className="rounded bg-white px-1.5 py-0.5 text-xs">
                src/data/plans.ts
              </code>{' '}
              with licensed 2026 data. Never quote placeholder premiums, MOOP, stars, or
              benefits.
            </p>
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {planPlaceholders.map((p) => (
            <div
              key={p.id}
              className="rounded-xl border border-amber-200 bg-white p-4 shadow-sm"
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                PLACEHOLDER · {p.planType}
              </div>
              <div className="mt-1 text-sm font-bold text-slate-900">{p.carrier}</div>
              <div className="text-xs text-slate-500">{p.planName}</div>
              <div className="mt-2 text-[11px] font-medium leading-snug text-amber-900">
                {p.typicalProductFamily}
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-800">
                {p.premiumMonthly}
              </div>
              <div className="text-xs text-slate-500">{p.maxOop}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
