import { trackConversion } from "@/lib/analytics";
import { CONTACT_INFO } from "@/lib/constants";
import { CheckCircle, Star } from "phosphor-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const GallerySection = () => {
  const handleViewMoreClick = () => {
    trackConversion("gallery_view_more");
  };

  const handleCallClick = () => {
    trackConversion("gallery_cta_call");
    window.location.href = CONTACT_INFO.phone.href;
  };

  const projectGallery = [
    {
      image: "/past-jobs/wall-prep-one.jpeg",
      title: "Interior Wall Preparation",
      description:
        "Professional drywall repair and surface preparation for painting",
      category: "Interior Work",
    },
    {
      image: "/past-jobs/wall-prep-two.jpeg",
      title: "Precision Wall Finishing",
      description: "Expert texture matching and seamless wall repairs",
      category: "Drywall Repair",
    },
    {
      image: "/past-jobs/wall-prep-three.jpeg",
      title: "Quality Surface Prep",
      description: "Meticulous preparation ensuring perfect paint adhesion",
      category: "Paint Prep",
    },
    {
      image: "/past-jobs/wall-prep-four.jpeg",
      title: "Professional Restoration",
      description: "Complete wall restoration with attention to detail",
      category: "Restoration",
    },
    {
      image: "/past-jobs/wall-prep-five.jpeg",
      title: "Expert Craftsmanship",
      description: "High-quality finish work that exceeds expectations",
      category: "Finishing Work",
    },
    {
      image: "/past-jobs/wall-prep-six.jpeg",
      title: "Seamless Repairs",
      description:
        "Professional repairs that blend perfectly with existing surfaces",
      category: "Repair Work",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-neutral-50">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4 sm:mb-6 leading-tight">
            See Our Quality Work in Action
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Don't just take our word for it. Browse real projects completed by
            our bonded & insured verified professionals. Every job reflects our
            commitment to quality and attention to detail.
          </p>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-6 text-sm text-neutral-600 mb-8">
            <div className="flex items-center">
              <CheckCircle
                className="w-4 h-4 text-secondary-500 mr-2"
                weight="fill"
              />
              <span>All Work Guaranteed</span>
            </div>
            <div className="flex items-center">
              <CheckCircle
                className="w-4 h-4 text-secondary-500 mr-2"
                weight="fill"
              />
              <span>Bonded & Insured</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 mr-1" weight="fill" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>

        {/* Image Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {projectGallery.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={handleViewMoreClick}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={project.image}
                  alt={`${project.title} - Professional handyman work by Brasouth Solutions showing ${project.description}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="bg-secondary-500 text-white px-2 py-1 rounded text-xs font-semibold mb-2 inline-block">
                      {project.category}
                    </div>
                    <h3 className="font-bold text-sm sm:text-base mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm opacity-90">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="font-bold text-xl sm:text-2xl text-neutral-900 mb-4">
              Ready for Quality Work Like This?
            </h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Join 500+ satisfied homeowners who chose professional quality.
              Every project gets the same attention to detail you see above.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-secondary-500 hover:bg-secondary-600 text-white font-black text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                onClick={handleCallClick}
                id="google-ads-contact-trigger"
              >
                <span className="whitespace-nowrap">
                  Get Your Quote - {CONTACT_INFO.phone.display}
                </span>
              </Button>
              <p className="text-sm text-neutral-500">
                Free estimates • Same day service available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
