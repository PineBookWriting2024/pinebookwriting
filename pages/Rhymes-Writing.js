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
        { question: "Do you write rhymes for children only?", answer: "No. We write children’s rhymes, educational verses, and lyrical rhymes for adults too. It really depends on what you need." },
        
        { question: "Can I hire a rhyme writer for learning content?", answer: "Yes. Educational rhyme writing is one of our common requests. It helps kids remember ideas easily." },
       
        { question: "Do you match a specific rhythm or style?", answer: "We do. You can share examples, or we can suggest a rhythm that fits your project best." },
       
        { question: "How long does rhyme writing take?	", answer: "Short rhymes take less time. Bigger projects need more care. We’ll share timelines clearly before starting." },
        
        { question: "Will the rhymes sound natural when read aloud?", answer: "That’s a big focus for us. We test rhymes by reading them out loud during editing." },
       
        { question: "Can I request changes after delivery?", answer: "Yes, small edits are part of the process. We want the rhyme to feel right to you. " },
            ];

    return (
        <>
            <Head>
                <title>Creative Rhymes Writing Services | Pine Book Writing</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/Rhymes-Writing" />
                <meta
                    name="description"
                    content="Check out the best rhymes writing services here. Hire the best rhyme writing experts and get your rhyme project done with professional care and attention."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/Rhymes-Writing/1.webp"}
                title="Create an Impactful Piece of Art With Best Rhymes Writing Services"
                desc="Are you seeking expert assistance in writing rhymes for your song, children’s book, or poetry? If yes, then we have the best solutions. We offer professional rhyme writing services to deliver spirited yet meaningful lines personalized for you."
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Best Rhyme Writers for Hire | Pine Book Writing</h2>

                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                      Words That Sound Right
                        </h2>
                       
                        <p className="pt-3 text-xl text-left font-poppins">
                       Good rhymes are not about matching words at the end. They're about sound, timing and how the line feels when read out loud. It requires a dedicated skillset and our rhyme writers at <a href="https://www.pinebookwriting.com" className="text-blue-500 hover:underline">Pine Book Writing</a> have expertise in it. They firmly know how to let words flow with a creative touch.</p>

                        <p className="pt-3 text-xl text-left font-poppins">Whether you want to write rhymes for children's books, learning books, songs, or short poems, we take our time to understand and work on them accordingly.</p>
                        <p className="pt-3 text-xl text-left font-poppins">Looking to hire a rhyme writer who doesn't overdo it? This is your destination. Our team of professional rhyme writers keeps things clean yet readable. No heavy words. No awkward beats.</p>
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Rhymes-Writing/ghost-pic.webp"} width={470} height={300}
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
                            src="/images/Rhymes-Writing/cta-book-12.webp"
                            alt="Book 1"
                            className="absolute l-book -top-20 md:-top-36"
                            height={600}
                            width={600}
                        />
                    </div>

                    <div className="px-4 text-center md:col-span-6">
                        <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                           Let’s Write Rhymes That People Remember!
                        </h2>
                        <p className="py-4 text-base md:text-lg">So, are you ready to hire a rhyme writer? Hire our rhyme writing services and create words that flow well, sound natural, and connect to your idea in the right way.</p>

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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Rhymes Writing Services   </h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Idea & Purpose Talk</h2>
                                <p className="">We start with a simple chat. Who is it for, kids or adults, fun or learning. Rhymes work better when the purpose is clear early.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Tone & Rhythm Choice</h2>
                                <p className="">Before writing, we decide the rhythm. Fast, slow, playful, soft. Rhyme writing depends heavily on how it sounds. Not just how it reads.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">First Draft Writing</h2>
                                <p className="">Our rhyme writers begin writing lines with natural flow. No forcing words. If a line sounds odd, we fix it early, not later.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Read-Out-Testing</h2>
                                <p className="">We read the rhymes out loud. This step matters. Rhyming verse writing should sound smooth when spoken, not just look good on paper.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Edits & Adjustments</h2>
                                <p className="">You review the draft. We tweak words, beats, or endings. Creative rhyme composition always needs a little back and forth.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Final Delivery</h2>
                                <p className="">You receive clean, ready-to-use rhymes. Perfect for books, lessons, songs, or short verses. Simple files. No confusion.</p>
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
What’s Included In Our Rhyme Writing Services
  </h2>

  <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
We offer flexible rhyme writing services for your education or lyrical projects. We always keep the rhythm clear and the language easy to enjoy.
  </p>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
     { icon: '🖋️', label: 'Children’s rhyme writing' },
      { icon: '🧐', label: 'Educational rhyme writing' },
      { icon: '📄', label: 'Lyrical rhyme writing ' },
      { icon: '💼', label: 'Short verse writing' },
      { icon: '⚙️', label: 'Poetic rhyme writing' },
      { icon: '🎯', label: 'Rhythmic writing services' },         
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
                        <Image src={"/images/Rhymes-Writing/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/2 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Our Rhymes Writing Services?</h2>
                            <p className="mt-2 text-white">Our rhyming writers focus on sound, flow, and the meaning behind. We don’t rush lines or stuff words. Every rhyme is written with care and real attention. Here’s why we’re the right choice for your rhyming needs:</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Natural flow </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Human Testing & edits </li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Clear rhythm </li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Flexible tone</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Simple words</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Multiple Revisions</li>
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
