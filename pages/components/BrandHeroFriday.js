import useHubspotForm from "/hooks/hubspot";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FadeIn from "./FadeIn";



export default function BrandHeroFriday() {
    const router = useRouter();
    const { submitMainContactForm } = useHubspotForm();
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [phoneError, setPhoneError] = useState("");

    const clientLogos = [
        {
            href: "https://goo.gl/maps/D6kJBoXBJYwcZWkP7",
            src: "/images/Google Partner.png",
            alt: "LOGO",
            width: 150,
            height: 120,
        },
        {
            href: "https://www.bbb.org/ca/on/richmond-hill/profile/publishers-book/pine-book-writing-inc-0107-1406919",
            src: "/images/s2.png",
            alt: "LOGO",
            width: 130,
            height: 60,
        },
        {
            href: "https://www.trustpilot.com/review/pinebookwriting.com",
            src: "/images/s3.png",
            alt: "LOGO",
            width: 130,
            height: 60,
        },
        {
            href: "https://www.yelp.com/biz/pine-book-writing-richmond-hill",
            src: "/images/s4.png",
            alt: "LOGO",
            width: 130,
            height: 60,
        },
        {
            href: "https://clutch.co/profile/pine-book-writing",
            src: "/images/s6.png",
            alt: "LOGO",
            width: 130,
            height: 60,
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        const setters = {
            fullName: setFullName,
            email: setEmail,
            message: setMessage,
            phoneNumber: setPhoneNumber,
        };

        const setter = setters[name];
        if (setter) {
            if (name === "phoneNumber") {
                const phoneRegex = /^\d{0,}$/;
                if (phoneRegex.test(value)) {
                    setter(value);
                    if (value.length < 9) {
                        setPhoneError("Phone number must be at least 9 digits");
                    } else {
                        setPhoneError("");
                    }
                } else {
                    setPhoneError("Invalid phone number format");
                }
            } else {
                setter(value);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (phoneNumber.length < 9) {
            setPhoneError("Phone number must be at least 9 digits");
            return;
        }
        const response = await submitMainContactForm(
            fullName,
            email,
            phoneNumber,
            message
        );
        if (response) {
            setShowSuccess(true);
            router.push("/thank-you");
            setTimeout(() => {
                setShowSuccess(false);
                setEmail("");
                setFullName("");
                setPhoneNumber("");
                setMessage("");
            }, 3000);
        }

        console.log("response", response);
    };

    return (
        <>
            
                <div className="container relative z-10 max-w-screen-xl px-4 pt-20 md:mx-auto tablet-margin-banner brand-hero-section">
                    <div className="grid items-center justify-between grid-cols-1 text-left sm:gap-8 sm:py-0 md:grid-cols-2 md:gap-8 md:py-36">
                    <div className="mb-4">
                        <h3 className="mb-4 text-2xl text-white font-poppins md:text-3xl aos-init aos-animate"> <span className="px-2 py-0">#1 Ghostwriting Company</span></h3>
                        <FadeIn>
                        <h1 className="text-3xl font-bold text-white uppercase font-poppins md:text-4xl">
                        Pine Book Writing Services
                        </h1>
                        </FadeIn>
                        {/* <WavyText text="DO YOU HAVE A MANUSCRIPT READY TO BE PUBLISHED?" replay={true} style={{ color: 'white' }} className="text-3xl font-bold text-white font-poppins md:text-5xl" /> */}
                        {/* <FadeIn> */}
                        <p className="pt-4 text-xl text-white">
                        Pine Book Writing provides expert writing services to help you produce captivating chapters of your book. Crafting a compelling book requires a unique skill set. That's why we offer professional book writing services to meet your specific needs. Our expert team of writers delivers flawless final products that uplift your writing to new heights. </p>
                        <h4 className="mt-8 text-2xl font-bold text-white uppercase font-poppins">Our Credibility</h4>
                        {/* </FadeIn> */}
                        <div className="flex items-center justify-start gap-2 mt-8 md:gap-x-8 client-logo-sec">
                            {clientLogos.map((logo, index) => (
                                <Link key={index} href={logo.href} target="_blank">
                                    <Image
                                        alt={logo.alt}
                                        src={logo.src}
                                        width={logo.width}
                                        height={logo.height}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                        <div>
                            <div className="relative w-full px-8 py-8 bg-gray-400 bg-opacity-50 border-gray-100 md:px-7 md:py-7 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm">
                                <Image
                                    className="text-center header-form-off-badge"
                                    src={"/brand-img/christmas-tag.png"}
                                    width={140}
                                    height={180}
                                    loading="lazy"
                                ></Image>
                                <Image
                                    className="text-center christmas-cap-form"
                                    src={"/brand-img/christmas-cap.png"}
                                    width={300}
                                    height={300}
                                    loading="lazy"
                                ></Image>
                                <div className="text-start">
                                    <h4 className="text-2xl font-bold text-white font-poppins md:text-4xl christmas-banner-title">
                                        Avail Discount
                                    </h4>
                                    <h5 className="mb-3 text-lg text-white font-poppins christmas-banner-desc">
                                        Holiday Season Sale: Expert Book Writing at{" "}
                                        <span className="text-blink">50% Off</span> –
                                        Your Story Deserves to be Heard!
                                    </h5>
                                </div>
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                                    <div className="relative w-full col-span-2">
                                        <form className="flex flex-col items-start justify-start gap-4" onSubmit={handleSubmit}>
                                            <div className="relative w-full">
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    onChange={handleChange}
                                                    value={fullName}
                                                    required
                                                    className="w-full py-2 pl-4 pr-4 text-sm border shadow-xl rounded-xl"
                                                    placeholder="Enter your Name"
                                                />
                                            </div>
                                            <div className="relative w-full">
                                                <input
                                                    type="text"
                                                    onChange={handleChange}
                                                    value={phoneNumber}
                                                    name="phoneNumber"
                                                    required
                                                    className="w-full py-2 pl-4 pr-4 text-sm border shadow-xl rounded-xl"
                                                    placeholder="Enter your Phone"
                                                />
                                                {phoneError && (
                                                    <p className="mt-1 text-sm text-red-500">{phoneError}</p>
                                                )}
                                            </div>
                                            <div className="relative w-full">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    onChange={handleChange}
                                                    value={email}
                                                    required
                                                    className="w-full py-2 pl-4 pr-4 text-sm border shadow-xl rounded-xl"
                                                    placeholder="Enter your Email"
                                                />
                                            </div>
                                            <div className="relative w-full">
                                                <textarea
                                                    className="w-full py-2 pl-4 pr-4 text-sm border shadow-xl rounded-xl"
                                                    rows={3}
                                                    onChange={handleChange}
                                                    value={message}
                                                    required
                                                    placeholder="Enter your Message"
                                                    name="message"
                                                ></textarea>
                                            </div>
                                            {showSuccess && (
                                                <p className="px-1 py-1 text-green-700">
                                                    Form submitted Successfully!
                                                </p>
                                            )}
                                            <div className="w-full">
                                                <button
                                                    className="w-full p-4 py-2 text-xl text-white uppercase rounded shadow-xl header-submit-btn rounded-xl"
                                                    type="submit"
                                                >
                                                    Submit
                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                    <div className="flex items-center justify-center col-span-1">
                                        <Image
                                            className="text-center christmas-banner-img"
                                            src={"/brand-img/crishtmis-img.png"}
                                            width={250}
                                            height={500}
                                            loading="lazy"
                                        ></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
           
        </>
    );
}
