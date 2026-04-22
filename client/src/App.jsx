import { Routes, Route } from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
