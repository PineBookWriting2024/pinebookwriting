import React, { useEffect } from "react";
import Head from "next/head";
import BrandTopBar from "./components/BrandTopBar";
import BrandFooter from "./components/BrandFooter";
import BrandAbout from "./components/BrandAbout";
import BrandNavbar from "./components/BrandNavbar";
import BrandHero from "./components/BrandHero";
import BrandBannerLogo from "./components/BrandBannerLogo";
import BrandCTA from "./components/BrandCTA";
import BrandServices from "./components/BrandServices";
import BrandChooseUs from "./components/BrandChooseUs";
import BrandTestimonial from "./components/BrandTestimonial";
import BrandFaqs from "./components/BrandFaqs";
import BrandContact from "./components/BrandContactForm";
import BrandLogo from "./components/BrandLogo";
import BrandProcess from "./components/BrandProcess";
import BrandBannerVideo from "./components/BrandBannerVideo";

export default function Home() {
    return (
        <>
            <Head>
                <title>Hire Professional Book Writers | Pine Book Writing</title>
                <meta name="description" content="Get top-notch book writing services from experienced writers. We offer affordable and high-quality writing solutions for all genres. Contact us today!"
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                <meta name="google-site-verification" content="v2pKJGIZnMWCWw2QC5nuRPYT5gvDQlUtT0lZYFIhHYo" />
                {/* Google tag Manager Script */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-9X52J8V8NK"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-9X52J8V8NK');
              `,
                    }}
                />
            </Head>

            <BrandTopBar />

            <BrandNavbar />

            {/* <BrandHero /> */}
            <BrandBannerVideo Component={BrandHero} />

            <BrandBannerLogo />

            <BrandAbout
                headingmain="Overcome Writer's Block with Pine Book Writing"

                subdescone="Are you having a hard time writing your book? The frustrating sight of a blank page can stop you in your tracks. Know that you're not the only one going through this. Many people who want to be writers run into this problem. Don't worry, though; Pine Book Writing is here to help.
"
                subdesctwo="We help writers find their way through the maze of creativity by providing them with the support and tools they need to turn their ideas into beautiful words. No more writer's block! With Pine Book Writing by your side, you can start your road to becoming a successful author.
"
                subdescthree=""
            />

            <BrandServices />
            <BrandCTA
                title="Achieve Your Writing Dreams With Professional Ghostwriting Company!"
                desc="Don’t have time to write your fascinating story? Let our team of experts guide you. Contact us today and take the first step towards becoming the best author. help getting your book published? Let our team of experts guide you. Contact us today and take the first step towards becoming a published author."
                btntext="Speak to our Consultant"
            />
            {/* <BrandProcess /> */}
            <BrandChooseUs />
            <BrandTestimonial />
            <BrandFaqs />
            <BrandContact />
            <BrandLogo />
            <BrandFooter />
        </>
    );
}
