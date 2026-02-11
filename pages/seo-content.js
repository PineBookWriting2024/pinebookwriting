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


export default function SeoCopywriting () {
    const handleOpenChat = () => {
        window.zE && window.zE('webWidget', 'open');
    };

    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "What is SEO content writing?", answer: "SEO content writing is all about choosing the appropriate words and phrases while writing to keep search engines informed about what your website or content is about. As a result, search engines showcase your website or content to your audience." },
        
        { question: "How do you conduct keyword research?", answer: "In order to identify relevant and high-volume and relevant keywords, we use premium keyword research tools such as Ahref, SEMRush, and Moz. Overall, our research ensures your content meets with popular search terms." },
       
        { question: "What kind of SEO content do you create?", answer: "Primarily being a writing agency, we produce a wide range of SEO material, such as articles, blog posts, product descriptions, website copies, and more. We strive to provide content that entirely meets your specific needs." },
       
        { question: "How long does it take to create SEO content?", answer: "The exact time of content creation ultimately depends on its length and the keywords infusing requirements. To know the exact duration, you may contact our customer services team, and they will provide you with an estimated timeline based on your specific needs." },
        
        { question: "How do you measure content performance?", answer: "Our content performance measurement method is based on monitoring organic traffic, keyword ranking, visitor staying time, and, most importantly, conversions. This data helps us assess how our content is compelling and where improvements are required." },
       
        { question: "How do you ensure your content is mistake-free?", answer: "Being a leading writing agency, we have a large team of proofreaders and editors to go through every piece of content before its publication and final delivery to the client. They ensure that every line and word is chosen appropriately and correctly to make the content precise and readable." },
            ];

    return (
        <>
            <Head>
                <title>SEO Content | Pine Book Writing</title>
                <link rel="canonical" href="https://www.pinebookwriting.com//seo-content" />

                <meta
                    name="description"
                    content="Everything about Pine Book Writing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
                <BrandTopBar/>
            <BrandNavbar />
            <BrandPrimaryHeader
                            photo_banner={"/images/Seo-Content/1.webp"}
                title="Expert SEO Content Writing Services"
                desc="If you are a business website owner, an SEO specialist, or even a marketing agency looking for professional SEO-optimized content writing services, you’ve reached the right place. At Pine Book Writing we handle all aspects of SEO content writing, from keyword research and content strategy planning to writing; we’re with you every step of the way. "
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                       
                        <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Professional SEO Writing Services </h2>
                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                        Boost Your Search Engine Ranking 
                        </h2>
                        <p className="pt-3 text-xl text-left font-poppins">
                        Search engine optimization does not mean overly stuffing your content with keywords and waiting for it to be ranked high. It's all about understanding the search intent of internet users. When you follow the search engine's guidelines properly while writing, editing, and formatting the content, your content is likely to get ranked on the search results. </p>

                        <p className="pt-3 text-xl text-left font-poppins">At Pine Book Writing, our expertise lies in various sectors, including website content, blog posts, articles, product descriptions, book descriptions, and more. Our team of SEO content writers does in-depth research, discover relevant and useful keywords, and write the content while considering being in your audience's shoes. This approach leads your website or content to be ranked higher.</p>
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Seo-Content/ghost-pic.webp"} width={470} height={300}
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
                                                    src="/images/Seo-Content/cta-book-12.webp"
                                                    alt="Book 1"
                                                    className="absolute l-book -top-20 md:-top-36"
                                                    height={600}
                                                    width={600}
                                                />
                                            </div>
                        
                                            <div className="px-4 text-center md:col-span-6">
                                                <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                                                    Ready to Uplift Your Website? The Best SEO Content Writing Service
                                                </h2>
                                                <p className="py-4 text-base md:text-lg">
                                                    Don’t let your website go unnoticed. Our SEO content writing services can help your site grow on multiple search engines using relevant and high-volume keywords.
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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our SEO Writing Services</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Understand Your Business</h2>
                                <p className="">Our process begins with understanding your business goals, and your target audience in order to write reader and SEO-friendly content. </p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Keyword Research</h2>
                                <p className="">Our competent SEO team conducts thorough keyword research leveraging the most advanced tools to identify high-volume and low-competitive keywords.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Create Content</h2>
                                <p className="">Once the research is done, our SEO writers get to work and write content that is engaging, informative, and adhering to the Search Engine Guidelines.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Optimization</h2>
                                <p className="">Then, we optimize your content with meta titles & descriptions, tags, images, and other SEO trends to ensure it ranks higher in search engine results pages.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Editing & Revision</h2>
                                <p className="">In this phase, our team of editors will proofread the content to ensure there are no grammatical, punctual, or structural errors. We will also revise the content upon your request.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Final Delivery</h2>
                                <p className="">In the last step, we deliver the SEO-optimized content in your desired format and within the promised delivery time to ensure your utmost satisfaction with the work.</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>
            
            <section className="overflow-hidden" >
                <div className="relative left-0 px-12 py-10 mt-0 mb-8 brand-choose-us-section ms-auto md:left-52 md:px-20 md:mt-14 " >
                    <div className="flex flex-col items-center md:flex-row" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                        <Image src={"/images/Seo-Content/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/3 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Our SEO Content Writing Services?</h2>
                            <p className="mt-2 text-white">Skyrocket your online visibility with our impeccable SEO-optimized content writing services. We have a professional team of SEO content writers and SEO specialists who specialize in strategic content planning writing engaging and optimized content that helps improve rankings.</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Expert SEO Writers </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />SEO Specialists </li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Keyword Optimization </li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Engaging Content</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Timely Delivery</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Proven Results</li>
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
