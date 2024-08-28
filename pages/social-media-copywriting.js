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

export default function SocialMediaCopywriting () {
    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "Why should I hire Pine Book Writing for Social Media Copywriting?", answer: "Every social media platform has a unique algorithm to determine how content is presented. For instance, video content often works well on TikTok, while image content might be effective on Facebook, and both types of content work more well on Instagram. Our team of social media experts is immensely familiar with these algorithms and can strategize your content accordingly." },
        
        { question: "For which Social Media platforms will you provide content?", answer: "We specialize in offering content creation for almost all social media platforms, including Facebook, Instagram, X (ex-Twitter), LinkedIn, and TikTok. We can mirror your writing style according to the specific characteristics of each chosen platform." },
       
        { question: "Do you also offer Social Media Management & Advertising Services?", answer: "Yes, having our partner company named Pine Digital Hub, we can cater to all your social media needs, from creating video and graphical content to strategic social media management. Feel free to contact our customer service representative for further information." },
       
        { question: "How is Social Media Copywriting different from Social Media management?", answer: "Social media copywriting focuses on creating premium-quality content for social media platforms. Conversely, social media management involves supervising overall social media strategy, content creation, and scheduling." },
        
        { question: "What information do you require to get started?", answer: "Upon your signup, you will receive a simple brief form through which you will provide us with all the required information about your brand, your audience, and your desired outcome." },
       
        { question: "How much does Social Media Copywriting Cost?", answer: "The cost of the Social Media Copywriting will be entirely based on the length and the type of content you need for your social media. It also depends on the number of social media platforms for which you need content." },
            ];

    return (
        <>
            <Head>
                <title>Social Media Copywriting | Pine Book Writing</title>
                <meta
                    name="description"
                    content="Everything about Pine Book Writing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/brand-img/social-media-copywriting.png"}
                title="Be Social, Engage People - Professional Social Media Copywriting Service"
                desc="Struggling to create social media content? Let us help! Our team of skilled copywriter put their expertise into crafting engaging posts that drive organic reach, maximize engagement, and uplift your brand's presence. We offer all-inclusive services, from persuasive copy to attention-grabbing graphics and videos."
            />
            <BrandBannerLogo />

            <div className="container mx-auto max-w-screen-xl overflow-hidden py-10 md:py-20">
                <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row px-10 md:px-0 py-10 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        <h3 className="font-poppins text-2xl md:text-3xl uppercase">
                        Bespoke Social Media Copy for Every Platform 
                        </h3>
                        <h2 className="font-poppins text-3xl md:text-4xl uppercase font-bold">Professional Social Media Copywriting Company</h2>
                       
                        <p className="font-poppins text-xl text-justify	pt-3">
                        Social media is a crucial tool for your business if you want to get and retain your potential audience. To create a post, you need to hire social media copywriting services to help you build an emotional and friendly connection with your audience and accomplish all your marketing objectives. That's where Pine Book Writing comes in.</p>

                        <p className="font-poppins text-xl text-justify	pt-3">Pine Book Writing offers impeccable social media copywriting with a dedicated team of passionate writers whose expertise lies in writing short and snappy to longer post copies and captions for various social channels such as Facebook, Instagram, LinkedIn, and X (ex-Twitter). We have helped many clients of various industries. Contact us today for a free consultation!</p>
                    </div>
                    <div className="basis-1/2 abt-pic text-center flex justify-center md:justify-center">
                        <Image src={"/brand-img/Social-Media.png"} width={470} height={300}
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
                            <h2 className="text-white font-poppins text-3xl md:text-4xl uppercase mt-20 md:mt-0 font-bold" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Our Social Media Copywriting?</h2>
                            <p className="text-white mt-2">At Pine Book Writing, we offer more than just our words. Our team of skilled social media copywriters blends creativity, data-driven insights, and immense expertise to write engaging content that brings results.</p>
                            <div className="flex gap-10 mt-6">
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Expert Copywriters </li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Tailored Content </li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Engaging Copy </li>
                                </ul>
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Data-Driven Approach</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Brand Voice Alignment</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Multi-channel Expertise</li>
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
