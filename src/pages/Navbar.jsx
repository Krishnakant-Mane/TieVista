import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/TieVistaLogo.png';
import { Link } from 'react-router-dom';

const GOLD = '#D4AF37';

const DROPDOWN_VARIANTS = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.2, ease: 'easeInOut' } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.15, ease: 'easeInOut' } },
};

const MOBILE_MENU_VARIANTS = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.25, ease: 'easeInOut' } },
};

// ─── Desktop Dropdown ───────────────────────────────────────────────────────
const DesktopDropdown = ({ items, depth = 0 }) => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const ref = useRef(null);
    const [flipLeft, setFlipLeft] = useState(false);

    useEffect(() => {
        if (ref.current && depth > 0) {
            const rect = ref.current.getBoundingClientRect();
            if (rect.right > window.innerWidth) {
                setFlipLeft(true);
            }
        }
    }, [depth]);

    return (
        <div
            ref={ref}
            className={`absolute z-50 ${
                depth === 0
                    ? 'top-full left-1/2 -translate-x-1/2 pt-4'
                    : flipLeft
                        ? 'right-full top-0 pr-2'
                        : 'left-full top-0 pl-2'
            }`}
            onMouseLeave={() => setHoveredItem(null)}
        >
            <div className="bg-white shadow-xl border border-gray-100 rounded-xl py-2 w-56 relative">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="relative group/sub"
                        onMouseEnter={() => setHoveredItem(item.hasDropdown ? item.label : null)}
                    >
                        <Link
                            to={item.href}
                            {...(item.target ? { target: item.target } : {})}
                            className="flex items-center justify-between px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-[#D4AF37] hover:bg-gray-50 transition-colors"
                        >
                            <span>{item.label}</span>
                            {item.hasDropdown && (
                                <ChevronDown
                                    size={14}
                                    className="-rotate-90 text-gray-400 group-hover/sub:text-[#D4AF37]"
                                />
                            )}
                        </Link>
                        {item.hasDropdown && hoveredItem === item.label && (
                            <DesktopDropdown items={item.dropdownItems} depth={depth + 1} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// ─── Desktop Nav Item ────────────────────────────────────────────────────────
const DesktopNavItem = ({ item, isActive, onEnter, onLeave }) => (
    <div
        className="relative group h-full flex items-center" style={{ fontFamily: 'PT Serif, serif' }}
        onMouseEnter={() => item.hasDropdown && onEnter(item.label)}
        onMouseLeave={onLeave}
    >
        <Link to={item.href} className="h-full flex items-center">
            <button
                className="flex items-center gap-1.5 text-[16px] font-medium text-gray-800 hover:text-[#D4AF37] transition-colors hover:cursor-pointer"
                aria-haspopup={item.hasDropdown ? 'true' : undefined}
                aria-expanded={item.hasDropdown ? String(isActive) : undefined}
            >
                {item.label}
                {item.hasDropdown && (
                    <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                    />
                )}
            </button>
        </Link>

        {item.hasDropdown && isActive && (
            <DesktopDropdown items={item.dropdownItems} />
        )}
    </div>
);

// ─── Mobile Nav Item ─────────────────────────────────────────────────────────
const MobileNavItem = ({ item, isOpen, onToggle, onClose, depth = 0 }) => {
    const [activeSubDropdown, setActiveSubDropdown] = useState(null);

    const toggleSubDropdown = (label) => {
        setActiveSubDropdown(prev => prev === label ? null : label);
    };

    return (
        <div className={`border-b border-gray-50 last:border-none ${depth > 0 ? 'border-none' : ''}`}>
            <div className="flex items-center justify-between w-full" style={{ fontFamily: 'PT Serif, serif' }}>
                <Link
                    to={item.href}
                    onClick={onClose}
                    className={`flex-grow py-3 text-gray-800 hover:text-[#D4AF37] hover:bg-gray-50 px-3 rounded-lg transition-all ${depth === 0 ? 'text-[16px] font-medium' : 'text-[15px] font-normal text-gray-600'}`}
                >
                    {item.label}
                </Link>
                {item.hasDropdown && (
                    <button
                        onClick={onToggle}
                        className="p-3 text-gray-500 hover:text-[#D4AF37] transition-colors"
                        aria-expanded={String(isOpen)}
                        aria-label={`Toggle ${item.label} submenu`}
                    >
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown size={18} />
                        </motion.div>
                    </button>
                )}
            </div>

            <AnimatePresence>
                {item.hasDropdown && isOpen && (
                    <motion.div
                        variants={DROPDOWN_VARIANTS}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden"
                    >
                        <div className="pl-6 pb-2 space-y-1 mt-1 border-l-2 ml-4" style={{ borderColor: GOLD }}>
                            {item.dropdownItems.map((dropItem, i) => (
                                <MobileNavItem
                                    key={i}
                                    item={dropItem}
                                    depth={depth + 1}
                                    isOpen={activeSubDropdown === dropItem.label}
                                    onToggle={() => toggleSubDropdown(dropItem.label)}
                                    onClose={onClose}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// ─── Main Navbar ─────────────────────────────────────────────────────────────
export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

    const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
    const openDropdown = useCallback((label) => setActiveDropdown(label), []);
    const closeDropdown = useCallback(() => setActiveDropdown(null), []);
    const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);
    const toggleMobileDropdown = useCallback(
        (label) => setActiveMobileDropdown((prev) => (prev === label ? null : label)),
        []
    );

    const loginOptions = useMemo(() => [
        { label: 'Client Login', target: '_blank', href: 'https://app.tievista.com/wealthspectrum/portal/sign-in' },
        { label: 'Employee Login', target: '_blank', href: 'https://app.tievista.com/wealthspectrum/portal/sign-in' },
        { label: 'Partner Login', target: '_blank', href: 'https://app.tievista.com/wealthspectrum/portal/sign-in' },
    ], []);

    const navItems = useMemo(() => [
        { label: 'Home', href: '/' },
        {
            label: 'TieVista Partners',
            href: '/partners',
            hasDropdown: false,
            dropdownItems: [
                { label: '', href: '' },
            ],
        },
        {
            label: 'Investment Access',
            href: '/investmentaccess',
            hasDropdown: false,
            dropdownItems: [
                { label: 'Growth Assets', href: '/investmentaccess#Growth' },
                { label: 'Income & Capital Preservation', href: '/investmentaccess#Income' },
                { label: 'Private & Alternative Investments', href: '/investmentaccess#Private' },
            ],
        },
        {
            label: 'Knowledge Repository',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                { label: 'Blogs', href: '/blogs' },
                { label: 'Publications', href: '/publications' },
            ],
        },
        
    ], []);

    const isLoginActive = activeDropdown === 'Login';

    return (
        <div className="w-full fixed top-4 sm:top-6 left-0 z-[100] px-4 sm:px-6 lg:px-8 transition-all duration-300">
            <nav className={`bg-white w-full max-w-[1400px] mx-auto shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 px-5 sm:px-8 lg:px-10 transition-all duration-300 ${
                isMobileMenuOpen ? 'rounded-[2rem]' : 'rounded-3xl'
            }`}>
                <div className="flex justify-between items-center h-16 lg:h-[65px] relative">

                    {/* Logo */}
                    <Link to="/" onClick={closeMobileMenu} className="shrink-0 z-10 flex items-center h-full">
                        <div className="h-10 lg:h-12 w-auto flex items-center justify-center">
                            <img className="h-full w-auto object-contain" src={logo} alt="TieVista Logo" />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden xl:flex flex-1 justify-center items-center space-x-30 h-full">
                        {navItems.map((item, i) => (
                            <DesktopNavItem
                                key={i}
                                item={item}
                                isActive={activeDropdown === item.label}
                                onEnter={openDropdown}
                                onLeave={closeDropdown}
                            />
                        ))}
                    </div>

                    {/* Desktop Login */}
                    <div
                        className="hidden xl:flex shrink-0 relative group justify-end items-center h-full z-10"
                        onMouseEnter={() => openDropdown('Login')}
                        onMouseLeave={closeDropdown}
                    >
                        <button
                            className="px-7 py-2.5 border rounded-sm text-[15px] font-medium transition-all duration-300 hover:cursor-pointer"
                            style={{
                                borderColor: GOLD,
                                color: isLoginActive ? 'white' : GOLD,
                                backgroundColor: isLoginActive ? GOLD : 'transparent',
                            }}
                            aria-haspopup="true"
                            aria-expanded={String(isLoginActive)}
                        >
                            Login
                        </button>

                        {isLoginActive && (
                            <div className="absolute top-full right-0 pt-4 z-50">
                                <div className="w-56 bg-white shadow-xl border border-gray-100 rounded-xl py-2 overflow-hidden">
                                    {loginOptions.map((item, i) => (
                                        <a
                                            key={i}
                                            href={item.href}
                                            target={item.target}
                                            className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors poppins-sans"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="xl:hidden flex items-center shrink-0 z-10">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-700 p-2 focus:outline-none hover:text-[#D4AF37] transition-colors"
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={String(isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            variants={MOBILE_MENU_VARIANTS}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="xl:hidden bg-white border-t border-gray-100 overflow-hidden"
                        >
                            <div className="max-h-[70vh] overflow-y-auto py-4 px-2 space-y-2 pb-6">
                                {navItems.map((item, i) => (
                                    <MobileNavItem
                                        key={i}
                                        item={item}
                                        isOpen={activeMobileDropdown === item.label}
                                        onToggle={() => toggleMobileDropdown(item.label)}
                                        onClose={closeMobileMenu}
                                    />
                                ))}

                                {/* Mobile Login */}
                                <div className="pt-6 mt-4 px-3 border-t border-gray-100">
                                    <button
                                        onClick={() => toggleMobileDropdown('Login')}
                                        className="w-full py-3.5 border rounded-lg text-[16px] font-medium flex justify-between items-center px-5 transition-all"
                                        style={{ borderColor: GOLD, color: GOLD }}
                                        aria-expanded={String(activeMobileDropdown === 'Login')}
                                    >
                                        Login
                                        <motion.div
                                            animate={{ rotate: activeMobileDropdown === 'Login' ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronDown size={18} />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {activeMobileDropdown === 'Login' && (
                                            <motion.div
                                                variants={DROPDOWN_VARIANTS}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                className="overflow-hidden bg-gray-50/50 mt-2 rounded-lg"
                                            >
                                                {loginOptions.map((option, i) => (
                                                    <a
                                                        key={i}
                                                        href={option.href}
                                                        target={option.target}
                                                        onClick={closeMobileMenu}
                                                        className="block px-6 py-4 text-sm font-medium text-gray-700 hover:text-[#D4AF37] hover:bg-gray-100 transition-colors poppins-sans"
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