import React from "react";
import Head from "next/head";
import BrandTopBar from "../components/BrandTopBar";
import BrandNavbar from "../components/BrandNavbar";
import BrandContact from "../components/BrandContactForm";
import NewBrandFooter from "../components/NewBrandFooter";
import CaseStudyDetail from "../components/CaseStudyDetail";

const caseData = {
    accentColor: "#1AA49F",
    altAccentColor: "#AC9974",
    hero: {
        beforeAccent: "From Combat Memories to a Professionally ",
        accent: "Published Memoir",
        afterAccent: "",
        subtext:
            "Some stories are too important to stay unfinished. Pine Book Writing worked closely with David L. Ramey to edit, design, and publish his Vietnam War memoir.",
        image:
            "https://digitalscribblers.com/wp-content/uploads/2026/03/Divid-L-Mock-01-1.webp",
        imageAlt: "A Soldier's Memoir book cover",
    },
    chips: [
        { label: "Client", value: "David L. Ramey" },
        { label: "Genre", value: "Memoir" },
        { label: "Timeline", value: "3 Months" },
        { label: "Book Format", value: "Kindle eBook / Hardcover / Paperback" },
    ],
    author: {
        image:
            "https://digitalscribblers.com/wp-content/uploads/2026/03/Rectangle-1056.webp",
        name: "David L. Ramey",
        firstName: "David L.",
        lastName: "Ramey",
        bio:
            "David L. Ramey is a Vietnam War veteran who served as part of a six-man LRRP team during some of the most intense years of the conflict. His memoir is a firsthand account of a real mission in the Central Highlands of South Vietnam, told with the kind of honesty and detail that only someone who was there could deliver. He brought that manuscript to our expert book editors at Pine Book Writing, looking for a team he could trust to help him finish it right.",
        features: [
            { icon: "★", title: "First-Time Author" },
            { icon: "✦", title: "War Memoir" },
            { icon: "✎", title: "No Publishing Experience" },
        ],
    },
    challenge: {
        beforeAccent: "The Manuscript Was Ready. The ",
        accent: "Editorial Work",
        afterAccent: " Was Not.",
        paragraphs: [
            "David had lived the story. Writing it down was one challenge. Getting it published was another.",
            "He came to our book editors at Pine Book Writing without a background in editing or publishing, and needed a team he could trust to handle both with care. The manuscript was a non-fiction account packed with real events, historical context, and deeply personal reflection. It needed substantive editorial work to make the narrative more cohesive, informative, and engaging for readers.",
            "Beyond editing, the memoir needed professional proofreading, interior formatting, and a cover design that matched the gravity of the subject. A full publishing setup was required to bring it to readers across multiple formats.",
        ],
        image:
            "https://digitalscribblers.com/wp-content/uploads/2026/03/Divid-L-Mock-02-2-1.webp",
    },
    solutions: {
        heading: {
            beforeAccent: "How ",
            accent: "Pine Book Writing ",
            afterAccent: "Took the Memoir From Draft to Published",
        },
        intro:
            "We assigned David a dedicated project coordinator and lead editor from day one, ensuring he had a single trusted point of contact through every stage of the publishing journey.",
        items: [
            {
                icon: "✎",
                title: "Editing & Proofreading",
                description:
                    "Our book editor worked through the full manuscript with care. We carried out substantive and developmental editing to strengthen the story structure, deepen the narrative flow, and make the account more informative and compelling.",
            },
            {
                icon: "▤",
                title: "Book Formatting",
                description:
                    "Our team formatted the interior of the memoir to meet professional publishing standards across both print and digital editions, ensuring every page was clean, readable, and structured the way a published book should be.",
            },
            {
                icon: "❑",
                title: "Book Cover Design",
                description:
                    "We designed a custom cover built specifically for a Vietnam War memoir. The result was a serious, market-ready visual identity that speaks directly to readers of military history and veteran stories.",
            },
            {
                icon: "✦",
                title: "Book Publishing",
                description:
                    "Our publishers managed the complete end-to-end publishing setup. David’s memoir was successfully launched on November 20, 2025, and made available to readers across formats.",
            },
            {
                icon: "✈",
                title: "Book Marketing",
                description:
                    "We began initial work on a marketing plan to help build visibility for the book and position it in front of readers interested in military history and veteran memoirs.",
            },
        ],
    },
    result: {
        heading: {
            beforeAccent: "Decades of Memory, Now a Professionally ",
            accent: "Published ",
            afterAccent: "Memoir",
        },
        paragraphs: [
            "David L. Ramey’s memoir was published on November 20, 2025. A story that lived in his memory for decades is now a complete, professionally edited, and published book available to readers who want to understand what it truly felt like to serve in Vietnam.",
        ],
        bullets: [
            "A thoroughly edited and proofread manuscript that is informative, cohesive, and compelling",
            "Professional formatting and cover design ready for publication",
            "A successfully published memoir with a marketing foundation in place",
            "A smooth, cross-country collaboration built on clear communication throughout",
        ],
        image:
            "https://digitalscribblers.com/wp-content/uploads/2026/03/Group-773.webp",
    },
    review: {
        image:
            "https://digitalscribblers.com/wp-content/uploads/2026/03/Rectangle-1056.webp",
        name: "David L. Ramey",
        firstName: "David L.",
        lastName: "Ramey",
        quote:
            "While writing a book without much knowledge of editing and publishing, I contacted Pine Book Writing looking for an editor to get me across the finish line. I was soon contacted by my project coordinator. They assured me communicating cross country would not hamper workability and guaranteed a finished, well-written product. It proved to be true. Working together, we produced a formidable read that I am completely satisfied with. Between the team’s organizational skills and the research and editing done by the lead editor, the story became more informative, cohesive, and intriguing. A masterful piece of work that shows expertise and professionalism. Icing on the cake, cost-effective. I highly recommend Pine Book Writing and its staff.",
    },
};

export default function DavidLRameyMemoir() {
    return (
        <>
            <Head>
                <title>
                    A Soldier’s Memoir – David L. Ramey Case Study | Pine Book Writing
                </title>
                <meta
                    name="description"
                    content="See how Pine Book Writing edited, designed, and published David L. Ramey's Vietnam War memoir — from manuscript to a fully published book across formats."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                <link
                    rel="canonical"
                    href="https://www.pinebookwriting.com/case-studies/david-l-ramey-memoir"
                />
            </Head>

            <BrandTopBar />
            <BrandNavbar />

            <CaseStudyDetail data={caseData} />

            <BrandContact />
            <NewBrandFooter />
        </>
    );
}
