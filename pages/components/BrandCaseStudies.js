import React, { useState } from "react";
import Link from "next/link";

export default function BrandCaseStudies() {
    const [lockedTiles, setLockedTiles] = useState({});

    const caseStudies = [
        {
            bgImage: "/brand-img/Avis Deskey  Header Image 01.jpg",
            bookImage: "/brand-img/Avis Deskey Book Mockup 01.png",
            title: "Stellar Leadership: Igniting Excellence Beyond the C-Suite",
            description:
                "A professionally published business leadership book supported by strategic branding and audience engagement campaigns.",
            link: "/case-studies/avis-dickey-leadership",
            bookLink: "https://www.amazon.ca/dp/1971045276",
            tags: ["Book Writing", "Book Marketing", "Book Publishing"],
            themeBg: "#087f78",
        },
        {
            bgImage: "/images/Viktor Ujkic Case Study Assetts/Viktor Ujkic the challange image.png",
            bookImage: "/images/Viktor Ujkic Case Study Assetts/Viktor Ujkic Book Mockup 01.png",
            title: "Justice Died at Dawn",
            description:
                "A debut crime thriller transformed into a professionally published book through strategic publishing, a dedicated author website, and multi-platform audience growth.",
            link: "/case-studies/viktor-ujkic-justice",
            bookLink: "https://www.amazon.ca/dp/1967828695",
            tags: ["Book Editing", "Author Website", "Book Marketing"],
            themeBg: "#eee7d1",
        },
        {
            bgImage: "/brand-img/MarkEHammondCaseStudy/Mark E Hammond the challange image.webp",
            bookImage: "/brand-img/MarkEHammondCaseStudy/Mark E Hammond Book Mockup 01.webp",
            title: "Angel of Death",
            description:
                "A debut supernatural thriller transformed into a professionally published book through editing, publishing, author branding, and long-term marketing.",
            link: "/case-studies/mark-e-hammond-angel-of-death",
            bookLink: "https://www.amazon.ca/dp/1967828334",
            tags: ["Book Editing", "Book Publishing", "Book Marketing"],
            themeBg: "#242326",
        },
        {
            bgImage: "/brand-img/jo_alexender/Jo Alexander the challange image.webp",
            bookImage: "/brand-img/jo_alexender/Jo Alexander Book Mockup 01.webp",
            title: "Jesus & Rodeo",
            description:
                "A heartfelt Christian children's book transformed into a professionally published title through editorial support, book production, publishing, branding, and marketing.",
            link: "/case-studies/jo-alexander-jesus-rodeo",
            bookLink: "https://a.co/d/0c9PzeD2",
            tags: ["Book Publishing", "Book Trailer", "Book Marketing"],
            themeBg: "#dbecc5",
        },
        {
            bgImage: "/brand-img/CaseStudy Jerimybell/Jerimybell the challange image.webp",
            bookImage: "/brand-img/CaseStudy Jerimybell/Jerimybell Book Mockup 01.webp",
            title: "Universe Within You",
            description:
                "A personal development manuscript transformed into a professionally published book through expert publishing, branding, website development, media outreach, and social media marketing.",
            link: "/case-studies/jerimy-des-universe-within-you",
            bookLink: "https://www.amazon.com/dp/1967828970",
            tags: ["Book Publishing", "Author Website", "Book Marketing"],
            themeBg: "radial-gradient(circle at 72% 42%, rgba(245, 166, 35, 0.72) 0%, rgba(245, 166, 35, 0.18) 18%, rgba(7, 14, 31, 0) 34%), linear-gradient(135deg, #05070f 0%, #071c33 46%, #0b4a5a 100%)",
        },
    ];

    return (
        <section className="overflow-hidden brand-case-studies-section">
            <div className="case-studies-template-wrap">
                <div className="case-studies-template-head">
                    <h2>Case Studies</h2>
                </div>

                <div className="case-studies-template-grid">
                    {caseStudies.map((cs, idx) => (
                        <div
                            key={idx}
                            className={`case-study-tile ${idx === 0 ? "case-study-tile-featured" : ""} ${idx === 1 ? "case-study-tile-tall" : ""} ${lockedTiles[idx] ? "case-study-tile-locked" : ""}`}
                            style={{ "--case-card-bg": cs.themeBg }}
                        >
                            <span
                                className="case-study-tile-title"
                                onMouseEnter={() => setLockedTiles((prev) => ({ ...prev, [idx]: true }))}
                                onTouchStart={(event) => {
                                    event.stopPropagation();
                                    setLockedTiles((prev) => ({ ...prev, [idx]: !prev[idx] }));
                                }}
                            >
                                <span className="case-study-tile-heading">{cs.title}</span>
                                <span className="case-study-tile-actions">
                                    <a href={cs.bookLink} target="_blank" rel="noreferrer">
                                        View Book <span aria-hidden="true">↗</span>
                                    </a>
                                    <Link href={cs.link}>
                                        View Case Study <span aria-hidden="true">↗</span>
                                    </Link>
                                </span>
                            </span>
                            <span className="case-study-tile-art" aria-hidden="true">
                                <img
                                    src={cs.bgImage}
                                    alt={cs.title}
                                    className="case-study-tile-bg"
                                />
                                <img
                                    src={cs.bookImage}
                                    alt={`${cs.title} cover`}
                                    className="case-study-tile-book"
                                />
                            </span>
                            <span className="case-study-tile-tags">
                                {cs.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
