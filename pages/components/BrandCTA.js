import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BrandCTA(props) {
    const handleOpenChat = (event) => {
        event?.preventDefault();
        if (typeof window.openZendeskChat === 'function') {
            window.openZendeskChat();
            return;
        }

        const openChat = () => {
            if (typeof window.zE === 'function') {
            window.zE('webWidget', 'show');
            window.zE('webWidget', 'open');
                return true;
            }

            if (typeof window.$zopim === 'function') {
                window.$zopim(() => window.$zopim.livechat.window.show());
                return true;
            }

            return false;
        };

        if (openChat()) return;

        let attempts = 0;
        const retry = window.setInterval(() => {
            attempts += 1;
            if (openChat() || attempts >= 20) {
                window.clearInterval(retry);
            }
        }, 250);
    };

    return (
        <>
            <section className="brand-cta-section max-w-screen-xl mx-auto px-6 md:px-20 my-20 relative py-24">
                <div className="flex items-center flex-col md:flex-row">
                    <div className="basis-1/3 brand-cta-vector">
                        <Image src={"/brand-img/cta-book.png"} width={400} height={200} className="brand-cta-book aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000"></Image>
                    </div>
                    <div className="basis-1/2 md:ml-20">
                        <h2 className="text-black font-poppins text-3xl md:text-4xl aos-init aos-animate font-bold" data-aos="flip-down">{props.title}</h2>
                        <p className="text-black mt-10">{props.desc}</p>
                        <div>
                            <button type="button" className="brand-nav-btn shadow-xl mt-10 cursor-pointer btn-g" onClick={handleOpenChat}>{props.btntext}</button>
                            <button className="brand-nav-btn shadow-xl mt-10 cursor-pointer btn-g ml-3"><Link href="tel:+18668417463">Call Now</Link></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
