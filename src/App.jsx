import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Helmet>
        <title>Brasouth Solutions - Professional Handyman Services | Reliable Home Repairs</title>
        <meta name="description" content="Expert handyman services from Brasouth Solutions. Professional home repairs, maintenance, and improvements. Licensed, insured, and trusted by local homeowners. Get your free estimate today!" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://brasouthsolutions.com" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Services />
          <WhyChooseUs />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App