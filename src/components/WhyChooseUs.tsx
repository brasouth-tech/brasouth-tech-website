import React, { useState, useEffect } from "react";
import {
  Shield,
  Clock,
  Star,
  Users,
  Trophy,
  ThumbsUp,
  Phone,
  CheckCircle,
} from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CONTACT_INFO } from "@/lib/contactInfo";

interface Benefit {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  details: string;
}

interface Stat {
  number: string;
  label: string;
}

const WhyChooseUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const benefits: Benefit[] = [
    {
      icon: Shield,
      title: "Insured",
      description:
        "Fully insured for your complete protection and peace of mind.",
      details: "We've got you covered.",
    },
    {
      icon: Clock,
      title: "Punctual & Reliable",
      description:
        "We arrive on time, every time. Same-day service available for urgent repairs.",
      details: "95% on-time arrival rate",
    },
    {
      icon: Star,
      title: "Quality Guaranteed",
      description:
        "100% satisfaction guarantee on all work. If you're not happy, we'll make it right.",
      details: "Rest assured quality",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description:
        "Our skilled professionals have 10+ years of experience in home repairs and improvements.",
      details: "500+ completed projects",
    },
    {
      icon: Trophy,
      title: "Fair & Transparent Pricing",
      description:
        "Upfront pricing with no hidden fees. Free estimates and competitive rates.",
      details: "No trip charges up to 25 miles",
    },
    {
      icon: ThumbsUp,
      title: "Customer Focused",
      description:
        "Your satisfaction is our priority. We listen, communicate clearly, and exceed expectations.",
      details: "4.9/5 customer rating",
    },
  ];

  const stats: Stat[] = [
    { number: "500+", label: "Happy Customers" },
    { number: "1000+", label: "Jobs Completed" },
    { number: "10+", label: "Years Experience" },
    { number: "4.9", label: "Star Rating" },
  ];

  const scrollToContact = (): void => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div
          className={`text-center mb-16 ${
            isVisible ? "fade-in visible" : "fade-in"
          }`}
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
            Why Choose{" "}
            <span className="text-gradient-primary">Brasouth Solutions</span>?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            When you choose Brasouth Solutions, you're choosing quality,
            reliability, and professional service that puts your needs first.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className={`text-center hover:shadow-lg transition-all duration-300 ${
                isVisible ? "fade-in visible" : "fade-in"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardHeader className="space-y-4">
                <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto shadow-medium">
                  <benefit.icon
                    className="w-10 h-10 text-white"
                    weight="duotone"
                  />
                </div>

                <CardTitle className="font-heading font-semibold text-xl text-neutral-900">
                  {benefit.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>

                <Badge className="text-sm font-medium text-primary-600 bg-primary-50 border-primary-200">
                  {benefit.details}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <Card className="bg-gradient-primary rounded-2xl mb-16 shadow-large border-0">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`space-y-2 ${
                    isVisible ? "slide-in-left visible" : "slide-in-left"
                  }`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="font-heading font-bold text-3xl md:text-4xl">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Process Section */}
        <div className={`${isVisible ? "fade-in visible" : "fade-in"}`}>
          <h3 className="font-heading font-bold text-3xl text-center text-neutral-900 mb-12">
            Our Simple <span className="text-primary-600">3-Step Process</span>
          </h3>

          {/* Process Steps with Proper Connecting Lines */}
          <div className="relative">
            {/* Connecting Line Background - Only visible on desktop */}
            <div
              className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-primary-200 z-0"
              style={{ left: "12.5%", right: "12.5%" }}
            ></div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <Card className="text-center bg-white border-2 border-primary-100 hover:border-primary-300 transition-colors duration-300">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl shadow-medium relative z-20">
                    1
                  </div>
                  <CardTitle className="font-heading font-semibold text-xl text-neutral-900">
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-neutral-600">
                    Call or fill out our form to describe your project. We'll
                    provide a free estimate within 24 hours.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-primary-600 font-medium">
                    <Phone className="w-4 h-4" weight="duotone" />
                    <span>Free consultation</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center bg-white border-2 border-primary-100 hover:border-primary-300 transition-colors duration-300">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl shadow-medium relative z-20">
                    2
                  </div>
                  <CardTitle className="font-heading font-semibold text-xl text-neutral-900">
                    Schedule Service
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-neutral-600">
                    We'll schedule a convenient time that works for you. Our
                    team arrives punctually with all necessary tools.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-secondary-600 font-medium">
                    <Clock className="w-4 h-4" weight="duotone" />
                    <span>Same-day available</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center bg-white border-2 border-secondary-100 hover:border-secondary-300 transition-colors duration-300">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl shadow-medium relative z-20">
                    3
                  </div>
                  <CardTitle className="font-heading font-semibold text-xl text-neutral-900">
                    Quality Completion
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-neutral-600">
                    We complete your project efficiently and clean up afterward.
                    You inspect and approve before we finish.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-secondary-600 font-medium">
                    <CheckCircle className="w-4 h-4" weight="duotone" />
                    <span>100% guaranteed</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="mt-16 bg-neutral-50 border-0">
          <CardContent className="text-center p-8 md:p-12">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-neutral-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust Brasouth Solutions
              for their home repair and improvement needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="btn-primary"
              >
                Get Your Free Estimate
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="btn-secondary"
              >
                <a href={CONTACT_INFO.phone.href}>
                  Call {CONTACT_INFO.phone.display}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyChooseUs;
