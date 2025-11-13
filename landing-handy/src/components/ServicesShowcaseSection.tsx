import {
  CheckCircle,
  House,
  Lightning,
  PaintBrush,
  Wrench,
} from "phosphor-react";
import { Card, CardContent } from "./ui/card";

const ServicesShowcaseSection = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-primary-500" weight="duotone" />,
      title: "Furniture Assembly",
      description:
        "Expert assembly of furniture, equipment, and fixtures with precision and care.",
      image: "/marketing/furniture-assembly-one.jpg",
      features: ["Professional tools", "Clean workspace", "Quality guaranteed"],
    },
    {
      icon: <House className="w-8 h-8 text-primary-500" weight="duotone" />,
      title: "Deck & Outdoor Work",
      description:
        "Professional deck repairs, installations, and outdoor project expertise.",
      image: "/marketing/deck-one.jpg",
      features: [
        "Weather-resistant materials",
        "Code compliance",
        "Structural integrity",
      ],
    },
    {
      icon: (
        <PaintBrush className="w-8 h-8 text-primary-500" weight="duotone" />
      ),
      title: "Interior Repairs",
      description:
        "Comprehensive interior work including drywall, painting, and ceiling repairs.",
      image: "/marketing/ceiling-one.jpg",
      features: ["Detail-oriented", "Clean finish", "Color matching"],
    },
    {
      icon: <Lightning className="w-8 h-8 text-primary-500" weight="duotone" />,
      title: "Electrical & Fixtures",
      description:
        "Safe installation of fixtures, outlets, and basic electrical work by certified professionals.",
      image: "/marketing/lightning-one.jpg",
      features: ["Safety first", "Code compliant", "Bonded & insured"],
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4 sm:mb-6 leading-tight">
            Professional Services You Can Count On
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From simple repairs to complex installations, our bonded & insured
            team delivers quality craftsmanship on every project, big or small.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={service.image}
                  alt={`${
                    service.title
                  } - Professional ${service.title.toLowerCase()} services by Brasouth Solutions handyman team`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white rounded-full p-2 shadow-lg">
                    {service.icon}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-neutral-600"
                    >
                      <CheckCircle
                        className="w-4 h-4 text-secondary-500 mr-2 flex-shrink-0"
                        weight="fill"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Trust Message */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-secondary-50 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
            <h3 className="font-bold text-lg sm:text-xl text-neutral-900 mb-3">
              Every Project Gets Our Full Attention
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Whether it's a quick repair or a major installation, we bring the
              same level of professionalism, quality tools, and attention to
              detail to every job site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcaseSection;
