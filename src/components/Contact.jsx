import React, { useState, useEffect } from 'react'
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock, 
  FiSend,
  FiCheckCircle,
  FiUser,
  FiHome
} from 'react-icons/fi'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    address: '',
    description: '',
    urgency: 'normal'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
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

  const services = [
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
            <div>
              <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-neutral-900 mb-1">Phone</h4>
                    <a 
                      href="tel:+15551234567" 
                      className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    >
                      (555) 123-4567
                    </a>
                    <p className="text-sm text-neutral-600 mt-1">24/7 Emergency Line</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-neutral-900 mb-1">Email</h4>
                    <a 
                      href="mailto:info@brasouthsolutions.com" 
                      className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    >
                      info@brasouthsolutions.com
                    </a>
                    <p className="text-sm text-neutral-600 mt-1">We reply within 4 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-neutral-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-neutral-900 mb-1">Service Area</h4>
                    <p className="text-neutral-600">
                      Your City & Surrounding Areas<br />
                      <span className="text-sm">Within 25-mile radius</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiClock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-neutral-900 mb-1">Business Hours</h4>
                    <div className="text-neutral-600 text-sm space-y-1">
                      <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                      <p>Saturday: 8:00 AM - 6:00 PM</p>
                      <p>Sunday: Emergency Service Only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                Emergency Service Available
              </h4>
              <p className="text-red-700 text-sm leading-relaxed">
                Need immediate assistance? We offer 24/7 emergency repair services 
                for urgent issues like water leaks, electrical problems, or security concerns.
              </p>
              <a 
                href="tel:+15551234567" 
                className="inline-flex items-center space-x-2 mt-3 text-red-600 hover:text-red-700 font-medium"
              >
                <FiPhone className="w-4 h-4" />
                <span>Call Emergency Line</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 ${isVisible ? 'slide-in-right visible' : 'slide-in-right'}`}>
            <div className="bg-neutral-50 rounded-2xl p-8">
              <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-6">
                Request Your Free Estimate
              </h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-input pl-12"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-input pl-12"
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
                        <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="form-input pl-12"
                          placeholder="(555) 123-4567"
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
                        className="form-input"
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
                      <FiHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="form-input pl-12"
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
                      className="form-input"
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
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="form-textarea"
                      placeholder="Please describe your project in detail. Include any specific requirements, measurements, or concerns..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center space-x-3 py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-neutral-400 cursor-not-allowed'
                        : 'btn-primary'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        <span>Send Free Estimate Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-sm text-neutral-600 text-center">
                    By submitting this form, you agree to be contacted by Brasouth Solutions 
                    regarding your project. We respect your privacy and will never share your information.
                  </p>
                </form>
              ) : (
                <div className="text-center space-y-6 py-12">
                  <div className="w-20 h-20 bg-secondary-500 rounded-full flex items-center justify-center mx-auto">
                    <FiCheckCircle className="w-10 h-10 text-white" />
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
                  <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4">
                    <p className="text-secondary-800 font-medium">
                      Need immediate assistance? Call us at{' '}
                      <a href="tel:+15551234567" className="text-secondary-600 hover:text-secondary-700">
                        (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <a
            href="tel:+15551234567"
            className="flex items-center justify-center space-x-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-medium hover:shadow-large"
          >
            <FiPhone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
          
          <a
            href="mailto:info@brasouthsolutions.com"
            className="flex items-center justify-center space-x-3 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-medium hover:shadow-large"
          >
            <FiMail className="w-5 h-5" />
            <span>Send Email</span>
          </a>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center justify-center space-x-3 bg-neutral-600 hover:bg-neutral-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300"
          >
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact