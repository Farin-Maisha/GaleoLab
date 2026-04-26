import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Career from './pages/Career'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="career" element={<Career />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App