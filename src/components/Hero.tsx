import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/contactInfo";
import { Clock, Phone, Shield, Star } from "phosphor-react";
import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = (): void => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center hero-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 border border-white rounded-lg rotate-12"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-8 pb-32 md:pb-16 mt-8 md:mt-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div
            className={`text-white space-y-6 md:space-y-8 ${
              isVisible ? "fade-in visible" : "fade-in"
            }`}
          >
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-white font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                Professional Handyman Services{" "}
                <span className="text-secondary-400">You Can Trust</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed">
                From small repairs to major improvements, we deliver quality
                workmanship that saves you time and gives you peace of mind.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 md:py-6">
              <div className="text-center">
                <Shield
                  className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 text-secondary-400"
                  weight="duotone"
                />
                <p className="text-xs sm:text-sm font-medium">Fully Insured</p>
              </div>
              <div className="text-center">
                <Clock
                  className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 text-secondary-400"
                  weight="duotone"
                />
                <p className="text-xs sm:text-sm font-medium">
                  Same Day Service
                </p>
              </div>
              <div className="text-center">
                <Star
                  className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 text-secondary-400"
                  weight="duotone"
                />
                <p className="text-xs sm:text-sm font-medium">5-Star Rated</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold transform hover:scale-105 shadow-lg text-base sm:text-lg px-6 py-3"
              >
                Get Free Estimate Today
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-6 py-3"
              >
                <a
                  href={CONTACT_INFO.phone.href}
                  className="flex items-center justify-center space-x-2 sm:space-x-3"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" weight="duotone" />
                  <span className="text-sm sm:text-base">
                    {CONTACT_INFO.phone.display}
                  </span>
                </a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-6 md:pt-8 border-t border-white/20 flex flex-col items-center">
              <p className="text-blue-100 mb-2 sm:mb-3 text-sm sm:text-base">
                Trusted by 500+ Local Homeowners
              </p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                    weight="fill"
                  />
                ))}
                <span className="ml-2 text-white font-semibold text-sm sm:text-base">
                  4.9/5 Average Rating
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div
            className={`${
              isVisible ? "slide-in-right visible" : "slide-in-right"
            }`}
          >
            <div className="relative px-4 sm:px-8 md:px-0">
              {/* Main Hero Image */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8 shadow-2xl mx-auto max-w-lg md:max-w-none">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img
                    src="/marketing/crew-ladder-one.jpg"
                    alt="Professional handyman crew working with ladder - Brasouth Solutions team providing quality home repair services"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-base md:text-lg mb-2 text-white">
                    Professional Work in Action
                  </h3>
                  <p className="text-xs md:text-sm text-blue-100">
                    Trusted by 500+ Local Homeowners
                  </p>
                </div>
              </div>

              {/* Floating Cards - Mobile Responsive */}
              <div className="hidden md:block">
                {/* Desktop: Absolute positioned cards */}
                <Badge className="absolute -top-6 -left-6 bg-secondary-500 text-white p-4 rounded-lg shadow-xl border-0">
                  <div className="text-center">
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-sm">Emergency Service</p>
                  </div>
                </Badge>

                <Badge className="group absolute -bottom-6 -right-6 bg-white text-neutral-900 group-hover:text-white p-4 rounded-lg shadow-xl border-0 transition-colors duration-300 cursor-pointer">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-600 group-hover:text-white transition-colors duration-300">
                      100%
                    </p>
                    <p className="text-sm font-medium group-hover:text-white transition-colors duration-300">
                      Satisfaction Guaranteed
                    </p>
                  </div>
                </Badge>
              </div>

              {/* Mobile: Stack cards below image */}
              <div className="md:hidden mt-6 mb-8 grid grid-cols-2 gap-4 relative z-20">
                <Badge className="bg-secondary-500 text-white p-3 rounded-lg shadow-xl border-0 text-center">
                  <div>
                    <p className="text-lg font-bold">24/7</p>
                    <p className="text-xs">Emergency Service</p>
                  </div>
                </Badge>

                <Badge className="group bg-white text-neutral-900 group-hover:text-white p-3 rounded-lg shadow-xl border-0 text-center transition-colors duration-300 cursor-pointer">
                  <div>
                    <p className="text-lg font-bold text-primary-600 group-hover:text-white transition-colors duration-300">
                      100%
                    </p>
                    <p className="text-xs font-medium group-hover:text-white transition-colors duration-300">
                      Satisfaction Guaranteed
                    </p>
                  </div>
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-5">
        <svg
          className="relative block w-full h-12 md:h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ marginBottom: "-1px" }} // Prevent gap on some browsers
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#f8f9fa"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
