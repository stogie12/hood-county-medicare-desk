import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Tag } from 'lucide-react'
import { getArticleById } from '../data/kbArticles'

export function Article() {
  const { id } = useParams<{ id: string }>()
  const article = id ? getArticleById(id) : undefined

  if (!article) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <p className="text-slate-600">Article not found.</p>
        <Link to="/kb" className="mt-4 inline-block font-semibold text-brand-700">
          Back to knowledge base
        </Link>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <Link
        to="/kb"
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Knowledge base
      </Link>
      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {article.title}
        </h1>
        <p className="mt-2 text-slate-600">{article.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {article.tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800"
            >
              <Tag className="h-3 w-3" />
              {t}
            </span>
          ))}
        </div>
      </header>
      <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        {article.body.map((para, i) => (
          <p key={i} className="text-base leading-relaxed text-slate-800">
            {para}
          </p>
        ))}
      </div>
      {article.relatedIds && article.relatedIds.length > 0 && (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">
            Related
          </h2>
          <ul className="mt-2 space-y-2">
            {article.relatedIds.map((rid) => {
              const rel = getArticleById(rid)
              if (!rel) return null
              return (
                <li key={rid}>
                  <Link
                    to={`/kb/${rid}`}
                    className="font-semibold text-brand-700 hover:underline"
                  >
                    {rel.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </article>
  )
}
