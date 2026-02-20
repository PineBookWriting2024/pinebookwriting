import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BrandNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [serviceDropdown, setServiceDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const servicesRig = [
        { name: 'Memoir Writing', href: '/Memoir-Writing' },
        { name: 'Non Fiction Writing', href: '/Non-Fiction-Writing' },
        { name: 'Rhymes Writing', href: '/Rhymes-Writing' },
        { name: 'Song Writing', href: '/Song-Writing' },
        { name: 'Story Writing', href: '/Story-Writing' },
        { name: 'Autobiography Writing', href: '/Autobiography-Writing' },
        { name: 'Hip Hop Writing', href: '/Hip-Hop-Writing' },
        { name: 'Narrative Writing', href: '/Narrative-Writing' },
        { name: 'Novel Writing', href: '/Novel-Writing' },
        { name: 'Speech Writing', href: '/Speech-Writing' },
        { name: 'Comedy Writing', href: '/Comedy-Writing' },
        { name: 'Comic Book Writing', href: '/Comic-Book-Writing' },
        { name: 'Military Fiction Writing', href: '/Military-Fiction-Writing' },
        { name: 'Movie Writing', href: '/Movie-Writing' },
        { name: 'Book Editing', href: '/Book-Editing' },
    ];

    const services = [
        { name: 'Book Ghostwriting', href: '/ghostwriting' },
        { name: 'Resume Writing', href: '/resume-writing' },
        { name: 'Social Media Copywriting', href: '/social-media-copywriting' },
        { name: 'Web Copywriting', href: '/web-copywriting' },
        { name: 'SEO Content Writing', href: '/seo-content' },
        { name: 'Blogs & Article Writing', href: '/blog-article-writing' },
        { name: 'PR Writing', href: '/press-release-writing' },
        { name: 'Script Writing', href: '/script-writing' },
        { name: 'Wikipedia Writing', href: '/wikipedia-writing' },
        { name: 'Product Description Writing', href: '/product-description' },
        { name: 'Screen Writing', href: '/Screen-Writing' },
        { name: 'Action Adventure Writing', href: '/Action-Adventure' },
        { name: 'Childrens Books', href: '/Childrens-Books' },
        { name: 'Fantasy Writing', href: '/Fantasy-Writing-Services' },
        { name: 'Horror Writing', href: '/Horror-Writing' },
        { name: 'Sci-Fi Writing', href: '/Sci-Fi-writing' },
        { name: 'Biography Writing', href: '/Biography-Writing' },
        
    ];

    const toggleServiceDropdown = () => {
        setServiceDropdown((prevState) => !prevState);
    };

    const closeServiceDropdown = () => {
        setServiceDropdown(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                if (window.pageYOffset > navbar.offsetTop) {
                    navbar.classList.add('fixed-top');
                } else {
                    navbar.classList.remove('fixed-top');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleOpenChat = () => {
        window.zE && window.zE('webWidget', 'open');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeServiceDropdown();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <header id="navbar" className="absolute left-0 z-20 flex items-center justify-between bg-transparent top-10 md:pb-4">
                <div className='flex items-center justify-between w-full max-w-screen-xl mx-auto'>
                    <div>
                        <Link href="/" onClick={(e) => { e.preventDefault(); window.location.href = "/"; }} className="text-xl font-bold text-white">
                            <Image className='logo' src={'/images/writing-logo.png'} width={200} height={80} alt="brand logo" loading="lazy" />
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="z-20 text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
                            aria-label="Toggle navigation"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                    <nav className={`${isOpen ? 'block' : 'hidden'} absolute flex flex-col bg-gray-900 text-center items-center self-end py-8 mt-2 space-y-6 font-semibold w-full mb-8 top-20 md:top-0 right-0 left-0 md:space-y-0 md:flex md:flex-row md:relative md:bg-transparent md:space-x-4 md:mt-0 md:py-0 md:w-auto md:block`}>
                        <ul className="items-center space-x-4 md:flex">
                            <li className='mb-3 md:mb-0'><Link href="/" onClick={(e) => { e.preventDefault(); window.location.href = "/"; }} className="text-white hover:text-gray-300">Home</Link></li>
                            <li className='mb-3 md:mb-0'><Link href="/about" onClick={(e) => { e.preventDefault(); window.location.href = "about"; }} className="text-white hover:text-gray-300">About Us</Link></li>
                            <li className="relative mb-3 md:mb-0 services-nav-item" ref={dropdownRef}>
                                <div className='flex items-center justify-center gap-2'>
                                    <Link href="/services" onClick={(e) => { e.preventDefault(); window.location.href = "/services"; }} className="flex items-center gap-2 text-white cursor-pointer hover:text-gray-300">
                                        Services
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={toggleServiceDropdown}
                                        className="service-dropdown-trigger"
                                        aria-expanded={serviceDropdown}
                                        aria-label="Toggle services dropdown"
                                    >
                                        <Image
                                            src="/brand-img/down-arrow.png"
                                            alt="Open"
                                            className={`service-dropdown-icon cursor-pointer ${serviceDropdown ? 'is-open' : ''}`}
                                            width={10}
                                            height={10}
                                        />
                                    </button>
                                </div>

                                {serviceDropdown && (
                                    <div className="brand-custom-dropdown-menu" onClick={(e) => e.stopPropagation()}>
                                        <div className="brand-services-dropdown-head">
                                            <h2>Explore Our Writing Services</h2>
                                            <p>Pick a category to see all available writing specialties.</p>
                                        </div>
                                        <div className="brand-services-dropdown-grid">
                                            <div className="brand-service-column">
                                                <ul className="brand-service-list">
                                                    {services.map((service, index) => (
                                                        <li key={index} className='brand-service-list-item'>
                                                            <Link
                                                                href={service.href}
                                                                onClick={(e) => { e.preventDefault(); window.location.href = service.href; }}
                                                                className='brand-service-link'
                                                            >
                                                                <span className="service-link-dot" aria-hidden="true"></span>
                                                                <span>{service.name}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="brand-service-column">
                                                <ul className="brand-service-list">
                                                    {servicesRig.map((service, index) => (
                                                        <li key={index} className='brand-service-list-item'>
                                                            <Link
                                                                href={service.href}
                                                                onClick={(e) => { e.preventDefault(); window.location.href = service.href; }}
                                                                className='brand-service-link'
                                                            >
                                                                <span className="service-link-dot" aria-hidden="true"></span>
                                                                <span>{service.name}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="brand-services-dropdown-footer">
                                            <button type="button" className="talk-to-btn" onClick={handleOpenChat}>
                                                Talk to an Expert
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li className='mb-3 md:mb-0'><Link href="/testimonials" onClick={(e) => { e.preventDefault(); window.location.href = "testimonials"; }} className="text-white hover:text-gray-300">Testimonials</Link></li>
                            <li className='mb-3 md:mb-0'><Link href="/packages" onClick={(e) => { e.preventDefault(); window.location.href = "packages"; }} className="text-white hover:text-gray-300">Packages</Link></li>
                            <li className='mb-3 md:mb-0'><Link href="/portfolio" onClick={(e) => { e.preventDefault(); window.location.href = "portfolio"; }} className="text-white hover:text-gray-300">Portfolio</Link></li>
                            <li className='mb-3 md:mb-0'><Link href="/contact-us" onClick={(e) => { e.preventDefault(); window.location.href = "contact-us"; }} className="text-white hover:text-gray-300">Contact</Link></li>
                            <li><Link href={'javascript:;'} className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 brand-nav-btn font-poppins" onClick={handleOpenChat}>Talk to an Expert</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
