import React, { useEffect, useRef, useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PortfolioSlider5() {
    const swiperRef = useRef(null);
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);

    const videoSlides = [
        { id: 1, src: "https://www.youtube.com/embed/GXBJEw7nzQ0" },
        { id: 2, src: "https://www.youtube.com/embed/wxQ34HyePTo" },
        { id: 3, src: "https://www.youtube.com/embed/nPwzZDdIYxw" },
        { id: 4, src: "https://www.youtube.com/embed/JAT1XuWNCTs" },
        { id: 5, src: "https://www.youtube.com/embed/dCP4ierbO_Y" },
        { id: 6, src: "https://www.youtube.com/embed/SZvaKio_X_Q" },
        { id: 7, src: "https://www.youtube.com/embed/IYviqGuF26I" },
        { id: 8, src: "https://www.youtube.com/embed/YRJUth1YILs" },
        { id: 9, src: "https://www.youtube.com/embed/dk9nFbw5K1o" },
        { id: 10, src: "https://www.youtube.com/embed/mrufdG3C8ts" },
    ];

    useEffect(() => {
        const autoSlideTimer = setInterval(() => {
            swiperRef.current?.slideNext();
        }, 6500);

        return () => clearInterval(autoSlideTimer);
    }, []);

    return (
        <section className="portfolio-video-trailers">
            <div className="portfolio-video-trailers__inner">
                <h2>Book Video Trailer</h2>

                <div className="portfolio-video-trailers__carousel">
                    <button
                        type="button"
                        className="portfolio-video-trailers__nav portfolio-video-trailers__nav--prev"
                        aria-label="Previous video trailer"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>

                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 120,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            setActiveVideoIndex(swiper.realIndex || 0);
                        }}
                        onSlideChange={(swiper) => setActiveVideoIndex(swiper.realIndex)}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="portfolio-video-trailers__swiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 18,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 42,
                            },
                        }}
                    >
                        {videoSlides.map((video, index) => (
                            <SwiperSlide key={video.id}>
                                <div className="portfolio-video-trailers__card">
                                    <iframe
                                        className="portfolio-video-trailers__video"
                                        src={`${video.src}?rel=0&playsinline=1${activeVideoIndex === index ? "&autoplay=1&mute=1" : ""}`}
                                        title={`Video trailer ${video.id}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button
                        type="button"
                        className="portfolio-video-trailers__nav portfolio-video-trailers__nav--next"
                        aria-label="Next video trailer"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </section>
    );
}
