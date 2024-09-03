import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { faArrowRight, faArrowLeft, faPlusCircle, faCheckCircle, faMinusCircle, faPhone, faEnvelope, faLocationArrow, faLocation, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

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


    return (
        <>
            <footer className="text-white body-font brand-footer">
                <div className="container px-5 pt-10 pb-10 md:pt-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col position-relative">
                    <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center justify-evenly py-10">
                        <div className="lg:w-1/3 md:w-1/4 w-full px-4 widget-2 relative">
                            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                                <Image src={"/brand-img/logo.png"} width={250} height={200}></Image>
                            </a>
                            <p className="mt-2 text-sm text-white leading-7 px-4">
                            Pine Book Writing offers expert ghostwriting services to help new and seasoned authors tell their stories to their audiences worldwide. Our exceptional team of writers, editors, and designers brings years of experience in crafting engaging books that become the best-selling ones.
                            </p>
                            {/* <nav className="list-none mb-10 mt-5">
                                <li>
                                    <Link
                                        href="tel:8668417469"
                                        className="text-white text-sm hover:text-white font-poppins flex justify-center md:justify-start"
                                    >
                                        <FontAwesomeIcon icon={faPhone} className="me-3" />
                                        (866) 841-7469
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link
                                        href="mailto:support@pinebookpublishing.com"
                                        className="text-white hover:text-white font-poppins text-sm flex justify-center md:justify-start"
                                    >
                                        <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                                        {" "}
                                        support@pinebookpublishing.com{" "}
                                    </Link>
                                </li>
                            </nav> */}
                        </div>
                        <div className="lg:w-1/5 md:w-1/5 w-full px-4 widget-2 relative">
                            <h2 className="title-font text-white tracking-widest text-2xl md:text-2xl mb-3 font-poppins font-bold	">
                                Quick Links
                            </h2>
                            <nav className="list-none mb-10 mt-5">
                                <li>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/about" onClick={(e) => { e.preventDefault(); window.location.href = "/about"; }}>
                                        About Us
                                    </Link>
                                </li>
                                {/* <li className="mt-3">
                                    Services
                                </li> */}
                                <li className="mt-3">
                                    <Link href="/testimonials" onClick={(e) => { e.preventDefault(); window.location.href = "/testimonials"; }}>
                                        Testimonials
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/packages" onClick={(e) => { e.preventDefault(); window.location.href = "/packages"; }}>
                                        Packages
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/portfolio" onClick={(e) => { e.preventDefault(); window.location.href = "/portfolio"; }}>
                                        Portfolio
                                    </Link>
                                </li>
                                {/* <li className="mt-3">
                                    Testimonials
                                </li> */}
                                <li className="mt-3">
                                    <Link href="/contact-us" onClick={(e) => { e.preventDefault(); window.location.href = "/contact-us"; }}>
                                        Contact Us
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/5 md:w-1/5 w-full px-4 widget-2 relative">
                            <h2 className="title-font text-white tracking-widest text-2xl md:text-2xl mb-3 font-poppins font-bold	">
                                Services
                            </h2>
                            <nav className="list-none mb-10 mt-5">
                                <li>
                                    <Link href="/ghostwriting" onClick={(e) => { e.preventDefault(); window.location.href = "/ghostwriting"; }}>
                                    ghostwriting
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/resume-writing" onClick={(e) => { e.preventDefault(); window.location.href = "/resume-writing"; }}>
                                    Resume Writing
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/social-media-copywriting" onClick={(e) => { e.preventDefault(); window.location.href = "/social-media-copywriting"; }}>
                                    social media copywriting
                                    </Link>
                                </li>
                                {/* <li className="mt-3">
                                    Services
                                </li> */}
                                <li className="mt-3">
                                    <Link href="/web-copywriting" onClick={(e) => { e.preventDefault(); window.location.href = "/web-copywriting"; }}>
                                    web copywriting
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/seo-content" onClick={(e) => { e.preventDefault(); window.location.href = "/seo-content"; }}>
                                    seo content
                                    </Link>
                                </li>

                                {/* <li className="mt-3">
                                    Testimonials
                                </li> */}
                                <li className="mt-3">
                                    <Link href="/blog-article-writing" onClick={(e) => { e.preventDefault(); window.location.href = "/blog-article-writing"; }}>
                                    blog article writing
                                    </Link>
                                </li>

                                <li className="mt-3">
                                    <Link href="/press-release-writing" onClick={(e) => { e.preventDefault(); window.location.href = "/press-release-writing"; }}>
                                    press release writing
                                    </Link>
                                </li>
                                
                                <li className="mt-3">
                                    <Link href="/script-writing" onClick={(e) => { e.preventDefault(); window.location.href = "/script-writing"; }}>
                                    script writing
                                    </Link>
                                </li>

                                <li className="mt-3">
                                    <Link href="/wikipedia-writing" onClick={(e) => { e.preventDefault(); window.location.href = "/wikipedia-writing"; }}>
                                    wikipedia writing
                                    </Link>
                                </li>

                                <li className="mt-3">
                                    <Link href="/product-description" onClick={(e) => { e.preventDefault(); window.location.href = "/product-description"; }}>
                                    product description
                                    </Link>
                                </li>
                            </nav>
                        </div>


                        <div className="lg:w-1/4 md:w-1/4 w-full px-4 widget-3 relative">
                            <h2 className="title-font text-white tracking-widest text-2xl md:text-2xl mb-3 font-poppins font-bold	">
                                Contact Info
                            </h2>
                            <Link
                                href="tel:8668417469"
                                className="text-white text-sm hover:text-white font-poppins flex justify-center md:justify-start mb-5"
                            >
                                <FontAwesomeIcon icon={faPhone} className="me-3" />
                                (866) 841-7469
                            </Link>
                            <Link
                                href="mailto:support@pinebookpublishing.com"
                                className="text-white hover:text-white font-poppins text-sm flex justify-center md:justify-start mb-5"
                            >
                                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                                {" "}
                                support@pinebookpublishing.com{" "}
                            </Link>
                            <h4 className="text-white leading-20 font-bold text-xl md:text-md font-poppins text-center lg:text-start uppercase">
                                Canada Address:
                            </h4>
                            <p className="text-white mb-5"> R-10225 Yonge St, Suite #250, Richmond Hill, ON L4C 3B2</p>
                            <h4 className="text-white leading-20 font-bold text-xl md:text-md font-poppins text-center lg:text-start uppercase">
                                USA Address:
                            </h4>
                            <p className="text-white mb-5">211 E 43rd St, 7th Floor, Suite #424, New York City, NY 10017</p>
                            <div>
                                <Link href="https://www.facebook.com/pinebookwriting0" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} className="me-3" />
                                </Link>
                                {/* <Link href="">
                                    <FontAwesomeIcon icon={faLinkedin} className="me-3" />
                                </Link> */}
                                <Link href="https://www.instagram.com/pinebookwriting/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} className="me-3" />
                                </Link>
                                <Link href="https://x.com/pinebookwriting" target="_blank">
                                    <FontAwesomeIcon icon={faXTwitter} className="me-3" />
                                </Link>
                                <Link href="https://www.youtube.com/@Pinebookwriting" target="_blank">
                                    <FontAwesomeIcon icon={faYoutube} className="me-3" />
                                </Link>
                            </div>
                            {/* <nav className="list-none mb-10 mt-5">
                                <li>
                                    <Link href="/book-editing" onClick={(e) => { e.preventDefault(); window.location.href = "/book-editing"; }}>
                                        Book Editing
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/proofreading" onClick={(e) => { e.preventDefault(); window.location.href = "/proofreading"; }}>
                                        Proofreading
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href={'javascript:;'}>
                                        Book Formatting
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href={'javascript:;'}>
                                        Typesetting & Layout
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-publishing" onClick={(e) => { e.preventDefault(); window.location.href = "/book-publishing"; }}>
                                        Book Publishing
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href={'javascript:;'}>
                                        Audio Book
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href={'javascript:;'}>
                                        Print on Demand
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href={'javascript:;'}>
                                        Document Processing
                                    </Link>
                                </li>
                            </nav> */}
                        </div>
                    </div>

                </div>
                <div className="copyright-sec">
                    <div className="container text-center mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-white w-full md:text-center text-sm sm:text-left">
                            Copyright © 2024 |
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
                                Privacy Policy | {" "}
                            </Link>
                            Powered by <span className="powered-by-text"><Link href="https://www.pinebookwriting.com/" target="_blank">Pine Book Writing Inc.</Link></span>
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
            {/* <WhatsAppChat /> */}
        </>
    );
}