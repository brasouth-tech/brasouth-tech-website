import React, { useState, useEffect } from 'react'
import { 
  FiShield, 
  FiClock, 
  FiStar, 
  FiUsers, 
  FiAward, 
  FiThumbsUp,
  FiPhone,
  FiCheckCircle
} from 'react-icons/fi'

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('about')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const benefits = [
    {
      icon: FiShield,
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your complete protection and peace of mind.',
      details: 'State License #HS-2024-001'
    },
    {
      icon: FiClock,
      title: 'Punctual & Reliable',
      description: 'We arrive on time, every time. Same-day service available for urgent repairs.',
      details: '95% on-time arrival rate'
    },
    {
      icon: FiStar,
      title: 'Quality Guaranteed',
      description: '100% satisfaction guarantee on all work. If you\'re not happy, we\'ll make it right.',
      details: '2-year warranty on labor'
    },
    {
      icon: FiUsers,
      title: 'Experienced Team',
      description: 'Our skilled professionals have 10+ years of experience in home repairs and improvements.',
      details: '500+ completed projects'
    },
    {
      icon: FiAward,
      title: 'Fair & Transparent Pricing',
      description: 'Upfront pricing with no hidden fees. Free estimates and competitive rates.',
      details: 'No trip charges'
    },
    {
      icon: FiThumbsUp,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We listen, communicate clearly, and exceed expectations.',
      details: '4.9/5 customer rating'
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '1000+', label: 'Jobs Completed' },
    { number: '10+', label: 'Years Experience' },
    { number: '4.9', label: 'Star Rating' }
  ]

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
            Why Choose <span className="text-gradient-primary">Brasouth Solutions</span>?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            When you choose Brasouth Solutions, you're choosing quality, reliability, and 
            professional service that puts your needs first.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`text-center space-y-4 ${
                isVisible ? 'fade-in visible' : 'fade-in'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto shadow-medium">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="font-heading font-semibold text-xl text-neutral-900">
                {benefit.title}
              </h3>
              
              <p className="text-neutral-600 leading-relaxed">
                {benefit.description}
              </p>
              
              <p className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full inline-block">
                {benefit.details}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 mb-16 shadow-large">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`space-y-2 ${
                  isVisible ? 'slide-in-left visible' : 'slide-in-left'
                }`}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="font-heading font-bold text-3xl md:text-4xl">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className={`${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h3 className="font-heading font-bold text-3xl text-center text-neutral-900 mb-12">
            Our Simple <span className="text-primary-600">3-Step Process</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl shadow-medium">
                  1
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200"></div>
              </div>
              <h4 className="font-heading font-semibold text-xl text-neutral-900">
                Contact Us
              </h4>
              <p className="text-neutral-600">
                Call or fill out our form to describe your project. We'll provide a free estimate within 24 hours.
              </p>
              <div className="flex items-center justify-center space-x-2 text-primary-600 font-medium">
                <FiPhone className="w-4 h-4" />
                <span>Free consultation</span>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl shadow-medium">
                  2
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200"></div>
              </div>
              <h4 className="font-heading font-semibold text-xl text-neutral-900">
                Schedule Service
              </h4>
              <p className="text-neutral-600">
                We'll schedule a convenient time that works for you. Our team arrives punctually with all necessary tools.
              </p>
              <div className="flex items-center justify-center space-x-2 text-secondary-600 font-medium">
                <FiClock className="w-4 h-4" />
                <span>Same-day available</span>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl shadow-medium">
                3
              </div>
              <h4 className="font-heading font-semibold text-xl text-neutral-900">
                Quality Completion
              </h4>
              <p className="text-neutral-600">
                We complete your project efficiently and clean up afterward. You inspect and approve before we finish.
              </p>
              <div className="flex items-center justify-center space-x-2 text-secondary-600 font-medium">
                <FiCheckCircle className="w-4 h-4" />
                <span>100% guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-neutral-50 rounded-2xl p-8 md:p-12">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-neutral-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Brasouth Solutions 
            for their home repair and improvement needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-primary text-lg"
            >
              Get Your Free Estimate
            </button>
            <a
              href="tel:+15551234567"
              className="btn-secondary text-lg"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs