import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Tag } from 'lucide-react'
import { kbArticles, searchArticles } from '../data/kbArticles'

export function KnowledgeBase() {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = useMemo(() => {
    const set = new Set<string>()
    kbArticles.forEach((a) => a.tags.forEach((t) => set.add(t)))
    return Array.from(set).sort()
  }, [])

  const results = useMemo(() => {
    let list = searchArticles(query)
    if (activeTag) list = list.filter((a) => a.tags.includes(activeTag))
    return list
  }, [query, activeTag])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Knowledge base
        </h1>
        <p className="mt-1 text-slate-600">
          Instant search across Medicare education seeded for Hood County consults.
        </p>
      </div>

      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles, tags, topics… (e.g. ESRD, Medigap, AEP, MSN)"
          className="w-full rounded-2xl border-2 border-slate-200 bg-white py-4 pl-12 pr-4 text-base shadow-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTag(null)}
          className={[
            'rounded-full px-3 py-1.5 text-sm font-semibold transition',
            !activeTag
              ? 'bg-brand-700 text-white'
              : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50',
          ].join(' ')}
        >
          All tags
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={[
              'inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold transition',
              activeTag === tag
                ? 'bg-brand-700 text-white'
                : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50',
            ].join(' ')}
          >
            <Tag className="h-3.5 w-3.5" />
            {tag}
          </button>
        ))}
      </div>

      <p className="text-sm text-slate-500">
        {results.length} article{results.length === 1 ? '' : 's'}
      </p>

      <div className="grid gap-3">
        {results.map((article) => (
          <Link
            key={article.id}
            to={`/kb/${article.id}`}
            className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
          >
            <h2 className="text-lg font-bold text-slate-900">{article.title}</h2>
            <p className="mt-1 text-sm text-slate-600">{article.summary}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {article.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
        {results.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
            No articles match. Try another term or clear the tag filter.
          </div>
        )}
      </div>
    </div>
  )
}
