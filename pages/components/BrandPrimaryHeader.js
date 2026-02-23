import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BrandPrimaryHeader(props) {
    return (
        <>
            <section className="py-5 brand-primary-header-bg" style={{backgroundImage: `url(${props.photo_banner})`}}>
                <span className="overlay-banner"></span>
                <div className="container max-w-screen-xl mx-auto ban-cls">
                    <div className="py-5 row">
                        <div className="px-5 col-12 w-100 md:w-3/5">
                            <h1 className="text-2xl text-white md:text-4xl font-poppins">
                                {props.title}
                            </h1>
                            {/* CHANGED <p> TO <div> BELOW TO PREVENT HYDRATION ERROR */}
                            <div className="pt-2 text-xl text-white">
                                {props.desc}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}