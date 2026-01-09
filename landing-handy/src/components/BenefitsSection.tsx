import { trackConversion } from "@/lib/analytics";
import { CONTACT_INFO } from "@/lib/constants";
import {
  Calendar,
  CheckCircle,
  Clock,
  CurrencyDollar,
  MapPin,
  Phone,
  Shield,
  Wrench,
} from "phosphor-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const BenefitsSection = () => {
  const handleCallClick = () => {
    trackConversion("benefits_section_call");
    window.location.href = CONTACT_INFO.phone.href;
  };

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Emergency Response",
      description:
        "We answer our phones 24/7, 365 days a year. Real emergencies can't wait until Monday morning.",
      details: [
        "Average 30-minute response time",
        "No extra charges for nights/weekends",
        "Live person answers - no robots",
      ],
    },
    {
      icon: MapPin,
      title: "Local & Professional",
      description:
        "We're your neighbors in North Atlanta. Bonded, insured, and committed to our community.",
      details: [
        "Serving North Atlanta since 2015",
        "Fully bonded & insured",
        "Better Business Bureau A+ rating",
      ],
    },
    {
      icon: CurrencyDollar,
      title: "Upfront Pricing",
      description:
        "No hidden fees or surprise charges. You'll know exactly what it costs before we start work.",
      details: [
        "Free estimates over the phone",
        "Written quotes provided",
        "100% price guarantee",
      ],
    },
    {
      icon: Wrench,
      title: "Expert Technicians",
      description:
        "Our team has decades of combined experience. We've seen it all and can fix it right the first time.",
      details: [
        "Background checked technicians",
        "Ongoing training & certification",
        "Guarantee on all work",
      ],
    },
  ];

  const guarantees = [
    {
      icon: CheckCircle,
      title: "Work Guarantee",
      description: "All repairs backed by our 100% satisfaction guarantee",
    },
    {
      icon: Shield,
      title: "Bonded & Insured",
      description: "Full liability coverage for your peace of mind",
    },
    {
      icon: Calendar,
      title: "Same Day Service",
      description: "Most repairs completed within hours, not days",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-neutral-900 mb-6">
            Why We're Different from Other Repair Companies
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            When you have an emergency, you need a company you can trust. Here's
            what sets us apart from the competition and why homeowners choose us
            again and again.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <benefit.icon
                      className="w-12 h-12 text-primary-500"
                      weight="duotone"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-neutral-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      {benefit.description}
                    </p>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center text-sm text-neutral-600"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-secondary-500 mr-2"
                            weight="fill"
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantees Row */}
        <div className="bg-primary-50 rounded-2xl p-8 mb-12">
          <h3 className="font-bold text-2xl text-center text-neutral-900 mb-8">
            Our Ironclad Guarantees to You
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center">
                <guarantee.icon
                  className="w-16 h-16 text-primary-500 mx-auto mb-4"
                  weight="duotone"
                />
                <h4 className="font-bold text-lg text-neutral-900 mb-2">
                  {guarantee.title}
                </h4>
                <p className="text-neutral-600">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-secondary-50 rounded-2xl p-8 text-center">
          <h3 className="font-bold text-2xl text-neutral-900 mb-4">
            The Bottom Line
          </h3>
          <p className="text-lg text-neutral-700 mb-6 max-w-2xl mx-auto">
            When you call us, you're not just getting a repair service - you're
            getting peace of mind. We'll show up fast, fix it right, and stand
            behind our work. That's our promise to you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="cta-button" onClick={handleCallClick} id="google-ads-contact-trigger">
              <Phone className="w-5 h-5 mr-2" weight="fill" />
              Call/Text Us Now: {CONTACT_INFO.phone.display}
            </Button>
            <p className="text-sm text-neutral-600">
              Available 24/7 • Free Estimates • Bonded & Insured
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
