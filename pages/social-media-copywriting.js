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


export default function SocialMediaCopywriting() {
    
const handleOpenChat = () => {
    window.zE && window.zE('webWidget', 'open');
};

    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "Why should I hire Pine Book Writing for social media copywriting?", answer: "Every platform works differently and our social media copywriting team makes sure each piece of content is completely aligned with the specific requirements of the targeted platform. Example: video content works best on TikTok, while static images perform better on Facebook & Instagram, so we create something that perfectly matches each platform's standard requirements and preferences." },

        { question: "For which social media platforms will you provide content?", answer: "Our services are not limited to any specific social media platform, but we create social media copy for Facebook, Instagram, LinkedIn, TikTok, and X (formerly Twitter). We adapt tone and style so your content matches the vibes/nativity of every platform." },

        { question: "Do you also offer social media management and advertising services?", answer: "Yes, we're also running a few sub-brands, one of which is Pine Techware, through which we offer comprehensive digital marketing, design, and development solutions. So yes, along with copywriting for social media, you can acquire professional social media management and marketing services." },

        { question: "What information do you require to get started?", answer: "Want to know the exact cost? It depends on content length, type, and how many platforms you're hiring us for. We don't just offer affordable social media copywriting services, but we also keep transparency (no hidden or extra charges) and flexibility in packages that are absolutely customizable, considering your needs." },

        { question: "How much does your social media copywriting service cost?", answer: "Want to know the exact cost? It depends on content length, type, and how many platforms you're hiring us for. We don't just offer affordable social media copywriting services, but we also keep transparency (no hidden or extra charges) and flexibility in packages that are absolutely customizable, considering your needs." },

        { question: "Is my brand information kept confidential?", answer: "Absolutely! 100% confidentiality. We make sure that everything our client provides is kept confidential and secure and shared with the relevant departments only. We don't even outsource any part of the process. So, you can be sure that all your ideas, brand guidelines, and strategies will always remain secure with us." },
    ];

    return (
        <>
            <Head>
                <title>Social Media Copywriting Services | Pine Book Writing</title>
                                <link rel="canonical" href="https://www.pinebookwriting.com/social-media-copywriting" />

                <meta
                    name="description"
                    content="Skyrocket your brand by hiring Pine Book Writing's social media copywriting services. Create catchy copies with effective strategies that really work."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandTopBar/>
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/Social-Media-Copywriting/1.webp"}
                title="Be Social, Engage People – Expert Social Media Copywriting Services"
                desc="Are you struggling to create social media content? Don't worry! Pine Book Writing also offers exceptional social media copywriting services to those who want to post and make an impact. Our copywriting service for social media includes all social media platforms, from Facebook and Instagram to X and LinkedIn.

"
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                      
                        <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">A Reliable Social Media Copywriting Company USA</h2>
                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                          Bespoke Social Media Copy for Every Platform
                        </h2>
                        <p className="pt-3 text-xl text-left font-poppins">
  Social media is a crucial tool for your business if you want to get and retain your potential audience. To create a post, you need to hire social media copywriting services to help you build an <span className="font-bold">emotional and friendly connection with your audience</span> and accomplish your <span className="font-bold">marketing objectives</span>. That’s where{" "}
  <a
    href="https://www.pinebookwriting.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold underline transition underline-offset-2 hover:text-gray-700"
  >
    Pine Book Writing
  </a>{" "}
  comes in.
</p>

<p className="pt-3 text-xl text-left font-poppins">
  <span className="font-bold">Pine Book Writing</span> offers <span className="font-bold">impeccable social media copywriting</span> with a dedicated team of passionate writers whose expertise lies in writing everything from <span className="font-bold">short captions</span> to <span className="font-bold">longer post copies</span> for platforms like Facebook, Instagram, LinkedIn, and X (ex-Twitter). Our <span className="font-bold">social media copywriters</span> have helped clients from different industries improve <span className="font-bold">engagement and reach</span>. Contact us today for a free consultation!
</p>

                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Social-Media-Copywriting/ghost-pic.webp"} width={470} height={300}
                            loading="lazy"
                            alt="about img"
                            className="aos-init aos-animate"
                            data-aos="fade-left" data-aos-duration="1000"
                        />
                    </div>
                </div>
                {/* <p className="px-10 text-xl text-justify font-poppins md:px-0" data-aos="fade-right">
                    Don't let an ordinary resume hold you back. Contact us now to schedule a consultation and step ahead towards your success.
                </p> */}
            </div>

            
                        <section
                            className="relative overflow-visible text-white bg-center bg-no-repeat bg-cover ser-cta-banner py-14 md:py-0"
                            style={{ backgroundImage: `url(/brand-img/bg-banner.png)` }}>
                            <div className="relative grid items-center grid-cols-1 gap-4 mx-auto md:grid-cols-12 max-w-7xl ">
            
                                <div className="relative z-10 justify-center hidden md:col-span-3 md:flex md:justify-start">
                                    <Image
                                        src="/images/Social-Media-Copywriting/cta-book-12.webp"
                                        alt="Book 1"
                                        className="absolute l-book -top-20 md:-top-36"
                                        height={600}
                                        width={600}
                                    />
                                </div>
            
                                <div className="px-4 text-center md:col-span-6">
                                    <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                                       Getting Only Likes, No Sales? We're Here to Help!
                                    </h2>
                                    <p className="py-4 text-base md:text-lg">
                                      Skyrocket your brand with expert social media copywriting services that help you write inviting yet persuasive posts. Get in touch today!
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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Social Media Copywriting Services</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Goal Discovery</h2>
                                <p className="">Our process begins with a detailed discussion about your goals, audience, and brand voice. This ensures our social media copywriting service aligns with your desired outcome. </p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Profile Setup</h2>
                                <p className="">We help you sign up for new social media accounts or assess your existing profiles to identify gaps and areas for improvement to uplift your online engagement strategy.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Content Planning</h2>
                                <p className="">Our team creates a personalized content plan as a part of the process whether it is copywriting for facebook or other platforms. We make sure it matches your desired goals and connects with your audience.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Copy Creation</h2>
                                <p className="">Our highly competent social media copywriters write something that strengthens your brand message and persuades people to take the actions you want.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Feedback & Revisions</h2>
                                <p className="">We share an easy-to-view content calendar with you so you can review each post's content, give feedback and see if your social media content matches your expectations.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Ongoing Support</h2>
                                <p className="">We provide continued support on strategies, post optimizations, and performance improvements with effective ad copywriting for long-term growth.</p>
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
   Everything We Cover in Social Media Copywriting Service
  </h2>

  <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
  We include everything in our social media copywriting services that you need to make your brand presence robust and professional.
  </p>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
     { icon: '🖋️', label: 'Captions & Posts' },
      { icon: '🧐', label: 'Ad Copywriting' },
      { icon: '📄', label: 'Content Calendars' },
      { icon: '💼', label: 'Hashtag & Tagline Copy' },
      { icon: '⚙️', label: 'Reels & Shorts Scriptwriting' },
      { icon: '🎯', label: 'Copy for Post Designs' },         
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
                            <Image src={"/images/Social-Media-Copywriting/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/3 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Our Social Media Copywriting Services?</h2>
                            <p className="mt-2 text-white">At Pine Book Writing, we believe social media isn't just about posting. Instead, it's a tool to connect and engage people beyond their expectations. That’s why we’ve designed our SMM copywriting service in a way that genuinely helps brands attract attention and bring notable results. Each of your posts matters to us.</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Skilled Copywriters </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Fast Turnaround </li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> 	Platform-Specific Content </li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> 	Affordable Packages</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> 	Graphics & Video Creation</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Brand Voice Alignment</li>
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
