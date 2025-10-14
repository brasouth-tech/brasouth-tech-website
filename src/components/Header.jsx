import React, { useState, useEffect } from 'react'
import { FiPhone, FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-medium py-2' 
        : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">BS</span>
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-neutral-900">
                Brasouth Solutions
              </h1>
              <p className="text-sm text-neutral-600 leading-tight">
                Professional Handyman Services
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+15551234567"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
            >
              <FiPhone className="w-5 h-5" />
              <span>(555) 123-4567</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-sm"
            >
              Free Estimate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6 text-neutral-700" />
            ) : (
              <FiMenu className="w-6 h-6 text-neutral-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="pt-4 pb-2 space-y-2">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg font-medium transition-all duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg font-medium transition-all duration-200"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg font-medium transition-all duration-200"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg font-medium transition-all duration-200"
            >
              Contact
            </button>
            <div className="px-4 pt-2 space-y-3">
              <a 
                href="tel:+15551234567"
                className="flex items-center justify-center space-x-2 py-3 text-primary-600 font-semibold border border-primary-200 rounded-lg hover:bg-primary-50 transition-all duration-200"
              >
                <FiPhone className="w-5 h-5" />
                <span>(555) 123-4567</span>
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full"
              >
                Get Free Estimate
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header