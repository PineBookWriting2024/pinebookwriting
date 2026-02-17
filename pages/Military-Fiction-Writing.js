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
        { question: "What is military fiction writing?", answer: "In military fiction writing, stories are written based on war, defense (real or imagined) or real-life military experiences. Writers use real military elements and mix them with fictional elements or events to create emotionally powerful and authentic stories." },

        { question: "Can you help me write a military novel based on real events?", answer: "Yes. At Pine Book Writing, our military fiction writers for hire can help you pen real events or wartime memories and create a professionally written military book. This is actually what we do." },

        { question: "How do you make sure the story feels realistic?", answer: "Before starting to write, our writers conduct detailed research on different war-related aspects and elements, like geographical presentation of different areas, artillery, and strategies (used in war), to make sure each battle scene and dialogue feels believable." },

        { question: "Do I need to have full story details before hiring you?	", answer: "Not at all! If you don't have a full story, come with a basic idea or concept. Our fiction writers and researchers will handle the rest." },

       {
  question: "Not at all! If you don't have a full story, come with a basic idea or concept. Our fiction writers and researchers will handle the rest. What types of military fiction novels do you write?",
  answer: `
  We write for all forms of military fiction novels. You can sign up for our services whether you want to write a:

  1. Historical war story.
  2. Modern army thriller.
  3. Veteran life fiction.
  4. Air combat story.
  5. Sea combat story.
  `
}
,   

        { question: "How much does ghostwriting a book cost?", answer: "The cost of ghostwriting also varies based on your book's length, genre, and complexity. You can view our packages here. Moreover, if you want to customize the any package according to your need, you can speak to our representative. " },
    ];

    return (
        <>
            <Head>
                <title>Hire the Best Military Fiction Writing Services </title>
                <link rel="canonical" href="https://www.pinebookwriting.com/Military-Fiction-Writing" />
                <meta
                    name="description"
                    content="Write your war stories using professional military fiction writing services by Pine Book Writing. Infuse emotions into your coming military fiction book."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/Military-Fiction-Writing/1.webp"}
                title="Deliver Impact with Expert Military Fiction Writing Services"
                desc="At Pine Book Writing, we have a dedicated team of writers who specialize in military fiction writing services. Whether you want to write a modern war novel, a historical battle tale, or a military story based on real-life experiences, our skilled team of military fiction writers for hire is ready to serve. Contact us today!"
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Professional Military Fiction Writing Services</h2>

                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                           For Realistic War Stories
                        </h2>

                        <p className="pt-3 text-xl text-left font-poppins">
                          With our best military writing services, you may write stories that are exciting, true to life, and full of emotions based on real or imagined events. We make sure your war fiction story is both real and interesting by focusing on structure, character development and authentic details.  </p>

                        <p className="pt-3 text-xl text-left font-poppins">Our military fiction writers know how to write in the style and detail that your story needs, whether you're a veteran, an enthusiast, or a fiction writer working on the military historical fiction genre. We help with everything from coming up with ideas and making an outline to writing and editing the final draft. We work diligently to keep the bravery, emotion, and action in your story and make sure it appeals to many of your audience. </p>
                         <p className="pt-3 text-xl text-left font-poppins">Why still thinking? Share your story idea, and get it into a perfectly written book!</p>
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Military-Fiction-Writing/ghost-pic.webp"} width={470} height={300}
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
                            src="/images/Military-Fiction-Writing/cta-book-12.webp"
                            alt="Book 1"
                            className="absolute l-book -top-20 md:-top-36"
                            height={600}
                            width={600}
                        />
                    </div>

                    <div className="px-4 text-center md:col-span-6">
                        <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                           Ready to Convert Your War Story Into The Best-Selling?
                        </h2>
                        <p className="py-4 text-base md:text-lg">Hire expert military fiction writers and let them turn your military fiction story into the best-selling book.</p>

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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Ghostwriting Services</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Project Onboarding</h2>
                                <p className="">We begin our process by assigning a dedicated project manager to you and a questionnaire to learn about your writing requirements for our military ghostwriting services.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Research & Outline</h2>
                                <p className="">Then, our military fiction writers will conduct in-depth research, create a content outline, and send it to you for your approval, ensuring you're satisfied with our military fiction writing experts.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Author Interview</h2>
                                <p className="">After the outline approval, we arrange an interview session with our dedicated writer so that you can discuss your vision, tone, and writing style.</p>
                            </div>
                        </div>

                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Draft Submissions</h2>
                                <p className="">We provide deliveries weekly and accept your feedback throughout the process. We also offer multiple revisions to ensure your complete satisfaction.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Formatting & Layout</h2>
                                <p className="">Once our military fiction book work is finished, we will format the work in your preferred style and make the layout adjustments if required.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Final Delivery</h2>
                                <p className="">Lastly, we will hand over the quality-checked and well-organized manuscript to you in your preferred format within the promised timeframe.</p>
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
  What’s Included In Our Military Fiction Writing Services
  </h2>

  <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
  Hire military fiction writers for your next military fiction book at <a className="font-bold" href="https://www.pinebookwriting.com">Pine Book Writing</a>. We work together with our clients, combining research, creativity and storytelling expertise to write an impactful story.
  </p>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
     { icon: '🖋️', label: 'Concept Development ' },
      { icon: '🧐', label: 'Historical & Tactical Research' },
      { icon: '📄', label: 'Character & Plot Development    ' },
      { icon: '💼', label: 'Manuscript Writing' },
      { icon: '⚙️', label: 'Editing & Proofreading' },
      { icon: '🎯', label: 'Formatting & Finalization' },         
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
                            <Image src={"/images/Military-Fiction-Writing/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/2 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">What Makes Us the Best in Military Fiction Writing Services</h2>
                            <p className="mt-2 text-white">At Pine Book Writing, our competent team of military fiction writers doesn’t just write about war, but also infuses the real feel into it. They use real-world knowledge and merge it in creative storytelling that makes your story sound authentic yet emotionally powerful.</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Experienced Military Ghostwriters </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Fast Turnaround</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Authentic Battle Detailing </li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Custom Storytelling</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Emotional Character Depth</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Affordable Packages</li>
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
