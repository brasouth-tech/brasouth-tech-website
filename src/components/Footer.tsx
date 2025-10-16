import simpleLogoImage from "@/assets/images/simple-logo-new-colors.png";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/contactInfo";
import { Clock, Envelope, MapPin, Phone, Shield, Star } from "phosphor-react";
import React from "react";

interface QuickLink {
  name: string;
  href: string;
}

// interface LegalLink {
//   name: string;
//   href: string;
// }

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks: QuickLink[] = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#about" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  // const services: string[] = [
  //   "General Repairs",
  //   "Electrical Work",
  //   "Plumbing Services",
  //   "Painting & Finishing",
  //   "Carpentry",
  //   "Appliance Installation",
  // ];

  // const legalLinks: LegalLink[] = [
  //   { name: "Privacy Policy", href: "#" },
  //   { name: "Terms of Service", href: "#" },
  //   { name: "License Information", href: "#" },
  //   { name: "Insurance Coverage", href: "#" },
  // ];

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
                  <a
                    href="https://www.yelp.com/biz/brasouth-handy-services-orlando"
                    target="_blank"
                    aria-label="Yelp"
                  >
                    <svg
                      fill="currentColor"
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.961 22.279c0.246-0.273 0.601-0.444 0.995-0.444 0.739 0 1.338 0.599 1.338 1.338 0 0.016-0 0.032-0.001 0.048l0-0.002-0.237 6.483c-0.027 0.719-0.616 1.293-1.34 1.293-0.077 0-0.153-0.006-0.226-0.019l0.008 0.001c-1.763-0.303-3.331-0.962-4.69-1.902l0.039 0.025c-0.351-0.245-0.578-0.647-0.578-1.102 0-0.346 0.131-0.661 0.346-0.898l-0.001 0.001 4.345-4.829zM12.853 20.434l-6.301 1.572c-0.097 0.025-0.208 0.039-0.322 0.039-0.687 0-1.253-0.517-1.332-1.183l-0.001-0.006c-0.046-0.389-0.073-0.839-0.073-1.295 0-1.324 0.223-2.597 0.635-3.781l-0.024 0.081c0.183-0.534 0.681-0.911 1.267-0.911 0.214 0 0.417 0.050 0.596 0.14l-0.008-0.004 5.833 2.848c0.45 0.221 0.754 0.677 0.754 1.203 0 0.623-0.427 1.147-1.004 1.294l-0.009 0.002zM13.924 15.223l-6.104-10.574c-0.112-0.191-0.178-0.421-0.178-0.667 0-0.529 0.307-0.987 0.752-1.204l0.008-0.003c1.918-0.938 4.153-1.568 6.511-1.761l0.067-0.004c0.031-0.003 0.067-0.004 0.104-0.004 0.738 0 1.337 0.599 1.337 1.337 0 0.001 0 0.001 0 0.002v-0 12.207c-0 0.739-0.599 1.338-1.338 1.338-0.493 0-0.923-0.266-1.155-0.663l-0.003-0.006zM19.918 20.681l6.176 2.007c0.541 0.18 0.925 0.682 0.925 1.274 0 0.209-0.048 0.407-0.134 0.584l0.003-0.008c-0.758 1.569-1.799 2.889-3.068 3.945l-0.019 0.015c-0.23 0.19-0.527 0.306-0.852 0.306-0.477 0-0.896-0.249-1.134-0.625l-0.003-0.006-3.449-5.51c-0.128-0.201-0.203-0.446-0.203-0.709 0-0.738 0.598-1.336 1.336-1.336 0.147 0 0.289 0.024 0.421 0.068l-0.009-0.003zM26.197 16.742l-6.242 1.791c-0.11 0.033-0.237 0.052-0.368 0.052-0.737 0-1.335-0.598-1.335-1.335 0-0.282 0.087-0.543 0.236-0.758l-0.003 0.004 3.63-5.383c0.244-0.358 0.65-0.59 1.111-0.59 0.339 0 0.649 0.126 0.885 0.334l-0.001-0.001c1.25 1.104 2.25 2.459 2.925 3.99l0.029 0.073c0.070 0.158 0.111 0.342 0.111 0.535 0 0.608-0.405 1.121-0.959 1.286l-0.009 0.002z" />
                    </svg>
                  </a>
                </Button>
                {/* <Button
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
                </Button> */}
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
          {/* <div className="space-y-6">
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
          </div> */}

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
            {/* <div className="flex flex-wrap justify-center gap-6">
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
            </div> */}
          </div>

          {/* Additional Trust Signals */}
          {/* <div className="mt-6 pt-6 border-t border-neutral-800">
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
          </div> */}
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
