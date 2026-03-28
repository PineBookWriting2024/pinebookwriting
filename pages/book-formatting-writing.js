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
        { question: "What are book formatting services exactly?  ", answer: "Book formatting services providers work on your manuscript layout for print and digital platforms. The work includes margins, spacing, chapters, and file setups, so publishers and readers get a clean and readable book." },
        
        { question: "Do you format books for Amazon KDP?", answer: "Yes, we handle Amazon KDP formatting. We follow their latest layout rules, help you avoid upload errors, file rejection or formatting shifts after publishing." },
       
        { question: "Can you format both ebook and print versions?", answer: "Yes. We offer print and digital book formatting. Ebook files are built for Kindle and ePub, while print layouts follow trim size and margin requirements." },
       
        { question: "Will formatting change my book content?", answer: "No. We never edit or rewrite text during formatting. Your words stay the same. Only layout, spacing, and structure are adjusted for better reading." },
        
        { question: "What file types do you deliver?", answer: "We usually deliver PDF for print and EPUB or MOBI for ebooks. If a platform needs something specific, we prepare that too." },
       
        { question: "How long does book formatting take?", answer: "Generally, formatting projects take a few days. If a manuscript is large or contains complex layouts, it may need a bit more time. But we always give clear timelines upfront. So no worries. " },
            ];

    return (
        <>
            <Head>
                <title>Expert Book Formatting Services | Pine Book Writing</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/Fantasy-Writing-Services" />
                <meta
                    name="description"
                    content="Need book formatting services that meet publishing rules? We format books for print, Kindle, and ePub. Clean layouts, smooth uploads, and files ready to publish."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/Formating/1.webp"}
                title="Professional Book Formatting - Make Your Book Look Right"
                desc="Good words deserve clean pages. We offer expert-level book formatting services, where we organize messy files and turn them into a print-ready layout. Your words feel easy to read, easy on the eyes and accepted by publishers."
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Professional Book Formatting That Actually Works</h2>

                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                  Make Your Book Print & Digital-Ready
                        </h2>
                       
                        <p className="pt-3 text-xl text-left font-poppins">
                     Book formatting is more than spacing and margins. It’s about how readers move through your book. Our professional book formatting service fixes structure, layout, and flow, without touching your voice. We handle manuscript formatting for print, Kindle, and ePub, so nothing breaks or shifts later. Chapters start clean. Headings sit right. Page numbers behave.  </p>

                        <p className="pt-3 text-xl text-left font-poppins">We format for Amazon KDP and other platforms, keeping every rule in mind. You’ll get publishing-ready formatting that feels polished. Not forced. Writers often come to us with rejection errors. We welcome and help prevent that. Simple files. Clean layouts. No confusion at publishing time.</p>
                        
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Formating/ghost-pic.webp"} width={470} height={300}
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
      src="/images/Formating/cta-book-12.webp"
      alt="Book 1"
      height={300}
      width={300}
      className="w-auto h-auto"
    />
  </div>

  {/* Center Content */}
  <div className="px-4 text-center md:col-span-6">
    <h2 className="font-poppins text-2xl md:text-3xl text-[#98caa9] font-semibold uppercase">
 Ready to Format Your Book Properly? Hire the Best Book Formatting Service!
    </h2>

    <p className="py-4 text-base md:text-lg">
 Why wait? Send us your manuscript and let our book formatters handle the layout work, so you can focus on publishing without stress or repeated formatting fixes.
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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Book Formatting Services</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">File Review</h2>
                                <p className="">We check your manuscript file carefully. Font issues, spacing problems, page breaks. Small things matter here, and we note everything before formatting even starts. </p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Format Planning </h2>
                                <p className="">Each book needs different formatting. Print, ebook, or both. We decide layout rules, trim size, margins, and chapter styling based on where you plan to publish.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Interior Formatting</h2>
                                <p className="">This is where structure comes together. Chapters, headings, page numbers, margins, and spacing are adjusted slowly, so the book reads smooth and looks balanced.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Platform Formatting</h2>
                                <p className="">We format files for Amazon KDP, Kindle, ePub, or print. Each platform has rules. We follow them closely to avoid upload errors or rejections.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Quality Checks</h2>
                                <p className="">Before delivery, we scan every page. No random gaps. No broken lines. No weird spacing. If something looks off, we fix it again.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Final Delivery</h2>
                                <p className="">You receive clean, publishing-ready files. We also guide you on how to upload them properly, so nothing changes at the last step. </p>
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
What’s Included In Our Book Formatting Services
  </h2>

  <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
We offer clean formatting for different book publishing platforms. See what's included in our services.
</p>


  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
     { icon: '🖋️', label: 'Interior Book Formatting' },
      { icon: '🧐', label: 'Interior Book Formatting' },
      { icon: '📄', label: 'ePub Formatting' },
      { icon: '💼', label: 'Print-Ready Layout' },
      { icon: '⚙️', label: 'Chapter Formatting' },
      { icon: '🎯', label: 'Margin Setup' },         
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
                        <Image src={"/images/Formating/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/2 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Pine Book Writing's Book Formatting Service?</h2>
                            <p className="mt-2 text-white">At Pine Book Writing, we don’t hasten formatting. Our team treats every book like it’s going live tomorrow. So, writers and published authors trust us because here files pass checks, uploads go smooth and layouts stay clean across devices.</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Real formatters </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />		Fast support</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />			Platform rules</li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />		No guesswork</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />			Clean layouts</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />			Author focused</li>
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
