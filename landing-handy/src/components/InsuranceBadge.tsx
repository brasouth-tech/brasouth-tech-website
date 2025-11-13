import { Shield, ArrowSquareOut } from 'phosphor-react'
import { trackConversion } from '@/lib/analytics'

interface InsuranceBadgeProps {
  variant?: 'header' | 'hero' | 'footer' | 'inline'
  showDetails?: boolean
  className?: string
}

const InsuranceBadge = ({ 
  variant = 'inline', 
  showDetails = false,
  className = ''
}: InsuranceBadgeProps) => {
  
  const handleCertificateClick = () => {
    trackConversion('insurance_certificate_click')
    window.open('https://portal.nextinsurance.com/public/certificates/live-certificate/10c7907e58b0f38970769a88d5a4a3d7', '_blank')
  }

  // Header variant - compact for navigation
  if (variant === 'header') {
    return (
      <div className={`inline-flex items-center space-x-2 ${className}`}>
        <div className="bg-secondary-500 text-white text-xs sm:text-sm px-2 py-1 rounded-md font-bold flex items-center space-x-1">
          <Shield className="w-3 h-3 sm:w-4 sm:h-4" weight="fill" />
          <span>BONDED & INSURED</span>
        </div>
        {showDetails && (
          <button
            onClick={handleCertificateClick}
            className="text-xs text-blue-200 hover:text-white underline flex items-center space-x-1"
          >
            <span>Verify</span>
            <ArrowSquareOut className="w-3 h-3" />
          </button>
        )}
      </div>
    )
  }

  // Hero variant - prominent display
  if (variant === 'hero') {
    return (
      <div className={`bg-secondary-500 text-white p-4 sm:p-6 rounded-xl shadow-xl ${className}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Shield className="w-6 h-6 text-white" weight="fill" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Insurance</h3>
              <p className="text-sm opacity-90">General Liability Coverage</p>
            </div>
          </div>
          <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            ✓ ACTIVE
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <p className="text-sm font-medium">Coverage Validated by NEXT Insurance</p>
          <p className="text-xs opacity-80">Policy Type: General Liability</p>
        </div>

        <button
          onClick={handleCertificateClick}
          className="w-full bg-white/20 hover:bg-white/30 border border-white/30 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <span>View Live Certificate</span>
          <ArrowSquareOut className="w-4 h-4" />
        </button>
      </div>
    )
  }

  // Footer variant - detailed but compact
  if (variant === 'footer') {
    return (
      <div className={`bg-gray-800 text-white p-4 rounded-lg border border-gray-700 ${className}`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-secondary-400" weight="fill" />
            <span className="font-bold text-sm">NEXT Insurance Verified</span>
          </div>
          <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
            ACTIVE
          </div>
        </div>
        
        <p className="text-xs text-gray-300 mb-3">
          General Liability Coverage • Verified Active Coverage
        </p>

        <button
          onClick={handleCertificateClick}
          className="text-secondary-400 hover:text-secondary-300 text-xs font-medium flex items-center space-x-1 underline"
        >
          <span>View Certificate</span>
          <ArrowSquareOut className="w-3 h-3" />
        </button>
      </div>
    )
  }

  // Inline variant - for use within text/badges
  return (
    <span className={`inline-flex items-center space-x-1 ${className}`}>
      <Shield className="w-4 h-4 text-secondary-500" weight="fill" />
      <span className="font-bold text-secondary-600">NEXT Insured</span>
      {showDetails && (
        <button
          onClick={handleCertificateClick}
          className="text-secondary-500 hover:text-secondary-600 ml-1"
        >
          <ArrowSquareOut className="w-3 h-3" />
        </button>
      )}
    </span>
  )
}

export default InsuranceBadge