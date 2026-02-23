import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BrandAudioPlayer from "./BrandAudioPlayer";

export default function BrandChooseUs() {
    const handleOpenChat = () => {
        window.zE && window.zE('webWidget', 'open');
    };

    return (
        <>
            <section className="overflow-hidden" >
                <div className="relative left-0 px-3 mt-20 mb-8 brand-choose-us-section ms-auto md:left-52 md:px-16 " >
                    <div className="flex flex-col items-center p-4 md:flex-row" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                            {/* <Image src={"/brand-img/why-choose-us-img.webp"} width={350} height={200} className="brand-choose-us-img"></Image> */}
                            <Image src={"/brand-img/Why Choose Us 2.png"} width={500} height={500}
                                loading="lazy"
                                alt="about img"
                                className="brand-about-img"
                            />
                        </div>
                        <div className="py-8 basis-1/2 md:ml-20">
                            <h2 className="mt-0 text-2xl font-bold text-white uppercase font-poppins md:text-4xl md:mt-20" data-aos="zoom-in-left" data-aos-delay="100">What Makes Us the Best Book Writing Company?</h2>
                            <p className="text-white mt-2 w-[95%]">At Pine Book Writing, our book writers for hire do not just write on all genres, but each of them specializes in a different genre. Most of them are published authors who closely understand all the ups and downs of the writing and publishing journey. We've helped hundreds of clients make their books best-selling with our impeccable book writing services. </p>
                            <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-10">
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />		Fast Deliveries</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />		100% Confidentiality</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />		Writer-Author Collaboration</li>
                                </ul>
                                <ul>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />		Multiple Revisions</li>
                                    <li className="flex items-center gap-3 mb-2 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />		Chapter-by-Chapter Work</li>
                                    <li className="flex items-center gap-3 text-sm font-poppins"><Image src={"/images/check-mark.png"} className="icon" width={13} height={13} />Quality Assurance</li>
                                </ul>
                            </div>
                            {/* <BrandAudioPlayer src="/brand-img/why-choose-us-voice.wav" /> */}
                            <div>
                                <button className="mt-10 shadow-xl cursor-pointer brand-nav-btn-1 brand-nav-btn btn-f" onClick={handleOpenChat}><Link href={'javascript:;'}>Speak to our Consultant</Link></button>
                                <button className="mt-10 ml-0 shadow-xl cursor-pointer brand-nav-btn-1 brand-nav-btn btn-f md:ml-3"><Link href="tel:+18668417463">Call Now</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}