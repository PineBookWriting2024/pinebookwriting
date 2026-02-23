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
        { question: "Will the resume you write be ATS-friendly? ", answer: "Absolutely! All of the resumes created by our professional resume writing services are ATSfriendly. To make your resume visible and passable through software screenings, we use industry-specific keywords in it and also test it before delivery. " },
        
        { question: "How do I get started with your services? ", answer: "You have both options: either share your current resume or your career-related information and goals in a Word file, a PDF file, or just tell them on a call. Once we receive it, our writers get to work and create a personalized resume. " },
       
        { question: "What is the turnaround time for the resume creation? ", answer: "Generally, we deliver the first draft within three business days. Is it urgent? You may avail of our express delivery option for urgent job applications." },
       
        { question: "What are the costs for resume writing services? ", answer: "The  costs for resume writing services  depend on its complexity, career level, and type. However, unlike others, we offer affordable resume writing services. Not only that, but there are no hidden or extra charges. Feel free to contact our team and get a free quote! " },
        
        { question: "Can I also ask you to write my cover letter? ", answer: "Yes for sure, we also offer professional cover writing to our clients who want complete job application support. For this, you need to acquire our comprehensive resume and cover writing services to present a robust first impression to employers. " },
       
        { question: "Do you also offer resume and LinkedIn profile writing services? ", answer: "Yes, we do. We provide complete LinkedIn profile support, from creating and optimizing your account to integrating your profile with your resume. Our LinkedIn resume writers ensure brand consistency across your professional online presence.. " },
            ];

    return (
        <>
            <Head>
                <title>Expert Resume Writing Services | Pine Book Writing </title>
                                    <link rel="canonical" href="https://www.pinebookwriting.com/resume-writing" />

                
                <meta
                    name="description"
                    content="Stand out with our professional resume writing services. Get ATS-optimized resumes, cover letters, and LinkedIn profiles that help you land more interviews."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
                <BrandTopBar/>
            <BrandNavbar />
           <BrandPrimaryHeader
  photo_banner={"/images/Resume-writing/1.webp"}
  title="Stand Out Confidently With Our Professional Resume Writing Services"
  desc={
    <>
      Is your current resume holding you back? Or are you looking for someone who is an expert in resume writing to portray your true potential to employers? If yes, then you're in the right place. We have a dedicated team of resume writers (mostly from human resource backgrounds) familiar with all the do’s and don’ts while writing a resume.{" "}
      
     <a
  href="https://www.pinebookwriting.com/contact-us"
  target="_blank"
  rel="noopener noreferrer"
  style={{ display: "inline-block", textDecoration: "none" }}
>
  <button
    style={{
      backgroundColor: "#000",
      color: "#fff",
      padding: "12px 32px",
      fontSize: "16px",
      fontWeight: "600",
      borderRadius: "50px",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 4px 14px 0 rgba(0,0,0,0.39)",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginTop: "20px"
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.backgroundColor = "#333";
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.23)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.backgroundColor = "#000";
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 14px 0 rgba(0,0,0,0.39)";
    }}
  >
    Get Your FREE Quote & Start Now!
    <svg 
      width="18" 
      height="18" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </button>
</a>
    </>
  }
/>

            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        
                        <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Hire Career-Focused Resume Writing Service </h2>
                       
                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                       Stand Out from the Crowd 
                        </h2>
                      <div className="text-gray-700">
  <p className="mb-4 leading-relaxed">
    Your resume creates the very first impression on employers. It’s an influential tool that can open your doors to many career opportunities. Resume writing requires dedicated expertise and attention to detail. That’s where our professional resume writing services come in. At{" "}
    <a
      href="https://www.pinebookwriting.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold underline transition underline-offset-4 hover:text-gray-900"
    >
      Pine Book Writing
    </a>
    , our team of resume writers always stays updated about the saturated job market and knows what to consider while writing a noteworthy resume.
  </p>

  <p className="mb-4 leading-relaxed">
    As one of the best rated resume writing services, we utilize our <span className="font-bold">immense expertise</span> to highlight your unique competencies and achievements. We help you showcase experiences in the best possible light by tailoring your resume for specific job requirements.
  </p>

  <p className="mb-4 leading-relaxed">
    Don’t let an ordinary resume hold you back. Contact us now to schedule a consultation and take the first step with our <span className="font-bold">affordable resume writing services</span>.
  </p>
