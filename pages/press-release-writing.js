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


export default function PressRelease() {
    const handleOpenChat = () => {
        window.zE && window.zE('webWidget', 'open');
    };

    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "What is the purpose of a press release?", answer: "The companies, organizations, or public figures who already have or are pursuing a large audience base keep people informed about what's happening or going to be in the future using press releases." },

        { question: "How long should a press release be?", answer: "Although the length of a press release depends on how big the news/announcement is, the ideal length is between 300 and 400 words. Moreover, most PR publishing platforms ask to write a press release within a specific range." },

        { question: "When should I use a press release?", answer: "It's the right time to get that media coverage whenever you or your company are up to something genuinely newsworthy and shareable to a large audience." },

        { question: "How much does it cost to have a press release written & published?", answer: "The cost of writing and publishing a press release is based on the following factors  1. The length and complexity of the press release.    2. The number and type of media platform(s) you want to publish your press release on. 3. The amount of research required to write your press release. To get an exact price, feel free to contact our customer representatives. They'll provide a personalized and transparent project quote." },

        { question: "How long will my Press Release stay on the web?", answer: "In most cases, a press release stays on the web for around 10 - 12 months, but it also depends on the policies of that particular platform." },

        { question: "What do I need to provide you to write my press release?", answer: "We ask our clients to provide all the necessary information about the news by providing them a 'Press Release Writing Questionnaire.' " },
    ];

    return (
        <>
            <Head>
                <title>Press Release Writing | Pine Book Writing</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/press-release-writing" />

                <meta
                    name="description"
                    content="Everything about Pine Book Writing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/brand-img/press-release-writing.png"}
                title="Expert Press Release Writing Services"
                desc="Bring your brand into the media's spotlight with our professional press release writing services. From product launches and events to partnership and collaboration announcements, your company deserves notability. Contact our customer service team to learn more about our services."
            />
            <BrandBannerLogo />

            <div className="container mx-auto max-w-screen-xl overflow-hidden pt-0 md:py-20">
                <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row px-10 md:px-0 py-10 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">

                        <h2 className="font-poppins text-3xl md:text-4xl uppercase font-bold">Hire a Professional Press Release Writing Agency</h2>
                        <h2 className="font-poppins text-2xl md:text-3xl uppercase">
                            Get Strategic Media Outreach
                        </h2>
                        <p className="font-poppins text-xl text-left pt-3">
                            Hiring a professional press release writing service can help generate media coverage, promote your brand to a broader audience, and keep your audience informed about your company’s events, such as product launches, policy changes, partnerships with other brands, future improvements, etc. This practice also helps drive more traffic to your website now and again.</p>
                        <p className="font-poppins text-xl text-left pt-3">Our expert press release writers at Pine Book Writing understand the worth of creating newsworthy content by maintaining a journalistic writing style. They work together with you to improvise your key messages and outline your news according to your audience. Our press release writing services are not limited to writing, but we also help distribute your news/announcements through various media outlets. Contact us to learn how we can help you write an impactful press release.</p>
                    </div>
                    <div className="basis-1/2 abt-pic text-center flex justify-center md:justify-center">
                        <Image src={"/brand-img/PR-Writing.png"} width={470} height={300}
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
                            Create Buzz with Our Powerful PR Writing Service!
                        </h2>
                        <p className="text-base md:text-lg py-4">
                           Get in touch with our team and get expert assistance in writing effective press releases and posting them on well-known media outlets.
                        </p>

                        <div className="cta-btns flex flex-col sm:flex-row items-center gap-4 justify-center">
                            <CTAButton />


                            <a
                                href="tel:(866) 841-7463"
                                className="text-white flex items-center gap-2"
                            >
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
                        <h2 className="font-poppins text-3xl md:text-4xl text-black font-bold" data-aos="zoom-out-down">6-Step Process of Our Press Release Writing Services</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="brand-process-content text-left flex-col px-6 py-10">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Understand Your Message</h2>
                                <p className="">We'll begin by defining clear objectives for your press release, whether you want to increase brand awareness or launch a new product.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="brand-process-content text-left flex-col px-6 py-10">
                                <span className="num-span"><b>02</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Conduct Research</h2>
                                <p className="">Our team will conduct thorough research about your target audience so that they can be sure about the writing style and tone.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="brand-process-content text-left flex-col px-6 py-10">
                                <span className="num-span"><b>03</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">PR Writing</h2>
                                <p className="">Then, our PR writers will produce an engaging press release that conveys your key messages and attracts the attention of journalists.</p>
                            </div>
                        </div>

                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-6" >

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="brand-process-content text-left flex-col px-6 py-10">
                                <span className="num-span"><b>04</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Review & Revisions</h2>
                                <p className="">Once it's written, we will send it to you for your feedback and make the necessary revisions to ensure your press release is ready for distribution.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="brand-process-content text-left flex-col px-6 py-10">
                                <span className="num-span"><b>05</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Media Outreach</h2>
                                <p className="">Then, we’ll deliberately distribute your press release to several appropriate media outlets, leveraging keyword optimization techniques to maximize visibility.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="brand-process-content text-left flex-col px-6 py-10">
                                <span className="num-span"><b>06</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Result Tracking</h2>
                                <p className="">Our service continues. We'll monitor the coverage and provide a detailed report to help you make informed decisions for future campaigns.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="overflow-hidden" >
                <div className="brand-choose-us-section ms-auto relative left-0 md:left-52 px-12 md:px-20 mt-20 mb-8 py-10 " >
                    <div className="flex items-center flex-col md:flex-row" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                            <Image src={"/brand-img/Why Choose Us 2.png"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/3 md:ml-20">
                            <h2 className="text-white font-poppins text-2xl md:text-4xl uppercase mt-10 md:mt-0 font-bold" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Our Press Release Writing Services</h2>
                            <p className="text-white mt-2">Get your news to the right audience with our expert press release writing services. We have a steadfast team of press release writers who can help capture your audience’s attention using their immaculate expertise to drive media coverage and boost your brand reputation.</p>
                            <div className="flex flex-col md:flex-row gap-2 md:gap-10 mt-6">
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Strategic Outreach </li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Strategic Outreach </li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Result Tracking </li>
                                </ul>
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Dedicated Writer's Team</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Timely Delivery</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Result-Driven Approach</li>
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
