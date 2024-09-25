import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import BrandFooter from "./components/BrandFooter";
import BrandAbout from "./components/BrandAbout";
import BrandNavbar from "./components/BrandNavbar";
import BrandBannerLogo from "./components/BrandBannerLogo";
import BrandChooseUs from "./components/BrandChooseUs";
import BrandContact from "./components/BrandContactForm";
import BrandPrimaryHeader from "./components/BrandPrimaryHeader";
import BrandFaqs from "./components/BrandFaqs";
import NewBrandFooter from "./components/NewBrandFooter";
import BrandTopBar from "./components/BrandTopBar";

// import aboutBanner from "../public/brand-img/abt-banner.jpg";


export default function About() {


    // const bannerbackground = [
    //     { src: "/brand-img/abt-banner.jpg"},

    // ];



    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "What genres does Pine Book Writing specialize in?", answer: "We pride ourselves on our versatility and can assist with a wide range of genres, including fiction, non-fiction, memoirs, and more." },
        { question: "How does the publishing process work with Pine Book Writing?", answer: "Our process begins with an initial consultation to discuss your project's goals and requirements. From there, we'll work closely with you every step of the way, from manuscript development to final publication." },
        { question: "What level of involvement will I have in the editing process?", answer: "Your level of involvement is entirely up to you. We offer collaborative editing services, where you'll have the opportunity to provide feedback and input throughout the editing process." },
        { question: "How long does it typically take to publish a book with Pine Book Writing?", answer: "The timeline can vary depending on the scope of your project and our current workload. However, we strive to work efficiently without compromising quality, aiming to deliver your finished product within a reasonable timeframe." },
        { question: "What sets Pine Book Writing apart from other publishing services?", answer: "At Pine Book Writing, we prioritize personalized attention, expert guidance, and transparent communication. Our goal is not just to publish your book but to ensure it's the best it can be, tailored to your unique vision and goals." },
        { question: "What pricing options are available for your services?", answer: "We offer competitive pricing packages tailored to fit your budget and project needs. Our rates are transparent, and we're happy to provide a detailed quote based on the specific services you require." }
    ];

    return (
        <>
            <Head>
                <title>About Our Company | Pine Book Writing</title>
                <meta
                    name="description"
                    content="Are you curious about our company's vision? Here is everything you should know about Pine Book Writing. From our vision to what we are capable of doing."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandTopBar/>
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"brand-img/abt-banner.jpg"}
                title="About Us"
                // desc="Let Pine Book Writing be your guide throughout this self-publishing journey. We believe in your story and want the world to read your narrative."
            />
            <BrandBannerLogo />
            <BrandAbout
                headingmain="Who Are We At Pine Book Writing?"
                subdescone="Pine Book Writing, a professional book writing agency founded on February 22, 2023, has been on a mission to provide expert ghostwriting services to new and seasoned authors to help them thrive in the world of literacy. "
                subdesctwo="Our founders noticed that many authors need help to write a book that can stand out in the crowded marketplace. They wanted to create a company that would help these authors bring their stories to life and turn them into best-selling books. That was the time when Pine Book Writing was born with an agenda to provide authors with the best book writing services."
                // subdescthree="Whether you need help with Book Writing, editing, or marketing, Pine Book Writing is here to guide you through it with ease. Our experienced team is not just here to assist you; we're here to walk alongside you every step of the way. So, don't let this chance slip away. Connect with us, share your story idea, and let's transform it into a masterpiece together. We'll ensure that your book successfully makes its way to Amazon, Kindle, Lulu, and other publishing platforms."
            />
            <BrandChooseUs />
         
            <BrandFaqs/>
            <BrandContact />
            {/* <BrandFooter /> */}
            <NewBrandFooter />
        </>
    );
}
