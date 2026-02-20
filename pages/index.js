import React, { useEffect } from "react";
import Head from "next/head";
import BrandTopBar from "./components/BrandTopBar";
import BrandFooter from "./components/BrandFooter";
import BrandAbout from "./components/BrandAbout";
import BrandNavbar from "./components/BrandNavbar";
import BrandHero from "./components/BrandHero";
import BrandHeroFriday from "./components/BrandHeroFriday";
import BrandBannerLogo from "./components/BrandBannerLogo";
import BrandCTA from "./components/BrandCTA";
import BrandServices from "./components/BrandServices";
import BrandChooseUs from "./components/BrandChooseUs";
import BrandTestimonial from "./components/BrandTestimonial";
import BrandFaqs from "./components/BrandFaqs";
import BrandContact from "./components/BrandContactForm";
import BrandLogo from "./components/BrandLogo";
import BrandSister from "./components/BrandSister";
import BrandBannerVideo from "./components/BrandBannerVideo";
import NewBrandFooter from "./components/NewBrandFooter";
import HomeBookSlider from "./components/HomeBookSlider";

export default function Home() {
    return (
        <>
            <Head>
                <title>Affordable book writing services for authors of all genres</title>
                <meta name="description" content="Looking for a trusted book writing company? Pine Book Writing offers expert writers for different genres that include fiction, non-fiction, memoir, and others."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                <link rel="canonical" href="https://www.pinebookwriting.com/" />
                <meta name="google-site-verification" content="ze4i-BWHkh7f9iANJUJfoWbXrFcmFC9r2fCsoz1KZA8" />
                {/* <meta name="google-site-verification" content="ze4i-BWHkh7f9iANJUJfoWbXrFcmFC9r2fCsoz1KZA8" /> */}
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

            <BrandBannerVideo Component={BrandHero} />

            <BrandBannerLogo />

            <BrandAbout
                headingmain="Helping Writers Break Past The Blank Page"
                

                subdescone="Are you struggling to write your book? A blank page can stop everything. Projects get delayed. Confidence drops. This happens to first-time writers and experienced authors alike. It’s just writer’s block. At Pine Book Writing, we, as a full-service book writing agency, understand this problem and are ready to help new and seasoned writers/authors move forward. Not only by writing but also in polishing their write-up to make it all proudly presentable to their audience.
"
                subdesctwo="With a large team of skilled writers on board, we offer dedicated solutions for each genre, be it fiction, non-fiction, education, fantasy, children's books or any other genre. Each writer has years of book writing experience and knows their responsibility to turn your ideas into beautiful words.
No more writer's block! With Pine Book Writing by your side, you can start your road to becoming a successful author.

"
                subdescthree=""
            />

            <HomeBookSlider />

            <BrandCTA
                title="Stuck With Your Book Or Lack Time to Write?
Let’s Handle It!
"
                desc="If your book is half-written or still in your head, our writers help you move past confusion and turn rough ideas into something structured yet readable."
                btntext="Speak to our Consultant"
            />

            <BrandServices />

            {/* <BrandProcess /> */}
            <BrandChooseUs />
            <BrandTestimonial />
            <BrandLogo />


            <BrandFaqs />
            <BrandContact />
            {/* <BrandSister/> */}


            <NewBrandFooter />
        </>
    );
}
