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
        { question: "Do you help if I only have a rough idea?", answer: "Yes. Many clients start with half ideas. Our screenplay writers for hire help shape it slowly into a clear story." },
        
        { question: "Can I hire a screenwriter just for editing?", answer: "Yes, we offer screenplay proofreading services and script fixing if your draft already exists." },
       
        { question: "Do you write for movies and TV shows?", answer: "We work on film screenplay writing services and TV screenplay writing services, depending on your project type." },
       
        { question: "Will the script sound like my voice?	", answer: "Yes. We adjust tone carefully so it doesn’t feel written by someone else completely." },
        
        { question: "How long does screenwriting take?", answer: "Timelines depend on length and feedback speed. Short scripts move faster. Full films take more care." },
       
        { question: "Can you work with an unfinished or messy script?", answer: "Yes, that’s very common. Even if your script is half-written or all over the place, we can help clean it up and guide it forward. " },
            ];

    return (
        <>
            <Head>
                <title>Professional Screenwriting Service | Pine Book Writing</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/Screen-Writing" />

                <meta
                    name="description"
                    content="Want to hire a screenwriting service? We help turn ideas or rough drafts into clear, watchable scripts for film, TV, and web without losing your own voice."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/Screen-Writing/1.webp"}
                title="Professional Screenwriting Service for Films, TV, and Series"
                desc="We offer a screenwriting service that helps aspiring screenwriters, producers, literary managers and novelists turn raw ideas into watchable scripts. Hire a screenwriter who understands all aspects without forcing the story or overcomplicating things. Contact Pine Book Writing today!"
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Offering Exceptional Screen Writing Services</h2>

                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                       Scripts That Move, Breathe, and Hold Attention
                        </h2>
                       
                        <p className="pt-3 text-xl text-left font-poppins">
                      Good screenwriting is not about fancy words. It’s about timing, silence and moments that feel true. Our screenwriting service at Pine Book Writing can help you with your scripts that your audience would actually want to watch.</p>

                        <p className="pt-3 text-xl text-left font-poppins">Whether you want to hire a screenwriter for a short film. A full movie. Or a web series. We keep things simple. Story first. Characters that breathe. Scenes that don’t drag. We also support clients who already have drafts but need structure, flow, or clarity through screenplay writing services and light consulting.</p>
                         <p className="pt-3 text-xl text-left font-poppins">Some clients come with just a thought. Others come with messy pages. Both are fine. We work patiently, step by step, until the script feels right on screen.</p>
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Screen-Writing/ghost-pic.webp"} width={470} height={300}
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
                                        src="/images/Screen-Writing/cta-book-12.webp"
                                        alt="Book 1"
                                        className="absolute l-book -top-20 md:-top-36"
                                        height={600}
                                        width={600}
                                    />
                                </div>
            
                                <div className="px-4 text-center md:col-span-6">
                                    <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                                       Stuck With a Script? Let Our Screenwriter Help
                                    </h2>
                                    <p className="py-4 text-base md:text-lg">Hire a professional screenwriter who understands all aspects of screenwriting work. From rough first drafts to the final polished one, we help your script move toward production without losing your own voice along the way.</p>
            
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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Screenwriting Services</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Idea Discussion</h2>
                                <p className="">First, we talk through your idea, tone, genre and goals so the script doesn’t feel confused later. This helps whether you hire a script writer early or mid-stage.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Story Structure Setup</h2>
                                <p className="">Then, we build a clear structure that works for films or TV, avoiding loose scenes. This step matters a lot in original screenplay writing.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Character Shaping</h2>
                                <p className="">The story's characters are shaped slowly, with flaws and motives. That’s how professional screenwriting services keep stories believable.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Script Drafting</h2>
                                <p className="">Next, our script writers write the full screenplay, focusing on visuals, rhythm, and natural dialogue without any forced efforts.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Review & Fixing</h2>
                                <p className="">Here, our screenplay proofreading services begin. We check revisions, pacing, flow and scene balancing without any over-edits.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Final Script Delivery</h2>
                                <p className="">You receive a clean, industry-style script ready for pitching, filming, or further development through screenplay development services.</p>
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
What’s Included In Our Expert Screenwriting Services
  </h2>

  <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
  Pine Book Writing offers everything that is needed to take a screenplay from idea stage to a ready-to-use script. Without rushing the creative process.
  </p>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
     { icon: '🖋️', label: 'Custom Screenplay Writing' },
      { icon: '🧐', label: 'Screenplay Ghostwriting Services' },
      { icon: '📄', label: 'Script Revisions & Proofreading' },
      { icon: '💼', label: 'Screenplay Consulting Services' },
      { icon: '⚙️', label: 'Film & TV Screenplay Writing' },
      { icon: '🎯', label: 'Script Formatting Support' },         
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
                        <Image src={"/images/Screen-Writing/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/2 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">What Makes Our Screenwriting Service Stand Out?</h2>
                            <p className="mt-2 text-white">We listen first. Then write. Our screenwriting service at Pine Book Writing focuses on honest storytelling, clear structure, and flexible collaboration, so your script feels natural, not factory-made or rushed.</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Real story focus </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Clear communication</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Calm working process </li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Industry-aware scripts</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Flexible writing support</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Writer-first approach</li>
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
