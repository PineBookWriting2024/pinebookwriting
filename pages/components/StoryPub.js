import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/effect-coverflow";
import {
    Autoplay,
    Pagination,
    Navigation,
    EffectCoverflow,
  } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/autoplay";
  import { A11y } from "swiper/modules";
  import { faArrowRight, faArrowLeft, faPlusCircle, faCheckCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { Swiper, SwiperSlide } from "swiper/react";

export default function StoryPub() {
    const swiperRef2 = useRef(null);

    const videoSlides = [
        {
            id: 1,
            src: "https://www.youtube.com/embed/fX2J8iMy4z4",
            type: "video/mp4"
        },
        {
            id: 2,
            src: "https://www.youtube.com/embed/QMirTma0Wf4",
            type: "video/mp4"
        },
        {
            id: 3,
            src: "https://www.youtube.com/embed/Tv3_r0EMVH4",
            type: "video/mp4"
        },
        {
            id: 4,
            src: "https://www.youtube.com/embed/6T96-bq6_g8",
            type: "video/mp4"
        },
        {
            id: 5,
            src: "https://www.youtube.com/embed/gWW43Tfa8gA",
            type: "video/mp4"
        }
    ];


    return (
        <>
            <section className="story-sec md:py-20 py-10">
                <div className="container mx-auto text-center m1-h">
                    <h3 className="mb-4 text-white text-4xl md:text-5xl font-poppins mt-5">
                    Our Success Stories
                    </h3>
                    <p className="text-black">
                    Explore our success stories to see how Pine Book Writing has helped authors to write their imaginations and turn it into a best-selling book.
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
                                    {/* <video loop controls muted loading="lazy">
                                        <source src={video.src} type={video.type} />
                                    </video> */}
                                     <iframe className='py-' height={300} width={500} src={video.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="bk-sil2 prev" onClick={() => swiperRef2.current?.slidePrev()}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                        <div className="bk-sil2 next" onClick={() => swiperRef2.current?.slideNext()}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}