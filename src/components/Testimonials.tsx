import React, { useState, useEffect } from 'react'
import { Star, CaretLeft, CaretRight, MapPin, User } from 'phosphor-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  service: string
}

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('testimonials')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Downtown District',
      rating: 5,
      text: 'Brasouth Solutions transformed my kitchen with professional cabinet installation and electrical work. They were punctual, clean, and the quality exceeded my expectations. I highly recommend them!',
      service: 'Kitchen Renovation'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      location: 'Riverside Area',
      rating: 5,
      text: 'Called them for an emergency plumbing issue on a Sunday. They came out the same day and fixed the problem quickly and affordably. Great customer service and professional work.',
      service: 'Emergency Plumbing'
    },
    {
      id: 3,
      name: 'Emily Chen',
      location: 'Oak Grove',
      rating: 5,
      text: 'The team painted our entire house exterior and did an amazing job. They were careful with our landscaping, used quality materials, and finished ahead of schedule. Very impressed!',
      service: 'Exterior Painting'
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Maple Heights',
      rating: 5,
      text: 'Professional deck repair and staining service. They explained everything clearly, provided a fair estimate, and the results look fantastic. Will definitely use them again.',
      service: 'Deck Restoration'
    },
    {
      id: 5,
      name: 'Lisa Martinez',
      location: 'Cedar Park',
      rating: 5,
      text: 'From start to finish, Brasouth Solutions was professional and reliable. They installed new light fixtures and repaired drywall damage. Clean work and great communication throughout.',
      service: 'Electrical & Repairs'
    },
    {
      id: 6,
      name: 'Robert Wilson',
      location: 'Pine Valley',
      rating: 5,
      text: 'Needed several small repairs around the house. They took care of everything in one visit - fixed a leaky faucet, repaired a door, and installed new shelving. Excellent value!',
      service: 'Multiple Repairs'
    }
  ]

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2))
  }

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2))
  }

  const goToSlide = (index: number): void => {
    setCurrentSlide(index)
  }

  const scrollToContact = (): void => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="section bg-neutral-50">
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
            What Our <span className="text-gradient-primary">Customers Say</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what homeowners in our community 
            are saying about their experience with Brasouth Solutions.
          </p>
        </div>

        {/* Reviews Summary */}
        <div className={`text-center mb-12 ${isVisible ? 'slide-in-left visible' : 'slide-in-left'}`}>
          <Card className="inline-flex items-center space-x-2 bg-white px-8 py-4 shadow-soft border-0">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400" weight="fill" />
              ))}
            </div>
            <span className="font-semibold text-lg text-neutral-900">4.9 out of 5</span>
            <span className="text-neutral-600">• 127 reviews</span>
          </Card>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 grid md:grid-cols-2 gap-8 px-4">
                  {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                    <Card
                      key={testimonial.id}
                      className={`testimonial-card hover:shadow-lg transition-all duration-300 ${
                        isVisible ? 'fade-in visible' : 'fade-in'
                      }`}
                      style={{
                        animationDelay: `${index * 200}ms`
                      }}
                    >
                      <CardContent className="p-6">
                        {/* Rating */}
                        <div className="flex items-center space-x-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400" weight="fill" />
                          ))}
                        </div>

                        {/* Review Text */}
                        <blockquote className="text-neutral-700 leading-relaxed mb-6 text-base">
                          "{testimonial.text}"
                        </blockquote>

                        {/* Service Badge */}
                        <div className="mb-4">
                          <Badge className="bg-primary-100 text-primary-700 border-primary-200">
                            {testimonial.service}
                          </Badge>
                        </div>

                        {/* Customer Info */}
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                            <User className="w-6 h-6" weight="duotone" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-neutral-900">
                              {testimonial.name}
                            </h4>
                            <div className="flex items-center space-x-1 text-sm text-neutral-600">
                              <MapPin className="w-3 h-3" weight="duotone" />
                              <span>{testimonial.location}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white shadow-medium rounded-full text-neutral-600 hover:text-primary-600 hover:shadow-large"
            aria-label="Previous testimonials"
          >
            <CaretLeft className="w-6 h-6" weight="bold" />
          </Button>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white shadow-medium rounded-full text-neutral-600 hover:text-primary-600 hover:shadow-large"
            aria-label="Next testimonials"
          >
            <CaretRight className="w-6 h-6" weight="bold" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-primary-500 w-8'
                  : 'bg-neutral-300 hover:bg-primary-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Review Platforms */}
        <div className="mt-16 text-center">
          <p className="text-neutral-600 mb-6">Find us on popular review platforms:</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-center">
              <div className="font-bold text-lg text-neutral-900">Google</div>
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400" weight="fill" />
                ))}
                <span className="text-sm text-neutral-600 ml-1">4.9</span>
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg text-neutral-900">Yelp</div>
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400" weight="fill" />
                ))}
                <span className="text-sm text-neutral-600 ml-1">4.8</span>
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg text-neutral-900">Facebook</div>
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400" weight="fill" />
                ))}
                <span className="text-sm text-neutral-600 ml-1">5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Card className="mt-16 bg-white shadow-soft border-0">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-neutral-900 mb-4">
              Ready to Join Our Happy Customers?
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Experience the same quality service and professionalism that our customers rave about. 
              Get your free estimate today!
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="btn-primary"
            >
              Get Your Free Estimate
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Testimonials