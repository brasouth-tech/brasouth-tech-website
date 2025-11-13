import { Star, Quotes } from 'phosphor-react'
import { Card, CardContent } from './ui/card'
import { trackConversion } from '@/lib/analytics'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Homeowner, Alpharetta",
      rating: 5,
      text: "When my water heater burst at 11 PM on Sunday, I thought I'd be without hot water for days. Called these guys and they were at my house within 30 minutes! Fixed everything perfectly and charged exactly what they quoted. Amazing service!",
      service: "Emergency Plumbing",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
    },
    {
      name: "Mike Rodriguez",
      location: "Homeowner, Johns Creek",
      rating: 5,
      text: "Lost power in half my house during the storm. These technicians diagnosed the problem quickly and had me back up and running in 2 hours. Professional, clean, and honest pricing. Will definitely call again!",
      service: "Emergency Electrical",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
    },
    {
      name: "Jennifer Chen",
      location: "Homeowner, Roswell",
      rating: 5,
      text: "Toilet overflowed upstairs and water was coming through my ceiling. Panicked and called - they walked me through stopping the water over the phone while their tech drove over. Saved my kitchen ceiling!",
      service: "Emergency Plumbing",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
    },
    {
      name: "David Thompson",
      location: "Homeowner, Sandy Springs",
      rating: 5,
      text: "AC died during the heat wave. Called at 7 AM and they were here by 9 AM. Fixed it fast and explained everything clearly. The price was fair and they guaranteed their work. Excellent company!",
      service: "Emergency HVAC",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
    },
    {
      name: "Lisa Martinez",
      location: "Homeowner, Marietta",
      rating: 5,
      text: "Garbage disposal jammed right before Thanksgiving dinner. These guys came out on the holiday and had it fixed in 20 minutes. They saved our family dinner! Can't thank them enough.",
      service: "Emergency Plumbing",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
    },
    {
      name: "Robert Kim",
      location: "Homeowner, Dunwoody",
      rating: 5,
      text: "Electrical outlet sparked and tripped all my breakers. Called and they came right out to make sure it was safe. Turned out to be a simple fix but they took the time to check everything. Great peace of mind!",
      service: "Emergency Electrical",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
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
                  <div className="relative">
                    <img 
                      src={testimonial.photo} 
                      alt={`Photo of ${testimonial.name}, satisfied customer`}
                      className="w-12 h-12 rounded-full mr-3 bg-gray-200 object-cover border-2 border-secondary-200"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=2ECC71&color=fff&size=64`
                      }}
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-2">
                    <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                    <div className="text-sm text-neutral-500">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Yelp Authority Badge */}
        <div className="text-center">
          <h3 className="font-bold text-xl mb-6 text-neutral-700">Verified Reviews On:</h3>
          <div className="max-w-md mx-auto">
            <a 
              href="https://www.yelp.com/biz/brasouth-handy-services-orlando"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion('yelp_reviews_click')}
              className="block bg-gradient-to-r from-secondary-500 to-secondary-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-center space-x-4 mb-3">
                <div className="bg-white p-3 rounded-full">
                  <svg
                    fill="#dc2626"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.961 22.279c0.246-0.273 0.601-0.444 0.995-0.444 0.739 0 1.338 0.599 1.338 1.338 0 0.016-0 0.032-0.001 0.048l0-0.002-0.237 6.483c-0.027 0.719-0.616 1.293-1.34 1.293-0.077 0-0.153-0.006-0.226-0.019l0.008 0.001c-1.763-0.303-3.331-0.962-4.69-1.902l0.039 0.025c-0.351-0.245-0.578-0.647-0.578-1.102 0-0.346 0.131-0.661 0.346-0.898l-0.001 0.001 4.345-4.829zM12.853 20.434l-6.301 1.572c-0.097 0.025-0.208 0.039-0.322 0.039-0.687 0-1.253-0.517-1.332-1.183l-0.001-0.006c-0.046-0.389-0.073-0.839-0.073-1.295 0-1.324 0.223-2.597 0.635-3.781l-0.024 0.081c0.183-0.534 0.681-0.911 1.267-0.911 0.214 0 0.417 0.050 0.596 0.14l-0.008-0.004 5.833 2.848c0.45 0.221 0.754 0.677 0.754 1.203 0 0.623-0.427 1.147-1.004 1.294l-0.009 0.002zM13.924 15.223l-6.104-10.574c-0.112-0.191-0.178-0.421-0.178-0.667 0-0.529 0.307-0.987 0.752-1.204l0.008-0.003c1.918-0.938 4.153-1.568 6.511-1.761l0.067-0.004c0.031-0.003 0.067-0.004 0.104-0.004 0.738 0 1.337 0.599 1.337 1.337 0 0.001 0 0.001 0 0.002v-0 12.207c-0 0.739-0.599 1.338-1.338 1.338-0.493 0-0.923-0.266-1.155-0.663l-0.003-0.006zM19.918 20.681l6.176 2.007c0.541 0.18 0.925 0.682 0.925 1.274 0 0.209-0.048 0.407-0.134 0.584l0.003-0.008c-0.758 1.569-1.799 2.889-3.068 3.945l-0.019 0.015c-0.23 0.19-0.527 0.306-0.852 0.306-0.477 0-0.896-0.249-1.134-0.625l-0.003-0.006-3.449-5.51c-0.128-0.201-0.203-0.446-0.203-0.709 0-0.738 0.598-1.336 1.336-1.336 0.147 0 0.289 0.024 0.421 0.068l-0.009-0.003zM26.197 16.742l-6.242 1.791c-0.11 0.033-0.237 0.052-0.368 0.052-0.737 0-1.335-0.598-1.335-1.335 0-0.282 0.087-0.543 0.236-0.758l-0.003 0.004 3.63-5.383c0.244-0.358 0.65-0.59 1.111-0.59 0.339 0 0.649 0.126 0.885 0.334l-0.001-0.001c1.25 1.104 2.25 2.459 2.925 3.99l0.029 0.073c0.070 0.158 0.111 0.342 0.111 0.535 0 0.608-0.405 1.121-0.959 1.286l-0.009 0.002z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-black text-2xl">YELP</div>
                  <div className="text-sm opacity-90">Verified Reviews</div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-yellow-300 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4" weight="fill" />
                    ))}
                  </div>
                  <div className="text-sm font-bold">4.9/5 Rating</div>
                </div>
              </div>
              <div className="text-center">
                <p className="font-semibold mb-1">Click to View All Reviews</p>
                <p className="text-xs opacity-80">See what your neighbors are saying about our services</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection