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
        { question: "What kind of articles and blogs do you write?", answer: "Having a diverse team of article writers and bloggers on board, we produce a variety of articles and blogs, from informative, promotional (persuasive), and product reviews to entertaining content. Whether you require a blog or an in-depth article, they are familiar with various topics and styles to meet your needs." },

        { question: "How do I provide topic ideas for my articles and blogs?", answer: "You are always open to sharing your unique and creative ideas, keywords, or target audience with us. However, we also help select the right niche and suggest different engaging and trending topic ideas to thrive in your industry." },

        { question: "Can I request revisions to the article or blog?", answer: "Absolutely! Unlike many others, Pine Book Writing offers multiple revisions to achieve 100% client satisfaction. We embrace our clients’ valuable feedback and work together with you to make the necessary changes to make your post entirely according to your requirements." },

        { question: "How much does your article and blog writing service cost?", answer: "The exact pricing for your article and blog project is entirely based on your project’s scope, tenure, and complexity. However, you will get transparent and affordable pricing from our customer service team." },

        { question: "How long does it take to write an article or blog?", answer: "The time required to write an article or a blog depends on your specific niche, requirements, and word count, whether you need a 500-word-long article or a 2000-word-long blog post, a general blog post, or a keyword-rich article. We provide an estimated time of delivery during a project discussion." },

        { question: "Do you offer SEO optimization for articles and blogs?", answer: "Yes, along with all kinds of writing services, here’s a dedicated service named “SEO Content Writing Services,” which is listed among other services. Our SEO writing experts conduct keyword research, optimize content structure, infuse relevant keywords, and adhere to SEO best practices to rank your content in search engine results." },
    ];

    return (
        <>
            <Head>
                <title>Blog Writing | Pine Book Writing</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/blog-article-writing" />
                <meta
                    name="description"
                    content="Everything about Pine Book Writing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandTopBar/>
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/blog-article-writing/1.webp"}
                title="Professional Article & Blog Writing Services"
                desc="Pine Book Writing offers premium article and blog writing services to help website owners, marketers, and bloggers get flawless and engaging pieces of content for their purposes. Contact us to get a free quote now!"
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        
                        <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Professional Article and Blog Writing Services</h2>
                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                            Drive More Traffic & Engagement
                        </h2>
                        <p className="pt-3 text-xl text-left font-poppins">Are you a blogger willing to share your experiences or stories with others? Or are you a website owner or marketer searching for professional article and blog writing services to rank your website in search engine results? Pine Book Writing has you covered!</p>

                        <p className="pt-3 text-xl text-left font-poppins">Whether you are going to start a personal blog or have to write any type of article to drive more traffic to your business website, such as a product review, a news article, an informative guide, and more, all you need to have is well-researched and quality content. At Pine Book Writing, our experienced article and blog writers start their work with in-depth research and adhere to the SEO best practices that help your website rank high on search engine result pages (SERPs). They are also familiar with multiple writing styles and tones to meet your specific writing needs.</p>
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
                                                                src="/images/Blog-article-writing/cta-book-12.webp"
                                                                alt="Book 1"
                                                                className="absolute l-book -top-20 md:-top-36"
                                                                height={600}
                                                                width={600}
                                                            />
                                                        </div>
                                    
                                                        <div className="px-4 text-center md:col-span-6">
                                                            <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                                                                Looking for a Professional Blog & Article Writing Service? Let’s Connect!
                                                            </h2>
                                                            <p className="py-4 text-base md:text-lg">
                                                                We have a dedicated team of blog and article writers who write content that informs, inspires, and helps make your audience keep reading your work.
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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Article & Blog Writing Services</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Project Discovery</h2>
                                <p className="">Our writing process begins with understanding your target audience, writing style, and other requirements to create content aligned with your vision.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Conduct Research</h2>
                                <p className="">In this step, our team of writers conducts detailed research on your topic before writing the content to ensure the content is appropriately up-to-date.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Content Writing</h2>
                                <p className="">After the research, one of our dedicated writers gets to work and create content based on your unique vision and requirements.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Editing</h2>
                                <p className="">Our expert editors take a meticulous review and make necessary changes/edits to make your content error-less and readable.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Plagiarism Check</h2>
                                <p className="">Your content must be 100% unique. We use premium plagiarism-detection tools to ensure your content is not copied from anywhere.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Revision & Delivery</h2>
                                <p className="">We will send you the draft and provide multiple revisions until it's perfect. Lastly, we'll deliver the final document in your desired format.</p>
                            </div>
                        </div>
                        
                    </div>

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
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Our Article & Blog Writing Service?</h2>
                            <p className="mt-2 text-white">Start your own blog or write SEO-optimized articles for various purposes. We offer affordable article & blog writing services leveraging the immense expertise of experienced article writers and bloggers.</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Niche-Selection </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> High-Quality Writing </li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Timely Delivery </li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Topic Suggestions</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Affordable Pricing</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> 100% Plagiarism-Free</li>
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
