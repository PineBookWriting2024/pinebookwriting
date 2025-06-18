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


export default function ResumeWriting() {
    const handleOpenChat = () => {
        window.zE && window.zE('webWidget', 'open');
    };

    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "Will the Resume you write for me be compatible with ATS?", answer: "Yes, all the resumes we write are ATS friendly and will be tested on ATS. Our approach begins with creating your resume using the keywords and phrases used by the organization/company that you are aiming for." },
        
        { question: "How to get started and what file format would you prefer to receive my career information?", answer: "To get started, we need the answered questionnaire, your current resume and all the necessary information about you that you need in the resume. Once we  all the information, we will start writing your ATS friendly resume. All the documents should be in the WORD or PDF Format." },
       
        { question: "What Is the Resume Turnaround Time?", answer: "You will receive the first draft of your resume in three business days." },
       
        { question: "What will be the cost of my Resume?", answer: "The cost of a resume writing service can vary depending on the complexity and the type of resume that you want. Get in touch with one of our representatives for the cost of the service." },
        
        { question: "Will I receive my cover letter along with my resume?", answer: "Yes, you will get a cover letter once you finalize the resume." },
       
        { question: "Do you offer LinkedIn Profile Writing Service?", answer: "Yes, we do offer LinkedIn profile writing service as an additional service." },
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
                <BrandTopBar/>
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/brand-img/resume-writing-banner.png"}
                title="Professional Resume Writing Services"
                desc="Is your current resume holding you back? Or are you looking for someone who is an expert in resume writing to portray your true potential to employers? If yes, then you're in the right place. We have a dedicated team of resume writers (mostly from human resource backgrounds) familiar with all the do’s and don’ts while writing a resume. Contact us to learn more!"
            />
            <BrandBannerLogo />

            <div className="container mx-auto max-w-screen-xl overflow-hidden pt-0 md:py-20">
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

                       <section
                            className="ser-cta-banner bg-no-repeat bg-cover bg-center text-white relative overflow-visible py-14 md:py-0"
                            style={{ backgroundImage: `url(/brand-img/bg-banner.png)` }}>
                            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 max-w-7xl mx-auto relative ">
            
                                <div className="md:col-span-3 hidden md:flex justify-center md:justify-start relative z-10">
                                    <Image
                                        src="/brand-img/cta-book-12.png"
                                        alt="Book 1"
                                        className="l-book absolute -top-20 md:-top-36"
                                        height={600}
                                        width={600}
                                    />
                                </div>
            
                                <div className="md:col-span-6 text-center px-4">
                                    <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                                        Resume Writing - Make Your Resume Work for You
                                    </h2>
                                    <p className="text-base md:text-lg py-4">
                                        Our professional resume writing services can help you stand out in today's competitive job market so you can get noticed and employed quickly.
                                    </p>
            
                                    <div className="cta-btns flex flex-col sm:flex-row items-center gap-4 justify-center">
                                                 <CTAButton />
            
            
                                        <a
                                            href="tel:(866) 841-7463"
                                            className="text-white flex items-center gap-2"
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
            
                                <div className="md:col-span-3 hidden md:flex justify-center md:justify-end">
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
              <section className="brand-process mx-auto relative pt-20 text-center flex justify-center mb-12 overflow-hidden">
                <div className="max-w-screen-xl">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl text-black font-poppins">Our Service Workflow</h3>
                        <h2 className="font-poppins text-3xl md:text-4xl text-black font-bold" data-aos="zoom-out-down">6-Step Process of Our Resume Writing Services</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="brand-process-content text-left flex-col px-6 py-10">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Initial Consultation</h2>
                                <p className="">Our resume writing service process begins with conducting a discussion to learn about your career aspirations, experience, and target job.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">In-Depth Interview</h2>
                                <p className="">Then, our dedicated manager will conduct a detailed interview to gather information about your evident and unnoticed skills, achievements, and qualifications.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Resume Research</h2>
                                <p className="">Our resume writers will start conducting deep research on your industry to identify noticeable keywords to outline your resume accordingly.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-6" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Draft Creation</h2>
                                <p className="">Once the research is completed, our dedicated resume writer will create a customized resume draft that effectively highlights your key skills and accomplishments.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Revisions and Feedback</h2>
                                <p className="">Your feedback is valuable to us. We provide multiple revisions and make necessary modifications to your resume on your request.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Final Delivery</h2>
                                <p className="">Lastly, we take your resume through our quality assurance process and deliver it to you in the format you require.</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>
             
            
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
                            <div>
                                <button className="brand-nav-btn-1 brand-nav-btn shadow-xl mt-10 cursor-pointer btn-f" onClick={handleOpenChat}><Link href={'javascript:;'}>Speak to our Consultant</Link></button>
                                <button className="brand-nav-btn-1 brand-nav-btn shadow-xl mt-10 cursor-pointer btn-f md:ml-3 ml-0"><Link href="tel:+18668417463">Call Now</Link></button>
                            </div>
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
