import React, { useState, useEffect, useRef } from 'react'
import { Landmark, TrendingUp, Users, Globe, Briefcase, FileText, Mail, ArrowRight, ShieldCheck, Search, UserCheck, DollarSign, Award, Star } from 'lucide-react'
import { motion, useInView, animate } from 'framer-motion'

const Counter = ({ to, duration = 2, decimals = 0 }) => {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (isInView) {
            const node = nodeRef.current;
            const controls = animate(0, to, {
                duration,
                onUpdate(value) {
                    node.textContent = value.toFixed(decimals);
                },
            });
            return () => controls.stop();
        }
    }, [isInView, to, duration, decimals]);

    return <span ref={nodeRef}>0</span>;
};

export const Home = () => {
    const goldColor = '#D4AF37';

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const solutions = [
        {
            title: 'About',
            description: 'Our mission, values and leadership.',
            icon: Landmark,
            href: '#'
        },
        {
            title: 'Wealth Advisory',
            description: 'Personalized, research-backed investment advisory.',
            icon: TrendingUp,
            href: '#'
        },
        {
            title: 'Family Office',
            description: 'Structuring, legacy planning, and governance.',
            icon: Users,
            href: '#'
        },
        {
            title: 'NRI Solutions',
            description: 'FDs, remittances, global reporting, and investment guidance.',
            icon: Globe,
            href: '#'
        },
        {
            title: 'Entrepreneur Services',
            description: 'Investment banking, corporate advisory, treasury & cross-border setup.',
            icon: Briefcase,
            href: '#'
        },
        {
            title: 'Insights',
            description: 'Latest market research, reports, and thought leadership.',
            icon: FileText,
            href: '#'
        },
        {
            title: 'Contact',
            description: 'Get in touch with our advisory team.',
            icon: Mail,
            href: '#'
        }
    ]

    const whyChooseUs = [
        {
            title: 'Advisory-led, Not Product-Pushing',
            description: 'We prioritize your interests with unbiased, client-first recommendations.',
            icon: ShieldCheck,
            isHighlighted: false
        },
        {
            title: 'Research-Driven Product Selection',
            description: 'Rigorous due diligence ensures only the best investment solutions.',
            icon: Search,
            isHighlighted: false
        },
        {
            title: 'Holistic Planning & Structuring',
            description: 'Comprehensive wealth structuring aligned with your life goals.',
            icon: UserCheck,
            isHighlighted: false
        },
        {
            title: 'Multi-Currency Reporting',
            description: 'Consolidated global portfolio views across all asset classes and geographies.',
            icon: DollarSign,
            isHighlighted: false
        },
        {
            title: 'Dedicated Relationship Managers',
            description: 'Personalized service with direct access to senior wealth advisors.',
            icon: Award,
            isHighlighted: false
        }
    ]

    const testimonials = [
        {
            quote: "The team provided exceptional guidance on restructuring our family office. Their expertise in succession planning was invaluable.",
            author: "Rajesh M.",
            role: "Family Office Principal"
        },
        {
            quote: "Transparent, research-driven recommendations that align with our long-term objectives. A truly institutional approach.",
            author: "Priya S.",
            role: "Tech Entrepreneur"
        },
        {
            quote: "As an NRI, managing investments across geographies was complex. Their multi-currency reporting simplified everything.",
            author: "Vikram K.",
            role: "NRI Investor, Dubai"
        },
        {
            quote: "Their focus on strategic planning rather than just products has made a significant difference to our wealth growth.",
            author: "Ananya R.",
            role: "Corporate Executive"
        }
    ];

    const stats = [
        { label: "Assets Under Advisory", value: 2.5, prefix: "$", suffix: "B+" },
        { label: "Clients Served", value: 400, suffix: "+" },
        { label: "Years of Excellence", value: 15, suffix: "+" },
        { label: "Client Retention", value: 98, suffix: "%" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const nextIndex = (currentIndex + 1) % testimonials.length;
                const scrollAmount = nextIndex * (container.offsetWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1));

                container.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
                setCurrentIndex(nextIndex);
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, testimonials.length]);

    return (
        <>
            <div className='w-full bg-white'>
                <div className='h-screen w-full flex items-center justify-center'>
                    <h2 className='text-3xl font-light text-gray-400'>Hero Section Placeholder</h2>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-medium text-gray-900 mb-6">
                            Comprehensive Wealth Solutions
                        </h1>
                        <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
                            From investment advisory to family office services, we provide institutional-grade solutions tailored to your financial goals.
                        </p>
                    </div>

                    {/* Service Cards (Flexbox) */}
                    <div className="flex flex-wrap -mx-4">
                        {solutions.map((item, index) => (
                            <div
                                key={index}
                                className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"
                            >
                                <div
                                    className="bg-white border border-gray-100 p-8 flex flex-col items-start transition-all duration-300 min-h-[300px] group hover:bg-[#FFFDF5] hover:border-b-4 hover:border-b-[#D4AF37] hover:shadow-2xl hover:-translate-y-1 h-full"
                                >
                                    {/* Icon Container */}
                                    <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-all duration-300">
                                        <item.icon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
                                    </div>

                                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 font-light leading-relaxed mb-8 grow">
                                        {item.description}
                                    </p>

                                    <a
                                        href={item.href}
                                        className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-[#D4AF37] transition-colors font-medium"
                                    >
                                        Learn more
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Clients Choose Us Section */}
                <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-medium text-gray-900 mb-6">
                            Why Clients Choose Us
                        </h2>
                        <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
                            We combine institutional expertise with personalized service to deliver exceptional wealth management outcomes.
                        </p>
                    </div>

                    {/* Cards Container */}
                    <div className="flex flex-wrap -mx-4">
                        {whyChooseUs.map((item, index) => (
                            <div
                                key={index}
                                className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
                            >
                                <div className={`p-8 border transition-all duration-300 min-h-[280px] flex flex-col items-start h-full group
                                    hover:border-[#D4AF37] shadow-lg hover:-translate-y-1`}
                                >
                                    {/* Icon Container */}
                                    <div className={`w-12 h-12 flex items-center justify-center mb-6  group-hover:bg-[#D4AF37] bg-black group-hover:text-white`}
                                    >
                                        <item.icon className="w-5 h-5 text-white group-hover:text-white" />
                                    </div>

                                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Testimonials & Stats */}
                <div className="py-20 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-medium text-gray-900 mb-6">
                                Trusted by Discerning Clients
                            </h2>
                            <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
                                High-net-worth families and entrepreneurs trust us with their wealth
                            </p>
                        </div>

                        {/* Testimonial Slider */}
                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto space-x-6 pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar"
                            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                        >
                            <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
                            {testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] snap-start px-2"
                                >
                                    <div className="bg-[#fcfdff] p-10 border-l-4 border-[#D4AF37] h-full flex flex-col justify-between">
                                        <div>
                                            <div className="flex gap-1 mb-6">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={16} fill={goldColor} color={goldColor} />
                                                ))}
                                            </div>
                                            <p className="text-gray-600 italic text-lg leading-relaxed mb-10 font-light">
                                                "{item.quote}"
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-900 font-medium text-base mb-1">{item.author}</h4>
                                            <p className="text-gray-400 text-sm font-light">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats Section (Flexbox) */}
                        <div className="mt-20 pt-20 border-t border-gray-100 flex flex-wrap justify-center gap-12 md:gap-24">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl md:text-5xl font-light text-gray-400 mb-2">
                                        {stat.prefix}<Counter to={stat.value} duration={2.5} decimals={stat.value % 1 !== 0 ? 1 : 0} />{stat.suffix}
                                    </div>
                                    <p className="text-gray-400 text-xs tracking-widest uppercase font-light">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
