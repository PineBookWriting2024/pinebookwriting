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
        { question: "Do you write full songs or just lyrics?", answer: "Mostly lyrics, but we write them melody-ready. If you have music, we fit words to it. If not, we still keep rhythm in mind." },
        
        { question: "Can I hire a songwriter online from anywhere?", answer: "Yes. Our songwriting services work online. You don’t need to search “song writing services near me”. Location doesn’t matter as long as communication stays clear. However, we’re a Canada-based firm and our second brand is located in USA." },
       
        { question: "What genres do you work with?", answer: "Pop, indie, acoustic, soft rock and simple commercial songs. We have an extensive team of writers and large connections in the music industry. If your project needs honest words. We can help." },
       
        { question: "Will the song sound like my style?	", answer: "That’s the main goal. We don’t copy others. We write around your voice, references, and comfort level. We write what your audience will actually love." },
        
        { question: "How many revisions do you allow?", answer: "We allow multiple reasonable revisions. Songs often need tweaking. We understand that and don’t disappear after the first draft." },
       
        { question: "Do you keep my song idea private?", answer: "Always. Your song, lyrics and ideas always stay yours. We don’t reuse or resell anything. " },
            ];

    return (
        <>
            <Head>
                <title>professional songwriting services | Pine Book Writing</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/Song-Writing" />
                <meta
                    name="description"
                    content="Want to write a song? Our custom songwriting services at Pine Book Writing offer custom lyrics, melody-ready writing, and experienced songwriters for hire."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/Song-Writing/1.webp"}
                title="Best Songwriting Services - Real Songs, Real Lyricists"
                desc="Want to express your voice with catchy yet powerful lyrics that feel honest? No need to worry! Acquire our songwriting services, as we can help you create evocative songs that really connect with people emotionally yet musically. Stop just thinking!"
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Offering Professional Songwriting Services</h2>

                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                      With Real Emotions, Real Words
                        </h2>
                       
                        <p className="pt-3 text-xl text-left font-poppins">
                      At Pine Book Writing, we believe that writing a song isn't about sounding clever all the time. It’s about saying something people can actually feel. With having large connections to expert producers and music artists, we pick the right lyricist from our team. We assign it to someone who works on songs that reach millions of views. </p>

                        <p className="pt-3 text-xl text-left font-poppins">Whether you're up to write a song from scratch, or stuck halfway, our song writers for hire are ready to step in and help you continue until its polished version comes. We keep emotions, lyrics and flow in our focus to create something special and meaningful. No heavy words. No fake depth.</p>
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Song-Writing/ghost-pic.webp"} width={470} height={300}
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
                                                    src="/images/Song-Writing/cta-book-12.webp"
                                                    alt="Book 1"
                                                    className="absolute l-book -top-20 md:-top-36"
                                                    height={600}
                                                    width={600}
                                                />
                                            </div>
                        
                                            <div className="px-4 text-center md:col-span-6">
                                                <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                                                 Let’s Write a Song that Really Hits!
                                                </h2>
                                                <p className="py-4 text-base md:text-lg">Hire a songwriter at <a href="https://pinebookwriting.com" className="text-[#98caa9] hover:underline">Pine Book Writing</a>. We always listen first. Through our exceptional and passionate songwriting service, we’ll help you write songs that sound right and touch the hearts of many.</p>
                        
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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Songwriting Services</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Idea Listening</h2>
                                <p className="">We start by listening. Your mood. Message. Reference tracks. Even your confusion. Song writing works better when we know what you’re trying to say, not just the genre.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Direction Mapping</h2>
                                <p className="">Our songwriter outlines structure, tone, and pacing. We keep nothing complex. Just a clear path so the song doesn’t feel lost halfway through.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Lyric Drafting</h2>
                                <p className="">Then, we begin writing a song using simple words and natural flow. The focus stays on emotion, not fancy lines. Lyrics should sound good when sung aloud.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Melody Fit Check</h2>
                                <p className="">If you have music, we align lyrics to it. Melody-ready songwriting means syllables, pauses, and rhythm feel right, not squeezed or rushed.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Revisions & Tweaks</h2>
                                <p className="">You review. We adjust lines, mood, or hooks. Songwriting is personal, so we expect back and forth. No rush, no ego.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Final Delivery</h2>
                                <p className="">You receive clean lyrics, ready to record or compose further. Our song writing service online makes sure the song feels finished, not half-done.</p>
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
What’s Included In Our Songwriting Services
  </h2>

  <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
Our professional song writing services cover many aspects. Whether you want to write a personal or commercial song, we help create songs that feel smooth and natural.
  </p>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
     { icon: '🖋️', label: 'Custom Song Lyrics Writing' },
      { icon: '🧐', label: 'Melody-Ready Songwriting' },
      { icon: '📄', label: 'Commercial Songwriting Services ' },
      { icon: '💼', label: 'Lyric-Focused Songwriting' },
      { icon: '⚙️', label: 'Original Song Lyrics Writing' },
      { icon: '🎯', label: 'Song Composition Writing' },         
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
                        <Image src={"/images/Song-Writing/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/2 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">Why People Trust Our Songwriting Service</h2>
                            <p className="mt-2 text-white">Pine Book Writing has a large team of ghostwriters, songwriters and lyricists. Each of them is capable of doing their job with honesty and high passion. Our songwriting service is slow when needed, honest in feedback, and focused on making songs people actually want to listen to.</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Real listening </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Music-first mindset</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Honest lyrics </li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Flexible revisions</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Quiet collaboration</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	No overwriting</li>
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
