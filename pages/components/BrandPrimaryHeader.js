import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BrandPrimaryHeader(props) {

    return (
        <>
            <section className="brand-primary-header-bg py-5" style={{backgroundImage: `url(${props.photo_banner})`}}>
                <span className="overlay-banner"></span>
                <div className="container max-w-screen-xl mx-auto ban-cls">
                    <div className="row py-5">
                        <div className="col-12 px-5 w-100 md:w-3/5">
                            <h1 className="md:text-4xl text-2xl text-white  font-poppins">
                                {props.title}</h1>
                            <p className="text-xl text-white pt-2">{props.desc}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}