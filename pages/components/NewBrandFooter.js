import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { faArrowRight, faArrowLeft, faPlusCircle, faCheckCircle, faMinusCircle, faPhone, faEnvelope, faLocationArrow, faLocation, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faThreads, faTwitter, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Script from "next/script";


export default function NewBrandFooter() {
    const [isVisible, setIsVisible] = useState(false);

    // Function to toggle visibility based on scroll position
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Function to scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);


    const services = [
        { name: 'Book Ghostwriting', href: '/ghostwriting-service' },
        { name: 'Resume Writing', href: '/resume-writing' },
        { name: 'Social Media Copywriting', href: '/social-media-copywriting' },
        { name: 'Web Copywriting', href: '/web-copywriting' },
        { name: 'SEO Content Writing', href: '/seo-content' },
        { name: 'Blogs & Article Writing', href: '/blog-article-writing' },
        { name: 'PR Writing', href: '/press-release-writing' },
        { name: 'Script Writing', href: '/script-writing' },
        { name: 'Wikipedia Writing', href: '/wikipedia-writing' },
        { name: 'Product Description Writing', href: '/product-description' },
        { name: 'Screen Writing', href: '/screen-writing' },
        { name: 'Action Adventure Writing', href: '/action-adventure-writing' },
    ];

    const servicessecond = [
        { name: 'Childrens Books', href: '/children-book-writing' },
        { name: 'Fantasy Writing', href: '/fantasy-writing-services' },
        { name: 'Horror Writing', href: '/horror-book-writing' },
        { name: 'Sci-Fi Writing', href: '/sci-fi-writing' },
        { name: 'Biography Writing', href: '/biography-writing' },
        { name: 'Memoir Writing', href: '/memoir-writing' },
        { name: 'Non Fiction Writing', href: '/non-fiction-writing' },
        { name: 'Rhymes Writing', href: '/rhymes-writing' },
        { name: 'Song Writing', href: '/song-writing' },
        { name: 'Story Writing', href: '/story-writing' },
        { name: 'Autobiography Writing', href: '/autobiography-writing' },
        { name: 'Hip Hop Writing', href: '/hip-hop-writing' },
    ];

    const servicesthird = [
        { name: 'Narrative Writing', href: '/narrative-writing' },
        { name: 'Novel Writing', href: '/novel-writing' },
        { name: 'Speech Writing Services', href: '/speech-writing-services' },
        { name: 'Comedy Writing', href: '/comedy-writing' },
        { name: 'Comic Book Writing', href: '/comic-book-writing' },
        { name: 'Military Fiction Writing', href: '/military-fiction-writing' },
        { name: 'Movie Writing', href: '/movie-writing' },
        { name: 'Book Editing', href: '/book-editing' },
        { name: 'Book Formatting', href: '/book-formatting-writing' },
        { name: 'Book Self Publishing', href: '/book-self-publishing' },
        { name: 'Proofreading', href: '/proofreading-writing' },
    ];

    const servicesfourth = [







    ]

    return (
        <>
            <footer className="text-white body-font brand-footer">
                <div className="container px-5 py-10 md:pb-10 md:pt-12 mx-auto flex md:flex-row flex-col md:justify-evenly md:gap-9">

                    <div className="md:px-4 widget-2 relative md:flex-row flex-col items-center md:items-start lg:w-1/3 w-full">
                        <a className="flex title-font font-medium items-center justify-start md:justify-center text-white">
                            <Image src={"/brand-img/PineBookWriters.gif"} width={250} height={200}></Image>
                        </a>
                        <p className="text-sm text-white leading-7 py-5 md:px-4 mt-2 md:mb-5 ">
                            Pine Book Writing offers expert ghostwriting services to help new and seasoned authors tell their stories to their audiences worldwide. Our exceptional team of writers, editors, and designers brings years of experience in crafting engaging books that become the best-selling ones.
                        </p>

                    </div>

                    <div className="widget-2 relative lg:w-1/4">
                        <h3 className="title-font text-white tracking-widest text-2xl md:text-2xl mb-3 font-poppins font-bold	">
                            Services
                        </h3>
                        <nav className="list-none md:mb-10 mb-6 md:mt-5">
                            {services.map((service, index) => (
                                <li key={index} className="mt-3">
                                    <Link href={service.href} onClick={(e) => { e.preventDefault(); window.location.href = service.href; }}>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </nav>
                    </div>

                    <div className="widget-2 relative lg:w-1/4">
                        <h3 className="title-font text-white tracking-widest text-2xl md:text-2xl mb-3 font-poppins font-bold opacity-0">
                            Services
                        </h3>
                        <nav className="list-none md:mb-10 mb-6 md:mt-5">
                            {servicessecond.map((service, index) => (
                                <li key={index} className="mt-3">
                                    <Link href={service.href} onClick={(e) => { e.preventDefault(); window.location.href = service.href; }}>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}

                        </nav>
                    </div>

                    <div className="widget-2 relative lg:w-1/4">
                        <h3 className="title-font text-white tracking-widest text-2xl md:text-2xl mb-3 font-poppins font-bold opacity-0">
                            Services
                        </h3>
                        <nav className="list-none md:mb-10 mb-6 md:mt-5">
                            {servicesthird.map((service, index) => (
                                <li key={index} className="mt-3">
                                    <Link href={service.href} onClick={(e) => { e.preventDefault(); window.location.href = service.href; }}>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </nav>
                    </div>

                    <div className="widget-3 relative lg:w-1/4">
                        <h3 className="title-font text-white tracking-widest text-2xl md:text-2xl mb-5 font-poppins font-bold	">
                            Contact Info
                        </h3>
                        <Link
                            href="tel:8668417463"
                            className="text-white text-sm hover:text-white font-poppins flex items-center md:items-start mb-5"
                        >
                            <FontAwesomeIcon icon={faPhone} className="me-3" />
                            (866) 841-7463
                        </Link>
                        <Link
                            href="mailto:support@pinebookwriting.com"
                            className="text-white hover:text-white font-poppins text-sm flex items-center md:items-start mb-5"
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                            {" "}
                            support@pinebookwriting.com{" "}
                        </Link>
                        <h4 className="text-white leading-20 font-bold text-xl  md:text-md font-poppins md:ext-center lg:text-start uppercase">
                            Canada Address:
                        </h4>
                        <p className="text-white mb-5"> R-10225 Yonge St, Suite #250, Richmond Hill, ON L4C 3B2</p>
                        <h4 className="text-white leading-20 font-bold text-xl md:text-md font-poppins md:text-center lg:text-start uppercase">
                            USA Address:
                        </h4>
                        <p className="text-white mb-5">211 E 43rd St, 7th Floor, Suite #424, New York City, NY 10017</p>
                        <div>
                            <Link href="https://www.facebook.com/pinebookwriting0" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} className="me-3" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/pine-book-writing-inc">
                                <FontAwesomeIcon icon={faLinkedin} className="me-3" />
                            </Link>
                            <Link href="https://www.instagram.com/pinebookwriting/" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} className="me-3" />
                            </Link>
                            <Link href="https://x.com/pinebookwriting" target="_blank">
                                <FontAwesomeIcon icon={faXTwitter} className="me-3" />
                            </Link>
                            <Link href="https://www.youtube.com/@Pinebookwriting" target="_blank">
                                <FontAwesomeIcon icon={faYoutube} className="me-3" />
                            </Link>
                            <Link href="https://www.threads.com/@pinebookwriting" target="_blank">
                                <FontAwesomeIcon icon={faThreads} className="me-3" />
                            </Link>
                        </div>

                    </div>

                </div>

                <div className="copyright-sec">
                    <div className="container text-center mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-white w-full md:text-center text-sm sm:text-left">
                            Copyright © 2026 <span className="powered-by-text"><Link href="https://pinetechware.com/" >pintechware.com</Link></span> | All Rights Reserved.
                            <Link
                                href="/terms-and-conditions"
                                rel="noopener noreferrer"
                                className="text-white ml-1"
                                target="_blank"
                            >
                                Terms & Conditions |
                            </Link>
                            <Link
                                href="/privacy-policy"
                                rel="noopener noreferrer"
                                className="text-white ml-1"
                                target="_blank"
                            >
                                Privacy Policy
                            </Link>
                            {/* Powered by <span className="powered-by-text"><Link href="https://www.pinebookwriting.com/" target="_blank">Pine Book Writing Inc.</Link></span> */}
                        </p>
                    </div>
                </div>
            </footer>

            <div>
                {isVisible && (
                    <button onClick={scrollToTop} className="responsive-back-to-top" style={{
                        position: 'fixed',
                        bottom: '29px',
                        right: '120px',
                        height: '40px',
                        width: '40px',
                        textAlign: 'center',
                        backgroundColor: '#fff',
                        color: '#000',
                        borderRadius: '50%',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        boxShadow: '0 0px 5px #191b42',
                        border: '1px solid #288e7f',
                    }}>
                        <Image src={"/brand-img/top-arrow.png"} width={15} height={15}></Image>
                    </button>
                )}
            </div>

            <div id="fixed-social">
                <div>
                    <a href="https://www.facebook.com/pinebookwriting0" class="fixed-facebook" target="_blank"><FontAwesomeIcon icon={faFacebook} color="#316FF6" width={20} /> <span>Facebook</span></a>
                </div>
                <div>
                    <a href="https://x.com/pinebookwriting" class="fixed-twitter" target="_blank"> <FontAwesomeIcon icon={faXTwitter} color="#14171A" width={20} /><span>Twitter</span></a>
                </div>
                <div>
                    <a href="https://www.instagram.com/pinebookwriting/" class="fixed-instagrem" target="_blank"><Image src={"/brand-img/insta-icon.png"} width={16} height={14}></Image><span>Instagram</span></a>
                </div>
                <div>
                    <a href="https://www.youtube.com/@Pinebookwriting" class="fixed-tumblr" target="_blank"><FontAwesomeIcon icon={faYoutube} color="#FF0000" width={20} /><span>Youtube</span></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/company/pine-book-writing-inc" class="fixed-tumblr" target="_blank"><FontAwesomeIcon icon={faLinkedin} color="#0A66C2" width={20} /><span>linkedin</span></a>
                </div>
                <div>
                    <a href="https://www.threads.com/@pinebookwriting" class="fixed-tumblr" target="_blank"><FontAwesomeIcon icon={faThreads} color="#14171A" width={20} /><span>Threads</span></a>
                </div>
            </div>
            {/* <WhatsAppChat /> */}

            <Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=6ad75b0f-d085-4cae-9a7a-48abeb69b973"> </Script>

        </>
    );
}
