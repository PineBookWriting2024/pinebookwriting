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


export default function ProductDescription () {
    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };
    const handleOpenChat = () => {
        window.zE && window.zE('webWidget', 'open');
    };

    const faqData = [
        { question: "Do you conduct keyword research and provide meta titles & descriptions for Product Pages?", answer: "keywords research and writing meta descriptions and tiles are part of SEO-optimized content. If you want to write SEO-optimized product copies, you have to sign up for our SEO content writing services." },
        
        { question: "How long will it take to deliver the product descriptions?", answer: "The time of delivery may vary. It depends on how many copies of the product description you require. Generally, we deliver 80 or fewer copies within 15-20 days." },
       
        { question: "What information is required to start my Product Descriptions?", answer: "To get started, you will have to fill out a simple brief form provided by our project manager to provide all the necessary information related to your product and platform. You can also tell us anything else not asked by us in the questionnaire." },
       
        { question: "Can I utilize the same product description on more than one website?", answer: "Using the same product description on multiple websites isn’t good for SEO. Search engines penalize duplicate content, and the search engine can also deindex your product pages." },
        
        { question: "Do you also provide the Product Category Descriptions?", answer: "Absolutely, we offer product category page writing services. However, it comes under our website content writing services." },
       
        { question: "Can you provide the niche-based product descriptions?", answer: "We have a massive team of writers with over a decade of experience. They are experienced enough to write product descriptions for almost every niche by having years of experience in product copywriting." },
            ];

    return (
        <>
            <Head>
                <title>Product Description | Pine Book Writing</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/product-description" />

                <meta
                    name="description"
                    content="Everything about Pine Book Writing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
                <BrandTopBar/>
            <BrandNavbar />
            <BrandPrimaryHeader
                 photo_banner={"/brand-img/product-description-banner.png"}
                title="Write That Sells – Expert Product Description Writing Services"
                desc="Want to describe your products quickly and persuasively? If so, you've come to the right place. We have a team of industry-leading product description writers who are capable of grabbing your audience's attention and highlighting key features of your product. Let’s showcase your product now!"
            />
            <BrandBannerLogo />

            <div className="container mx-auto max-w-screen-xl overflow-hidden pt-0 md:py-20">
                <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row px-8 md:px-0 py-10 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        
                        <h2 className="font-poppins text-3xl md:text-4xl uppercase font-bold">Hire Multi-Niche Product Description Writing Services</h2>
                        <h2 className="font-poppins text-2xl md:text-3xl uppercase">
                        Stand Out from Other Sellers
                        </h2>
                        <p className="font-poppins text-xl text-left pt-3">You cannot persuade your audience to buy your product without describing what features and values your product offers. You must have a quick and comprehensive product description separately presented on each product page. By having a professionally written product description, you can engage, inform, and help your customers make purchasing decisions swiftly and confidently.</p>

                        <p className="font-poppins text-xl text-left pt-3">At Pine Book Writing, our expert product description writers create on-point, precise, and engaging descriptions for any niche. Whether you are selling clothing, electronic appliances, health & well-being products, home groceries, or any other product, our writers have proved their exceptional expertise by working with numerous business niches. We write product copies considering the particular ecommerce platform’s format and guidelines, including the famous ones, Amazon, eBay, Walmart, Shopify, WooCommerce, and more to help your product stand out in the crowded market. So, don’t copy-paste a generic product description like others, write a very unique one, that sells!</p>
                    </div>
                    <div className="basis-1/2 abt-pic text-center flex justify-center md:justify-center">
                        <Image src={"/brand-img/Product-Descriptions.png"} width={470} height={300}
                            loading="lazy"
                            alt="about img"
                            className="aos-init aos-animate"
                            data-aos="fade-left" data-aos-duration="1000"
                        />
                    </div>
                </div>
                {/* <p className="font-poppins text-xl text-justify	px-10 md:px-0" data-aos="fade-right">
                    Don't let an ordinary resume hold you back. Contact us now to schedule a consultation and step ahead towards your success.
                </p> */}
            </div>


            
            <section className="ser-cta-banner bg-no-repeat bg-cover bg-center text-white relative overflow-visible py-18 md:py-0"
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
                                        Hire Product Descriptions Writing Service That Motivates Sales
                                    </h2>
                                    <p className="text-base md:text-lg py-4">
                                       Make your customers able to make informed decisions. We write product descriptions that highlight real features, benefits, and other values in a relevant tone.
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
                        <h2 className="font-poppins text-3xl md:text-4xl text-black font-bold" data-aos="zoom-out-down">6-Step Process of Our Product Copywriting Services</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="brand-process-content text-left flex-col px-6 py-10">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Project Consultation</h2>
                                <p className="">We begin our process by having a detailed discussion with you about your product(s), its key features, and your target audience.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Product Research</h2>
                                <p className="">Next, we start in-depth research about your product, its benefits, and features and analyze your competitors to plan an effective strategy.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Keyword Research</h2>
                                <p className="">Our expert SEO executive will do keyword research to determine which keywords should be used to rank your product in customers' search results.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-6" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Writing & Revision</h2>
                                <p className="">Then, our writers craft informative yet persuasive copies to spotlight your product's features. We also offer multiple-revisions to ensure absolute satisfaction.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Proofreading and Editing</h2>
                                <p className="">We take each copy through our editing and proofreading process to ensure it's errorless, on-point and meets the required length.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Final Delivery</h2>
                                <p className="">Finally, we compile each product description copy in a well-formatted document and deliver it to you within the promised delivery time.</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>
            
            <section className="overflow-hidden" >
                <div className="brand-choose-us-section ms-auto relative left-0 md:left-52 px-12 md:px-20 mb-8 py-10 md:mt-16" >
                    <div className="flex items-center flex-col md:flex-row" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                        <Image src={"/brand-img/Why Choose Us 2.png"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/3 md:ml-20">
                            <h2 className="text-white font-poppins text-2xl md:text-4xl uppercase mt-10 md:mt-0 font-bold" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Our Product Description Writing Services?</h2>
                            <p className="text-white mt-2">At Pine Book Writing, our long-tenure experienced writers create personalized and easy-to-understand product descriptions by doing in-depth research and avoiding copy-paste and industry jargon to help your audience make informed purchase decisions.</p>
                            <div className="flex flex-col md:flex-row gap-2 md:gap-10 mt-6">
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Strategic Research </li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Self-Written Copies </li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Dedicated Writers </li>
                                </ul>
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Multiple Revisions</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Bullet Points</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />No Jargons</li>
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
