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
                <link rel="shortcut icon" href="/images/fav.png" />
            </Head>
            <BrandNavbar />
            <BrandPrimaryHeader
             photo_banner={"brand-img/testi-banner.jpg"}
                title="Start Your Writing Journey Now"
                desc="Are you searching for a company with a wide range of Book Writing Services? You are at the right place. At Pine Book Writing, we offer comprehensive services to cater to your needs. From Writing to publishing, we have mastered everything. Explore everything you need to kick-start your writing journey."
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
