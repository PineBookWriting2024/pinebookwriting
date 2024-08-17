import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import BrandFooter from "./components/BrandFooter";
import BrandNavbar from "./components/BrandNavbar";
import BrandBannerLogo from "./components/BrandBannerLogo";
import BrandPrimaryHeader from "./components/BrandPrimaryHeader";
import BrandTestimonial from "./components/BrandTestimonial";
import BrandCTA from "./components/BrandCTA";
import BrandCustomerStory from "./components/BrandCustomerStory";


export default function Services() {
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
                <title>Client Testimonials | Pine Book Writing</title>
                <meta
                    name="description"
                    content="Explore the real success stories and glowing feedback from our satisfied clients. See how Pine Book Writing delivers results."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"brand-img/testi-banner.jpg"}
                title="See What Our Clients Are Saying"
                desc="Don't rely only on our words. Explore our clients' valuable reviews about how we helped them succeed."
            />
            <BrandBannerLogo />
            <BrandCustomerStory />
            <BrandTestimonial />
            <BrandCTA
                title="Achieve Your Writing Dreams Now!"
                desc="Need help getting your book published? Let our team of experts guide you. Contact us today and take the first step towards becoming a published author."
                btntext="Speak to our Consultant"
            />
           
           
            <BrandFooter />
        </>
    );
}
