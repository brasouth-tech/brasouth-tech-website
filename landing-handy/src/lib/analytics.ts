// Google Ads and Analytics tracking functions
// Replace with actual Google Ads and Analytics implementation

export const trackConversion = (eventName: string, value?: number) => {
  // Google Ads Conversion Tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-17667506779/d12ZCOv0178bENuEw-hB', // Replace CONVERSION_LABEL with actual conversion label from Google Ads
      'event_category': 'emergency_repair',
      'currency': 'USD',
      'event_label': eventName,
      'value': value || 1
    })
  }
  
  // Google Analytics Event Tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      'event_category': 'emergency_repair',
      'event_label': eventName,
      'value': value || 1
    })
  }
  
  // Facebook Pixel (if using)
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: eventName,
      value: value || 1,
      currency: 'USD'
    })
  }
  
  // Console log for debugging (remove in production)
  console.log(`Conversion tracked: ${eventName}`, { value })
}

export const trackPhoneCall = () => {
  trackConversion('phone_call', 1)
  
  // Also use the global gtag conversion function if available
  if (typeof window !== 'undefined' && (window as any).gtag_report_conversion_phone) {
    (window as any).gtag_report_conversion_phone()
  }
}

export const trackFormSubmit = () => {
  trackConversion('form_submit', 1)
  
  // Also use the global gtag conversion function if available
  if (typeof window !== 'undefined' && (window as any).gtag_report_conversion_form) {
    (window as any).gtag_report_conversion_form()
  }
}