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

export default function ResumeWriting() {
    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "Will the Resume you write for me be compatible with ATS?", answer: "Yes, all the resumes we write are ATS friendly and will be tested on ATS. Our approach begins with creating your resume using the keywords and phrases used by the organization/company that you are aiming for" },
        
        { question: "How to get started and what file format would you prefer to receive my career information?", answer: "To get started, we need the answered questionnaire, your current resume and all the necessary information about you that you need in the resume. Once we  all the information, we will start writing your ATS friendly resume. All the documents should be in the WORD or PDF Format." },
       
        { question: "What Is the Resume Turnaround Time?", answer: "You will receive the first draft of your resume in three business days." },
       
        { question: "What will be the cost of my Resume?", answer: "The cost of a resume writing service can vary depending on the complexity and the type of resume that you want. Get in touch with one of our representatives for the cost of the service." },
        
        { question: "Will I receive my cover letter along with my resume?", answer: "Yes, you will get a cover letter once you finalize the resume." },
       
        { question: "Do you offer LinkedIn Profile Writing Service?", answer: "Yes, we do offer LinkedIn profile writing service as an Service.' " },
            ];

    return (
        <>
            <Head>
                <title>Resume Writing | Pine Book Writing</title>
                <meta
                    name="description"
                    content="Everything about Pine Book Writing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/brand-img/resume-writing-banner.png"}
                title="Professional Resume Writing Services"
                desc="Is your current resume holding you back? Or are you looking for someone who is an expert in resume writing to portray your true potential to employers? If yes, then you're in the right place. We have a dedicated team of resume writers (mostly from human resource backgrounds) familiar with all the do’s and don’ts while writing a resume. Contact us to learn more!"
            />
            <BrandBannerLogo />

            <div className="container mx-auto max-w-screen-xl overflow-hidden pt-0 md:pt-20">
                <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row px-8 md:px-0 py-10 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        
                        <h2 className="font-poppins text-3xl md:text-4xl uppercase font-bold">Hire Career-Focused Resume Writing Service</h2>
                       
                        <h2 className="font-poppins text-2xl md:text-3xl uppercase">
                        Stand Out from the Crowd 
                        </h2>
                        <p className="font-poppins text-xl text-left pt-3">
                        Your resume gives the very first impression to your employer. It’s an influential tool that can open your doors to many career opportunities. Resume writing requires dedicated expertise and attention to detail. That’s where our resume writing service comes in.</p>
                        <p className="font-poppins text-xl text-left pt-3">At Pine Book Writing, our team of resume writers always stays updated about the saturated job market and knows what to consider while writing a noteworthy resume. We utilize our immense expertise to highlight your unique competencies and achievements and will help you showcase your experiences in the best possible light by making your resume match any specific job requirements. </p>
                    </div>
                    <div className="basis-1/2 abt-pic text-center flex justify-center md:justify-center">
                        <Image src={"/brand-img/Resume-Writing.png"} width={470} height={300}
                            loading="lazy"
                            alt="about img"
                            className="aos-init aos-animate"
                            data-aos="fade-left" data-aos-duration="1000"
                        />
                    </div>
                </div>
                <p className="font-poppins text-xl text-left px-10 md:px-0" data-aos="fade-right">
                    Don't let an ordinary resume hold you back. Contact us now to schedule a consultation and step ahead towards your success.
                </p>
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
                <div className="brand-choose-us-section ms-auto relative left-0 md:left-52 px-12 md:px-20 mt-8 md:mt-14 mb-8 py-10 " >
                    <div className="flex items-center flex-col md:flex-row" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                        <Image src={"/brand-img/Why Choose Us 2.png"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/3 md:ml-20">
                            <h2 className="text-white font-poppins text-2xl md:text-4xl uppercase mt-10 md:mt-0 font-bold" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Our Resume Writing Services?</h2>
                            <p className="text-white mt-2">Stand out in the competitive job market with our expert resume writing services. With a dedicated team of resume writers familiar with various industries’ different trends and preferences, we offer impeccable resume writing services for several formats.</p>
                            <div className="flex flex-col md:flex-row gap-2 md:gap-10 mt-6">
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Writers – Ex Recruiters </li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Personalized Approach </li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Multiple Resume Formats </li>
                                </ul>
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Timely Delivery</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Competitive Pricing</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Multiple Revisions</li>
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
            
            {/* <BrandFooter /> */}
            <NewBrandFooter />
        </>
    );
}
