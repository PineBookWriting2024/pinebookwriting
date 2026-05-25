import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function CaseStudyDetail({ data }) {
    const handleOpenChat = () => {
        if (typeof window !== "undefined" && window.zE) {
            window.zE("webWidget", "open");
        }
    };

    const accent = data.accentColor || "#1AA49F";
    const altAccent = data.altAccentColor || "#AC9974";

    return (
        <section className="cs-detail-wrapper" style={{ "--cs-accent": accent, "--cs-alt-accent": altAccent }}>
            {/* HERO */}
            <div className="cs-hero">
                <div className="max-w-screen-xl px-4 mx-auto cs-hero-inner">
                    <div className="cs-hero-text">
                        <h1 className="cs-hero-title">
                            {data.hero.beforeAccent}
                            <span className="cs-hero-accent">{data.hero.accent}</span>
                            {data.hero.afterAccent}
                        </h1>
                        <p className="cs-hero-sub">{data.hero.subtext}</p>
                        <button
                            onClick={handleOpenChat}
                            className="cs-btn-primary"
                        >
                            <span>Start Your Project</span>
                            <FontAwesomeIcon icon={faArrowRight} width={14} />
                        </button>
                    </div>
                    <div className="cs-hero-image">
                        <img src={data.hero.image} alt={data.hero.imageAlt || ""} />
                    </div>
                </div>
            </div>

            {/* INFO CHIPS */}
            <div className="cs-chips">
                <div className="max-w-screen-xl px-4 mx-auto cs-chips-inner">
                    {data.chips.map((chip, idx) => (
                        <div className="cs-chip" key={idx}>
                            <h3 className="cs-chip-label">{chip.label}</h3>
                            <p className="cs-chip-value">{chip.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ABOUT THE AUTHOR */}
            <div className="cs-section cs-about">
                <div className="max-w-screen-xl px-4 mx-auto cs-about-inner">
                    <div className="cs-about-image">
                        <img src={data.author.image} alt={data.author.name} />
                    </div>
                    <div className="cs-about-text">
                        <span className="cs-eyebrow">About the author</span>
                        <h2 className="cs-h2">
                            {data.author.firstName}{" "}
                            <span className="cs-h2-accent">{data.author.lastName}</span>
                        </h2>
                        <p
                            className="cs-paragraph"
                            dangerouslySetInnerHTML={{ __html: data.author.bio }}
                        />
                        <div className="cs-feature-row">
                            {data.author.features.map((feat, idx) => (
                                <div className="cs-feature" key={idx}>
                                    <div className="cs-feature-icon">{feat.icon}</div>
                                    <h4 className="cs-feature-title">{feat.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* THE CHALLENGE */}
            <div className="cs-section cs-challenge">
                <div className="max-w-screen-xl px-4 mx-auto cs-challenge-inner">
                    <div className="cs-challenge-text">
                        <span className="cs-eyebrow">The Challenge</span>
                        <h2 className="cs-h2">
                            {data.challenge.beforeAccent}
                            <span className="cs-h2-accent">{data.challenge.accent}</span>
                            {data.challenge.afterAccent}
                        </h2>
                        {data.challenge.paragraphs.map((p, idx) => (
                            <p key={idx} className="cs-paragraph">
                                {p}
                            </p>
                        ))}
                        <button onClick={handleOpenChat} className="cs-btn-primary">
                            <span>Get A Free Consultation</span>
                            <FontAwesomeIcon icon={faArrowRight} width={14} />
                        </button>
                    </div>
                    <div className="cs-challenge-image">
                        <img src={data.challenge.image} alt="" />
                    </div>
                </div>
            </div>

            {/* OUR SOLUTIONS */}
            <div className="cs-section cs-solutions">
                <div className="max-w-screen-xl px-4 mx-auto cs-solutions-inner">
                    <div className="cs-solutions-head">
                        <span className="cs-eyebrow">Our solutions</span>
                        <h2 className="cs-h2">
                            {data.solutions.heading.beforeAccent}
                            <span className="cs-h2-accent">
                                {data.solutions.heading.accent}
                            </span>
                            {data.solutions.heading.afterAccent}
                        </h2>
                        <p className="cs-paragraph">{data.solutions.intro}</p>
                    </div>
                    <div className="cs-solutions-grid">
                        {data.solutions.items.map((item, idx) => (
                            <div className="cs-solution-card" key={idx}>
                                <div className="cs-solution-icon">{item.icon}</div>
                                <h3 className="cs-solution-title">{item.title}</h3>
                                <p className="cs-solution-desc">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="cs-center-btn">
                        <button onClick={handleOpenChat} className="cs-btn-primary">
                            <span>Get A Free Consultation</span>
                            <FontAwesomeIcon icon={faArrowRight} width={14} />
                        </button>
                    </div>
                </div>
            </div>

            {/* THE RESULT */}
            <div className="cs-section cs-result">
                <div className="max-w-screen-xl px-4 mx-auto cs-result-inner">
                    <div className="cs-result-image">
                        <img src={data.result.image} alt="" />
                    </div>
                    <div className="cs-result-text">
                        <span className="cs-eyebrow">The Result</span>
                        <h2 className="cs-h2">
                            {data.result.heading.beforeAccent}
                            <span className="cs-h2-accent">
                                {data.result.heading.accent}
                            </span>
                            {data.result.heading.afterAccent}
                        </h2>
                        {data.result.paragraphs.map((p, idx) => (
                            <p
                                key={idx}
                                className="cs-paragraph"
                                dangerouslySetInnerHTML={{ __html: p }}
                            />
                        ))}
                        <p className="cs-paragraph">
                            <strong>The project delivered:</strong>
                        </p>
                        <ul className="cs-check-list">
                            {data.result.bullets.map((b, idx) => (
                                <li key={idx}>
                                    <FontAwesomeIcon icon={faCheck} width={14} />
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                        <button onClick={handleOpenChat} className="cs-btn-primary">
                            <span>Publish Your Book With Us</span>
                            <FontAwesomeIcon icon={faArrowRight} width={14} />
                        </button>
                    </div>
                </div>
            </div>

            {/* AUTHOR'S REVIEW */}
            <div className="cs-section cs-review">
                <div className="max-w-screen-xl px-4 mx-auto cs-review-inner">
                    <h2 className="cs-h2 cs-h2-center">Author’s Review</h2>
                    <div className="cs-review-card">
                        <div className="cs-review-image">
                            <img src={data.review.image} alt={data.review.name} />
                        </div>
                        <div className="cs-review-content">
                            <p className="cs-review-quote">“{data.review.quote}”</p>
                            <p className="cs-review-name">
                                {data.review.firstName}{" "}
                                <span className="cs-h2-accent">{data.review.lastName}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
