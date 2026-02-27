import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/NavLogo.jpg';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const goldColor = '#D4AF37'; // A solid premium gold color

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

    const loginOptions = [{ label: 'Client Login', target: '_blank', href: 'https://app.tievista.com/wealthspectrum/portal/sign-in' }, { label: 'Employee Login', target: '_blank', href: 'https://app.tievista.com/wealthspectrum/portal/sign-in' }, { label: 'Partner Login', target: '_blank', href: 'https://app.tievista.com/wealthspectrum/portal/sign-in' }]

    const navItems = [
        { label: 'Home', href: '/' },
        // { label: 'Review Your Portfolio', href: '#' },

        {
            label: 'About Us',
            href: '/aboutus',
            hasDropdown: false,
            dropdownItems: [
                { label: 'Mission', href: '/aboutus/mission' },
                { label: 'Differentiators', href: '/aboutus/differentiators' },
                { label: 'Leadership', href: '/aboutus/leadership' },
                { label: 'Presence', href: '/aboutus/presence' },
            ]
        },

        {
            label: 'Investment Universe',
            href: '/investmentuniverse',
            hasDropdown: true,
            dropdownItems: [
                { label: 'Growth Assets', href: '/investmentuniverse#Growth' },
                { label: 'Income & Capital Preservation', href: '/investmentuniverse#Income' },
                { label: 'Private & Alternative Investments', href: '/investmentuniverse#Private' },
                { label: 'Global & GIFT City Solutions', href: '/investmentuniverse#Global' },
            ]
        },
        {
            label: 'Services',
            href: '/services',
            hasDropdown: true,
            dropdownItems: [
                { label: 'Family Office Structuring', href: '/services/family-office-structuring' },
                { label: 'Succession & Estate Planning', href: '/services/succession-estate-planning' },
                { label: 'Governance', href: '/services/governance' },
                { label: 'Tax & Repatriation', href: '/services/tax-repatriation' },
            ]
        },

        {
            label: 'NRI Solutions',
            href: '/nri-solutions',
            hasDropdown: true,
            dropdownItems: [
                { label: 'NRI Fixed Deposits', href: '/nri-solutions/nri-fixed-deposits' },
                { label: 'Remittance Solutions', href: '/nri-solutions/remittance-solutions' },
                { label: 'Global Multi-Currency Reporting', href: '/nri-solutions/global-multi-currency-reporting' },
                { label: 'Global Investment', href: '/nri-solutions/global-investment' },
            ]
        },
        {
            label: 'Insights',
            href: '/insights', hasDropdown: true,
            dropdownItems: [
                { label: 'Videos', href: '/insights/videos' },
                { label: 'Blogs', href: '/insights/blogs' },
            ]
        },

        {
            label: 'Contact Us',
            href: '/contact',
            hasDropdown: true,
            dropdownItems: [
                { label: 'Enquiry Form', href: '/contact/enquiry' },
                { label: 'Offices', href: '/contact/offices' },
                { label: 'Social Links', href: '/contact/social' },
            ]
        },
        {
            label: 'Invest Now',
            href: '/invest-now',
            hasDropdown: true,
            dropdownItems: [
                { label: 'Mutual Funds', href: 'https://app.tievista.com/wealthspectrum/portal/sign-in' },
                { label: 'Stocks', href: '/invest-now/stocks' },
                { label: 'International Investments', href: 'https://portal.kristal.ai/login', target: '_blank' },
            ]
        },
    ];

    return (
        <div className="w-full sticky top-0 z-[100] shadow-sm">
            <nav className="bg-white border-b w-full border-gray-100 px-4 sm:px-8 lg:px-12 xl:px-20">
                <div className="max-w-[1600px] mx-auto">
                    <div className="flex justify-between items-center h-20 space-x-6">
                        {/* Logo Section */}
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}><div className="flex items-center gap-3">
                            <div className=" w-27 h-27 flex items-center justify-center">
                                <div className="w-20 h-20 flex items-center justify-center">
                                    <img className='h-full w-full object-contain' src={logo} alt="" />
                                </div>
                            </div>
                        </div></Link>

                        {/* Desktop Navigation */}
                        <div className="hidden xl:flex items-center space-x-6">
                            {navItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative group"
                                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link to={item.href}>
                                        <button className="flex items-center gap-1 text-[18px] font-normal text-gray-700 hover:text-[#D4AF37] transition-colors hover:cursor-pointer">
                                            {item.label}
                                            {item.hasDropdown && (
                                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                                            )}
                                        </button>
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {item.hasDropdown && item.dropdownItems && activeDropdown === item.label && (
                                        <div className="absolute left-0 mt-0 w-64 bg-white shadow-xl border border-gray-100 rounded-sm z-50">
                                            {item.dropdownItems.map((dropItem, dIndex) => (
                                                <Link
                                                    key={dIndex}
                                                    to={dropItem.href}
                                                    {...(dropItem.target ? { target: dropItem.target } : {})}
                                                    className={`block px-6 py-3 text-sm text-gray-600 hover:text-[#D4AF37] hover:bg-gray-50`}
                                                >
                                                    {dropItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Login Button with Dropdown */}
                        <div
                            className="hidden xl:flex relative group justify-center items-center"
                            onMouseEnter={() => setActiveDropdown('Login')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button
                                className="px-8 py-2 border text-sm font-medium transition-all duration-300 hover:bg-[#D4AF37] hover:text-white hover:cursor-pointer "
                                style={{
                                    borderColor: goldColor,
                                    color: activeDropdown === 'Login' ? 'white' : goldColor,
                                    backgroundColor: activeDropdown === 'Login' ? goldColor : 'transparent'
                                }}
                            >
                                Login
                            </button>

                            {/* Login Dropdown Menu */}
                            {activeDropdown === 'Login' && (
                                <div className="absolute top-full right-0 mt-0 w-48 bg-white shadow-xl border border-gray-100 rounded-sm z-50 overflow-hidden">
                                    {loginOptions.map((item, idx) => (
                                        <a
                                            key={idx}
                                            href={item.href}
                                            target={item.target}
                                            className={`block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors`}
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <div className="xl:hidden flex items-center">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-600 p-2"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="xl:hidden bg-white border-t border-gray-100 overflow-hidden"
                        >
                            <div className="max-h-[70vh] overflow-y-auto py-4 px-4 space-y-1">
                                {navItems.map((item, index) => (
                                    <div key={index} className="border-b border-gray-50 last:border-none">
                                        <div className="flex items-center justify-between w-full">
                                            <Link
                                                to={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="flex-grow py-4 text-[15px] font-medium text-gray-700 hover:text-black hover:bg-gray-50 px-2 rounded-md transition-all"
                                            >
                                                {item.label}
                                            </Link>
                                            {item.hasDropdown && (
                                                <button
                                                    onClick={() => setActiveMobileDropdown(activeMobileDropdown === item.label ? null : item.label)}
                                                    className="p-4 text-gray-400 hover:text-black transition-colors"
                                                >
                                                    <motion.div
                                                        animate={{ rotate: activeMobileDropdown === item.label ? 180 : 0 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <ChevronDown size={18} />
                                                    </motion.div>
                                                </button>
                                            )}
                                        </div>

                                        <AnimatePresence>
                                            {item.hasDropdown && activeMobileDropdown === item.label && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pl-6 pb-4 space-y-1 mt-1 border-l-2 ml-2" style={{ borderColor: goldColor }}>
                                                        {item.dropdownItems.map((dropItem, dIndex) => (
                                                            <Link
                                                                key={dIndex}
                                                                to={dropItem.href}
                                                                {...(dropItem.target ? { target: dropItem.target } : {})}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="block py-3 text-sm text-gray-500 hover:text-[#D4AF37] transition-colors"
                                                            >
                                                                {dropItem.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}

                                {/* Mobile Login Button Container */}
                                <div className="pt-6 pb-20 border-t border-gray-100 mt-4">
                                    <button
                                        onClick={() => setActiveMobileDropdown(activeMobileDropdown === 'Login' ? null : 'Login')}
                                        className="w-full py-4 border text-[15px] font-medium rounded-sm flex justify-between items-center px-4"
                                        style={{ borderColor: goldColor, color: goldColor }}
                                    >
                                        Login
                                        <motion.div
                                            animate={{ rotate: activeMobileDropdown === 'Login' ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronDown size={16} />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {activeMobileDropdown === 'Login' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden bg-gray-50/50 mt-2 rounded-sm"
                                            >
                                                {loginOptions.map((option, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={option.href}
                                                        target={option.target}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="block px-6 py-4 text-sm text-gray-600 hover:text-[#D4AF37] hover:bg-gray-100 transition-colors"
                                                    >
                                                        {option.label}
                                                    </a>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
};
{/* 
    Home
    About us
    Investment Universe
    Services
    Insights -> [Videos/blogs]
    Contact
*/}
