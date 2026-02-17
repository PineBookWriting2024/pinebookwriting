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
        { question: "How do your movie writing services work?", answer: "It’s simple really. You share your movie idea, and our movie script writers start shaping it into a full story. We stay in touch till it feels right." },

        { question: "Can I hire a movie script writer for a short film?", answer: "We work on both ( a short film or a full-length movie). Our team of writers knows how to write a clear and enthralling script with clear scenes and dialogue." },

        { question: "How long does it take to finish a movie script?", answer: "Depends on the project size. Movie script writing normally takes a few weeks. But sometimes it takes more if the client shares a lot of feedback or asks for multiple rewrites." },

        { question: "Can I give notes during the writing process?	", answer: "Of course, you can. We love when clients share feedback. It helps us make sure the movie script turns out exactly how you want." },

        { question: "What genres do you write in?", answer: "Pretty much all. Action, romance, thriller, drama, comedy. Our movie writers have worked across genres and can match the tone you want." },

        { question: "Do you offer revisions after delivery?", answer: "Of course. We offer multiple revisions for your absolute satisfaction. Writing a movie script is not the work of one individual. It’s teamwork. And we want your final draft to feel perfectly aligned with what you expected." },
    ];

    return (
        <>
            <Head>
                <title>Best Movie Writing Services | Script Writers for Hire</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/Movie-Writing" />
                <meta
                    name="description"
                    content="Get expert movie writing services and create a perfect movie script. Hire skilled writers for your short or full length movie script at Pine Book Writing."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/Movie-Writing/1.webp"}
                title="Movie Writing Services That Turn Ideas Into Real Stories"
                desc="Our movie writing services are for those who’ve got a story but don’t know how to put it on paper the right way. From movie script writing to dialogue writing, we help you shape your idea into something real and watchable."
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Professional Movie Writing - Write Something Really Watchable</h2>

                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                            From Concept to Script
                        </h2>

                        <p className="pt-3 text-xl text-left font-poppins">
                           Good movies always start with good writing. And Pine Book Writing really cares. Our professional movie writing team knows how to work on a small idea and make it a script that keeps people watching. So, we can help whether you’re planning to write a movie script from the very beginning or just fixing scenes. </p>

                        <p className="pt-3 text-xl text-left font-poppins">Our movie script writers for hire better understand all the aspects of it. They are also familiar with things that make a story feel natural. Not forced. We can help you with dialogue writing for movies, so your characters sound like real people. From short films to full-length features, we know what producers and viewers look for. </p>
                        <p className="pt-3 text-xl text-left font-poppins">Let’s take your movie idea and build it into something that fits the industry standard screenplay formatting and still keeps your personal style alive!</p>
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Movie-Writing/ghost-pic.webp"} width={470} height={300}
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
                            src="/images/Movie-Writing/cta-book-12.webp"
                            alt="Book 1"
                            className="absolute l-book -top-20 md:-top-36"
                            height={600}
                            width={600}
                        />
                    </div>

                    <div className="px-4 text-center md:col-span-6">
                        <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                           Ready to Write a Movie People Watch Untill End?
                        </h2>
                        <p className="py-4 text-base md:text-lg">Acquire our movie script writers for hire and give liveliness to your script. We’ll make your idea a strong, watchable script by infusing real emotions with natural flow.</p>

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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Movie Writing Services</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Story Discussion</h2>
                                <p className="">We start by talking about your movie idea, its message, and main characters. Our movie script writer notes every detail to build a strong base..</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Concept Development</h2>
                                <p className="">Our professional movie writing team expands your idea into a clear story concept with strong characters, emotions, and conflicts that make the movie worth watching.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Script Outline</h2>
                                <p className="">We create a complete outline, including each scene and dialogue hints. This helps in writing a movie script that flows naturally from start to end.</p>
                            </div>
                        </div>

                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Dialogue Writing</h2>
                                <p className="">Next, our writers focus on dialogue writing for movies, keeping every line realistic, emotional, and easy to relate with, depending on the movie’s tone and genre.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Script Formatting</h2>
                                <p className="">After writing, we edit and fix every detail following screenplay formatting (industry standard) to ensure your movie script looks professional and ready for production.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Final Delivery</h2>
                                <p className="">Once approved, we deliver the final version of your script. Our film writing services guarantee a clean, polished story ready for directors and producers.</p>
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
 What’s Included In Our Movie Script Writing Services
  </h2>

  <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
  Our movie <a href="https://www.pinebookwriting.com/movie-script-writing-services" className="text-blue-600 hover:underline">writing services at Pine Book Writing</a> cover everything from concept to final script. We handle story development, dialogues, and screenplay formatting to make your film script truly production-ready.
  </p>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
     { icon: '🖋️', label: 'Story & Concept Development' },
      { icon: '🧐', label: 'Scriptwriting & Screenplay ' },
      { icon: '📄', label: 'Dialogue Writing   ' },
      { icon: '💼', label: 'Editing & Proofreading' },
      { icon: '⚙️', label: 'Screenplay Formatting' },
      { icon: '🎯', label: 'Short Film Script Writing' },         
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
                            <Image src={"/images/Movie-Writing/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/2 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">What Makes Our Movie Writing Services Stand Out?</h2>
                            <p className="mt-2 text-white">We’re not just writers but storytellers who understand how movies connect with people. Our professional movie writing team makes sure every story feels real and emotional. Not robotic. From plot building to dialogue creation, we pay attention to every small detail that makes your script outstanding.</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Creative Storytelling</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Fast Turnaround</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Realistic Dialogues</li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Personalized Approach</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Film Industry Expertise</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	100% Original Scripts</li>
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
