import React from "react";

export default function BrandVideoShowcase() {
    return (
        <section className="py-12 bg-white md:py-16">
            <div className="max-w-screen-xl px-4 mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-black md:text-4xl font-poppins">
                        See What&apos;s Possible - Watch Our NY Times Square Billboard Reveals
                    </h2>
                    <p className="mt-3 text-base leading-7 text-gray-700 md:text-lg">
                        Every book deserves a big celebration. Check out these real moments we helped our authors launch their hard work right into the heart of Times Square!
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:mt-10">
                    <video
                        className="w-full h-full rounded-xl shadow-sm"
                        controls
                        preload="metadata"
                    >
                        <source src="/brand-img/videos/video-board-1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <video
                        className="w-full h-full rounded-xl shadow-sm"
                        controls
                        preload="metadata"
                    >
                        <source src="/brand-img/videos/video-board-2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
}
