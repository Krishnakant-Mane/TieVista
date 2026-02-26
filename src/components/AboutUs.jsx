import React from 'react'
import { ShieldCheck, Target, Eye, BarChart3, Users, Lock } from 'lucide-react'

export const AboutUs = () => {

  const differentiators = [
    {
      title: 'Research Excellence',
      description: 'Deep due diligence across asset classes with institutional-grade analysis.',
      icon: ShieldCheck
    },
    {
      title: 'Strategic Structuring',
      description: 'Tax efficient wealth structuring tailored to your unique circumstances.',
      icon: Target
    },
    {
      title: 'Transparency',
      description: 'Clear fee structures and open communication at every stage.',
      icon: Eye
    },
    {
      title: 'Performance Focus',
      description: 'Rigorous performance monitoring aligned with your objectives.',
      icon: BarChart3
    },
    {
      title: 'Governance',
      description: 'Robust governance frameworks for family offices and foundations.',
      icon: Users
    },
    {
      title: 'Exclusive Access',
      description: 'Access to premium investment opportunities and global networks.',
      icon: Lock
    }
  ]

  return (
    <>
      <div className='min-h-screen w-full bg-white'>
        <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-[40px] font-normal text-gray-900 mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-base text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
              Our distinctive approach to wealth management combines institutional rigor with personalized attention.
            </p>
          </div>

          {/* Differentiators Container - Using Flexbox */}
          <div className="flex flex-wrap -mx-4">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              >
                <div className={`p-8 border transition-all duration-300 min-h-[280px] flex flex-col items-start h-full group
                                    hover:border-[#D4AF37] shadow-lg hover:-translate-y-1`}
                >
                  {/* Icon Container */}
                  <div className={`w-12 h-12 flex items-center justify-center mb-6  group-hover:bg-[#D4AF37] bg-black group-hover:text-white`}
                  >
                    <item.icon className="w-5 h-5 text-white group-hover:text-white" />
                  </div>

                  <h3 className="text-[17px] font-medium text-gray-900 mb-4 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 font-light leading-relaxed opacity-80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
