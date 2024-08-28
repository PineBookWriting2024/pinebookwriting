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

export default function BlogWriting () {
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
                <meta
                    name="description"
                    content="Everything about Pine Book Writing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
            <BrandNavbar />
            <BrandPrimaryHeader
            photo_banner={"/brand-img/blog-article-writing.png"}
                title="Professional Article & Blog Writing Services"
                desc="Pine Book Writing offers premium article and blog writing services to help website owners, marketers, and bloggers get flawless and engaging pieces of content for their purposes. Contact us to get a free quote now!"
            />
            <BrandBannerLogo />

            <div className="container mx-auto max-w-screen-xl overflow-hidden pt-10 md:pt-20">
                <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row px-10 md:px-0 py-10 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        <h3 className="font-poppins text-2xl md:text-3xl uppercase">
                        Drive More Traffic & Engagement with  
                        </h3>
                        <h2 className="font-poppins text-3xl md:text-4xl uppercase font-bold">Professional Article and Blog Writing Services</h2>
                       
                        <p className="font-poppins text-xl text-justify	pt-3">Are you a blogger willing to share your experiences or stories with others? Or are you a website owner or marketer searching for professional article and blog writing services to rank your website in search engine results? Pine Book Writing has you covered!</p>

                        <p className="font-poppins text-xl text-justify	pt-3">Whether you are going to start a personal blog or have to write any type of article to drive more traffic to your business website, such as a product review, a news article, an informative guide, and more, all you need to have is well-researched and quality content. At Pine Book Writing, our experienced article and blog writers start their work with in-depth research and adhere to the SEO best practices that help your website rank high on search engine result pages (SERPs). They are also familiar with multiple writing styles and tones to meet your specific writing needs.</p>
                    </div>
                    <div className="basis-1/2 abt-pic text-center flex justify-center md:justify-center">
                        <Image src={"/brand-img/blog-article-pic.webp"} width={470} height={300}
                            loading="lazy"
                            alt="about img"
                            className="aos-init aos-animate"
                            data-aos="fade-left" data-aos-duration="1000"
                        />
                    </div>
                </div>
                <p className="font-poppins text-xl text-justify pt-3 px-10 md:px-0" data-aos="fade-right">
                So why wait? Contact us today to discuss your next writing project and see how we help our clients to thrive in their pursuits.
                </p>
            </div>

            {/* inner process section start */}
             {/* <section className="brand-process  mx-auto relative pt-10 text-center flex justify-center mb-12 overflow-hidden">
                <div className="max-w-screen-xl">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl text-black font-poppins">6-Step Process of Our Ghostwriting Services</h3>
                        <h2 className="font-poppins text-3xl md:text-4xl text-black font-bold" data-aos="zoom-out-down">6-Step Process of Our Ghostwriting Services</h2>
                    </div>
                    <div className="relative" data-aos="fade-left">
                        <Image src={"/brand-img/process-img1.png"} width={700} height={200} className=" pb-10" ></Image>
                        <div className="brand-process-content text-left">
                            <h2 className="font-poppins text-2xl">Project Manager Assigning & Questionnaire</h2>
                            <p className="">Elevate your manuscript with our editing  <br></br>service that ensures every word tells <br></br>your story the way you intended.</p>
                        </div>
                    </div>
                    <div className="relative" data-aos="fade-right">
                        <Image src={"/brand-img/process-img2.png"} width={700} height={200} className=" pb-10" ></Image>
                        <div className="brand-process-content-right text-right">
                            <h2 className="font-poppins text-2xl">Research & Outlining:</h2>
                            <p className="">Then, our team of professionals will<br/> conduct in-depth research, create a content outline, and send it to you for your approval.</p>
                        </div>
                    </div>
                    <div className="relative" data-aos="fade-left">
                        <Image src={"/brand-img/process-img3.png"} width={700} height={200} className=" pb-10"></Image>
                        <div className="brand-process-content text-left">
                            <h2 className="font-poppins text-2xl">Proofreading:</h2>
                            <p className="">Our proofreading team is your safety net, <br></br> catching every slip-up to make your<br></br> writing flawless.</p>
                        </div>
                    </div>
                    <div className="relative" data-aos="fade-right">
                        <Image src={"/brand-img/process-img4.png"} width={700} height={200} className=" pb-10" ></Image>
                        <div className="brand-process-content-right text-right">
                            <h2 className="font-poppins text-2xl">Typesetting & Layout:</h2>
                            <p className="">Expert typesetting that makes your <br></br>book as easy on the eyes as it is <br></br>engaging for the mind.</p>
                        </div>
                    </div>

                    <div className="relative" data-aos="fade-left">
                        <Image src={"/brand-img/process-img5.png"} width={700} height={200} className=" pb-10"></Image>
                        <div className="brand-process-content text-left">
                            <h2 className="font-poppins text-2xl">Cover Design:</h2>
                            <p className="">We create covers that speak to readers,<br></br> inviting them into the world <br></br>you've created.</p>
                        </div>
                    </div>
                    <div className="relative" data-aos="fade-right">
                        <Image src={"/brand-img/process-img6.png"} width={700} height={200} className=" pb-10"></Image>
                        <div className="brand-process-content-right text-right">
                            <h2 className="font-poppins text-2xl">Publishing:</h2>
                            <p className="">Your literary journey culminates with our<br></br> publishing service, placing your book<br></br> in the spotlight it deserves.</p>
                        </div>
                    </div>
                </div>
            </section> */}
            
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
                            <h2 className="text-white font-poppins text-3xl md:text-4xl uppercase mt-20 md:mt-0 font-bold" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Our Article & Blog Writing Service?</h2>
                            <p className="text-white mt-2">Start your own blog or write SEO-optimized articles for various purposes. We offer affordable article & blog writing services leveraging the immense expertise of experienced article writers and bloggers.</p>
                            <div className="flex gap-10 mt-6">
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Niche-Selection </li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> High-Quality Writing </li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Timely Delivery </li>
                                </ul>
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Topic Suggestions</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Affordable Pricing</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> 100% Plagiarism-Free</li>
                                </ul>
                            </div>
                            {/* <BrandAudioPlayer src="/brand-img/why-choose-us-voice.wav" /> */}
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
            
            <BrandFooter />
        </>
    );
}
