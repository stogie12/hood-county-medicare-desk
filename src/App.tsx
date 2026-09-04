import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Walkthrough } from './pages/Walkthrough'
import { KnowledgeBase } from './pages/KnowledgeBase'
import { Article } from './pages/Article'
import { useConsultStorage } from './hooks/useConsultStorage'

function AppRoutes() {
  const { resetConsult } = useConsultStorage()

  const handleReset = () => {
    if (
      window.confirm(
        'Reset this consult? Walkthrough answers stored in this browser will be cleared.',
      )
    ) {
      resetConsult()
      window.location.href = '/'
    }
  }

  return (
    <Routes>
      <Route element={<Layout onReset={handleReset} />}>
        <Route index element={<Home />} />
        <Route path="walkthrough" element={<Walkthrough />} />
        <Route path="kb" element={<KnowledgeBase />} />
        <Route path="kb/:id" element={<Article />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
