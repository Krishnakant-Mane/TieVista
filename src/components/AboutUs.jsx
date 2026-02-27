import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Target, Landmark, ShieldCheck, Plus } from 'lucide-react'

export const AboutUs = () => {
  const animationSettings = {
    container: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2 }
      }
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    }
  };

  const expectations = [
    "A clearly defined detailed risk profile analysis to guide strategy and decision-making",
    "Access to institutional-grade investment opportunities",
    "Integrated support across investments, banking, taxation, and governance",
    "Consolidated portfolio reporting through a single, unified dashboard",
    "Strategic advisory support for entrepreneurs across growth, transactions, and legacy planning"
  ];

  return (
    <div className="bg-white font-sans selection:bg-[#D4AF37] selection:text-white">

      {/* Hero Section */}
      <section className="h-[80vh] w-full relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover scale-105"
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="TieVista Office"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationSettings.container}
          className="relative z-10 text-center px-6"
        >
          <div className="inline-block px-4 py-1 mb-6 border border-[#D4AF37]/50 rounded-full bg-black/20 backdrop-blur-sm">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">Private Wealth Management</span>
          </div>
          <motion.h1
            variants={animationSettings.item}
            className="text-6xl md:text-9xl mb-8 text-white tracking-tighter leading-[0.95]"
            style={{ fontFamily: 'PT Serif, serif' }}
          >
            About <span className="text-[#D4AF37] font-light italic">Us</span>
          </motion.h1>
          <motion.p
            variants={animationSettings.item}
            className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Simplifying complexity with care, discretion, and a long-term perspective.
          </motion.p>
        </motion.div>
      </section>

      {/* Narrative - Section 1: Who We Are */}
      <section className="w-full py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="w-full md:w-1/2 overflow-hidden border border-gray-100 shadow-sm relative group">
              <motion.img
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Landmark className="text-[#D4AF37]" size={24} />
                  <span className="text-gray-400 text-xs tracking-[0.4em] uppercase">Foundation</span>
                </div>
                <h2 className="text-5xl md:text-7xl mb-8 tracking-tighter leading-tight" style={{ fontFamily: 'PT Serif, serif' }}>
                  A Structured <span className="text-[#D4AF37] italic">Approach.</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                  TieVista is a Private Wealth management organisation serving individuals and families with wealth spanning geographies, asset classes, and generations. We work with UHNIs, HNIs, NRIs, family offices, and entrepreneurs, offering a structured and thoughtful approach to building, managing, and overseeing long-term wealth.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative - Section 2: Deep Understanding */}
      <section className="w-full py-32 bg-[#FAFAFA] border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
            <div className="w-full md:w-1/2 overflow-hidden border border-gray-100 shadow-sm relative group">
              <motion.img
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Target className="text-[#D4AF37]" size={24} />
                  <span className="text-gray-400 text-xs tracking-[0.4em] uppercase">Strategy</span>
                </div>
                <h2 className="text-5xl md:text-7xl mb-8 tracking-tighter leading-tight" style={{ fontFamily: 'PT Serif, serif' }}>
                  Insights into <span className="text-[#D4AF37] italic">Action.</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                  Our engagement begins with a deep appreciation of understanding of each client’s context, personal and family objectives, risk preferences, and financial complexity. These insights are translated into a financial risk analysis, compiled into a single page which serves as the foundation for informed decision-making.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition - Section 3: Institutional Access */}
      <section className="w-full py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="w-full md:w-1/2 overflow-hidden border border-gray-100 shadow-sm relative group">
              <motion.img
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <ShieldCheck className="text-[#D4AF37]" size={24} />
                  <span className="text-gray-400 text-xs tracking-[0.4em] uppercase">Expertise</span>
                </div>
                <h2 className="text-5xl md:text-7xl mb-8 tracking-tighter leading-tight" style={{ fontFamily: 'PT Serif, serif' }}>
                  Seasoned <span className="text-[#D4AF37] italic">Excellence.</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                  TieVista brings experience and expertise of seasoned professionals, institutional access, and coordinated execution. We curate investment opportunities across markets, including Portfolio Management Services, Alternate Investment Funds, and GIFT City products in partnership with AMCs in IFSC.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* List Section: What to Expect */}
      <section className="w-full py-32 bg-[#FAFAFA] border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter" style={{ fontFamily: 'PT Serif, serif' }}>
                What to <span className="text-[#D4AF37] italic">Expect</span>
              </h2>
              <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
                Clients working with TieVista can expect a partnership built on clarity, access, and strategic oversight.
              </p>
            </div>

            <div className="space-y-0">
              {expectations.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-8 py-8 border-b border-gray-200 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-white transition-all shrink-0">
                    <Plus size={20} />
                  </div>
                  <span className="text-xl md:text-2xl font-light text-gray-800 group-hover:text-black transition-colors leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Statement Section */}
      <section className="h-[70vh] w-full flex items-center justify-center bg-white relative overflow-hidden">
        {/* <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <Zap className="w-[800px] h-[800px]" />
        </div> */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center relative z-10 px-6 max-w-5xl"
        >
          <h2
            className="text-4xl md:text-6xl font-medium mb-12 leading-relaxed tracking-tighter text-gray-900"
            style={{ fontFamily: 'PT Serif, serif' }}
          >
            IndusArtha Financial Services Private Limited, known as <span className="text-[#D4AF37] italic">TieVista</span> is designed to simplify complexity and provide clear oversight.
          </h2>

        </motion.div>
      </section>
    </div>
  )
}
