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
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
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
        { question: "What is Ghostwriting?", answer: "Ghostwriting service is the name of hiring a professional writer for your book. In return, the writer will gather all the relevant information, conduct in-depth research, and craft a manuscript that meets your vision. Our professional ghostwriting services ensure your book feels authentic and well-written. " },

        { question: "Is ghostwriting ethical and authentic? ", answer: "Absolutely, it is both ethical and authentic. Ghostwriting is extremely common, especially in the world of book writing. This service is considered the same as having any professional hired to perform a specific task. At Pine Book Writing, we offer affordable ghostwriting services to put your creative ideas into a manuscript with integrity. " },

        { question: "Who will own the rights in Ghostwriting?", answer: "We are just your writing partner. We work for you as a ghost writing service, and you own it. As an author, you own all the rights and credits for the final product. Not only that, the royalties your book earns will also be yours. " },

        { question: "Can I hire you to write one chapter of and later the rest? 	", answer: "Yes, you can also hire us chapter by chapter. Here, we are confident that once you see our professional ghostwriters’ expertise, you will definitely want to move forward with your entire book. If you want to start with a single chapter, you’re welcome. " },

        { question: "How long will it take to write a book? ", answer: "The completion time of the ghost book writing services depends on the complexity, genre, and your book’s length as well. However, we usually take 3 to 6 months on average. The time also depends on how much material you provide and the research required on the topic. " },

        { question: "How much does ghostwriting a book cost? ", answer: "The cost of our book ghostwriting services varies based on your book’s length, genre, and complexity. You can view our ghostwriting packages or request a ghostwriter cost estimate from our representative to customize the plan according to your needs. " },
    ];

    return (
        <>
            <Head>
                <title>Affordable Ghostwriting Services - Pine Book Writing</title>
                    <link rel="canonical" href="https://www.pinebookwriting.com/ghostwriting" />
                <meta
                    name="description"
                    content="Want freedom from long sitting for outlining, writing, editing, and all the necessary tasks to write a perfect book? Hire our expert ghostwriting services."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/Ghostwriting/1.webp"}
                title="Professional Ghostwriting Services for Every Author Worldwide"
                desc="Write your story the way your readers actually want. Hire our expert ghostwriting services. No matter if you are writing for the first time or already have written many books, our team of skilled writers is capable of writing books that match your vision and audience's expectations. Get a FREE quote today!"
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Hire the Best Book Ghostwriting Agency in USA</h2>

                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                            Bring Your Literary Vision to Life
                        </h2>

                       <p className="pt-3 text-xl text-left font-poppins">
  At{" "}
  <Link href="/">
    <span className="text-blue-600 hover:underline">
      Pine Book Writing
    </span>
  </Link>
  , we know writing isn't easy for everyone. Some lack time to write,
  while some have both wonderful ideas and time, but lack writing skills.
  That's why we introduced{" "}
  <Link href="/ghostwriting">
    <span className="text-blue-600 hover:underline">
      book ghostwriting services
    </span>
  </Link>
  , aiming to help new or experienced authors create books, from enthralling
  children's books and autobiographies to fiction or{" "}
  <Link href="/non-fiction">
    <span className="text-blue-600 hover:underline">
      non-fiction literature
    </span>
  </Link>{" "}
  that best match their readers' expectations. We have a team of professional
  ghostwriters who bring years of experience working with many genres, with
  dedication to help authors build outstanding characters and stories that
  keep readers occupied until the last page.
</p>

<p className="pt-3 text-xl text-left font-poppins">
  Our ghostwriting team welcomes you, regardless of wherever you are from or
  how much experience of writing you retain. Whether you need guidance with an
  informative{" "}
  <span className="font-bold">memoir ghostwriter</span>, a suspenseful novel
  or a fascinating{" "}
  <Link href="/childrens-book-writing">
    <span className="text-blue-600 hover:underline">
      children's storybook
    </span>
  </Link>
  . We put{" "}
  <span className="font-bold">
    trust, transparency, and results
  </span>{" "}
  at our core by assigning your project to a dedicated project manager.
  Contact us today for a Free quote!
</p>

                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Ghostwriting/ghost-pic.webp"} width={470} height={300}
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


            <section
                className="relative overflow-visible text-white bg-center bg-no-repeat bg-cover ser-cta-banner py-14 md:py-0"
                style={{ backgroundImage: `url(/brand-img/bg-banner.png)` }}>
                <div className="relative grid items-center grid-cols-1 gap-4 mx-auto md:grid-cols-12 max-w-7xl ">

                    <div className="relative z-10 justify-center hidden md:col-span-3 md:flex md:justify-start">
                        <Image
                            src="/images/Ghostwriting/cta-book-12.webp"
                            alt="Book 1"
                            className="absolute l-book -top-20 md:-top-36"
                            height={600}
                            width={600}
                        />
                    </div>

                    <div className="px-4 text-center md:col-span-6">
                        <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                           Hire Affordable Ghostwriting Services Start Your First or Next Book
                        </h2>
                        <p className="py-4 text-base md:text-lg">
                            Hire Affordable Ghostwriting Services Start Your First or Next Book</p>

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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Ghostwriting Services</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Project Onboarding</h2>
                                <p className="">We begin our process by assigning a dedicated project manager to you and a questionnaire to learn about your writing requirements for our professional ghostwriting services.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Research & Outline</h2>
                                <p className="">Then, our team of professionals will conduct indepth research, create a content outline, and send it to you for your approval, ensuring you're satisfied with our creative ghostwriting experts. </p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Author Interview </h2>
                                <p className="">After the outline approval, we arrange an interview session with our dedicated ghostwriter. On that call, they will discuss your vision, tone and writing style. </p>
                            </div>
                        </div>

                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Draft Submissions </h2>
                                <p className="">We provide deliveries weekly and accept your feedback throughout the process. We also offer multiple revisions to ensure your complete satisfaction. </p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Formatting & Layout </h2>
                                <p className="">Once our ghostwriting work is finished, we will format the work in your preferred style and make the layout adjustments if required. </p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Final Delivery</h2>
                                <p className="">Lastly, we will hand over the quality-checked and well-organized manuscript to you in your preferred format within the timeline we promised. </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


<section className="max-w-6xl px-4 py-16 mx-auto bg-white font-poppins">
  <h2 className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
    What's Included in Our Ghostwriting Services?
  </h2>

  <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
    We've designed our ghost writing service in a way that you can get complete professional support from start to finish. Our creative ghostwriting experts help you through the whole process, making your book perfectly publish-ready.
  </p>

  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
    {[
      { icon: '🔎', label: 'Research' },               // Research
      { icon: '📊', label: "Editorial Assessment" },  // Assessment / Review
      { icon: '🗂️', label: 'Chapter Outlining' },     // Structure / Planning
      { icon: '✒️', label: 'Writing' },                // Writing
      { icon: '📝', label: 'Editing' },                // Editing
      { icon: '✔️', label: 'Proofreading' },           // Proofreading
      { icon: '📐', label: 'Formatting' },             // Formatting / Layout
      { icon: '🛡️', label: 'Quality Assurance' },     // Quality Check
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

<section className="relative flex justify-center py-20 mx-auto overflow-hidden text-center bg-gray-50 brand-process">
  <div className="w-full max-w-screen-xl px-4">
    
    <div className="mb-12 text-center">
      <h3 className="mb-2 text-xl tracking-widest uppercase text-slate-500 font-poppins">
      Multi-genre Expertise 
      </h3>
      <h2 className="mb-6 text-3xl font-bold text-black font-poppins md:text-5xl" data-aos="zoom-out-down">
      Types of Book Ghostwriting Services We Offer 
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-600 font-poppins" data-aos="zoom-out-down">
      Our ghost book writing services cover a large range of book genres, so that everyone looking to hire ghost writers can get the benefits of professional writing assistance and stand out in the market. 
      </p>
    </div>

   
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
     
      {[
        { id: "01", title: "Fiction Book Ghostwriting " },
        { id: "02", title: "Non-fiction Ghostwriting " },
        { id: "03", title: "Non-fiction Ghostwriting " },
        { id: "04", title: "Ebook Ghostwriting " },
         { id: "05", title: "Christian Book Ghostwriting " },
       
      ].map((step, index) => (
        <div 
          key={index}
          className="flex flex-col h-full transition-transform duration-300 hover:-translate-y-2"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
        
          <div className="flex-1 px-8 py-12 text-left bg-blue-600 border border-blue-700 rounded-xl shadow-lg brand-process-content min-h-[220px] flex flex-col justify-center">
            <span className="inline-block mb-4 text-4xl font-extrabold text-blue-300/50 num-span">
              {step.id}
            </span>
            <h2 className="text-2xl font-bold leading-tight text-white font-poppins pro-h">
              {step.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>        


{/* <section class=" bg-white font-poppins">
  <div class="max-w-7xl px-6 mx-auto">
    
   
    <hr class="my-20 border-slate-100" />

    <div class="text-center">
      <h3 class="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Multi-genre Expertise</h3>
      
      <h2 class="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
        Types of <span class="relative inline-block px-2">
          <span class="relative z-10">Book Ghostwriting Services</span>
          <span class="absolute bottom-2 left-0 w-full h-4 bg-yellow-300/50 -z-0"></span>
        </span> We Offer
      </h2>

      <p class="max-w-4xl mx-auto text-xl text-slate-600 leading-relaxed mb-16">
        Our <span class="text-slate-900 font-bold border-b-2 border-yellow-400">ghost book writing services</span> cover a large range of book genres, 
        so that everyone looking to hire ghost writers can get the benefits of 
        <span class="text-slate-900 font-bold italic">professional writing assistance</span> and stand out in the market.
      </p>

      <div class="flex flex-wrap justify-center gap-4 md:gap-12">
        <div class="group cursor-pointer">
          <p class="text-2xl md:text-3xl font-black text-slate-400 group-hover:text-blue-600 transition-colors duration-300">Fiction Book Ghostwriting</p>
          <div class="h-1 w-0 group-hover:w-full bg-blue-600 transition-all duration-500 mx-auto mt-2"></div>
        </div>
        <div class="group cursor-pointer">
          <p class="text-2xl md:text-3xl font-black text-slate-400 group-hover:text-blue-600 transition-colors duration-300">Non-fiction Ghostwriting</p>
          <div class="h-1 w-0 group-hover:w-full bg-blue-600 transition-all duration-500 mx-auto mt-2"></div>
        </div>
        <div class="group cursor-pointer">
          <p class="text-2xl md:text-3xl font-black text-slate-400 group-hover:text-blue-600 transition-colors duration-300">Business Ghostwriting</p>
          <div class="h-1 w-0 group-hover:w-full bg-blue-600 transition-all duration-500 mx-auto mt-2"></div>
        </div>
        <div class="group cursor-pointer">
          <p class="text-2xl md:text-3xl font-black text-slate-400 group-hover:text-blue-600 transition-colors duration-300">Ebook Ghostwriting</p>
          <div class="h-1 w-0 group-hover:w-full bg-blue-600 transition-all duration-500 mx-auto mt-2"></div>
        </div>
      </div>
    </div>
  </div>
</section> */}


            <section className="overflow-hidden" >
                <div className="relative left-0 px-12 py-10 mb-8 brand-choose-us-section ms-auto md:left-52 md:px-20 md:mt-16 " >
                    <div className="flex flex-col items-center md:flex-row" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                            <Image src={"/images/Ghostwriting/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/2 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">What Makes Us The Best Ghostwriting Services In USA And WorldWide?</h2>
                            <p className="mt-2 text-white">professional ghostwriting services for authors
At Pine Book Writing, we keep expertise, creativity, and transparency at our core to deliver  in every genre. We promise to help create a book 
that feels authentic, professional, and completely yours.We offer: 
</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />100% Ownership  </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Dedicated Project Manager  </li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Expert Ghostwriters  </li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Dedicated Project Manager </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Flexible Packages </li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Multiple Revisions </li>
                                </ul>
                            </div>
                           
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

           
            <NewBrandFooter />
        </>
    );
}
