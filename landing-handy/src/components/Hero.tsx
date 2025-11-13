import { trackConversion } from '@/lib/analytics'
import { BUSINESS_INFO, CONTACT_INFO } from '@/lib/constants'
import { Clock, Phone, Shield, Star } from 'phosphor-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import InsuranceBadge from './InsuranceBadge'
const Hero = () => {
  const handlePhoneClick = () => {
    trackConversion('hero_phone_click')
    window.location.href = CONTACT_INFO.phone.href
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white overflow-hidden">
      {/* Floating Header */}
      <header className="absolute top-0 left-0 right-0 z-50 py-4">
        <div className="px-4 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="bg-white rounded-lg px-3 py-2 shadow-lg">
                <img 
                  src="/logo-new-colors.png" 
                  alt={BUSINESS_INFO.name}
                  className="h-8 sm:h-10 w-auto"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                {/* <h1 className="font-heading font-bold text-lg sm:text-2xl whitespace-nowrap">{BUSINESS_INFO.name}</h1> */}
                <InsuranceBadge variant="header" showDetails={false} />
              </div>
            </div>
            <Button
              size="sm"
              className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold text-sm sm:text-base hidden sm:flex shrink-0"
              onClick={handlePhoneClick}
            >
              <Phone className="w-4 h-4 mr-1 sm:mr-2" weight="duotone" />
              <span className="hidden sm:inline">{CONTACT_INFO.phone.display}</span>
              <span className="sm:hidden">Call</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Background Elements - Mobile Safe */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-4 w-16 sm:w-32 h-16 sm:h-32 border-2 border-white rounded-full animate-pulse-slow"></div>
        <div className="absolute top-60 right-4 w-12 sm:w-20 h-12 sm:h-20 border border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-40 left-1/4 w-8 sm:w-16 h-8 sm:h-16 border-2 border-white rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Main Message */}
            <div className="space-y-6 sm:space-y-8 max-w-none">
              {/* Service Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <Badge className="bg-secondary-500 text-white px-3 py-1 text-sm sm:text-base font-bold whitespace-nowrap">
                  ⭐ QUALITY REPAIRS
                </Badge>
                <Badge className="bg-primary-400 text-white px-3 py-1 text-sm sm:text-base font-bold whitespace-nowrap">
                  SAME DAY SERVICE
                </Badge>
              </div>

              {/* Main Headline */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight break-words">
                  Professional Home Repairs
                  <span className="block text-secondary-400">Done Right</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-100 max-w-2xl">
                  Reliable, quality handyman services by 
                  <span className="text-secondary-400"> Bonded & Insured </span>
                  professionals you can trust.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 py-4 sm:py-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-secondary-400 flex-shrink-0" weight="duotone" />
                  <div className="min-w-0">
                    <p className="font-bold text-sm sm:text-base">Bonded & Insured</p>
                    <p className="text-xs sm:text-sm text-blue-200">Verified Full Coverage</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-secondary-400 flex-shrink-0" weight="duotone" />
                  <div className="min-w-0">
                    <p className="font-bold text-sm sm:text-base">Same Day</p>
                    <p className="text-xs sm:text-sm text-blue-200">Service Available</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 flex-shrink-0" weight="fill" />
                  <div className="min-w-0">
                    <p className="font-bold text-sm sm:text-base">500+ Reviews</p>
                    <p className="text-xs sm:text-sm text-blue-200">5-Star Rated</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs sm:text-sm">✓</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-sm sm:text-base">Quality Guaranteed</p>
                    <p className="text-xs sm:text-sm text-blue-200">100% Satisfaction</p>
                  </div>
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="space-y-3 sm:space-y-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-secondary-500 hover:bg-secondary-600 text-white font-black text-base sm:text-lg lg:text-xl py-4 sm:py-6 px-6 sm:px-12 transform hover:scale-105 shadow-2xl"
                  onClick={handlePhoneClick}
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" weight="duotone" />
                  <span className="whitespace-nowrap">CALL NOW - {CONTACT_INFO.phone.display}</span>
                </Button>

                <p className="text-center sm:text-left text-blue-100 text-sm sm:text-base lg:text-lg">
                  🏠 <strong>Professional Home Repairs</strong> - Same day service available
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="border-t border-white/20 pt-4 sm:pt-6">
                <p className="text-blue-200 mb-2 sm:mb-3 text-sm sm:text-base">Trusted by 500+ Local Homeowners</p>
                <div className="flex items-center flex-wrap gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" weight="fill" />
                  ))}
                  <span className="ml-2 font-bold text-sm sm:text-base">4.9/5 Average Rating</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Trust Elements */}
            <div className="space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              {/* Hero Professional Image */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-3 sm:p-4 lg:p-6 shadow-2xl mx-auto max-w-md lg:max-w-none">
                <div className="aspect-video rounded-xl overflow-hidden relative">
                  <img 
                    src="/marketing/crew-ladder-one.jpg" 
                    alt="Professional Brasouth Solutions handyman team working on quality home repairs with safety equipment and professional tools"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="text-white p-4 w-full">
                      <h3 className="font-bold text-lg sm:text-xl mb-1">Professional Team</h3>
                      <p className="text-sm sm:text-base opacity-90">Bonded & Insured Experts</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insurance Verification */}
              <InsuranceBadge variant="hero" className="mx-auto max-w-md lg:max-w-none" />

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:max-w-none">
                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg text-center">
                  <p className="text-2xl sm:text-3xl font-black text-secondary-400">500+</p>
                  <p className="text-xs sm:text-sm">Happy Customers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg text-center">
                  <p className="text-2xl sm:text-3xl font-black text-secondary-400">Same Day</p>
                  <p className="text-xs sm:text-sm">Service Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-secondary-500 text-white py-3 sm:py-4 z-50 shadow-lg lg:hidden">
        <div className="px-4 max-w-md mx-auto">
          <Button
            className="w-full bg-white text-secondary-500 hover:bg-gray-100 font-black text-base sm:text-lg py-3 sm:py-4"
            onClick={handlePhoneClick}
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" weight="duotone" />
            <span className="whitespace-nowrap">CALL NOW - {CONTACT_INFO.phone.display}</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero