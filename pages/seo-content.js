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
                <meta
                    name="description"
                    content="Everything about Pine Book Writing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
                <BrandTopBar/>
            <BrandNavbar />
            <BrandPrimaryHeader
                            photo_banner={"/brand-img/seo-content.png"}
                title="Expert SEO Content Writing Services"
                desc="If you are a business website owner, an SEO specialist, or even a marketing agency looking for professional SEO-optimized content writing services, you’ve reached the right place. At Pine Book Writing we handle all aspects of SEO content writing, from keyword research and content strategy planning to writing; we’re with you every step of the way. "
            />
            <BrandBannerLogo />

            <div className="container mx-auto max-w-screen-xl overflow-hidden pt-0 md:pt-20">
                <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row px-8 md:px-0 py-10 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                       
                        <h2 className="font-poppins text-3xl md:text-4xl uppercase font-bold">Professional SEO Writing Services </h2>
                        <h2 className="font-poppins text-2xl md:text-3xl uppercase">
                        Boost Your Search Engine Ranking 
                        </h2>
                        <p className="font-poppins text-xl text-left pt-3">
                        Search engine optimization does not mean overly stuffing your content with keywords and waiting for it to be ranked high. It's all about understanding the search intent of internet users. When you follow the search engine's guidelines properly while writing, editing, and formatting the content, your content is likely to get ranked on the search results. </p>

                        <p className="font-poppins text-xl text-left pt-3">At Pine Book Writing, our expertise lies in various sectors, including website content, blog posts, articles, product descriptions, book descriptions, and more. Our team of SEO content writers does in-depth research, discover relevant and useful keywords, and write the content while considering being in your audience's shoes. This approach leads your website or content to be ranked higher.</p>
                    </div>
                    <div className="basis-1/2 abt-pic text-center flex justify-center md:justify-center">
                        <Image src={"/brand-img/seo-pic.webp"} width={470} height={300}
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

              {/* inner process section start */}
              <section className="brand-process my-10  mx-auto relative pt-10 text-center flex justify-center mb-12 overflow-hidden">
                <div className="max-w-screen-xl">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl text-black font-poppins">Our Services Workflow</h3>
                        <h2 className="font-poppins text-3xl md:text-4xl text-black font-bold" data-aos="zoom-out-down">6-Step Process of Our SEO Writing Services</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="brand-process-content text-left flex-col px-6 py-10">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Understand Your Business</h2>
                                <p className="">Our process begins with understanding your business goals, and your target audience in order to write reader and SEO-friendly content. </p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Keyword Research</h2>
                                <p className="">Our competent SEO team conducts thorough keyword research leveraging the most advanced tools to identify high-volume and low-competitive keywords.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Create Content</h2>
                                <p className="">Once the research is done, our SEO writers get to work and write content that is engaging, informative, and adhering to the Search Engine Guidelines.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-6" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Optimization</h2>
                                <p className="">Then, we optimize your content with meta titles & descriptions, tags, images, and other SEO trends to ensure it ranks higher in search engine results pages.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Editing & Revision</h2>
                                <p className="">In this phase, our team of editors will proofread the content to ensure there are no grammatical, punctual, or structural errors. We will also revise the content upon your request.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Final Delivery</h2>
                                <p className="">In the last step, we deliver the SEO-optimized content in your desired format and within the promised delivery time to ensure your utmost satisfaction with the work.</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>
            
            <section className="overflow-hidden" >
                <div className="brand-choose-us-section ms-auto relative left-0 md:left-52 px-12 md:px-20 mt-0 md:mt-14 mb-8 py-10 " >
                    <div className="flex items-center flex-col md:flex-row" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                        <Image src={"/brand-img/Why Choose Us 2.png"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/3 md:ml-20">
                            <h2 className="text-white font-poppins text-2xl md:text-4xl uppercase mt-10 md:mt-0 font-bold" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Our SEO Content Writing Services?</h2>
                            <p className="text-white mt-2">Skyrocket your online visibility with our impeccable SEO-optimized content writing services. We have a professional team of SEO content writers and SEO specialists who specialize in strategic content planning writing engaging and optimized content that helps improve rankings.</p>
                            <div className="flex flex-col md:flex-row gap-2 md:gap-10 mt-6">
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Expert SEO Writers </li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />SEO Specialists </li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Keyword Optimization </li>
                                </ul>
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Engaging Content</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Timely Delivery</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Proven Results</li>
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
