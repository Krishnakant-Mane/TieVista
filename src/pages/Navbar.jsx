import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const loginOptions = [{ label: 'Client Login', target: '_blank', href: 'https://app.tievista.com/wealthspectrum/portal/sign-in' }, { label: 'Employee Login', target: '_blank', href: 'https://app.tievista.com/wealthspectrum/portal/sign-in' }, { label: 'Partner Login', target: '_blank', href: 'https://app.tievista.com/wealthspectrum/portal/sign-in' }]

    const navItems = [
        { label: 'Home', href: '#' },
        // { label: 'Review Your Portfolio', href: '#' },

        {
            label: 'About',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                { label: 'Mission', href: '#' },
                { label: 'Differentiators', href: '#' },
                { label: 'Leadership', href: '#' },
                { label: 'Presence', href: '#' },
            ]
        },

        {
            label: 'Wealth Advisory',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                { label: 'How We Work', href: '#' },
                { label: 'Investment Universe', href: '#' },
                { label: 'Reporting', href: '#' },
                { label: 'Risk Management', href: '#' },
                { label: 'Portfolio Review CTA', href: '#' },
            ]
        },
        {
            label: 'Family Office',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                { label: 'Family Office Structuring', href: '#' },
                { label: 'Succession & Estate Planning', href: '#' },
                { label: 'Governance', href: '#' },
                { label: 'Tax & Repatriation', href: '#' },
            ]
        },

        {
            label: 'NRI Solutions',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                { label: 'NRI Fixed Deposits', href: '#' },
                { label: 'Remittance Solutions', href: '#' },
                { label: 'Global Multi-Currency Reporting', href: '#' },
                { label: 'Global Investment Advisory', href: '#' },
            ]
        },

        {
            label: 'Entrepreneur Services',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                { label: 'Investment Banking', href: '#' },
                { label: 'Corporate Advisory', href: '#' },
                { label: 'Treasury Management', href: '#' },
                { label: 'Cross-Border Business Setup', href: '#' },
            ]
        },
        {
            label: 'Insights',
            href: '#', hasDropdown: true,
            dropdownItems: [
                { label: 'Family Office Structuring', href: '#' },
                { label: 'Succession & Estate Planning', href: '#' },
                { label: 'Governance', href: '#' },
                { label: 'Tax & Repatriation', href: '#' },
            ]
        },

        {
            label: 'Contact',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                { label: 'Enquiry Form', href: '#' },
                { label: 'Offices', href: '#' },
                { label: 'Social Links', href: '#', isHighlighted: true },
            ]
        },
    ];

    const goldColor = '#D4AF37'; // A solid premium gold color

    return (
        <div className="w-full sticky top-0 z-50 shadow-sm">
            <nav className="bg-white border-b w-full border-gray-100 px-4 sm:px-8 lg:px-12 xl:px-20">
                <div className="max-w-[1600px] mx-auto">
                    <div className="flex justify-between items-center h-20 space-x-6">
                        {/* Logo Section */}
                        <div className="flex items-center gap-3">
                            <div className="bg-black w-10 h-10 flex items-center justify-center">
                                <div className="w-5 h-5">
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <span className="text-2xl font-medium text-[#1a1a1a]">TieVista</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden xl:flex items-center space-x-6">
                            {navItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative group"
                                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <button className="flex items-center gap-1 text-[15px] font-normal text-gray-700 hover:text-black transition-colors hover:cursor-pointer">
                                        {item.label}
                                        {item.hasDropdown && (
                                            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                                        )}
                                    </button>

                                    {/* Dropdown Menu */}
                                    {item.hasDropdown && item.dropdownItems && activeDropdown === item.label && (
                                        <div className="absolute left-0 mt-0 w-64 bg-white shadow-xl border border-gray-100 rounded-sm z-50">
                                            {item.dropdownItems.map((dropItem, dIndex) => (
                                                <a
                                                    key={dIndex}
                                                    href={dropItem.href}
                                                    className={`block px-6 py-3 text-sm text-gray-600 hover:text-[${goldColor}] hover:bg-gray-50`}
                                                >
                                                    {dropItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Login Button with Dropdown */}
                        <div
                            className="relative group flex justify-center items-center"
                            onMouseEnter={() => setActiveDropdown('Login')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button
                                className="px-8 py-2 border text-sm font-medium transition-all duration-300 hover:bg-[#D4AF37] hover:text-white hover:cursor-pointer"
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
                                            className={`block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[${goldColor}] transition-colors`}
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
                {isMobileMenuOpen && (
                    <div className="xl:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-1 shadow-lg">
                        {navItems.map((item, index) => (
                            <div key={index}>
                                <button className="flex items-center justify-between w-full py-3 text-sm text-gray-700 hover:text-black hover:bg-gray-50 px-2 rounded-md">
                                    {item.label}
                                    {item.hasDropdown && <ChevronDown size={14} />}
                                </button>
                                {item.hasDropdown && item.dropdownItems && (
                                    <div className="pl-6 space-y-1 mt-1 border-l-2 ml-2" style={{ borderColor: goldColor }}>
                                        {item.dropdownItems.map((dropItem, dIndex) => (
                                            <a
                                                key={dIndex}
                                                href={dropItem.href}
                                                className="block py-2 text-xs text-gray-500 hover:text-black"
                                            >
                                                {dropItem.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-4 border-t border-gray-100 mt-4">
                            <button
                                className="w-full py-3 border text-sm font-medium rounded-sm"
                                style={{ borderColor: goldColor, color: goldColor }}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};
{/* <Eplyoee></Eplyoee>
client
patner login */}