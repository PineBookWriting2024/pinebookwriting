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


export default function WebCopywriting () {
    const handleOpenChat = () => {
        window.zE && window.zE('webWidget', 'open');
    };
    
    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "What kind of web copy do you write?", answer: "Being pioneers in the writing industry, we produce a vast variety of content through our web copywriting services, like homepages, about pages, landing pages, product descriptions, and blog posts. Each piece is bespoke to your unique audience and goals." },
        
        { question: "How do you ensure my brand voice is reflected in the content?", answer: "Our team of website copywriters collaboratively understands your brand voice and message first. Then, they incorporate your unique brand voice into every section of the website to ensure consistency throughout the website." },
       
        { question: "How do you conduct keyword research for web copy?", answer: "We have a dedicated team of SEO professionals who conduct thorough keyword research to find relevant and most searched terms and phrases. Then, they strategically infuse them into your content to improve its visibility in SERPs. " },
       
        { question: "How long does your website content writing service take?", answer: "The timeline of our web content writing services depends on many factors, such as the number of web pages, website UI, wordcount requirement (if any), and the complexities of your SEO requirement. However, we can provide an estimated timeline after discussing your project requirements.  " },
        
        { question: "Do you write website content using AI Tools?", answer: "No, we do not write web copies using any AI tools to ensure every line is based on facts and a human feel. However, we don’t neglect the importance of having familiarity with AI for topics, Ideas, and Research purposes." },
       
        { question: "Can I request revisions to the web copy?", answer: "Absolutely. As part of our best content writing services for websites, we offer multiple revisions to ensure your 100% satisfaction with our work.  We embrace our clients' feedback and work until they’re happy." },
            ];

    return (
        <>
            <Head>
                <title>Expert web copywriting services | Pine Book Writing</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/web-copywriting" />

                <meta
                    name="description"
                    content="Uplift your brand with professional web copywriting services. Well-researched content that can help your website rank and grab visitors' attention quickly."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
                <BrandTopBar/>
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/Web-Copywriting/1.webp"}
                title="Best Web Copywriting Services to Strengthen Your Online Presence"
                desc="Your website requires content that can inform and persuade your visitors at once. At Pine Book Writing, we offer professional web copywriting services and create compelling and persuasive content for homepages, services pages, and landing pages in your own preferred messaging style."
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                       
                        <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Build Credibility - Hire Expert Web Copywriting Services</h2>
                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                       Write Words that Bring Results
                        </h2>
                        <p className="pt-3 text-xl text-left font-poppins">
                      In order to create exceptional online presence, having a well functioning and appealing website is not enough. Hire our professional web copywriting services that offer SEO-friendly yet audience-friendly content. A great web copy answers questions about your business and encourages action. And that's what we do at Pine Book Writing.</p>

                       <p className="pt-3 text-xl text-left font-poppins">
  We have a team of competent web copywriters, each of whom has extensive experience in creating{" "}
  <a
    href="https://www.pinebookwriting.com/seo-content"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline hover:text-blue-800"
  >
    SEO-optimized content
  </a>{" "}
  for many businesses and industries. Whether you want to write for a simple informative website, an Ecommerce platform, a blog website, an author website, or want to acquire landing page copywriting, our top-quality content creation service is ready. We help you connect with your audience and portray your brand's unique voice with easily readable words.
</p>
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Web-Copywriting/ghost-pic.webp"} width={470} height={300}
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
                                        src="/images/Web-Copywriting/cta-book-12.webp"
                                        alt="Book 1"
                                        className="absolute l-book -top-20 md:-top-36"
                                        height={600}
                                        width={600}
                                    />
                                </div>
            
                                <div className="px-4 text-center md:col-span-6">
                                    <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                                      Losing Leads From Weak SEO-Friendly Copywriting?
                                    </h2>
                                   <p>
Weak website copy costs your customers. Trust our web copywriting services, as we deliver easily understandable and SEO-optimized content that visitors find useful and trustworthy.
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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Website Copywriting Services</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Getting Started</h2>
                                <p className="">Our service process begins with sending you a web content writing services questionnaire to understand your business, audience, and other preferences.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Thorough Research</h2>
                                <p className="">Once we get all the details, our writers will conduct deep research about your industry to understand your brand, audience and unique voice fully. </p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Content Planning</h2>
                                <p className="">After research, we create a robust website content strategy that fully aligns with your unique business goals and objectives.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Copywriting</h2>
                                <p className="">Then, we assign your web content writing task to our best-fit writer, who has prior experience in web copywriting services for your particular business niche.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Refining & Revision</h2>
                                <p className="">After completing the write-up, we take our content through our proficient editing process to ensure that it is error-free, plagiarism-free, and SEO-friendly content.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Final Delivery</h2>
                                <p className="">Lastly, we deliver your website copy in your preferred format with a PDF report of readability score and plagiarism to ensure your satisfaction.</p>
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
  What’s Included In Our Web Copywriting Services   
  </h2>

  <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
  Our website copywriting company covers everything needed to create a robust impression and catch visitors' attention immediately. Our content perfectly conveys your brand message, knocks search engines, and moves users toward action.
  </p>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
     { icon: '🖋️', label: 'Home Page Copy' },
      { icon: '🧐', label: 'Services Page Copywriting' },
      { icon: '📄', label: 'Landing Page Copywriting' },
      { icon: '💼', label: 'About Us Page' },
      { icon: '⚙️', label: 'Product Descriptions' },
      { icon: '🎯', label: 'SEO Copy Optimization' },         
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
                <div className="relative left-0 px-12 py-10 mt-0 mb-8 brand-choose-us-section ms-auto md:left-52 md:px-20 md:mt-14 " >
                    <div className="flex flex-col items-center md:flex-row" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                        <Image src={"/images/Web-Copywriting/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/3 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Our Web Copywriting Agency in USA?</h2>
                            <p className="mt-2 text-white">At <a href="https://www.pinebookwriting.com" target="_blank" class="font-bold" rel="noopener noreferrer">Pine Book Writing</a>, our web copywriting services go beyond just writing words. We study your audience, industry, and competitors, and write something that sets you apart. We mix creativity and strategy in our writing to create something that helps you connect with your audience the right way.</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Skilled Copywriters </li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Human-Written Copy </li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	SEO-Friendly Content </li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Fast Turnaround</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />	Conversion-Focused Copy</li>
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
