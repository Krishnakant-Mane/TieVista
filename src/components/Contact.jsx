import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { motion } from 'framer-motion';
import { Mail, Phone, User, MessageSquare, Send, Globe, MapPin, MessageCircle } from 'lucide-react';
import { securePost } from '../api/secureClient';

const GOLD = '#D4AF37';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  viewport: { once: true, margin: '-60px' },
});

const countryCodes = [
  { code: '+91', country: 'IN', label: 'India (+91)' },
  { code: '+1', country: 'US', label: 'USA (+1)' },
  { code: '+44', country: 'GB', label: 'UK (+44)' },
  { code: '+971', country: 'AE', label: 'UAE (+971)' },
  { code: '+65', country: 'SG', label: 'Singapore (+65)' },
  { code: '+61', country: 'AU', label: 'Australia (+61)' },
  { code: '+1', country: 'CA', label: 'Canada (+1)' },
  { code: '+49', country: 'DE', label: 'Germany (+49)' },
  { code: '+33', country: 'FR', label: 'France (+33)' },
  { code: '+81', country: 'JP', label: 'Japan (+81)' },
];

const Contact = () => {
  const [submitType, setSubmitType] = useState('mail');

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      enquiry: '',
    },
  });


  const onSubmit = async(data) =>{
    console.log(data);
    const res = await securePost('/queries/saveQuery',{emailId:data.email,firstName:data.firstName,lastName:data.lastName,phoneNumber:data.phone,message:data.enquiry})
    if(res.success){
      alert('Query submitted successfully');
      reset();
    }else{
      alert('Failed to submit query');
    }
  }

//   const onSubmit = async (data) => {
//     const fullPhone = data.phone;

//     // Construct the formatted message
//     const message = `
// New Enquiry Received!

// --------------------------
// Customer Details:
// First Name: ${data.firstName}
// Last Name: ${data.lastName}
// Email: ${data.email}
// Phone Number: ${fullPhone}

// Enquiry Details:
// ${data.enquiry}

// --------------------------
// Please respond to this enquiry as soon as possible.
// `.trim();

//     if (submitType === 'mail') {
//       const subject = "Enquiry - TieVista";
//       const email = "connect@tievista.com";
//       const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

//       window.open(emailUrl);
//       alert('Thank you for your enquiry. Your email client will now open to send the details.');
//     } else {
//       // WhatsApp Integration
//       const whatsappNo = "917977626003"; // Standardizing the provided number
//       const whatsappUrl = `https://wa.me/${whatsappNo}?text=${encodeURIComponent(message)}`;

//       window.open(whatsappUrl, '_blank');
//       alert('Thank you for your enquiry. WhatsApp will now open to send the details.');
//     }

