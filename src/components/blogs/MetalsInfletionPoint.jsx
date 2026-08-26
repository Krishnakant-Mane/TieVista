import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const GOLD = '#D4AF37'
const CHARCOAL = '#1A1A1A'

const MetalsInfletionPoint = () => {
    const navigate = useNavigate()
    const blog = {
        id: 3,
        title: "Metals at an Inflection Point",
        goldtitle: "Clean energy and AI infrastructure",
        description: "Global metals markets are being reshaped by three converging forces: the energy transition's build-out of renewables, grids...",
        img: "https://res.cloudinary.com/dr1u4plse/image/upload/v1774960590/US_CRISIS_bpyyrp.png",
        url: "/blogs/metals-at-an-inflection-point",
        date: "Aug 26, 2026"
    }

    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 300])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <>
            <div className='min-h-screen w-full selection:text-white selection:bg-[#D4AF37] pt-serif'>

                <section ref={heroRef} className="h-[60vh] w-full relative flex items-center justify-start overflow-hidden">
                    {/* Parallax Background */}
                    <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 will-change-transform">
                        <img
                            className="h-full w-full object-cover"
                            src={blog.img}
                            alt={blog.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
                    </motion.div>

                    {/* Content — left aligned */}
                    <motion.div
                        style={{ opacity: heroOpacity }}
                        className="relative z-10 px-8 lg:px-16 w-full  lg:ml-110 pt-10"
                    >
                        {/* Date Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="inline-flex items-center gap-2 px-3 py-1 mb-6 border rounded-full backdrop-blur-sm"
                            style={{ borderColor: `${GOLD}60`, background: 'rgba(0,0,0,0.25)' }}
                        >
                            <span className="w-1 h-1 rounded-full" style={{ background: GOLD }} />
                            <span className="text-[9px] font-bold tracking-[0.3em] uppercase" style={{ color: GOLD }}>
                                {blog.date}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                            className="text-2xl md:text-3xl lg:text-4xl text-white tracking-tight leading-tight pt-serif "
                        >
                            <h1 className='font-bold mb-2'>{blog.title}</h1>
                            <h1 className="font-bold text-[#D4AF37]">{blog.goldtitle}</h1>
                        </motion.div>

                        {/* Gold Divider */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.7, delay: 0.8 }}
                            className="w-16 h-1 mt-8 origin-left rounded-full"
                            style={{ background: GOLD }}
                        />
                    </motion.div>
                </section>

                <div className='min-h-screen max-w-7xl mx-auto px-6 lg:px-16 py-20'>
                    <div id='0' className='max-w-4xl pt-4'>
                        {/* Category */}
                        <div className='text-black font-bold tracking-[0.15em] text-sm md:text-base mb-8 uppercase' >
                            Metals & Mining
                        </div>

                        {/* Subtitle */}
                        <p className='text-lg md:text-4xl text-bold text-black pt-serif mb-7'>
                            How clean energy and AI infrastructure are rewriting metal demand and testing supply
                        </p>

                        {/* Metals List */}
                        <div className='flex flex-wrap items-center gap-4 text-[#D4AF37] font-bold tracking-[0.15em] text-xs md:text-sm uppercase mb-6 poppins-sans'>
                            <span>STEEL</span>
                            <span>·</span>
                            <span>IRON ORE</span>
                            <span>·</span>
                            <span>COPPER</span>
                            <span>·</span>
                            <span>ALUMINIUM</span>
                            <span>·</span>
                            <span>GOLD</span>
                            <span>·</span>
                            <span>SILVER</span>
                        </div>

                        {/* Date */}
                        <div className='text-sm text-gray-800 mb-6 font-medium' style={{ fontFamily: 'Poppins, sans-serif' }}>
                            August 2026
                        </div>

                        {/* Divider */}
                        <div className='w-full h-px bg-gray-200'></div>
                    </div>

                    <div id='1' className='max-w-7xl pt-24'>
                        {/* Executive Summary Tag */}
                        <div className='flex justify-end mb-6'>
                            <span className='text-black font-bold tracking-[0.15em] text-xs uppercase' style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Executive Summary
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className='text-3xl md:text-4xl font-bold text-black mb-3' style={{ fontFamily: 'PT Serif, serif' }}>
                            The Story in Three Forces
                        </h2>

                        {/* Subtitle */}
                        <p className='text-black italic mb-10' style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem' }}>
                            Six metals, three demand forces, one supply-side question
                        </p>

                        {/* Body Text */}
                        <p className='text-sm md:text-base text-black mb-12 leading-relaxed' style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Global metals markets are being reshaped by three converging forces: <span className="font-bold">the energy transition's build-out of renewables, grids, EVs and battery manufacturing;</span> the newer, still-developing pull of AI and data-centre infrastructure; and a supply side that is struggling to keep pace on ore quality, capital intensity and geopolitics. Copper and aluminium are being directly repriced by clean energy and, increasingly, AI-linked infrastructure. Steel and iron ore are being reshaped by the energy transition's industrial build-out. Gold remains driven overwhelmingly by monetary and investment dynamics, with AI-linked demand only an emerging, secondary thread. Silver sits in between as a precious metal whose price is macro-driven, but whose underlying demand base is genuinely industrial.
                        </p>

                        {/* 3 Cards */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            <div className='bg-[#F6EFE6] p-6 flex flex-col space-y-2'>
                                <div className='text-[#B8902E] text-2xl font-bold' style={{ fontFamily: 'PT Serif, serif' }}>01</div>
                                <div className='text-black font-bold text-base' style={{ fontFamily: 'Poppins, sans-serif' }}>Energy Transition</div>
                                <div className='text-black text-xs md:text-sm leading-relaxed' style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Renewables, grids, EVs and battery manufacturing lift structural demand for steel, copper and aluminium.
                                </div>
                            </div>
                            
                            <div className='bg-[#F6EFE6] p-6 flex flex-col space-y-2'>
                                <div className='text-[#B8902E] text-2xl font-bold' style={{ fontFamily: 'PT Serif, serif' }}>02</div>
                                <div className='text-black font-bold text-base' style={{ fontFamily: 'Poppins, sans-serif' }}>AI & Data-Centre Buildout</div>
                                <div className='text-black text-xs md:text-sm leading-relaxed' style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    An emerging driver: copper and aluminium underpin power and cooling infrastructure; gold and silver see early gains in AI-linked electronics.
                                </div>
                            </div>
                            
                            <div className='bg-[#F6EFE6] p-6 flex flex-col space-y-2'>
                                <div className='text-[#B8902E] text-2xl font-bold' style={{ fontFamily: 'PT Serif, serif' }}>03</div>
                                <div className='text-black font-bold text-base' style={{ fontFamily: 'Poppins, sans-serif' }}>Supply Constraints</div>
                                <div className='text-black text-xs md:text-sm leading-relaxed' style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Falling ore grades, rising capital intensity, thin discovery pipelines and geopolitical disruption are tightening supply.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='2' className='w-full pt-24 pb-5'>
                        {/* Section Header */}
                        <div className='flex justify-end mb-6 relative h-14'>
                            <span className='relative z-10 text-black font-bold tracking-[0.15em] text-sm uppercase self-end pb-1' style={{ fontFamily: 'Poppins, sans-serif' }}>
                                STEEL
                            </span>
                            <span className='absolute right-0 top-0 text-[#B8902E] text-8xl font-bold select-none' style={{ fontFamily: 'PT Serif, serif', lineHeight: 1, opacity: 0.08 }}>
                                01
                            </span>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
                            {/* ── Left Column ── */}
                            <div className='space-y-5'>
                                <h2 className='text-2xl md:text-3xl font-bold text-black leading-snug' style={{ fontFamily: 'PT Serif, serif' }}>
                                    Steel: The Energy Transition's Structural Backbone
                                </h2>
                                <p className='text-black italic text-base' style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Government policy is explicitly tying steel capacity to the clean-energy build-out
                                </p>

                                <div className='space-y-4 text-sm text-black leading-relaxed' style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    <p><strong>Policy anchor:</strong> India's Minister of Steel has affirmed that renewable energy infrastructure, battery manufacturing and hydrogen initiatives all depend on steel supply, positioning India the world's second-largest producer to meet both domestic and global green-steel demand.</p>
                                    <p><strong>2030 target:</strong> Government aims for <strong>300 million tonnes of annual steel</strong> capacity by 2030, with an explicit emphasis on sustainable production methods, competitiveness and technology, not volume alone.</p>
                                    <p><strong>Enabling programmes:</strong> PM E-DRIVE (electric-mobility networks) and the PLI scheme for advanced-chemistry-cell batteries aim to build India's own manufacturing base for clean-energy equipment, not just consumption.</p>
                                    <p><strong>Near-term momentum:</strong> Capacity <strong>approvals of 11.6 million tonnes</strong> were granted in Apr–Jun 2026; crude steel production reached 14.1 MT in Jun'26 (4.5% YoY) and finished-steel consumption 14.2 MT.</p>
                                    <p><strong>Trade backdrop:</strong> India stayed a net importer, though an anti-dumping probe on HRC imports and an 11.5% safeguard duty are expected to keep import volumes contained.</p>
                                </div>

                                {/* 3 Stat Boxes */}
                                <div className='flex flex-col sm:flex-row gap-3 pt-4'>
                                    {[
                                        { val: '300 MT',  label: '2030 CAPACITY TARGET' },
                                        { val: '11.6 MT', label: 'CAPACITY APPROVED,\nQ1FY27' },
                                        { val: '+7.6%',   label: 'YOY FINISHED-STEEL\nDEMAND' },
                                    ].map(({ val, label }) => (
                                        <div key={val} className='flex-1 border border-[#B8902E] p-4 flex flex-col items-center text-center gap-2'>
                                            <div className='text-2xl md:text-3xl font-bold text-[#B8902E]' style={{ fontFamily: 'PT Serif, serif' }}>{val}</div>
                                            <div className='text-[9px] text-black font-semibold uppercase tracking-wider leading-snug whitespace-pre-line' style={{ fontFamily: 'Poppins, sans-serif' }}>{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ── Right Column: Charts ── */}
                            <div className='flex flex-col gap-10'>
                                <h3 className='text-xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>Ferrous Metals</h3>

                                {/* ─ Chart 1: Crude Steel Production ─ */}
                                {(() => {
                                    const months = ['Feb 2024','Mar 2024','Apr 2024','May 2024','Jun 2024','Jul 2024','Aug 2024','Sep 2024','Oct 2024','Nov 2024','Dec 2024','Jan 2025','Feb 2025','Mar 2025','Apr 2025','May 2025','Jun 2025','Jul 2025','Aug 2025','Sep 2025','Oct 2025','Nov 2025','Dec 2025','Jan 2026','Feb 2026','Mar 2026','Apr 2026','May 2026','Jun 2026']
                                    const values = [12.9,12.2,12.3,12,12.3,12.4,12,12.8,12.4,13.4,13.7,12.6,14,13.3,13.8,13.6,14,14.1,13.6,13.6,13.7,13.8,14.1,14.1,15.3,14.8,15.1,14,14.1]
                                    const W=560, H=270
                                    const ml=34, mr=8, mt=20, mb=90  // large mb for rotated month labels
                                    const chartW=W-ml-mr, chartH=H-mt-mb
                                    const yMax=20, yTicks=[0,5,10,15,20]
                                    const slotW=chartW/values.length
                                    const barW=slotW*0.78
                                    const toY=(v)=>mt+chartH-(v/yMax)*chartH
                                    const toH=(v)=>(v/yMax)*chartH
                                    const baseline=toY(0)
                                    return (
                                        <div>
                                            <p className='text-xs text-black mb-1' style={{ fontFamily: 'Poppins, sans-serif' }}>India Crude Steel Production (mnt): India's crude steel output stood flat MoM at 14.1 mnt in Jun'26. On a YoY basis, production increased by 4.5%.</p>
                                            <p className='text-sm font-semibold text-black mb-2 text-center' style={{ fontFamily: 'PT Serif, serif' }}>Crude Steel Production</p>
                                            <svg viewBox={`0 0 ${W} ${H}`} className='w-full' style={{ fontFamily: 'Poppins, sans-serif', overflow: 'visible' }}>
                                                {/* Y-axis label */}
                                                <text x={9} y={mt+chartH/2} textAnchor='middle' fontSize={8} fill='#6B7280' transform={`rotate(-90,9,${mt+chartH/2})`}>Million Tonnes</text>
                                                {/* Grid + Y ticks */}
                                                {yTicks.map(v => { const yy=toY(v); return (
                                                    <g key={v}>
                                                        <line x1={ml} x2={W-mr} y1={yy} y2={yy} stroke={v===0?'#9CA3AF':'#E5E7EB'} strokeWidth={v===0?1:0.5}/>
                                                        <text x={ml-3} y={yy+3.5} textAnchor='end' fontSize={8} fill='#9CA3AF'>{v}</text>
                                                    </g>
                                                )})}
                                                {/* Bars + all labels + rotated month labels */}
                                                {values.map((v,i) => {
                                                    const x = ml + i*slotW + (slotW-barW)/2
                                                    const bH=toH(v), bY=toY(v)
                                                    const cx = x + barW/2
                                                    return (
                                                        <g key={i}>
                                                            <motion.rect
                                                                x={x}
                                                                y={bY}
                                                                width={barW}
                                                                height={bH}
                                                                fill='#F3D054'
                                                                style={{ transformOrigin: '50% 100%' }}
                                                                initial={{ scaleY: 0 }}
                                                                whileInView={{ scaleY: 1 }}
                                                                viewport={{ once: true, margin: '-40px' }}
                                                                transition={{ duration: 0.65, delay: i * 0.022, ease: [0.22, 1, 0.36, 1] }}
                                                            />
                                                            {/* Value label above every bar */}
                                                            <motion.text
                                                                x={cx}
                                                                y={bY-4}
                                                                textAnchor='middle'
                                                                fontSize={7}
                                                                fill='#374151'
                                                                fontWeight='600'
                                                                initial={{ opacity: 0 }}
                                                                whileInView={{ opacity: 1 }}
                                                                viewport={{ once: true, margin: '-40px' }}
                                                                transition={{ duration: 0.28, delay: 0.65 + i * 0.022 }}
                                                            >{v}</motion.text>
                                                            {/* Rotated month label */}
                                                            <text
                                                                x={cx}
                                                                y={baseline+6}
                                                                textAnchor='end'
                                                                fontSize={7}
                                                                fill='#6B7280'
                                                                transform={`rotate(-90,${cx},${baseline+6})`}
                                                            >{months[i]}</text>
                                                        </g>
                                                    )
                                                })}
                                            </svg>
                                        </div>
                                    )
                                })()}

                                {/* ─ Chart 2: Finished Steel Consumption ─ */}
                                {(() => {
                                    const months = ['Feb 2024','Mar 2024','Apr 2024','May 2024','Jun 2024','Jul 2024','Aug 2024','Sep 2024','Oct 2024','Nov 2024','Dec 2024','Jan 2025','Feb 2025','Mar 2025','Apr 2025','May 2025','Jun 2025','Jul 2025','Aug 2025','Sep 2025','Oct 2025','Nov 2025','Dec 2025','Jan 2026','Feb 2026','Mar 2026','Apr 2026','May 2026','Jun 2026']
                                    const values = [12.5,11.2,11.3,12.1,12.1,12.3,12.6,12.4,13,12.1,14.3,12.4,14.4,14.2,13,13.1,13.2,13.4,13.8,13.3,13.4,12.9,14.5,14.7,13.5,12,16.3,13.8,14.2]
                                    const W=560, H=270
                                    const ml=34, mr=8, mt=20, mb=90
                                    const chartW=W-ml-mr, chartH=H-mt-mb
                                    const yMax=20, yTicks=[0,5,10,15,20]
                                    const slotW=chartW/values.length
                                    const barW=slotW*0.78
                                    const toY=(v)=>mt+chartH-(v/yMax)*chartH
                                    const toH=(v)=>(v/yMax)*chartH
                                    const baseline=toY(0)
                                    return (
                                        <div>
                                            <p className='text-xs text-black mb-1' style={{ fontFamily: 'Poppins, sans-serif' }}>India Finished Steel Consumption (mnt): Consumption was down by 1.2% MoM in Jun'26 at 14.2 mnt, largely due to seasonal buying moderation (early monsoon period). On a YoY basis, consumption was higher by 7.6%.</p>
                                            <p className='text-sm font-semibold text-black mb-2 text-center' style={{ fontFamily: 'PT Serif, serif' }}>Finished Steel Consumption</p>
                                            <svg viewBox={`0 0 ${W} ${H}`} className='w-full' style={{ fontFamily: 'Poppins, sans-serif', overflow: 'visible' }}>
                                                {/* Y-axis label */}
                                                <text x={9} y={mt+chartH/2} textAnchor='middle' fontSize={8} fill='#6B7280' transform={`rotate(-90,9,${mt+chartH/2})`}>Million Tonnes</text>
                                                {/* Grid + Y ticks */}
                                                {yTicks.map(v => { const yy=toY(v); return (
                                                    <g key={v}>
                                                        <line x1={ml} x2={W-mr} y1={yy} y2={yy} stroke={v===0?'#9CA3AF':'#E5E7EB'} strokeWidth={v===0?1:0.5}/>
                                                        <text x={ml-3} y={yy+3.5} textAnchor='end' fontSize={8} fill='#9CA3AF'>{v}</text>
                                                    </g>
                                                )})}
                                                {/* Bars + all labels + rotated month labels */}
                                                {values.map((v,i) => {
                                                    const x = ml + i*slotW + (slotW-barW)/2
                                                    const bH=toH(v), bY=toY(v)
                                                    const cx = x + barW/2
                                                    const isLast = i===values.length-1
                                                    return (
                                                        <g key={i}>
                                                            <motion.rect
                                                                x={x}
                                                                y={bY}
                                                                width={barW}
                                                                height={bH}
                                                                fill='#F3D054'
                                                                style={{ transformOrigin: '50% 100%' }}
                                                                initial={{ scaleY: 0 }}
                                                                whileInView={{ scaleY: 1 }}
                                                                viewport={{ once: true, margin: '-40px' }}
                                                                transition={{ duration: 0.65, delay: i * 0.022, ease: [0.22, 1, 0.36, 1] }}
                                                            />
                                                            {/* Value label above every bar */}
                                                            <motion.text
                                                                x={cx}
                                                                y={bY-4}
                                                                textAnchor='middle'
                                                                fontSize={7}
                                                                fill='#374151'
                                                                fontWeight='600'
                                                                initial={{ opacity: 0 }}
                                                                whileInView={{ opacity: 1 }}
                                                                viewport={{ once: true, margin: '-40px' }}
                                                                transition={{ duration: 0.28, delay: 0.65 + i * 0.022 }}
                                                            >{v}{isLast?' +7.6%':''}</motion.text>
                                                            {/* Rotated month label */}
                                                            <text
                                                                x={cx}
                                                                y={baseline+6}
                                                                textAnchor='end'
                                                                fontSize={7}
                                                                fill='#6B7280'
                                                                transform={`rotate(-90,${cx},${baseline+6})`}
                                                            >{months[i]}</text>
                                                        </g>
                                                    )
                                                })}
                                            </svg>
                                        </div>
                                    )
                                })()}
                            </div>
                        </div>
                    </div>

                    <div id='3' className='w-full pt-24 pb-5'>
                        {/* Section Header */}
                        <div className='flex justify-end mb-12 relative h-14'>
                            <span className='relative z-10 text-black font-bold tracking-[0.15em] text-sm uppercase self-end pb-1' style={{ fontFamily: 'Poppins, sans-serif' }}>
                                IRON ORE
                            </span>
                            <span className='absolute right-0 top-0 text-[#B8902E] text-8xl font-bold select-none' style={{ fontFamily: 'PT Serif, serif', lineHeight: 1, opacity: 0.08 }}>
                                02
                            </span>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
                            {/* ── Left Column ── */}
                            <div className='space-y-5'>
                                <h2 className='text-2xl md:text-3xl font-bold text-black leading-snug' style={{ fontFamily: 'PT Serif, serif' }}>
                                    Iron Ore: From Securing Volume to Securing Quality
                                </h2>

                                <p className='text-black italic text-base' style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    A lower-emissions steel industry needs a different kind of ore, not just more of it
                                </p>

                                <div className='space-y-3 text-sm text-black leading-relaxed' style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    <p>India's iron ore challenge is increasingly <strong>about quality rather than quantity,</strong> as DRI-based steelmaking requires premium ~67% Fe ore with lower impurities.</p>
                                    <p>Iron ore production nearly doubled to 312 MT in FY26, but exports declined while imports rose to 12.1 MT in 2025 due to higher domestic consumption.</p>
                                    <p>About <strong>57% of India's</strong> announced steel capacity under development is still BF-BOF based (Global Energy Monitor), extending reliance on imported coking coal, of which India already imports ~85%; more DR-grade ore could instead support a gradual shift to DRI using gas, syngas and, over time, green hydrogen.</p>
                                    <p>Global producers including Australia, Brazil, and Oman are investing in premium DR-grade ore and green iron, with Vale identifying <strong>India as a strategic growth market.</strong></p>
                                    <p>Australia's government expects India's iron ore imports to increase from 3 Mt in 2025 to 50 Mt by 2031, while industry estimates indicate a potential <strong>40 Mt iron ore supply gap</strong> by 2030.</p>
                                </div>

                                {/* 3 Stat Boxes */}
                                <div className='flex flex-col sm:flex-row gap-3 pt-4'>
                                    {[
                                        { val: '312 MT', label: 'INDIA IRON ORE OUTPUT,\nFY26' },
                                        { val: '50 MT',  label: 'FORECAST 2031 IMPORTS,\nFROM 3 MT IN 2025' },
                                        { val: '40 MT',  label: 'POTENTIAL 2030 SUPPLY GAP' },
                                    ].map(({ val, label }) => (
                                        <div key={val} className='flex-1 border border-[#B8902E] p-4 flex flex-col items-center text-center gap-2'>
                                            <div className='text-2xl md:text-3xl font-bold text-[#B8902E]' style={{ fontFamily: 'PT Serif, serif' }}>{val}</div>
                                            <div className='text-[9px] text-black font-semibold uppercase tracking-wider leading-snug whitespace-pre-line' style={{ fontFamily: 'Poppins, sans-serif' }}>{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ── Right Column: Chart ── */}
                            <div className='flex flex-col gap-4'>
                                <h3 className='text-2xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>Import Demand Outlook</h3>
                                <p className='text-xs text-black leading-relaxed' style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    India's expanding steel sector projected to drive growth in metallurgical coal and iron ore imports.<br/>
                                    The challenge is now not only how much iron ore is traded, but also what quality of iron ore is required.
                                </p>

                                {/* Legend */}
                                <div className='flex items-center justify-center gap-8 text-sm mt-2' style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    <div className='flex items-center gap-2'><span className='inline-block w-4 h-4 rounded-full bg-[#F3D054]'/> Metallurgical coal</div>
                                    <div className='flex items-center gap-2'><span className='inline-block w-4 h-4 rounded-full bg-[#CD9036]'/> Iron ore</div>
                                </div>

                                {/* SVG Bar Chart — matches img2 exactly */}
                                {(() => {
                                    const data = [
                                        { year: '2025', coal: 85,  iron: 3  },
                                        { year: '2026', coal: 88,  iron: 11 },
                                        { year: '2027', coal: 91,  iron: 24 },
                                        { year: '2028', coal: 95,  iron: 29 },
                                        { year: '2029', coal: 99,  iron: 34 },
                                        { year: '2030', coal: 103, iron: 47 },
                                        { year: '2031', coal: 108, iron: 50 },
                                    ]
                                    // Canvas dimensions
                                    const W = 560, H = 340
                                    const ml = 42  // left margin for Y-axis
                                    const mr = 10  // right margin
                                    const mt = 28  // top margin (space for value labels)
                                    const mb = 28  // bottom margin for X-axis year labels
                                    const chartW = W - ml - mr
                                    const chartH = H - mt - mb
                                    const yMax = 120
                                    const yTicks = [0, 20, 40, 60, 80, 100, 120]

                                    // Bar layout: each group occupies groupW, with padding
                                    const groupW = chartW / data.length
                                    const groupPad = groupW * 0.10  // 10% padding each side of group
                                    const availW = groupW - groupPad * 2
                                    const innerGap = 3  // gap between coal & iron bar
                                    const barW = (availW - innerGap) / 2

                                    // Y transform: value → SVG y coordinate
                                    const toY = (v) => mt + chartH - (v / yMax) * chartH
                                    const toH = (v) => (v / yMax) * chartH

                                    return (
                                        <svg viewBox={`0 0 ${W} ${H}`} className='w-full' style={{ fontFamily: 'Poppins, sans-serif', overflow: 'visible' }}>
                                            {/* Y-axis rotated label */}
                                            <text
                                                x={10} y={mt + chartH / 2}
                                                textAnchor='middle' fontSize={10} fill='#4B5563'
                                                transform={`rotate(-90, 10, ${mt + chartH / 2})`}
                                            >Million Tonnes</text>

                                            {/* Horizontal grid lines + Y tick labels */}
                                            {yTicks.map(v => {
                                                const yy = toY(v)
                                                return (
                                                    <g key={v}>
                                                        <line x1={ml} x2={W - mr} y1={yy} y2={yy} stroke={v === 0 ? '#9CA3AF' : '#E5E7EB'} strokeWidth={v === 0 ? 1.5 : 1} />
                                                        <text x={ml - 5} y={yy + 3.5} textAnchor='end' fontSize={10} fill='#6B7280'>{v}</text>
                                                    </g>
                                                )
                                            })}

                                            {/* Bars + labels + year labels */}
                                            {data.map((d, i) => {
                                                const groupStart = ml + i * groupW + groupPad
                                                const coalX = groupStart
                                                const ironX = groupStart + barW + innerGap
                                                const cx = ml + i * groupW + groupW / 2  // center of group for year label

                                                const coalBarH = toH(d.coal)
                                                const ironBarH = toH(d.iron)
                                                const coalBarY = toY(d.coal)
                                                const ironBarY = toY(d.iron)
                                                const baseline = toY(0)

                                                return (
                                                    <g key={d.year}>
                                                        {/* ── Coal bar (light yellow) ── */}
                                                        <motion.rect
                                                            x={coalX}
                                                            y={coalBarY}
                                                            width={barW}
                                                            height={coalBarH}
                                                            fill='#F3D054'
                                                            style={{ transformOrigin: '50% 100%' }}
                                                            initial={{ scaleY: 0 }}
                                                            whileInView={{ scaleY: 1 }}
                                                            viewport={{ once: true, margin: '-60px' }}
                                                            transition={{ duration: 0.85, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                                                        />
                                                        {/* Coal value label */}
                                                        <motion.text
                                                            x={coalX + barW / 2}
                                                            y={coalBarY - 5}
                                                            textAnchor='middle'
                                                            fontSize={10}
                                                            fontWeight='600'
                                                            fill='#374151'
                                                            initial={{ opacity: 0 }}
                                                            whileInView={{ opacity: 1 }}
                                                            viewport={{ once: true, margin: '-60px' }}
                                                            transition={{ duration: 0.35, delay: 0.85 + i * 0.09 }}
                                                        >{d.coal}</motion.text>

                                                        {/* ── Iron ore bar (dark gold) ── */}
                                                        <motion.rect
                                                            x={ironX}
                                                            y={ironBarY}
                                                            width={barW}
                                                            height={ironBarH}
                                                            fill='#CD9036'
                                                            style={{ transformOrigin: '50% 100%' }}
                                                            initial={{ scaleY: 0 }}
                                                            whileInView={{ scaleY: 1 }}
                                                            viewport={{ once: true, margin: '-60px' }}
                                                            transition={{ duration: 0.85, delay: 0.12 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                                                        />
                                                        {/* Iron value label */}
                                                        <motion.text
                                                            x={ironX + barW / 2}
                                                            y={ironBarY - 5}
                                                            textAnchor='middle'
                                                            fontSize={10}
                                                            fontWeight='600'
                                                            fill='#374151'
                                                            initial={{ opacity: 0 }}
                                                            whileInView={{ opacity: 1 }}
                                                            viewport={{ once: true, margin: '-60px' }}
                                                            transition={{ duration: 0.35, delay: 1.0 + i * 0.09 }}
                                                        >{d.iron}</motion.text>

                                                        {/* X-axis year label */}
                                                        <text
                                                            x={cx}
                                                            y={baseline + 18}
                                                            textAnchor='middle'
                                                            fontSize={10}
                                                            fill='#374151'
                                                        >{d.year}</text>
                                                    </g>
                                                )
                                            })}
                                        </svg>
                                    )
                                })()}

                                {/* Source */}
                                <p className='text-[10px] italic text-gray-500 leading-relaxed mt-1' style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    India's expanding steel sector projected to drive growth in metallurgical coal and iron ore imports.<br/>
                                    Source: Australian Government's June 2026 Resources and Energy Quarterly, via IEEFA.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id='4' className='w-full pt-24 pb-5'>
                        {/* Section Header */}
                        <div className='flex justify-end mb-6 relative h-14'>
                            <span className='relative z-10 text-black font-bold tracking-[0.15em] text-sm uppercase self-end pb-1' style={{ fontFamily: 'Poppins, sans-serif' }}>
                                COPPER - DEMAND
                            </span>
                            <span className='absolute right-0 top-0 text-[#B8902E] text-8xl font-bold select-none' style={{ fontFamily: 'PT Serif, serif', lineHeight: 1, opacity: 0.08 }}>
                                03
                            </span>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
                            {/* ── Left Column ── */}
                            <div className='space-y-5'>
                                <h2 className='text-2xl md:text-3xl font-bold text-black leading-snug pt-serif'>
                                    Copper: Electrification, Infrastructure and the AI Buildout
                                </h2>
                                <p className='text-black italic text-base poppins-sans'>
                                    The IEA now classifies copper as a strategic metal for data centres, alongside clean energy and transport.
                                </p>

                                <div className='space-y-4 text-sm text-black leading-relaxed poppins-sans'>
                                    <p>India's copper demand has accelerated to <strong>1.2–1.3x GDP growth</strong>, up from 0.6–0.8x before the infrastructure investment cycle.</p>
                                    <p>Copper demand is projected to grow 9–9.5% annually, reaching 3 million tonnes by 2030, driven by infrastructure, clean energy, EVs and cooling demand. "All sectors of the economy will require copper to varying degrees," per ICA India.</p>
                                    <p>India consumed <strong>1.9 MT of copper in FY25 (+9.3% YoY)</strong> and remains a net importer for the first time in 18 years after a major Tamil Nadu smelter shut in 2018; over 520,000 tonnes (&gt;$10 billion) of semis &amp; refined product are imported annually.</p>
                                    <p>The IEA describes copper as one of the world's most <strong>strategic metals</strong>, underpinning clean energy, transport, construction, data centres and defence being an explicit acknowledgment that copper demand is no longer just an energy-transition story.</p>
                                    <p>Capacity additions by Hindustan Copper, Birla Copper, Adani, JSW and Kiri Industries - 500,000-tonne smelter (2027) are underway, but India is expected to remain in a <strong>structural copper deficit</strong>.</p>
                                </div>

                                {/* 3 Stat Boxes */}
                                <div className='flex flex-col sm:flex-row gap-3 pt-4'>
                                    {[
                                        { val: '3 MT',      label: 'INDIA DEMAND TARGET, 2030' },
                                        { val: '9–9.5%',    label: 'ANNUAL DEMAND GROWTH' },
                                        { val: '1.9 MT',    label: 'FY25 CONSUMPTION, +9.3%\nYOY' },
                                    ].map(({ val, label }) => (
                                        <div key={val} className='flex-1 border border-[#B8902E] p-4 flex flex-col items-center text-center gap-2'>
                                            <div className='text-2xl md:text-3xl font-bold text-[#B8902E] pt-serif'>{val}</div>
                                            <div className='text-[9px] text-black font-semibold uppercase tracking-wider leading-snug whitespace-pre-line poppins-sans'>{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ── Right Column: Chart ── */}
                            <div className='flex flex-col gap-6'>
                                <h3 className='text-2xl font-bold text-black pt-serif'>Non-Ferrous Metal</h3>
                                
                                <p className='text-xs text-black leading-relaxed poppins-sans'>
                                    LME Copper Price Trend (USD/t): Prices increased by 3.6% MoM in Jul'26 to US$13,836/t, and LME copper prices rose to ~US$14,219/t on 05 Aug'26, approaching the January 2026 all-time high of $14,527.50/t..
                                </p>

                                <p className='text-lg font-semibold text-black text-center mt-4 pt-serif'>LME Copper Price Trend</p>

                                {/* SVG Line Chart */}
                                {(() => {
                                    const values = [
                                        8300, 8500, 8900, 9500, 10400, 9700, 9400, 8800, 8900, 9700, 9400, 8900,
                                        8700, 8900, 9500, 8900, 9300, 9600, 9800, 9900, 9600, 9700, 10000, 10800,
                                        10850, 12400, 13100, 12900, 12100, 13400, 13700, 13300, 14000
                                    ];
                                    const xLabels = [
                                        { label: 'Feb 2024', index: 0 },
                                        { label: 'Aug 2024', index: 6 },
                                        { label: 'Feb 2025', index: 12 },
                                        { label: 'Aug 2025', index: 18 },
                                        { label: 'Feb 2026', index: 24 },
                                        { label: 'Aug 2026', index: 32 }
                                    ];
                                    
                                    const W = 560, H = 340;
                                    const ml = 60, mr = 10, mt = 20, mb = 40;
                                    const chartW = W - ml - mr, chartH = H - mt - mb;
                                    const yMin = 8000, yMax = 14000;
                                    const yTicks = [8000, 10000, 12000, 14000];
                                    
                                    const toY = (v) => mt + chartH - ((v - yMin) / (yMax - yMin)) * chartH;
                                    const toX = (i) => ml + (i / (values.length - 1)) * chartW;
                                    
                                    // Smooth bezier curve logic
                                    const line = (pointA, pointB) => {
                                        const lengthX = pointB.x - pointA.x;
                                        const lengthY = pointB.y - pointA.y;
                                        return { length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)), angle: Math.atan2(lengthY, lengthX) };
                                    }
                                    const controlPoint = (current, previous, next, reverse) => {
                                        const p = previous || current;
                                        const n = next || current;
                                        const smoothing = 0.2;
                                        const o = line(p, n);
                                        const angle = o.angle + (reverse ? Math.PI : 0);
                                        const length = o.length * smoothing;
                                        const x = current.x + Math.cos(angle) * length;
                                        const y = current.y + Math.sin(angle) * length;
                                        return { x, y };
                                    }
                                    const points = values.map((v, i) => ({ x: toX(i), y: toY(v) }));
                                    const pathD = points.reduce((acc, point, i, a) => {
                                        if (i === 0) return `M ${point.x},${point.y}`;
                                        const cps = controlPoint(a[i - 1], a[i - 2], point);
                                        const cpe = controlPoint(point, a[i - 1], a[i + 1], true);
                                        return `${acc} C ${cps.x},${cps.y} ${cpe.x},${cpe.y} ${point.x},${point.y}`;
                                    }, '');

                                    return (
                                        <svg viewBox={`0 0 ${W} ${H}`} className='w-full' style={{ fontFamily: 'PT Serif, serif', overflow: 'visible' }}>
                                            {/* Y-axis label */}
                                            <text x={16} y={mt + chartH / 2} textAnchor='middle' fontSize={11} fill='#000' transform={`rotate(-90, 16, ${mt + chartH / 2})`}>Price (USD/t)</text>
                                            
                                            {/* Grid + Y ticks */}
                                            {yTicks.map(v => {
                                                const yy = toY(v);
                                                return (
                                                    <g key={v}>
                                                        <line x1={ml} x2={W - mr} y1={yy} y2={yy} stroke='#E5E7EB' strokeWidth={1} />
                                                        <text x={ml - 10} y={yy + 4} textAnchor='end' fontSize={11} fill='#000'>
                                                            {v.toLocaleString()}
                                                        </text>
                                                    </g>
                                                )
                                            })}
                                            
                                            {/* X-axis labels */}
                                            {xLabels.map(tick => {
                                                const xx = toX(tick.index);
                                                return (
                                                    <text key={tick.label} x={xx} y={mt + chartH + 24} textAnchor='middle' fontSize={11} fill='#000'>
                                                        {tick.label}
                                                    </text>
                                                )
                                            })}
                                            
                                            {/* Smooth Line Path */}
                                            <motion.path
                                                d={pathD}
                                                fill='none'
                                                stroke='#F3D054'
                                                strokeWidth={3}
                                                strokeLinecap='round'
                                                strokeDasharray={2000}
                                                initial={{ strokeDashoffset: 2000 }}
                                                whileInView={{ strokeDashoffset: 0 }}
                                                viewport={{ once: true, margin: '-60px' }}
                                                transition={{ duration: 1.5, ease: 'easeInOut' }}
                                            />
                                        </svg>
                                    )
                                })()}
                                
                                {/* Source */}
                                <p className='text-[10px] italic text-black leading-relaxed mt-1' style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Source: Bloomberg, SBICAP Securities Research.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id='5' className='w-full pt-24 pb-5'>
                        {/* Section Header */}
                        <div className='flex justify-end mb-6 relative h-14'>
                            <span className='relative z-10 text-black font-bold tracking-[0.15em] text-sm uppercase self-end pb-1 poppins-sans'>
                                COPPER - SUPPLY
                            </span>
                            <span className='absolute right-0 top-0 text-[#B8902E] text-8xl font-bold select-none pt-serif' style={{ lineHeight: 1, opacity: 0.08 }}>
                                03
                            </span>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
                            {/* ── Left Column ── */}
                            <div className='space-y-5'>
                                <h2 className='text-2xl md:text-3xl font-bold text-black leading-snug pt-serif'>
                                    Copper: A Widening Supply Gap
                                </h2>
                                <p className='text-black italic text-base poppins-sans'>
                                    Every layer of the supply chain - grade, capex, discovery is tightening at once
                                </p>

                                <div className='space-y-4 text-sm text-black leading-relaxed poppins-sans'>
                                    <p>The IEA estimates global primary copper supply could face <strong>a 25% deficit by 2035</strong> under current policy settings as new mine development becomes more difficult and expensive.</p>
                                    <p>Average copper ore grades have declined 40% since 1991, increasing the complexity and cost of extraction.</p>
                                    <p>Capital intensity for brownfield mine expansions has <strong>risen 65%</strong> since 2020, approaching greenfield project investment levels.</p>
                                    <p>Only 5% of copper deposits discovered over the past 35 years were found in the last decade, keeping the long-term supply pipeline constrained.</p>
                                    <p>LME copper inventories fell 24.1% MoM in Jul'26, highlighting tightening physical supply. A dynamic that could intensify <strong>if the US imposes import tariffs</strong> and buyers accelerate stockpiling. India alone needs ~500,000 tonnes of additional refined capacity every five years just to keep pace; new smelters <strong>add only ~100,000 tonnes against ~1.8 MT of demand (ICA India)</strong>.</p>
                                </div>

                                {/* 3 Stat Boxes */}
                                <div className='flex flex-col sm:flex-row gap-3 pt-4'>
                                    {[
                                        { val: '25%',       label: 'POTENTIAL GLOBAL DEFICIT\nBY 2035 (IEA)' },
                                        { val: '-40%',      label: 'ORE GRADE DECLINE SINCE\n1991' },
                                        { val: '-24.1%',    label: 'LME INVENTORY DROP, MOM\nJUL\'26' },
                                    ].map(({ val, label }) => (
                                        <div key={val} className='flex-1 border border-[#B8902E] p-4 flex flex-col items-center justify-center text-center gap-2'>
                                            <div className='text-2xl md:text-3xl font-bold text-[#B8902E] pt-serif'>{val}</div>
                                            <div className='text-[9px] text-black font-semibold uppercase tracking-wider leading-snug whitespace-pre-line poppins-sans'>{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ── Right Column: Chart ── */}
                            <div className='flex flex-col gap-6'>
                                <h3 className='text-2xl font-bold text-black pt-serif'>Non-Ferrous Metal</h3>
                                
                                {/* SVG Bar Chart */}
                                {(() => {
                                    const months = ['Feb 2024','Mar 2024','Apr 2024','May 2024','Jun 2024','Jul 2024','Aug 2024','Sep 2024','Oct 2024','Nov 2024','Dec 2024','Jan 2025','Feb 2025','Mar 2025','Apr 2025','May 2025','Jun 2025','Jul 2025','Aug 2025','Sep 2025','Oct 2025','Nov 2025','Dec 2025','Jan 2026','Feb 2026','Mar 2026','Apr 2026','May 2026','Jun 2026','Jul 2026']
                                    const values = [0.12, 0.11, 0.12, 0.12, 0.18, 0.24, 0.32, 0.3, 0.27, 0.27, 0.27, 0.26, 0.26, 0.21, 0.2, 0.15, 0.14, 0.09, 0.16, 0.14, 0.13, 0.16, 0.15, 0.17, 0.25, 0.36, 0.4, 0.39, 0.33, 0.25]
                                    const W = 560, H = 400
                                    const ml = 40, mr = 8, mt = 20, mb = 70
                                    const chartW = W - ml - mr, chartH = H - mt - mb
                                    const yMax = 0.4, yTicks = [0.0, 0.1, 0.2, 0.3, 0.4]
                                    const slotW = chartW / values.length
                                    const barW = slotW * 0.78
                                    const toY = (v) => mt + chartH - (v / yMax) * chartH
                                    const toH = (v) => (v / yMax) * chartH
                                    const baseline = toY(0)
                                    return (
                                        <div>
                                            <p className='text-xs text-black mb-6 poppins-sans leading-relaxed'>LME Copper Inventory (mnt): LME inventories <strong>dropped 24.1% MoM during Jul'26</strong>, highlighting tightening physical supply. In case the US government decides to impose import tariffs on refined copper, inventories may see further decline.</p>
                                            <p className='text-lg font-semibold text-black mb-8 text-center pt-serif'>LME Copper Inventory</p>
                                            <svg viewBox={`0 0 ${W} ${H}`} className='w-full poppins-sans' style={{ overflow: 'visible' }}>
                                                {/* Y-axis label */}
                                                <text x={12} y={mt + chartH / 2} textAnchor='middle' fontSize={11} fill='#000' transform={`rotate(-90, 12, ${mt + chartH / 2})`}>Million Tonnes</text>
                                                {/* Grid + Y ticks */}
                                                {yTicks.map(v => {
                                                    const yy = toY(v);
                                                    return (
                                                        <g key={v}>
                                                            <line x1={ml} x2={W - mr} y1={yy} y2={yy} stroke={v === 0 ? '#9CA3AF' : '#E5E7EB'} strokeWidth={v === 0 ? 1 : 0.5} />
                                                            <text x={ml - 6} y={yy + 3.5} textAnchor='end' fontSize={10} fill='#000'>{v.toFixed(1)}</text>
                                                        </g>
                                                    )
                                                })}
                                                {/* Bars + all labels + rotated month labels */}
                                                {values.map((v, i) => {
                                                    const x = ml + i * slotW + (slotW - barW) / 2
                                                    const bH = toH(v), bY = toY(v)
                                                    const cx = x + barW / 2
                                                    return (
                                                        <g key={i}>
                                                            <motion.rect
                                                                x={x}
                                                                y={bY}
                                                                width={barW}
                                                                height={bH}
                                                                fill='#F3D054'
                                                                style={{ transformOrigin: '50% 100%' }}
                                                                initial={{ scaleY: 0 }}
                                                                whileInView={{ scaleY: 1 }}
                                                                viewport={{ once: true, margin: '-40px' }}
                                                                transition={{ duration: 0.65, delay: i * 0.022, ease: [0.22, 1, 0.36, 1] }}
                                                            />
                                                            {/* Value label above every bar */}
                                                            <motion.text
                                                                x={cx}
                                                                y={bY - 4}
                                                                textAnchor='middle'
                                                                fontSize={8}
                                                                fill='#000'
                                                                initial={{ opacity: 0 }}
                                                                whileInView={{ opacity: 1 }}
                                                                viewport={{ once: true, margin: '-40px' }}
                                                                transition={{ duration: 0.28, delay: 0.65 + i * 0.022 }}
                                                            >{v}</motion.text>
                                                            {/* Rotated month label */}
                                                            <text
                                                                x={cx+3}
                                                                y={baseline + 10}
                                                                textAnchor='end'
                                                                fontSize={9}
                                                                fill='#000'
                                                                transform={`rotate(-45,${cx+3},${baseline + 10})`}
                                                            >{months[i]}</text>
                                                        </g>
                                                    )
                                                })}
                                            </svg>
                                        </div>
                                    )
                                })()}
                                
                                {/* Source */}
                                <p className='text-[10px] italic text-black leading-relaxed mt-4 poppins-sans'>
                                    Source: Bloomberg, SBICAP Securities Research.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id='6' className='w-full pt-24 pb-5'>
                        {/* Section Header */}
                        <div className='flex justify-end mb-6 relative h-14'>
                            <span className='relative z-10 text-black font-bold tracking-[0.15em] text-sm uppercase self-end pb-1 poppins-sans'>
                                ALUMINIUM · CHINA
                            </span>
                            <span className='absolute right-0 top-0 text-[#B8902E] text-8xl font-bold select-none pt-serif' style={{ lineHeight: 1, opacity: 0.08 }}>
                                04
                            </span>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16'>
                            {/* ── Left Column ── */}
                            <div className='lg:col-span-5 space-y-5'>
                                <h2 className='text-2xl md:text-3xl font-bold text-black leading-snug pt-serif'>
                                    Aluminium: China's Consumption Mix Is Moving From Windows to Watts
                                </h2>
                                <p className='text-black italic text-base poppins-sans'>
                                    The world's largest extruder is pivoting from construction toward electrification
                                </p>

                                <div className='space-y-4 text-sm text-black leading-relaxed poppins-sans'>
                                    <p>China holds ~64% of global extrusion capacity (31.07 of ~49 Mt) and ~66% of global consumption (20.94 of 31.5 Mt) as of 2023 (AL Circle) but the underlying mix is changing.</p>
                                    <p>Construction is fading as building &amp; construction has historically absorbed 57–60% of Chinese extrusion demand, but China's prolonged property correction has weakened this outlet.</p>
                                    <p>Industrial demand is filling the gap as <strong>EV lightweighting, solar PV frames, energy storage, power/electrical infrastructure, rail transit and industrial heat dissipation (cooling for electronics)</strong> are the new growth engines; SMM's H1 2026 review put the extrusion operating rate at 57.6%.</p>
                                    <p>China also holds ~71% of global solar PV manufacturing capacity and ~56% of global transportation-related extrusion demand, supported by its large EV industry.</p>
                                    <p>Aluminium extrusion consumption is projected to increase from 20.94 Mt in 2023 to ~27.52 Mt by 2030 (~3.98% CAGR), with exports increasingly shifting toward Southeast Asia, Australia, South America and Central Asia.</p>
                                </div>

                                {/* 3 Stat Boxes */}
                                <div className='flex flex-col sm:flex-row gap-3 pt-4'>
                                    {[
                                        { val: '71%',       label: 'SHARE OF GLOBAL SOLAR PV\nMFG CAPACITY' },
                                        { val: '27.52 Mt',  label: 'PROJECTED 2030 CHINA\nEXTRUSION DEMAND' },
                                        { val: '57.6%',     label: 'H1 2026 EXTRUSION\nOPERATING RATE' },
                                    ].map(({ val, label }) => (
                                        <div key={val} className='flex-1 border border-[#B8902E] p-4 flex flex-col items-center justify-center text-center gap-2'>
                                            <div className='text-2xl md:text-3xl font-bold text-[#B8902E] pt-serif'>{val}</div>
                                            <div className='text-[9px] text-black font-semibold uppercase tracking-wider leading-snug whitespace-pre-line poppins-sans'>{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ── Right Column: Charts ── */}
                            <div className='lg:col-span-7 flex flex-col gap-6'>
                                <h3 className='text-2xl font-bold text-black pt-serif'>Non-Ferrous Metal</h3>
                                
                                <p className='text-xs text-black leading-relaxed poppins-sans'>
                                    China dominates the global aluminium extrusion industry, accounting for around 64% of installed capacity and 66% of global demand. While construction demand is slowing, growth is increasingly being driven by EVs, solar PV, power infrastructure and industrial applications.
                                </p>

                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4'>
                                    {/* Left: Bar Chart */}
                                    <div className='flex flex-col'>
                                        <p className='text-sm font-semibold text-black mb-6 text-center pt-serif'>China Extrusion Demand</p>
                                        {(() => {
                                            const labels = ['2023', '2024E', '2025E', '2030F'];
                                            const values = [20.94, 21.47, 22.24, 27.52];
                                            const W = 280, H = 340;
                                            const ml = 30, mr = 10, mt = 20, mb = 30;
                                            const chartW = W - ml - mr, chartH = H - mt - mb;
                                            const yMax = 30, yTicks = [0, 5, 10, 15, 20, 25, 30];
                                            const slotW = chartW / values.length;
                                            const barW = slotW * 0.7;
                                            const toY = (v) => mt + chartH - (v / yMax) * chartH;
                                            const toH = (v) => (v / yMax) * chartH;
                                            const baseline = toY(0);

                                            return (
                                                <svg viewBox={`0 0 ${W} ${H}`} className='w-full poppins-sans' style={{ overflow: 'visible' }}>
                                                    <text x={9} y={mt + chartH / 2} textAnchor='middle' fontSize={11} fill='#000' transform={`rotate(-90, 9, ${mt + chartH / 2})`}>Demand (Mt)</text>
                                                    {yTicks.map(v => {
                                                        const yy = toY(v);
                                                        return (
                                                            <g key={v}>
                                                                <line x1={ml} x2={W - mr} y1={yy} y2={yy} stroke={v === 0 ? '#9CA3AF' : '#E5E7EB'} strokeWidth={v === 0 ? 1 : 0.5} />
                                                                <text x={ml - 6} y={yy + 3.5} textAnchor='end' fontSize={10} fill='#000'>{v}</text>
                                                            </g>
                                                        )
                                                    })}
                                                    {values.map((v, i) => {
                                                        const x = ml + i * slotW + (slotW - barW) / 2;
                                                        const bH = toH(v), bY = toY(v);
                                                        const cx = x + barW / 2;
                                                        return (
                                                            <g key={i}>
                                                                <motion.rect
                                                                    x={x}
                                                                    y={bY}
                                                                    width={barW}
                                                                    height={bH}
                                                                    fill='#F3D054'
                                                                    rx={4}
                                                                    style={{ transformOrigin: '50% 100%' }}
                                                                    initial={{ scaleY: 0 }}
                                                                    whileInView={{ scaleY: 1 }}
                                                                    viewport={{ once: true, margin: '-40px' }}
                                                                    transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                                                />
                                                                <motion.text
                                                                    x={cx}
                                                                    y={bY - 4}
                                                                    textAnchor='middle'
                                                                    fontSize={10}
                                                                    fill='#000'
                                                                    initial={{ opacity: 0 }}
                                                                    whileInView={{ opacity: 1 }}
                                                                    viewport={{ once: true, margin: '-40px' }}
                                                                    transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                                                                >{v}</motion.text>
                                                                <text x={cx} y={baseline + 16} textAnchor='middle' fontSize={10} fill='#000'>{labels[i]}</text>
                                                            </g>
                                                        )
                                                    })}
                                                </svg>
                                            )
                                        })()}
                                    </div>

                                    {/* Right: Donut Charts */}
                                    <div className='flex flex-col gap-10'>
                                        {/* Donut 1 */}
                                        {(() => {
                                            const data = [
                                                { label: 'Building & Construction', pct: 58, color: '#F3D054' },
                                                { label: 'Transportation', pct: 16, color: '#D4AC0D' },
                                                { label: 'Industrial', pct: 8, color: '#000000' },
                                                { label: 'Electrical &\nElectronics', pct: 7, color: '#808B96' },
                                                { label: 'Others', pct: 5, color: '#D5D8DC' },
                                                { label: '', pct: 6, color: '#F9E79F' } // fill missing 6% lightly
                                            ];
                                            const size = 180, cx = 90, cy = 90, r = 45, strokeWidth = 26;
                                            const C = 2 * Math.PI * r;
                                            let currentPct = 0;
                                            return (
                                                <div className="flex flex-col items-center">
                                                    <p className="text-sm font-semibold text-black mb-6 text-center pt-serif">China End-Use Mix (2023)</p>
                                                    <svg viewBox={`0 0 ${size} ${size}`} className="overflow-visible w-full max-w-[200px] mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                        <g transform={`rotate(-90 ${cx} ${cy})`}>
                                                            {data.map((d, i) => {
                                                                const len = (d.pct / 100) * C;
                                                                const offset = (currentPct / 100) * C;
                                                                currentPct += d.pct;
                                                                return (
                                                                    <motion.circle
                                                                        key={i}
                                                                        cx={cx}
                                                                        cy={cy}
                                                                        r={r}
                                                                        fill="none"
                                                                        stroke={d.color}
                                                                        strokeWidth={strokeWidth}
                                                                        strokeDasharray={`${len} ${C}`}
                                                                        strokeDashoffset={-offset}
                                                                        initial={{ opacity: 0 }}
                                                                        whileInView={{ opacity: 1 }}
                                                                        viewport={{ once: true, margin: '-40px' }}
                                                                        transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                                                                    />
                                                                )
                                                            })}
                                                        </g>
                                                        {(() => {
                                                            let accPct = 0;
                                                            return data.map((d, i) => {
                                                                const midPct = accPct + d.pct / 2;
                                                                accPct += d.pct;
                                                                if (!d.label) return null;
                                                                const angle = (midPct / 100) * 2 * Math.PI - Math.PI / 2;
                                                                const textR = r + strokeWidth / 2 + 8;
                                                                const tX = cx + textR * Math.cos(angle);
                                                                const tY = cy + textR * Math.sin(angle);
                                                                const isRight = Math.cos(angle) >= 0;
                                                                return (
                                                                    <text key={`l-${i}`} x={tX} y={tY} textAnchor={isRight ? 'start' : 'end'} fontSize={6.5} fill="#000" alignmentBaseline="middle">
                                                                        {d.label.split('\n').map((line, li) => (
                                                                            <tspan key={li} x={tX} dy={li === 0 ? '-0.5em' : '1.2em'}>{line}</tspan>
                                                                        ))}
                                                                        <tspan x={tX} dy="1.2em">{d.pct}%</tspan>
                                                                    </text>
                                                                );
                                                            });
                                                        })()}
                                                    </svg>
                                                </div>
                                            )
                                        })()}

                                        {/* Donut 2 */}
                                        {(() => {
                                            const data = [
                                                { label: 'China', pct: 66, color: '#F3D054' },
                                                { label: 'Europe', pct: 10, color: '#D4AC0D' },
                                                { label: 'Rest of Asia Pacific', pct: 9, color: '#000000' },
                                                { label: 'North America', pct: 8, color: '#808B96' },
                                                { label: '', pct: 7, color: '#F9E79F' } // fill missing 7% lightly
                                            ];
                                            const size = 180, cx = 90, cy = 90, r = 45, strokeWidth = 26;
                                            const C = 2 * Math.PI * r;
                                            let currentPct = 0;
                                            return (
                                                <div className="flex flex-col items-center">
                                                    <p className="text-sm font-semibold text-black mb-6 text-center pt-serif">Global Extrusion Demand (2023)</p>
                                                    <svg viewBox={`0 0 ${size} ${size}`} className="overflow-visible w-full max-w-[200px] mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                        <g transform={`rotate(-90 ${cx} ${cy})`}>
                                                            {data.map((d, i) => {
                                                                const len = (d.pct / 100) * C;
                                                                const offset = (currentPct / 100) * C;
                                                                currentPct += d.pct;
                                                                return (
                                                                    <motion.circle
                                                                        key={i}
                                                                        cx={cx}
                                                                        cy={cy}
                                                                        r={r}
                                                                        fill="none"
                                                                        stroke={d.color}
                                                                        strokeWidth={strokeWidth}
                                                                        strokeDasharray={`${len} ${C}`}
                                                                        strokeDashoffset={-offset}
                                                                        initial={{ opacity: 0 }}
                                                                        whileInView={{ opacity: 1 }}
                                                                        viewport={{ once: true, margin: '-40px' }}
                                                                        transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                                                                    />
                                                                )
                                                            })}
                                                        </g>
                                                        {(() => {
                                                            let accPct = 0;
                                                            return data.map((d, i) => {
                                                                const midPct = accPct + d.pct / 2;
                                                                accPct += d.pct;
                                                                if (!d.label) return null;
                                                                const angle = (midPct / 100) * 2 * Math.PI - Math.PI / 2;
                                                                const textR = r + strokeWidth / 2 + 8;
                                                                const tX = cx + textR * Math.cos(angle);
                                                                const tY = cy + textR * Math.sin(angle);
                                                                const isRight = Math.cos(angle) >= 0;
                                                                return (
                                                                    <text key={`l-${i}`} x={tX} y={tY} textAnchor={isRight ? 'start' : 'end'} fontSize={6.5} fill="#000" alignmentBaseline="middle">
                                                                        {d.label.split('\n').map((line, li) => (
                                                                            <tspan key={li} x={tX} dy={li === 0 ? '-0.5em' : '1.2em'}>{line}</tspan>
                                                                        ))}
                                                                        <tspan x={tX} dy="1.2em">{d.pct}%</tspan>
                                                                    </text>
                                                                );
                                                            });
                                                        })()}
                                                    </svg>
                                                </div>
                                            )
                                        })()}
                                    </div>
                                </div>
                                
                                {/* Source */}
                                <p className='text-[10px] italic text-black leading-relaxed mt-4 poppins-sans'>
                                    Source: AL Circle; Shanghai Metals Market (SMM); Industry Forecasts.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id='7' className='w-full pt-24 pb-5'>
                        {/* Section Header */}
                        <div className='flex justify-end mb-6 relative h-14'>
                            <span className='relative z-10 text-black font-bold tracking-[0.15em] text-sm uppercase self-end pb-1 poppins-sans'>
                                ALUMINIUM · INDIA
                            </span>
                            <span className='absolute right-0 top-0 text-[#B8902E] text-8xl font-bold select-none pt-serif' style={{ lineHeight: 1, opacity: 0.08 }}>
                                04
                            </span>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16'>
                            {/* ── Left Column ── */}
                            <div className='lg:col-span-5 space-y-5'>
                                <h2 className='text-2xl md:text-3xl font-bold text-black leading-snug pt-serif'>
                                    Aluminium: India's Demand Is Outrunning Its Usable Capacity
                                </h2>
                                <p className='text-black italic text-base poppins-sans'>
                                    Installed presses, low utilisation, and a scrap-and-energy security problem
                                </p>

                                <div className='space-y-4 text-sm text-black leading-relaxed poppins-sans'>
                                    <p>India's aluminium extrusion demand is projected to increase from 795,000 tonnes in 2025 to 858,000 tonnes in 2026 <strong>(~7.9% growth)</strong>, led by building &amp; construction (42%), transportation (18%) and solar &amp; renewable energy (16%), electrical &amp; electronics (12%) and industrial &amp; engineering (8%).</p>
                                    <p>Despite having ~3 Mt of installed extrusion capacity, India produces only ~1.2–1.3 Mt, implying a <strong>40–43% capacity utilisation rate</strong>, while importing ~1.5 Mt of downstream aluminium products annually.</p>
                                    <p>Nearly half of India's 4.2 Mt aluminium output comes from the secondary (recycled) route, with around 30% of scrap imports sourced from the Middle East.</p>
                                    <p>The 2026 West Asia conflict disrupted raw material supplies, shutting at least 25 extrusion units and reducing output from <strong>~70,000 to ~45,000 tonnes per month.</strong></p>
                                    <p>The supply disruption led to a 20–40% decline in secondary aluminium output, a <strong>~30% rise in scrap prices</strong>, with the auto sector accounting for ~60% of domestic secondary aluminium demand.</p>
                                </div>

                                {/* 3 Stat Boxes */}
                                <div className='flex flex-col sm:flex-row gap-3 pt-4'>
                                    {[
                                        { val: '40–43%',    label: 'CAPACITY UTILISATION VS 3\nMT INSTALLED' },
                                        { val: '858k t',    label: '2026 DEMAND, +7.9% YOY' },
                                        { val: '~30%',      label: 'SCRAP IMPORTS SOURCED\nFROM MIDDLE EAST' },
                                    ].map(({ val, label }) => (
                                        <div key={val} className='flex-1 border border-[#B8902E] p-4 flex flex-col items-center justify-center text-center gap-2'>
                                            <div className='text-2xl md:text-3xl font-bold text-[#B8902E] pt-serif'>{val}</div>
                                            <div className='text-[9px] text-black font-semibold uppercase tracking-wider leading-snug whitespace-pre-line poppins-sans'>{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ── Right Column: Charts ── */}
                            <div className='lg:col-span-7 flex flex-col gap-6'>
                                <h3 className='text-2xl font-bold text-black pt-serif'>Non-Ferrous Metal</h3>
                                
                                <p className='text-xs text-black leading-relaxed poppins-sans'>
                                    India's aluminium extrusion demand is expected to rise 7.9% YoY in 2026, led by construction, transportation and renewable energy. Despite ~3 Mt of installed capacity, utilisation remains low at 40–43%, highlighting significant untapped capacity.
                                </p>

                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4'>
                                    {/* Left: Bar Chart 1 */}
                                    <div className='flex flex-col'>
                                        <p className='text-sm font-semibold text-black mb-6 text-center pt-serif'>Aluminium Extrusion Demand in India</p>
                                        {(() => {
                                            const labels = ['2025', '2026'];
                                            const values = [795000, 858000];
                                            const displayValues = ['795,000', '858,000'];
                                            const W = 280, H = 340;
                                            const ml = 50, mr = 10, mt = 20, mb = 30;
                                            const chartW = W - ml - mr, chartH = H - mt - mb;
                                            const yMax = 1000000, yTicks = [0, 200000, 400000, 600000, 800000, 1000000];
                                            const slotW = chartW / values.length;
                                            const barW = slotW * 0.7;
                                            const toY = (v) => mt + chartH - (v / yMax) * chartH;
                                            const toH = (v) => (v / yMax) * chartH;
                                            const baseline = toY(0);

                                            return (
                                                <svg viewBox={`0 0 ${W} ${H}`} className='w-full poppins-sans' style={{ overflow: 'visible' }}>
                                                    <text x={10} y={mt + chartH / 2} textAnchor='middle' fontSize={11} fill='#000' transform={`rotate(-90, 10, ${mt + chartH / 2})`}>Tonnes</text>
                                                    {yTicks.map(v => {
                                                        const yy = toY(v);
                                                        const label = v === 0 ? '0' : v.toLocaleString();
                                                        return (
                                                            <g key={v}>
                                                                <line x1={ml} x2={W - mr} y1={yy} y2={yy} stroke={v === 0 ? '#9CA3AF' : '#E5E7EB'} strokeWidth={v === 0 ? 1 : 0.5} />
                                                                <text x={ml - 6} y={yy + 3.5} textAnchor='end' fontSize={10} fill='#000'>{label}</text>
                                                            </g>
                                                        )
                                                    })}
                                                    {values.map((v, i) => {
                                                        const x = ml + i * slotW + (slotW - barW) / 2;
                                                        const bH = toH(v), bY = toY(v);
                                                        const cx = x + barW / 2;
                                                        return (
                                                            <g key={i}>
                                                                <motion.rect
                                                                    x={x}
                                                                    y={bY}
                                                                    width={barW}
                                                                    height={bH}
                                                                    fill='#F3D054'
                                                                    rx={4}
                                                                    style={{ transformOrigin: '50% 100%' }}
                                                                    initial={{ scaleY: 0 }}
                                                                    whileInView={{ scaleY: 1 }}
                                                                    viewport={{ once: true, margin: '-40px' }}
                                                                    transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                                                />
                                                                <motion.text
                                                                    x={cx}
                                                                    y={bY - 4}
                                                                    textAnchor='middle'
                                                                    fontSize={10}
                                                                    fill='#000'
                                                                    initial={{ opacity: 0 }}
                                                                    whileInView={{ opacity: 1 }}
                                                                    viewport={{ once: true, margin: '-40px' }}
                                                                    transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                                                                >{displayValues[i]}</motion.text>
                                                                <text x={cx} y={baseline + 16} textAnchor='middle' fontSize={10} fill='#000'>{labels[i]}</text>
                                                            </g>
                                                        )
                                                    })}
                                                </svg>
                                            )
                                        })()}
                                    </div>

                                    {/* Right: Donut & Bar Chart 2 */}
                                    <div className='flex flex-col justify-between h-full space-y-6 lg:space-y-0'>
                                        {/* Top: Donut */}
                                        {(() => {
                                            const data = [
                                                { label: 'Building & Construction', pct: 42, color: '#F3D054' },
                                                { label: 'Transportation', pct: 18, color: '#D4AC0D' },
                                                { label: 'Solar &\nRenewable\nEnergy', pct: 16, color: '#000000' },
                                                { label: 'Electrical &\nElectronics', pct: 12, color: '#B2BABB' },
                                                { label: 'Industrial & Engineering', pct: 8, color: '#707B7C' },
                                                { label: '', pct: 4, color: '#F9E79F' } // fill missing 4% lightly
                                            ];
                                            const size = 180, cx = 90, cy = 90, r = 40, strokeWidth = 24;
                                            const C = 2 * Math.PI * r;
                                            let currentPct = 0;
                                            return (
                                                <div className="flex flex-col items-center">
                                                    <p className="text-sm font-semibold text-black mb-4 text-center pt-serif">India End-Use Mix (2026)</p>
                                                    <svg viewBox={`0 0 ${size} ${size}`} className="overflow-visible w-full max-w-[200px] mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                        <g transform={`rotate(-90 ${cx} ${cy})`}>
                                                            {data.map((d, i) => {
                                                                const len = (d.pct / 100) * C;
                                                                const offset = (currentPct / 100) * C;
                                                                currentPct += d.pct;
                                                                return (
                                                                    <motion.circle
                                                                        key={i}
                                                                        cx={cx}
                                                                        cy={cy}
                                                                        r={r}
                                                                        fill="none"
                                                                        stroke={d.color}
                                                                        strokeWidth={strokeWidth}
                                                                        strokeDasharray={`${len} ${C}`}
                                                                        strokeDashoffset={-offset}
                                                                        initial={{ opacity: 0 }}
                                                                        whileInView={{ opacity: 1 }}
                                                                        viewport={{ once: true, margin: '-40px' }}
                                                                        transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                                                                    />
                                                                )
                                                            })}
                                                        </g>
                                                        {(() => {
                                                            let accPct = 0;
                                                            return data.map((d, i) => {
                                                                const midPct = accPct + d.pct / 2;
                                                                accPct += d.pct;
                                                                if (!d.label) return null;
                                                                const angle = (midPct / 100) * 2 * Math.PI - Math.PI / 2;
                                                                const textR = r + strokeWidth / 2 + 10;
                                                                const tX = cx + textR * Math.cos(angle);
                                                                const tY = cy + textR * Math.sin(angle);
                                                                const isRight = Math.cos(angle) >= 0;
                                                                
                                                                const lines = d.label.split('\n');
                                                                const totalLines = lines.length + 1; // +1 for pct line
                                                                
                                                                return (
                                                                    <text key={`l-${i}`} x={tX} y={tY} textAnchor={isRight ? 'start' : 'end'} fontSize={6.5} fill="#000" alignmentBaseline="middle">
                                                                        {lines.map((line, li) => {
                                                                            const dy = li === 0 ? `${-(totalLines - 1) * 0.6}em` : '1.2em';
                                                                            return <tspan key={li} x={tX} dy={dy}>{line}</tspan>
                                                                        })}
                                                                        <tspan x={tX} dy="1.2em">{d.pct}%</tspan>
                                                                    </text>
                                                                );
                                                            });
                                                        })()}
                                                    </svg>
                                                </div>
                                            )
                                        })()}

                                        {/* Bottom: Bar Chart 2 */}
                                        <div className='flex flex-col pt-4'>
                                            <p className='text-sm font-semibold text-black text-center pt-serif'>Installed Capacity vs Current Output</p>
                                            <p className='text-[8px] italic text-black mb-4 text-center pt-serif'>Capacity Utilisation: 40–43%</p>
                                            {(() => {
                                                const labels = ['Installed Capacity', 'Current Output'];
                                                const values = [3, 1.25];
                                                const W = 280, H = 160;
                                                const ml = 25, mr = 5, mt = 15, mb = 20;
                                                const chartW = W - ml - mr, chartH = H - mt - mb;
                                                const yMax = 3, yTicks = [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0];
                                                const slotW = chartW / values.length;
                                                const barW = slotW * 0.75;
                                                const toY = (v) => mt + chartH - (v / yMax) * chartH;
                                                const toH = (v) => (v / yMax) * chartH;
                                                const baseline = toY(0);

                                                return (
                                                    <svg viewBox={`0 0 ${W} ${H}`} className='w-full poppins-sans' style={{ overflow: 'visible' }}>
                                                        <text x={8} y={mt + chartH / 2} textAnchor='middle' fontSize={5.5} fill='#000' transform={`rotate(-90, 8, ${mt + chartH / 2})`}>Million tonnes</text>
                                                        {yTicks.map(v => {
                                                            const yy = toY(v);
                                                            return (
                                                                <g key={v}>
                                                                    <line x1={ml} x2={W - mr} y1={yy} y2={yy} stroke={v === 0 ? '#9CA3AF' : '#E5E7EB'} strokeWidth={v === 0 ? 1 : 0.5} />
                                                                    <text x={ml - 4} y={yy + 2} textAnchor='end' fontSize={6} fill='#000'>{v.toFixed(1)}</text>
                                                                </g>
                                                            )
                                                        })}
                                                        {values.map((v, i) => {
                                                            const x = ml + i * slotW + (slotW - barW) / 2;
                                                            const bH = toH(v), bY = toY(v);
                                                            const cx = x + barW / 2;
                                                            return (
                                                                <g key={i}>
                                                                    <motion.rect
                                                                        x={x}
                                                                        y={bY}
                                                                        width={barW}
                                                                        height={bH}
                                                                        fill='#F3D054'
                                                                        rx={4}
                                                                        style={{ transformOrigin: '50% 100%' }}
                                                                        initial={{ scaleY: 0 }}
                                                                        whileInView={{ scaleY: 1 }}
                                                                        viewport={{ once: true, margin: '-40px' }}
                                                                        transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                                                    />
                                                                    <motion.text
                                                                        x={cx}
                                                                        y={bY - 3}
                                                                        textAnchor='middle'
                                                                        fontSize={7}
                                                                        fill='#000'
                                                                        initial={{ opacity: 0 }}
                                                                        whileInView={{ opacity: 1 }}
                                                                        viewport={{ once: true, margin: '-40px' }}
                                                                        transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                                                                    >{v}</motion.text>
                                                                    <text x={cx} y={baseline + 9} textAnchor='middle' fontSize={6} fill='#000'>{labels[i]}</text>
                                                                </g>
                                                            )
                                                        })}
                                                    </svg>
                                                )
                                            })()}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Source */}
                                <p className='text-[10px] italic text-black leading-relaxed mt-4 poppins-sans'>
                                    Source: AL Circle; Aluminium Extrusion Manufacturers Association of India (ALEMAI), SMM ; Reuters.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id='8' className='w-full pt-24 pb-20'>
                        {/* Section Header */}
                        <div className='flex justify-end mb-6 relative h-14'>
                            <span className='relative z-10 text-black font-bold tracking-[0.15em] text-sm uppercase self-end pb-1 poppins-sans'>
                                GOLD
                            </span>
                            <span className='absolute right-0 top-0 text-[#B8902E] text-8xl font-bold select-none pt-serif' style={{ lineHeight: 1, opacity: 0.08 }}>
                                05
                            </span>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16'>
                            {/* ── Left Column ── */}
                            <div className='lg:col-span-5 space-y-5'>
                                <h2 className='text-2xl md:text-3xl font-bold text-black leading-snug pt-serif'>
                                    Gold: Still a Monetary Metal First, But a New Thread Is Emerging
                                </h2>
                                <p className='text-black italic text-base poppins-sans'>
                                    Gold's 2026 story is driven by policy and investment, not industrial demand.
                                </p>

                                <div className='space-y-4 text-sm text-black leading-relaxed poppins-sans'>
                                    <p>Gold prices traded <strong>around US$4,370–4,430/oz in Aug'26</strong>, with the near-term outlook driven by US inflation, Federal Reserve policy and the US dollar.</p>
                                    <p>Central banks remained the largest buyers, purchasing a <strong>record 289 tonnes</strong> in Q2 2026, while China extended its gold buying streak to 21 consecutive months (reserves at 76.08 million oz as of end-July, PBoC) and South Korea buying gold for the first time in 13 years.</p>
                                    <p>Global gold ETFs recorded <strong>US$3 billion of inflows in Jul'26</strong>, reflecting renewed investor demand amid ongoing de-dollarisation trends.</p>
                                    <p>Technology demand rose modestly, with electronics <strong>gold demand increasing 4% YoY to 68 tonnes in Q2 2026</strong>, supported by AI infrastructure. Total technology demand reached 80 tonnes.</p>
                                    <p>Unlike copper or aluminium, gold's demand continues to be driven primarily by monetary policy and investment demand, with AI-related industrial usage remaining a relatively small contributor.</p>
                                </div>

                                {/* 3 Stat Boxes */}
                                <div className='flex flex-col sm:flex-row gap-3 pt-4'>
                                    {[
                                        { val: '289 t',         label: 'CENTRAL BANK NET\nPURCHASES, Q2 2026' },
                                        { val: '$4,500/oz',     label: 'LBMA AVG. YEAR-END 2026\nFORECAST' },
                                        { val: '68 t',          label: 'ELECTRONICS DEMAND,\nQ2\'26 (+4% YOY)' },
                                    ].map(({ val, label }) => (
                                        <div key={val} className='flex-1 border border-[#B8902E] p-4 flex flex-col items-center justify-center text-center gap-2'>
                                            <div className='text-2xl md:text-3xl font-bold text-[#B8902E] pt-serif'>{val}</div>
                                            <div className='text-[9px] text-black font-semibold uppercase tracking-wider leading-snug whitespace-pre-line poppins-sans'>{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ── Right Column: Chart ── */}
                            <div className='lg:col-span-7 flex flex-col gap-6'>
                                <h3 className='text-2xl font-bold text-black pt-serif'>Gold Purchase</h3>
                                
                                <p className='text-sm text-black leading-relaxed poppins-sans'>
                                    World central bank net purchases of gold, 2010–2026.
                                </p>

                                <div className='w-full border border-gray-300 p-2 sm:p-4 mt-2'>
                                    {(() => {
                                        const goldData = [
                                            { year: '2010', q1: 60, q2: -25, q3: 30, q4: 0 },
                                            { year: '2011', q1: 140, q2: 70, q3: 140, q4: 130 },
                                            { year: '2012', q1: 120, q2: 160, q3: 120, q4: 160 },
                                            { year: '2013', q1: 170, q2: 170, q3: 140, q4: 150 },
                                            { year: '2014', q1: 110, q2: 160, q3: 180, q4: 140 },
                                            { year: '2015', q1: 110, q2: 130, q3: 170, q4: 170 },
                                            { year: '2016', q1: 110, q2: 60, q3: 110, q4: 120 },
                                            { year: '2017', q1: 90, q2: 60, q3: 130, q4: 100 },
                                            { year: '2018', q1: 80, q2: 150, q3: 250, q4: 180 },
                                            { year: '2019', q1: 140, q2: 210, q3: 130, q4: 130 },
                                            { year: '2020', q1: 130, q2: 70, q3: 20, q4: 50 },
                                            { year: '2021', q1: 120, q2: 190, q3: 80, q4: 40 },
                                            { year: '2022', q1: 80, q2: 150, q3: 470, q4: 380 },
                                            { year: '2023', q1: 290, q2: 180, q3: 350, q4: 220 },
                                            { year: '2024', q1: 310, q2: 210, q3: 200, q4: 380 },
                                            { year: '2025', q1: 230, q2: 180, q3: 230, q4: 210 },
                                            { year: '2026', q1: 50, q2: 289, q3: 0, q4: 0 },
                                        ];
                                        const colors = { q1: '#000000', q2: '#FAD7A1', q3: '#99A3A4', q4: '#FFC300' };
                                        
                                        const W = 640;
                                        const H = 400;
                                        const mt = 40, mb = 50, ml = 40, mr = 20;
                                        const chartW = W - ml - mr;
                                        const chartH = H - mt - mb;
                                        
                                        const yMin = -200;
                                        const yMax = 1200;
                                        const yRange = yMax - yMin;
                                        const yTicks = [-200, 0, 200, 400, 600, 800, 1000, 1200];
                                        
                                        const slotW = chartW / goldData.length;
                                        const barW = slotW * 0.65;
                                        
                                        const toY = (v) => mt + chartH - ((v - yMin) / yRange) * chartH;
                                        const toH = (v) => (Math.abs(v) / yRange) * chartH;
                                        
                                        return (
                                            <svg viewBox={`0 0 ${W} ${H}`} className='w-full poppins-sans' style={{ overflow: 'visible' }}>
                                                {/* Chart Title */}
                                                <text x={W / 2} y={20} textAnchor='middle' fontSize={11} fill='#4B5563'>Annual World Central Bank Net Gold Purchases</text>
                                                
                                                {/* Grid Lines and Y-axis Labels */}
                                                {yTicks.map(v => {
                                                    const yy = toY(v);
                                                    return (
                                                        <g key={v}>
                                                            <line x1={ml} x2={W - mr} y1={yy} y2={yy} stroke={v === 0 ? '#9CA3AF' : '#E5E7EB'} strokeWidth={v === 0 ? 1 : 0.5} />
                                                            <text x={ml - 8} y={yy + 4} textAnchor='end' fontSize={10} fill='#4B5563'>{v}</text>
                                                        </g>
                                                    )
                                                })}
                                                
                                                {/* Stacked Bars */}
                                                {goldData.map((d, i) => {
                                                    const x = ml + i * slotW + (slotW - barW) / 2;
                                                    let posBaseline = 0;
                                                    let negBaseline = 0;
                                                    
                                                    return (
                                                        <g key={d.year}>
                                                            {['q1', 'q2', 'q3', 'q4'].map((q, j) => {
                                                                const val = d[q];
                                                                if (val === 0) return null;
                                                                let bY, bH = toH(val);
                                                                if (val > 0) {
                                                                    bY = toY(posBaseline + val);
                                                                    posBaseline += val;
                                                                } else {
                                                                    bY = toY(negBaseline);
                                                                    negBaseline += val; // val is negative, so it moves down
                                                                }
                                                                return (
                                                                    <motion.rect 
                                                                        key={q}
                                                                        x={x}
                                                                        y={bY}
                                                                        width={barW}
                                                                        height={bH}
                                                                        fill={colors[q]}
                                                                        style={{ transformOrigin: val > 0 ? '50% 100%' : '50% 0%' }}
                                                                        initial={{ scaleY: 0 }}
                                                                        whileInView={{ scaleY: 1 }}
                                                                        viewport={{ once: true, margin: '-40px' }}
                                                                        transition={{ duration: 0.6, delay: i * 0.05 + j * 0.1, ease: "easeOut" }}
                                                                    />
                                                                )
                                                            })}
                                                            <text x={x + barW / 2} y={toY(0) + 16} textAnchor='middle' fontSize={9} fill='#4B5563'>{d.year}</text>
                                                        </g>
                                                    )
                                                })}
                                                
                                                {/* Legend */}
                                                <g transform={`translate(${W / 2 - 90}, ${H - 10})`}>
                                                    <rect x={0} y={0} width={8} height={8} fill={colors.q1} />
                                                    <text x={12} y={8} fontSize={10} fill="#4B5563">1Q</text>
                                                    
                                                    <rect x={40} y={0} width={8} height={8} fill={colors.q2} />
                                                    <text x={52} y={8} fontSize={10} fill="#4B5563">2Q</text>
                                                
                                                    <rect x={80} y={0} width={8} height={8} fill={colors.q3} />
                                                    <text x={92} y={8} fontSize={10} fill="#4B5563">3Q</text>
                                                
                                                    <rect x={120} y={0} width={8} height={8} fill={colors.q4} />
                                                    <text x={132} y={8} fontSize={10} fill="#4B5563">4Q</text>
                                                </g>
                                            </svg>
                                        )
                                    })()}
                                </div>
                                
                                {/* Source */}
                                <p className='text-xs italic text-black leading-relaxed mt-2 poppins-sans'>
                                    Source: World Gold Council.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id='9' className='w-full pt-24 pb-20'>
                        {/* Section Header */}
                        <div className='flex justify-end mb-6 relative h-14'>
                            <span className='relative z-10 text-[#B8902E] font-bold tracking-[0.15em] text-sm uppercase self-end pb-1 poppins-sans'>
                                SILVER
                            </span>
                            <span className='absolute right-0 top-0 text-[#B8902E] text-8xl font-bold select-none pt-serif' style={{ lineHeight: 1, opacity: 0.08 }}>
                                06
                            </span>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16'>
                            {/* ── Left Column ── */}
                            <div className='lg:col-span-5 space-y-5'>
                                <h2 className='text-2xl md:text-3xl font-bold text-black leading-snug pt-serif'>
                                    Silver: The One Precious Metal With a Genuine Industrial Story
                                </h2>
                                <p className='text-black italic text-base poppins-sans'>
                                    Price moves like gold's; the demand base underneath it does not
                                </p>

                                <div className='space-y-4 text-sm text-black leading-relaxed poppins-sans'>
                                    <p>Silver outperformed gold, <strong>rising ~73.3% YoY</strong> and opening above US$65/oz in Aug'26, supported by a strengthening technical trend. Daily charts show a bottoming pattern near the 200-day EMA with RSI at 59 and ADX at 27, pointing to a strong near-term trend.</p>
                                    <p>Macro drivers mirror gold, including inflation expectations, Middle East tensions, lower real yields and unwinding of the Japanese yen carry trade.</p>
                                    <p>Industrial demand dominates, accounting for <strong>~55–60% of total silver demand</strong>, making silver more sensitive to economic and industrial trends than gold.</p>
                                    <p>Solar PV demand is weakening, with silver use in PV manufacturing forecast <strong>to fall ~19% to ~151 Moz in 2026</strong> as manufacturers reduce silver usage per cell.</p>
                                    <p>EVs, data centres, AI infrastructure and automotive electronics are offsetting some PV weakness, but the market is still expected to record a sixth consecutive annual supply deficit in 2026.</p>
                                </div>

                                {/* 3 Stat Boxes */}
                                <div className='flex flex-col sm:flex-row gap-3 pt-4'>
                                    {[
                                        { val: '~151 Moz',  label: 'SILVER IN SOLAR PV, 2026\n(-19% YOY)' },
                                        { val: '~650 Moz',  label: 'TOTAL INDUSTRIAL\nFABRICATION, 4-YR LOW' },
                                        { val: '6th',       label: 'CONSECUTIVE YEAR OF\nMARKET DEFICIT' },
                                    ].map(({ val, label }) => (
                                        <div key={val} className='flex-1 border border-[#B8902E] p-4 flex flex-col items-center justify-center text-center gap-2'>
                                            <div className='text-2xl md:text-3xl font-bold text-[#B8902E] pt-serif'>{val}</div>
                                            <div className='text-[9px] text-black font-semibold uppercase tracking-wider leading-snug whitespace-pre-line poppins-sans'>{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ── Right Column: Chart ── */}
                            <div className='lg:col-span-7 flex flex-col gap-6'>
                                <h3 className='text-2xl font-bold text-black pt-serif'>Silver Trend</h3>
                                
                                <p className='text-sm text-black leading-relaxed poppins-sans'>
                                    XAG/USD year-to-date price chart
                                </p>

                                <div className='w-full bg-[#0B132B] rounded-sm p-4 mt-2 overflow-hidden relative shadow-lg'>
                                    {(() => {
                                        const closePrices = [
                                            71.3, 72, 74, 82, 75, 78, 83, 90, 88, 92, 91, 95, 93, 102, 104, 106, 118, 121.57, // High
                                            110, 95, 90, 88, 85, 75, 68, 70, 75, 82, 88, 85, 78, 72, 80, 84, 85, 78,
                                            88, 92, 94, 88, 82, 85, 88, 86, 82, 80, 78, 79, 80, 78, 76, 68, 72, 70, 68,
                                            74, 75, 72, 70, 72, 75, 73, 76, 78, 80, 76, 79, 80, 78, 75, 74, 73, 75, 78,
                                            76, 74, 76, 75, 80, 82, 85, 87, 85, 78, 75, 78, 75, 78, 76, 75, 74, 78, 76,
                                            75, 76, 75, 73, 68, 65, 70, 68, 65, 62, 58, 60, 58, 59, 62, 64, 62, 60, 58,
                                            54.77, 56, 58, 59, 61, 58, 59, 62, 60, 64, 65.8111 // Close
                                        ];
                                        const getMA = (data, period) => {
                                            return data.map((val, i) => {
                                                const start = Math.max(0, i - period + 1);
                                                const slice = data.slice(start, i + 1);
                                                const sum = slice.reduce((a,b)=>a+b, 0);
                                                return sum / slice.length;
                                            });
                                        };
                                        const ma20 = getMA(closePrices, 12);
                                        const ma50 = getMA(closePrices, 25);
                                        
                                        const W = 700;
                                        const H = 450;
                                        const mt = 70, mb = 50, ml = 60, mr = 20;
                                        const chartW = W - ml - mr;
                                        const chartH = H - mt - mb;
                                        const yMin = 50, yMax = 120;
                                        const toY = (v) => mt + chartH - ((v - yMin) / (yMax - yMin)) * chartH;
                                        const toX = (i) => ml + (i / (closePrices.length - 1)) * chartW;
                                        
                                        const linePath = (data) => {
                                            return data.map((v, i) => `${i === 0 ? 'M' : 'L'} ${toX(i)} ${toY(v)}`).join(' ');
                                        }
                    
                                        return (
                                            <svg viewBox={`0 0 ${W} ${H}`} className='w-full' style={{ fontFamily: 'Arial, sans-serif' }}>
                                                {/* Grid */}
                                                {[50, 60, 70, 80, 90, 100, 110, 120].map(v => (
                                                    <g key={v}>
                                                        <line x1={ml} x2={W-mr} y1={toY(v)} y2={toY(v)} stroke="#1E293B" strokeWidth="1" />
                                                        <text x={ml - 8} y={toY(v) + 4} textAnchor="end" fill="#9CA3AF" fontSize="9">{v.toFixed(4)}</text>
                                                    </g>
                                                ))}
                                                
                                                {/* Current Price Dashed Line & Highlight Box */}
                                                <line x1={ml} x2={W-mr} y1={toY(65.8111)} y2={toY(65.8111)} stroke="#DC2626" strokeWidth="1" strokeDasharray="2 2" />
                                                <rect x={10} y={toY(65.8111) - 8} width={45} height={16} fill="#DC2626" rx={2} />
                                                <text x={32.5} y={toY(65.8111) + 3} textAnchor="middle" fill="#FFF" fontSize="9" fontWeight="bold">65.8111</text>
                                            
                                                {/* Title */}
                                                <text x={W/2} y={35} textAnchor="middle" fill="#FFF" fontSize="20" fontWeight="bold">XAG/USD YTD Price Chart</text>
                                                <text x={W/2} y={55} textAnchor="middle" fill="#D1D5DB" fontSize="10" fontWeight="bold">
                                                    Open: <tspan fill="#FFF">71.3052</tspan>  High: <tspan fill="#FFF">121.5777</tspan>  Low: <tspan fill="#FFF">54.7795</tspan>  Close: <tspan fill="#FFF">65.8111</tspan>  Change: <tspan fill="#DC2626">-7.71%</tspan>
                                                </text>
                                            
                                                {/* Watermark */}
                                                <text x={ml + 10} y={H - mb - 15} textAnchor="start" fill="#1E293B" fontSize="28" fontWeight="bold" opacity="0.6">ExchangeRates.org.uk</text>
                                            
                                                {/* X Axis Labels */}
                                                {(() => {
                                                    const xLabels = ['1 Jan', '24 Jan', '16 Feb', '11 Mar', '3 Apr', '26 Apr', '19 May', '11 Jun', '4 Jul', '27 Jul'];
                                                    return xLabels.map((l, i) => {
                                                        const x = ml + (i / (xLabels.length - 1)) * chartW;
                                                        return (
                                                            <text key={i} x={x} y={H - mb + 15} textAnchor="middle" fill="#9CA3AF" fontSize="9">{l}</text>
                                                        )
                                                    });
                                                })()}
                                            
                                                {/* Lines */}
                                                <motion.path
                                                    d={linePath(ma50)}
                                                    fill="none"
                                                    stroke="#F59E0B"
                                                    strokeWidth="1.5"
                                                    strokeDasharray="4 4"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true, margin: '-40px' }}
                                                    transition={{ duration: 2, ease: "easeInOut" }}
                                                />
                                                <motion.path
                                                    d={linePath(ma20)}
                                                    fill="none"
                                                    stroke="#3B82F6"
                                                    strokeWidth="1.5"
                                                    strokeDasharray="4 4"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true, margin: '-40px' }}
                                                    transition={{ duration: 2, ease: "easeInOut" }}
                                                />
                                                <motion.path
                                                    d={linePath(closePrices)}
                                                    fill="none"
                                                    stroke="#EF4444"
                                                    strokeWidth="1.5"
                                                    strokeDasharray={2000}
                                                    initial={{ strokeDashoffset: 2000 }}
                                                    whileInView={{ strokeDashoffset: 0 }}
                                                    viewport={{ once: true, margin: '-40px' }}
                                                    transition={{ duration: 2, ease: "easeInOut" }}
                                                />
                                            
                                                {/* Legend */}
                                                <g transform={`translate(${W/2 - 100}, ${H - 25})`}>
                                                    <line x1={0} x2={15} y1={0} y2={0} stroke="#EF4444" strokeWidth="2" />
                                                    <text x={20} y={3} fill="#9CA3AF" fontSize="10">Close</text>
                                            
                                                    <line x1={60} x2={75} y1={0} y2={0} stroke="#3B82F6" strokeWidth="2" strokeDasharray="2 2" />
                                                    <text x={80} y={3} fill="#9CA3AF" fontSize="10">20-day MA</text>
                                            
                                                    <line x1={140} x2={155} y1={0} y2={0} stroke="#F59E0B" strokeWidth="2" strokeDasharray="2 2" />
                                                    <text x={160} y={3} fill="#9CA3AF" fontSize="10">50-day MA</text>
                                                </g>
                                            
                                                {/* Bottom Right Source */}
                                                <text x={W - 10} y={H - 10} textAnchor="end" fill="#9CA3AF" fontSize="8">Source: Exchange Rates UK, 11 August 2026, 13:53 BST.</text>
                                            </svg>
                                        )
                                    })()}
                                </div>
                                
                                {/* External Source */}
                                <p className='text-[10px] italic text-black leading-relaxed mt-2 poppins-sans'>
                                    Source: Exchange Rates UK, 11 August 2026.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id='10' className='w-full pt-24 pb-20'>
                        <div className='mb-10 space-y-3'>
                            <h2 className='text-2xl md:text-3xl font-bold text-black leading-snug pt-serif'>
                                Where Each Metal Sits on the Clean-Energy / AI Demand Curve
                            </h2>
                            <p className='text-black italic text-base poppins-sans'>
                                Not every metal in the note is being repriced by the same forces
                            </p>
                        </div>

                        <div className='overflow-x-auto'>
                            <table className='w-full text-left border-collapse poppins-sans text-xs md:text-sm min-w-[800px]'>
                                <thead>
                                    <tr className='bg-black text-white'>
                                        <th className='p-5 font-bold border-r border-white/20 w-28'>Metal</th>
                                        <th className='p-5 font-bold border-r border-white/20 w-52'>Primary Demand Driver</th>
                                        <th className='p-5 font-bold border-r border-white/20'>Clean-Energy / AI Link</th>
                                        <th className='p-5 font-bold border-r border-white/20 w-64'>Key Supply Bottleneck</th>
                                        <th className='p-5 font-bold w-48'>Long-Term Outlook</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            metal: 'Steel',
                                            driver: 'Infrastructure & industrial capacity',
                                            link: 'Renewables, battery mfg. & hydrogen - direct, policy-backed',
                                            bottleneck: 'Import competition; coking-coal import dependency',
                                            outlook: '300 MT capacity target by 2030'
                                        },
                                        {
                                            metal: 'Iron Ore',
                                            driver: 'Steel production growth',
                                            link: 'Green / DRI-grade feedstock shift',
                                            bottleneck: 'Ore quality, not just volume',
                                            outlook: 'Potential 40 Mt supply gap by 2030'
                                        },
                                        {
                                            metal: 'Copper',
                                            driver: 'Infrastructure, EVs, grid, data centres',
                                            link: 'Clean energy + AI/data-centre infra',
                                            bottleneck: 'Falling ore grades; thin discovery pipeline; capex inflation',
                                            outlook: 'Up to 25% global deficit by 2035 (IEA)'
                                        },
                                        {
                                            metal: 'Aluminium',
                                            driver: 'Construction, EV lightweighting, solar, grid',
                                            link: 'Direct in China\'s shifting mix; India via renewables/EV/PLI',
                                            bottleneck: 'Low capacity utilisation (India); scrap & energy security',
                                            outlook: 'China extrusion demand ~27.5 Mt by 2030'
                                        },
                                        {
                                            metal: 'Gold',
                                            driver: 'Central-bank buying & investment / hedging',
                                            link: 'Indirect - AI electronics demand real but secondary',
                                            bottleneck: 'Not supply-constrained; a monetary metal',
                                            outlook: 'Electronics demand +4% YoY (Q2\'26, WGC)'
                                        },
                                        {
                                            metal: 'Silver',
                                            driver: 'Investment + industrial (PV, electronics)',
                                            link: 'Direct via solar (declining per-unit use) and emerging AI/EV/data-centre demand',
                                            bottleneck: 'Structural market deficit; flat mine supply',
                                            outlook: '6th straight annual deficit (2026)'
                                        }
                                    ].map((row, i) => (
                                        <motion.tr 
                                            key={row.metal}
                                            className={i % 2 === 1 ? 'bg-[#F9EFE3]' : 'bg-white'}
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: '-40px' }}
                                            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                                        >
                                            <td className='p-5 font-bold text-black'>{row.metal}</td>
                                            <td className='p-5 text-black'>{row.driver}</td>
                                            <td className='p-5 text-black'>{row.link}</td>
                                            <td className='p-5 text-black'>{row.bottleneck}</td>
                                            <td className='p-5 text-black'>{row.outlook}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                        <div id='11' className='w-full pt-12 lg:ml-42 pb-24 border-t border-gray-100'>
                        <div className='max-w-4xl space-y-8'>
                            <h5 className='text-xl md:text-2xl font-bold font-serif' style={{ color: GOLD }}>
                                Disclaimer
                            </h5>
                            <div className='space-y-6 font-serif italic text-base md:text-lg text-black font-semibold leading-relaxed' style={{ fontFamily: 'PT Serif,serif' }}>
                                <p>
                                    Mutual fund investments are subject to market risks. Please read the scheme information and other related documents carefully before investing. Past performance is not indicative of future returns. Please consider your specific investment requirements before choosing a fund or designing a portfolio that suits your needs.
                                </p>
                                <p>
                                    TieVista Global Private Wealth (TieVista) is the brand name of IndusArtha Financial Services Private Limited, (with ARN code 342010 and APRN code 07336) makes no warranties or representations, express or implied, on products offered through the platform. It accepts no liability for any damages or losses, however caused, in connection with the use of, or on the reliance of its product or related services.
                                </p>
                                <p>
                                    The data presented in this document is based on sources as mentioned and TieVista is not presenting its own views or recommendation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MetalsInfletionPoint