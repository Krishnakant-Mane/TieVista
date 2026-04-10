import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const GOLD = '#D4AF37'
const CHARCOAL = '#1A1A1A'

const TheStraitOfHormuzCrisis = () => {
    const blog =
    {
        id: 2,
        title: "The Strait of Hormuz ",
        goldtitle: "Crisis",
        description: "The Strait of Hormuz is one of the world’s most critical energy chokepoints. At its narrowest, it spans just 21 miles",
        img: "https://res.cloudinary.com/dr1u4plse/image/upload/v1774960590/US_CRISIS_bpyyrp.png",
        url: "/blogs/the-strait-of-hormuz-crisis",
        date: "MARCH 2026"
    }



    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 300])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <div className='min-h-screen w-full selection:text-white selection:bg-[#D4AF37]' style={{ fontFamily: "PT Serif, serif" }}>

            <section ref={heroRef} className="h-60 w-full relative flex items-center justify-center overflow-hidden">

                {/* Parallax Background */}
                <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 will-change-transform">
                    <img
                        className="h-full w-full object-cover"
                        src={blog.img}
                        alt={blog.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
                </motion.div>

                {/* Content — left aligned for compact height */}
                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="relative z-10 px-8 lg:px-16 max-w-3xl"
                >
                    {/* Date Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="inline-flex items-center gap-2 px-3 py-1 mb-4 border rounded-full backdrop-blur-sm"
                        style={{ borderColor: `${GOLD}60`, background: 'rgba(0,0,0,0.25)' }}
                    >
                        <span className="w-1 h-1 rounded-full" style={{ background: GOLD }} />
                        <span className="text-[9px] font-bold tracking-[0.3em] uppercase" style={{ color: GOLD }}>
                            {blog.date}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                        className="text-3xl md:text-4xl text-white tracking-tight leading-tight"
                        style={{ fontFamily: 'PT Serif, serif' }}
                    >
                        <h1 className='md:text-4xl text-3xl font-bold'>{blog.title}</h1>{' '}
                        <h1 className="md:text-4xl text-3xl gold-text font-bold">{blog.goldtitle}</h1>
                    </motion.h1>

                    {/* Gold Divider */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="w-10 h-px mt-4 origin-left"
                        style={{ background: GOLD }}
                    />
                </motion.div>



            </section>

            {/* Content Body Placeholder */}
            <div className='min-h-screen max-w-5xl mx-auto px-6 lg:px-16 py-20'>
                <div id='page1' className=''>
                    <div className="space-y-16">
                        {/* 4-Stat Grid (Refactored to Flex) */}
                        <div className='w-full'>
                            <div className='flex flex-wrap md:flex-nowrap border border-gray-100 bg-[#FDFBF7] shadow-sm'>
                                {[
                                    { value: "21M", label: "Barrels of oil transiting daily (pre-crisis)" },
                                    { value: "$126", label: "Brent crude peak (per barrel) (March 2026)" },
                                    { value: "~20%", label: "Of Global oil supply affected" },
                                    { value: "25+", label: "Merchant vessels attacked (Mar 1–27)" }
                                ].map((stat, idx) => (
                                    <div key={idx} className={`p-8 flex flex-col items-center text-center flex-1 border-gray-100 ${idx !== 0 ? 'md:border-l' : ''} ${idx >= 2 ? 'border-t md:border-t-0 w-1/2 md:w-auto' : 'w-1/2 md:w-auto'}`}>
                                        <span className='text-3xl lg:text-5xl font-bold mb-4' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                            {stat.value}
                                        </span>
                                        <span className='text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-widest leading-relaxed max-w-[140px]' style={{ fontFamily: 'PT Serif, serif' }}>
                                            {stat.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            {/* <div className='mt-3 text-[10px] text-black font-bold uppercase tracking-widest' style={{ fontFamily: 'PT Serif,serif' }}>
                                Source: <span className='text-black underline cursor-pointer'><a href="https://www.ey.com/en_gl/private-equity/private-credit-is-at-a-tipping-point" target='_blank'>EY H2 2025</a></span>
                            </div> */}
                        </div>

                        <div id='page2' className='space-y-16 pt-24 border-t border-gray-100'>
                            {/* 01. GEOGRAPHY & STRATEGIC ROLE */}
                            <div className='space-y-10'>
                                <div className='space-y-4'>
                                    <h3 className='text-xl md:text-2xl font-bold uppercase tracking-tight' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                        01. GEOGRAPHY & STRATEGIC ROLE
                                    </h3>
                                    <h2 className='text-2xl md:text-4xl font-bold text-black leading-tight' style={{ fontFamily: 'PT Serif, serif' }}>
                                        21 Miles. No Alternatives. No Room for Error.
                                    </h2>
                                    <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-light font-serif max-w-5xl' style={{ fontFamily: 'PT Serif,serif' }}>
                                        The Strait of Hormuz is one of the world’s most critical energy chokepoints. At its narrowest, it spans just 21 miles, with shipping lanes only two miles wide in each direction. It serves as the primary maritime gateway connecting the Persian Gulf to global markets.
                                    </p>
                                </div>

                                {/* Infographic Image Container */}
                                <div className='w-full border border-gray-200 bg-white overflow-hidden shadow-sm'>
                                    <div className='p-0 bg-black flex justify-center items-center'>
                                        <img
                                            src="https://res.cloudinary.com/dck5jgfix/image/upload/v1775817436/Hourmos_bzq3fk.png"
                                            alt="Strait of Hormuz Map"
                                            className='w-full h-auto object-cover'
                                        />
                                    </div>
                                </div>

                                <div className='space-y-6'>
                                    <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-light font-serif max-w-5xl' style={{ fontFamily: 'PT Serif,serif' }}>
                                        Approximately <span className='font-bold'>20.9 million barrels of oil transit the strait daily</span>, accounting for nearly <span className='font-bold'>one-third of global seaborne crude trade</span>. Saudi Arabia and Iraq together contribute the majority of these flows, with significant volumes also originating from the UAE, Iran, and Kuwait. A large share of these exports is directed toward Asia, particularly China, India, Japan, and South Korea.
                                    </p>

                                    <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-light font-serif max-w-5xl' style={{ fontFamily: 'PT Serif,serif' }}>
                                        Despite its scale, <span className='font-bold'>alternative routes remain severely constrained</span>. Existing pipeline infrastructure including Saudi Arabia’s East-West pipeline and the UAE’s Fujairah route provides only limited bypass capacity relative to total flows. For several producers, including Iraq, Kuwait, and Qatar, no viable alternatives exist at scale.
                                    </p>

                                    <div className='pt-4'>
                                        <span className='text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest' style={{ fontFamily: 'PT Serif, serif' }}>
                                            Source: <a href="https://www.eia.gov" target='_blank' className='text-blue-600 underline hover:text-blue-800 transition-colors'>EIA</a>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Graph Section */}
                            <div className='space-y-12 pt-12 border-t border-gray-100'>
                                <h3 className='text-2xl md:text-3xl font-bold' style={{ fontFamily: 'PT Serif, serif' }}>
                                    Who Depends on Hormuz?
                                </h3>

                                <div className='w-full border border-gray-200 bg-white p-6 md:p-12 shadow-sm'>
                                    <h5 className='text-center text-lg md:text-2xl font-bold text-[#4B4B4B] mb-12' style={{ fontFamily: 'PT Serif, serif' }}>
                                        Crude Oil Flow by Countries
                                    </h5>

                                    <div className='relative w-full md:px-6 flex'>
                                        {/* Y-axis Label (Rotated) */}
                                        <div className='absolute -left-18 md:-left-20 top-1/2 -translate-y-1/2 h-64 flex items-center justify-center'>
                                            <span className='whitespace-nowrap -rotate-90 text-[10px] md:text-xs font-bold text-gray-400 tracking-wide uppercase'>
                                                Million barrels per day
                                            </span>
                                        </div>

                                        <div className='relative w-full ml-10'>
                                            {/* Chart Area */}
                                            <div className='relative flex items-end justify-around h-[220px] md:h-[300px]'>

                                                {/* Y-axis Grid & Labels */}
                                                <div className='absolute inset-0 flex flex-col justify-between pointer-events-none'>
                                                    {[6, 5, 4, 3, 2, 1, 0].map((val, idx) => (
                                                        <div key={val} className='relative w-full flex items-center h-0'>
                                                            <div className={`absolute left-0 right-0 h-px ${idx === 6 ? 'bg-gray-300' : 'bg-gray-100'}`} />
                                                            <span className='absolute -left-10 text-[10px] md:text-xs font-bold text-gray-400 w-8 text-right transform -translate-y-1/2'>
                                                                {val}M
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Bars */}
                                                {[
                                                    { label: "China", val: 5.4, color: "#FCD34D" },
                                                    { label: "India", val: 2.1, color: "#FCD34D" },
                                                    { label: "S. Korea", val: 1.7, color: "#FCD34D" },
                                                    { label: "Japan", val: 1.6, color: "#D4AF37" },
                                                    { label: "Europe", val: 0.5, color: "#D4AF37" },
                                                    { label: "US", val: 0.4, color: "#D4AF37" },
                                                    { label: "Other", val: 2.6, color: "#FEF3C7" }
                                                ].map((bar, idx) => (
                                                    <div key={idx} className='relative flex flex-col items-center justify-end h-full z-10' style={{ width: '12%' }}>
                                                        <span className='text-[10px] md:text-sm font-bold text-black mb-2'>{bar.val}</span>
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            whileInView={{ height: `${(bar.val / 6) * 100}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.1 }}
                                                            className='w-full shadow-sm'
                                                            style={{ background: bar.color }}
                                                        />
                                                        {/* X-axis Label */}
                                                        <div className='absolute top-full pt-3 w-full text-center'>
                                                            <span className='text-[9px] md:text-[11px] font-bold text-gray-600 uppercase tracking-tight leading-tight'>
                                                                {bar.label}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Baseline */}
                                            <div className='w-full h-px bg-gray-300' />

                                            {/* Extra space for X-axis labels */}
                                            <div className='h-10' />
                                        </div>
                                    </div>
                                </div>

                                {/* Source & Footer Narrative */}
                                <div className='space-y-4'>
                                    <div className='text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest' style={{ fontFamily: 'PT Serif, serif' }}>
                                        Source: <a href="https://www.eia.gov" target='_blank' className='text-blue-600 underline hover:text-blue-800 transition-colors'>EIA</a>, <span className='text-blue-600 underline cursor-pointer'>Statistic</span>
                                    </div>
                                    <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-light font-serif' style={{ fontFamily: 'PT Serif, serif' }}>
                                        Asia accounts for the majority of Hormuz-bound crude flows, making the disruption disproportionately impactful for Asian energy-importing economies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id='page3' className='space-y-16 pt-24 border-t border-gray-100'>
                            {/* 02. HISTORICAL FRAMEWORK */}
                            <div className='space-y-10'>
                                <div className='space-y-4'>
                                    <h3 className='text-xl md:text-2xl font-bold uppercase tracking-tight' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                        02. HISTORICAL FRAMEWORK
                                    </h3>
                                    <h2 className='text-2xl md:text-4xl font-bold text-black leading-tight' style={{ fontFamily: 'PT Serif, serif' }}>
                                        Decades of Tension: Why 2026 Was Not a Surprise
                                    </h2>
                                    <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-light font-serif max-w-5xl' style={{ fontFamily: 'PT Serif,serif' }}>
                                        The 2026 crisis did not emerge in isolation. The Strait of Hormuz has remained a recurring flashpoint in US – Iran - Gulf relations for over four decades. While tensions have repeatedly escalated, previous episodes stopped short of sustained disruption to commercial transit.
                                    </p>
                                </div>

                                {/* Earlier Crises and Conflicts */}
                                <div className='space-y-10'>
                                    <h4 className='text-lg md:text-xl font-bold' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                        Earlier Crises and Conflicts
                                    </h4>

                                    <div className='space-y-8'>
                                        {[
                                            {
                                                year: "1980s TANKER WAR",
                                                text: "Iran threatened closure but kept the strait operational to avoid direct US military escalation.",
                                                color: GOLD
                                            },
                                            {
                                                year: "1988 OPERATION PRAYING MANTIS",
                                                text: "US forces reopened passage through direct military action after Iranian mines threatened shipping.",
                                                color: GOLD
                                            },
                                            {
                                                year: "2011 – 2025 THREATS",
                                                text: "Iran's repeated warnings were always resolved diplomatically before any sustained blockade occurred.",
                                                color: GOLD
                                            },
                                            {
                                                year: "2026 CRISIS",
                                                text: "A brief air conflict between Iran and Israel preceded the 2026 war. It marks the first actual implementation of Hormuz Blockade.",
                                                color: "#D94545" // Specific Red for Crisis
                                            }
                                        ].map((item, idx) => (
                                            <div key={idx} className='space-y-2'>
                                                <h5 className='text-sm md:text-base font-bold uppercase tracking-[0.2em]' style={{ color: item.color, fontFamily: 'PT Serif, serif' }}>
                                                    {item.year}
                                                </h5>
                                                <p className='text-base md:text-lg text-gray-800 leading-relaxed font-light font-serif max-w-4xl' style={{ fontFamily: 'PT Serif, serif' }}>
                                                    {item.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='w-full h-px bg-gray-200 my-16' />

                                {/* The Pre-Crisis Window */}
                                <div className='space-y-10'>
                                    <h4 className='text-xl md:text-2xl font-bold' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                        The Pre-Crisis Window: January–February 2026
                                    </h4>

                                    <div className='space-y-8'>
                                        <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-light font-serif max-w-5xl' style={{ fontFamily: 'PT Serif, serif' }}>
                                            In the weeks leading up to the crisis, both market behaviour and geopolitical signals pointed toward rising risk. Iran accelerated exports to approximately <span className='font-bold text-black'>3.8 million barrels per day</span> in mid-February, while Saudi Arabia increased shipments to <span className='font-bold text-black'>7.3 million barrels per day</span>, suggesting pre-emptive positioning ahead of potential disruption.
                                        </p>
                                        <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-light font-serif max-w-5xl' style={{ fontFamily: 'PT Serif, serif' }}>
                                            At the same time, war-risk insurance premiums for Hormuz transit rose sharply, and incidents involving Iranian naval forces signalled escalating tensions. By late February, energy markets had already begun pricing in a heightened probability of disruption.
                                        </p>

                                        <div className='pt-4'>
                                            <span className='text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest' style={{ fontFamily: 'PT Serif, serif' }}>
                                                Source: <a href="https://www.reuters.com" target='_blank' className='text-blue-600 underline hover:text-blue-800 transition-colors'>Reuters</a>, <a href="https://www.bloomberg.com" target='_blank' className='text-blue-600 underline hover:text-blue-800 transition-colors'>Bloomberg</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id='page4' className='space-y-16 pt-24 border-t border-gray-100'>
                            {/* 03. CURRENT DISRUPTION */}
                            <div id='text' className='space-y-12'>
                                <div className='space-y-4'>
                                    <h3 className='text-xl md:text-2xl font-bold uppercase tracking-tight' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                        03. CURRENT DISRUPTION
                                    </h3>
                                    <h2 className='text-2xl md:text-4xl font-bold text-black leading-tight' style={{ fontFamily: 'PT Serif, serif' }}>
                                        From Airstrikes to Oil Shock: The Thirty Days That Changed Everything
                                    </h2>
                                    <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-light font-serif max-w-5xl' style={{ fontFamily: 'PT Serif,serif' }}>
                                        What began as a targeted military escalation in late February 2026 rapidly evolved into the most severe disruption to global energy flows in decades. Within days, tanker traffic through the Strait of Hormuz collapsed, triggering a sharp repricing across oil, gas, and freight markets.
                                    </p>
                                </div>

                                {/* Crisis Timeline Section */}
                                <div className='space-y-10'>
                                    <h4 className='text-xl md:text-2xl font-bold' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                        Crisis Timeline: February 28 - March 27, 2026
                                    </h4>

                                    <div className='relative flex flex-col gap-12'>
                                        {/* Vertical Line */}
                                        <div className='absolute left-[145px] top-2 bottom-2 w-px bg-gray-200 hidden md:block' />

                                        {[
                                            {
                                                date: "28 FEBRUARY 2026",
                                                text: "US - Israel airstrikes escalate regional tensions, with Iran signalling potential disruption to Hormuz transit.",
                                                isCritical: false
                                            },
                                            {
                                                date: "1–2 MARCH 2026",
                                                text: "Transit through the strait collapses as insurers withdraw coverage and shipping activity drops sharply.",
                                                isCritical: true
                                            },
                                            {
                                                date: "4–8 MARCH 2026",
                                                text: "Energy infrastructure disruptions emerge, with LNG operations affected and oil prices moving sharply higher.",
                                                isCritical: true
                                            },
                                            {
                                                date: "11 MARCH 2026",
                                                text: "Multiple vessel attacks intensify market stress. Brent crude peaks near $126 per barrel, while regional benchmarks spike further.",
                                                isCritical: true
                                            },
                                            {
                                                date: "12–18 MARCH 2026",
                                                text: "Military escalation continues, with limited international intervention. A large number of vessels remain stranded.",
                                                isCritical: false
                                            },
                                            {
                                                date: "19–21 MARCH 2026",
                                                text: "Efforts to restore transit intensify amid continued volatility in energy markets.",
                                                isCritical: false
                                            },
                                            {
                                                date: "26–27 MARCH 2026",
                                                text: "Partial reopening begins, with selective transit permitted for specific countries, signalling a shift toward controlled access.",
                                                isCritical: false
                                            }
                                        ].map((item, idx) => (
                                            <div key={idx} className='flex items-start gap-0 relative'>
                                                {/* Date Col (left) */}
                                                <div
                                                    className='text-[10px] md:text-[11px] font-bold tracking-tight shrink-0 text-right pt-0.5 pr-8'
                                                    style={{ color: item.isCritical ? '#D94545' : GOLD, width: '145px', fontFamily: 'PT Serif,serif' }}
                                                >
                                                    {item.date}
                                                </div>

                                                {/* Dot Col (middle) */}
                                                <div className='flex items-start justify-center shrink-0 pt-1.5' style={{ width: '1px' }}>
                                                    <div
                                                        className='size-[10px] rounded-full z-10'
                                                        style={{ background: item.isCritical ? '#D94545' : GOLD }}
                                                    />
                                                </div>

                                                {/* Content Col (right) */}
                                                <div className='flex-1 pl-10' style={{ fontFamily: 'PT Serif,serif' }}>
                                                    <h5 className='text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-2' style={{ color: item.isCritical ? '#D94545' : GOLD }}>
                                                        {item.date}
                                                    </h5>
                                                    <p className='text-sm md:text-base text-gray-800 leading-relaxed font-light'>
                                                        {item.text.split('$126 per barrel')[0]}
                                                        {item.text.includes('$126 per barrel') && <span className='font-bold text-black'>$126 per barrel</span>}
                                                        {item.text.split('$126 per barrel')[1]}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='space-y-12'>
                                    <p className='text-lg md:text-xl text-black font-bold leading-relaxed font-serif max-w-5xl' style={{ fontFamily: 'PT Serif, serif' }}>
                                        The International Energy Agency described the disruption as one of the most significant supply shocks in modern oil market history, reflecting both the scale and speed of the breakdown in transit through the strait.
                                    </p>

                                    <div className='pt-4'>
                                        <span className='text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest' style={{ fontFamily: 'PT Serif, serif' }}>
                                            Source: <a href="https://www.reuters.com" target='_blank' className='text-blue-600 underline hover:text-blue-800 transition-colors'>Reuters</a>, <a href="https://www.bloomberg.com" target='_blank' className='text-blue-600 underline hover:text-blue-800 transition-colors'>Bloomberg</a>, <a href="https://www.eia.gov" target='_blank' className='text-blue-600 underline hover:text-blue-800 transition-colors'>EIA</a>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div id='graph' className='space-y-12'>
                                <h3 className='text-2xl md:text-3xl font-bold' style={{ fontFamily: 'PT Serif, serif' }}>
                                    Transit from 130 Ships to Near Zero
                                </h3>

                                <div className='w-full border border-gray-200 bg-white p-6 md:p-12 shadow-sm'>
                                    <h5 className='text-center text-lg md:text-2xl font-bold text-[#4B4B4B] mb-12' style={{ fontFamily: 'PT Serif, serif' }}>
                                        Hormuz Daily Transit
                                    </h5>

                                    <div className='relative w-full md:px-6 flex'>
                                        {/* Y-axis Label (Rotated) */}
                                        <div className='absolute -left-12 md:-left-12 top-1/2 -translate-y-1/2 h-64 flex items-center justify-center'>
                                            <span className='whitespace-nowrap -rotate-90 text-[10px] md:text-xs font-bold text-gray-400 tracking-wide uppercase'>
                                                Vessels per day
                                            </span>
                                        </div>

                                        <div className='relative w-full ml-10'>
                                            {/* Chart Area */}
                                            <div className='relative flex items-end justify-around h-[220px] md:h-[300px]'>

                                                {/* Y-axis Grid & Labels */}
                                                <div className='absolute inset-0 flex flex-col justify-between pointer-events-none'>
                                                    {[140, 120, 100, 80, 60, 40, 20, 0].map((val, idx) => (
                                                        <div key={val} className='relative w-full flex items-center h-0'>
                                                            <div className={`absolute left-0 right-0 h-px ${idx === 7 ? 'bg-gray-300' : 'bg-gray-100'}`} />
                                                            <span className='absolute -left-10 text-[10px] md:text-xs font-bold text-gray-400 w-8 text-right transform -translate-y-1/2'>
                                                                {val}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Bars */}
                                                {[
                                                    { label: "Pre-crisis (Avg)", val: 130, color: "#B8860B" },
                                                    { label: "March 1", val: 18, color: "#C2510E" },
                                                    { label: "March 5", val: 8, color: "#C2510E" },
                                                    { label: "March 10", val: 2, color: "#C2510E" },
                                                    { label: "March 15", val: 5, color: "#FCD34D" },
                                                    { label: "March 20", val: 7, color: "#FCD34D" },
                                                    { label: "March 27", val: 14, color: "#FCD34D" }
                                                ].map((bar, idx) => (
                                                    <div key={idx} className='relative flex flex-col items-center justify-end h-full z-10' style={{ width: '12%' }}>
                                                        <span className='text-[10px] md:text-sm font-bold text-black mb-2'>{bar.val}</span>
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            whileInView={{ height: `${(bar.val / 140) * 100}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.1 }}
                                                            className='w-full shadow-sm'
                                                            style={{ background: bar.color }}
                                                        />
                                                        {/* X-axis Label */}
                                                        <div className='absolute top-full pt-3 w-full text-center'>
                                                            <span className='text-[9px] md:text-[11px] font-bold text-gray-600 uppercase tracking-tight leading-tight'>
                                                                {bar.label}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Baseline */}
                                            <div className='w-full h-px bg-gray-300' />

                                            {/* Extra space for X-axis labels */}
                                            <div className='h-12' />
                                        </div>
                                    </div>
                                </div>

                                {/* Source & Footer Narrative */}
                                <div className='space-y-4'>
                                    <div className='text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest' style={{ fontFamily: 'PT Serif, serif' }}>
                                        Source: <a href="https://windward.ai" target='_blank' className='text-blue-600 underline hover:text-blue-800 transition-colors'>Windward</a>
                                    </div>
                                </div>

                                <div className='space-y-4'>
                                    <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-light font-serif max-w-5xl' style={{ fontFamily: 'PT Serif,serif' }}>
                                        Tanker traffic through Hormuz collapsed within days of the disruption, highlighting the immediate breakdown in commercial transit.                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id='page5' className='space-y-16 pt-24 border-t border-gray-100'>
                            {/* 04. BROADER MARKET IMPACT */}
                            <div id='section1' className='space-y-12'>
                                <div className='space-y-4'>
                                    <h3 className='text-xl md:text-2xl font-bold uppercase tracking-tight' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                        04. BROADER MARKET IMPACT
                                    </h3>
                                    <h2 className='text-2xl md:text-4xl font-bold text-black leading-tight' style={{ fontFamily: 'PT Serif, serif' }}>
                                        Commodity Shock: Oil, LNG, and Supply Chains
                                    </h2>
                                    <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-light font-serif max-w-5xl' style={{ fontFamily: 'PT Serif,serif' }}>
                                        The Strait of Hormuz disruption triggered a broad-based shock across energy and commodity markets, extending beyond crude oil into LNG, fertilisers, and metals. As a critical transit corridor, disruptions in Hormuz rapidly translated into price volatility, supply dislocations, and rising input costs across global value chains.<a href="#" className='text-blue-600 underline'>(1)</a>
                                    </p>
                                </div>

                                <div className='space-y-10'>
                                    <h3 className='text-2xl md:text-3xl font-bold' style={{ fontFamily: 'PT Serif, serif' }}>
                                        Brent Crude: The Velocity of the Shock
                                    </h3>

                                    <div className='w-full border border-gray-200 bg-white p-6 md:p-12 shadow-sm'>
                                        <h5 className='text-center text-lg md:text-2xl font-bold text-[#4B4B4B] mb-12' style={{ fontFamily: 'PT Serif, serif' }}>
                                            Brent Crude
                                        </h5>

                                        <div className='relative w-full'>
                                            {/* Y-axis Labels */}
                                            {/* Y-axis Labels */}
                                            <div className='absolute -left-12 md:-left-16 top-0 h-full pointer-events-none'>
                                                {[180, 165, 150, 135, 120, 105, 90, 75].map((val) => {
                                                    // SAME SCALE as chart
                                                    const y = 50 + (180 - val) * (350 / 105);

                                                    return (
                                                        <span
                                                            key={val}
                                                            className='absolute text-[10px] md:text-xs font-bold text-gray-400 w-12 text-right'
                                                            style={{
                                                                top: `${(y / 450) * 100}%`,
                                                                transform: 'translateY(-20%)'
                                                            }}
                                                        >
                                                            ${val}
                                                        </span>
                                                    );
                                                })}
                                            </div>

                                            {/* Chart Area */}
                                            <div className='relative ml-4 md:ml-0 h-[300px] md:h-[400px] w-full'>
                                                <svg className='w-full h-full overflow-visible' viewBox="0 0 1000 450" preserveAspectRatio="none">
                                                    {/* Grid Lines */}
                                                    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                                                        <line
                                                            key={i}
                                                            x1="50" y1={50 + i * 50}
                                                            x2="950" y2={50 + i * 50}
                                                            stroke={i === 7 ? "#D1D5DB" : "#F3F4F6"}
                                                            strokeWidth="1"
                                                        />
                                                    ))}

                                                    {/* Data Generation Logic */}
                                                    {(() => {
                                                        const dates = ["Feb-20", "Feb-25", "Mar-01", "Mar-04", "Mar-08", "Mar-11", "Mar-15", "Mar-20", "Mar-27"];
                                                        const brent = [81, 84, 91, 96, 102, 126, 118, 112, 108];
                                                        const dubai = [78, 80, 94, 110, 130, 167, 148, 138, 125];

                                                        // Map values to Y coordinates (inverted: higher values = lower Y)
                                                        const getY = (val) => 50 + (180 - val) * (350 / 105);
                                                        const getX = (idx) => 100 + idx * 100;

                                                        const brentPath = brent.map((v, i) => `${getX(i)},${getY(v)}`).join(" L ");
                                                        const dubaiPath = dubai.map((v, i) => `${getX(i)},${getY(v)}`).join(" L ");

                                                        // Generate interpolated points for Dubai dotted line
                                                        const dubaiInterpolated = [];
                                                        for (let i = 0; i < dubai.length - 1; i++) {
                                                            const steps = 20; // Number of interpolation points
                                                            for (let j = 0; j <= steps; j++) {
                                                                const t = j / steps;
                                                                const x = getX(i) + t * (getX(i + 1) - getX(i));
                                                                const y = getY(dubai[i]) + t * (getY(dubai[i + 1]) - getY(dubai[i]));
                                                                dubaiInterpolated.push({ x, y });
                                                            }
                                                        }

                                                        return (
                                                            <>
                                                                {/* Dubai Line (as individual dots) */}
                                                                {dubaiInterpolated.map((point, idx) => (
                                                                    <circle
                                                                        key={`dubai-dot-${idx}`}
                                                                        cx={point.x}
                                                                        cy={point.y}
                                                                        r="2.5"
                                                                        fill="black"
                                                                    />
                                                                ))}

                                                                {/* Brent Line (Solid) */}
                                                                <motion.path
                                                                    initial={{ pathLength: 0 }}
                                                                    whileInView={{ pathLength: 1 }}
                                                                    viewport={{ once: true }}
                                                                    transition={{ duration: 2, ease: "easeInOut" }}
                                                                    d={`M ${brentPath}`}
                                                                    fill="none"
                                                                    stroke="#D4AF37"
                                                                    strokeWidth="4"
                                                                />

                                                                {/* Annotation Text */}
                                                                <text x={getX(5) + 50} y={getY(167) - 30} className='text-[10px] md:text-xs font-bold' style={{ fontFamily: 'PT Serif, serif' }}>
                                                                    Peak divergence: ~$40/bbl
                                                                </text>
                                                                <text x={getX(5) + 70} y={getY(167) + 5} className='text-[8px] md:text-[10px]' fill='#6B7280'>167</text>
                                                                <text x={getX(5) + 10} y={getY(126) - 10} className='text-[8px] md:text-[10px]' fill='#6B7280'>126</text>

                                                                {/* Data Points - Main circles */}
                                                                {brent.map((v, i) => (
                                                                    <circle key={`brent-${i}`} cx={getX(i)} cy={getY(v)} r="5" fill="#D4AF37" />
                                                                ))}
                                                                {dubai.map((v, i) => (
                                                                    <circle key={`dubai-${i}`} cx={getX(i)} cy={getY(v)} r="6" fill="black" />
                                                                ))}

                                                                {/* X-axis Labels */}
                                                                {dates.map((d, i) => (
                                                                    <text key={d} x={getX(i)} y="430" textAnchor="middle" className='text-[10px] md:text-xs font-bold text-gray-500' style={{ fontFamily: 'PT Serif, serif' }}>
                                                                        {d}
                                                                    </text>
                                                                ))}
                                                            </>
                                                        );
                                                    })()}
                                                </svg>
                                            </div>

                                            {/* Legend */}
                                            <div className='mt-8 flex items-center justify-center gap-10'>
                                                <div className='flex items-center gap-3'>
                                                    <div className='w-8 h-1 bg-[#D4AF37]' />
                                                    <div className='size-2 rounded-full -ml-5 bg-[#D4AF37]' />
                                                    <span className='text-[10px] md:text-xs font-bold text-gray-600' style={{ fontFamily: 'PT Serif, serif' }}>Brent</span>
                                                </div>
                                                <div className='flex items-center gap-3'>
                                                    <div className='w-8 h-0.5 border-t-2 border-dashed border-black' />
                                                    <div className='size-2 rounded-full -ml-5 bg-black' />
                                                    <span className='text-[10px] md:text-xs font-bold text-gray-600' style={{ fontFamily: 'PT Serif, serif' }}>Dubai</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Source Footer */}
                                    <div className='pt-4'>
                                        <span className='text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest' style={{ fontFamily: 'PT Serif, serif' }}>
                                            Source: <span className='text-blue-600 underline cursor-pointer'>Intellectual</span>, <a href="https://www.bloomberg.com" target='_blank' className='text-blue-600 underline hover:text-blue-800 transition-colors'>Bloomberg</a>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div id='section2' className='space-y-12'>
                                {/* Narrative Analysis */}
                                <div className='space-y-8'>
                                    <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-light font-serif max-w-5xl' style={{ fontFamily: 'PT Serif, serif' }}>
                                        Brent crude spiked intraday to around <span className='font-bold text-black'>$126 per barrel</span> on immediate supply fears, before reversing sharply (<span className='font-bold text-black'>$88 PB</span>) as emergency supply responses including increased Russian flows and strategic reserve releases eased near-term panic. This highlights the speed at which both disruption and policy response can drive oil price volatility.
                                    </p>
                                    <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-light font-serif max-w-5xl' style={{ fontFamily: 'PT Serif, serif' }}>
                                        Dubai crude, the primary benchmark for Middle Eastern oil flows to Asia, remained elevated during the disruption, reflecting a sustained physical supply shortage in regional markets even as Brent corrected. This divergence highlights the difference between futures-driven pricing and physical supply conditions.
                                    </p>
                                </div>

                                {/* Impact Boxes Container (using divs/flex instead of grid) */}
                                <div className='flex flex-wrap gap-x-12 gap-y-12'>
                                    {[
                                        {
                                            title: "Crude Oil",
                                            text: "~20% of global supply flows through Hormuz, with disruptions leading to sharp price spikes and export constraints from Gulf producers."
                                        },
                                        {
                                            title: "LNG & Natural Gas",
                                            text: "Qatar’s LNG disruptions tightened global gas supply, triggering rapid price increases across Europe and Asia."
                                        },
                                        {
                                            title: "Fertilisers & Petrochemicals",
                                            text: "Gulf export disruptions affected fertiliser and petrochemical supply chains, raising input costs and inflation risks."
                                        },
                                        {
                                            title: "Aluminium",
                                            text: "Gulf aluminium smelters shutdown as Hormuz blocks exports and bauxite imports; Qatalum stops deliveries due to blockade."
                                        }
                                    ].map((item, idx) => (
                                        <div key={idx} className='flex-1 min-w-full md:min-w-[45%] flex flex-col border-t-2 border-[#D94545] shadow-sm'>
                                            <div className='bg-[#FDFBF7] px-6 py-4'>
                                                <h4 className='text-xl font-bold' style={{ fontFamily: 'PT Serif, serif' }}>
                                                    {item.title}
                                                </h4>
                                            </div>
                                            <div className='bg-white px-6 py-8 flex-1'>
                                                <p className='text-base md:text-lg text-gray-800 leading-relaxed font-light font-serif' style={{ fontFamily: 'PT Serif, serif' }}>
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Source Footer */}
                                <div className='pt-2'>
                                    <span className='text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest' style={{ fontFamily: 'PT Serif, serif' }}>
                                        Source: <span className='text-blue-600 underline cursor-pointer'>Forbes</span>, <span className='text-blue-600 underline cursor-pointer'>Forbes</span>, <a href="https://economictimes.indiatimes.com" target='_blank' className='text-blue-600 underline hover:text-blue-800 transition-colors'>Economic Times</a>, <a href="https://www.cnbc.com" target='_blank' className='text-blue-600 underline hover:text-blue-800 transition-colors'>CNBC</a>
                                    </span>
                                </div>
                            </div>

                            <div id='section3' className='space-y-12'>
                                {/* Financial Markets Reaction */}
                                <div className='space-y-8'>
                                    <h3 className='text-2xl md:text-3xl font-bold' style={{ fontFamily: 'PT Serif, serif' }}>
                                        Financial Markets Reaction
                                    </h3>
                                    <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-light font-serif max-w-5xl' style={{ fontFamily: 'PT Serif, serif' }}>
                                        The energy shock triggered a broader risk repricing across financial markets. Higher oil prices raised inflation expectations and growth concerns, with global equities declining modestly and volatility rising.
                                    </p>

                                    <div className='max-w-xl'>
                                        <table className='w-full border-collapse border border-gray-300' style={{ fontFamily: 'Inter, sans-serif' }}>
                                            <thead>
                                                <tr className='bg-white'>
                                                    <th className='border border-gray-300 px-6 py-4 text-left text-sm md:text-base font-bold text-black'>Index</th>
                                                    <th className='border border-gray-300 px-6 py-4 text-left text-sm md:text-base font-bold text-black'>Change (Pre-Attack to Mid-Mar)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[
                                                    { index: "S&P 500", change: "-2.2%" },
                                                    { index: "Dow Jones", change: "-4.0%" },
                                                    { index: "VIX", change: "+11.7%" },
                                                    { index: "Nifty 50", change: "-3.5%" }
                                                ].map((row, idx) => (
                                                    <tr key={idx} className='hover:bg-gray-50 transition-colors'>
                                                        <td className='border border-gray-300 px-6 py-4 text-sm md:text-base text-gray-800 font-serif' style={{ fontFamily: 'PT Serif, serif' }}>{row.index}</td>
                                                        <td className='border border-gray-300 px-6 py-4 text-sm md:text-base text-gray-800 font-serif' style={{ fontFamily: 'PT Serif, serif' }}>{row.change}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Container Shipping Crisis */}
                                <div className='space-y-8'>
                                    <h3 className='text-2xl md:text-3xl font-bold' style={{ fontFamily: 'PT Serif, serif' }}>
                                        Container Shipping Crisis
                                    </h3>
                                    <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-light font-serif max-w-5xl' style={{ fontFamily: 'PT Serif, serif' }}>
                                        Shipping disruptions intensified as vessels rerouted away from the Gulf. Diversions via longer routes increased transit times, fuel costs, and insurance premiums, further amplifying supply chain pressures. <a href="#" className='text-blue-600 underline'>(2)</a>
                                    </p>

                                    {/* Source Footer */}
                                    <div className='pt-4'>
                                        <span className='text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest' style={{ fontFamily: 'PT Serif, serif' }}>
                                            Source: <a href="https://www.investing.com" target='_blank' className='text-blue-600 underline hover:text-blue-800 transition-colors'>Investing</a>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div id='section4' className='space-y-12'>

                            </div>

                            <div id='section5' className='space-y-12'>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default TheStraitOfHormuzCrisis
