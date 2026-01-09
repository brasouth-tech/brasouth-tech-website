import { Phone, Clock, CheckCircle } from 'phosphor-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { trackConversion } from '@/lib/analytics'
import { CONTACT_INFO } from '@/lib/constants'

const FinalCTASection = () => {
  const handleCallClick = () => {
    trackConversion('final_cta_call')
    window.location.href = CONTACT_INFO.phone.href
  }

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-padding relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Header */}
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-yellow-300 mr-3" weight="fill" />
            <span className="bg-yellow-300 text-neutral-900 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide">
              Emergency Service Available NOW
            </span>
          </div>

          <h2 className="font-heading font-black text-4xl md:text-6xl mb-6">
            Don't Let Your Emergency Get Worse
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Every minute you wait, the problem could be getting more expensive to fix. 
            <br className="hidden md:block" />
            Call now and we'll be on our way in minutes, not hours.
          </p>

          {/* Main CTA Card */}
          <Card className="bg-white text-neutral-900 max-w-2xl mx-auto mb-8 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="font-bold text-2xl mb-4">Call Right Now For:</h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-secondary-500 mr-3" weight="fill" />
                    <span>Immediate Response</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-secondary-500 mr-3" weight="fill" />
                    <span>Free Phone Estimate</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-secondary-500 mr-3" weight="fill" />
                    <span>Expert Diagnosis</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-secondary-500 mr-3" weight="fill" />
                    <span>Upfront Pricing</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full md:w-auto text-lg px-8 py-4 bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  onClick={handleCallClick}
                  id="google-ads-contact-trigger"
                >
                  <Phone className="w-6 h-6 mr-3" weight="fill" />
                  CALL/TEXT US NOW: {CONTACT_INFO.phone.display}
                </Button>

                <p className="text-sm text-neutral-600 mt-4">
                  Available 24/7 • Same day service available • Bonded & Insured
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Social Proof */}
          <div className="text-center text-primary-100">
            <p className="text-lg mb-4">
              <strong>Join 500+ satisfied homeowners</strong> who've trusted us with their emergencies
            </p>
            <div className="flex justify-center items-center space-x-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" weight="fill" />
                Bonded & Insured
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" weight="fill" />
                BBB A+ Rating
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" weight="fill" />
                100% Satisfaction Guaranteed
              </div>
            </div>
          </div>

          {/* Final Urgency Message */}
          <div className="mt-8 p-6 bg-yellow-400 text-neutral-900 rounded-lg">
            <p className="font-bold text-lg">
              ⚠️ The longer you wait, the worse (and more expensive) it gets!
            </p>
            <p className="mt-2">
              Call now and get an expert on the line who can help you stop the damage and get it fixed fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection