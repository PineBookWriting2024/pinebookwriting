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
        { question: "What type of book editing do I need?   ", answer: "It depends on your draft. Early manuscripts often need developmental editing. While finished drafts benefit from line editing or proofreading. So, before suggesting the type(s), we first review your book. Then guide you honestly." },
        
        { question: "Do you edit both fiction and non-fiction books?", answer: "Yes. Being a comprehensive writing and book editing company, we do. For all genres. Whether you have a memoir, a business book, children, or anything else. Bring it to us. Each genre is handled by editors who are familiar with its writing style." },
       
        { question: "Will you change my writing style?", answer: "No. Our editors improve clarity and flow while keeping your voice as it is. That’s our job. We suggest edits. But not force them. And you always have rights to approve the final version." },
       
        { question: "Can I talk to the editor during the process?", answer: "Yes, communication is open. You can ask questions, discuss feedback, and share concerns during the editing stages. We believe editing works best as a two-way process." },
        
        { question: "How long does book editing usually take?", answer: "Timelines depend on word count and editing level. Short manuscripts take less time, longer books need more care. We share clear deadlines before starting the work.." },
       
        { question: "Is my manuscript kept confidential?", answer: "Absolutely. Your manuscript stays private and protected. We never share content, ideas, or drafts with third parties under any circumstances. " },
            ];

    return (
        <>
            <Head>
                <title>Book Editing Services | Expert Book Editors for Hire</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/Fantasy-Writing-Services" />
                <meta
                    name="description"
                    content="Get trusted book editing services for fiction, non-fiction, and other genres. Our expert editors help refine your work, making it shareable with the world."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/Book-Editing/1.webp"}
                title="Book Editing Services That Refine Your Story"
                desc="Have you written a perfect book and want to publish it? Don't neglect the importance of professional editing. A good manuscript deserves more than just quick fixes.  We offer exceptional book editing services that help you refine overall language and structure so it reads clear and ready for real readers."
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Professional Book Editing That Fixes What Matters</h2>

                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                    For Writers Who Care About Quality
                        </h2>
                       
                        <p className="pt-3 text-xl text-left font-poppins">
                       Writing a book is just one step. But making it readable and consistent is another very important step. And that's actually where our book editing services step in. At Pine Book Writing, we have a team of expert editors who first understand the context, then edit with attention. Not haste. They don't just check grammar but also thoroughly review story flow, tone and structure. </p>

                        <p className="pt-3 text-xl text-left font-poppins">Whether your manuscript is a work of fiction, non-fiction or any other genre, we read it like readers and work like professionals. What professional will you get here? Honest editorial feedback. Tracked changes. Practical suggestions. We don't rewrite your voice. We help it come through stronger. Our editing support meets you where your book actually is.</p>
                        
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Book-Editing/ghost-pic.webp"} width={470} height={300}
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
                            <div className="relative grid items-center grid-cols-1 gap-6 mx-auto md:grid-cols-12 max-w-8xl">

  {/* Left Image */}
  <div className="flex justify-center md:col-span-3 md:justify-start">
    <Image
      src="/images/Book-Editing/cta-book-12.webp"
      alt="Book 1"
      height={300}
      width={300}
      className="w-auto h-auto"
    />
  </div>

  {/* Center Content */}
  <div className="px-4 text-center md:col-span-6">
    <h2 className="font-poppins text-2xl md:text-3xl text-[#98caa9] font-semibold uppercase">
 Not Sure Which Type of Book Editing Service You Need? Let's Help!
    </h2>

    <p className="py-4 text-base md:text-lg">
    Some books require one type of editing. Others require more than one. But every book requires editing. Contact us to know where your book needs improvement by the team of experts.
    </p>

    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <CTAButton />

      <a href="tel:(866) 841-7463" className="flex items-center gap-2 text-white">
        <FaPhoneVolume /> (866) 841-7463
      </a>

      <button
        onClick={handleOpenChat}
        className="px-5 py-2 text-white transition bg-transparent border border-white rounded-full hover:bg-gray-200 hover:text-black"
      >
        Live Chat
      </button>
    </div>
  </div>

  {/* Right Image */}
  <div className="flex justify-center md:col-span-3 md:justify-end">
    <Image
      src="/brand-img/type.png"
      alt="Typewriter"
      height={300}
      width={300}
      className="w-auto h-auto"
    />
  </div>

</div>

                        </section>

            {/* inner process section start */}
             <section className="relative flex justify-center pt-20 mx-auto mb-12 overflow-hidden text-center brand-process">
                <div className="max-w-screen-xl">
                    <div className="mb-6 text-center">
                        <h3 className="text-2xl text-black font-poppins">Our Service Workflow</h3>
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Book Editing Services</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Manuscript Review</h2>
                                <p className="">We start by reading your manuscript fully, not skimming. This helps us understand the genre, intent, tone, and real editing needs before suggesting the right level of editing. </p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Editing Plan </h2>
                                <p className="">Based on the review, we decide whether your book needs developmental editing, line editing, or proofreading. No upselling, just what fits your manuscript best.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Structural Editing</h2>
                                <p className="">If needed, we work on structure, pacing, chapter flow, and clarity. We flag gaps, repetition, and weak transitions while keeping your story or message intact.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Line and Copy Editing</h2>
                                <p className="">Here, we focus on multiple aspects. Word choice. Consistency. Edits are clean. Readability. We make it easy for you to review every change comfortably.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Author Feedback Round</h2>
                                <p className="">You receive detailed comments and suggestions. We explain why edits were made and stay open to discussion. Your input matters during every revision stage.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Final Proof Check</h2>
                                <p className="">Before delivery, we run a final proofreading pass to catch small errors, formatting slips, or missed lines. This step helps ensure a clean, publish-ready manuscript. </p>
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
What’s Included In Our Book Editing Services
  </h2>

  <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
  Through expert-level editing services, we cover different stages of writing. From early drafts to final checks. We make sure your manuscript feels smooth, consistent and ready for readers.
</p>


  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
     { icon: '🖋️', label: 'Developmental Editing' },
      { icon: '🧐', label: 'Line Editing' },
      { icon: '📄', label: 'Copyediting' },
      { icon: '💼', label: 'Proofreading' },
      { icon: '⚙️', label: 'Fiction Editing' },
      { icon: '🎯', label: 'Non-Fiction Editing' },         
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
                        <Image src={"/images/Book-Editing/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/2 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">Why Writers Trust Our Book Editing Services</h2>
                            <p className="mt-2 text-white">Editing is personal. We treat your manuscript with care, honesty, and skill. Our editors focus on clarity, not control, helping writers improve their work without feeling rewritten or ignored.</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Genre-aware editors </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Flexible editing levels</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />		Clear feedback </li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Writer-focused approach</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />		Honest suggestions</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />		Confidential handling</li>
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
