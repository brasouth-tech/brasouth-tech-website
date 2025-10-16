import React, { useState, useEffect } from 'react'
import { 
  House, 
  Wrench, 
  Lightning, 
  Drop, 
  Gear, 
  PaintBrush,
  CaretDown,
  CaretUp,
  ArrowRight,
  Phone,
  PlusCircle
} from 'phosphor-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CONTACT_INFO } from '@/lib/contactInfo'

interface ServiceFeature {
  name: string
}

interface Service {
  icon: React.ComponentType<any>
  title: string
  description: string
  features: ServiceFeature[]
}

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [showAllServices, setShowAllServices] = useState<boolean>(false)

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

  const mainServices: Service[] = [
    {
      icon: House,
      title: 'Home Repairs',
      description: 'Fix holes in walls, repair doors, windows, and general maintenance issues.',
      features: [
        { name: 'Drywall repair' },
        { name: 'Door & window fixes' },
        { name: 'Minor structural repairs' }
      ]
    },
    {
      icon: Lightning,
      title: 'Electrical Work',
      description: 'Safe and professional electrical repairs and installations by our skilled handymans.',
      features: [
        { name: 'Outlet installation' },
        { name: 'Light fixture setup' },
        { name: 'Electrical troubleshooting' }
      ]
    },
    {
      icon: Drop,
      title: 'Plumbing Services',
      description: 'Quick fixes for leaks, clogs, and plumbing installations.',
      features: [
        { name: 'Leak repairs' },
        { name: 'Toilet installation/replacement' },
        { name: 'Faucet installation/replacement' },
        // { name: 'Drain cleaning' }
      ]
    },
    {
      icon: PaintBrush,
      title: 'Painting & Finishing',
      description: 'Interior and exterior painting with premium materials and attention to detail.',
      features: [
        { name: 'Interior painting' },
        { name: 'Exterior touch-ups' },
        { name: 'Trim & baseboards' }
      ]
    },
    {
      icon: Wrench,
      title: 'Carpentry',
      description: 'Custom woodwork, shelving, and furniture assembly services.',
      features: [
        { name: 'Custom shelving' },
        { name: 'Furniture assembly' },
        { name: 'Trim installation' }
      ]
    },
    {
      icon: Gear,
      title: 'Appliance Installation',
      description: 'Professional installation of home appliances and fixtures.',
      features: [
        { name: 'Dishwasher install' },
        { name: 'Garbage disposal' },
        { name: 'Ceiling fans' }
      ]
    }
  ]

  const additionalServices: Service[] = [
    {
      icon: Wrench,
      title: 'Deck & Patio Repair',
      description: 'Restore and maintain your outdoor spaces for year-round enjoyment.',
      features: [
        { name: 'Deck staining' },
        { name: 'Railing repair' },
        { name: 'Patio maintenance' }
      ]
    },
    // {
    //   icon: Gear,
    //   title: 'HVAC Maintenance',
    //   description: 'Basic HVAC maintenance and filter replacement services.',
    //   features: [
    //     { name: 'Filter replacement' },
    //     { name: 'Vent cleaning' },
    //     { name: 'Thermostat install' }
    //   ]
    // },
    {
      icon: House,
      title: 'Flooring Services',
      description: 'Repair and installation of various flooring materials.',
      features: [
        { name: 'Tile repair' },
        { name: 'Hardwood touch-ups' },
        { name: 'Laminate installation' }
      ]
    }
  ]

  const displayedServices = showAllServices ? [...mainServices, ...additionalServices] : mainServices

  const handleScrollToContact = (): void => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
            <Card
              key={service.title}
              className={`service-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'fade-in visible' : 'fade-in'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-medium">
                  <service.icon className="w-8 h-8 text-white" weight="duotone" />
                </div>
                
                <CardTitle className="font-heading font-semibold text-xl text-neutral-900">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-neutral-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <Badge key={feature.name} variant="secondary" className="text-xs">
                      {feature.name}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" weight="bold" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center">
          <Button
            onClick={() => setShowAllServices(!showAllServices)}
            variant="outline"
            size="lg"
            className="inline-flex items-center space-x-2 border-2 border-primary-500 text-primary-600 hover:bg-primary-50"
          >
            <span>{showAllServices ? 'Show Less Services' : 'View All Services'}</span>
            {showAllServices ? (
              <CaretUp className="w-5 h-5" weight="bold" />
            ) : (
              <CaretDown className="w-5 h-5" weight="bold" />
            )}
          </Button>
        </div>

        {/* Emergency Service CTA */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white shadow-large">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-white font-heading font-bold text-2xl md:text-3xl">
              Need Emergency Repairs?
            </h3>
            <p className="text-lg text-blue-100">
              We offer 24/7 emergency handyman services for urgent repairs that can't wait.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold transform hover:scale-105"
              >
                <a href={CONTACT_INFO.phone.href}>
                  <Phone className="w-5 h-5 mr-2" weight="fill" />
                  Call Now: {CONTACT_INFO.phone.display}
                </a>
              </Button>
              <Button
                onClick={handleScrollToContact}
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20"
              >
                <PlusCircle className="w-5 h-5 mr-2" weight="duotone" />
                Request Service Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services