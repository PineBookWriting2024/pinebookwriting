import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BrandAudioPlayer from "./BrandAudioPlayer";

export default function BrandChooseUs() {

    return (
        <>
            <section className="overflow-hidden" >
                <div className="brand-choose-us-section ms-auto relative left-0 md:left-52 px-12 md:px-16 mt-5 mb-8 " >
                    <div className="flex items-center flex-col md:flex-row p-4" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                            {/* <Image src={"/brand-img/why-choose-us-img.webp"} width={350} height={200} className="brand-choose-us-img"></Image> */}
                            <Image src={"/brand-img/Why Choose Us 2.png"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="basis-1/3 md:ml-20 py-8">
                            <h2 className="text-white font-poppins text-3xl md:text-4xl uppercase md:mt-20 mt-0 font-bold" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Pine Book Writing?</h2>
                            <p className="text-white mt-2">At Pine Book Writing, we have a talented team of writers who are closely familiar with all aspects of writing for various genres. They have helped hundreds of clients make their books best-selling with our impeccable writing expertise. </p>
                            <div className="flex gap-10 mt-6">
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />100% Author Credit</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Proofreading & Editing</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Fast Turnaround Time</li>
                                </ul>
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Personalized Support</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Multiple Revisions</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Quality Assurance</li>
                                </ul>
                            </div>
                            {/* <BrandAudioPlayer src="/brand-img/why-choose-us-voice.wav" /> */}
                            <button className="brand-nav-btn-1 brand-nav-btn shadow-xl mt-10 cursor-pointer btn-f"><Link href="tel:+18668417463">Call Now</Link></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}