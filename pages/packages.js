import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import BrandFooter from "./components/BrandFooter";
import BrandNavbar from "./components/BrandNavbar";
import BrandBannerLogo from "./components/BrandBannerLogo";
import BrandChooseUs from "./components/BrandChooseUs";
import BrandContact from "./components/BrandContactForm";
import BrandPrimaryHeader from "./components/BrandPrimaryHeader";
import Popup from "./components/popup";
import BrandProcess from "./components/BrandProcess";
import NewServicesBrand from "./components/NewServicesBrand";
import Packages from "./components/Packages";
import { faArrowRight, faArrowLeft, faPlusCircle, faCheckCircle, faMinusCircle, faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopupBundle from "./components/PopupBundle";
import BrandFaqs from "./components/BrandFaqs";
import NewBrandFooter from "./components/NewBrandFooter";
import BrandTopBar from "./components/BrandTopBar";


export default function Bundle({ isOpen, onClose, service }) {
    const [openFAQ, setOpenFAQ] = useState(0);
    const [showPackages, setShowPackages] = useState(false);
    const [showPackages2, setShowPackages2] = useState(false);
    const [collapseOpen1, setCollapseOpen1] = useState(false);
    const [collapseOpen2, setCollapseOpen2] = useState(false);

    const contentRef = useRef(null);

    const togglePackages2 = () => {
        setShowPackages2(!showPackages2);
        setCollapseOpen2(!collapseOpen2);
    };

    const togglePackages = () => {
        setShowPackages(!showPackages);
        setCollapseOpen1(!collapseOpen1);
    };

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');


    const openModal = (service) => {
        setSelectedService(service);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleOpenChat = () => {
        window.zE && window.zE('webWidget', 'open');
    };




    const faqData = [
        { question: "What genres does Pine Book Writing specialize in?", answer: "We pride ourselves on our versatility and can assist with a wide range of genres, including fiction, non-fiction, memoirs, and more." },
        { question: "How does the publishing process work with Pine Book Writing?", answer: "Our process begins with an initial consultation to discuss your project's goals and requirements. From there, we'll work closely with you every step of the way, from manuscript development to final publication." },
        { question: "What level of involvement will I have in the editing process?", answer: "Your level of involvement is entirely up to you. We offer collaborative editing services, where you'll have the opportunity to provide feedback and input throughout the editing process." },
        { question: "How long does it typically take to publish a book with Pine Book Writing?", answer: "The timeline can vary depending on the scope of your project and our current workload. However, we strive to work efficiently without compromising quality, aiming to deliver your finished product within a reasonable timeframe." },
        { question: "What sets Pine Book Writing apart from other publishing services?", answer: "At Pine Book Writing, we prioritize personalized attention, expert guidance, and transparent communication. Our goal is not just to publish your book but to ensure it's the best it can be, tailored to your unique vision and goals." },
        { question: "What pricing options are available for your services?", answer: "We offer competitive pricing packages tailored to fit your budget and project needs. Our rates are transparent, and we're happy to provide a detailed quote based on the specific services you require." }
    ];

    return (
        <>
            <Head>
                <title>Bundles the Company | Pine Book Writing</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/packages" />

                <meta
                    name="description"
                    content="Everything about Pine Book Writing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            {/* <Popup isOpen={isModalOpen} onClose={closeModal} service={selectedService} /> */}
            <PopupBundle isOpen={isModalOpen} onClose={closeModal} service={selectedService} />
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"brand-img/bundles-banner.jpg"}
                title="Check Out Our Affordable Writing Service Packages"
                desc="Explore our writing services plans and choose the one that best suits your needs. We always prioritize customer satisfaction and retention for the future, so we offer affordable writing services while maintaining the quality of work."
            />
            <BrandBannerLogo />



            <section className="package pb-5 pt-12">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="grid items-center grid-cols-1 text-center m1-h">
                        <h3 className="text-3xl font-poppins md:text-4xl font-bold">
                            Packages
                        </h3>
                    </div>
                </div>
            </section>

            <section className="bg-white pt-5 pb-5 mb-20">
                <div className="width-container">
                    <div className="container mx-auto">
                        <div className="packages-wrapper flex flex-col md:flex-row justify-center gap-12">
                            <div className="single-packages relative">

                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Basic Bundle</h4>
                                <div className="single-packages-content px-10">
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Creating The Outline
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Writing (Upto 100 pages)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Editing & Proofreading
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Typesetting & Layout Adjustment
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Formatting (for 50+ Platforms)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Multiple Revisions
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Royalties & Ownership Rights
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="package-get-started-btn text-md mt-7" onClick={() => openModal('Basic')}>
                                        GET A QUOTE
                                    </button>
                                </div>

                                <div className="single-packages-footer flex  w-100 justify-center">
                                    <div >
                                        <h5 className="text-xl">Share your idea!</h5>
                                        <p className="text-md text-black"><Link href="tel:(866)-841-7463">(866)-841-7463</Link></p>
                                    </div>
                                    <span className="border-line mx-8"></span>
                                    <div>
                                        <h5 className="text-xl">Want to discuss?</h5>
                                        <button className="text-md text-black blink_me pl-2" onClick={handleOpenChat}>Live Chat Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="single-packages relative">
                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Start Up Package</h4>
                                <div className="single-packages-content px-10">
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Creating The Outline
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Writing (Upto 150 pages)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Editing & Proofreading
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Typesetting & Layout Adjustment
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Formatting (for 50+ Platforms)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Multiple Revisions
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Royalties & Ownership Rights
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Creative Cover Art
                                    </div>

                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Price Encrypted Barcode
                                    </div>

                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Publishing on Kindle
                                    </div>

                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        eBook Format
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="package-get-started-btn text-md mt-7" onClick={() => openModal('Start up')}>
                                        GET A QUOTE
                                    </button>
                                </div>
                                <div className="single-packages-footer flex  w-100 justify-center">
                                    <div >
                                        <h5 className="text-xl">Share your idea!</h5>
                                        <p className="text-md text-black"><Link href="tel:(866)-841-7463">(866)-841-7463</Link></p>
                                    </div>
                                    <span className="border-line mx-8"></span>
                                    <div>
                                        <h5 className="text-xl">Want to discuss?</h5>
                                        <button className="text-md text-black blink_me pl-2" onClick={handleOpenChat}>Live Chat Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="single-packages relative">
                                <Image src={"/images/badge.png"} className="package-badge" width={80} height={80}></Image>
                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Standard Package</h4>
                                <div className="single-packages-content px-10">

                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Creating The Outline
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Writing (Upto 250 pages)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Editing & Proofreading
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Typesetting & Layout Adjustment
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Formatting (for 50+ Platforms)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Multiple Revisions
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Royalties & Ownership Rights
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Creative Cover Art
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        ISBN (International Standard Book Number)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Publishing on Amazon and Kindle (with Optimization)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        eBook and Paperback Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        2 Paperback Copies
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="package-get-started-btn text-md mt-7" onClick={() => openModal('Standard')}>
                                        GET A QUOTE
                                    </button>
                                </div>

                                <div className="single-packages-footer flex  w-100 justify-center">
                                    <div >
                                        <h5 className="text-xl">Share your idea!</h5>
                                        <p className="text-md text-black"><Link href="tel:(866)-841-7463">(866)-841-7463</Link></p>
                                    </div>
                                    <span className="border-line mx-8"></span>
                                    <div>
                                        <h5 className="text-xl">Want to discuss?</h5>
                                        <button className="text-md text-black blink_me pl-2" onClick={handleOpenChat}>Live Chat Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="packages-wrapper flex flex-col md:flex-row justify-center gap-12 mt-20">
                            <div className="single-packages relative">
                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Professional Package</h4>
                                <div className="single-packages-content px-10">

                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Creating The Outline
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Writing (Upto 350 pages)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Editing & Proofreading
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Typesetting & Layout Adjustment
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Formatting (for 50+ Platforms)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Multiple Revisions
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Royalties & Ownership Rights
                                    </div>

                                    <div className="flex gap-2 mb-5 items-center ">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Creative Cover Art
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Price Encrypted Barcode
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        ISBN (International Standard Book Number)
                                    </div>

                                    <div className="flex gap-2 mb-5 items-center ">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Publishing on Amazon, Kindle and Barnes & Noble (with Optimization)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        4 pages Authors Dynamic Website
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        1 Year Domain & Hosting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        30 - 60 Seconds Video Trailer
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        3 Months Organic SEO Marketing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        eBook, Paperback & Hardcover Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        5 Paperback Copies
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        1 Hardcover Copies
                                    </div>

                                </div>
                                <div className="text-center">
                                    <button className="package-get-started-btn text-md mt-7" onClick={() => openModal('Basic')}>
                                        GET A QUOTE
                                    </button>
                                </div>

                                <div className="single-packages-footer flex  w-100 justify-center">
                                    <div >
                                        <h5 className="text-xl">Share your idea!</h5>
                                        <p className="text-md text-black"><Link href="tel:(866)-841-7463">(866)-841-7463</Link></p>
                                    </div>
                                    <span className="border-line mx-8"></span>
                                    <div>
                                        <h5 className="text-xl">Want to discuss?</h5>
                                        <button className="text-md text-black blink_me pl-2" onClick={handleOpenChat}>Live Chat Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="single-packages relative">
                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Premium Package</h4>
                                <div className="single-packages-content px-10">
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Creating The Outline
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       Writing (Upto 500 pages)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Editing & Proofreading
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Typesetting & Layout Adjustment
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Formatting (for 50+ Platforms)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Multiple Revisions
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Royalties & Ownership Rights
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Creative Cover Art
                                    </div>

                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Price Encrypted Barcode
                                    </div>

                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        ISBN (International Standard Book Number)
                                    </div>

                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Publishing on Amazon, Kindle, Barnes & Noble and Google Books (with Optimization)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        4 pages Authors Dynamic Website
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        1 Year Domain & Hosting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        60 - 90 Seconds Video Trailer
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        6 Months Organic SEO Marketing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        6 Months Social Media Advertising
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        eBook, Paperback & Hardcover Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        10 Paperback Copies
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        5 Hardcover Copies
                                    </div>

                                </div>
                                <div className="text-center">
                                    <button className="package-get-started-btn text-md mt-7" onClick={() => openModal('Start up')}>
                                        GET A QUOTE
                                    </button>
                                </div>
                                <div className="single-packages-footer flex  w-100 justify-center">
                                    <div >
                                        <h5 className="text-xl">Share your idea!</h5>
                                        <p className="text-md text-black"><Link href="tel:(866)-841-7463">(866)-841-7463</Link></p>
                                    </div>
                                    <span className="border-line mx-8"></span>
                                    <div>
                                        <h5 className="text-xl">Want to discuss?</h5>
                                        <button className="text-md text-black blink_me pl-2" onClick={handleOpenChat}>Live Chat Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="single-packages relative">
                                <Image src={"/images/badge.png"} className="package-badge" width={80} height={80}></Image>
                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Enterprise Package</h4>
                                <div className="single-packages-content px-10">

                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Creating The Outline
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Writing (Unlimited pages)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Editing & Proofreading
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Typesetting & Layout Adjustment
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Formatting (for 50+ Platforms)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Multiple Revisions
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Royalties & Ownership Rights
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Creative Cover Art
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Price Encrypted Barcode                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        ISBN (International Standard Book Number)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Publishing on Amazon, Kindle, Barnes & Noble, Google Books and Smashwords (with Optimization)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        4 Pages Authors Dynamic Website
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        2 Years Free Domain and Hosting
                                    </div>

                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       12 Months Organic SEO Marketing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        12 Months Social Media Advertising
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Blogs & Article Postings
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Press Releases (100+ Platforms)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        eBook, Paperback & Hardcover Format
                                    </div>
                                     <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        15 Paperback Copies
                                    </div>
                                     <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        10 Hardcover Copies
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="package-get-started-btn text-md mt-7" onClick={() => openModal('Standard')}>
                                        GET A QUOTE
                                    </button>
                                </div>

                                <div className="single-packages-footer flex  w-100 justify-center">
                                    <div >
                                        <h5 className="text-xl">Share your idea!</h5>
                                        <p className="text-md text-black"><Link href="tel:(866)-841-7463">(866)-841-7463</Link></p>
                                    </div>
                                    <span className="border-line mx-8"></span>
                                    <div>
                                        <h5 className="text-xl">Want to discuss?</h5>
                                        <button className="text-md text-black blink_me pl-2" onClick={handleOpenChat}>Live Chat Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <NewServicesBrand />

            {/* <BrandFaqs /> */}
            <BrandContact />
            {/* <BrandFooter /> */}
            <NewBrandFooter />
        </>
    );
}
