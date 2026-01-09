import { BUSINESS_INFO, CONTACT_INFO } from "@/lib/constants";
import { Clock, MapPin, Phone } from "phosphor-react";
import InsuranceBadge from './InsuranceBadge';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-padding py-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">{BUSINESS_INFO.name}</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Phone
                className="w-8 h-8 text-primary-400 mb-3"
                weight="duotone"
              />
              <h4 className="font-semibold mb-2">Emergency Hotline</h4>
              <a
                href={CONTACT_INFO.phone.href}
                className="text-xl font-bold text-primary-400 hover:text-primary-300 transition-colors"
                id="google-ads-contact-trigger"
              >
                {CONTACT_INFO.phone.display}
              </a>
              <p className="text-sm text-neutral-400 mt-1">Available 24/7</p>
            </div>

            <div className="flex flex-col items-center">
              <MapPin
                className="w-8 h-8 text-secondary-400 mb-3"
                weight="duotone"
              />
              <h4 className="font-semibold mb-2">Service Area</h4>
              <p className="text-neutral-300">
                {CONTACT_INFO.address.serviceArea}
              </p>
              <div className="mt-2">
                <InsuranceBadge variant="footer" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Clock
                className="w-8 h-8 text-yellow-400 mb-3"
                weight="duotone"
              />
              <h4 className="font-semibold mb-2">Response Time</h4>
              <p className="text-neutral-300">{BUSINESS_INFO.responseTime}</p>
              <p className="text-sm text-neutral-400 mt-1">Same-day service</p>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 text-center">
            <p className="text-neutral-400 mb-4">
              © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights
              reserved.
            </p>

            <div className="flex justify-center space-x-6 text-sm text-neutral-500">
              <span>•</span>
              <span>{BUSINESS_INFO.insurance}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
