import { trackConversion } from "@/lib/analytics";
import { BUSINESS_INFO, CONTACT_INFO } from "@/lib/constants";
import { CheckCircle, Phone, Shield, Wrench } from "phosphor-react";
import { Button } from "./ui/button";

const SolutionSection = () => {
  const handlePhoneClick = () => {
    trackConversion("solution_section_call");
    window.location.href = CONTACT_INFO.phone.href;
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary-500 text-white overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 leading-tight">
            Meet {BUSINESS_INFO.name}
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-secondary-400 mb-4 sm:mb-6 leading-tight">
            Professional Home Repairs by Bonded & Insured Experts
          </h3>
          <p className="text-sm sm:text-base lg:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Finally, a handyman service that puts quality and reliability first.
            We're bonded, insured professionals who take pride in doing the job
            right the first time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 max-w-2xl mx-auto lg:max-w-none">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Wrench
                  className="w-6 h-6 sm:w-8 sm:h-8 text-secondary-400 flex-shrink-0 mt-1"
                  weight="duotone"
                />
                <div className="min-w-0">
                  <h4 className="font-bold text-lg sm:text-xl mb-2 leading-tight">
                    Professional Quality Work
                  </h4>
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                    Expert craftsmanship on every repair. We take pride in doing
                    it right the first time.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <Shield
                  className="w-6 h-6 sm:w-8 sm:h-8 text-secondary-400 flex-shrink-0 mt-1"
                  weight="duotone"
                />
                <div className="min-w-0">
                  <h4 className="font-bold text-lg sm:text-xl mb-2 leading-tight">
                    Bonded & Insured
                  </h4>
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                    Full coverage for your peace of mind. Professional, reliable
                    service you can trust.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <CheckCircle
                  className="w-6 h-6 sm:w-8 sm:h-8 text-secondary-400 flex-shrink-0 mt-1"
                  weight="duotone"
                />
                <div className="min-w-0">
                  <h4 className="font-bold text-lg sm:text-xl mb-2 leading-tight">
                    Upfront Pricing
                  </h4>
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                    No hidden fees or surprises. Clear, honest pricing before we
                    start any work.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-xs sm:text-sm">
                    ✓
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-lg sm:text-xl mb-2 leading-tight">
                    100% Quality Guarantee
                  </h4>
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                    We stand behind our work. If you're not satisfied, we'll
                    make it right.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
              <h4 className="font-bold text-lg sm:text-xl mb-3 text-secondary-400">
                Our Simple Process:
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shrink-0">
                    1
                  </div>
                  <p className="text-sm sm:text-base">
                    Call us at {CONTACT_INFO.phone.display}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shrink-0">
                    2
                  </div>
                  <p className="text-sm sm:text-base">
                    We schedule at your convenience
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shrink-0">
                    3
                  </div>
                  <p className="text-sm sm:text-base">
                    Professional repair completed right
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center max-w-md mx-auto lg:max-w-none">
            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl mb-6 sm:mb-8">
              <h3 className="font-heading font-black text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 text-secondary-400">
                QUALITY REPAIRS
              </h3>
              <p className="text-sm sm:text-base lg:text-xl mb-4 sm:mb-6">
                Professional service by bonded & insured experts. Call today for
                reliable repairs!
              </p>

              <Button
                size="lg"
                className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-black text-base sm:text-lg lg:text-xl py-4 sm:py-6 lg:py-8 mb-3 sm:mb-4 transform hover:scale-105 shadow-2xl"
                onClick={handlePhoneClick}
              >
                <Phone
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mr-2 sm:mr-3"
                  weight="duotone"
                />
                <span className="whitespace-nowrap">
                  CALL NOW - {CONTACT_INFO.phone.display}
                </span>
              </Button>

              <p className="text-blue-100 font-bold text-sm sm:text-base lg:text-lg">
                🏠 Professional Home Repairs - Same Day Service Available
              </p>
            </div>

            <div className="bg-secondary-500 p-4 sm:p-6 rounded-xl text-center">
              <p className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">
                Quality Guaranteed
              </p>
              <p className="text-secondary-100 text-sm sm:text-base">
                Bonded & Insured for Your Protection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
