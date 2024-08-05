import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import BrandFooter from "./components/BrandFooter";
import BrandNavbar from "./components/BrandNavbar";
import BrandBannerLogo from "./components/BrandBannerLogo";
import BrandChooseUs from "./components/BrandChooseUs";
import BrandContact from "./components/BrandContactForm";
import BrandPrimaryHeader from "./components/BrandPrimaryHeader";
import BrandProcess from "./components/BrandProcess";
import Chart from "./components/Chart";
import BrandFaqs from "./components/BrandFaqs";

export default function Bundles() {
    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "What genres does Pine Book Publishing specialize in?", answer: "We pride ourselves on our versatility and can assist with a wide range of genres, including fiction, non-fiction, memoirs, and more." },
        { question: "How does the publishing process work with Pine Book Publishing?", answer: "Our process begins with an initial consultation to discuss your project's goals and requirements. From there, we'll work closely with you every step of the way, from manuscript development to final publication." },
        { question: "What level of involvement will I have in the editing process?", answer: "Your level of involvement is entirely up to you. We offer collaborative editing services, where you'll have the opportunity to provide feedback and input throughout the editing process." },
        { question: "How long does it typically take to publish a book with Pine Book Publishing?", answer: "The timeline can vary depending on the scope of your project and our current workload. However, we strive to work efficiently without compromising quality, aiming to deliver your finished product within a reasonable timeframe." },
        { question: "What sets Pine Book Publishing apart from other publishing services?", answer: "At Pine Book Publishing, we prioritize personalized attention, expert guidance, and transparent communication. Our goal is not just to publish your book but to ensure it's the best it can be, tailored to your unique vision and goals." },
        { question: "What pricing options are available for your services?", answer: "We offer competitive pricing packages tailored to fit your budget and project needs. Our rates are transparent, and we're happy to provide a detailed quote based on the specific services you require." }
    ];

    return (
        <>
            <Head>
                <title>Bundles the Company | Pine Book Publishing</title>
                <meta
                    name="description"
                    content="Everything about Pine Book Publishing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"brand-img/bundles-banner.jpg"}
                title="Ready To Write Your Next Chapter?"
                desc="Let Pine Book Publishing be the compass for your narrative journey, steering you toward literary success with every stroke of the pen."
            />
            <BrandBannerLogo />
            <section className="package py-14">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="grid items-center grid-cols-1 text-center mb-14 m1-h">
                        <h3 className="text-3xl font-poppins md:text-4xl font-bold">
                            Publishing Packages
                        </h3>
                    </div>

                    {/* <div className="grid grid-cols-4 gap-4 items-top"> */}
                    <div className="grid grid-cols-1 px-6 mt-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className="gap-8 brand-bundle-pack-wrap">
                            <div className="flex items-center pack-box">
                                <Image src={"/images/pp1.png"} width={40} height={50}></Image>
                                <h4 className="pl-2 text-xl font-poppins md:text-2xl">
                                    Standard
                                </h4>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </p>
                        </div>
                        <div className="brand-bundle-pack-wrap">
                            <div className="flex items-center pack-box">
                                <Image src={"/images/pp2.png"} width={40} height={50}></Image>
                                <h4 className="pl-2 text-xl font-poppins md:text-2xl">
                                    Professional
                                </h4>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </p>
                        </div>
                        <div className="brand-bundle-pack-wrap">
                            <div className="flex items-center pack-box">
                                <Image src={"/images/pp3.png"} width={40} height={50}></Image>
                                <h4 className="pl-2 text-xl font-poppins md:text-2xl">
                                    All-Inclusive
                                </h4>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </p>
                        </div>
                        <div className="brand-bundle-pack-wrap">
                            <div className="flex items-center pack-box">
                                <Image src={"/images/pp4.png"} width={40} height={50}></Image>
                                <h4 className="pl-2 text-xl font-poppins md:text-2xl">
                                    Traditional
                                </h4>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Chart />
            <BrandChooseUs />
            
            <BrandFaqs/>
            <BrandContact />
            <BrandFooter />
        </>
    );
}
