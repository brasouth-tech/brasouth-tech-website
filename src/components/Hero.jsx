import React, { useEffect, useState } from 'react'
import { FiPhone, FiShield, FiClock, FiStar } from 'react-icons/fi'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center hero-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 border border-white rounded-lg rotate-12"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`text-white space-y-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                Professional Handyman Services{' '}
                <span className="text-secondary-400">You Can Trust</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                From small repairs to major improvements, we deliver quality workmanship 
                that saves you time and gives you peace of mind.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <FiShield className="w-8 h-8 mx-auto mb-2 text-secondary-400" />
                <p className="text-sm font-medium">Licensed & Insured</p>
              </div>
              <div className="text-center">
                <FiClock className="w-8 h-8 mx-auto mb-2 text-secondary-400" />
                <p className="text-sm font-medium">Same Day Service</p>
              </div>
              <div className="text-center">
                <FiStar className="w-8 h-8 mx-auto mb-2 text-secondary-400" />
                <p className="text-sm font-medium">5-Star Rated</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                Get Free Estimate Today
              </button>
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                <FiPhone className="w-5 h-5" />
                <span>(555) 123-4567</span>
              </a>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-blue-100 mb-3">Trusted by 500+ Local Homeowners</p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-white font-semibold">4.9/5 Average Rating</span>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className={`${isVisible ? 'slide-in-right visible' : 'slide-in-right'}`}>
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Professional Work Showcase</h3>
                    <p className="text-sm text-blue-100">Before & After Photos</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-secondary-500 text-white p-4 rounded-lg shadow-xl">
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm">Emergency Service</p>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white text-neutral-900 p-4 rounded-lg shadow-xl">
                <p className="text-2xl font-bold text-primary-600">100%</p>
                <p className="text-sm font-medium">Satisfaction Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero