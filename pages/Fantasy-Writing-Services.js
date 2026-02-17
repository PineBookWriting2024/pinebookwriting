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
        { question: "Do you write full fantasy novels or only parts?", answer: "Both. We handle full fantasy book writing, or help with outlines, chapters, or rewrites depending on what stage your project is at." },
        
        { question: "Can you help with fantasy series planning?", answer: "Yes. Our fantasy series writing services help plan long arcs, character growth, and future books without locking you into rigid structures." },
       
        { question: "Will the story sound like other fantasy books?", answer: "No. We avoid copying trends. Our modern fantasy writers focus on original voices, even when working within familiar fantasy themes." },
       
        { question: "Do you offer ghostwriting for fantasy books?", answer: "Yes. We provide fantasy ghostwriters for hire who write under NDA, keeping your authorship and creative ownership fully protected." },
        
        { question: "Is world building included?", answer: "Yes, but only when needed. Fantasy world building supports the story, not the other way around. We keep it balanced." },
       
        { question: "Can I be involved during writing?", answer: "Absolutely. Fantasy writing works best with feedback. You stay involved during drafts, reviews, and revisions without feeling overwhelmed. " },
            ];

    return (
        <>
            <Head>
                <title>Best Fantasy writing services | Pine Book Writing</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/Fantasy-Writing-Services" />
                <meta
                    name="description"
                    content="Looking for fantasy writing services? We help turn ideas into engaging fantasy books, series and novels with strong characters and believable worlds."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/Fantasy-Writing-Services/1.webp"}
                title="Fantasy Writing Services - Create a World Beyond Imagination"
                desc="Fantasy stories work best when they feel lived-in, not overdone. Our fantasy writing services, with the best fantasy book writers onboarded, help turn your ideas, notes, or half-formed worlds into enthralling stories that readers actually stay with till the end."
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Best Fantasy Writing Services That Go Beyond Tropes</h2>

                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                      Stories Built With Heart
                        </h2>
                       
                        <p className="pt-3 text-xl text-left font-poppins">
                        Fantasy is not just magic and battles. It is also people. Choices. Loss. Hope. At Pine Book Writing, our professional fantasy writers work with a focus on fantasy storytelling that feels human and real. Even inside unreal worlds. </p>

                        <p className="pt-3 text-xl text-left font-poppins">When people sign up for our services, some clients come with maps and lore. Others just have a feeling or a character voice. Both are okay. We work on fantasy fiction writing that grows naturally, scene by scene. From epic fantasy novel writing to character-driven fantasy stories, we keep the writing clear, readable and emotionally grounded. World building matters? Yes, but only when it serves the story.</p>
                         <p className="pt-3 text-xl text-left font-poppins">Whether you’re planning one book or a long fantasy series, you’re welcome at Pine Book Writing. We can help your shape your story without forcing trends or copying other fantasy or children story books.</p>
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Fantasy-Writing-Services/ghost-pic.webp"} width={470} height={300}
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
      src="/images/Fantasy-Writing-Services/cta-book-12.webp"
      alt="Book 1"
      height={300}
      width={300}
      className="w-auto h-auto"
    />
  </div>

  {/* Center Content */}
  <div className="px-4 text-center md:col-span-6">
    <h2 className="font-poppins text-2xl md:text-3xl text-[#98caa9] font-semibold uppercase">
     Let’s Build Your Fantasy World Together
    </h2>

    <p className="py-4 text-base md:text-lg">
      Have a fascinating story idea that won’t leave you alone? Don’t wait! Our top fantasy writers for hire can help you shape that into a real book, with structure, depth, and your voice still intact.
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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Fantasy Writing Services</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Idea Listening</h2>
                                <p className="">We start by listening, really. Your world, characters, tone, even confusion. Fantasy book writing works best when the writer understands what kind of story you “don’t” want too.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">World & Story Planning</h2>
                                <p className="">We sketch the fantasy world building basics. Rules, limits, cultures, magic systems. Nothing too heavy. Just enough so the story stays consistent and believable.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Character Development</h2>
                                <p className="">Strong fantasy books depend on people, not powers. We shape character-driven fantasy stories with clear motivations, flaws, and emotional arcs that evolve naturally across chapters.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Draft Writing</h2>
                                <p className="">This is where writing begins. Our fantasy ghostwriters write clean scenes, strong pacing, and natural dialogue. The goal is flow, not showing off vocabulary.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Review & Refinement</h2>
                                <p className="">You read. We adjust. Scenes may shift. Some parts get trimmed. That back-and-forth matters a lot in professional fantasy writing services, so we don’t rush it.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Final Polish</h2>
                                <p className="">We edit for clarity, consistency, and tone. The final manuscript is prepared for publishing or pitching, especially for clients </p>
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
What’s Included In Our Fantasy Ghostwriting Services
  </h2>

  <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
  <a 
    href="https://pinebookwriting.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="font-semibold text-blue-600 hover:underline"
  >
    Pine Book Writing
  </a>{" "}
  offers flexible fantasy writing support, whether you need full books, partial help, or long-term collaboration across multiple fantasy stories or series ideas.
</p>


  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
     { icon: '🖋️', label: 'Urban Fantasy Writing' },
      { icon: '🧐', label: 'High Fantasy Writing' },
      { icon: '📄', label: 'Dark Fantasy Writing' },
      { icon: '💼', label: 'Fantasy Series Development' },
      { icon: '⚙️', label: 'World Building Support' },
      { icon: '🎯', label: 'Character Arc Writing' },         
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
                        <Image src={"/images/Fantasy-Writing-Services/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/2 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">Offering Pro-Level Fantasy Writing Services - Without Copying Others</h2>
                            <p className="mt-2 text-white">We focus on original fantasy fiction writing. Not recycled plots. Every story we write is shaped carefully with patience, honest feedback, and respect for your creative vision and direction.</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Original story focus </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Genre understanding </li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Clear communication </li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Long-term support</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Flexible writing style</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Writer-first approach</li>
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
