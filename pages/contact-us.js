import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import BrandMainContact from "./components/BrandMainContact";
import BrandFooter from "./components/BrandFooter";
import BrandPrimaryHeader from "./components/BrandPrimaryHeader";
import BrandNavbar from "./components/BrandNavbar";

export default function Contact() {



    return (
        <>
            <Head>
                <title>Get in Touch | Pine Book Writing</title>
                <meta
                    name="description"
                    content="Our team of experts are ready to assist you with all your queries. Contact us now and get all your questions answered in no time. "
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandNavbar />
            <BrandPrimaryHeader 
              photo_banner={"brand-img/contact-banner.jpg"}
              title="Have Any Questions to Ask? Let’s Talk!"
              desc="Feel free to ask any questions about our professional writing services or get a free quote for your project."
              />

            <BrandMainContact />
            <BrandFooter />
        </>
    );
}
