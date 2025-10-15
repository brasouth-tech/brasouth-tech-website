import React from "react";
import {
  Phone,
  Envelope,
  MapPin,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  Shield,
  Star,
  Clock,
} from "phosphor-react";
import { CONTACT_INFO } from "@/lib/contactInfo";
import { Button } from "@/components/ui/button";
import simpleLogoImage from "@/assets/images/simple-logo-new-colors.png";

interface QuickLink {
  name: string;
  href: string;
}

interface LegalLink {
  name: string;
  href: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks: QuickLink[] = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#about" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services: string[] = [
    "General Repairs",
    "Electrical Work",
    "Plumbing Services",
    "Painting & Finishing",
    "Carpentry",
    "Appliance Installation",
  ];

  const legalLinks: LegalLink[] = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "License Information", href: "#" },
    { name: "Insurance Coverage", href: "#" },
  ];

  const scrollToSection = (sectionId: string): void => {
    if (sectionId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex flex-col items-start space-y-2">
              <div className="flex items-center justify-start">
                <img
                  src={simpleLogoImage}
                  alt="Brasouth Solutions Logo"
                  className="h-24 w-auto object-contain"
                />
              </div>
              <div>
                <p className="text-sm text-neutral-400">
                  Professional Handyman Services
                </p>
              </div>
            </div>

            <p className="text-neutral-300 leading-relaxed">
              Your trusted local handyman service provider. We deliver quality
              workmanship and reliable service that homeowners can count on.
            </p>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Shield
                  className="w-4 h-4 text-secondary-400"
                  weight="duotone"
                />
                <span className="text-neutral-300">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Star className="w-4 h-4 text-yellow-400" weight="fill" />
                <span className="text-neutral-300">4.9/5 Star Rating</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock
                  className="w-4 h-4 text-secondary-400"
                  weight="duotone"
                />
                <span className="text-neutral-300">24/7 Emergency Service</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 border-neutral-700 text-white"
                >
                  <a href="#" aria-label="Facebook">
                    <FacebookLogo className="w-5 h-5" weight="duotone" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 border-neutral-700 text-white"
                >
                  <a href="#" aria-label="Instagram">
                    <InstagramLogo className="w-5 h-5" weight="duotone" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 border-neutral-700 text-white"
                >
                  <a href="#" aria-label="Twitter">
                    <TwitterLogo className="w-5 h-5" weight="duotone" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-lg text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-neutral-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-lg text-white">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("#services")}
                    className="text-neutral-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-lg text-white">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone
                  className="w-5 h-5 text-primary-400 mt-0.5"
                  weight="duotone"
                />
                <div>
                  <a
                    href={CONTACT_INFO.phone.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {CONTACT_INFO.phone.display}
                  </a>
                  <p className="text-xs text-neutral-500">
                    24/7 Emergency Line
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Envelope
                  className="w-5 h-5 text-primary-400 mt-0.5"
                  weight="duotone"
                />
                <div>
                  <a
                    href={CONTACT_INFO.email.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {CONTACT_INFO.email.primary}
                  </a>
                  <p className="text-xs text-neutral-500">
                    Response within 4 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin
                  className="w-5 h-5 text-primary-400 mt-0.5"
                  weight="duotone"
                />
                <div>
                  <p className="text-neutral-300">
                    {CONTACT_INFO.address.display}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {CONTACT_INFO.address.serviceRadiusShort}
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h5 className="font-medium text-white mb-2">Business Hours</h5>
              <div className="text-sm text-neutral-400 space-y-1">
                <p>{CONTACT_INFO.hours.weekdays.short}</p>
                <p>{CONTACT_INFO.hours.saturday}</p>
                <p>{CONTACT_INFO.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-neutral-400 text-sm">
                © {currentYear} Brasouth Solutions. All rights reserved.
              </p>
              <p className="text-neutral-500 text-xs mt-1">
                Fully Insured • We've got you covered
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-neutral-600">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Additional Trust Signals */}
          <div className="mt-6 pt-6 border-t border-neutral-800">
            <div className="text-center">
              <p className="text-neutral-500 text-xs mb-2">
                Proud member of local business community
              </p>
              <div className="flex justify-center items-center space-x-6 text-neutral-600">
                <span className="text-xs">BBB Accredited</span>
                <span className="text-xs">•</span>
                <span className="text-xs">Angie's List Certified</span>
                <span className="text-xs">•</span>
                <span className="text-xs">Home Advisor Approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-red-600 py-3">
        <div className="container">
          <div className="flex items-center justify-center space-x-4 text-center">
            <Phone className="w-5 h-5 animate-pulse" weight="duotone" />
            <span className="font-medium">
              Emergency Service Available 24/7 - Call{" "}
              <a
                href={CONTACT_INFO.phone.href}
                className="underline hover:no-underline font-bold"
              >
                {CONTACT_INFO.phone.display}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
