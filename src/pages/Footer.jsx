import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Linkedin, Twitter, Instagram, MapPin,Phone  } from 'lucide-react'
import logo from '/TieVistaLogo.png'
import { motion } from 'framer-motion'

const GOLD = '#D4AF37'

export const Footer = () => {

  return (
    <footer className="bg-black text-white py-5 lg:py-10 border-t border-gray-800 selection:bg-[#D4AF37] selection:text-white">

      <section className="w-full min-h-[20vh] bg-black flex items-center justify-center relative overflow-hidden py-8">

        {/* Background texture: subtle gold diagonal lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0px, #D4AF37 1px, transparent 1px, transparent 40px)',
          }}
        />

        {/* Large ghost text */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
          aria-hidden
        >
          <span
            className="text-[18vw] font-bold tracking-tighter leading-none opacity-[0.025] text-white gold-text"
            style={{ fontFamily: 'PT Serif, serif' }}
          >
            Tievista
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative z-10 px-2 max-w-7xl mx-auto"
        >
          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-16 h-px mx-auto mb-10"
            style={{ background: GOLD, transformOrigin: 'left' }}
          />

          <p className="text-sm text-white tracking-[0.3em] uppercase font-bold mb-6 " style={{ fontFamily: 'PT Serif, serif' }}>Our Identity</p>

          <h2
            className="text-sm font-light leading-relaxed tracking-tight text-white mb-10"
            style={{ fontFamily: 'PT Serif, serif' }}
          >
            IndusArtha Financial Services Private Limited, known as TieVista Global Private Wealth designed to simplify complexity and provide clear oversight.
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-16 h-px mx-auto"
            style={{ background: `${GOLD}60`, transformOrigin: 'right' }}
          />
        </motion.div>
      </section>

      <div className=" mx-auto px-6 lg:px-16">

        {/* Main Content Area */}
        <div className="flex flex-wrap gap-10 lg:gap-10 mb-8">

          {/* Brand Section */}
          <div className="flex-1 min-w-[280px]">
            <Link to="/" className="inline-block ">
              <div className="w-25 h-25 flex items-center justify-center ">
                <img src={logo} alt="TieVista Logo" className="w-full h-full object-contain brightness-0 invert" />
              </div>
            </Link>
            
            <div className="flex flex-col mt-2 space-y-1 "> {/*https://maps.app.goo.gl/LQztAs5qSRRrZiNq9*/}
              <a href="https://maps.app.goo.gl/LQztAs5qSRRrZiNq9" className="flex gap-2 group">
                <div className='w-10 h-10 flex items-center justify-center text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all'>
                  <MapPin size={18}/>
                </div>
                <h6 className='flex justify-center items-center text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all font-light text-sm poppins-sans'> TIEVISTA GLOBAL PRIVATE WEALTH,<br />4th Floor, AWFIS, VIOS Tower, Wadala , Mumbai-400037</h6>

              </a>
              <a href="mailto:connect@tievista.com" className="flex gap-2 group">
                <div className='w-10 h-10 flex items-center justify-center text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all'>
                  <Mail size={18}/>
                </div>
                <h6 className='flex justify-center items-center text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all font-light text-sm poppins-sans'>connect@tievista.com </h6>

              </a>
              <a href="tel:+91 91679 15651" className="flex gap-2 group">
                <div className='w-10 h-10 flex items-center justify-center text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all'>
                  <Phone size={18}/>
                </div>
                <h6 className='flex justify-center items-center text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all font-light text-sm poppins-sans'>+91 91679 15651 </h6>

              </a>

              <a href="https://www.linkedin.com/company/tievista/" className="flex gap-2 group">
                <div className='w-10 h-10 flex items-center justify-center text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all'>
                  <Linkedin size={18} />
                </div>
                <h6 className='flex justify-center items-center text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all font-light text-sm poppins-sans'>LinkedIn</h6>
              </a>
              
              <a href="https://www.instagram.com/tievista?igsh=MThjYmx2M3RhamZmdw==&igsi=MThjYmx2M3RhamZmdw==" className="flex gap-2 group">
                <div className='w-10 h-10 flex items-center justify-center text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all'>
                  <Instagram size={18} />
                </div>
                <h6 className='flex justify-center items-center text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all font-light text-sm poppins-sans'>Instagram</h6>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-wrap gap-12 lg:gap-24 mt-27">

            {/* Column 1 */}
            <div>
              <h4 className="text-base font-bold uppercase  mb-6 text-white" style={{ fontFamily: 'PT Serif, serif' }}>
                Quick Links
              </h4>
              <ul className="space-y-2 font-light text-white">
                <li><Link to="/" className="hover:text-white text-sm transition-colors poppins-sans">Home</Link></li>
                <li><Link to="/partners" className="hover:text-white text-sm transition-colors poppins-sans">TieVista Partners</Link></li>
                <li><Link to="/investmentaccess" className="hover:text-white text-sm transition-colors poppins-sans">Investment Access</Link></li>
                <li><Link to="/publications" className="hover:text-white text-sm transition-colors poppins-sans">Knowledge Repository</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-bold uppercase mb-6 text-white" style={{ fontFamily: 'PT Serif, serif' }}>
                Investment Partners
              </h4>
              <ul className="space-y-2 font-light text-white">
                <li><Link to="/investmentpartners/mutualfunds" className="hover:text-white text-sm transition-colors poppins-sans">Mutual Funds</Link></li>
                <li><Link to="/investmentpartners/pms" className="hover:text-white text-sm transition-colors poppins-sans">PMS</Link></li>
                <li><Link to="/investmentpartners/aif" className="hover:text-white text-sm transition-colors poppins-sans">AIF</Link></li>
                <li><Link to="/investmentpartners/giftcity" className="hover:text-white text-sm transition-colors poppins-sans">GIFT City</Link></li>
                <li><Link to="/investmentpartners/privatecredit" className="hover:text-white text-sm transition-colors poppins-sans">Private Credit</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-base font-bold uppercase mb-6 text-white" style={{ fontFamily: 'PT Serif, serif' }}>
                LEGAL & COMPLIANCE
              </h4>
              <ul className="space-y-2 font-light text-white">
                <li><Link to="/privacypolicy" className="text-sm hover:text-white transition-colors poppins-sans">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm hover:text-white transition-colors poppins-sans">Terms of Use</Link></li>
                <li><a href="https://docs.google.com/spreadsheets/d/1WfMZxhjV2KQYqx9q458ylRMYRCnCHzKI/export?format=xlsx" className="text-sm hover:text-white transition-colors poppins-sans">Product List</a></li>
                <li><Link to="/account-closure" className="text-sm hover:text-white transition-colors poppins-sans">Account Closure</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-10" />

        {/* Disclaimer Section */}
        <div className="mb-10">
          <p className="text-[12px] mb-4 leading-relaxed text-white text-justify md:text-left poppins-sans">
Mutual fund investments are subject to market risks. Please read the scheme information and other related documents carefully before investing. Past performance is not indicative of future returns. Please consider your specific investment requirements before choosing a fund ,or designing a portfolio that suits your needs. IndusArtha Financial Services Private Limited, (with ARN- 342010, APRN - 07336, AP Registration Number NSE - AP3022007993 AND BSE - AP01668101176514) makes no warranties or representations, express or implied, on products offered through the platform. It accepts no liability for any damages or losses, however caused, in connection with the use of, or on the reliance of its product or related services. Terms and conditions of the website are applicable.          </p>
          <p className="text-[12px]  leading-relaxed text-white text-justify md:text-left poppins-sans">
            “Product Manufacturer/ Service Provider” shall mean issuer of security or the entity/ person executing the actions to offer the defined services.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-white font-light pt-8 border-t border-gray-900" style={{ fontFamily: 'PT Serif, serif' }}>
          <p>® 2026 TieVista Global Private Wealth .  All rights reserved.</p>
          {/* <div className='gap-2 flex flex-col' >
            <div className="flex gap-8">
              <Link to="/privacypolicy" className="hover:text-white transition-colors" style={{ fontFamily: 'PT Serif, serif' }}>Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors" style={{ fontFamily: 'PT Serif, serif' }}>Terms of Use</Link>
            </div>
            <div className="flex gap-8">
              <a href="https://docs.google.com/spreadsheets/d/1WfMZxhjV2KQYqx9q458ylRMYRCnCHzKI/export?format=xlsx" className="hover:text-white transition-colors" style={{ fontFamily: 'PT Serif, serif' }}>Product List</a>
              <Link to="/account-closure" className="hover:text-white transition-colors" style={{ fontFamily: 'PT Serif, serif' }}>Account Closure</Link>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
