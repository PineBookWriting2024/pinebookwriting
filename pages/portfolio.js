import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import BrandFooter from "./components/BrandFooter";
import BrandAbout from "./components/BrandAbout";
import BrandNavbar from "./components/BrandNavbar";
import BrandBannerLogo from "./components/BrandBannerLogo";
import BrandChooseUs from "./components/BrandChooseUs";
import BrandFaqs from "./components/BrandFaqs";
import BrandContact from "./components/BrandContactForm";
import BrandPrimaryHeader from "./components/BrandPrimaryHeader";
import BrandPortfolio from "./components/BrandPortfolio";
import BrandCTA from "./components/BrandCTA";
import BrandProcess from "./components/BrandProcess";
import NewBrandFooter from "./components/NewBrandFooter";

export default function Portfolio() {
    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "How frequently is the portfolio updated with new projects?", answer: "We update our portfolio regularly to highlight our latest published works. As new books are released and added to our catalogue, you can expect to see them featured in our portfolio section." },
        { question: "Can I request to see specific examples of works in a certain genre or style?", answer: "Absolutely! We understand the importance of finding examples that resonate with your interests. Whether you're interested in fiction, non-fiction, or a specific genre, we're happy to provide relevant examples from our portfolio." },
        { question: "Do you provide author testimonials or reader feedback for the books featured in your portfolio?", answer: "Yes, we often include author testimonials and reader feedback alongside the books featured in our portfolio. These testimonials offer valuable insights into the collaborative process and the impact of each published work." },
        { question: "Can I learn more about the publishing process behind the books showcased in your portfolio?", answer: "Certainly! For each book featured in our portfolio, we provide a brief overview of the publishing journey, from manuscript submission to final publication. We're committed to transparency and happy to share insights into our process." },
        { question: "Can I contact you to discuss publishing my book or to inquire about specific titles in your portfolio?", answer: "Absolutely! Whether you're an aspiring author interested in self-publishing your book or a reader curious about the titles in our portfolio, we welcome inquiries and are here to assist you. Feel free to reach out to us via email or phone, and we'll be happy to help." },
    ];

    const badges = [
        { src: "/images/bage2.png", width: 100, height: 100 },
        { src: "/images/bage13.png", width: 100, height: 100 },
        { src: "/images/bage3.png", width: 100, height: 100 },
        { src: "/images/bage14.png", width: 100, height: 100 },
        { src: "/images/bage4.png", width: 100, height: 100 },
        { src: "/images/bage12.png", width: 100, height: 100 }
    ];
    return (
        <>
            <Head>
                <title>Our Portfolio | Pine Book Writing</title>
                <meta
                    name="description"
                    content="Thinking about the quality of the work you will get from Pine Book Writing? Have a look at our portfolio to ensure successful results."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"brand-img/port-banner.jpg"}
                title="A Showcase of Our Writing Excellence & Expertise"
                desc="Let’s explore our creative portfolio of ghostwriting services. We’re confident that you’ll love to get your book written by leveraging our expertise."
            />
            <BrandBannerLogo />
            <BrandPortfolio />
            <BrandCTA
                title="Ready to Tell Your Story to the World?"
                desc="Don’t wait anymore. Just give us a call and let our expert writers blow breathe life into your idea."
                btntext="Speak to our Consultant"
            />
            <BrandFaqs/>
            <BrandContact />
            {/* <BrandFooter /> */}
            <NewBrandFooter />
        </>
    );
}
