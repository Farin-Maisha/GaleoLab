import React from 'react'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import ServicesPreview from './sections/ServicesPreview'
import PortfolioPreview from './sections/PortfolioPreview'
import TeamPreview from './sections/TeamPreview'
import Pricing from './sections/Pricing'
import WhyUs from './sections/WhyUs'
import CareerPreview from './sections/CareerPreview'
import Contact from './sections/Contact'

function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <ServicesPreview />
      <PortfolioPreview />
      <TeamPreview />
      <Pricing />
      <WhyUs />
      <CareerPreview />
      <Contact />
    </main>
  )
}

export default Home