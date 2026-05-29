import React from "react";
import Link from "next/link";

export default function BrandCaseStudies() {
    const caseStudies = [
        {
            bgImage: "/brand-img/Avis Deskey  Header Image 01.jpg",
            bookImage: "/brand-img/Avis Deskey Book Mockup 01.png",
            title: "Stellar Leadership: Igniting Excellence Beyond the C-Suite",
            description:
                "A professionally published business leadership book supported by strategic branding and audience engagement campaigns.",
            link: "/case-studies/avis-dickey-leadership",
        },
    ];

    return (
        <section className="overflow-hidden brand-case-studies-section">
            <div className="relative max-w-screen-xl px-4 py-10 mx-auto my-10 md:my-20">
                <div className="mb-4 text-center">
                    <h2 className="text-4xl font-bold text-black font-poppins">
                        Case <span className="case-studies-accent">Studies</span>
                    </h2>
                    <p className="mt-3 text-base text-gray-700">
                        A closer look at how we write, publish, and market books that perform.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2">
                    {caseStudies.map((cs, idx) => (
                        <div key={idx} className="case-study-card">
                            <div className="case-study-visual">
                                <img
                                    src={cs.bgImage}
                                    alt={cs.title}
                                    className="case-study-bg"
                                />
                                <img
                                    src={cs.bookImage}
                                    alt={`${cs.title} cover`}
                                    className="case-study-book"
                                />
                            </div>

                            <div className="case-study-content">
                                <h3 className="text-2xl font-bold text-black font-poppins">
                                    {cs.title}
                                </h3>
                                <p className="mt-3 text-gray-700">{cs.description}</p>
                                <div className="mt-5">
                                    <Link href={cs.link}>
                                        <button className="case-study-btn">
                                            View Case Study
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
