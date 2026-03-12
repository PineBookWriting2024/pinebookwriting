import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import BrandFooter from "./components/BrandFooter";
import BrandNavbar from "./components/BrandNavbar";
import BrandBannerLogo from "./components/BrandBannerLogo";
import BrandChooseUs from "./components/BrandChooseUs";
import BrandPrimaryHeader from "./components/BrandPrimaryHeader";
import BrandProcess from "./components/BrandProcess";
import BrandAudioPlayer from "./components/BrandAudioPlayer";
import NewBrandFooter from "./components/NewBrandFooter";
import Link from "next/link";
import BrandTopBar from "./components/BrandTopBar";
import { FaPhoneVolume } from "react-icons/fa";
import CTAButton from './components/CTAButton';


export default function SeoCopywriting() {
    const handleOpenChat = () => {
        window.zE && window.zE('webWidget', 'open');
    };

    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "What is SEO content writing?", answer: "When generating SEO content, a group of writers picks out the right terms and phrases so that search engines can figure out what your site is about. Your website has a better chance of ranking higher if it has material that is good for SEO." },

        { question: "How do you conduct keyword research?", answer: "To find high-volume yet relevant search keywords, we only use premium tools like Ahrefs, SEMrush, and Moz. This way, we make sure that our content writing service aligns with popular search terms." },

        { question: "What kind of SEO content do you write?", answer: "As a professional SEO writing company, we write for many kinds of SEO material, from onsite and offsite blogs to articles, product descriptions, and SEO optimized web content. Each piece that we write truly matches your brand persona and meets your marketing goals." },

        { question: "How long does it take to create SEO content?", answer: "The exact timeline of writing and completing the SEO content is based on your project's length, complexity as well as keyword optimization requirements. However, we provide clear and practical timelines once we have reviewed your project details. Feel free to contact our team to know the exact timeline." },

        { question: "How do you measure content performance?", answer: "To analyze the performance of our content, we look at things like organic traffic, keyword rankings, users' time spent on page, and the number of conversions. These stats tell us how well our optimized digital material is doing and what we need to do to make it better. " },

        { question: "How do you ensure your content is mistake-free?", answer: "Before the final delivery of the content, it is sent to our senior editors and proofreaders. This process makes sure that either there are any changes required or the content is completely ready to deliver to our clients." },
    ];

    return (
        <>
            <Head>
                <title>SEO Content Writing Services | Pine Book Writing
                </title>
                <link
                    rel="canonical"
                    href="https://www.pinebookwriting.com/seo-content"
                    key="canonical"
                />

                <meta
                    name="description"
                    content="Uplift the website's rank with SEO content writing services. Our writers deliver content that helps bring traffic and perfectly connect with the audience."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/Seo-content/1.webp"}
                title="Skyrocket SEO - Hire Professional SEO Writing Services  "
                desc="If you are a business website owner, an SEO specialist, or even a marketing agency looking for professional SEO writing services, you’ve reached the right place. Along with writing, we handle all aspects of SEO content writing. Keyword research. content strategy. Technical formatting. "
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">

                        <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Professional SEO Content Writing Services </h2>
                        <h3 className="mt-3 text-2xl font-semibold font-poppins md:text-2xl uppercase">
                            Uplift Your Search Engine Ranking
                        </h3>
                        <p className="pt-3 text-xl text-left font-poppins">
                            Search engine optimization does not mean that you should be overly stuffing your content with keywords and waiting for it to be ranked. Instead, it’s about understanding search intent and writing with purpose. When you follow search engine guidelines for writing, <a href="https://www.pinebookwriting.com/Book-Editing" className="text-black underline hover:underline">editing</a> and <a href="https://www.pinebookwriting.com/Book-Formatting-Writing" className="text-black underline hover:underline">formatting</a>, your content has a greater chance of appearing higher in search results.
                        </p>

                        <p className="pt-3 text-xl text-left font-poppins">At <a href="https://www.pinebookwriting.com/" className="text-black underline hover:underline">Pine Book Writing</a>, our expertise covers multiple sectors. SEO website content writing. Blog posts. Guest posting. Product descriptions. Book descriptions and others. Our team of professional SEO writers do in-depth research, find relevant yet high-volume keywords, and write content with your audience in mind. This strategic approach helps your website and content rank higher.</p>
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Seo-content/ghost-pic.webp"} width={470} height={300}
                            loading="lazy"
                            alt="about img"
                            className="aos-init aos-animate"
                            data-aos="fade-left" data-aos-duration="1000"
                        />
                    </div>
                </div>
                {/* <p className="px-10 text-xl text-justify font-poppins md:px-0" data-aos="fade-right">
                    Working with a professional editor also gives authors the chance to learn and grow, preparing them for future writing projects. At Pine Book Writing, we support this learning process, helping authors develop their skills and reach their full potential.
                </p> */}
            </div>


            <section
                className="relative overflow-visible text-white bg-center bg-no-repeat bg-cover ser-cta-banner py-14 md:py-0"
                style={{ backgroundImage: `url(/brand-img/bg-banner.png)` }}>
                <div className="relative grid items-center grid-cols-1 gap-4 mx-auto md:grid-cols-12 max-w-7xl ">

                    <div className="relative z-10 justify-center hidden md:col-span-3 md:flex md:justify-start">
                        <Image
                            src="/images/Seo-content/cta-book-12.webp"
                            alt="Book 1"
                            className="absolute l-book -top-20 md:-top-36"
                            height={600}
                            width={600}
                        />
                    </div>

                    <div className="px-4 text-center md:col-span-6">
                        <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                            Struggling to Rank? Hire Our SEO Content Writing Services!
                        </h2>
                        <p className="py-4 text-base md:text-lg">
                            Your web content must be aligned with search engine's best practices. Our team of SEO writers are always informed about Google's latest updates and write something that really helps search visitors. That helps us rank websites higher on search engines.

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
                        <h3 className="text-2xl text-black font-poppins">Our Services Workflow</h3>
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our SEO Content Writing Services
                        </h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Understand Your Business</h2>
                                <p className="">We start by fully understanding your business, your goals, and your target audience so that we can deliver reader- and SEO-friendly content. As a trusted SEO writing agency, we pen each word that matches your needs. </p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Keyword Research</h2>
                                <p className="">Our highly competent SEO professionals get to work, use advanced tools to find high-volume and low-competition keywords before starting content writing for SEO.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">SEO Content Writing</h2>
                                <p className="">Once research is complete, our professional SEO writers start writing content that's not only engaging but also informative and aligned with SEO best practices.</p>
                            </div>
                        </div>

                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Content Optimization</h2>
                                <p className="">We don't just write content that appears on the web pages, but we will write meta titles/descriptions and tags, and create relevant images to make sure they look good in SERPs.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Editing & Revision</h2>
                                <p className="">Before uploading/delivering your content, our experienced editors proofread it to fix any typos, grammar, or structure errors. Not only that, but we also get your feedback and revise it accordingly.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Final Delivery</h2>
                                <p className="">Once your content goes through all necessary phases, we deliver your SEO-optimized content to you in your desired format on time, with transparency to acquire your full satisfaction with the work.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="max-w-6xl px-4 py-16 mx-auto bg-white font-poppins">
                <h2 className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
                    Our Offerings
                </h2>
                <h2 className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
                    What’s Included In Our SEO Content Writing Services
                </h2>

                <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
                    At our SEO writing company in USA,we cover everything that's required to write informative yet promotional content infusing relevant search terms that practically help a website rank well.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {[
                        { icon: '🖋️', label: 'Keyword Research' },
                        { icon: '🧐', label: 'SEO Website Content' },
                        { icon: '📄', label: 'Blog & Article Writing ' },
                        { icon: '💼', label: 'Product & Service Description' },
                        { icon: '⚙️', label: 'On-Page Content Optimization' },
                        { icon: '🎯', label: 'Editing & Proofreading' },
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
                <div className="relative left-0 px-12 py-10 mt-0 mb-8 brand-choose-us-section ms-auto md:left-52 md:px-20 md:mt-14 " >
                    <div className="flex flex-col items-center md:flex-row" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                            <Image src={"/images/Seo-content/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/3 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white capitalize font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">What Makes Us the Best SEO Writing Agency in USA</h2>
                            <p className="mt-2 text-white">The team of professionals at Pine Book Writing, is completely aware that content for web (Onsite or Offsite) isn't just about words. It's all about results. That's why we've designed our SEO content writing service dedicated to helping businesses improve visibility, bring organic readers in a practical yet natural way. What we deliver is work for both people and search engines.
                            </p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Dedicated SEO Writers </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Keyword-Optimization </li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />100% SEO-Friendly Content </li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Fast Turnaround</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Affordable & Flexible Packages</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Content Marketing Strategy</li>
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
