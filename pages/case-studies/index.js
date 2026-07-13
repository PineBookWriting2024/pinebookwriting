import React from "react";
import Head from "next/head";
import BrandTopBar from "../components/BrandTopBar";
import BrandNavbar from "../components/BrandNavbar";
import BrandCaseStudies from "../components/BrandCaseStudies";
import NewBrandFooter from "../components/NewBrandFooter";

export default function CaseStudiesPage() {
    return (
        <>
            <Head>
                <title>Case Studies | Pine Book Writing</title>
                <meta
                    name="description"
                    content="Explore Pine Book Writing case studies and author success stories across publishing, branding, and book marketing."
                />
                <link rel="canonical" href="https://pinebookwriting.com/case-studies" />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>

            <div className="case-studies-listing-page">
                <BrandTopBar />
                <BrandNavbar />
                <BrandCaseStudies />
                <NewBrandFooter />
            </div>
        </>
    );
}
