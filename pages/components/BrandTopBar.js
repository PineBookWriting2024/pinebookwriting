import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { faArrowRight, faArrowLeft, faPlusCircle, faCheckCircle, faMinusCircle, faPhone, faEnvelope, faLocationArrow, faLocation, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BrandTopBar() {

    return (
        <>
            <div className="nav-top-bar text-center md:mt-5">
                {/* <h3 className="text-white font-poppins text-md md:text-xl font-thin"><b>From Manuscript to Marketplace: We Make It Happen for YOU.</b></h3> */}
                <div className="max-w-screen-xl flex md:flex-row flex-col justify-center md:justify-end md:gap-6 gap-2 mx-auto">
                    <Link
                        href="tel:8668417463"
                        className="text-white text-sm hover:text-white font-poppins flex justify-center items-center font-bold"
                    >
                        <FontAwesomeIcon icon={faPhone} className="me-3" width={16} />
                        (866) 841-7463
                    </Link>
                    <Link
                        href="mailto:support@pinebookwriting.com"
                        className="text-white hover:text-white font-poppins text-sm flex justify-center md:justify-start items-center font-bold"
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="me-3" width={16} />
                        support@pinebookwriting.com{" "}
                    </Link>
                </div>
            </div>
        </>
    );
}