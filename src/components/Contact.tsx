import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { 
  Phone, 
  Envelope, 
  MapPin, 
  Clock, 
  PaperPlaneTilt,
  CheckCircle,
  User,
  House
} from 'phosphor-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CONTACT_INFO, BUSINESS_INFO } from '@/lib/contactInfo'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  address: string
  description: string
  urgency: string
}

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    address: '',
    description: '',
    urgency: 'normal'
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('contact')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        address: '',
        description: '',
        urgency: 'normal'
      })
    }, 5000)
  }

  const services: string[] = [
    'General Repairs',
    'Electrical Work',
    'Plumbing Services',
    'Painting & Finishing',
    'Carpentry',
    'Appliance Installation',
    'Deck & Patio Work',
    'HVAC Maintenance',
    'Emergency Repair',
    'Other (Please specify)'
  ]

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
            Get Your <span className="text-gradient-primary">Free Estimate</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Contact us today for a free, no-obligation estimate. 
            We'll respond within 24 hours with a detailed quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? 'slide-in-left visible' : 'slide-in-left'}`}>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-bold text-2xl text-neutral-900">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" weight="duotone" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-neutral-900 mb-1">Phone</h4>
                    <a 
                      href={CONTACT_INFO.phone.href} 
                      className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    >
                      {CONTACT_INFO.phone.display}
                    </a>
                    <p className="text-sm text-neutral-600 mt-1">24/7 Emergency Line</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Envelope className="w-6 h-6 text-white" weight="duotone" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-neutral-900 mb-1">Email</h4>
                    <a 
                      href={CONTACT_INFO.email.href} 
                      className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    >
                      {CONTACT_INFO.email.primary}
                    </a>
                    <p className="text-sm text-neutral-600 mt-1">{BUSINESS_INFO.service.emailResponse}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-neutral-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" weight="duotone" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-neutral-900 mb-1">Service Area</h4>
                    <p className="text-neutral-600">
                      {CONTACT_INFO.address.display}<br />
                      <span className="text-sm">{CONTACT_INFO.address.serviceRadius}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" weight="duotone" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-neutral-900 mb-1">Business Hours</h4>
                    <div className="text-neutral-600 text-sm space-y-1">
                      <p>{CONTACT_INFO.hours.weekdays.full}</p>
                      <p>{CONTACT_INFO.hours.saturday}</p>
                      <p>{CONTACT_INFO.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Notice */}
            <Card className="bg-red-50 border border-red-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                  Emergency Service Available
                </h4>
                <p className="text-red-700 text-sm leading-relaxed mb-3">
                  Need immediate assistance? We offer 24/7 emergency repair services 
                  for urgent issues like water leaks, electrical problems, or security concerns.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="text-red-600 hover:text-red-700 border-red-300"
                >
                  <a href={CONTACT_INFO.phone.href} className="inline-flex items-center space-x-2">
                    <Phone className="w-4 h-4" weight="duotone" />
                    <span>Call Emergency Line</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 ${isVisible ? 'slide-in-right visible' : 'slide-in-right'}`}>
            <Card className="bg-neutral-50 relative">
              {/* Maintenance Backdrop */}
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-neutral-900 mb-2">
                    Under Maintenance
                  </h3>
                  <p className="text-neutral-600 mb-6 max-w-md">
                    Our contact form is temporarily under maintenance. Please contact us directly using the information provided.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary-500 hover:bg-primary-600 text-white"
                    >
                      <a href={CONTACT_INFO.phone.href} className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" weight="duotone" />
                        <span>Call Now</span>
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-neutral-300"
                    >
                      <a href={CONTACT_INFO.email.href} className="flex items-center space-x-2">
                        <Envelope className="w-4 h-4" weight="duotone" />
                        <span>Send Email</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="font-heading font-bold text-2xl text-neutral-900">
                  Request Your Free Estimate
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" weight="duotone" />
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="pl-12"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Envelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" weight="duotone" />
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="pl-12"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" weight="duotone" />
                          <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="pl-12"
                            placeholder={CONTACT_INFO.phone.display}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                          Service Needed *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select a service</option>
                          {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-2">
                        Property Address *
                      </label>
                      <div className="relative">
                        <House className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" weight="duotone" />
                        <Input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="pl-12"
                          placeholder="123 Main Street, City, State, ZIP"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-neutral-700 mb-2">
                        Project Urgency
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="normal">Normal (Within 1-2 weeks)</option>
                        <option value="soon">Soon (Within a few days)</option>
                        <option value="urgent">Urgent (Same day/Next day)</option>
                        <option value="emergency">Emergency (Immediate)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-2">
                        Project Description *
                      </label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="Please describe your project in detail. Include any specific requirements, measurements, or concerns..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className={`w-full ${
                        isSubmitting
                          ? 'bg-neutral-400 cursor-not-allowed'
                          : 'btn-primary'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-3">
                          <PaperPlaneTilt className="w-5 h-5" weight="duotone" />
                          <span>Send Free Estimate Request</span>
                        </div>
                      )}
                    </Button>

                    <p className="text-sm text-neutral-600 text-center">
                      By submitting this form, you agree to be contacted by Brasouth Solutions 
                      regarding your project. We respect your privacy and will never share your information.
                    </p>
                  </form>
                ) : (
                  <div className="text-center space-y-6 py-12">
                    <div className="w-20 h-20 bg-secondary-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-10 h-10 text-white" weight="duotone" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-2">
                        Thank You!
                      </h3>
                      <p className="text-lg text-neutral-600 mb-4">
                        Your estimate request has been received successfully.
                      </p>
                      <p className="text-neutral-600">
                        We'll review your project details and contact you within 24 hours 
                        with a detailed estimate and next steps.
                      </p>
                    </div>
                    <Card className="bg-secondary-50 border border-secondary-200">
                      <CardContent className="p-4">
                        <p className="text-secondary-800 font-medium">
                          Need immediate assistance? Call us at{' '}
                          <a href={CONTACT_INFO.phone.href} className="text-secondary-600 hover:text-secondary-700">
                            {CONTACT_INFO.phone.display}
                          </a>
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Button
            asChild
            size="lg"
            className="bg-primary-500 hover:bg-primary-600 text-white transform hover:scale-105 shadow-medium hover:shadow-large"
          >
            <a href={CONTACT_INFO.phone.href} className="flex items-center space-x-3">
              <Phone className="w-5 h-5" weight="duotone" />
              <span>Call Now</span>
            </a>
          </Button>
          
          <Button
            asChild
            size="lg"
            className="bg-secondary-500 hover:bg-secondary-600 text-white transform hover:scale-105 shadow-medium hover:shadow-large"
          >
            <a href={CONTACT_INFO.email.href} className="flex items-center space-x-3">
              <Envelope className="w-5 h-5" weight="duotone" />
              <span>Send Email</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Contact