import React from "react";
import { useRouter } from "next/router";
import { usePopupcta } from "../../context/PopupContext";

export default function BrandPrimaryHeader(props) {
    const router = useRouter();
    const { openModal } = usePopupcta();

    const serviceRoutes = new Set([
        "/ghostwriting-service",
        "/resume-writing",
        "/social-media-copywriting",
        "/web-copywriting",
        "/seo-content",
        "/blog-article-writing",
        "/press-release-writing",
        "/script-writing",
        "/wikipedia-writing",
        "/product-description",
        "/screen-writing",
        "/action-adventure-writing",
        "/children-book-writing",
        "/fantasy-writing-services",
        "/horror-book-writing",
        "/sci-fi-writing",
        "/biography-writing",
        "/memoir-writing",
        "/non-fiction-writing",
        "/rhymes-writing",
        "/song-writing",
        "/story-writing",
        "/autobiography-writing",
        "/hip-hop-writing",
        "/narrative-writing",
        "/novel-writing",
        "/speech-writing",
        "/comedy-writing",
        "/comic-book-writing",
        "/military-fiction-writing",
        "/movie-writing",
        "/book-editing",
        "/book-formatting-writing",
        "/book-self-publishing",
        "/proofreading-writing",
    ]);

    const shouldShowQuoteButton = props.showQuoteButton ?? serviceRoutes.has((router.pathname || "").toLowerCase());

    return (
        <>
            <section className="py-5 brand-primary-header-bg" style={{ backgroundImage: `url(${props.photo_banner})` }}>
                <span className="overlay-banner"></span>
                <div className="container max-w-screen-xl mx-auto ban-cls">
                    <div className="py-5 row">
                        <div className="px-5 col-12 w-100 md:w-3/5">
                            <h1 className="text-xl text-white md:text-2xl font-poppins font-bold">
                                {props.title}
                            </h1>
                            {/* CHANGED <p> TO <div> BELOW TO PREVENT HYDRATION ERROR */}
                            <div className="pt-2 text-sm text-white">
                                {props.desc}
                            </div>
                            {shouldShowQuoteButton && (
                                <button
                                    onClick={openModal}
                                    style={{
                                        backgroundColor: "#000",
                                        color: "#fff",
                                        padding: "12px 32px",
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        borderRadius: "50px",
                                        border: "none",
                                        cursor: "pointer",
                                        boxShadow: "0 4px 14px 0 rgba(0,0,0,0.39)",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        marginTop: "10px"
                                    }}
                                >
                                    Get a FREE quote today!
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
