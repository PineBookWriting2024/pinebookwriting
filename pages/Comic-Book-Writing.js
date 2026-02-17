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
        { question: "Do you help beginners with comic book writing?", answer: "Yes. Many clients come with zero experience. We guide them step by step, without making things complicated or confusing." },
        
        { question: "Can you write comics for artists to illustrate?", answer: "That’s exactly how we write. Our scripts are made so comic book artists can understand scenes, actions, and dialogue clearly." },
       
        { question: "Do you offer graphic novel writing services too?", answer: "Yes, we handle full-length graphic novels as well as short comics and ongoing series." },
       
        { question: "Will I own the rights to my comic story?	", answer: "Yes. Once the project is done, the story and script belong fully to you." },
        
        { question: "Can you fix or rewrite an existing comic script?", answer: "Absolutely. We often work on editing, restructuring, or improving old comic scripts that feel messy or unfinished." },
       
        { question: "How long does comic book writing usually take?", answer: "It depends on length and complexity. Short comics take less time, while full series scripts need more planning and review." },
            ];

    return (
        <>
            <Head>
                <title>Hire Comic Book Writing Services | Pine Book Writing</title>
                    <link rel="canonical" href="https://www.pinebookwriting.com/Comic-Book-Writing" />
                <meta
                    name="description"
                    content="Looking for a comic book script writer? Our comic book writing services are here to help turn your ideas into clear scripts ready for artists and editors."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/Comic-Book-Writing/1.webp"}
                title="Comic Book Writing Services - From Ideas to Panel    "
                desc="Stories for comics need more than words. Our comic book writing services help shape strong characters, clear plots, and page-by-page scripts that actually work with art, not against it."
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Professional Comic Book Writing Services That  Truly Work</h2>

                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                       Stories Built For Panels, Pacing, and Visual Flow
                        </h2>
                       
                        <p className="pt-3 text-xl text-left font-poppins">
                      Comic book writing is different from traditional storytelling. You don’t just tell a story, you show it piece by piece. We focus on comic storytelling that fits panels, pacing, and visual flow. Whether you’re writing comic book ideas from scratch or fixing an old comic story, we can help make it readable and exciting. </p>

                        <p className="pt-3 text-xl text-left font-poppins">Our team at <a href="https://www.pinebookwriting.com" className="text-blue-500 hover:underline">Pine Book Writing</a>, includes experienced comic book script writers who understand dialogue, timing and scene breaks. We think about artists too. So nothing feels confusing on the page. From short comics to full series, our professional comic book writing services support creators at every stage. </p>
                         <p className="pt-3 text-xl text-left font-poppins">Some clients come with rough notes. Others bring half-finished scripts. Both are fine for us because we do not only deal in comic books, but comprehensive writing services for almost all book genres. We shape things slowly, until the story feels right and clear.</p>
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Comic-Book-Writing/ghost-pic.webp"} width={470} height={300}
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
                                                    src="/images/Comic-Book-Writing/cta-book-12.webp"
                                                    alt="Book 1"
                                                    className="absolute l-book -top-20 md:-top-36"
                                                    height={600}
                                                    width={600}
                                                />
                                            </div>
                        
                                            <div className="px-4 text-center md:col-span-6">
                                                <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                                                   Your Comic Deserves Better Words. Better Captions
                                                </h2>
                                                <p className="py-4 text-base md:text-lg">
                                                  Stop guessing scene flow. Get professional comic book writing that fits visual storytelling, pacing, and dialogue without overcomplicating things.
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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Comic Book Writing Services</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Idea Discussion</h2>
                                <p className="">We start with your idea. Big or small. Comic book writing works best when we understand your genre, tone, and what kind of comic books you actually enjoy reading.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Story Planning</h2>
                                <p className="">We map the comic plot development carefully. Beginning, middle, and end. Nothing fancy here, just a clear direction so the story doesn’t fall apart halfway.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Character Creation</h2>
                                <p className="">Strong characters matter. We work on character creation for comics, shaping looks, voices, and small habits so they feel consistent across every scene and issue.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Script Writing</h2>
                                <p className="">Now the real writing comic book work begins. We handle panel-by-panel script writing, balancing action, visuals, and dialogue-driven comic scripts that feel natural.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Review & Edits</h2>
                                <p className="">You read everything. We revise dialogue, pacing, or scenes. Comic book editors on our team help clean things without changing your original idea too much.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Final Delivery</h2>
                                <p className="">You get a clean, ready-to-use comic book script. Easy for artists, easy to follow, and prepared for graphic novel writing services or series continuation.</p>
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
What’s Included In Our Comic Book Writing Services
  </h2>

  <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
 Our services cover story planning, scripting, and revision support, so your comic story feels smooth, readable, and ready for artists or publishers.
  </p>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
     { icon: '🖋️', label: 'Comic Book Script Writing' },
      { icon: '🧐', label: 'Graphic Novel Writing' },
      { icon: '📄', label: 'Comic Series Writing ' },
      { icon: '💼', label: 'Comics Dialogue Writing' },
      { icon: '⚙️', label: 'Comic Plot Development' },
      { icon: '🎯', label: 'Visual Narrative Writing' },         
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
                        <Image src={"/images/Comic-Book-Writing/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/2 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">Comics Need Real Writers & We Have a Whole Team </h2>
                            <p className="mt-2 text-white">We don’t treat comics like short novels. Our team respects the art form, works patiently, and understands how stories live between panels, not just in paragraphs.</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Comic-first mindset </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Honest feedback </li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Clear scripts </li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Flexible process</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Artist-friendly writing</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Genre experience</li>
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
