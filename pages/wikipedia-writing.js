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
import Link from "next/link";
import BrandTopBar from "./components/BrandTopBar";
import { FaPhoneVolume } from "react-icons/fa";
import CTAButton from './components/CTAButton';




const handleOpenChat = () => {
    window.zE && window.zE('webWidget', 'open');
};

export default function Wikipedia() {
    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "Can you also help me publish my Wikipedia article/page?", answer: "No, we do not offer a Wikipedia publishing service. However, you can hire any company or freelancer to get your Wikipedia page published." },

        { question: "Is there anything that can not be published on Wikipedia?", answer: "Yes. Wikipedia has its own set of guidelines about what gets published, and the content that you want to publish on Wikipedia should be written in such a way that it clarifies all the rules and regulations." },

        { question: "What if I'm not satisfied with the final draft?", answer: "We offer multiple revisions, so there’s no need to worry about the satisfaction. Our expert Wikipedia writers are very well experienced in writing Wikipedia articles/pages." },

        { question: "Do you guarantee acceptance of the article/page to Wikipedia?", answer: "We do guarantee you the content that meets the Wikipedia Guidelines, but we do not guarantee its acceptance by Wikipedia. Wikipedia does not only consider the content, but it also considers the notability of the topic or the person the article is about." },

        { question: "How long does the Wikipedia article/page writing take?", answer: "Well, it usually takes around 5-10 days to write a publish-worthy Wikipedia article/page, but it also depends on the various factors. The length of the article, the complexity of the content, and the time required for the research." },

        { question: "How much will it cost me to get my Wikipedia article/page written?", answer: "The cost of writing the content for a Wikipedia article/page is a very complex task. A single error in the content or the citations can lead to the rejection of your article/page. You can contact our representative to brief the requirements of your Wikipedia article/page and get a proper quote." },
    ];

    return (
        <>
            <Head>
                <title>Wikipedia writing services | Wikipedia writers for hire</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/wikipedia-writing" />

                <meta
                    name="description"
                    content="Get professional Wikipedia writing services for page creation, editing, and approval. Hire expert Wikipedia writers to build a notable digital presence."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandTopBar/>
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/images/Wikipedia-Writing/1.webp"}
                title="Professional Wikipedia Writing Services"
                desc="Are you seeking the best Wikipedia writing services to enhance your online or business presence? If yes, then Pine Book Writing is here for you! Our expert Wikipedia writers have helped hundreds of clients, including politicians, actors, and other notable individuals."
            />
            <BrandBannerLogo />

            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        
                        <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Hire Expert Wikipedia Article Writing Services</h2>
                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                            Your Story On Wikipedia
                        </h2>
                        <p className="pt-3 text-xl text-left font-poppins">
                           Unsurprisingly, Wikipedia is the most powerful platform that helps people see legitimate information about many things, personalities, places, and more. It can help enhance your online presence and credibility. A professionally written Wikipedia article can attract audiences, build authority, and improve ranking on search engines. It requires a lot of writing expertise and proficiency to follow Wikipedia’s strict guidelines.</p>

                        <p className="pt-3 text-xl text-left font-poppins">At Pine Book Writing, our skilled team of Wikipedia writers is immensely familiar with Wikipedia’s policies and guidelines. They bring years of experience in writing informative, readable, and well-researched articles based on Wikipedia’s standards. We will highlight your achievements, contributions, and knowledge base in order to establish a robust Wikipedia presence. </p>
                    </div>

                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Wikipedia-Writing/ghost-pic.webp"} width={470} height={300}
                            loading="lazy"
                            alt="about img"
                            className="aos-init aos-animate"
                            data-aos="fade-left" data-aos-duration="1000"
                        />
                    </div>
                </div>

                {/* <p className="px-10 pt-3 text-xl text-left font-poppins md:px-0" data-aos="fade-right">
                    Let’s help you create a noteworthy Wikipedia article that portrays your career and life accomplishments. Contact us now to discuss your project with experts!
                </p> */}
            </div>


            <section className="relative overflow-visible text-white bg-center bg-no-repeat bg-cover ser-cta-banner py-18 md:py-0"
                            style={{ backgroundImage: `url(/brand-img/bg-banner.png)` }}>
                            <div className="relative grid items-center grid-cols-1 gap-4 mx-auto md:grid-cols-12 max-w-7xl ">
            
                                <div className="relative z-10 justify-center hidden md:col-span-3 md:flex md:justify-start">
                                    <Image
                                        src="/images/Wikipedia-Writing/cta-book-12.webp"
                                        alt="Book 1"
                                        className="absolute l-book -top-20 md:-top-36"
                                        height={600}
                                        width={600}
                                    />
                                </div>
            
                                <div className="px-4 text-center md:col-span-6">
                                    <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                                       Hire Expert Wikipedia Writing Services to Get Notability Globally!
                                    </h2>
                                    <p className="py-4 text-base md:text-lg">
                                     Create well-written and well-researched wiki pages to tell the world about you and your success. Contact us today!
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
                        <h2 className="text-3xl font-bold text-black font-poppins md:text-4xl" data-aos="zoom-out-down">6-Step Process of Our Wikipedia Writing Services</h2>
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="flex-col px-6 py-10 text-left brand-process-content">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Initial Consultation</h2>
                                <p className="">We start our Wikipedia writing service process by sending you a questionnaire to understand your goals, audience, and desired content.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Research & Planning</h2>
                                <p className="">Then, our team of professionals will conduct in-depth research to gather all the relevant information and create an outline.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Draft Creation</h2>
                                <p className="">Once our outline is approved, one of our dedicated writers will write an all-inclusive Wikipedia article based on the research and outline.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid gap-6 mb-6 md:grid-cols-3" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Review & Revision</h2>
                                <p className="">The article will be sent to you for your review. We will make the necessary changes to ensure that it is tailored to your requirements.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Final Article Delivery</h2>
                                <p className="">Once your article is finalized and ready to be submitted to Wikipedia, we'll send it to you within the promised delivery time.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="flex-col px-6 py-10 text-left brand-process-content">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="text-2xl text-white font-poppins pro-h">Ongoing Support</h2>
                                <p className="">Your journey doesn't end here. We also offer ongoing support by guiding on maintaining your Wikipedia article after publication.</p>
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
What’s Included In Our WikiPedia Writing Services
  </h2>

  <p className="mb-12 text-xl font-medium text-center text-gray-700 md:text-2xl">
Our Wikipedia writing service covers all aspects from research and planning to refining the draft. So you receive a ready-to-deliver Wikipedia article fit for your event.
  </p>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
     { icon: '🖋️', label: 'Topic Assessment' },
      { icon: '🧐', label: 'Research & Drafting' },
      { icon: '📄', label: 'Citation & Formatting' },
      { icon: '💼', label: 'Wikipedia Page Creation' },
      { icon: '⚙️', label: 'Monitoring & Maintenance' },
      { icon: '🎯', label: 'Conflict Resolution' },         
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
                <div className="relative left-0 px-12 py-10 mt-6 mb-8 brand-choose-us-section ms-auto md:left-52 md:px-20 md:mt-14 " >
                    <div className="flex flex-col items-center md:flex-row" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                            <Image src={"/images/Wikipedia-Writing/WhyChooseUs2.webp"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/3 md:ml-20">
                            <h2 className="mt-10 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-0" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Our Wikipedia Writing Services?</h2>
                            <p className="mt-2 text-white">Strengthen your personal or business online presence with our professionally written Wikipedia article. We have a team of experienced Wikipedia writers for hire who create accurate and engaging articles adhering to Wikipedia’s guidelines.</p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-start gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Dedicated Writer’s Tea </li>
                                    <li className="flex items-start gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> In-depth Research </li>
                                    <li className="flex items-start gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Accurate Content </li>
                                </ul>
                                <ul>
                                    <li className="flex items-start gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Engaging Writing Style</li>
                                    <li className="flex items-start gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Timely Delivery</li>
                                    <li className="flex items-start gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Ongoing Support</li>
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
