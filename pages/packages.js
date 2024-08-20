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
                <meta
                    name="description"
                    content="Everything about Pine Book Writing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            {/* <Popup isOpen={isModalOpen} onClose={closeModal} service={selectedService} /> */}
            <PopupBundle isOpen={isModalOpen} onClose={closeModal} service={selectedService} />
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

            <section className="bg-white pt-5 pb-5">
                <div className="width-container">
                    <div className="container mx-auto">
                        <div className="packages-wrapper flex flex-col md:flex-row justify-center gap-12">
                            <div className="single-packages relative">

                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Silver Package <br/>$2,999 USD</h4>
                                <div className="single-packages-content px-10">

                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Dedicated Project Manager
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Pre-Planning and Research
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        	Questionnaire/Brief Forms
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Strategy Sessions (with Senior Project Manager)                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Outline Creation
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        25 Minute Interview Session (with Mid-Level Writer)
                                    </div>
                               
                                    <div className="flex gap-2 mb-5 items-center ">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Writing upto 50 - 70 Pages 
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        2 - 4 Months production (divided into Weeks)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Include upto 20 Images
                                    </div>
                                   
                                    <div className="flex gap-2 mb-5 items-center ">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Standard Formatting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        2 Revision Per Draft
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
                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Gold Package <br/> $4,499 USD</h4>
                                <div className="single-packages-content px-10">
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       	Dedicated Project Manager
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       	Pre-Planning and Research

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       	Questionnaire/Brief Forms

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       	Strategy Sessions (with Senior Project Manager)                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       	Detailed Outline Creation
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       	35 Minute Interview Session (with Senior-Level Writer)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       	Writing upto 70 - 150 Pages 
                                    </div>

                                       <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        3 - 6 Months production (divided into Weeks)                                    </div>

                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       	Include upto 30 Images                                    </div>

                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       	Publishing Standard Formatting (for 2 platforms)                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       	3 Revisions Per Draft                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       	Editorial support                                    </div>
                                    
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
                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Platinum Package <br/> $6,499 USD</h4>
                                <div className="single-packages-content px-10">
                           
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       Dedicated Project Manager
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       Pre-Planning and Research                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       Questionnaire/Brief Forms
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       Strategy Sessions (with Senior Project Manager)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       Detailed Outline Creation
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       45 Minute Interview Session (with Premium Writer)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       Writing upto 150 - 300 Pages                                     </div>
                                    <div className="flex gap-2 mb-5 items-center  text-xl">
                                   4 - 7 Months production (divided into Weeks)                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       Include upto 40 Images                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       Publishing Standard Formatting (for 3 platforms)                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       5 Revisions Per Draft                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       Editorial support                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       Dedication page (If required)                                    </div>

                                   <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        About the Author                                   </div>


                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                       Book Synopsis</div>
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

                        <section className="table-sec overflow-x-scroll max-w-screen-xl mx-auto">
                            <div className="container mx-auto m1-h mt-10 text-center">
                                {/* <h3 className="mb-8 text-center font-poppins text-3xl md:text-4xl font-bold">
                        
                                </h3> */}
                                <button className="compare-now-btn mb-10 mt-5" onClick={togglePackages2}>Comparison
                                    <FontAwesomeIcon
                                        className="ml-2"
                                        icon={collapseOpen2 ? faArrowUp : faArrowDown}
                                        color="#0d0f38"
                                    />
                                </button>
                            </div>

                            
                            <div className="">
                                <div className={`container container-compare mx-auto transition-height duration-500 ease-in-out ${showPackages2 ? 'expanded' : 'collapsed'}`} ref={contentRef}>
                                    <div className="md:w-full w-[500px] responsive-width">
                                        <table className="w-full mb-14 bundle-comparison-chart table-fixed">
                                            <thead className="chart-header-custom">
                                                <tr>

                                                    <th className="font-poppins heading">
                                                        <div className="heading">
                                                        List of Services
                                                        </div>
                                                    </th>


                                                    

                                                    <th className="font-poppins">
                                                        <div className="heading">
                                                        Silver Package
                                                        $2,999
                                                        </div>
                                                    </th >

                                                    <th className="font-poppins heading">
                                                        <div className="heading">
                                                        Gold Package
                                                        $4,499
                                                        </div>
                                                    </th>

                                                    <th className="font-poppins heading">
                                                        <div className="heading">
                                                        Platinum Package
                                                        $6,499
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody className="text-center">
                                                <tr className="m-4">
                                                    {/* <th className="text-2xl md:text-2xl text-start p-3 font-bold"
                                                        colspan="4"
                                                        scope="row">Preparing Your Manuscript</th> */}
                                                </tr>

                                                <tr>
                                                    <td>Dedicated Project Manager</td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>Pre-Planning and Research</td>
                                                    <td>
                                                    ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>Questionnaire/Brief Forms</td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                </tr>
                                                <tr>
                                                    <td>Strategy Sessions with Senior Project Manager</td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                </tr>
                                                <tr>
                                                    <td>Outline Creation</td>
                                                    <td>
                                                    Basic
                                                    </td>
                                                    <td>Detailed</td>
                                                    <td>Detailed</td>
                                                </tr>
                                                <tr>
                                                    <td>Interview Session timeline</td>
                                                    <td>
                                                    25 Minutes
                                                    </td>
                                                    <td>35 Minutes</td>
                                                    <td>45 Minutes</td>
                                                </tr>

                                                <tr>
                                                    <td>Writers Level</td>
                                                    <td>Mid Level Writer</td>
                                                    <td>Senior Writer</td>
                                                    <td>Premium Writer</td>
                                                </tr>

                                                <tr>
                                                    <td>Writers Experience </td>
                                                    <td>
                                                    2 - 5 Years
                                                    </td>
                                                    <td>
                                                    10 - 15 Years
                                                    </td>
                                                    <td>
                                                    20 - 25 Years
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Writing</td>
                                                    <td>
                                                    50-70 Pages
                                                    </td>
                                                    <td>
                                                    70-150 Pages
                                                    </td>
                                                    <td>
                                                    150-300 Pages
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Production Timeline <br/><b>(Divided into Weeks)</b></td>
                                                    <td>2-4 Months</td>
                                                    <td>3-6 Months</td>
                                                    <td>4-7 Months</td>
                                                </tr>
                                                <tr>
                                                    <td>Include Images</td>
                                                    <td>
                                                    20
                                                    </td>
                                                    <td>30</td>
                                                    <td>40</td>
                                                </tr>
                                                <tr>
                                                    <td>Basic Formatting</td>
                                                    <td>
                                                    ✔️
                                                    </td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                </tr>
                                                <tr>
                                                    <td>Publishing Standard Formatting</td>
                                                    <td>
                                                        ❌
                                                    </td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                </tr>
                                                <tr>
                                                    <td>Revisions Per Draft</td>
                                                    <td>
                                                        2
                                                    </td>
                                                    <td>3</td>
                                                    <td>5</td>
                                                </tr>
                                        
                                                <tr>
                                                    <td>Editorial Support</td>
                                                    <td>
                                                        ❌
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Dedication page (If required)</td>
                                                    <td>
                                                        ❌
                                                    </td>
                                                    <td>
                                                    ❌
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>About the Author</td>
                                                    <td>❌</td>
                                                    <td>❌</td>
                                                    <td>✔️</td>
                                                </tr>
                                  
                                               
                                
                                                <tr>
                                                    <td>Book Synopsis</td>
                                                    <td>
                                                    ❌
                                                    </td>
                                                    <td>
                                                    ❌
                                                    </td>
                                                    <td>
                                                    ✔️
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
{/* 
                        <div className="packages-wrapper flex flex-col md:flex-row justify-center gap-12 mt-0">
                            <div className="single-packages relative">
                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Expert Package</h4>
                                <div className="single-packages-content mb-5 px-10">
                                    <div className="flex gap-2 mb-5 items-center items-center text-xl">
                                        Preparing Your Manuscript
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Developmental Editing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Line by Line Editing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Proofreading
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Typesetting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Layout Adjustment
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Formatting (50+ Platforms)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        5 Revisions Per Draft
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center items-center text-xl">
                                        Designing your Cover
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Graphic OR Illustrated Design
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Cover Layout
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Cover Formatting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Front, Back & Spine
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        ISBN + Barcode (2X)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center items-center text-xl">
                                        Book Writing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Creation
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Verification
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Kindle
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Barnes and Noble
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Google Books
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        eBook Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Paperback Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Hardcover Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center items-center text-xl">
                                        Online Presence
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        3 - 5 Page Authors Website
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        1 - Year Domain & Hosting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        30 - 60 Seconds Book Trailer
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center items-center text-xl">
                                        Guarantees
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        No Royalties Share
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Ownership Rights
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Satisfaction
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h5 className="font-poppins text-xl flex justify-center items-center gap-3">
                                        EASY PAYMENT PLAN
                                        <div className="tooltip">
                                            <Image src={"/images/question-icon.png"} className="icon" width={20} height={20}></Image>
                                            <span className="tooltip-content">
                                                <ul>
                                                    <li> 50% PAYMENT UPFRONT.</li>
                                                    <li> REMAINING 50% CAN BE PAID IN 2-3 MONTHS INSTALLMENTS</li>
                                                    OR
                                                    <li> AFTER THE DELIVERY OF 3 CHAPTERS.</li>
                                                </ul>
                                            </span>
                                        </div>
                                    </h5>
                                </div>
                                <div className="text-center">
                                    <button className="package-get-started-btn text-md mt-5" onClick={() => openModal('Expert')}>
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
                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Premium Package</h4>
                                <div className="single-packages-content mb-5 px-10">
                                    <div className="flex gap-2 mb-5 items-center items-center text-xl">
                                        Preparing Your Manuscript
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Developmental Editing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Line by Line Editing

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Proofreading

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Typesetting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Layout Adjustment

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Formatting (50+ Platforms)

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        5 Revisions Per Draft

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center items-center text-xl">
                                        Designing your Cover
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Graphic OR Illustrated Design
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Cover Layout
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Cover Formatting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Front, Back & Spine
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        ISBN + Barcode (2X)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center items-center text-xl">
                                        Book Writing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Creation
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Verification
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Kindle
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Barnes and Noble
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Google Books
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Smashwords
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        eBook Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Paperback Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Hardcover Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center items-center text-xl">
                                        12 Months Brand Marketing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Logo Design (Complimentary)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        3 - 5 Page Authors Website
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        1 - Year Domain & Hosting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        30 - 60 Seconds Book Trailer
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Organic Google Marketing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Social Media Marketing
                                        (Facebook, Instagram & LinkedIn)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center items-center text-xl">
                                        Guarantees
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        No Royalties Share
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Ownership Rights
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Satisfaction
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h5 className="font-poppins text-xl flex justify-center items-center gap-3">
                                        EASY PAYMENT PLAN
                                        <div className="tooltip">
                                            <Image src={"/images/question-icon.png"} className="icon" width={20} height={20}></Image>
                                            <span className="tooltip-content">
                                                <ul>
                                                    <li> 50% PAYMENT UPFRONT.</li>
                                                    <li> REMAINING 50% CAN BE PAID IN 2-3 MONTHS INSTALLMENTS</li>
                                                    OR
                                                    <li> AFTER THE DELIVERY OF 3 CHAPTERS.</li>
                                                </ul>
                                            </span>
                                        </div>
                                    </h5>
                                </div>
                                <div className="text-center">
                                    <button className="package-get-started-btn text-md mt-8" onClick={() => openModal('Premium')}>
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
                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Enterprise Package
                                </h4>
                                <div className="single-packages-content mb-5 px-10">
                                    <div className="flex gap-2 mb-5 items-center items-center text-xl">
                                        Preparing Your Manuscript
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Developmental Editing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Line by Line Editing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Proofreading

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Typesetting

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Layout Adjustment

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Formatting (50+ Platforms)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        5 Revisions Per Draft
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center items-center text-xl">
                                        Designing your Cover
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Graphic OR Illustrated Design
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Cover Layout
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Cover Formatting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Front, Back & Spine
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        ISBN + Barcode (2X)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center items-center text-xl">
                                        Book Writing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Creation
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Verification
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Kindle
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Barnes and Noble
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Google Books
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Smashwords
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Draft2Digital
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on ACX
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        eBook Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Paperback Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Hardcover Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Audiobook Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center items-center text-xl">
                                        24 Months Brand Marketing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Logo Design (Complimentary)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        3 - 5 Page Authors Website
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        2 - Year Domain & Hosting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        60 - 90 Seconds Video Trailer
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Organic Google Marketing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Blogs & Article Postings
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Press Releases (150+ Platforms)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Social Media Marketing
                                        (Facebook, Instagram, Twitter)
                                        (Pinterest, Youtube & LinkedIn)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center items-center text-xl">
                                        Guarantees
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        No Royalties Share
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Ownership Rights
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Satisfaction
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h5 className="font-poppins text-xl flex justify-center items-center gap-3">
                                        EASY PAYMENT PLAN
                                        <div className="tooltip">
                                            <Image src={"/images/question-icon.png"} className="icon" width={20} height={20}></Image>
                                            <span className="tooltip-content">
                                                <ul>
                                                    <li> 50% PAYMENT UPFRONT.</li>
                                                    <li> REMAINING 50% CAN BE PAID IN 2-3 MONTHS INSTALLMENTS</li>
                                                    OR
                                                    <li> AFTER THE DELIVERY OF 3 CHAPTERS.</li>
                                                </ul>
                                            </span>
                                        </div>

                                    </h5>
                                </div>
                                <div className="text-center">
                                    <button className="package-get-started-btn font-poppins text-md mt-8" onClick={() => openModal('Enterprise')}>
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
                        </div> */}
                    </div>
                </div>
            </section>

            <NewServicesBrand/>

            <BrandFaqs/>
            <BrandContact />
            <BrandFooter />
        </>
    );
}
