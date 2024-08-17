import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/effect-coverflow";
import dynamic from 'next/dynamic';
import 'glightbox/dist/css/glightbox.min.css';

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
import BrandTesti from "./BrandTesti";

const GLightbox = dynamic(
    () => import('glightbox').then((glightboxModule) => glightboxModule.default),
    { ssr: false }
);

export default function BrandCustomerStory() {
    const swiperRef2 = useRef(null);

    const lightboxRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined" && !lightboxRef.current) {
            import('glightbox').then((GLightboxModule) => {
                const GLightbox = GLightboxModule.default;
                lightboxRef.current = GLightbox({
                    selector: '.glightbox'
                });
            });
        }

        return () => {
            if (lightboxRef.current) {
                lightboxRef.current.destroy();
            }
        };
    }, []);


    return (
        <>
            <section className="story-sec brand-story-sec pt-28 relative">
                <div className="container mx-auto text-center m1-h">
                    <h3 className="mb-8 text-black text-3xl md:text-4xl font-poppins font-bold">
                        Our Success Stories
                    </h3>
                    <p className="text-black">
                        Explore our Success Stories to see how Pine Book Writing has
                        empowered authors in their <br></br> self-publishing journey and stands out
                        among self-book publishers.
                    </p>
                </div>

                <BrandTesti/>
            </section>


            
        </>
    );
}