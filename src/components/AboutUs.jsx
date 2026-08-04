import React from 'react'
import { CandlestickChart, Globe, Rocket, FileText, Layers, Handshake, Landmark, TrendingUp, Wallet, UserPlus, PieChart, Briefcase, ArrowRightCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import PoppinsRegular from '../fonts/Poppins-Regular.ttf';

const AboutUs = () => {

  const services = [
    {
      icon: CandlestickChart,
      title: "Investment Facilitation",
      description: "Investment opportunities aligned with your financial goals.",
    },
    {
      icon: Globe,
      title: "Global & GIFT City Solutions",
      description: "Exposure beyond domestic markets.",
    },
    {
      icon: Rocket,
      title: "Entrepreneur-Focused Support",
      description: "We facilitate support for visionary entrepreneurs.",
    },
    {
      icon: FileText,
      title: "Reporting & Intelligence",
      description: "Technology-driven intelligence for complete portfolio clarity and informed decisions.",
    },
    {
      icon: Layers,
      title: "Scaling Wealth & Coordination",
      description: "A unified approach to managing and growing complex wealth with clarity.",
    },
    {
      icon: Handshake,
      title: "Relationship-Led Model",
      description: "Long term relationships built on trust, transparency & transformation.",
    },
  ]

  const entrepreneurSolutions =[
    {
      icon: Landmark,
      title: "Capital Raising",
      description: "Debt, equity & structured finance",
    },
    {
      icon: TrendingUp,
      title: "Strategic Support",
      description: "M&A, growth capital & strategy",
    },
    {
      icon: Wallet,
      title: "Treasury Management",
      description: "Liquidity, cash-flow & fixed income",
    }
  ]

  const partnersPlatform = [
    {
      icon: UserPlus,
      title: "Digital Client Onboarding",
      description: "Seamless digital onboarding that simplifies client acquisition while ensuring speed, compliance, and a frictionless experience.",
    },
    {
      icon: FileText,
      title: "Investment Research",
      description: "Actionable market intelligence and expert insights to support informed investment decisions.",
    },
    {
      icon: PieChart,
      title: "Portfolio Analytics",
      description: "Comprehensive portfolio insights with real-time reporting and performance tracking.",
    },
    {
      icon: Briefcase,
      title: "Business Growth",
      description: "Technology and operational support to help advisors scale their practice efficiently.",
    },
  ]

  return (
    <div className="w-full bg-[#fafafa] pt-16 sm:pt-20 lg:pt-32">
      <div id='1' className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16 lg:mb-20">
            <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[#333333] mb-4" style={{ fontFamily: PoppinsRegular }}>
                OUR SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal mb-4 sm:mb-6 text-black" style={{ fontFamily: 'PT Serif, serif' }}>
                Investment & Wealth Management Services
            </h2>
            <p className="text-[#4a4a4a] text-[16px] lg:text-[17px] max-w-3xl leading-relaxed" style={{ fontFamily: PoppinsRegular }}>
                Wealth management solutions designed around every stage of your financial journey from first allocation to inter-generational continuity.
            </p>
        </div>

        {/* Services Flex Layout */}
        <div className="flex flex-wrap -mx-3 lg:-mx-4">
            {services.map((service, idx) => (
                <div key={idx} className="w-full sm:w-1/2 lg:w-1/3 px-3 lg:px-4 mb-6 lg:mb-8 flex">
                    <div className="w-full relative bg-white border border-gray-100/60 p-8 sm:p-10 flex flex-col items-center justify-center text-center min-h-[300px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group">
                        <div className="absolute top-8 left-8 text-[#D4AF37] opacity-80 group-hover:opacity-100 transition-opacity">
                            <service.icon size={26} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[22px] lg:text-[28px] mt-6 mb-4 font-normal text-black leading-tight max-w-[240px]" style={{ fontFamily: 'PT Serif, serif' }}>
                            {service.title}
                        </h3>
                        <p className="text-[#666666] text-[15px] leading-relaxed max-w-[260px]" style={{ fontFamily: PoppinsRegular }}>
                            {service.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>

      </div>

      <div id='2' className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 w-full flex flex-col items-center text-center">
            {/* Header */}
            <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[#333333] mb-4" style={{ fontFamily: PoppinsRegular }}>
                ENTREPRENEUR FINANCIAL SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal mb-4 sm:mb-6 text-black leading-tight" style={{ fontFamily: 'PT Serif, serif' }}>
                Your Financial Partner at Every <br className="hidden md:block" /> Stage of Growth
            </h2>
            <p className="text-[#4a4a4a] text-[15px] sm:text-[16px] lg:text-[17px] max-w-4xl leading-relaxed mb-10 sm:mb-16 lg:mb-24" style={{ fontFamily: PoppinsRegular }}>
                TieVista facilitates capital raising, optimizes treasury management, executes strategic transactions, and builds long-term personal wealth through one financial partnership.
            </p>

            {/* Features Row */}
            <div className="flex flex-col sm:flex-row w-full mb-10 sm:mb-16 lg:mb-20">
                {entrepreneurSolutions.map((solution, idx) => (
                    <div key={idx} className={`flex-1 flex flex-col items-center text-center px-6 lg:px-10 py-8 md:py-0 ${idx !== 0 ? 'border-t md:border-t-0 md:border-l border-gray-100' : ''}`}>
                        <div className="text-[#D4AF37] mb-6">
                            <solution.icon size={26} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[24px] lg:text-[26px] mb-3 font-normal text-black" style={{ fontFamily: 'PT Serif, serif' }}>
                            {solution.title}
                        </h3>
                        <p className="text-[#666666] text-[15px] leading-relaxed max-w-[240px]" style={{ fontFamily: PoppinsRegular }}>
                            {solution.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Button */}
            <button className="bg-gradient-to-r from-[#dfb63a] to-[#c29b22] hover:opacity-90 text-black font-medium px-8 py-3.5 text-[15px] transition-all shadow-md" style={{ fontFamily: PoppinsRegular }}>
                Book a Private Consultation
            </button>
        </div>
      </div>

      <div id='3' className="relative w-full min-h-screen flex flex-col justify-center items-center py-14 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://res.cloudinary.com/dck5jgfix/image/upload/v1785855152/AboutUsBackground_c87kuf.png" 
                alt="Partners Platform Background" 
                className="w-full h-full object-cover"
                loading="lazy"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-black/75 z-10"></div>
        </div>

        <div className="relative z-20 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 w-full flex flex-col items-center text-center">
            
            {/* Header */}
            <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-white/80 mb-4" style={{ fontFamily: PoppinsRegular }}>
                PARTNERS PLATFORM
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-normal mb-4 sm:mb-6 text-white leading-tight" style={{ fontFamily: 'PT Serif, serif' }}>
                Scale Your Practice with Institutional- <br className="hidden md:block" /> Grade Infrastructure.
            </h2>
            <p className="text-white/90 text-[15px] sm:text-[16px] lg:text-[17px] max-w-4xl leading-relaxed mb-10 sm:mb-16 lg:mb-24" style={{ fontFamily: PoppinsRegular }}>
                TieVista empowers independent financial partners with institutional processes, technology, operational support and a broad investment universe while preserving the personal relationships that define their practice.
            </p>

            {/* Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 w-full mb-12 sm:mb-20 lg:mb-32">
                {partnersPlatform.map((platform, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center px-4 sm:px-6 py-6 border-x border-white/20">
                        <div className="text-white mb-8">
                            <platform.icon size={36} strokeWidth={1} />
                        </div>
                        <h3 className="text-[22px] lg:text-[24px] mb-4 font-normal text-white max-w-[200px]" style={{ fontFamily: 'PT Serif, serif' }}>
                            {platform.title}
                        </h3>
                        <p className="text-white/80 text-[15px] leading-relaxed max-w-[260px]" style={{ fontFamily: PoppinsRegular }}>
                            {platform.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Footer Section */}
            <div className="flex flex-col items-center text-center">
                <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-white/80 mb-4" style={{ fontFamily: PoppinsRegular }}>
                    TRUSTED PARTNERSHIP
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-normal mb-6 sm:mb-10 text-white leading-tight max-w-3xl" style={{ fontFamily: 'PT Serif, serif' }}>
                    Institutional alliances that expand the possibilities for our clients.
                </h3>
                
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    <Link to='/partnersignup'><button className="bg-gradient-to-r from-[#e0b73c] to-[#c29b22] hover:opacity-90 text-white font-light px-8 py-3.5 text-[14px] uppercase tracking-wider transition-all">
                        PARTNER WITH US
                    </button></Link>
                    <Link to='/partners'><button className="bg-transparent border border-white hover:bg-white/10 text-white font-light px-8 py-3.5 text-[14px] uppercase tracking-wider transition-all">
                        LEARN MORE
                    </button></Link>
                </div>
            </div>

        </div>
      </div>

      <div id='4' className="w-full min-h-screen bg-white flex flex-col justify-center py-14 sm:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 w-full">

            {/* Header */}
            <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
                <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[#333333] mb-4" style={{ fontFamily: PoppinsRegular }}>
                    KNOWLEDGE REPOSITORY
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal mb-4 sm:mb-6 text-black" style={{ fontFamily: 'PT Serif, serif' }}>
                    Blogs and Publications
                </h2>
                <p className="text-[#4a4a4a] text-[16px] lg:text-[17px] max-w-4xl leading-relaxed" style={{ fontFamily: PoppinsRegular }}>
                    TieVista facilitates relaying of market facts, publicly available data, wealth structuring & establishes high governance standards driven by our in house experience across jurisdictions, asset classes and generations.
                </p>
            </div>

            {/* Tabs and View All */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                <div className="flex items-center gap-3">
                    <button className="bg-gradient-to-r from-[#e0b73c] to-[#c29b22] text-white text-[13px] font-medium px-5 py-2 transition-all">
                        Blogs
                    </button>
                    <button className="bg-white border border-gray-300 text-black text-[13px] font-medium px-5 py-2 hover:border-[#D4AF37] transition-all">
                        Monthly Update
                    </button>
                </div>
                <Link to="/blogs" className="border border-[#D4AF37] text-[#D4AF37] text-[13px] font-medium px-5 py-2 hover:bg-[#D4AF37]/5 transition-all">
                    View All Blogs→
                </Link>
            </div>

            {/* Latest Blog Card */}
            {(() => {
                const blogs = [
                    {
                        id: 1,
                        title: "Decluttering the Noise Around",
                        goldtitle: "US Private Credit Crisis",
                        description: "Private Credit expanded rapidly after 2008, when banks were forced to pull back from risky lending. It now faces a crucial test.",
                        img: "https://res.cloudinary.com/dr1u4plse/image/upload/v1774960590/US_CRISIS_bpyyrp.png",
                        url: "/blogs/decluttering-the-noise-around",
                        date: "March 28, 2026"
                    },
                    {
                        id: 2,
                        title: "The Rupee's Longest Fall:",
                        goldtitle: "From ₹1 to ₹95 and Counting",
                        description: "The Indian rupee has steadily depreciated since independence but 2026 marks a sharp acceleration in the pace of...",
                        img: "https://res.cloudinary.com/dr1u4plse/image/upload/v1774960590/US_CRISIS_bpyyrp.png",
                        url: "/blogs/the-rupees-longest-fall",
                        date: "May 15, 2026"
                    },
                ]
                const latestBlog = blogs[blogs.length - 1]
                return (
                    <Link to={latestBlog.url} className="block">
                        <div className="w-full border border-black rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row gap-8 md:gap-12 hover:shadow-2xl transition-shadow duration-300">
                            {/* Text Content */}
                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="text-[26px] lg:text-[28px] font-bold text-black leading-tight mb-6" style={{ fontFamily: 'Laura, serif' }}>
                                    {latestBlog.title} {latestBlog.goldtitle}
                                </h3>
                                <p className="text-black font-bold text-[16px] mb-1">
                                    {latestBlog.date}
                                </p>
                                <p className="text-[#4a4a4a] text-[16px] leading-relaxed mb-8" style={{ fontFamily: PoppinsRegular }}>
                                    {latestBlog.description}
                                </p>
                                <div className="flex items-center gap-2 text-black font-bold text-[15px]">
                                    Read Blog
                                    <ArrowRightCircle size={20} className="text-[#D4AF37]" />
                                </div>
                            </div>
                            {/* Image */}
                            <div className="w-full md:w-[380px] lg:w-[420px] shrink-0">
                                <div className="w-full aspect-[4/3] overflow-hidden">
                                    <img
                                        src={latestBlog.img}
                                        alt={latestBlog.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })()}

        </div>
      </div>

      <div id='5' className="w-full min-h-screen bg-white flex flex-col justify-center py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 w-full">
            
            {/* Header */}
            <div className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal text-black shrink-0" style={{ fontFamily: 'PT Serif, serif' }}>
                    What to Expect.
                </h2>
                <div className="flex-1 h-[1px] bg-[#D4AF37]/50 mt-2 lg:mt-4"></div>
            </div>

            {/* Flex Container */}
            <div className="flex flex-wrap w-full">
                {(() => {
                    const expectations = [
                        { num: '01', text: 'A clearly defined detailed risk profile to guide strategy and decision-making' },
                        { num: '02', text: 'Access to institutional-grade investment opportunities' },
                        { num: '03', text: 'Facilitated support across investments, banking, taxation, and governance' },
                        { num: '04', text: 'Consolidated portfolio reporting through a single, unified dashboard' },
                        { num: '05', text: 'Facilitated support for entrepreneurs across growth, transactions, and legacy planning' },
                        { num: '06', text: 'Cross-border wealth co-ordination for global families and NRIs' },
                    ];

                    // Tailwind responsive borders for flex grid (mobile: 1 col, md: 2 cols, lg: 3 cols)
                    const borders = [
                        "border-b border-gray-300 md:border-r",                               // 0
                        "border-b border-gray-300 lg:border-r",                               // 1
                        "border-b border-gray-300 md:border-r lg:border-r-0",                 // 2
                        "border-b border-gray-300 lg:border-b-0 lg:border-r",                 // 3
                        "border-b border-gray-300 md:border-b-0 md:border-r",                 // 4
                        ""                                                                    // 5
                    ];

                    return expectations.map((item, idx) => (
                        <div key={idx} className={`w-full md:w-1/2 lg:w-1/3 bg-white p-8 sm:p-10 lg:p-12 flex flex-col justify-start ${borders[idx]}`}>
                            <span className="text-[#D4AF37] text-[42px] lg:text-[50px] leading-none mb-5" style={{ fontFamily: 'PT Serif, serif' }}>
                                {item.num}
                            </span>
                            <p className="text-black/90 text-[15px] lg:text-[16px] leading-relaxed max-w-[270px]" style={{ fontFamily: PoppinsRegular }}>
                                {item.text}
                            </p>
                        </div>
                    ));
                })()}
            </div>

        </div>
      </div>

      <div id='6' className="w-full bg-black flex flex-col items-center justify-center py-16 sm:py-24 lg:py-32">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 flex flex-col items-center text-center">
            <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-white/60 mb-6" style={{ fontFamily: PoppinsRegular }}>
                BEGIN THE CONVERSATION
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-normal mb-4 sm:mb-6 text-white leading-tight" style={{ fontFamily: 'PT Serif, serif' }}>
                Let's Build Your Financial <br className="hidden sm:block" /> Legacy Together.
            </h2>
            
            <p className="text-white/80 text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed mb-8 sm:mb-12 max-w-[800px]" style={{ fontFamily: PoppinsRegular }}>
                Thoughtful market updates, investment frameworks, and strategic guidance to help investors navigate and build wealth across generations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
                <Link to="/contact"><button className="bg-gradient-to-r from-[#dfb63a] to-[#c29b22] hover:opacity-90 text-white font-light px-10 py-3.5 text-[13px] sm:text-[14px] uppercase tracking-wider transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                    SCHEDULE CALL &rarr;
                </button>
                </Link>
                <Link to="/partnersignup"><button className="bg-transparent border border-white/40 hover:bg-white/10 hover:border-white/60 text-white font-light px-10 py-3.5 text-[13px] sm:text-[14px] uppercase tracking-wider transition-all w-full sm:w-auto">
                    PARTNER WITH US
                </button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs