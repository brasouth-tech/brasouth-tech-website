/**
 * Contact Information & Business Details
 * Centralized configuration for all contact-related data across the website
 */

export const CONTACT_INFO = {
  // Phone Information
  phone: {
    display: '(321) 236-9121',
    href: 'tel:+13212369121',
    international: '+1 321 236 9121'
  },

  // Email Information  
  email: {
    primary: 'contact@brasouthgroup.com',
    href: 'mailto:contact@brasouthgroup.com'
  },

  // Business Address & Service Area
  address: {
    display: 'Orlando & Surrounding Areas',
    serviceRadius: 'Within 60-mile radius',
    serviceRadiusShort: '60-mile service radius'
  },

  // Business Hours
  hours: {
    weekdays: {
      full: 'Monday - Friday: 8:00 AM - 6:00 PM',
      short: 'Mon - Fri: 8:00 AM - 6:00 PM'
    },
    saturday: 'Saturday: 9:00 AM - 4:00 PM',
    sunday: 'Sunday: Emergency Service Only'
  },

  // Website & Social
  website: {
    domain: 'solutions.brasouthgroup.com',
    url: 'https://solutions.brasouthgroup.com',
    canonical: 'https://solutions.brasouthgroup.com'
  }
} as const

export const BUSINESS_INFO = {
  // Company Details
  company: {
    name: 'Brasouth Solutions',
    tagline: 'Professional Handyman Services',
    legalName: 'Brasouth Solutions LLC'
  },

  // Credentials & Certifications
  credentials: {
    license: 'State License #HS-2024-001',
    insurance: 'Fully insured',
    warranty: '',
    guarantee: '100% satisfaction guarantee'
  },

  // Business Statistics
  stats: {
    experience: '10+ years experience',
    customersServed: '500+ happy customers',
    jobsCompleted: '1000+ jobs completed',
    rating: '4.9/5 star rating',
    onTimeRate: '95% on-time arrival rate'
  },

  // Response Times & Availability
  service: {
    estimateResponse: 'Free estimates within 24 hours',
    emailResponse: 'We reply within 4 hours',
    emergencyAvailable: '24/7 emergency service available',
    sameDayService: 'Same-day service available'
  }
} as const

// Utility functions for common use cases
export const getPhoneLink = () => CONTACT_INFO.phone.href
export const getPhoneDisplay = () => CONTACT_INFO.phone.display
export const getEmailLink = () => CONTACT_INFO.email.href
export const getEmailDisplay = () => CONTACT_INFO.email.primary
export const getWebsiteUrl = () => CONTACT_INFO.website.url
export const getCompanyName = () => BUSINESS_INFO.company.name
export const getTagline = () => BUSINESS_INFO.company.tagline

// Type exports for TypeScript users
export type ContactInfo = typeof CONTACT_INFO
export type BusinessInfo = typeof BUSINESS_INFO