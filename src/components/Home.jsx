import React, { useState, useEffect, useRef } from 'react'
import { Square, Landmark, TrendingUp, Users, Globe, Briefcase, FileText, Mail, ArrowRight, ShieldCheck, Search, UserCheck, DollarSign, Award, Star, CheckCircle2, IdCard, Contact } from 'lucide-react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react'
import AboutUs from './AboutUs';
import { Link } from 'react-router-dom';
import PoppinsRegular from '../fonts/Poppins-Regular.ttf';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const list = [
        {
            icon: ShieldCheck,
            titlex: "AMFI Registered",
            titley: "APMI Registered"
        },
        {
            icon: IdCard,
            titlex: "ARN-342010",
            titley: "APRN-07336"
        },
        {
            icon: Landmark,
            titlex: "NSE AP Reg No -AP3022007993",
            titley: "BSE AP Reg No -AP01668101176514"
        },
        {
            icon: Globe,
            titlex: "Global Markets & ",
            titley: "IFSC Facilitations"
        },
    ]

    return (
        <>
            <div className='selection:bg-[#D4AF37] selection:text-white'>

                {/* Hidden SEO H1 */}
                <h1 className="sr-only">TieVista</h1>

                {/* Hero Snap Scroll Section */}
                <div className="h-[100vh] min-h-[700px] w-full snap-start relative flex flex-col justify-center overflow-hidden border-b border-gray-100 pt-20 bg-white">

                    <div className='absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 rounded-br-4xl rounded-bl-4xl bg-white'>
                        <img className='absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700 rounded-br-4xl rounded-bl-4xl' src="https://res.cloudinary.com/dck5jgfix/image/upload/v1785849587/TieVistaLandingBG_z6v61n.png" alt="LandingPage" loading='lazy' />
                    </div>

                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-0 rounded-br-4xl rounded-bl-4xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0 rounded-br-4xl rounded-bl-4xl"></div>

                    {/* Content Container */}
                    <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 flex-1 flex flex-col justify-center mt-18 lg:mt-55">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={containerVariants}
                            className="w-full max-w-4xl"
                        >
                            <motion.div variants={itemVariants} className="mb-2 sm:mb-3">
                                <h1
                                    className="text-white font-normal text-2xl sm:text-3xl lg:text-[52px] tracking-normal leading-[1.1] drop-shadow-xl"
                                    style={{ fontFamily: 'PT Serif, serif' }}
                                >
                                    Beyond Wealth, Towards Legacy
                                </h1>
                            </motion.div>

                            <motion.p variants={itemVariants} className="text-white text-base sm:text-lg lg:text-[20px] max-w-[800px] mb-8 sm:mb-12 leading-relaxed font-light drop-shadow-md" style={{ fontFamily: PoppinsRegular }}>
                                A global private wealth management firm serving HNI, UHNI and family office client across geographies, asset classes and generations.
                            </motion.p>

                            <motion.div variants={itemVariants} className="flex flex-wrap items-center lg:w-200 gap-4 sm:gap-6">
                                <Link to="/contact">
                                    <button className="lg:w-65 bg-[#D4AF37] hover:bg-[#c29e2f] transition-all text-white px-8 py-3.5 font-light text-[16px] shadow-[0_4px_14px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)]">
                                        Schedule a Call
                                    </button></Link>
                                <Link to="/partnersignup">
                                    <button className="lg:w-65 bg-transparent border border-white/60 hover:bg-white/10 hover:border-white transition-all text-white px-8 py-3.5 font-light text-[16px]">
                                        Partner with Us
                                    </button></Link>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Bottom Banner — hidden on mobile, flex-wrap 2-col on tablet, row on desktop */}

                    {/* Tablet (md → lg): flex-wrap 2-column layout */}
                    <div className='hidden md:flex lg:hidden relative z-10 w-full flex-wrap border-t border-white/30'>
                        {list.map((item, idx) => {
                            const isLeft = idx % 2 === 0;
                            const isTopRow = idx < 2;
                            return (
                                <div key={idx} className={`w-1/2 flex items-center gap-3 px-6 py-4 ${isLeft ? 'border-r border-white/30' : ''} ${isTopRow ? 'border-b border-white/30' : ''}`}>
                                    <div className='text-white shrink-0'>
                                        <item.icon className='w-5 h-5' />
                                    </div>
                                    <div>
                                        <div className='text-white text-[13px] font-light' style={{ fontFamily: PoppinsRegular }}>{item.titlex}</div>
                                        <div className='text-white text-[13px] font-light' style={{ fontFamily: PoppinsRegular }}>{item.titley}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Desktop (lg+): original fixed-width horizontal row */}
                    <div className='hidden lg:block relative z-10 lg:w-270 lg:h-25 ml-25'>
                        <div className='relative z-10 lg:w-full lg:h-18 border-r border-l border-white/70'>
                            <div className='flex lg:h-full lg:w-full'>
                                <div className='flex items-center lg:w-50 justify-between px-5'>
                                    <div className='text-white'>
                                        <ShieldCheck className='w-6 h-6' />
                                    </div>
                                    <div>
                                        <div className='text-white text-[16px] font-light' style={{ fontFamily: PoppinsRegular }}>AMFI Registered</div>
                                        <div className='text-white text-[16px] font-light' style={{ fontFamily: PoppinsRegular }}>APMI Registered</div>
                                    </div>
                                </div>
                                <div className='flex items-center lg:h-18'><div className='lg:h-15 border border-white/50'></div></div>
                                <div className='flex items-center lg:w-50 justify-between px-5'>
                                    <div className='text-white'>
                                        <IdCard className='w-6 h-6' />
                                    </div>
                                    <div>
                                        <div className='text-white text-[16px] font-light' style={{ fontFamily: PoppinsRegular }}>ARN-342010</div>
                                        <div className='text-white text-[16px] font-light' style={{ fontFamily: PoppinsRegular }}>APRN-07336</div>
                                    </div>
                                </div>
                                <div className='flex items-center lg:h-18'><div className='lg:h-15 border border-white/50'></div></div>
                                <div className='flex items-center lg:w-90 justify-between px-5'>
                                    <div className='text-white'>
                                        <Landmark className='w-6 h-6' />
                                    </div>
                                    <div>
                                        <div className='text-white text-[16px] font-light' style={{ fontFamily: PoppinsRegular }}>NSE AP Reg No -AP3022007993</div>
                                        <div className='text-white text-[16px] font-light' style={{ fontFamily: PoppinsRegular }}>BSE AP Reg No -AP01668101176514</div>
                                    </div>
                                </div>
                                <div className='flex items-center lg:h-18'><div className='lg:h-15 border border-white/50'></div></div>
                                <div className='flex items-center lg:w-60 justify-between px-5'>
                                    <div className='text-white'>
                                        <Globe className='w-6 h-6' />
                                    </div>
                                    <div>
                                        <div className='text-white text-[16px] font-light' style={{ fontFamily: PoppinsRegular }}>Global Markets &</div>
                                        <div className='text-white text-[16px] font-light' style={{ fontFamily: PoppinsRegular }}>IFSC Facilitations</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AboutUs />
            </div>
        </>
    )
}

export default Home;
