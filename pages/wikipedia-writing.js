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
                <title>Wikipedia Writing | Pine Book Writing</title>
                <meta
                    name="description"
                    content="Everything about Pine Book Writing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/brand-img/wikipedia-writing-banner.png"}
                title="Professional Wikipedia Writing Services"
                desc="Are you seeking professional Wikipedia writing services to enhance your online or business presence? If yes, then Pine Book Writing is here for you! Our expert Wikipedia writers have helped hundreds of clients, including politicians, actors, and other notable individuals."
            />
            <BrandBannerLogo />

            <div className="container mx-auto max-w-screen-xl overflow-hidden pt-0 md:pt-20">
                <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row px-8 md:px-0 py-10 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        
                        <h2 className="font-poppins text-3xl md:text-4xl uppercase font-bold">Hire Expert Wikipedia Article Writing Services</h2>
                        <h2 className="font-poppins text-2xl md:text-3xl uppercase">
                            Your Story On Wikipedia
                        </h2>
                        <p className="font-poppins text-xl text-left pt-3">
                            Unsurprisingly, Wikipedia is the most powerful platform that helps people see legitimate information about many things, personalities, places, and more. It can help enhance your online presence and credibility. A professionally written Wikipedia article can attract audiences, build authority, and improve ranking on search engines. It requires a lot of writing expertise and proficiency to follow Wikipedia’s strict guidelines.</p>

                        <p className="font-poppins text-xl text-left pt-3">At Pine Book Writing, our skilled team of Wikipedia writers is immensely familiar with Wikipedia’s policies and guidelines. They bring years of experience in writing informative, readable, and well-researched articles based on Wikipedia’s standards. We will highlight your achievements, contributions, and knowledge base in order to establish a robust Wikipedia presence. </p>
                    </div>

                    <div className="basis-1/2 abt-pic text-center flex justify-center md:justify-center">
                        <Image src={"/brand-img/Wikipedia-Writing.png"} width={470} height={300}
                            loading="lazy"
                            alt="about img"
                            className="aos-init aos-animate"
                            data-aos="fade-left" data-aos-duration="1000"
                        />
                    </div>
                </div>

                <p className="font-poppins text-xl text-left pt-3 px-10 md:px-0" data-aos="fade-right">
                    Let’s help you create a noteworthy Wikipedia article that portrays your career and life accomplishments. Contact us now to discuss your project with experts!
                </p>
            </div>

  {/* inner process section start */}
  <section className="brand-process my-10  mx-auto relative pt-10 text-center flex justify-center mb-12 overflow-hidden">
                <div className="max-w-screen-xl">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl text-black font-poppins">Our Service Workflow</h3>
                        <h2 className="font-poppins text-3xl md:text-4xl text-black font-bold" data-aos="zoom-out-down">6-Step Process of Our Wikipedia Writing Services</h2>
                    </div>

                    <div className="grid grid-cols-3 gap-6 mb-6">

                        <div className="flex flex-row " data-aos="fade-left">
                            <div className="brand-process-content text-left flex-col px-6 py-10">
                                <span className="num-span"><b>01</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Initial Consultation</h2>
                                <p className="">We start our Wikipedia writing service process by sending you a questionnaire to understand your goals, audience, and desired content.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>02</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Research & Planning</h2>
                                <p className="">Then, our team of professionals will conduct in-depth research to gather all the relevant information and create an outline.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>03</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Draft Creation</h2>
                                <p className="">Once our outline is approved, one of our dedicated writers will write an all-inclusive Wikipedia article based on the research and outline.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="grid grid-cols-3 gap-6 mb-6" >

                        <div className="flex flex-row " data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>04</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Review & Revision</h2>
                                <p className="">The article will be sent to you for your review. We will make the necessary changes to ensure that it is tailored to your requirements.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>05</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Final Article Delivery</h2>
                                <p className="">Once your article is finalized and ready to be submitted to Wikipedia, we'll send it to you within the promised delivery time.</p>
                            </div>
                        </div>

                        <div className="flex flex-row" data-aos="fade-left">
                        <div className="brand-process-content text-left flex-col px-6 py-10">
                        <span className="num-span"><b>06</b></span>
                                <h2 className="font-poppins text-2xl text-white pro-h">Ongoing Support</h2>
                                <p className="">Your journey doesn't end here. We also offer ongoing support by guiding on maintaining your Wikipedia article after publication.</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>

            <section className="overflow-hidden" >
                <div className="brand-choose-us-section ms-auto relative left-0 md:left-52 px-12 md:px-20 mt-6 md:mt-14 mb-8 py-10 " >
                    <div className="flex items-center flex-col md:flex-row" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                            <Image src={"/brand-img/Why Choose Us 2.png"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/3 md:ml-20">
                            <h2 className="text-white font-poppins text-2xl md:text-4xl uppercase mt-10 md:mt-0 font-bold" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Our Wikipedia Writing Services?</h2>
                            <p className="text-white mt-2">Strengthen your personal or business online presence with our professionally written Wikipedia article.  We have a team of experienced Wikipedia writers who create accurate and engaging articles adhering to Wikipedia’s guidelines.</p>
                            <div className="flex flex-col md:flex-row gap-2 md:gap-10 mt-6">
                                <ul>
                                    <li className="font-poppins flex items-start gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Dedicated Writer’s Tea </li>
                                    <li className="font-poppins flex items-start gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> In-depth Research </li>
                                    <li className="font-poppins flex items-start gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Accurate Content </li>
                                </ul>
                                <ul>
                                    <li className="font-poppins flex items-start gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Engaging Writing Style</li>
                                    <li className="font-poppins flex items-start gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Timely Delivery</li>
                                    <li className="font-poppins flex items-start gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} /> Ongoing Support</li>
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
