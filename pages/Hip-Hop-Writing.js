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


export default function BookEditing() {
    const handleOpenChat = () => {
        window.zE && window.zE('webWidget', 'open');
    };

    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "Do you write in different hip hop styles?", answer: "Yes, we write in multiple styles. Trap. Boom bap. Melodic. Conscious. Drill. We write and adjust flow and tone based on your sound. Not any ready-made or fixed template." },
        
        { question: "ICan you write to my existing beat?", answer: "Absolutely. Beat-based lyric writing is preferred. It helps with flow, bar length, and overall delivery." },
       
        { question: "Will the lyrics sound like me?", answer: "Absolutely, that’s our main goal. We ask questions and do research. Then we write in a way that fits your voice. Not ours." },
       
        { question: "Do you offer hip hop ghostwriting services?	", answer: "Yes. Ghostwriting is one of our main cores. We maintain full confidentiality. You own the lyrics 100% once delivered." },
        
        { question: "Can you help with hooks only?", answer: "Yes. Chorus and hook writing is available if verses are already done or planned. Feel free to discuss in detail." },
       
        { question: "Is this service for beginners or professionals?", answer: "Both. We work with new artists and experienced hip hop artists who just want sharper writing. Both are welcome at Pine Book Writing. " },
            ];

    return (
        <>
            <Head>
                <title>Hip Hop Writing Services | Hip Hop Ghostwriter for Hire</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/Hip-Hop-Writing" />
                <meta
                    name="description"
                    content="Our hip hop writing services offer ghostwriting support to new and old hip-hop artists. Our team of hip hop writers handles all aspects of bringing lyrics to life."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/Hip-Hop-Writing/1.webp"}
                title="Hip Hop Writing Service Built For Real Voices"
                desc="Our hip hop writing service helps artists turn raw thoughts into tight bars. From writing rap lyrics to hooks and full songs, we support every stage of the creative process. Our hip hop writers focus on flow, feeling, and authenticity."
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Hip Hop Writing Service With Real Bars</h2>

                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                        Lyrics That Match Your Flow
                        </h2>
                       
                        <p className="pt-3 text-xl text-left font-poppins">
                       Are you an artist and want to up your game in hip-hop? You're at the right place. Our hip-hop writing services are made for you. Made for artists who want lyrics that actually sound like them. not copied styles or recycled lines.</p>

                        <p className="pt-3 text-xl text-left font-poppins">With years of experience, our writers work with authentic creativity and originality  to every project. Whether you're stuck on a verse, need help writing rap lyrics from scratch, or want to hire hip hop rap ghostwriters who truly understand hip hop culture, we're ready to help. We take time to listen first. Some artists want conscious rap lyrics. Some want commercial hooks. Others just want bars that hit hard on the beat.</p>
                        <p className="pt-3 text-xl text-left font-poppins">Our hip-hop writers work with cadence, punchlines and overall structure. We don’t overfill lines. We don’t force metaphors. Every verse is written to sit naturally on the beat, not fight it.</p>
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Hip-Hop-Writing/ghost-pic.webp"} width={470} height={300}
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

               <section className="relative overflow-visible text-white bg-center bg-no-repeat bg-cover ser-cta-banner py-14 md:py-0"
                                                    style={{ backgroundImage: `url(/brand-img/bg-banner.png)` }}>
                                                    <div className="relative grid items-center grid-cols-1 gap-4 mx-auto md:grid-cols-12 max-w-7xl ">
                                    
                                                        <div className="relative z-10 justify-center hidden md:col-span-3 md:flex md:justify-start">
                                                            <Image
                                                                src="/images/Hip-Hop-Writing/cta-book-12.webp"
                                                                alt="Book 1"
                                                                className="absolute l-book -top-20 md:-top-36"
                                                                height={600}
                                                                width={600}
                                                            />
                                                        </div>
                                    
                                                        <div className="px-4 text-center md:col-span-6">
                                                            <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                                                              Let Your Lyrics Speak Louder - Hire Best Hip Hop Songwriters
                                                            </h2>
                                                            <p className="py-4 text-base md:text-lg">
                                                               Got ideas but can’t lock the words? Hire a hip hop writer who understands flow, hooks, and real expression. Let’s write something that truly fits your voice.
                                                            </p>
                                    
                                                            <div className="flex flex-col items-center justify-center gap-4 cta-btns sm:flex-row">
                                                                         <CTAButton />
                                    
                                    
                                                                <a
                                                                    href="tel:(866) 841-7463"
                                                                    className="flex items-center gap-2 text-white">
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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Hip Hop Writing Service</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Sound & Style Check</h2>
                                <p className="">We start by understanding your sound. Old-school, trap, drill, conscious, or melodic. We also ask about references, influences, and what you don’t want. That part matters more than people think.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Idea & Message Mapping</h2>
                                <p className="">Next, we break down the topic, mood, and message. Whether it’s storytelling or punchline-heavy, we shape the idea so the verse doesn’t drift halfway through.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Beat & Flow Alignment</h2>
                                <p className="">If you have a beat, we write directly to it. Flow, cadence, and bar length are adjusted so lyrics sit naturally. No rushed syllables. No awkward pauses.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Writing Bars & Hooks</h2>
                                <p className="">This is where writing rap lyrics happens. Verses, hooks, bridges (if needed). We focus on clean rhymes, natural wordplay, and lines that sound good when spoken out loud.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Revisions & Feedback</h2>
                                <p className="">You review everything. Want bars harder? Cleaner? More personal? We adjust it accordingly. Hip hop writing works best when there’s a collaborative work approach used.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Refinement & Delivery</h2>
                                <p className="">Final lyrics are refined for performance. We check rhythm, clarity, and energy. You receive clean files, ready for recording or further production.</p>
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
What’s Included In Our Hip Hop Writing Service
  </h2>

  <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
From single verses to full songs, our hip hop writing service covers everything. Lyrics. Hooks, structure. We write with care, awareness and respect for your sound.
  </p>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
     { icon: '🖋️', label: 'Rap Lyric Writing' },
      { icon: '🧐', label: 'Hook & Chorus Writing' },
      { icon: '📄', label: 'Full Hip Hop Songwriting' },
      { icon: '💼', label: 'Ghostwriting for Artists' },
      { icon: '⚙️', label: 'Punchline & Bar Writing' },
      { icon: '🎯', label: 'Beat-based Lyric Writing' },         
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
                        <Image src={"/images/Hip-Hop-Writing/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/2 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">Beat-based Lyrics
Writing
</h2>
                            <p className="mt-2 text-white">We write hip hop like it’s supposed to be written. We listen to you first. Understand culture. And use absolutely no shortcuts. With our hip-hop ghostwriting service, your lyrics always stay yours. We just help shape them better.</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Real flow sense </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Clean punchlines</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Culture-aware writers</li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Voice protection</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Beat-first writing</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Private ghostwriting</li>
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
