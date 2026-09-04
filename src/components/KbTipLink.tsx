import { Link } from 'react-router-dom'
import { Lightbulb } from 'lucide-react'
import { getArticleById } from '../data/kbArticles'

interface KbTipLinkProps {
  articleId: string
}

export function KbTipLink({ articleId }: KbTipLinkProps) {
  const article = getArticleById(articleId)
  if (!article) return null
  return (
    <Link
      to={`/kb/${article.id}`}
      className="inline-flex items-start gap-2 rounded-lg border border-brand-200 bg-brand-50 px-3 py-2 text-sm text-brand-900 transition hover:bg-brand-100"
    >
      <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" />
      <span>
        <span className="font-semibold">KB tip: </span>
        {article.title}
      </span>
    </Link>
  )
}
