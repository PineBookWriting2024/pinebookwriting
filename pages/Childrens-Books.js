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
        { question: "Can you help if I only have a small idea?", answer: "Yes, that’s very common. Many clients come with just a thought or lesson. We help turn it into a full children’s story, step by step." },
        
        { question: "Do you write for different age groups?", answer: "We do. From toddlers to early readers, we adjust tone, word length, and pacing so the story fits the child’s age properly." },
       
        { question: "Will the story be original?", answer: "Always. Our professional children’s book ghostwriters focus on original writing. No copied plots, no recycled characters." },
       
        { question: "Can you edit a children’s book I already wrote?	", answer: "Yes. Our children book editors can revise, clean, and improve flow without changing your original voice too much." },
        
        { question: "Do you help with illustrations?", answer: "We don’t draw, but we write in a way that works well for illustrated children’s book writing and guide you on next steps." },
       
        { question: "How long does it take to write a children’s book?", answer: "It depends on length and feedback speed. Most projects take a few weeks, sometimes less but sometimes a bit more." },
            ];

    return (
        <>
            <Head>
                <title>Best Children Book Writing Services | Pine Book Writing</title>
                    <link rel="canonical" href="https://www.pinebookwriting.com/Childrens-Books" />
                <meta
                    name="description"
                    content="Looking to write children’s books? Our children's book writing service helps turn simple ideas into age-appropriate stories that kids enjoy and parents trust."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/Childrens-Books/1.webp"}
                title="Expert Children’s Books Writing Services - Pine Book Writing"
                desc="Stories for kids need care. Not noise. Our children's books writing services help new and experienced authors turn simple ideas into age-right stories that feel warm, fun and easy to remember. Not forced or overdone. Get in touch today!"
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Offering Children's Book Ghostwriting Services</h2>

                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                       Stories That Kids Actually Enjoy
                        </h2>
                       
                        <p className="pt-3 text-xl text-left font-poppins">
                     Writing a children’s book is not just about cute words. It’s about knowing how kids think, what keeps them listening, and when a story should pause. Our children book writing service focuses on clarity, emotion and rhythm that feels right for young readers. </p>

                        <p className="pt-3 text-xl text-left font-poppins">Some clients come with a rough idea. Others have already started writing a children’s book but feel stuck. That’s normal. Our children book ghostwriting services help shape stories for picture books, early readers, and short fiction. We also work closely with children’s book editors when needed, so the story flows well and stays age-appropriate. Whether you want to hire a children book writer or just fix what you already wrote, we keep things simple and honest. So, don’t wait and get in touch with Pine Book Writing’s team today!</p>
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Childrens-Books/ghost-pic.webp"} width={470} height={300}
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
                                        src="/images/Childrens-Books/cta-book-12.webp"
                                        alt="Book 1"
                                        className="absolute l-book -top-20 md:-top-36"
                                        height={600}
                                        width={600}
                                    />
                                </div>
            
                                <div className="px-4 text-center md:col-span-6">
                                    <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                                       Let’s Write Something Kids Love
                                    </h2>
                                    <p className="py-4 text-base md:text-lg">
                                       Have an idea sitting in your head for too long? Our children's book writing service helps you write children books that parents trust and kids enjoy reading again and again.
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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Children's Book Writing Service</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Idea Understanding</h2>
                                <p className="">We start by listening. Your idea, age group, tone and even doubts. Writing a children’s book works best when we understand who the story is really for.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Planning & Structure</h2>
                                <p className="">Our children’s book writer builds a simple story plan. Nothing complex. Just clear flow, gentle message, and space for imagination to grow naturally..</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Drafting</h2>
                                <p className="">Draft writing begins. The language stays soft and age-appropriate. We focus on children’s fiction writing that feels easy to read, not heavy or confusing.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Multiple Revisions</h2>
                                <p className="">You review the draft. We adjust scenes, pacing, or tone. Custom children’s story writing needs back and forth, and we’re patient with that.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Editing & Refining</h2>
                                <p className="">Editing and polishing follows. Our expert editors check clarity, reading level, and flow so the story feels smooth and friendly.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Final Delivery</h2>
                                <p className="">Final delivery is prepared. Clean file, ready for illustration or publishing. Picture book writing services often move to this stage with ease.</p>
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
What’s Included In Our Children Book Writing
  </h2>

  <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
  From first idea to final words, our kids book writing services support every stage, while keeping stories simple, readable, and suitable for young minds. We do all that can help you list your book among the best children's books.
  </p>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
     { icon: '🖋️', label: 'Picture Book Writing' },
      { icon: '🧐', label: 'Early Reader Book Writing' },
      { icon: '📄', label: 'Children’s Book Ghostwriting' },
      { icon: '💼', label: 'Age-Appropriate Editing' },
      { icon: '⚙️', label: 'Story Development for Kids' },
      { icon: '🎯', label: 'Design & Illustration' },         
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
                        <Image src={"/images/Childrens-Books/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/2 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">Why Children's Writers Prefer Choosing Our Ghostwriting Services?</h2>
                            <p className="mt-2 text-white">At Pine Book Writing, we don’t rush stories. Children's book writing needs patience, softness and real care. Our team writes with heart. Our team of children’s book ghostwriters for hire doesn’t use templates. And we keep the child reader at the center always.</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Kid-first writing </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Honest feedback </li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Soft Language</li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Simple process</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Age clarity</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Multiple revisions</li>
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