</div>

                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Resume-writing/ghost-pic.webp"} width={470} height={300}
                            loading="lazy"
                            alt="about img"
                            className="aos-init aos-animate"
                            data-aos="fade-left" data-aos-duration="1000"
                        />
                    </div>
                </div>
               
            </div>

                       <section
                            className="relative overflow-visible text-white bg-center bg-no-repeat bg-cover ser-cta-banner py-14 md:py-0"
                            style={{ backgroundImage: `url(/brand-img/bg-banner.png)` }}>
                            <div className="relative grid items-center grid-cols-1 gap-4 mx-auto md:grid-cols-12 max-w-7xl ">
            
                                <div className="relative z-10 justify-center hidden md:col-span-3 md:flex md:justify-start">
                                    <Image
                                        src="/images/Resume-writing/cta-book-12.webp"
                                        alt="Book 1"
                                        className="absolute l-book -top-20 md:-top-36"
                                        height={600}
                                        width={600}
                                    />
                                </div>
            
                                <div className="px-4 text-center md:col-span-6">
                                    <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                                       Land More Job Interviews - Acquire Expert Resume Writing Service 
                                    </h2>
                                    <p className="py-4 text-base md:text-lg">
                                      Our certified resume writers USA are ready to help create a resume that can impress recruiters by highlighting your real potential for your specific field and is perfectly aligned with job requirements.regardless of wherever you are.  
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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Resume Writing Services</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Career Consultation </h2>
                                <p className="">We begin our resume writing services with a discussion to learn about your career aspirations, In-hand experience, and the target job. </p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Detailed Interview </h2>
                                <p className="">Our dedicated professional will conduct your interview, an important phase of our professional resume writing service, to present your evident or unnoticed skills, achievements, and qualifications. </p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Market Research </h2>
                                <p className="">Then, our certified resume writers research your field market, identify the mostused keywords, and create an ATS-friendly resume that aligns with employers' expectations. </p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Draft Creation</h2>
                                <p className="">Once research is completed, our writers craft the first draft. We always keep in mind that our affordable resume writing services help you highlight your skills and accomplishments.  </p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Multiple Revisions </h2>
                                <p className="">We always embrace feedback and suggestions. As the top resume writing company, we offer multiple revisions and make necessary modifications to your resume on your request.  </p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Multi-Format Delivery </h2>
                                <p className="">After multiple reviews, we deliver your resume in multiple formats. With our online resume writing services, you will see results anytime, anywhere.  </p>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>

            <section className="max-w-6xl px-4 py-16 mx-auto bg-white font-poppins">
  <h2 className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
    What's Included In Our Resume Writing Services? 
  </h2>

  <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
    At Pine Book Writing, we provide expert resume writing help, we don't just write and deliver, but we provide comprehensive support. Everything that you need for a perfect job application resume. 
  </p>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
      { icon: '🖋️', label: 'Custom Resume Writing' },        
      { icon: '🧐', label: "Resume Editing & Proofreading" },
      { icon: '📄', label: 'Cover Letter Writing' },          
      { icon: '💼', label: 'LinkedIn Profile Optimization' },  
      { icon: '⚙️', label: 'ATS Optimization' },              
      { icon: '🎯', label: 'Career Consultation' },           
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
                <div className="relative left-0 px-12 py-10 mt-8 mb-8 brand-choose-us-section ms-auto md:left-52 md:px-20 md:mt-14 " >
                    <div className="flex flex-col items-center md:flex-row" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                    
                        <Image src={"/images/Resume-writing/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/3 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">What Makes Us the Best Resume Writing Services? </h2>
                            <p className="mt-2 text-white">We help create resumes that truly help find perfect career opportunities. Our certified writers for resume, most of them from human resources backgrounds, use their relevant experience to make sure your resume has enough potential to grab an employer's attention. </p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Writers - Ex-Recruiters </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Multiple Formats </li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />ATS-Friendly Resumes  Formats </li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Affordable Packages </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Personalized Approach </li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Career Consultation </li>
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
