import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { faArrowRight, faArrowLeft, faPlusCircle, faCheckCircle, faMinusCircle, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "./popup";


export default function Packages({ isOpen, onClose, service }) {
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
        <>
            <Popup isOpen={isModalOpen} onClose={closeModal} service={selectedService} />
            <section className="bg-white pt-8 pb-24">
                <div className="width-container">
                    <div className="container mx-auto">
                        <div className="text-center mb-6">
                            {/* <h3 className="text-2xl text-black font-poppins uppercase">Publishing</h3> */}
                            <h2 className="font-poppins text-4xl font-bold text-black uppercase">Book Publishing Bundles</h2>
                            <h4 className="text-xl font-poppins md:text-xl font-bold mt-4">Limited Time Offer - Save <span className="blink_me fw-bold text-2xl">50%</span> On Book Publishing Services</h4>
                        </div>

                        <div className="packages-wrapper flex flex-col md:flex-row justify-center gap-12">
                            <div className="single-packages relative">

                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Basic Package
                                <br></br>
                                <div className="flex justify-center">
                                <button className="tag-50-per-off"><del className="text-red italic">$700</del> | <span className="blink_me">$349 USD</span></button>
                                </div>
                                </h4>
                                
                               

                                <div className="single-packages-content mb-5 px-10">
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Preparing Your Manuscript
                                    </div>

                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Line by Line Editing
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
                                        Formatting (50+ Platforms)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Multiple Revisions
                                    </div>
                                    <div className="flex gap-2 mb-5  items-center text-xl">
                                        Book Writing
                                    </div>
                                    <div className="flex gap-2 mb-5  items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Creation
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Account Verification
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Kindle
                                    </div>
                                    <div className="flex gap-2 mb-5  items-center text-xl">
                                        Guarantees
                                    </div>
                                    <div className="flex gap-2 mb-5  items-center">
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
                                        <p className="text-md text-black"><Link href="tel:(866)-841-7463">(866)-841-7463</Link></p>
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
                                <div className="single-packages-content mb-5 px-10">
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Preparing Your Manuscript
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Developmental Editing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Line by Line Editing

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
                                        Formatting (50+ Platforms)

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Multiple Revisions

                                    </div>
                                    <div className="flex gap-2 mb-5  items-center text-xl">
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
                                        Book Writing
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
                                        Available on Kindle
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
                                        <p className="text-md text-black"><Link href="tel:(866)-841-7463">(866)-841-7463</Link></p>
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
                                <div className="single-packages-content mb-5 px-10">
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Preparing Your Manuscript
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Developmental Editing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Line by Line Editing
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
                                        Formatting (50+ Platforms)

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Multiple Revisions
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
                                        Book Writing
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
                                        Available on Kindle
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Barnes and Noble
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
                                        <p className="text-md text-black"><Link href="tel:(866)-841-7463">(866)-841-7463</Link></p>
                                    </div>
                                    <span className="border-line mx-8"></span>
                                    <div>
                                        <h5 className="text-xl">Want to discuss?</h5>
                                        <button className="text-md text-black blink_me pl-2" onClick={handleOpenChat}>Live Chat Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="packages-wrapper flex flex-col md:flex-row justify-center gap-12 mt-12">
                            <div className="single-packages relative">
                                <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Expert Package
                                <br></br>
                                <div className="flex justify-center">
                                <button className="tag-50-per-off"><del className="text-red italic">$7,000</del> | <span className="blink_me">$3,499 USD</span></button>
                                </div>
                                </h4>
                                <div className="single-packages-content mb-5 px-10">
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Preparing Your Manuscript
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Developmental Editing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Line by Line Editing
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
                                        Formatting (50+ Platforms)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Multiple Revisions
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
                                        Book Writing
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
                                        Available on Kindle
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Barnes and Noble
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
                                        <p className="text-md text-black"><Link href="tel:(866)-841-7463">(866)-841-7463</Link></p>
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
                                <div className="single-packages-content mb-5 px-10">
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Preparing Your Manuscript
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Developmental Editing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Line by Line Editing

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
                                        Formatting (50+ Platforms)

                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Multiple Revisions

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
                                        Book Writing
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
                                        Available on Kindle
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Barnes and Noble
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
                                        <p className="text-md text-black"><Link href="tel:(866)-841-7463">(866)-841-7463</Link></p>
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
                                <div className="single-packages-content mb-5 px-10">
                                    <div className="flex gap-2 mb-5 items-center text-xl">
                                        Preparing Your Manuscript
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Developmental Editing
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Line by Line Editing
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
                                        Formatting (50+ Platforms)
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Multiple Revisions
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
                                        Book Writing
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
                                        Available on Kindle
                                    </div>
                                    <div className="flex gap-2 mb-5 items-center">
                                        <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                                        Available on Barnes and Noble
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
                                        (Facebook, Instagram, Twitter)
                                        (Pinterest, Youtube & TikTok)
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
                                    <button className="package-get-started-btn font-poppins text-md mt-8" onClick={() => openModal('Enterprise')}>
                                        START PROJECT
                                    </button>
                                </div>

                                <div className="single-packages-footer flex  w-100 justify-center">
                                    <div >
                                        <h5 className="text-xl">Share your idea!</h5>
                                        <p className="text-md text-black"><Link href="tel:(866)-841-7463">(866)-841-7463</Link></p>
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

        </>
    );
}