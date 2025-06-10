import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BrandFooter from "./components/BrandFooter";
import BrandNavbar from "./components/BrandNavbar";
import BrandBannerLogo from "./components/BrandBannerLogo";
import BrandChooseUs from "./components/BrandChooseUs";
import BrandPrimaryHeader from "./components/BrandPrimaryHeader";
import BrandProcess from "./components/BrandProcess";
import BrandAudioPlayer from "./components/BrandAudioPlayer";
import NewBrandFooter from "./components/NewBrandFooter";
import BrandTopBar from "./components/BrandTopBar";
import { FaPhoneVolume } from "react-icons/fa";
import CTAButton from './components/CTAButton';        


export default function BookEditing() {
    const handleOpenChat = () => {
        window.zE && window.zE('webWidget', 'open');
    };

    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "What is Ghostwriting?", answer: "Ghostwriting is the name of hiring a professional writer to write your book. In return, the writer will gather all the relevant information, conduct in-depth research, and craft a manuscript that meets your vision." },
        
        { question: "Is your ghostwriting ethical and authentic?", answer: "Absolutely, it is both ethical and authentic. Ghostwriting is extremely common, especially in the world of book writing. This service is considered the same as having any professional hired to perform a specific task. At Pine Book Writing, we serve our expertise in writing to put your creative ideas into a manuscript." },
       
        { question: "Who will own the rights in Ghostwriting?", answer: "We are just your writing partner. We write it as a ghostwriting service, and you own it. As an author, you own all the rights and credits for the final product. Not only that, the royalties your book earns will also be yours." },
       
        { question: "Can I hire you to write one chapter of my book and later write the other chapters?	", answer: "Yes, you can also hire us chapter by chapter. Here, we are confident that once you see our writing professionalism and expertise, you will definitely want to go toward the last chapter of your book. So, if you want to hire us for a single chapter, you are also welcome." },
        
        { question: "How long will it take to write a book?", answer: "The completion time of the ghostwriting services entirely depends on the complexity, genre, and your book's length. However, we usually take 3 to 6 months on average. Moreover, the time also depends on how much material you provide and the research required on the particular topic." },
       
        { question: "How much does ghostwriting a book cost?", answer: "The cost of ghostwriting also varies based on your book's length, genre, and complexity. You can view our packages here. Moreover, if you want to customize the any package according to your need, you can speak to our representative. " },
            ];

    return (
        <>
            <Head>
                <title>Hip Hop Writing | Pine Book Writing</title>
                <meta
                    name="description"
                    content="Everything about Pine Book Writing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/brand-img/Hip-Hop-Writing.png"}
                title="Acquire Expert Hip Hop Writing That Hits Hard"
                desc="Looking for professional hip hop writing services for your next rap or R&B music? Stop searching, as Pine Book Writing is here to help with a team of experienced hip hop writers who have helped many until now. Get in touch right away!"
            />
            <BrandBannerLogo />

            <div className="container mx-auto max-w-screen-xl overflow-hidden pt-0 md:py-20">
                <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row px-8 md:px-0 py-10 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="font-poppins text-3xl md:text-4xl uppercase font-bold">Uplift Your Lyrics and with Hip Hop Writing</h2>

                        <h2 className="font-poppins text-2xl md:text-3xl uppercase">
                        Original Lyrics, Original Impact
                        </h2>
                       
                        <p className="font-poppins text-xl text-left pt-3">
                        If you’re an artist who wants to uplift your game in lyrics, our hip-hop writing services are for you. Whether you require full verses, attractive hooks, or just want support from experts with structure and flow, our writers are familiar with the rhythm and the depth of hip-hop culture.</p>

                        <p className="font-poppins text-xl text-left pt-3">With years of experience in hip-hop writing, our team of writers works with authenticity, creativity, and originality in order to meet your expectations regarding voice and style. No matter whether you are a future rapper or an experienced player, we’ll help you create music that grabs attention. Don’t think too much, get in touch with our experts and get a free quote for your project!</p>
                    </div>
                    <div className="basis-1/2 abt-pic text-center flex justify-center md:justify-center">
                        <Image src={"/brand-img/ghost-pic.webp"} width={470} height={300}
                            loading="lazy"
                            alt="about img"
                            className="aos-init aos-animate"
                            data-aos="fade-left" data-aos-duration="1000"
                        />
                    </div>
                </div>
                {/* <p className="font-poppins text-xl text-justify	px-10 md:px-0" data-aos="fade-right">
                    Working with a professional editor also gives authors the chance to learn and grow, preparing them for future writing projects. At Pine Book Writing, we support this learning process, helping authors develop their skills and reach their full potential.
                </p> */}
            </div>

               <section className="ser-cta-banner bg-no-repeat bg-cover bg-center text-white relative overflow-visible py-14 md:py-0"
                                                    style={{ backgroundImage: `url(/brand-img/bg-banner.png)` }}>
                                                    <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 max-w-7xl mx-auto relative ">
                                    
                                                        <div className="md:col-span-3 hidden md:flex justify-center md:justify-start relative z-10">
                                                            <Image
                                                                src="/brand-img/cta-book-12.png"
                                                                alt="Book 1"
                                                                className="l-book absolute -top-20 md:-top-36"
                                                                height={600}
                                                                width={600}
                                                            />
                                                        </div>
                                    
                                                        <div className="md:col-span-6 text-center px-4">
                                                            <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                                                                Craft the Best – Hire an Expert Hip Hop Writing Service 
                                                            </h2>
                                                            <p className="text-base md:text-lg py-4">
                                                                Let’s write original and hard-hitting lyrics by experts who can understand your sound and story closely.
                                                            </p>
                                    
                                                            <div className="cta-btns flex flex-col sm:flex-row items-center gap-4 justify-center">
                                                                         <CTAButton />
                                    
                                    
                                                                <a
                                                                    href="tel:(866) 841-7463"
                                                                    className="text-white flex items-center gap-2">
                                                                    <FaPhoneVolume className="inline" /> (866) 841-7463
                                                                </a>
                                    
                                                                  <a
                                                                    href={'javascript:;'}
                                                                    className="bg-transparent text-[#fff] px-5 py-2 border border-white
                                     rounded-full flex items-center gap-2 hover:bg-gray-200 hover:text-black cta-btn-1 transition" onClick={handleOpenChat}>
                                                                    Live Chat
                                                                </a>
                                                            </div>
                                                        </div>
                                    
                                                        <div className="md:col-span-3 hidden md:flex justify-center md:justify-end">
                                                            <Image
                                                                src="/brand-img/type.png"
                                                                alt="Typewriter"
                                                                className="max-h-[300px] w-auto"
                                                                height={600}
                                                                width={600}
                                                            />
                                                        </div>
                                                    </div>
                                                </section>

            {/* inner process section start */}
             <section className="brand-process mx-auto relative pt-20 text-center flex justify-center mb-12 overflow-hidden">
                <div className="max-w-screen-xl">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl text-black font-poppins">Our Service Workflow</h3>
                        <h2 className="font-poppins text-3xl md:text-4xl text-black font-bold" data-aos="zoom-out-down">6-Step Process of Our Ghostwriting Services</h2>
                    </div>

                    <div className="grid grid-cols-3 gap-6 mb-6">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="brand-process-content text-left flex-col px-6 py-10">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Project Manager Assigning & Questionnaire</h2>
                                <p className="">We begin our process by assigning a dedicated project manager and a questionnaire to understand your writing requirements.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Research & Outlining</h2>
                                <p className="">Then, our team of professionals will conduct in-depth research, create a content outline, and send it to you for your approval.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Interview Session with Writer</h2>
                                <p className="">After the outline approval, we arrange an interview session with our assigned writer so that you can discuss your vision, tone, and writing style.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid grid-cols-3 gap-6 mb-6" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Weekly Deliveries & Revisions</h2>
                                <p className="">We provide deliveries weekly and welcome your feedback throughout the process. We also offer multiple revisions to ensure your complete satisfaction.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Formatting & Layout Adjustment</h2>
                                <p className="">Once our ghostwriting work is finalized, we will format the manuscript according to your preferred style and make the necessary layout adjustments.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Final Delivery</h2>
                                <p className="">In the last step, we will deliver the finalized and polished manuscript to you in your desired format and the time we've discussed.</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>
            
            <section className="overflow-hidden" >
                <div className="brand-choose-us-section ms-auto relative left-0 md:left-52 px-12 md:px-20 md:mt-16 mb-8 py-10 " >
                    <div className="flex items-center flex-col md:flex-row" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                        <Image src={"/brand-img/Why Choose Us 2.png"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/2 md:ml-20">
                            <h2 className="text-white font-poppins text-2xl md:text-4xl uppercase mt-10 md:mt-0 font-bold" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Our Ghostwriting Services?</h2>
                            <p className="text-white mt-2">Delight your potential readers with Pine Book Writing. We have a highly skilled team of ghostwriters with a proven record of working for globally-recognized authors. Experience quality, transparency & confidentiality.</p>
                            <div className="flex flex-col md:flex-row gap-2 md:gap-10 mt-6">
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Expert Team of Writers </li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Guaranteed Confidentiality </li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Timely Delivery </li>
                                </ul>
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Affordable Writing Services</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Deep Research</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Client Focus</li>
                                </ul>
                            </div>
                            {/* <BrandAudioPlayer src="/brand-img/why-choose-us-voice.wav" /> */}
                            <div>
                                <button className="brand-nav-btn-1 brand-nav-btn shadow-xl mt-10 cursor-pointer btn-f" onClick={handleOpenChat}><Link href={'javascript:;'}>Speak to our Consultant</Link></button>
                                <button className="brand-nav-btn-1 brand-nav-btn shadow-xl mt-10 cursor-pointer btn-f md:ml-3 ml-0"><Link href="tel:+18668417463">Call Now</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="brand-testimonials-section overflow-hidden">
                <div className="max-w-screen-xl mx-auto px-4 my-10 relative py-22">
                    <div className="text-center mb-6">
                        <h2 className="font-poppins text-4xl text-black uppercase mb-3 font-bold" >Frequently Asked Questions</h2>
                        {/* <h3 className="text-xl text-black font-poppins uppercase font-bold">each Out to Us for Further Assistance.</h3> */}
                    </div>
                    <div className="faq-que">
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            {Array.from({ length: 2 }).map((_, colIndex) => (
                                <div key={colIndex} className="w-full max-w-screen-sm">
                                    {faqData.slice(colIndex * 3, (colIndex + 1) * 3).map((faq, index) => {
                                        const actualIndex = index + colIndex * 3;
                                        return (
                                            <button
                                                key={actualIndex}
                                                className="w-full border-b-2 border-gray-300 text-white p-6 text-left mt-0 focus:outline-none mb-4 rounded-2xl bg-color"
                                                onClick={() => toggleFAQ(actualIndex)}
                                            >
                                                <div className={`text-lg font-semibold flex justify-between ${openFAQ === actualIndex ? 'border-b border-gray-300' : 'border-0'}`}>
                                                    {faq.question}
                                                    {/* <FontAwesomeIcon icon={openFAQ === actualIndex ? faMinusCircle : faArrowDown} color="#2c9384" /> */}
                                                    <div onClick={() => toggleFAQ()}>
                                                        {openFAQ === actualIndex ? (
                                                            <Image src="/brand-img/up-arrow.png" alt="Close" className="brand-faq-icon" width={50} height={20} />
                                                        ) : (
                                                            <Image src="/brand-img/down-arrow.png" alt="Open" className="brand-faq-icon" width={50} height={20} />
                                                        )}
                                                    </div>
                                                </div>
                                                <div className={`mt-3  text-white ${openFAQ === actualIndex ? 'faq-content-open' : 'faq-content-close'}`}>
                                                    <p>
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* <BrandFooter /> */}
            <NewBrandFooter />
        </>
    );
}
