import { Star, Quotes } from 'phosphor-react'
import { Card, CardContent } from './ui/card'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Homeowner, Alpharetta",
      rating: 5,
      text: "When my water heater burst at 11 PM on Sunday, I thought I'd be without hot water for days. Called these guys and they were at my house within 30 minutes! Fixed everything perfectly and charged exactly what they quoted. Amazing service!",
      service: "Emergency Plumbing",
      photo: "/api/placeholder/64/64"
    },
    {
      name: "Mike Rodriguez",
      location: "Homeowner, Johns Creek",
      rating: 5,
      text: "Lost power in half my house during the storm. These technicians diagnosed the problem quickly and had me back up and running in 2 hours. Professional, clean, and honest pricing. Will definitely call again!",
      service: "Emergency Electrical",
      photo: "/api/placeholder/64/64"
    },
    {
      name: "Jennifer Chen",
      location: "Homeowner, Roswell",
      rating: 5,
      text: "Toilet overflowed upstairs and water was coming through my ceiling. Panicked and called - they walked me through stopping the water over the phone while their tech drove over. Saved my kitchen ceiling!",
      service: "Emergency Plumbing",
      photo: "/api/placeholder/64/64"
    },
    {
      name: "David Thompson",
      location: "Homeowner, Sandy Springs",
      rating: 5,
      text: "AC died during the heat wave. Called at 7 AM and they were here by 9 AM. Fixed it fast and explained everything clearly. The price was fair and they guaranteed their work. Excellent company!",
      service: "Emergency HVAC",
      photo: "/api/placeholder/64/64"
    },
    {
      name: "Lisa Martinez",
      location: "Homeowner, Marietta",
      rating: 5,
      text: "Garbage disposal jammed right before Thanksgiving dinner. These guys came out on the holiday and had it fixed in 20 minutes. They saved our family dinner! Can't thank them enough.",
      service: "Emergency Plumbing",
      photo: "/api/placeholder/64/64"
    },
    {
      name: "Robert Kim",
      location: "Homeowner, Dunwoody",
      rating: 5,
      text: "Electrical outlet sparked and tripped all my breakers. Called and they came right out to make sure it was safe. Turned out to be a simple fix but they took the time to check everything. Great peace of mind!",
      service: "Emergency Electrical",
      photo: "/api/placeholder/64/64"
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        weight="fill"
      />
    ))
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-neutral-900 mb-6">
            Real Stories from Real Homeowners
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what your neighbors are saying about 
            our emergency repair services.
          </p>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="font-bold text-lg">4.9/5</span>
            <span className="text-neutral-600">from 500+ reviews</span>
          </div>
          <p className="text-sm text-neutral-500">Based on Google, Facebook & BBB reviews</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quotes 
                  className="w-8 h-8 text-primary-200 absolute top-4 right-4" 
                  weight="duotone" 
                />
                
                {/* Stars */}
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Service Badge */}
                <div className="inline-block bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {testimonial.service}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-neutral-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-3 bg-gray-200"
                  />
                  <div>
                    <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                    <div className="text-sm text-neutral-500">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <h3 className="font-bold text-xl mb-6 text-neutral-700">As Featured On:</h3>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="bg-gray-100 px-4 py-2 rounded">Google Reviews</div>
            <div className="bg-gray-100 px-4 py-2 rounded">Facebook</div>
            <div className="bg-gray-100 px-4 py-2 rounded">BBB</div>
            <div className="bg-gray-100 px-4 py-2 rounded">Nextdoor</div>
          </div>
          <p className="text-sm text-neutral-500 mt-4">
            * Replace with actual review platform logos
          </p>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection