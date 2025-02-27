import useHubspotForm from "/hooks/hubspot";
import React, { useState, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FadeIn from "./FadeIn";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Autoplay,
    Pagination,
    Navigation,
    EffectCoverflow,
} from "swiper/modules";

// import SnowFall from "./SnowFall";


export default function BrandHero() {
    const router = useRouter();
    // Form Integration
    const { submitMainContactForm } = useHubspotForm();
    const [email, setEmail] = useState("");
    // const [username, setUsername] = useState("");
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [phoneError, setPhoneError] = useState("");
    const swiperRef2 = useRef(null);

    // Object
    const clientLogos = [
        {
            href: "https://goo.gl/maps/D6kJBoXBJYwcZWkP7",
            src: "/images/Google-Partner.webp",
            alt: "LOGO",
            width: 125,
            height: 125
        },
        {
            href: "https://www.bbb.org/ca/on/richmond-hill/profile/publishers-book/pine-book-writing-inc-0107-1406919",
            src: "/images/s2.png",
            alt: "LOGO",
            width: 125,
            height: 125
        },
        {
            href: "https://www.trustpilot.com/review/pinebookwriting.com",
            src: "/images/s3.png",
            alt: "LOGO",
            width: 125,
            height: 125
        },
        {
            href: "https://www.yelp.com/biz/pine-book-writing-richmond-hill",
            src: "/images/s4.png",
            alt: "LOGO",
            width: 125,
            height: 125
        },
        {
            href: "https://clutch.co/profile/pine-book-writing",
            src: "/images/s6.png",
            alt: "LOGO",
            width: 130,
            height: 60
        }
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
            if (name === 'phoneNumber') {
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
            router.push('/thank-you')
            setTimeout(() => {
                setShowSuccess(false);
                setEmail("");
                setFullName("");
                setPhoneNumber("")
                setMessage("");
            }, 3000);
        }

        console.log("response", response);
    };

    return (
        <>


            {/* <section className=""> */}
            {/* Snowfall Background */}
            <div className="relative w-full snowbanner" style={{ zIndex: 1 }}>
                {/* <SnowFall /> */}
                <div className="container mx-4 md:pt-20 md:mx-auto tablet-margin-banner max-w-screen-xl brand-hero-section">
                    <div className="grid grid-cols-1 sm:gap-8 py-20 md:grid-cols-2 text-left md:items-center justify-between md:gap-8 md:py-30">
                        <div className="mb-4">
                            <h3 className="font-poppins md:text-3xl text-2xl mb-4 aos-init aos-animate text-white"> <span className="px-2 py-0 text-2xl">#1 Ghostwriting Company</span></h3>
                            <FadeIn>
                                <h1 className="font-poppins uppercase text-3xl md:text-3xl text-white font-bold">
                                    Pine Book Writing Services
                                </h1>
                            </FadeIn>
                            {/* <WavyText text="DO YOU HAVE A MANUSCRIPT READY TO BE PUBLISHED?" replay={true} style={{ color: 'white' }} className="font-poppins text-3xl md:text-5xl text-white font-bold" /> */}
                            {/* <FadeIn> */}
                            <p className="text-xl text-white pt-4">
                                Pine Book Writing provides expert writing services to help you produce captivating chapters of your book. Crafting a compelling book requires a unique skill set. That's why we offer professional book writing services to meet your specific needs. Our expert team of writers delivers flawless final products that uplift your writing to new heights. </p>
                            <h4 className="font-poppins text-2xl mt-8 text-white uppercase font-bold">Our Credibility</h4>
                            {/* </FadeIn> */}
                            <div className="flex justify-start items-center mt-8 gap-2 md:gap-x-8 client-logo-sec">
                                <Swiper
                                    spaceBetween={30}
                                    slidesPerView={4}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    onSwiper={(swiper) => (swiperRef2.current = swiper)}
                                    className="mySwiper"
                                    modules={[Navigation, Autoplay, Pagination]}
                                    breakpoints={{
                                        "@0.00": {
                                            slidesPerView: 3,
                                            spaceBetween: 10,
                                        },
                                        "@1.00": {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                        },
                                    }}
                                >
                                    {clientLogos.map((logo, index) => (
                                        <SwiperSlide>
                                            <Link key={index} href={logo.href} target="_blank">
                                                <Image
                                                    alt={logo.alt}
                                                    src={logo.src}
                                                    width={logo.width}
                                                    height={logo.height}
                                                />
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>



                        {/* <div>

                            <div className="w-full rounded-2xl px-8 py-8 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border-gray-100 relative">
                                <Image
                                    className="text-center header-form-off-badge"
                                    src={"/images/form-badge.png"}
                                    width={130}
                                    height={130}
                                    loading="lazy"
                                ></Image>
                                <div className="text-center">
                                    <h4 className="font-poppins text-white text-2xl md:text-2xl">Avail Discount</h4>
                                    <h5 className="font-poppins text-white text-lg mb-3">Exclusive Offer: Expert Book Writing at  <span className="text-blink">50% Off</span> – <br></br>Your Story Deserves to be Heard!</h5>
                                </div>
                                <div>

                                </div>
                                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="fullName"
                                            onChange={handleChange}
                                            value={fullName}
                                            required
                                            className="pl-4 pr-4 py-2 border rounded-xl w-full text-sm shadow-xl"
                                            placeholder="Enter your Name"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            onChange={handleChange}
                                            value={phoneNumber}
                                            name="phoneNumber"
                                            required
                                            className="pl-4 pr-4 py-2 border rounded-xl w-full text-sm shadow-xl"
                                            placeholder="Enter your Phone"
                                        />
                                        {phoneError && (
                                            <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="email"
                                            onChange={handleChange}
                                            value={email}
                                            required
                                            className="pl-4 pr-4 py-2 border rounded-xl w-full text-sm shadow-xl"
                                            placeholder="Enter your Email"
                                        />
                                    </div>
                                    <div className="relative">
                                        <textarea
                                            className="pl-4 pr-4 py-2 border rounded-xl w-full text-sm shadow-xl"
                                            rows={3}
                                            onChange={handleChange}
                                            value={message}
                                            required
                                            placeholder="Enter your Message"
                                            name="message"
                                        ></textarea>
                                        <div
                                            className="absolute inset-y-0 left-0 pl-3 pt-3 
                                                flex items-start  
                                                pointer-events-none"
                                        ></div>
                                    </div>
                                    {showSuccess && (
                                        <p className="px-1 py-1 text-green-700">
                                            Form submitted Successfully!
                                        </p>
                                    )}
                                    <button
                                        className="w-full p-4 py-2 text-white uppercase header-submit-btn rounded-xl shadow-xl text-xl"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div> */}


                        <div>
                            <div className="md:px-7 md:py-7 w-full rounded-2xl px-8 py-8 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border-gray-100 relative">
                                {/* <Image
                                    className="text-center header-form-off-badge"
                                    src={"/brand-img/christmas-tag.png"}
                                    width={140}
                                    height={180}
                                    loading="lazy"
                                ></Image> */}
                                {/* <Image
                                    className="text-center christmas-cap-form"
                                    src={"/brand-img/christmas-cap.png"}
                                    width={300}
                                    height={300}
                                    loading="lazy"
                                ></Image> */}
                                <div className="text-start">
                                    <h4 className="font-poppins text-white text-2xl md:text-3xl font-bold christmas-banner-title">
                                        Avail Discount
                                    </h4>
                                    <h5 className="font-poppins text-white text-lg mb-3 christmas-banner-desc">
                                        Holiday Season Sale: Expert Book Writing at{" "}
                                        <span className="text-blink">50% Off</span> – <br />
                                        Your Story Deserves to be Heard!
                                    </h5>
                                </div>
                                <div className="">
                                    <div className="col-span-2 w-full relative">
                                        <form className="flex flex-col gap-3 justify-start items-start" onSubmit={handleSubmit}>
                                            <div class="grid gap-3 md:grid-cols-2 w-full">
                                                <div className="relative w-full">
                                                    <input
                                                        type="text"
                                                        name="fullName"
                                                        onChange={handleChange}
                                                        value={fullName}
                                                        required
                                                        className="pl-4 pr-4 py-2 border rounded-md w-full text-sm shadow-xl"
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
                                                        className="pl-4 pr-4 py-2 border rounded-md w-full text-sm shadow-xl"
                                                        placeholder="Enter your Phone"
                                                    />
                                                    {phoneError && (
                                                        <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="relative w-full">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    onChange={handleChange}
                                                    value={email}
                                                    required
                                                    className="pl-4 pr-4 py-2 border rounded-md w-full text-sm shadow-xl"
                                                    placeholder="Enter your Email"
                                                />
                                            </div>
                                            <div className="relative w-full">
                                                <textarea
                                                    className="pl-4 pr-4 py-2 border rounded-md w-full text-sm shadow-xl"
                                                    rows={3}
                                                    onChange={handleChange}
                                                    value={message}
                                                    required
                                                    placeholder="Enter your Message"
                                                    name="message"
                                                ></textarea>
                                            </div>
                                            <div class="flex items-start mb-2">
                                                <div class="flex items-center h-5">
                                                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                                </div>
                                                <label for="remember" class="ms-2 text-sm font-medium text-gray-100 dark:text-gray-100">By checking this box, I consent to received text messages related to listing updates from Pine Book Writing and Publishing. you can reply "STOP" at any time to opt-out. Message and data rates may apply. Message Frequency may vary, text Help to <a href="tel:(866) 841-7463" className="text-blue-400">(866) 841-7463</a>  for assistance. For more information, please refer to our  <Link href="privacy-policy" target="_blank" className="text-blue-400">PRIVACY POLICY</Link> and SMS <Link href="terms-and-conditions" target="_blank" className="text-blue-400"> TERMS and CONDITIONS </Link> on our website</label>
                                            </div>
                                            {showSuccess && (
                                                <p className="px-1 py-1 text-green-700">
                                                    Form submitted Successfully!
                                                </p>
                                            )}
                                            <div className="w-full">
                                                <button
                                                    className="w-full p-4 py-1 text-white uppercase header-submit-btn rounded-md shadow-xl text-xl"
                                                    type="submit"
                                                >
                                                    Submit
                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                    {/* <div className="col-span-1 flex justify-center items-center">
                                        <Image
                                            className="text-center christmas-banner-img"
                                            src={"/brand-img/crishtmis-img.png"}
                                            width={250}
                                            height={500}
                                            loading="lazy"
                                        ></Image>
                                    </div> */}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            {/* </section> */}

        </>
    );
}
