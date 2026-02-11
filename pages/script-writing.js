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
import NewBrandFooter from "./components/NewBrandFooter";
import Link from "next/link";
import BrandTopBar from "./components/BrandTopBar";
import { FaPhoneVolume } from "react-icons/fa";
import CTAButton from './components/CTAButton';


export default function ScriptWriting () {

    const handleOpenChat = () => {
        window.zE && window.zE('webWidget', 'open');
    };
    
    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "What is scriptwriting?", answer: "Scriptwriting or screenplay writing is an art of composing dialogue and action sequences for various media such as films, TV shows, Ad, podcast, or any interactive video or audio." },
        
        { question: "How long does it take to create a script?", answer: "The time scriptwriting takes to completed depends on its length, complexity as well as the level of detail required. Usually, we take around 20 days to 3months period to complete your script. But, films or TV shows, turnaround time can vary." },
       
        { question: "What kinds of scripts do you prefer to write?", answer: "We master in writing a wide variety of scripts, from a YouTube video and TV show to films and podcasts. Our team of scriptwriters is adaptable and can work for different genres and styles." },
       
        { question: "Will I have ownership of the script?", answer: "Yes Absolutely, you will have 100% ownership of the script once we deliver it to you. We also provide a transfer of copyright to you." },
        
        { question: "Do I need to get the copyright for my scripts?", answer: "As discussed above, you will get the 100% copyright along with the delivery. Moreover, you can also register your script’s copyrights with Writer's Guild of America to protect your intellectual property if you want." },
       
        { question: "Is your scriptwriting service 100% confidential?", answer: "Absolutely, all of our writing services are fully confidential as we handle all the data (provided by you or created for you) with the strict privacy." },
            ];

    return (
        <>
            <Head>
                <title>Script Writing | Pine Book Writing</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/script-writing" />

                <meta
                    name="description"
                    content="Everything about Pine Book Writing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />

                </Head>
                <BrandTopBar/>
            <BrandNavbar />
            <BrandPrimaryHeader
                 photo_banner={"/images/Script-Writing/1.webp"}
                title="Media Production, Perfected - Expert Scriptwriting Services"
                desc="Whether you want to make a film, a podcast, an advert, or any interactive video, you need a perfectly crafted script. Our expert scriptwriters bring your vision to life. Let us turn your imagination into the perfect narrative!"
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        
                        <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Professional Scriptwriting Services for Every Format</h2>
                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                        Cultivate Your Audio/Video Production
                        </h2>
                        <p className="pt-3 text-xl text-left font-poppins">The purpose of writing a script is to capture your audience's attention, delight them with the idea you are presenting, or convey anything entertainingly or engagingly. Whether you're creating a film, a TV show, an Ad, or any video, a well-written script is required.</p>

                        <p className="pt-3 text-xl text-left font-poppins">As a leading scriptwriting company, we understand the importance of creativity, which should be infused in each line of the script to convey your message or story in the way you desire. We create custom scripts for a variety of materials and ensure that your story is in a creative way. Let Pine Book Writing create a delightful script for your next video or audio that can entertain, inform, and inspire your viewers or listeners!</p>
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Script-Writing/ghost-pic.webp"} width={470} height={300}
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


            <section className="relative overflow-visible text-white bg-center bg-no-repeat bg-cover ser-cta-banner py-14 md:py-0"
                            style={{ backgroundImage: `url(/brand-img/bg-banner.png)` }}>
                            <div className="relative grid items-center grid-cols-1 gap-4 mx-auto md:grid-cols-12 max-w-7xl ">
            
                                <div className="relative z-10 justify-center hidden md:col-span-3 md:flex md:justify-start">
                                    <Image
                                        src="/images/Script-Writing/cta-book-12.webp"
                                        alt="Book 1"
                                        className="absolute l-book -top-20 md:-top-36"
                                        height={600}
                                        width={600}
                                    />
                                </div>
            
                                <div className="px-4 text-center md:col-span-6">
                                    <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                                        Want to Write Scripts for Your Content? Hire Expert Script Writing Service!
                                    </h2>
                                    <p className="py-4 text-base md:text-lg">
                                       Through our exceptional script writing service, we bring drama, precision, and storytelling influence to your film, ads, or audio projects!
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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Professional Scriptwriting Service</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Project Consultation</h2>
                                <p className="">Our scriptwriting process begins with discussing your scriptwriting purpose, story or message, target audience, and desired tone and style.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Character Development</h2>
                                <p className="">In the next step, we'll work together with you to develop enticing characters that carry your story/message ahead.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Plot Outline</h2>
                                <p className="">Then, we'll carefully create a detailed plot outline, sketching your story's key segments and turning points to make it more organized.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Script Writing</h2>
                                <p className="">Next, one of our dedicated writers will get to work and draft a complete script based on your vision and the approved outline.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Revisions and Feedback</h2>
                                <p className="">Before the final delivery, you will receive your draft for review, and we offer multiple revisions to ensure your 100% satisfaction.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Final Delivery</h2>
                                <p className="">Once you approve the script, we'll deliver the completed and formatted version ready for production or further development.</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>

            <section className="overflow-hidden" >
                <div className="relative left-0 px-12 py-10 mt-0 mb-8 brand-choose-us-section ms-auto md:left-52 md:px-20 md:mt-14 " >
                    <div className="flex flex-col items-center md:flex-row" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                        <Image src={"/images/Script-Writing/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/3 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Our Scriptwriting Services?</h2>
                            <p className="mt-2 text-white">At Pine Book Writing, our scriptwriting excels with a unique blend of creativity and expertise. We produce each script fit to your vision and deliver exceptional results leveraging our collaborative approach.</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Confidentiality Guaranteed </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Tailored Creativity </li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Multi-format Scriptwriters </li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Affordable Pricing</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Client-Centric Approach</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Industry Expertise</li>
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
