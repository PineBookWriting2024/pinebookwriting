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


export default function BlogWriting() {
    const handleOpenChat = () => {
        window.zE && window.zE('webWidget', 'open');
    };

    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "What makes your blog writing services different?", answer: "We combine SEO blog writing services with real audience research. Our blogs are written for both search engines and human readers, not just algorithms." },

        { question: "Can I hire blog writers for a single post?", answer: "Yes. You can use our blog post writing service for single articles or ongoing monthly blog writing services packages." },

        { question: "Do you provide SEO blog writing service only?", answer: "We provide both SEO blog writing service and general blog content writing services. If you don’t need SEO, we adjust accordingly." },

        { question: "Who writes the blog articles?", answer: "Our professional blog writers have experience in multiple industries. We match writers based on niche and content style requirements." },

        { question: "Are your blogs keyword-optimized?", answer: "Yes. We create keyword-optimized blogs with proper placement, headings, and natural usage to support blog SEO optimization." },

        { question: "Do you help with blog content planning?", answer: "Yes. We assist with blog content planning and strategy so your content marketing blogs are consistent and aligned with your business goals." },
    ];

    return (
        <>
            <Head>
                <title>Blog Writing Services | SEO Blog Writers for Hire</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/blog-article-writing" />
                <meta
                    name="description"
                    content="Get professional blog writing services that drive traffic and leads. Our SEO blog writing service delivers keyword-optimized, engaging blog articles that fit your industry and audience.
"
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/blog-article-writing/1.webp"}
                title="Professional Blog Writing Services For Bloggers & Marketers
"
                desc="We create blog writing services that help brands grow traffic, build trust, and actually convert readers. From SEO blog content to long-form blog posts, we write blogs people read till the end.
"
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">

                        <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Professional Blog Writing Services That Actually Work
                        </h2>
                        <h3 className="mt-3 text-xl font-semibold uppercase font-poppins md:text-xl">
                            Content That Brings Results

                        </h3>
                        <p className="pt-3 text-xl text-left font-poppins">Not every blog writing service understands search intent. And honestly, that’s where most blogs fail. We focus on SEO blog writing services that are built around real keyword research, blog SEO optimization, and clear content structure.
                        </p>

                        <p className="pt-3 text-xl text-left font-poppins">Our professional blog writers create keyword-optimized blogs that are easy to read but still strong for search engines. We don’t stuff keywords. We place them naturally. Whether you need industry blog writing, content marketing blogs, or conversion-focused blogs, we write with purpose.
                        </p>
                        <p className="pt-3 text-xl text-left font-poppins">We also help with blog content planning and strategy. Because without direction, blogs become random posts that don’t bring traffic. If you’re looking to hire blog writers who understand SEO and reader behavior, you’re in the right place.
                        </p>
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/blog-article-writing/ghost-pic.webp"} width={470} height={300}
                            loading="lazy"
                            alt="about img"
                            className="aos-init aos-animate"
                            data-aos="fade-left" data-aos-duration="1000"
                        />
                    </div>
                </div>
                <p className="px-10 pt-3 text-xl text-left font-poppins md:px-0" data-aos="fade-right">
                    So why wait? Contact us today to discuss your next writing project and see how we help our clients to thrive in their pursuits.
                </p>
            </div>


            <section
                className="relative overflow-visible text-white bg-center bg-no-repeat bg-cover ser-cta-banner py-14 md:py-0"
                style={{ backgroundImage: `url(/brand-img/bg-banner.png)` }}>
                <div className="relative grid items-center grid-cols-1 gap-4 mx-auto md:grid-cols-12 max-w-7xl ">

                    <div className="relative z-10 justify-center hidden md:col-span-3 md:flex md:justify-start">
                        <Image
                            src="/images/Autobiography-Writing/cta-book-12.webp"
                            alt="Book 1"
                            className="absolute l-book -top-20 md:-top-36"
                            height={600}
                            width={600}
                        />
                    </div>

                    <div className="px-4 mt-6 mb-6 text-center md:col-span-6">
                        <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                            Let’s Build Blogs That Grow Traffic
                        </h2>
                        <p className="py-4 text-base md:text-lg">
                            Start your SEO blog writing service today and work with blog content writers who know how to turn ideas into traffic and leads.

                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 cta-btns sm:flex-row">
                            <CTAButton />


                            <a
                                href="tel:(866) 841-7463"
                                className="flex items-center gap-2 text-white"
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

                    <div className="justify-center hidden md:col-span-3 md:flex md:justify-end">
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
            <section className="relative flex justify-center pt-20 mx-auto mb-12 overflow-hidden text-center brand-process">
                <div className="max-w-screen-xl">
                    <div className="mb-6 text-center">
                        <h3 className="text-2xl text-black font-poppins">Our Service Workflow</h3>
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Blog Writing Services</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Discussion</h2>
                                <p className="">We first understand your niche, audience, and business goals. Some clients want traffic. Some want leads. We clarify expectations before writing even starts.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Keyword Research</h2>
                                <p className="">Our team researches primary and secondary keywords, search intent, and competitors. We build a blog content strategy that makes sense for long-term growth.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Outline Creation
                                </h2>
                                <p className="">Before drafting, we create a structured outline. Headings, subheadings, keyword placement. Everything is planned so the blog flows naturally and ranks better.</p>
                            </div>
                        </div>

                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Writing & Optimization</h2>
                                <p className="">Our blog writers create SEO blog content that sounds human, not robotic. We focus on clarity, readability, and blog SEO optimization without overdoing anything.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Editing & Proofreading
                                </h2>
                                <p className="">Every blog article goes through editing for grammar, tone, and structure. Small errors can reduce trust, so we fix them carefully.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Review & Delivery</h2>
                                <p className="">You receive the final blog post ready to publish. If revisions are needed, we adjust quickly. We keep the process simple and clear.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="max-w-6xl px-4 py-16 mx-auto bg-white font-poppins">
                <h2 className="mb-4 text-xl font-bold text-center text-gray-700 md:text-2xl">
                    Our Offerings
                </h2>
                <h2 className="mb-4 text-xl font-medium text-center text-gray-700 md:text-2xl">
                    What’s Included In Our Blog Writing Services

                </h2>

                <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
                    Our blog writing services packages are built to support traffic growth, SEO rankings, and brand authority through consistent, high-quality blog articles.

                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {[
                        { icon: '🖋️', label: 'SEO Blog Writing Services' },
                        { icon: '🧐', label: 'Article Writing Services' },
                        { icon: '📄', label: 'Long-Form Blog Posts' },
                        { icon: '💼', label: 'Industry Blog Writing' },
                        { icon: '⚙️', label: 'Blog Content Strategy' },
                        { icon: '🎯', label: 'Blog SEO Optimization' },
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center h-32 p-4 text-center bg-[#f4f1ea] hover:bg-[#ebe8e0] transition-colors rounded-xl shadow-sm hover:shadow-md"
                        >
                            <div className="mb-2 text-3xl">{service.icon}</div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                                {service.label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>


            <section className="overflow-hidden" >
                <div className="relative left-0 px-12 py-10 mt-6 mb-8 brand-choose-us-section ms-auto md:left-52 md:px-20 md:mt-14 " >
                    <div className="flex flex-col items-center md:flex-row" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                            <Image src={"/images/Biography-Writing/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/3 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">Why Brands Choose Our Blog Writing Services</h2>
                            <p className="mt-2 text-white">There are many blog writers for hire online. But finding professional blog writers who understand SEO, structure, and conversion is not easy. We mix experience with research. No guesswork. No random topics. We focus on value first. Rankings follow.
                            </p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Real keyword research </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Industry experience </li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> SEO-focused writing </li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Conversion intent</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Clear communication</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />On-time delivery</li>
                                </ul>
                            </div>
                            {/* <BrandAudioPlayer src="/brand-img/why-choose-us-voice.wav" /> */}
                            <div>
                                <button className="mt-10 shadow-xl cursor-pointer brand-nav-btn-1 brand-nav-btn btn-f" onClick={handleOpenChat}><Link href={'javascript:;'}>Speak to our Consultant</Link></button>
                                <button className="mt-10 ml-0 shadow-xl cursor-pointer brand-nav-btn-1 brand-nav-btn btn-f md:ml-3"><Link href="tel:+18668417463">Call Now</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overflow-hidden brand-testimonials-section">
                <div className="relative max-w-screen-xl px-4 mx-auto my-10 py-22">
                    <div className="mb-6 text-center">
                        <h2 className="mb-3 text-4xl font-bold text-black uppercase font-poppins" >Frequently Asked Questions</h2>
                        {/* <h3 className="text-xl font-bold text-black uppercase font-poppins">each Out to Us for Further Assistance.</h3> */}
                    </div>
                    <div className="faq-que">
                        <div className="flex flex-col justify-center gap-4 md:flex-row">
                            {Array.from({ length: 2 }).map((_, colIndex) => (
                                <div key={colIndex} className="w-full max-w-screen-sm">
                                    {faqData.slice(colIndex * 3, (colIndex + 1) * 3).map((faq, index) => {
                                        const actualIndex = index + colIndex * 3;
                                        return (
                                            <button
                                                key={actualIndex}
                                                className="w-full p-6 mt-0 mb-4 text-left text-white border-b-2 border-gray-300 focus:outline-none rounded-2xl bg-color"
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
