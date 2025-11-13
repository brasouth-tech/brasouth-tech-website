import { CheckCircle, Shield, Star, Medal } from 'phosphor-react'
import { Card, CardContent } from './ui/card'
import { BUSINESS_INFO } from '@/lib/constants'

const TrustSection = () => {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-neutral-900 mb-6">
            Why {BUSINESS_INFO.name} is the Most Trusted Name in Emergency Repairs
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Don't trust your emergency repairs to just anyone. Here's why over 500 homeowners 
            choose us when they need help fast.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <Shield className="w-16 h-16 text-secondary-500 mx-auto mb-4" weight="duotone" />
              <h3 className="font-bold text-lg mb-2">Bonded & Insured</h3>
              <p className="text-sm text-neutral-600">$1M+ Liability Coverage</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <Star className="w-16 h-16 text-yellow-500 mx-auto mb-4" weight="fill" />
              <h3 className="font-bold text-lg mb-2">Yelp Verified</h3>
              <p className="text-sm text-neutral-600">4.9/5 Star Rating</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <CheckCircle className="w-16 h-16 text-primary-500 mx-auto mb-4" weight="duotone" />
              <h3 className="font-bold text-lg mb-2">Quality Guaranteed</h3>
              <p className="text-sm text-neutral-600">100% Satisfaction Promise</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <Medal className="w-16 h-16 text-primary-500 mx-auto mb-4" weight="duotone" />
              <h3 className="font-bold text-lg mb-2">Since {BUSINESS_INFO.established}</h3>
              <p className="text-sm text-neutral-600">Proven Track Record</p>
            </CardContent>
          </Card>
        </div>

        {/* Professional Credentials Badges Placeholder */}
        {/* <div className="text-center">
          <h3 className="font-bold text-xl mb-6 text-neutral-700">Certified & Approved By:</h3>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <p className="font-bold text-gray-600">BONDED & INSURED</p>
              <p className="text-sm text-gray-500">Full Coverage</p>
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <p className="font-bold text-gray-600">BBB ACCREDITED</p>
              <p className="text-sm text-gray-500">A+ Rating</p>
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <p className="font-bold text-gray-600">QUALITY GUARANTEE</p>
              <p className="text-sm text-gray-500">100% Satisfaction</p>
            </div>
          </div>
          <p className="text-sm text-neutral-500 mt-4">
            * Replace with actual bonding, insurance, and certification badges/logos
          </p>
        </div> */}
      </div>
    </section>
  )
}

export default TrustSection