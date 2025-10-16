import React, { useState, useEffect } from 'react'
import { Phone, List, X } from 'phosphor-react'
import { Button } from '@/components/ui/button'
import logoImage from '@/assets/images/logo-new-colors.png'
import { CONTACT_INFO } from '@/lib/contactInfo'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string): void => {
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
      <div className="container px-4 md:px-8">
        <div className="flex items-center justify-between my-1">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
            aria-label="Return to top"
          >
            <img 
              src={logoImage} 
              alt="Brasouth Solutions Logo" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
            {/* <div className="text-left">
              <h1 className="font-heading font-bold text-xl text-neutral-900">
                Brasouth Solutions
              </h1>
              <p className="text-sm text-neutral-600 leading-tight">
                Professional Handyman Services
              </p>
            </div> */}
          </button>

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
              href={CONTACT_INFO.phone.href}
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
            >
              <Phone className="w-5 h-5" weight="duotone" />
              <span>{CONTACT_INFO.phone.display}</span>
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-sm"
            >
              Free Estimate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-neutral-700" weight="bold" />
            ) : (
              <List className="w-6 h-6 text-neutral-700" weight="bold" />
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
                href={CONTACT_INFO.phone.href}
                className="flex items-center justify-center space-x-2 py-3 text-primary-600 font-semibold border border-primary-200 rounded-lg hover:bg-primary-50 transition-all duration-200"
              >
                <Phone className="w-5 h-5" weight="duotone" />
                <span>{CONTACT_INFO.phone.display}</span>
              </a>
              <Button
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full"
              >
                Get Free Estimate
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header