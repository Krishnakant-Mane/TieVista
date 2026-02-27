import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Database, Layers, TrendingUp, ArrowRight, Zap } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

// --- Static Data ---
const ASSET_CATEGORIES = [
    {
        id:"Growth",
        title: "Growth",
        italicTitle: "Assets",
        subtitle: "EQUITY-FOCUSED STRATEGIES",
        description: "At TieVista, we build enduring financial success through disciplined, equity-centric investment strategies. Our approach is rooted in long-term growth, backed by rigorous research and thoughtful risk management to generate capital appreciation globally.",
        includes: ["Public Equities", "Equity Mutual Funds (including ELSS)", "Equity PMS", "Equity ETFs"],
        image: "https://c.stocksy.com/a/4L0600/z9/1431274.jpg",
        icon: TrendingUp,
        reverse: false
    },
    {
        id:"Income",
        title: "Income &",
        italicTitle: "Capital Preservation",
        subtitle: "DEFENSIVE STRUCTURES",
        description: "We understand that protecting hard-earned capital is as essential as growth. Our Income & Capital Preservation strategies prioritize safety and steady income generation, crafted for investors who seek predictable cash flows and shield their portfolios from undue volatility.",
        includes: ["Debt Mutual Funds", "Debt PMS", "Physical Bonds (Govt, Corp, Credit)", "Fixed Income ETFs"],
        image: "https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=2000",
        icon: Database,
        reverse: true
    },
    {
        id:"Private",
        title: "Private &",
        italicTitle: "Alternative Investments",
        subtitle: "EXCLUSIVE MARKETS",
        description: "Sophisticated portfolios blend traditional and alternative investments to capture broad market potential while uncovering unique value. We provide access to differentiated opportunities that go beyond conventional public markets to enhance returns and reduce correlation.",
        includes: ["AIFs (Category I, II & III)", "Private Equity & Venture Capital", "Real Estate Opportunities", "Commodities"],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
        icon: Layers,
        reverse: false
    },
    {
        id:"Global",
        title: "Global &",
        italicTitle: "GIFT City Solutions",
        subtitle: "BORDERLESS CAPITAL",
        description: "In an interconnected world, capital is not confined by geography. We provide seamless access to global markets and India’s premier gateway — GIFT City — offering strategic diversification and structural efficiency for globally minded families and institutions.",
        includes: ["GIFT City PMS & AIFs", "International Mutual Funds", "Global Equities", "Global ETFs"],
        image: "https://cdn.prod.website-files.com/5ded36b5e942e74b13468d23/60917854b0ebb181caf1afcd_00-Header%402x.png",
        icon: Globe,
        reverse: true
    }
];

const NAV_ELEMENTS = [
    { title: "Growth Assets", icon: TrendingUp, href: "#Growth" },
    { title: "Income & Capital Preservation", icon: Database, href: "#Income" },
    { title: "Private & Alternatives", icon: Layers, href: "#Private" },
    { title: "Global Solutions", icon: Globe, href: "#Global" }
];

// --- Sub-components ---

const CategorySection = ({ cat }) => (
    <section className={`w-full py-32 border-b border-gray-100 ${cat.reverse ? 'bg-[#FAFAFA]' : 'bg-white'} `}>
        <div className="container mx-auto px-6 pt-25" id={cat.id}>
            <div className={`flex flex-col ${cat.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-24`}>

                {/* Image Section */}
                <div className="w-full md:w-1/2 h-[60vh] md:h-[70vh] overflow-hidden border border-gray-200 shadow-sm relative group">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        src={cat.image}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-xl text-gray-900"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-lg">
                                <cat.icon size={22} />
                            </div>
                            <span className="text-gray-400 text-xs tracking-[0.4em] uppercase">{cat.subtitle}</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl mb-8 leading-[0.9] tracking-tighter" style={{ fontFamily: "PT Serif" }}>
                            {cat.title} <span className="text-[#D4AF37] font-light italic">{cat.italicTitle}</span>
                        </h2>

                        <p className="text-lg text-gray-500 mb-12 leading-relaxed font-light">
                            {cat.description}
                        </p>

                        <div className="mb-12">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Institutional Offerings</h4>
                            {cat.includes.map((item, i) => (
                                <div key={i} className="flex gap-7  py-5 border-b border-gray-100 group cursor-pointer hover:bg-gray-50 transition-colors px-1">
                                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all">
                                        <ArrowRight size={18} />
                                    </div>
                                    <span className="flex justify-start text-xl font-medium text-gray-800 transition-colors group-hover:text-black">{item}</span>
                                    
                                </div>
                            ))}
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    </section>
);

// --- Main Component ---

export const InvestmentUniverse = () => {
    const animationSettings = {
        container: {
            hidden: { opacity: 0, y: 30 },
            visible: {
                opacity: 1, y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2 }
            }
        },
        item: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
        }
    };

    return (
        <div className="bg-white font-sans selection:bg-[#D4AF37] selection:text-white">

            {/* Hero Section */}
            <section className="h-[90vh] w-full relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img className="h-full w-full object-cover scale-105" src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/igbn1W_zBxPk/v1/-1x-1.webp" alt="Hero" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
                </div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationSettings.container} className="relative z-10 text-center px-6">
                    <div className="inline-block px-4 py-1 mb-6 border border-[#D4AF37]/50 rounded-full bg-black/20 backdrop-blur-sm">
                        <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">We don’t just manage wealth, We future-proof it.</span>
                    </div>
                    <motion.h1 variants={animationSettings.item} className="text-6xl md:text-9xl mb-8 text-white tracking-tighter leading-[0.95]" style={{ fontFamily: "PT Serif" }}>
                        Investment <span className="text-[#D4AF37] italic">Universe</span>
                    </motion.h1>
                    <motion.p variants={animationSettings.item} className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed mb-12">
                        Navigating the complexities of global wealth through bespoke selection, rigorous discipline, and a borderless perspective.
                    </motion.p>
                </motion.div>

                {/* Quick Nav Bar */}
                <div className="absolute bottom-0 left-0 w-full h-[100px] bg-white backdrop-blur-xl border-t border-white/10 flex items-center">
                    {NAV_ELEMENTS.map((el, i) => (
                        <a key={i} href={el.href} className="flex-1 h-full flex items-center justify-center text-[10px] lg:text-xl font-medium border-x border-gray-100 hover:bg-[#D4AF37] hover:text-white transition-all duration-300">
                            {el.title}
                        </a>
                    ))}
                </div>
            </section>

            {/* Asset Category Sections */}
            {ASSET_CATEGORIES.map((cat, i) => (
                <CategorySection key={i} cat={cat} />
            ))}

            {/* Final CTA */}
            <section className="h-screen w-full flex items-center justify-center bg-white relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                    <Zap className="w-[800px] h-[800px]" />
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="text-center z-10 px-6">
                    <h2 className="text-6xl md:text-9xl font-bold mb-12 leading-[0.9] tracking-tighter text-gray-900 font-serif">
                        Future-proof Your <br /> <span className="text-[#D4AF37] italic">Legacy.</span>
                    </h2>
                    <button className="bg-black text-white px-16 py-6 rounded-full font-bold tracking-[0.2em] uppercase text-sm hover:bg-[#D4AF37] transition-all shadow-2xl hover:shadow-[#D4AF37]/40">
                        Connect With Advisor
                    </button>
                </motion.div>
            </section>
        </div>
    );
};
