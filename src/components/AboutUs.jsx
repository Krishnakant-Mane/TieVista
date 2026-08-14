import React, { useState, useEffect } from 'react'
import { CandlestickChart, Globe, Rocket, FileChartPie, FileText, Layers, Handshake, Landmark, TrendingUp, Wallet, UserPlus, PieChart, BriefcaseBusiness, ArrowRightCircle, Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PoppinsRegular from '../fonts/Poppins-Regular.ttf';
import PhoneNumberPopup from '../popups/PhoneNumberPopup'
import { hasPopupShown, showPopupNow } from "../utils/popupStorage.js";

const AboutUs = () => {

    const [activeTab, setActiveTab] = useState('blogs'); // 'blogs' or 'publications'
    const [showPopup, setShowPopup] = useState(false);

    setTimeout(()=>{
        sessionStorage.removeItem('popupShown')
    },600000)

    useEffect(() => {
      if (hasPopupShown()) return;

      const timer = setTimeout(() => showPopupNow(setShowPopup), 15000);

      const onScroll = () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrolled >= 60) {
          showPopupNow(setShowPopup);
          clearTimeout(timer);
          window.removeEventListener("scroll", onScroll);
        }
      };
      window.addEventListener("scroll", onScroll);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("scroll", onScroll);
      };
    }, []);


    const publications = [
        {
            id: 1,
            title: "",
            goldtitle: "",
            description: "MONTHLY UPDATE",
            img: "https://res.cloudinary.com/dck5jgfix/image/upload/v1775732548/March_2026_foixjy.png",
            url: "https://drive.google.com/uc?export=download&id=1sBlq8NylKUpYCLFdZRVvalqO5CY2WKFi",
            date: "March, 2026"
        },
        {
            id: 2,
            title: "",
            goldtitle: "",
            description: "MONTHLY UPDATE",
            img: "https://res.cloudinary.com/dck5jgfix/image/upload/v1775732548/March_2026_foixjy.png",
            url: "https://drive.google.com/uc?export=download&id=1THnT4o4rO41n7Z_txoYJA9uPO8JTL9Pq",
            date: "April, 2026"
        },
        {
            id: 3,
            title: "",
            goldtitle: "",
            description: "MONTHLY UPDATE",
            img: "https://res.cloudinary.com/dck5jgfix/image/upload/v1775732548/March_2026_foixjy.png",
            url: "https://drive.google.com/uc?export=download&id=1NvBRTvJkPHLfUvO4frcJgSW7gI86qxbi",
            date: "May, 2026"
        },
        {
            id: 4,
            title: "",
            goldtitle: "",
            description: "MONTHLY UPDATE",
            img: "https://res.cloudinary.com/dck5jgfix/image/upload/v1775732548/March_2026_foixjy.png",
            url: "https://drive.google.com/uc?export=download&id=1raBvJHiBkgZjAyb3bWMIw5pOrONKM_s4",
            date: "June, 2026"
        },
        {
            id: 5,
            title: "",
            goldtitle: "",
            description: "MONTHLY UPDATE",
            img: "https://res.cloudinary.com/dck5jgfix/image/upload/v1775732548/March_2026_foixjy.png",
            url: "https://drive.google.com/uc?export=download&id=1q_Hv7HJfagD-ETnSL8CCwQrdvthLI3Fd",
            date: "August, 2026"
        },
    ]

    const handleDownload = (url) => {
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.click();
    };

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

    const entrepreneurSolutions = [
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

    return (
        <>
        <div className="w-full bg-[#fafafa] pt-16 sm:pt-20 lg:pt-32">
            {/* Phone Number Popup */}
            <div id='1' className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-10 sm:mb-16 lg:mb-20">
                    <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[#333333] mb-4 poppins-sans">
                        OUR SERVICES
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal mb-4 sm:mb-6 text-black" style={{ fontFamily: 'PT Serif, serif' }}>
                        Investment & Wealth Management Services
                    </h2>
                    <p className="text-[#4a4a4a] text-[16px] lg:text-[17px] max-w-3xl leading-relaxed poppins-sans">
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
                                <p className="text-[#666666] text-[15px] leading-relaxed max-w-[260px] poppins-sans">
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
                    <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[#333333] mb-4 poppins-sans">
                        ENTREPRENEUR FINANCIAL SOLUTIONS
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal mb-4 sm:mb-6 text-black leading-tight" style={{ fontFamily: 'PT Serif, serif' }}>
                        Your Financial Partner at Every <br className="hidden md:block" /> Stage of Growth
                    </h2>
                    <p className="text-[#4a4a4a] text-[15px] sm:text-[16px] lg:text-[17px] max-w-4xl leading-relaxed mb-10 sm:mb-16 lg:mb-24 poppins-sans">
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
                                <p className="text-[#666666] text-[15px] leading-relaxed max-w-[240px] poppins-sans">
                                    {solution.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <Link to={"/contact"}><button className="bg-gradient-to-r from-[#dfb63a] to-[#c29b22] hover:opacity-90 text-white font-medium px-8 py-3.5 text-[15px] transition-all shadow-md poppins-sans">
                        Book a Private Consultation
                    </button></Link>
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
                    <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-white/80 mb-4 poppins-sans">
                        PARTNERS PLATFORM
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-normal mb-4 sm:mb-6 text-white leading-tight" style={{ fontFamily: 'PT Serif, serif' }}>
                        Scale Your Practice with Institutional- <br className="hidden md:block" /> Grade Infrastructure.
                    </h2>
                    <p className="text-white/90 text-[15px] sm:text-[16px] lg:text-[17px] max-w-4xl leading-relaxed mb-5 sm:mb-16 lg:mb-12 poppins-sans">
                        TieVista empowers independent financial partners with institutional processes, technology, operational support and a broad investment universe while preserving the personal relationships that define their practice.
                    </p>

                    {/* Features Row */}
                    <div className="flex lg:flex-row flex-col space-y-10 mb-10 items-center lg:justify-between lg:items-center w-full lg:mb-15">
                        <div className='flex flex-col border-r border-l w-60 lg:w-65 border-white/40 bg-black/20 px-2 lg:px-5 py-5 lg:py-5 gap-5'>
                            <div>
                                <UserPlus className='text-white' size={26} />
                            </div>
                            <div className='text-white text-3xl lg:text-2xl' style={{ fontFamily: 'PT Serif, serif' }}>
                                <h1>
                                    Digital Client Onboarding
                                </h1>
                            </div>
                            <div className='text-white text-sm poppins-sans font-light'>
                                <p>Seamless digital onboarding that simplifies client acquisition while ensuring speed, compliance, and a frictionless experience.</p>
                            </div>
                        </div>
                        {/* 2nd */}

                        <div className='flex flex-col border-r border-l w-60 lg:h-68 lg:w-65 border-white/40 bg-black/20 py-5 lg:py-4 gap-5'>
                            <div className='lg:mb-3 lg:mt-1.5 lg:px-5 px-2'>
                                <FileText className='text-white' size={26} />
                            </div>
                            <div className='text-white lg:text-2xl lg:w-full lg:mb-5' style={{ fontFamily: 'PT Serif, serif' }}>
                                <h1>
                                    Investment Research
                                </h1>
                            </div>
                            <div className='text-white text-sm poppins-sans font-light lg:px-5'>
                                <p>Actionable market intelligence and expert insights to support informed investment decisions.</p>
                            </div>
                        </div>
                        <div className='flex flex-col border-r border-l w-60 lg:h-68 lg:w-65 border-white/40 bg-black/20 py-5 lg:py-4 gap-5'>
                            <div className='lg:mb-3 lg:mt-1.5 lg:px-5 px-2'>
                                <FileChartPie className='text-white' size={26} />
                            </div>
                            <div className='text-white lg:text-2xl lg:w-full lg:mb-5' style={{ fontFamily: 'PT Serif, serif' }}>
                                <h1>
                                    Portfolio Analytics
                                </h1>
                            </div>
                            <div className='text-white text-sm poppins-sans font-light lg:px-5'>
                                <p>Comprehensive portfolio insights with real-time reporting and performance tracking.</p>
                            </div>
                        </div>
                        <div className='flex flex-col border-r border-l w-60 lg:h-68 lg:w-65 border-white/40 bg-black/20 px-2 lg:px-5 py-5 lg:mb-10 gap-5'>
                            <div className='lg:mb-2 lg:mt-1.5 lg:px-1.5'>
                                <BriefcaseBusiness className='text-white' size={26} />
                            </div>
                            <div className='text-white lg:text-2xl lg:w-full lg:mb-5' style={{ fontFamily: 'PT Serif, serif' }}>
                                <h1>
                                    Business Growth
                                </h1>
                            </div>
                            <div className='text-white text-sm poppins-sans font-light'>
                                <p>Technology and operational support to help advisors scale their practice efficiently.</p>
                            </div>
                        </div>

                    </div>

                    {/* Footer Section */}
                    <div className="flex flex-col items-center text-center">
                        <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-white/80 mb-4 poppins-sans">
                            TRUSTED PARTNERSHIP
                        </span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-normal mb-6 sm:mb-10 text-white leading-tight max-w-3xl" style={{ fontFamily: 'PT Serif, serif' }}>
                            Institutional alliances that expand the possibilities for our clients.
                        </h3>

                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                            <Link to='/partnersignup'><button className="bg-gradient-to-r from-[#e0b73c] to-[#c29b22] hover:opacity-90 text-white font-light px-8 py-3.5 text-[14px] uppercase tracking-wider transition-all poppins-sans">
                                PARTNER WITH US
                            </button></Link>
                            <Link to='/partners'><button className="bg-transparent border border-white hover:bg-white/10 text-white font-light px-8 py-3.5 text-[14px] uppercase tracking-wider transition-all poppins-sans">
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
                        <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[#333333] mb-4 poppins-sans">
                            KNOWLEDGE REPOSITORY
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal mb-4 sm:mb-6 text-black" style={{ fontFamily: 'PT Serif, serif' }}>
                            Blogs and Publications
                        </h2>
                        <p className="text-[#4a4a4a] text-[16px] lg:text-[17px] max-w-4xl leading-relaxed poppins-sans">
                            TieVista facilitates relaying of market facts, publicly available data, wealth structuring & establishes high governance standards driven by our in house experience across jurisdictions, asset classes and generations.
                        </p>
                    </div>

                    {/* Tabs and View All */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setActiveTab('blogs')}
                                className={`${activeTab === 'blogs' ? "bg-gradient-to-r from-[#e0b73c] to-[#c29b22] text-white" : "bg-white border border-gray-300 text-black hover:border-[#D4AF37]"} text-[13px] font-medium px-5 py-2 transition-all`}
                            >
                                Blogs
                            </button>
                            <button
                                onClick={() => setActiveTab('publications')}
                                className={`${activeTab === 'publications' ? "bg-gradient-to-r from-[#e0b73c] to-[#c29b22] text-white" : "bg-white border border-gray-300 text-black hover:border-[#D4AF37]"} text-[13px] font-medium px-5 py-2 transition-all`}
                            >
                                Monthly Update
                            </button>
                        </div>
                        <Link to={activeTab === 'blogs' ? "/blogs" : "/publications"} className="border border-[#D4AF37] text-[#D4AF37] text-[13px] font-medium px-5 py-2 hover:bg-[#D4AF37]/5 transition-all">
                            View All {activeTab === 'blogs' ? 'Blogs' : 'Publications'}→
                        </Link>
                    </div>

                    {/* Conditional Rendering based on activeTab */}
                    {activeTab === 'blogs' && (
                        <div className="w-full">
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
                                            {/* Image */}
                                            <div className="w-full sm:w-[380px] md:w-[380px] lg:w-[420px] shrink-0">
                                                <div className="w-full aspect-[4/3] overflow-hidden">
                                                    <img
                                                        src={latestBlog.img}
                                                        alt={latestBlog.title}
                                                        className="w-full h-full object-cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                            {/* Text Content */}
                                            <div className="flex-1 flex flex-col justify-center">
                                                <h3 className="text-[26px] lg:text-[28px] font-bold text-black leading-tight mb-6" style={{ fontFamily: 'Laura, serif' }}>
                                                    {latestBlog.title} {latestBlog.goldtitle}
                                                </h3>
                                                <p className="text-black font-bold text-[16px] mb-1">
                                                    {latestBlog.date}
                                                </p>
                                                <p className="text-[#4a4a4a] text-[16px] leading-relaxed mb-8 poppins-sans">
                                                    {latestBlog.description}
                                                </p>
                                                <div className="flex items-center gap-2 text-black font-bold text-[15px] poppins-sans">
                                                    Read Blog
                                                    <ArrowRightCircle size={20} className="text-[#D4AF37]" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })()}
                        </div>
                    )}

                    {activeTab === 'publications' && (
                        <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
                            {publications.slice(-3).map((publication, idx) => (
                                <div key={idx} className="flex-1 group flex flex-col bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 w-full">
                                    {/* Image Container */}
                                    <div className='relative w-full overflow-hidden bg-gray-50'>
                                        <div className='relative w-full aspect-square overflow-hidden bg-gray-50'>
                                            <img
                                                src={'https://res.cloudinary.com/dck5jgfix/image/upload/v1775802420/Publications_mjzwlt.png'}
                                                alt={publication.description}
                                                className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-95 group-hover:opacity-100'
                                            />
                                            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500' />
                                            <div
                                                className="absolute bottom-0 left-0 w-10 h-10 opacity-0 group-hover:opacity-80 transition-opacity duration-500"
                                                style={{ background: `linear-gradient(135deg, #D4AF37 50%, transparent 50%)` }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className='flex flex-col p-6 pt-4 lg:h-40 h-full'>
                                        <p className='text-black text-[16px] md:text-[18px] font-semibold mb-2 line-clamp-3 md:line-clamp-none' style={{ fontFamily: 'PT Serif, serif' }}>
                                            {publication.description}
                                        </p>
                                        <div className='flex items-center gap-2 mb-6'>
                                            <Calendar className='size-3 text-[#D4AF37]' />
                                            <span className='text-[12px] font-semibold tracking-[0.25em] uppercase text-black' style={{ fontFamily: 'PT Serif, serif' }}>
                                                {publication.date}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => handleDownload(publication.url)}
                                            className='ml-auto inline-flex items-center gap-2 text-[12px] font-bold tracking-widest uppercase text-black group/link mt-auto poppins-sans'
                                        >
                                            Download
                                            <ArrowRight className='size-3 transition-transform duration-300 group-hover/link:translate-x-1' />
                                        </button>
                                    </div>
                                </div>
                            )).reverse()}
                        </div>
                    )}
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
                                    <p className="text-black/90 text-[15px] lg:text-[16px] leading-relaxed max-w-[270px] poppins-sans">
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
                    <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-white/60 mb-6 poppins-sans">
                        BEGIN THE CONVERSATION
                    </span>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-normal mb-4 sm:mb-6 text-white leading-tight" style={{ fontFamily: 'PT Serif, serif' }}>
                        Let's Build Your Financial <br className="hidden sm:block" /> Legacy Together.
                    </h2>

                    <p className="text-white/80 text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed mb-8 sm:mb-12 max-w-[800px] poppins-sans">
                        Thoughtful market updates, investment frameworks, and strategic guidance to help investors navigate and build wealth across generations.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
                        <Link to="/contact"><button className="bg-gradient-to-r from-[#dfb63a] to-[#c29b22] hover:opacity-90 text-white font-light px-10 py-3.5 text-[13px] sm:text-[14px] uppercase tracking-wider transition-all w-full sm:w-auto flex items-center justify-center gap-2 poppins-sans">
                            SCHEDULE CALL &rarr;
                        </button>
                        </Link>
                        <Link to="/partnersignup"><button className="bg-transparent border border-white/40 hover:bg-white/10 hover:border-white/60 text-white font-light px-10 py-3.5 text-[13px] sm:text-[14px] uppercase tracking-wider transition-all w-full sm:w-auto poppins-sans">
                            PARTNER WITH US
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        {showPopup && (
            <PhoneNumberPopup onClose={() => setShowPopup(false)} />
        )}
        </>
    )
}

export default AboutUs