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
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import CTAButton from './components/CTAButton';        


export default function BookEditing() {
    const handleOpenChat = () => {
        window.zE && window.zE('webWidget', 'open');
    };

    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "How long does autobiography writing usually take?", answer: "It depends on your story length and how detailed it is. Some books take a few months. Others need more time. We don’t rush timelines. Feel free to contact us and know the exact timeline for your work." },

        { question: "Will the autobiography sound like me?", answer: "Yes. That’s our main goal. We write in your voice, based on your interviews and feedback. If something feels off, we listen to you carefully and fix it." },

        { question: "Is my story kept confidential?", answer: "Absolutely. Confidential ghostwriting is the core part of our process. Your life story is never shared with any third party without your permission." },

        { question: "Can you help if I only have rough memories?	", answer: "Why not? You’re not alone if this is the case. Many clients start with nothing written. We guide you through questions and conversations to shape your life story in a natural way." },

        { question: "Do you offer editing only?", answer: "Yes. If you have already written your autobiography and want us to check and fix the flaws, our autobiography editing service is for you. We help improve flow, clarity and overall structure." },

        { question: "Is this service only for famous people?", answer: "Not at all. Every life has a story worth telling. Our autobiography writers work with everyday people too. " },
    ];

    return (
        <>
            <Head>
                <title>Best Autobiography Writing Services | Pine Book Writing</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/Autobiography-Writing" />
                <meta
                    name="description"
                    content="Looking for the best autobiography writing services? We have highly competent ghostwriters at Pine Book Writing to help you write your personal life story"
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/Autobiography-Writing/1.webp"}
                title="Autobiography Writing Services That Respect Your Story"
                desc="Your life isn’t a template. Your life story should be written in your voice. We are offering exceptional autobiography writing services for those who want to write their real-life memories and present them in a clean and professional book. Get in touch with us today!"
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Best Autobiography Writers for Hire</h2>

                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                           Your Story, Told Right
                        </h2>

                        <p className="pt-3 text-xl text-left font-poppins">
                          Writing an autobiography is personal. Sometimes emotional too. We don’t rush it. The thing that differentiates our autobiography writing services from others is that it is built for people who want their life story written with care, not noise. </p>

                        <p className="pt-3 text-xl text-left font-poppins">Some clients come with notes. Others with just memories and feelings. And that’s fine. Our autobiography writers take time to listen, ask the right questions and shape your personal life story naturally. No forced drama. No pretending.</p>
                         <p className="pt-3 text-xl text-left font-poppins">Whether you’re writing your autobiography for family, legacy, or publishing, we help organize events, emotions and timelines clearly. If you need an autobiography ghostwriter separately, your privacy is protected. Always. We focus on true life story writing that reads smoothly and humanly. That’s how it feels real.</p>
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image  src="/images/Autobiography-Writing/ghost-pic.webp" width={470} height={300}
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
                            src="/images/Autobiography-Writing/cta-book-12.webp"
                            alt="Book 1"
                            className="absolute l-book -top-20 md:-top-36"
                            height={600}
                            width={600}
                        />
                    </div>

                    <div className="px-4 text-center md:col-span-6">
                        <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                          You Don’t Have To Write It Alone - Let’s Help!
                        </h2>
                        <p className="py-4 text-base md:text-lg">
                           Writing feels overwhelming? That’s normal. Just hire the best autobiography writing services at <a href="https://www.pinebookwriting.com" className="text-[#98caa9] underline">Pine Book Writing</a>. Our autobiography writers guide you through the process and handle all the hard parts. Let’s get connected!
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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Autobiography Writing Services</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Story Discovery</h2>
                                <p className="">We begin with listening. Your memories, milestones, and your concerns. Writing an autobiography works best when we fully understand your life story and what matters most to you.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Interview & Notes</h2>
                                <p className="">One of our project managers conducts relaxed interviews, and our writers review your notes. Nothing formal. Just natural talks that help understand emotions, tone, and important life moments.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Structure Planning</h2>
                                <p className="">Then, we organize events into a clean timeline. Childhood. Growth. Challenges and turning points. This keeps the autobiography writing clear and easy to follow, without confusion or jumps.</p>
                            </div>
                        </div>

                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">First Draft Writing</h2>
                                <p className="">After understanding and planning, we start writing carefully. We focus on personal history writing that sounds like you. Not us. Simple language. Honest moments. No overwriting.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Review & Editing</h2>
                                <p className="">You read the draft, and we revise if anything is required. Autobiography editing helps fix flow and clarity. This step usually needs back and forth, and we’re patient with that.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Final Delivery</h2>
                                <p className="">The final file is prepared, clean and ready. For printing, sharing, or publishing. Confidential ghostwriting is respected till the very last step.</p>
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
 What’s Included In Our Autobiography Writing Services
  </h2>

  <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
Our professional autobiography writing services cover everything. Everything from the author's first interview to final editing. You choose what you need. We adjust the process around your ease and pace.
  </p>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
     { icon: '🖋️', label: 'Autobiography Ghostwriting' },
      { icon: '🧐', label: 'Personal Life Story Writing' },
      { icon: '📄', label: 'Autobiography Editing' },
      { icon: '💼', label: 'Interview-Based Writing' },
      { icon: '⚙️', label: 'Manuscript Structuring' },
      { icon: '🎯', label: 'Confidential Writing Support' },         
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
                <div className="relative left-0 px-12 py-10 mb-8 brand-choose-us-section ms-auto md:left-52 md:px-20 md:mt-16 " >
                    <div className="flex flex-col items-center md:flex-row" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                            <Image src={"/images/Autobiography-Writing/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/2 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">Why People Trust Pine Book Writing With Their Life Stories</h2>
                            <p className="mt-2 text-white">Writing someone’s life story requires trust. We respect that. Our team at Pine Book Writing handles autobiography writing with patience, privacy, and honesty. Our writers make sure your story feels true. Here’s why you should hire us:</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	100% Privacy respected</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Patient listening </li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Calm process</li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Multiple Revisions</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Human writing</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Honest storytelling</li>
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
