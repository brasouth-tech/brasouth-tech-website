import React, { useState, useEffect } from 'react'
import { 
  FiHome, 
  FiTool, 
  FiZap, 
  FiDroplet, 
  FiSettings, 
  FiEdit,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showAllServices, setShowAllServices] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('services')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const mainServices = [
    {
      icon: FiHome,
      title: 'Home Repairs',
      description: 'Fix holes in walls, repair doors, windows, and general maintenance issues.',
      features: ['Drywall repair', 'Door & window fixes', 'Minor structural repairs']
    },
    {
      icon: FiZap,
      title: 'Electrical Work',
      description: 'Safe and professional electrical repairs and installations by licensed electricians.',
      features: ['Outlet installation', 'Light fixture setup', 'Electrical troubleshooting']
    },
    {
      icon: FiDroplet,
      title: 'Plumbing Services',
      description: 'Quick fixes for leaks, clogs, and plumbing installations.',
      features: ['Leak repairs', 'Faucet installation', 'Drain cleaning']
    },
    {
      icon: FiEdit,
      title: 'Painting & Finishing',
      description: 'Interior and exterior painting with premium materials and attention to detail.',
      features: ['Interior painting', 'Exterior touch-ups', 'Trim & baseboards']
    },
    {
      icon: FiTool,
      title: 'Carpentry',
      description: 'Custom woodwork, shelving, and furniture assembly services.',
      features: ['Custom shelving', 'Furniture assembly', 'Trim installation']
    },
    {
      icon: FiSettings,
      title: 'Appliance Installation',
      description: 'Professional installation of home appliances and fixtures.',
      features: ['Dishwasher install', 'Garbage disposal', 'Ceiling fans']
    }
  ]

  const additionalServices = [
    {
      icon: FiTool,
      title: 'Deck & Patio Repair',
      description: 'Restore and maintain your outdoor spaces for year-round enjoyment.',
      features: ['Deck staining', 'Railing repair', 'Patio maintenance']
    },
    {
      icon: FiSettings,
      title: 'HVAC Maintenance',
      description: 'Basic HVAC maintenance and filter replacement services.',
      features: ['Filter replacement', 'Vent cleaning', 'Thermostat install']
    },
    {
      icon: FiHome,
      title: 'Flooring Services',
      description: 'Repair and installation of various flooring materials.',
      features: ['Tile repair', 'Hardwood touch-ups', 'Laminate installation']
    }
  ]

  const displayedServices = showAllServices ? [...mainServices, ...additionalServices] : mainServices

  return (
    <section id="services" className="section bg-neutral-50">
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
            Our Professional <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From minor repairs to major improvements, our skilled professionals deliver quality 
            workmanship that enhances your home's value and your peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedServices.map((service, index) => (
            <div
              key={service.title}
              className={`service-card card card-hover ${
                isVisible ? 'fade-in visible' : 'fade-in'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-medium">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-heading font-semibold text-xl text-neutral-900">
                  {service.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 pt-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-neutral-700">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="btn-outline w-full mt-6 group">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAllServices(!showAllServices)}
            className="inline-flex items-center space-x-2 bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-soft hover:shadow-medium"
          >
            <span>{showAllServices ? 'Show Less Services' : 'View All Services'}</span>
            {showAllServices ? (
              <FiChevronUp className="w-5 h-5" />
            ) : (
              <FiChevronDown className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Emergency Service CTA */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white shadow-large">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="font-heading font-bold text-2xl md:text-3xl">
              Need Emergency Repairs?
            </h3>
            <p className="text-lg text-blue-100">
              We offer 24/7 emergency handyman services for urgent repairs that can't wait.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Call Now: (555) 123-4567
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Request Service Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services