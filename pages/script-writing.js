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

export default function ScriptWriting () {
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
                <title>Book Editing | Pine Book Writing</title>
                <meta
                    name="description"
                    content="Everything about Pine Book Writing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
            <BrandNavbar />
            <BrandPrimaryHeader
                title="Media Production, Perfected - Expert Scriptwriting Services"
                desc="Whether you want to make a film, a podcast, an advert, or any interactive video, you need a perfectly crafted script. Our expert scriptwriters bring your vision to life. Let us turn your imagination into the perfect narrative!"
            />
            <BrandBannerLogo />

            <div className="container mx-auto max-w-screen-xl overflow-hidden py-10 md:py-20">
                <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row px-10 md:px-0 py-10 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        {/* <h3 className="font-poppins text-2xl md:text-3xl uppercase">
                        Stand Out from the Crowd 
                        </h3> */}
                        <h2 className="font-poppins text-3xl md:text-4xl uppercase font-bold">Professional Scriptwriting Services for Every Format</h2>
                       
                        <p className="font-poppins text-xl text-justify	pt-3">The purpose of writing a script is to capture your audience's attention, delight them with the idea you are presenting, or convey anything entertainingly or engagingly. Whether you're creating a film, a TV show, an Ad, or any video, a well-written script is required.</p>

                        <p className="font-poppins text-xl text-justify	pt-3">As a leading scriptwriting company, we understand the importance of creativity, which should be infused in each line of the script to convey your message or story in the way you desire. We create custom scripts for a variety of materials and ensure that your story is in a creative way. Let Pine Book Writing create a delightful script for your next video or audio that can entertain, inform, and inspire your viewers or listeners!</p>
                    </div>
                    <div className="basis-1/2 abt-pic text-center flex justify-center md:justify-center">
                        <Image src={"/brand-img/Script-Writing.png"} width={470} height={300}
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
                            <h2 className="text-white font-poppins text-3xl md:text-4xl uppercase mt-20 md:mt-0 font-bold" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Our Scriptwriting Services?</h2>
                            <p className="text-white mt-2">At Pine Book Writing, our scriptwriting excels with a unique blend of creativity and expertise. We produce each script fit to your vision and deliver exceptional results leveraging our collaborative approach.</p>
                            <div className="flex gap-10 mt-6">
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Confidentiality Guaranteed </li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Tailored Creativity </li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Multi-format Scriptwriters </li>
                                </ul>
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Affordable Pricing</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Client-Centric Approach</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Industry Expertise</li>
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