//     reset(); 
//   };

  return (
    <div className="bg-white font-sans selection:bg-[#D4AF37] selection:text-white overflow-x-hidden">
      {/* ── Hero Section ── */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dck5jgfix/image/upload/v1774251622/Private_Alternative_Investments_yygtg2.png"
            loading='lazy'
            alt="Contact TieVista"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1 mb-6 border border-[#D4AF37]/50 rounded-full bg-black/20 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
              <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">Connect With Us</span>
            </div>
          </motion.div>
          <h1
            className="text-6xl md:text-8xl text-white tracking-tighter leading-none mb-6"
            style={{ fontFamily: 'PT Serif, serif' }}
          >

            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-white font-light max-w-2xl mx-auto leading-relaxed">
            We are here to assist you with a structured and thoughtful approach to building your legacy.
          </p>
        </motion.div>
      </section>

      {/* ── Enquiry Form Section ── */}
      <section className="min-h-screen py-24 bg-[#FAFAFA] flex items-center">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Contact Information */}
            <motion.div {...fadeUp()} className="w-full lg:w-5/12 space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl mb-8 tracking-tighter" style={{ fontFamily: 'PT Serif, serif' }}>
                  Institutional <span className='text-black' >Excellence.</span>
                </h2>
                <div className="w-12 h-px mb-8" style={{ background: GOLD }} />
                <p className="text-black font-light leading-relaxed text-lg">
                  Whether you are looking for portfolio management, private wealth management, or strategic business insights, Feel free to reach out to us.
                </p>
              </div>


              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <a className='flex items-start gap-6 group' target="_blank" href="https://mail.google.com/mail/u/0/#inbox/FMfcgzQfCDMHbJDLQnzjfQrXtpdWmsWT?compose=CllgCKCHTgqwmLnLdDGDGqZPpjWNgdMRxHRBGHFkvGNDsWlMKlbtnzLBbNqklMcpWRrjLkRQMZL">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-gray-200 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-white transition-all duration-300">
                      <Mail size={20} />
                    </div>

                    <div>
                      <h4 className="text-xs font-bold tracking-widest uppercase text-black mb-1" style={{fontFamily:'PT Serif,serif'}}>Email Enquiry</h4>
                      <p className="text-lg font-medium text-gray-800">connect@tievista.com</p>
                    </div>
                  </a>
                </div>

                <div className="flex items-start gap-6 group">
                  <a className='flex items-start gap-6 group' target="_blank" href="tel:+919167915651">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-gray-200 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-white transition-all duration-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold tracking-widest uppercase text-black mb-1" style={{fontFamily:'PT Serif,serif'}}>Direct Call</h4>
                      <p className="text-lg font-medium text-gray-800">+91 91679 15651</p>
                    </div>
                  </a>
                </div>

                <div className="flex items-start gap-6 group">
                  <a className='flex items-start gap-6 group' target="_blank" href="https://www.google.com/maps/place/VIOS+Tower/@19.0398495,72.8765938,17z/data=!3m2!4b1!5s0x3be7c8b4ce9bdb09:0x9689d49015de7535!4m6!3m5!1s0x3be7c8a1c7f00539:0x42fad0973fc21ff3!8m2!3d19.0398444!4d72.8791687!16s%2Fg%2F11q3rgh03h?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-gray-200 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-white transition-all duration-300">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold tracking-widest uppercase text-black mb-1" style={{fontFamily:'PT Serif,serif'}}>Address</h4>
                      <p className="text-lg font-medium text-gray-800">TIEVISTA GLOBAL PRIVATE WEALTH,</p>
                      <p className="text-lg font-medium text-gray-800">4th Floor, AWFIS, VIOS Tower, Wadala, Mumbai 400037</p>
                    </div>
                  </a>
                </div>


              </div>
            </motion.div>

            {/* Form */}
            <motion.div {...fadeUp(0.2)} className="w-full lg:w-7/12">
              <div className="bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-2xl border border-gray-50">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* First Name */}
                    <div className="flex-1 space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-black ml-1" style={{fontFamily:'PT Serif,serif'}}>First Name</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#D4AF37] transition-colors" size={18} />
                        <input
                          {...register('firstName', { required: 'First Name is required' })}
                          placeholder="Your First Name"
                          className={`w-full bg-gray-50 border ${errors.firstName ? 'border-red-300' : 'border-gray-100'} focus:border-[#D4AF37] focus:ring-0 rounded-xl px-12 py-4 text-gray-700 outline-none transition-all`}
                          style={{fontFamily:'PT Serif,serif'}}
                        />
                      </div>
                      {errors.firstName && <p className="text-xs text-red-500 mt-1 ml-1">{errors.firstName.message}</p>}
                    </div>

                    {/* Last Name */}
                    <div className="flex-1 space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-black ml-1" style={{fontFamily:'PT Serif,serif'}}>Last Name</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#D4AF37] transition-colors" size={18} />
                        <input
                          {...register('lastName', { required: 'Last Name is required' })}
                          placeholder="Your Last Name"
                          className={`w-full bg-gray-50 border ${errors.lastName ? 'border-red-300' : 'border-gray-100'} focus:border-[#D4AF37] focus:ring-0 rounded-xl px-12 py-4 text-gray-700 outline-none transition-all`}
                          style={{fontFamily:'PT Serif,serif'}}
                        />
                      </div>
                      {errors.lastName && <p className="text-xs text-red-500 mt-1 ml-1">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-black ml-1" style={{fontFamily:'PT Serif,serif'}}>Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#D4AF37] transition-colors" size={18} />
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        placeholder="email@example.com"
                        className={`w-full bg-gray-50 border ${errors.email ? 'border-red-300' : 'border-gray-100'} focus:border-[#D4AF37] focus:ring-0 rounded-xl px-12 py-4 text-gray-700 outline-none transition-all`}
                        type="email"
                        style={{fontFamily:'PT Serif,serif'}}
                      />
                    </div>
                    {errors.email && <p className="text-xs text-red-500 mt-1 ml-1">{errors.email.message}</p>}
                  </div>

                  {/* Phone with Country Code */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-black ml-1" style={{fontFamily:'PT Serif,serif'}}>Phone Number</label>
                    <Controller
                      name="phone"
                      control={control}
                      rules={{ required: "Phone number is required" }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <PhoneInput
                          defaultCountry="in"
                          value={value || ""}
                          onChange={(phone) => {
                            onChange(phone);
                          }}
                          onBlur={onBlur}
                          className="flex gap-2 w-full"
                          inputClassName={`!w-full !flex-1 !px-2 !py-3 !border !rounded !focus:border-[#d4af37] !outline-none !transition-all !placeholder:text-gray-300 !text-[16px] !text-black !h-auto ${
                            errors.phone
                              ? "!border-red-500"
                              : "!border-gray-300"
                          }`}
                          countrySelectorStyleProps={{
                            buttonClassName: `!w-24 !px-3 !py-3 !border !rounded !bg-white !h-auto !flex !items-center !justify-between !text-sm !text-black !border-gray-300`,
                          }}
                        />
                      )}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1 ml-1">{errors.phone.message}</p>}
                  </div>

                  {/* Enquiry Textbox */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-black ml-1" style={{fontFamily:'PT Serif,serif'}}>Enquiry</label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-6 text-gray-300 group-focus-within:text-[#D4AF37] transition-colors" size={18} />
                      <textarea
                        {...register('enquiry', { required: 'Enquiry details are required' })}
                        placeholder="How can we assist you?"
                        rows={5}
                        className={`w-full bg-gray-50 border ${errors.enquiry ? 'border-red-300' : 'border-gray-100'} focus:border-[#D4AF37] focus:ring-0 rounded-xl px-12 py-4 text-gray-700 outline-none transition-all resize-none`}
                        style={{fontFamily:'PT Serif,serif'}}
                      />
                    </div>
                    {errors.enquiry && <p className="text-xs text-red-500 mt-1 ml-1">{errors.enquiry.message}</p>}
                  </div>

                  <div className='flex w-full gap-4'>

                    {/* Mail Button */}
                    <button
                      onClick={() => setSubmitType('mail')}
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full  relative overflow-hidden group py-4 rounded-xl font-bold tracking-widest text-xs uppercase text-white transition-all duration-300 disabled:bg-gray-400"
                      style={{ background: isSubmitting ? '#9ca3af' : GOLD,fontFamily:'PT Serif,serif' }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting && submitType === 'mail' ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Connect
                            <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
                    </button>

                    
                  </div>

                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;