
import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Database, ShieldCheck, Zap, ArrowRight, Layers, TrendingUp } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export const InvestmentUniverse = () => {

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 5 },
        visible: { opacity: 1, y: 0 }
    };

    const elements = [
        {
            title: "Growth Assets",
            description: "Global equities, emerging markets, thematic funds, and alternative growth strategies.",
            icon: TrendingUp,
            color: "#D4AF37"
        },
        {
            title: "Income & Capital Preservation",
            description: "Fixed income, bonds, structured products, and capital-protected solutions.",
            icon: Database,
            color: "#D4AF37"
        },
        {
            title: "Private & Alternative Investments",
            description: "Private equity, venture capital, hedge funds, real estate, and infrastructure.",
            icon: Layers,
            color: "#D4AF37"
        },
        {
            title: "Global & GIFT City Solutions",
            description: "Multi-currency reporting, global investment platforms, and GIFT City structures.",
            icon: Globe,
            color: "#D4AF37"
        }
    ]
    return (
        <div className="bg-white">
            {/* Hero Section - Reference Home.jsx */}
            <div className="h-[70vh] w-full snap-start relative flex items-center justify-center overflow-hidden border-b border-gray-100">
                <div className="absolute inset-0 z-0">
                    <img
                        className="h-full w-full object-cover scale-110"
                        src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/igbn1W_zBxPk/v1/-1x-1.webp"
                        alt="Investment Universe Background"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className='flex justify-center items-center absolute inset-0 z-20 w-full h-full p-4 py-20 md:p-10 lg:p-20 bg-transparent'>
                    <div className='h-full w-full bg-amber-50/60 rounded-3xl md:rounded-4xl'></div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={containerVariants}
                    className="relative z-50 max-w-4xl w-full text-center px-6"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-8xl font-bold mb-6 text-white tracking-tighter"
                        style={{ fontFamily: 'PT Serif, sans-serif' }}
                    >
                        Investment <span className="text-[#D4AF37]">Universe</span>
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        Global families are evolving. Capital is borderless. Regulation is dynamic.
                    </motion.p>
                </motion.div>
            </div>

            {/* Scrolling Banner - Brand Identity */}
            <div className='h-[20vh] md:h-[20vh] w-full flex overflow-x-hidden overflow-y-hidden justify-center items-center border-b border-gray-100'>
                <div className='flex justify-center items-center h-full w-full border'>
                    {elements.map((element, index) => (
                        <div key={index} className='flex justify-center items-center h-full w-full'>
                            <a href="#" className='flex justify-center items-center text-3xl font-medium text-gray-900 h-full w-full border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all duration-300 '>
                                {element.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Narrative Section */}
            <div className="min-h-[60vh] w-full snap-start flex items-center justify-center p-6 md:p-12 border-b border-gray-100">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={containerVariants}
                    className="max-w-4xl w-full text-center"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-medium text-gray-900 mb-8 leading-tight">
                        Transforming how wealth is <span className="italic font-serif text-[#D4AF37]">preserved and scaled</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                        TieVista integrates modern wealth-tech, cross-border structuring, alternative assets and global access platforms to navigate the borderless capital landscape.
                    </motion.p>
                </motion.div>
            </div>

            

            {/* Final Statement Section - Reference Home.jsx */}
            <div className="h-screen w-full snap-start flex items-center justify-center p-6 md:p-12 bg-black text-white overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] select-none pointer-events-none">
                    <Zap className="w-[800px] h-[800px]" />
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={containerVariants}
                    className="max-w-5xl w-full text-center relative z-10"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl md:text-8xl font-medium mb-12 leading-[1.1] tracking-tighter"
                        style={{ fontFamily: 'PT Serif, sans-serif' }}
                    >
                        We don’t just manage <span className="italic">wealth</span>, <br />
                        We <span className="text-[#D4AF37]">future-proof</span> it.
                    </motion.h2>

                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#D4AF37] text-white px-12 py-5 font-semibold tracking-widest uppercase text-sm flex items-center gap-4 mx-auto hover:bg-[#c4a132] transition-colors shadow-2xl"
                    >
                        Inquire Now <ArrowRight size={20} />
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}
