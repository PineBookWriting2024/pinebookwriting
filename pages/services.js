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
import BrandFaqs from "./components/BrandFaqs";
import BrandServices from "./components/BrandServices";

export default function Services() {


    return (
        <>
            <Head>
                <title>Services the Company | Pine Book Writing</title>
                <meta
                    name="description"
                    content="Everything about Pine Book Writing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
            <BrandNavbar />
            <BrandPrimaryHeader
             photo_banner={"brand-img/services-banner.jpg"}
                title="Your Writing Journey Starts Here"
                desc="Are you in search of a professional writing agency? If yes, then you are at the right place. At Pine Book Writing, we proudly offer unique and all-inclusive writing services to cater to all your writing needs, from an informative blog to an engaging fiction book."
            />
            <BrandBannerLogo />
            <BrandServices/>
            <BrandChooseUs />
            <BrandFaqs/>
            <BrandContact />
            <BrandFooter />
        </>
    );
}
