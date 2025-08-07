import React, { useRef } from "react";
import "swiper/css/effect-coverflow";
import {
    Pagination,
    EffectCoverflow
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Story() {
    const swiperRef2 = useRef(null);

    const videoSlides = [
        { id: 1, type: "video/mp4", src: "/images/v1.mp4" },
        { id: 2, type: "video/mp4", src: "/images/v6.mp4" },
        { id: 3, type: "video/mp4", src: "/images/v3.mp4" },
        { id: 4, type: "video/mp4", src: "/images/v4.mp4" },
        { id: 5, type: "video/mp4", src: "/images/v5.mp4" }
    ];

    return (
        <section className="story-sec md:py-20 py-10">
            <div className="container mx-auto text-center m1-h">
                <h3 className="mb-4 text-white text-4xl md:text-5xl font-poppins mt-5">
                    Our Success Stories
                </h3>
                <p className="text-black">
                    Explore our Success Stories to see how Pine Book Writing has
                    empowered authors <br /> in their self-publishing journey and stands out
                    among self-book publishers.
                </p>
            </div>

            <section className="testimonials pt-8">
                <div className="container mx-auto relative w-[80%]">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        loop={true}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        onBeforeInit={(swiper) => {
                            swiperRef2.current = swiper;
                        }}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 5,
                                navigation: true,
                            },
                            "@1.00": {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                        }}
                    >
                        {videoSlides.map((video) => (
                            <SwiperSlide key={video.id}>
                                <video
                                    height={300}
                                    width={500}
                                    controls
                                    muted
                                    preload="metadata"
                                    style={{ maxWidth: "100%", borderRadius: "8px" }}
                                >
                                    <source src={video.src} type={video.type} />
                                    Your browser does not support the video tag.
                                </video>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div
                        className="bk-sil2 prev"
                        onClick={() => swiperRef2.current?.slidePrev()}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <div
                        className="bk-sil2 next"
                        onClick={() => swiperRef2.current?.slideNext()}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </section>
        </section>
    );
}
