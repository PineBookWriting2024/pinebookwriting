import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { faArrowRight, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BrandNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [serviceDropdown, setServiceDropdown] = useState(false);
    const [hoveredService, setHoveredService] = useState(1);
    const dropdownRef = useRef(null); // Create a ref for the dropdown


    const services = [
        { name: 'Book Ghostwriting',
          href: '/ghostwriting',
          icon: '/brand-img/service-icon1.png',
          image: '/brand-img/service-icon1.png',
          desc: 'Craft engaging books aligned with your voice and vision.' },

        { name: 'Resume Writing',
        href: '/resume-writing',
        icon: '/brand-img/service-icon2.png',
        image: '/brand-img/service-icon2.png',
        desc: 'Create noteworthy resumes that spotlight your strengths.' },

        { name: 'Social Media Copywriting',
            href: '/social-media-copywriting',
            icon: '/brand-img/service-icon9.png',
            image: '/brand-img/service-icon9.png',
            desc: 'Produce social media post copies to engage your audience.' },
            
                
        { name: 'Web Copywriting',
            href: '/web-copywriting',
            icon: '/brand-img/service-icon4.png',
            image: '/brand-img/service-icon4.png',
            desc: 'Informative yet promotional web copies that help drive conversion.' },
            
        { name: 'SEO Content Writing',
            href: '/seo-content',
            icon: '/brand-img/service-icon5.png',
            image: '/brand-img/service-icon5.png',
            desc: 'SEO-optimized copywriting to rank your website on SERP.' },


        { name: 'Blogs & Article Writing',
            href: '/blog-article-writing',
            icon: '/brand-img/service-icon6.png',
            image: '/brand-img/service-icon6.png',
            desc: 'Write informative & engaging blog posts and articles.' },


        { name: 'PR Writing',
            href: '/press-release-writing',
            icon: '/brand-img/service-icon7.png',
            image: '/brand-img/service-icon7.png',
            desc: 'Impactful press releases to promote/announce your news & events .' },

        
        { name: 'Script Writing',
            href: '/script-writing',
            icon: '/brand-img/service-icon8.png',
            image: '/brand-img/service-icon8.png',
            desc: 'Expert script writing for product presentations, audios & videos.' },
    

        { name: 'Wikipedia Writing',
            href: '/wikipedia-writing',
            icon: '/brand-img/service-icon3.png',
            image: '/brand-img/service-icon3.png',
            desc: 'Well-researched and well-written Wikipedia articles.' },


        { name: 'Product Description Writing',
            href: '/product-description',
            icon: '/brand-img/service-icon10.png',
            image: '/brand-img/service-icon10.png',
            desc: 'Informative & Persuasive product descriptions to uplift sales.' },
            ];

    // Function to handle the service dropdown toggle
    const toggleServiceDropdown = () => {
        setServiceDropdown(!serviceDropdown);
    };

    const openServiceDropdown = () => {
        setServiceDropdown(true);
    };

    const closeServiceDropdown = () => {
        setServiceDropdown(false);
        setHoveredService(null);
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
    }, [dropdownRef]);

    return (
        <>
            <header id="navbar" className="bg-transparent absolute top-10 left-0 flex justify-between items-center md:pb-4 z-10">
                <div className='max-w-screen-xl flex justify-between items-center mx-auto w-full'>
                    <div>
                        <Link href="/" onClick={(e) => { e.preventDefault(); window.location.href = "/"; }} className="text-xl font-bold text-white">
                            <Image className='logo' src={'/brand-img/PineBookWriters.gif'} width={200} height={80} alt="brand logo" loading="lazy" />
                        </Link>
                    </div>
                    
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 z-20"
                            aria-label="Toggle navigation"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                    <nav className={`${isOpen ? 'block' : 'hidden'} absolute flex flex-col bg-gray-900 text-center items-center self-end py-8 mt-2 space-y-6 font-semibold w-full mb-8 top-20 md:top-0 right-0 left-0 md:space-y-0 md:flex md:flex-row md:relative md:bg-transparent md:space-x-4 md:mt-0 md:py-0 md:w-auto md:block`}>
                        <ul className="md:flex items-center space-x-4">
                            <li className='mb-3 md:mb-0'><Link href="/" onClick={(e) => { e.preventDefault(); window.location.href = "/"; }} className="text-white hover:text-gray-300">Home</Link></li>
                            <li className='mb-3 md:mb-0'><Link href="/about" onClick={(e) => { e.preventDefault(); window.location.href = "about"; }} className="text-white hover:text-gray-300">About Us</Link></li>
                            {/* <li className='mb-3 md:mb-0'><Link href="/services" onClick={(e) => { e.preventDefault(); window.location.href = "services"; }} className="text-white hover:text-gray-300">Services</Link></li> */}
                            <li
                            className="mb-3 md:mb-0"
                                // onMouseEnter={openServiceDropdown}
                                // onMouseLeave={closeServiceDropdown}
                                onClick={toggleServiceDropdown}
                                ref={dropdownRef}
                            // className="relative"
                            >
                                <div className='flex items-center justify-center gap-2'>
                                    <Link href="/services" onClick={(e) => { e.preventDefault(); window.location.href =  "/services"; }} className="cursor-pointer text-white hover:text-gray-300 flex items-center gap-2">
                                        Services
                                    </Link>
                                    <Image src="/brand-img/down-arrow.png" alt="Open" className='service-dropdown-icon cursor-pointer' width={10} height={10} />
                                </div>

                                {serviceDropdown && (
                                    <div className="absolute mt-1 bg-white text-black rounded shadow-lg brand-custom-dropdown-menu flex justify-around">
                                        <ul className="text-start px-4 py-4">
                                            {services.map((service, index) => (
                                                <li
                                                    key={index}
                                                    className='mb-0 flex items-center py-4'
                                                    onMouseEnter={() => setHoveredService(index)}
                                                    onMouseLeave={() => setHoveredService(null)}
                                                >
                                                    <Link href={service.href} onClick={(e) => { e.preventDefault(); window.location.href =  service.href; }}  className='flex items-center w-full'>
                                                        {typeof service.icon === 'string' ? (
                                                            <Image src={service.icon} className="me-3" width={16} height={16} alt={service.name} />
                                                        ) : (
                                                            <FontAwesomeIcon icon={service.icon} className="me-3" width={12} />
                                                        )}
                                                        <div>
                                                            <h3>{service.name}</h3>
                                                            <p>{service.desc}</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className='p-5 hidden md:block lg:block'>
                                            <h2 className='my-4 text-start'>OUR EXPERTS</h2>
                                            <div className='flex gap-4 mt-4 justify-center'>
                                                <div className="brand-meet-team-container text-center flex justify-center flex-col items-center">
                                                    <Image src={"/brand-img/team-1.webp"} width={70} height={70} className="mb-2" />
                                                    <h3 className="text-black leading-20 text-sm font-poppins uppercase">Damon Peters</h3>
                                                </div>
                                                <div className="brand-meet-team-container text-center flex justify-center flex-col items-center">
                                                    <Image src={"/brand-img/team-4.webp"} width={70} height={70} className="mb-2" />
                                                    <h3 className="text-black leading-20 text-sm font-poppins uppercase">AMARA JOHNSON
                                                    </h3>
                                                </div>
                                                <div className="brand-meet-team-container text-center flex justify-center flex-col items-center">
                                                    <Image src={"/brand-img/team-3.webp"} width={70} height={70} className="mb-2" />
                                                    <h3 className="text-black leading-20 text-sm font-poppins uppercase">Steve Hayes
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className='flex gap-4 mt-4 justify-center'>
                                                <div className="brand-meet-team-container text-center flex justify-center flex-col items-center">
                                                    <Image src={"/brand-img/team-2.webp"} width={70} height={70} className="mb-2" />
                                                    <h3 className="text-black leading-20 text-sm font-poppins uppercase">Ryan Peters
                                                    </h3>
                                                </div>
                                                <div className="brand-meet-team-container text-center flex justify-center flex-col items-center">
                                                    <Image src={"/brand-img/team-5.webp"} width={70} height={70} className="mb-2" />
                                                    <h3 className="text-black leading-20 text-sm font-poppins uppercase">Lia Sinclair
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className='mt-4'>
                                                <h2 className='text-start'>TALK TO AN EXPERTS NOW!</h2>
                                                <p className='mb-4 text-start pt-4'>Ready to bring your book to life? Schedule a call with one of our experts now to unlock your book's potential. Your customized solution awaits—don't miss out!</p>
                                                <Link href={'javascript:;'} className="main-button font-poppins mb-5 uppercase" onClick={handleOpenChat}>schedule a call</Link>
                                            </div>
                                        </div>
                                        {/* <div className="flex-shrink-0">
                                            {hoveredService !== null && (
                                                <Image
                                                    src={services[hoveredService].image}
                                                    alt={services[hoveredService].name}
                                                    className='h-full w-full object-cover nav-link-hover-img rounded shadow-lg'
                                                    width={160}
                                                    height={160}
                                                />
                                            )}
                                        </div> */}
                                    </div>
                                )}
                            </li>
                            <li className='mb-3 md:mb-0'><Link href="/testimonials" onClick={(e) => { e.preventDefault(); window.location.href = "testimonials"; }} className="text-white hover:text-gray-300">Testimonials</Link></li>
                            {/* <li
                                // onMouseEnter={openServiceDropdown}
                                // onMouseLeave={closeServiceDropdown}
                                onClick={toggleServiceDropdown}
                                // className="relative"
                            >
                                <Link href={'javascript:;'} className="cursor-pointer text-white hover:text-gray-300 flex items-center gap-2">
                                    Services  <Image src="/brand-img/down-arrow.png" alt="Open" className='service-dropdown-icon' width={10} height={10} />
                                </Link>
                                {serviceDropdown && (
                                    <div className="absolute mt-1 w-full bg-white text-black rounded shadow-lg brand-custom-dropdown-menu flex justify-between">
                                        <ul className="py-1 text-start px-4 py-2">
                                            {services.map((service, index) => (
                                                <li
                                                    key={index}
                                                    className='mb-3 flex items-center'
                                                    onMouseEnter={() => setHoveredService(index)}
                                                    onMouseLeave={() => setHoveredService(null)}
                                                >
                                                    <Link href={service.href} className='flex items-center w-full'>
                                                        {typeof service.icon === 'string' ? (
                                                            <Image src={service.icon} className="me-3" width={16} height={16} alt={service.name} />
                                                        ) : (
                                                            <FontAwesomeIcon icon={service.icon} className="me-3" width={12} />
                                                        )}
                                                        {service.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex-shrink-0">
                                            {hoveredService !== null && (
                                                <Image
                                                    src={services[hoveredService].image}
                                                    alt={services[hoveredService].name}
                                                    className='h-full w-full object-cover nav-link-hover-img rounded shadow-lg'
                                                    width={160}
                                                    height={160}
                                                />
                                            )}
                                        </div>
                                    </div>
                                )}
                            </li> */}
                            <li className='mb-3 md:mb-0'><Link href="/packages" onClick={(e) => { e.preventDefault(); window.location.href = "packages"; }} className="text-white hover:text-gray-300">Packages</Link></li>
                            <li className='mb-3 md:mb-0'><Link href="/portfolio" onClick={(e) => { e.preventDefault(); window.location.href = "portfolio"; }} className="text-white hover:text-gray-300">Portfolio</Link></li>
                            <li className='mb-3 md:mb-0'><Link href="/contact-us" onClick={(e) => { e.preventDefault(); window.location.href = "contact-us"; }} className="text-white hover:text-gray-300">Contact</Link></li>
                            <li><Link href={'javascript:;'} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 brand-nav-btn font-poppins text-sm" onClick={handleOpenChat}>Talk to an Expert</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
