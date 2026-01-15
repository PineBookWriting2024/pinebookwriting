import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faPlusCircle, faCheckCircle, faMinusCircle, faCheckSquare,faArrowDown  } from "@fortawesome/free-solid-svg-icons";





const PricePackage = () => {
  const [showPackages, setShowPackages] = useState(false);
  const [showPackages2, setShowPackages2] = useState(false);
  const [collapseOpen1, setCollapseOpen1] = useState(false);
  const [collapseOpen2, setCollapseOpen2] = useState(false);

  const contentRef = useRef(null);

  const togglePackages2 = () => {
    setShowPackages2(!showPackages2);
    setCollapseOpen2(!collapseOpen2);
  };

  const togglePackages = () => {
    setShowPackages(!showPackages);
    setCollapseOpen1(!collapseOpen1);
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');


  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

    const handleOpenChat = () => {
    window.zE && window.zE('webWidget', 'open');
  };

    return (
        <div>

            <section className="package pb-5 pt-12">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="grid items-center grid-cols-1 text-center m1-h">
                        <h3 className="text-3xl font-poppins md:text-4xl font-bold">Book Publishing Bundles</h3>
                        <h4 className="text-xl font-poppins md:text-xl font-bold mt-4">Limited Time Offer - Save <span className="blink_me fw-bold text-2xl">50%</span> On Book Publishing Services</h4>
                    </div>
                </div>
            </section>

            <section className="bg-white pt-5 pb-5">
                <div className="width-container">
                    <div className="container mx-auto">
                        <div className="packages-wrapper flex flex-col md:flex-row justify-center gap-12">
                            <div className="single-packages relative">
                                {/* <span className="hover-top-vector"></span> */}

                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Basic Package
                                    <br></br>
                                    <div className="flex justify-center">
                                        <button className="tag-50-per-off"><del className="text-red italic">$700</del></button>
                                    </div>
                                </h4>
                                <div className="single-packages-content mb-5 px-10">
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Preparing Your Manuscript
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Editorial Support
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Proofreading
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Typesetting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Layout Adjustment
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Basic Formatting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        2 Revisions Per Draft
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Book Publishing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Creation
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Verification
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Optimization
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Kindle
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        eBook Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Guarantees
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        No Royalties Share
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Ownership Rights
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Satisfaction
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="package-get-started-btn text-md mt-7" onClick={() => openModal('Basic')}>
                                        START PROJECT
                                    </button>
                                </div>

                                <div className="single-packages-footer flex  w-100 justify-center">
                                    <div >
                                        <h5 className="text-xl">Share your idea!</h5>
                                        <p className="text-md text-black"><Link href="tel:(888) 786-7135">(888) 786-7135</Link></p>
                                    </div>
                                    <span className="border-line mx-8"></span>
                                    <div>
                                        <h5 className="text-xl">Want to discuss?</h5>
                                        <button className="text-md text-black blink_me pl-2" onClick={handleOpenChat}>Live Chat Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="single-packages relative">
                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Start Up Package
                                    <br></br>
                                    <div className="flex justify-center">
                                        <button className="tag-50-per-off"><del className="text-red italic">$2,000</del> | <span className="blink_me">$999 USD</span></button>
                                    </div>
                                </h4>
                                {/* <div className="flex justify-center">
                    <button className="tag-50-per-off">GRAB IT NOW: <span className="blink_me">50% OFF</span></button>
                  </div> */}
                                <div className="single-packages-content mb-5 px-10">
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Preparing Your Manuscript
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Editorial Support
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Proofreading

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Typesetting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Layout Adjustment

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Publishing Standard Formatting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        3 Revisions Per Draft

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Designing your Cover
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Graphic OR Illustrated Design
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Cover Layout
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Cover Formatting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Front, Back & Spine
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Book Publishing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Creation
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Verification
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Optimization
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Amazon & Kindle
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        eBook Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Paperback Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Guarantees
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        No Royalties Share
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Ownership Rights
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Satisfaction
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="package-get-started-btn text-md mt-7" onClick={() => openModal('Start up')}>
                                        START PROJECT
                                    </button>
                                </div>
                                <div className="single-packages-footer flex  w-100 justify-center">
                                    <div >
                                        <h5 className="text-xl">Share your idea!</h5>
                                        <p className="text-md text-black"><Link href="tel:(888) 786-7135">(888) 786-7135</Link></p>
                                    </div>
                                    <span className="border-line mx-8"></span>
                                    <div>
                                        <h5 className="text-xl">Want to discuss?</h5>
                                        <button className="text-md text-black blink_me pl-2" onClick={handleOpenChat}>Live Chat Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="single-packages relative">
                                <Image src={"/images/badge.png"} className="package-badge" width={80} height={80}></Image>
                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Standard Package
                                    <br></br>
                                    <div className="flex justify-center">
                                        <button className="tag-50-per-off"><del className="text-red italic">$3,000</del> | <span className="blink_me">$1,499 USD</span></button>
                                    </div>
                                </h4>
                                {/* <div className="flex justify-center">
                    <button className="tag-50-per-off">$1000 | $499: <span className="blink_me">50% OFF</span></button>
                  </div> */}
                                <div className="single-packages-content mb-5 px-10">
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Preparing Your Manuscript
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Editorial Support
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Proofreading

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Typesetting

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Layout Adjustment

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Publishing Standard Formatting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        5 Revisions Per Draft
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Designing your Cover
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Graphic OR Illustrated Design
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Cover Layout
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Cover Formatting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Front, Back & Spine
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        ISBN + Barcode (2X)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Book Publishing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Creation
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Verification
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Optimization
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Amazon & Kindle
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Barnes & Noble
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        eBook Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Paperback Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Hardcover Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Guarantees
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        No Royalties Share
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Ownership Rights
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Satisfaction
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="package-get-started-btn text-md mt-7" onClick={() => openModal('Standard')}>
                                        START PROJECT
                                    </button>
                                </div>

                                <div className="single-packages-footer flex  w-100 justify-center">
                                    <div >
                                        <h5 className="text-xl">Share your idea!</h5>
                                        <p className="text-md text-black"><Link href="tel:(888) 786-7135">(888) 786-7135</Link></p>
                                    </div>
                                    <span className="border-line mx-8"></span>
                                    <div>
                                        <h5 className="text-xl">Want to discuss?</h5>
                                        <button className="text-md text-black blink_me pl-2" onClick={handleOpenChat}>Live Chat Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <section className="table-sec overflow-x-scroll max-w-screen-xl mx-auto">
                            <div className="container mx-auto m1-h mt-10 text-center">
                                <button className="compare-now-btn mb-10 mt-5" onClick={togglePackages2}>Comparison
                                    <FontAwesomeIcon
                                        className="ml-2"
                                        icon={collapseOpen2 ? faArrowUp : faArrowDown}
                                        color="#0d0f38"
                                    />
                                </button>
                            </div>
                            <div className="">
                                <div className={`container container-compare mx-auto transition-height duration-500 ease-in-out ${showPackages2 ? 'expanded' : 'collapsed'}`} ref={contentRef}>
                                    <div className="md:w-full w-[500px] responsive-width">
                                        <table className="w-full mb-14 table-auto bundle-comparison-chart table-fixed">
                                            <thead className="chart-header-custom">
                                                <tr>
                                                    <th
                                                        className="mainpage-regular"
                                                    ></th>

                                                    <th className="font-poppins">
                                                        <div className="heading">
                                                            Basic Package
                                                        </div>
                                                    </th >

                                                    <th className="font-poppins heading">
                                                        <div className="heading">
                                                            Start Up Package
                                                        </div>
                                                    </th>

                                                    <th className="font-poppins heading">
                                                        <div className="heading">
                                                            Standard Package
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-center">
                                                <tr className="m-4">
                                                    <th className="text-2xl md:text-2xl text-start p-3 font-bold"
                                                        colspan="4"
                                                        scope="row">Preparing Your Manuscript</th>
                                                </tr>

                                                <tr>
                                                    <td>Editorial Support</td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Proofreading</td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                </tr>
                                                <tr>
                                                    <td>Typesetting</td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                </tr>
                                                <tr>
                                                    <td>Layout Adjustment</td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                </tr>
                                                <tr>
                                                    <td>Basic Formatting</td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                </tr>
                                                <tr>
                                                    <td>Publishing Standard Formatting</td>
                                                    <td>
                                                        ❌
                                                    </td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                </tr>
                                                <tr>
                                                    <td>Revisions Per Draft</td>
                                                    <td>
                                                        2
                                                    </td>
                                                    <td>3</td>
                                                    <td>5</td>
                                                </tr>

                                                <tr className="m-4">
                                                    <th className="text-2xl md:text-2xl text-start p-3 font-bold pl-5"
                                                        colspan="4"
                                                        scope="row">Preparing your Book Cover</th>
                                                </tr>
                                                <tr>
                                                    <td>Graphic OR Illustrated Design</td>
                                                    <td>
                                                        ❌
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Cover Layout</td>
                                                    <td>
                                                        ❌
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Cover Formatting</td>
                                                    <td>❌</td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                </tr>
                                                <tr>
                                                    <td>Front, Back & Spine</td>
                                                    <td>
                                                        ❌
                                                    </td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                </tr>
                                                <tr>
                                                    <td>ISBN + Barcode (2X)</td>
                                                    <td>
                                                        ❌
                                                    </td>
                                                    <td>❌</td>
                                                    <td>✔️</td>
                                                </tr>
                                                <tr className="m-4">
                                                    <th className="text-2xl md:text-2xl text-start p-3 font-bold pl-5 "
                                                        colspan="4"
                                                        scope="row">Preparing for Print and Distribution</th>
                                                </tr>
                                                <tr>
                                                    <td>Account Creation</td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Account Verification</td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Account Optimization</td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Kindle</td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                </tr>
                                                <tr>
                                                    <td>Amazon</td>
                                                    <td>❌</td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                </tr>
                                                <tr>
                                                    <td>Barnes and Noble</td>
                                                    <td>
                                                        ❌
                                                    </td>
                                                    <td>❌</td>
                                                    <td>✔️</td>
                                                </tr>
                                                <tr>
                                                    <td>eBook Format</td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                </tr>
                                                <tr>
                                                    <td>Paperback Format</td>
                                                    <td>
                                                        ❌
                                                    </td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                </tr>
                                                <tr>
                                                    <td>Hardcover Format</td>
                                                    <td>
                                                        ❌
                                                    </td>
                                                    <td>❌</td>
                                                    <td>✔️</td>
                                                </tr>

                                                <tr className="m-4">
                                                    <th className="text-2xl md:text-2xl text-start p-3 font-bold pl-5"
                                                        colspan="4"
                                                        scope="row">Guarantees</th>
                                                </tr>
                                                <tr>
                                                    <td>No Royalties Share</td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>100% Ownership Rights</td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                    <td>
                                                        ✔️
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>100% Satisfaction</td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                    <td>✔️</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="packages-wrapper flex flex-col md:flex-row justify-center gap-12 mt-0">
                            <div className="single-packages relative">
                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Expert Package
                                    <br></br>
                                    <div className="flex justify-center">
                                        <button className="tag-50-per-off"><del className="text-red italic">$7,000</del> | <span className="blink_me">$3,499 USD</span></button>
                                    </div>
                                </h4>
                                {/* <div className="flex justify-center">
                                    <button className="tag-50-per-off">GRAB IT NOW: <span className="blink_me">50% OFF</span></button>
                                </div> */}
                                <div className="single-packages-content mb-5 px-10">
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Preparing Your Manuscript
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Editorial Support
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Proofreading
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Typesetting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Layout Adjustment
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Publishing Standard Formatting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        5 Revisions Per Draft
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Designing your Cover
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Graphic OR Illustrated Design
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Cover Layout
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Cover Formatting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Front, Back & Spine
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        ISBN + Barcode (2X)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Book Publishing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Creation
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Verification
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Optimization
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Amazon & Kindle
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Barnes & Noble
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Google Books
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        eBook Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Paperback Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Hardcover Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Online Presence
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        3 - 5 Page Authors Website
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        1 - Year Domain & Hosting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        30 - 60 Seconds Book Trailer
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Guarantees
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        No Royalties Share
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Ownership Rights
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Satisfaction
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h5 className="font-poppins text-xl flex justify-center items-center gap-3">
                                        EASY PAYMENT PLAN
                                        <div className="tooltip">
                                            <Image src={"/images/question-icon.png"} className="icon" width={20} height={20}></Image>
                                            <span className="tooltip-content">
                                                <ul>
                                                    <li> 50% PAYMENT UPFRONT.</li>
                                                    <li> REMAINING 50% CAN BE PAID IN 2-3 MONTHS INSTALLMENTS</li>
                                                    OR
                                                    <li> AFTER THE DELIVERY OF 3 CHAPTERS.</li>
                                                </ul>
                                            </span>
                                        </div>
                                    </h5>
                                </div>
                                <div className="text-center">
                                    <button className="package-get-started-btn text-md mt-5" onClick={() => openModal('Expert')}>
                                        START PROJECT
                                    </button>
                                </div>

                                <div className="single-packages-footer flex  w-100 justify-center">
                                    <div >
                                        <h5 className="text-xl">Share your idea!</h5>
                                        <p className="text-md text-black"><Link href="tel:(888) 786-7135">(888) 786-7135</Link></p>
                                    </div>
                                    <span className="border-line mx-8"></span>
                                    <div>
                                        <h5 className="text-xl">Want to discuss?</h5>
                                        <button className="text-md text-black blink_me pl-2" onClick={handleOpenChat}>Live Chat Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="single-packages relative">
                                <Image src={"/images/badge.png"} className="package-badge" width={80} height={80}></Image>
                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Premium Package
                                    <br></br>
                                    <div className="flex justify-center">
                                        <button className="tag-50-per-off"><del className="text-red italic">$15,000</del> | <span className="blink_me">$7,499 USD</span></button>
                                    </div>
                                </h4>
                                {/* <div className="flex justify-center">
                    <button className="tag-50-per-off">GRAB IT NOW: <span className="blink_me">50% OFF</span></button>
                  </div> */}
                                <div className="single-packages-content mb-5 px-10">
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Preparing Your Manuscript
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Editorial Support
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Proofreading

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Typesetting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Layout Adjustment

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Publishing Standard Formatting

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        5 Revisions Per Draft

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Designing your Cover
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Graphic OR Illustrated Design
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Cover Layout
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Cover Formatting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Front, Back & Spine
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        ISBN + Barcode (2X)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Book Publishing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Creation
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Verification
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Optimization
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Amazon & Kindle
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Barnes & Noble
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Google Books
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Smashwords
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        eBook Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Paperback Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Hardcover Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        12 Months Brand Marketing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Logo Design (Complimentary)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        3 - 5 Page Authors Website
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        1 - Year Domain & Hosting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        30 - 60 Seconds Book Trailer
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Organic Google Marketing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Social Media Marketing
                                        (Facebook, Instagram & Twitter)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Guarantees
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        No Royalties Share
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Ownership Rights
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Satisfaction
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h5 className="font-poppins text-xl flex justify-center items-center gap-3">
                                        EASY PAYMENT PLAN
                                        <div className="tooltip">
                                            <Image src={"/images/question-icon.png"} className="icon" width={20} height={20}></Image>
                                            <span className="tooltip-content">
                                                <ul>
                                                    <li> 50% PAYMENT UPFRONT.</li>
                                                    <li> REMAINING 50% CAN BE PAID IN 2-3 MONTHS INSTALLMENTS</li>
                                                    OR
                                                    <li> AFTER THE DELIVERY OF 3 CHAPTERS.</li>
                                                </ul>
                                            </span>
                                        </div>
                                    </h5>
                                </div>
                                <div className="text-center">
                                    <button className="package-get-started-btn text-md mt-8" onClick={() => openModal('Premium')}>
                                        START PROJECT
                                    </button>
                                </div>
                                <div className="single-packages-footer flex  w-100 justify-center">
                                    <div >
                                        <h5 className="text-xl">Share your idea!</h5>
                                        <p className="text-md text-black"><Link href="tel:(888) 786-7135">(888) 786-7135</Link></p>
                                    </div>
                                    <span className="border-line mx-8"></span>
                                    <div>
                                        <h5 className="text-xl">Want to discuss?</h5>
                                        <button className="text-md text-black blink_me pl-2" onClick={handleOpenChat}>Live Chat Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="single-packages relative">
                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Enterprise Package
                                    <br></br>
                                    <div className="flex justify-center">
                                        <button className="tag-50-per-off"><del className="text-red italic">$25,000</del> | <span className="blink_me">$12,499 USD</span></button>
                                    </div>
                                </h4>
                                {/* <div className="flex justify-center">
                    <button className="tag-50-per-off">GRAB IT NOW: <span className="blink_me">50% OFF</span></button>
                  </div> */}
                                <div className="single-packages-content mb-5 px-10">
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Preparing Your Manuscript
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Editorial Support
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Proofreading

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Typesetting

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Layout Adjustment

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Publishing Standard Formatting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        5 Revisions Per Draft
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Designing your Cover
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Graphic OR Illustrated Design
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Cover Layout
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Cover Formatting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Front, Back & Spine
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        ISBN + Barcode (2X)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Book Publishing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Creation
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Verification
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Optimization
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Amazon & Kindle
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Barnes & Noble
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Google Books
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Smashwords
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Draft2Digital
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on ACX
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        eBook Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Paperback Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Hardcover Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Audiobook Format
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        24 Months Brand Marketing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Logo Design (Complimentary)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        3 - 5 Page Authors Website
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        2 - Year Domain & Hosting
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        60 - 90 Seconds Video Trailer
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Organic Google Marketing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Blogs & Article Postings
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Press Releases (150+ Platforms)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Social Media Marketing
                                        (Facebook, Instagram, Twitter, YouTube, TikTok)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Guarantees
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        No Royalties Share
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Ownership Rights
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        100% Satisfaction
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h5 className="font-poppins text-xl flex justify-center items-center gap-3">
                                        EASY PAYMENT PLAN
                                        <div className="tooltip">
                                            <Image src={"/images/question-icon.png"} className="icon" width={20} height={20}></Image>
                                            <span className="tooltip-content">
                                                <ul>
                                                    <li> 50% PAYMENT UPFRONT.</li>
                                                    <li> REMAINING 50% CAN BE PAID IN 2-3 MONTHS INSTALLMENTS</li>
                                                    OR
                                                    <li> AFTER THE DELIVERY OF 3 CHAPTERS.</li>
                                                </ul>
                                            </span>
                                        </div>

                                    </h5>
                                </div>
                                <div className="text-center">
                                    <button className="package-get-started-btn text-md mt-8" onClick={() => openModal('Enterprise')}>
                                        START PROJECT
                                    </button>
                                </div>

                                <div className="single-packages-footer flex  w-100 justify-center">
                                    <div >
                                        <h5 className="text-xl">Share your idea!</h5>
                                        <p className="text-md text-black"><Link href="tel:(888) 786-7135">(888) 786-7135</Link></p>
                                    </div>
                                    <span className="border-line mx-8"></span>
                                    <div>
                                        <h5 className="text-xl">Want to discuss?</h5>
                                        <button className="text-md text-black blink_me pl-2" onClick={handleOpenChat}>Live Chat Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="table-sec overflow-x-scroll max-w-screen-xl mx-auto">
                <div className="container mx-auto m1-h mt-10 text-center">
                    <button className="compare-now-btn mb-10 mt-5" onClick={togglePackages}>Comparison
                        <FontAwesomeIcon
                            className="ml-2"
                            icon={collapseOpen1 ? faArrowUp : faArrowDown}
                            color="#0d0f38"
                        />
                    </button>
                </div>
                <div className="">
                    <div className={`container container-compare mx-auto transition-height duration-500 ease-in-out ${showPackages ? 'expanded' : 'collapsed'}`} ref={contentRef}>
                        <div className="md:w-full w-[500px] responsive-width">
                            <table className="w-full mb-14 table-auto bundle-comparison-chart table-fixed">
                                <thead className="chart-header-custom">
                                    <tr>
                                        <th
                                            className="mainpage-regular"
                                        ></th>

                                        <th className="font-poppins">
                                            <div className="heading">
                                                Expert Package
                                            </div>
                                        </th >
                                        <th className="font-poppins">
                                            <div className="heading">
                                                Premium Package
                                            </div>
                                        </th>

                                        <th className="font-poppins">
                                            <div className="heading">
                                                Enterprise Package
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr className="m-4">
                                        <th className="text-2xl md:text-2xl text-start p-3 font-bold"
                                            colspan="4"
                                            scope="row">Preparing Your Manuscript</th>
                                    </tr>
                                    <tr>
                                        <td>Editorial Support</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Proofreading</td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>Typesetting</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>Layout Adjustment</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>Basic Formatting</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>Publishing Standard Formatting</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>Revisions Per Draft</td>
                                        <td>
                                            5
                                        </td>
                                        <td>5</td>
                                        <td>5</td>
                                    </tr>
                                    <tr className="m-4">
                                        <th className="text-2xl md:text-2xl text-start p-3 font-bold pl-5"
                                            colspan="4"
                                            scope="row">Preparing your Book Cover</th>
                                    </tr>
                                    <tr>
                                        <td>Graphic OR Illustrated Design</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Cover Layout</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Cover Formatting</td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>Front, Back & Spine</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>ISBN + Barcode (2X)</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr className="m-4">
                                        <th className="text-2xl md:text-2xl text-start p-3 font-bold pl-5 "
                                            colspan="4"
                                            scope="row">Preparing for Print and Distribution</th>
                                    </tr>
                                    <tr>
                                        <td>Account Creation</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Account Verification</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Account Optimization</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Kindle</td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>Amazon</td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>Barnes and Noble</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>Google Books</td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>Smashwords</td>
                                        <td>
                                            ❌
                                        </td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>Draft2Digital</td>
                                        <td>
                                            ❌
                                        </td>
                                        <td>❌</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>ACX</td>
                                        <td>
                                            ❌
                                        </td>
                                        <td>❌</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>eBook Format</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>Paperback Format</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>Hardcover Format</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>Audiobook Format</td>
                                        <td>
                                            ❌
                                        </td>
                                        <td>❌</td>
                                        <td>✔️</td>
                                    </tr>

                                    {/* <tr className="m-4">
                                        <td className="text-2xl md:text-2xl text-start p-3 font-bold"
                                            colspan="4"
                                            scope="row">Guarantees</td>
                                    </tr>
                                    <tr>
                                        <td>No Royalties Share</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>100% Ownership Rights</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>100% Satisfaction</td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                        <td>✔️</td>
                                    </tr> */}
                                    <tr className="m-4">
                                        <th className="text-2xl md:text-2xl text-start p-3 font-bold pl-5"
                                            colspan="4"
                                            scope="row">Online Presence</th>
                                    </tr>
                                    <tr>
                                        <td>Author Website</td>
                                        <td>
                                            3-5 Pages
                                        </td>
                                        <td>
                                            3-5 Pages
                                        </td>
                                        <td>
                                            3-5 Pages
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Domain & Hosting</td>
                                        <td>
                                            1 Year
                                        </td>
                                        <td>
                                            1 Year
                                        </td>
                                        <td>
                                            2 Year
                                        </td>
                                    </tr>
                                    <tr className="m-4">
                                        <th className="text-2xl md:text-2xl text-start p-3 font-bold pl-5"
                                            colspan="4"
                                            scope="row">Marketing & Branding</th>
                                    </tr>
                                    <tr>
                                        <td>Book Trailer</td>
                                        <td>
                                            30-60 Seconds
                                        </td>
                                        <td>
                                            30-60 Seconds
                                        </td>
                                        <td>
                                            60-90 Seconds
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Social Media Marketing</td>
                                        <td>
                                            ❌
                                        </td>
                                        <td>
                                            3 Platforms
                                        </td>
                                        <td>
                                            6 Platforms
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Organic Google Marketing</td>
                                        <td>
                                            ❌
                                        </td>
                                        <td>
                                            6 Months
                                        </td>
                                        <td>
                                            12 Months
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Blog & Article Posting</td>
                                        <td>
                                            ❌
                                        </td>
                                        <td>
                                            ❌
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Press Releases</td>
                                        <td>
                                            ❌
                                        </td>
                                        <td>
                                            ❌
                                        </td>
                                        <td>
                                            150+ Platforms
                                        </td>
                                    </tr>
                                    <tr className="m-4">
                                        <th className="text-2xl md:text-2xl text-start p-3 font-bold pl-5"
                                            colspan="4"
                                            scope="row">Guarantees</th>
                                    </tr>
                                    <tr>
                                        <td>100% Royalties</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>100% Ownership Rights</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                    </tr>
                                    {/* <tr>
                                        <td>100% Satisfaction</td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                        <td>
                                            ✔️
                                        </td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default PricePackage
