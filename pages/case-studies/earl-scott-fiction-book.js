import React from "react";
import Head from "next/head";
import BrandTopBar from "../components/BrandTopBar";
import BrandNavbar from "../components/BrandNavbar";
import BrandContact from "../components/BrandContactForm";
import NewBrandFooter from "../components/NewBrandFooter";
import CaseStudyDetail from "../components/CaseStudyDetail";

const caseData = {
    accentColor: "#C0392B",
    altAccentColor: "#FC0100",
    hero: {
        beforeAccent: "From Raw Draft to a Published Novel in 40 ",
        accent: "Business Days",
        afterAccent: "",
        subtext:
            "Forty business days. One manuscript. A fully published, professionally edited novel on Amazon. See how Pine Book Writing took Earl Scott’s faith-driven story from a raw draft to a live multi-format book launch without cutting a single corner.",
        image:
            "https://digitalscribblers.com/wp-content/uploads/2026/03/Divid-L-Mock-01-1-1.webp",
        imageAlt: "From Transylvania to Pennsylvania book cover",
    },
    chips: [
        { label: "Client", value: "Earl Scott" },
        { label: "Genre", value: "Fiction" },
        { label: "Timeline", value: "40 Days" },
        { label: "Book Format", value: "Kindle eBook / Hardcover / Paperback" },
    ],
    author: {
        image:
            "https://digitalscribblers.com/wp-content/uploads/2026/03/Rectangle-1056-1.webp",
        name: "Earl Scott",
        firstName: "Earl",
        lastName: "Scott",
        bio:
            "Earl Scott is a writer from Philadelphia, Pennsylvania, with a story rooted in faith, second chances, and the transformative power of community. He came to Pine Book Writing with a completed manuscript and a clear vision for what he wanted his book to become. His novel, <em>From Transylvania to Pennsylvania</em>, was published on September 9, 2025, and is already connecting with readers who appreciate heartfelt, faith-driven storytelling. Earl’s long-term vision is to adapt the story into a feature film, bringing its message to an even wider audience.",
        features: [
            { icon: "★", title: "First Time Author" },
            { icon: "✟", title: "Faith-Driven Fiction" },
            { icon: "❑", title: "Multi-Format Publishing" },
        ],
    },
    challenge: {
        beforeAccent: "A Manuscript Ready for ",
        accent: "Publishing,",
        afterAccent: " But Not Yet Polished",
        paragraphs: [
            "Earl came to our book editors at Pine Book Writing with something most first-time authors don’t have — a completed manuscript. But having a finished draft and having a publish-ready book are two different things entirely.",
            "The manuscript needed copy editing, proofreading, and developmental work to strengthen the narrative, tighten the flow, and make sure the themes of faith, second chances, and transformation landed with the emotional depth Earl intended. Every layer of the story needed attention, and none of it could be rushed.",
            "What made this project particularly demanding was the timeline. Earl had a clear publication date in mind, and the entire editorial and publishing process needed to be completed within 40 business days.",
        ],
        image:
            "https://digitalscribblers.com/wp-content/uploads/2026/03/Divid-L-Mock-02-2-1-1.webp",
    },
    solutions: {
        heading: {
            beforeAccent: "How ",
            accent: "Pine Book Writing ",
            afterAccent: "Edited and Published the Book in 40 Days",
        },
        intro:
            "Pine Book Writing handled the complete editorial and publishing process for Earl’s manuscript from start to finish.",
        items: [
            {
                icon: "✎",
                title: "Book Editing",
                description:
                    "Our book editors went through the full manuscript from start to finish. We carried out copy editing and developmental work to strengthen the story structure, improve the narrative flow, and make sure every chapter hit the way Earl intended.",
            },
            {
                icon: "✓",
                title: "Proofreading",
                description:
                    "Once the editing was complete, our proofreaders reviewed the entire manuscript with fresh eyes. Every line was checked for grammar, consistency, and clarity to make sure the final draft was clean and publish-ready.",
            },
            {
                icon: "✦",
                title: "Book Publishing",
                description:
                    "Our publishers handled the complete setup from formatting to launch. From Transylvania to Pennsylvania went live on September 9, 2025, available in Kindle, Hardcover, and Paperback from day one.",
            },
        ],
    },
    result: {
        heading: {
            beforeAccent: "A Novel Published, Praised, and Already ",
            accent: "Reaching ",
            afterAccent: "Readers",
        },
        paragraphs: [
            '<em>From Transylvania to Pennsylvania</em> was published on September 9, 2025, and is now available in all three formats. The book has already received positive feedback from readers who connected with its evocative storytelling and the way it captures a genuine journey of faith, second chances, and transformation.',
        ],
        bullets: [
            "A fully edited and proofread manuscript delivered to a professional standard within 40 business days",
            "Developmental enhancements that strengthened the story without changing its voice",
            "A successful multi-format launch across Kindle, Hardcover, and Paperback",
            "A strong reader response from day one with a growing foundation for the film adaptation ahead",
        ],
        image:
            "https://digitalscribblers.com/wp-content/uploads/2026/03/Group-775.webp",
    },
    review: {
        image:
            "https://digitalscribblers.com/wp-content/uploads/2026/03/Rectangle-1056-1.webp",
        name: "Earl Scott",
        firstName: "Earl",
        lastName: "Scott",
        quote:
            "The team was very prompt, precise, and professional in helping me with my book project. I highly recommend their services.",
    },
};

export default function EarlScottFictionBook() {
    return (
        <>
            <Head>
                <title>
                    From Transylvania To Pennsylvania – Earl Scott Case Study | Pine Book Writing
                </title>
                <meta
                    name="description"
                    content="See how Pine Book Writing took Earl Scott's faith-driven novel from raw manuscript to a fully published multi-format release in just 40 business days."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                <link
                    rel="canonical"
                    href="https://www.pinebookwriting.com/case-studies/earl-scott-fiction-book"
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
