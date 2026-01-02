import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import "swiper/css/effect-coverflow";
import { FaPhoneVolume } from "react-icons/fa";
import CTAButton from "../components/CTAButton";
import { FaCheck } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp, faLocation } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { faPhone, faEnvelope, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Services_Banner_Form from "../components/Services_Banner_Form";
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import ServicesBook_Popup from "../components/ServicesBook_Popup";
import LazyYouTube from "../components/LazyYouTube"; 
import SnowFall from "../components/SnowFall"; // Import the SnowFall component




// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';





import {
    Autoplay,
    Pagination,
    Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { faArrowRight, faArrowLeft, faPlusCircle, faCheckCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faArrowLeft, faArrowRight);


import { Swiper, SwiperSlide } from "swiper/react";


//   const [isOpen, setIsOpen] = useState(false);



const handleOpenChat = () => {
    window.zE && window.zE('webWidget', 'open');
};


export default function Home({ isOpen, onClose }) {

    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const portfolioBooks = [
        "/images/portfolio-1.png",
        "/images/portfolio-2.png",
        "/images/portfolio-3.png",
        "/images/portfolio-4.png",
        "/images/portfolio-5.png",
        "/images/portfolio-6.png",
        "/images/portfolio-7.png",
        "/images/portfolio-8.png",
    ];

    // Object
    const videoClient = [
        {
            id: 1,
            src: "https://www.youtube.com/embed/xUTyiqPY6Oo",
            type: "video/mp4",
            BookTitle: "Love And Laughter",
            Consultant: "Damon Peters",
            ProjectManager: "Amara Johnson & Ryan Peters",
            clientname: "Lesvi Ferrel"
        },

        {
            id: 2,
            src: "https://www.youtube.com/embed/QMirTma0Wf4",
            type: "video/mp4",
            BookTitle: "Rising 2 B’Come",
            Consultant: "Damon Peters",
            ProjectManager: "Amara Johnson & Melissa",
            clientname: "Stacey L. Joiner"
        },
        {
            id: 3,
            src: "https://www.youtube.com/embed/Tv3_r0EMVH4",
            type: "video/mp4",
            BookTitle: "Stewart, BC History",
            Consultant: "Damon Peters",
            ProjectManager: "Amara Johnson & Ryan Peters",
            clientname: "Robert A. Eckess"
        },
        {
            id: 4,
            src: "https://www.youtube.com/embed/fX2J8iMy4z4",
            type: "video/mp4",
            BookTitle: "Free Yourself From Pain",
            Consultant: "Damon Peters",
            ProjectManager: "Ryan Peters",
            clientname: "Lesvi Ferrel"
        },
        {
            id: 5,
            src: "https://www.youtube.com/embed/gWW43Tfa8gA",
            type: "video/mp4",
            BookTitle: "The 2023 Elections in Nigeria: Actors, Intrigues, and Winners",
            Consultant: "Damon Peters",
            ProjectManager: "Lia Sinclair & Ryan Peters",
            clientname: "Edward Agbai"
        },
        {
            id: 6,
            src: "https://www.youtube.com/embed/6T96-bq6_g8",
            type: "video/mp4",
            BookTitle: "Thorns are More Deadly",
            Consultant: "Steve Hayes",
            ProjectManager: "Lia Sinclair & Ryan Peters",
            clientname: "Katie Loftis"
        },
        {
            id: 7,
            src: "https://www.youtube.com/embed/pPa-W6unmv0",
            type: "video/mp4",
            BookTitle: "Who will Love me?",
            Consultant: "Damon Peters",
            ProjectManager: "Amara Johnson & Ryan Peters",
            clientname: "John B. Micheal"
        },
        {
            id: 8,
            src: "https://www.youtube.com/embed/7X_BkleuUsA",
            type: "video/mp4",
            BookTitle: " I am a BOY | i am a GIRL",
            Consultant: "Damon Peters",
            ProjectManager: "Ryan Peters",
            clientname: "Pamela Harry"
        },
        {
            id: 9,
            src: "https://www.youtube.com/embed/mGLHZO-DjRg",
            type: "video/mp4",
            BookTitle: "The Well of Hopes: Bloodlines",
            Consultant: "Damon Peters",
            ProjectManager: "Lia Sinclair & Ryan Peters",
            clientname: "Angel Raices"
        },
        {
            id: 10,
            src: "https://www.youtube.com/embed/P91rheXIDzk",
            type: "video/mp4",
            BookTitle: "Fate: The Alpha King and HisFate: The Alpha King and His Unexpected Mate",
            Consultant: "Damon Peters",
            ProjectManager: "Samantha Lewis & Ryan Peters",
            clientname: "Ashlee Griffin"
        },
        {
            id: 11,
            src: "https://www.youtube.com/embed/IsRZv2mR4u0",
            type: "video/mp4",
            BookTitle: "Vetting the Book of Enoch",
            Consultant: "Damon Peters",
            ProjectManager: "Lia Sinclair",
            clientname: "Christopher Allen"
        },
        {
            id: 12,
            src: "https://www.youtube.com/embed/Jwr-u5HQ9Fg?si=PEZvbrKNR1Y0xUH4",
            type: "video/mp4",
            BookTitle: "There's no middle ground, You will either RUN TO or RUN FROM this book",
            Consultant: "Damon Peters",
            ProjectManager: "Lia Sinclair",
            clientname: "John Bowman"

        },
        {
            id: 13,
            src: "https://www.youtube.com/embed/p3dCJ_KdqHk?si=il3lcE_7bLVJDGmp",
            type: "video/mp4",
            BookTitle: "Ellas's Songs",
            Consultant: "Damon Peters",
            ProjectManager: "Amara Johnson & Lia Sinclair",
            clientname: "David Van Fleet"
        },
        {
            id: 14,
            src: "https://www.youtube.com/embed/VsO2MhLTZPk",
            type: "video/mp4",
            BookTitle: "Go Ask Sabrina",
            Consultant: "Damon Peters",
            ProjectManager: "Lia Sinclair",
            clientname: "Sabrina Biamby"
        },
        {
            id: 15,
            src: "https://www.youtube.com/embed/_a6emmDhe7c",
            type: "video/mp4",
            BookTitle: "The Other Side (Part 1 & Part 2)",
            Consultant: "Steve Hayes",
            ProjectManager: "Lia Sinclair",
            clientname: "Unique Moore"
        },
    ]


    const [openIndex, setOpenIndex] = useState(null);

    const faqItems = [
        {
            question: 'How long will it take to write my book?.',
            answer:
                'The completion time of your books writing entirely depends on its complexity and length. However, on average, it usually takes 5 to 8 months (sometimes a year). But we always discuss and agree on the timeline after receiving your projects details and requirements.',
        },
        {
            question: 'Can I hire Pine Book Writing to assist with some parts or chapters of my book?',
            answer:
                'Absolutely! We are flexible with it. So, we can help you with your specific chapter(s), editing sections, or writing your whole book. We are available to help at any part of your book.',
        },
        {
            question: 'Why should I hire Pine Book Writing for professional writing?',
            answer:
                'At Pine Book Writing, we’ve many reasons that easily convince authors to hire us. We combine innovation, professionalism, and personalized care, providing each service. Our team writes using appropriate language and format while keeping it in your voice, and provides support at every step.',
        },
        {
            question: 'Do I maintain ownership and content rights of what you create for me?',
            answer:
                'Absolutely! you own anything we create for you from writing to publishing. So, once we finish our work we deliver all the rights to you and do not make any open or hidden claims.',
        },
        {
            question: 'How does Pine Book Writing help me with my book project?',
            answer:
                'Our team will help you if you have an idea but can not put it into words. We listen to you, make a plan, then write for you, turning your idea into a professionally written book, one chapter at a time.',
        },
        {
            question: 'How much does Pine Book Writing Charge to write a book?',
            answer:
                'the cost of writing completely depends on what type of writing service you require and what plan you have chosen. Feel free to contact our customer service team and get a free and transparent quote!',
        },
    ];

    const swiperRef = useRef();



    return (

        <>
            <Head>
                <title>Expert Book Publishing Services | Pine Book Writing</title>
                <link rel="canonical" href="https://www.pinebookwriting.com/book-services" />
                <meta
                    name="description"
                    content="Discover the art of book publishing with our Expert Book Publishing Services. Our expert team guides you through the process, from editing to distribution."
                />
                <meta name="google-site-verification" content="ze4i-BWHkh7f9iANJUJfoWbXrFcmFC9r2fCsoz1KZA8" />

                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>

            <header className=" py-2 z-20">
                <div className="width-container container mx-auto flex items-center justify-between px-2 flex-wrap md:justify-strat">
                    <div className="head-logo">
                        <Link className="text-center" href="/book-services">
                            <Image alt="LOGO" src={'/images/PBWChristmas.gif'} width={200} height={80} loading="lazy" />
                        </Link>
                    </div>

                    <div className="flex items-center  justify-end md:flex-row gap-3 flex-col-reverse">
                        <button className=" btn-a items-center bg-gray-800 md:py-2 py-4 md:mr-2 mr-0 px-3 focus:outline-none hover:bg-gray-700">
                            <Link className="" href={'tel:(866)-841-7463'}>(866)-841-7463</Link>
                        </button>

                        <button className=" hidden btn-a items-center bg-gray-800 md:mr-2 mr-0 md:py-2 py-4 px-3 focus:outline-none hover:bg-gray-700 md:block">
                            <Link className="" href={'mailto:support@pinebookwriting.com'}>support@pinebookwriting.com</Link>
                        </button>
                    </div>
                </div>
            </header>
            <SnowFall />
            <section className="bg-[url(/images/banne-main.jpg)] bg-no-repeat bg-cover overflow-hidden md:py-24 py-10">
                <div className="container mx-auto width-container">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                        <div className="px-4 md:px-0">
                            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 md:leading-normal font-poppins">Professional Book Writing Services - For Every Story, Every Genre</h1>
                            <p className="text-gray-300 mb-10 font-poppins">Have a story idea and want to turn it into a most-loved book? Pine Book Writing provides professional book writing services to assist both new and experienced authors. Whatever genre you want to work on, we help create your book with great care and creativity. Our team of expert writers is ready to help you write while maintaining your unique voice. Contact our experts today!</p>
                            <Link href="javascript:void(0)" className="border-2 rounded-2xl  text-white px-6 mr-4 py-3 hover:bg-[#1a8273] transition duration-300" onClick={() => openModal()}>Get a Quote</Link>
                            <Link href="javascript:void(0)" className="border-2 rounded-2xl  text-white md:px-6 px-2 py-3 hover:bg-[#1a8273] transition duration-300" onClick={() => openModal()}>Free Consulation</Link>
                            <div className="bage-images flex items-center md:justify-between flex-wrap gap-y-4 gap-x-4 mt-10 ">
                                <Image src="/images/Google Partner.png" alt="Book Publishing" width={130} height={100} className="mr-4" />
                                <Image src="/images/BBB.png" alt="Book Publishing" width={130} height={100} className="mr-4" />
                                <Image src="/images/s3.png" alt="Book Publishing" width={130} height={130} className="mr-4" />
                                <Image src="/images/s4.png" alt="Book Publishing" width={100} height={130} className="" />
                                <Image src="/images/s6.png" alt="Book Publishing" width={100} height={100} className="" />
                            </div>
                        </div>
                        <div className="">

                            <Services_Banner_Form />
                        </div>


                    </div>
                </div>
            </section>

            <section className="brnd-slider bg-black overflow-hidden">
                <div className="container mx-auto width-container">
                    <div className="container mx-auto position-relative">
                        <div className="bnd-slider flex py-7 justify-center">
                            <Swiper
                                className="px-20 gap-x-32"
                                spaceBetween={15}
                                slidesPerView={6}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={false}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                modules={[Navigation, Autoplay, Pagination]}
                                breakpoints={{
                                    "@0.00": {
                                        slidesPerView: 3,
                                        spaceBetween: 10,

                                        navigation: {
                                            enabled: false,
                                        },
                                        pagination: true,
                                        navigation: true,
                                    },
                                    "@1.00": {
                                        slidesPerView: 6,
                                        spaceBetween: 15,
                                    },
                                }}
                            >
                                <SwiperSlide className="mx-auto text-center">
                                    <div className="flex justify-center">
                                        <a href="#">
                                            <Image
                                                alt="LOGO"
                                                src={"/images/Smashwords.png"}
                                                width={110}
                                                height={80}
                                                className="custom-logo-size"
                                                loading="lazy"
                                            />
                                        </a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="flex justify-center">
                                        <a href="#">
                                            <Image
                                                alt="LOGO"
                                                src={"/images/Barnes-and-Noble.png"}
                                                width={70}
                                                height={80}
                                                loading="lazy"
                                            />
                                        </a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="flex justify-center">
                                        <a href="#">
                                            <Image
                                                alt="LOGO"
                                                src={"/images/Google-Books.png"}
                                                width={100}
                                                height={80}
                                                loading="lazy"
                                            />
                                        </a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="flex justify-center">
                                        <a href="#">
                                            <Image
                                                alt="LOGO"
                                                src={"/images/Draft2digital.png"}
                                                width={100}
                                                height={120}
                                                loading="lazy"
                                                className="custom-logo-size"
                                            />
                                        </a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="flex justify-center">
                                        <a href="#">
                                            <Image
                                                alt="LOGO"
                                                src={"/images/logo5.png"}
                                                width={100}
                                                height={80}
                                                loading="lazy"
                                            />
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex justify-center">
                                        <a href="#">
                                            <Image
                                                alt="LOGO"
                                                src={"/images/logo6.png"}
                                                width={100}
                                                height={80}
                                                loading="lazy"
                                            />
                                        </a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="flex justify-center">
                                        <a href="#">
                                            <Image
                                                alt="LOGO"
                                                src={"/images/logo7.png"}
                                                width={100}
                                                height={80}
                                                loading="lazy"
                                            />
                                        </a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="flex justify-center">
                                        <a href="#">
                                            <Image
                                                alt="LOGO"
                                                src={"/images/logo8.png"}
                                                width={100}
                                                height={80}
                                                loading="lazy"
                                            />
                                        </a>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                {/* </AnimateFade> */}
            </section>


            <section className="md:py-16 py-10 bg-[#f4f3ec]">
                <div className="container mx-auto width-container">
                    <div className="flex">
                        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                            <div className="px-4 md:px-0">
                                <div className="mb-6">
                                    <h2 className="text-3xl md:text-4xl font-black mb-4 font-poppins">Pine Book Writing – A Reliable Book Writing Company</h2>
                                    <p className="font-poppins">At Pine Book Writing, we believe every story matters. We started our journey with a strong vision - to help new and seasoned authors achieve continuous success in the literary world without worrying about work procrastination, lack of expertise and time. We have a large team of writers on board with a decade-long experience writing for many book genres. We don't leave our clients/authors alone, as our team works jointly on every step to produce something valuable to share.</p>
                                </div>

                                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                    <li className="flex gap-1 items-center font-poppins"><FaCheck />
                                        <p className="text-black">Experienced Team of Writers</p></li>
                                    <li className="flex gap-1 items-center font-poppins"><FaCheck />
                                        <p className="text-black">Writing for Every Genre</p></li>
                                    <li className="flex gap-1 items-center font-poppins"><FaCheck />
                                        <p className="text-black">Collaborative Work Process</p></li>
                                    <li className="flex gap-1 items-center font-poppins"><FaCheck />
                                        <p className="text-black">Swift Turnaround Time</p></li>
                                    <li className="flex gap-1 items-center font-poppins"><FaCheck />
                                        <p className="text-black"> Affordable Pricing Plans</p></li>
                                    <li className="flex gap-1 items-center font-poppins"><FaCheck />
                                        <p className="text-black">100% Original Content</p></li>
                                </ul>

                                <div className="flex button mt-5">
                                    <Link href="javascript:void(0)" className="border-2 rounded-full bg-[#1a8273] hover:bg-gray-200 hover:text-[#1a8273] text-white px-3 mr-4 py-3 font-poppins  transition duration-300" onClick={() => openModal()}>Get a Quote</Link>

                                    <Link href="javascript:void(0)" className="border-2 border-[#1a8273]  rounded-full bg-gray-200 hover:text-[#1a8273] text-gray-700 px-3 mr-4 py-3 font-poppins  transition duration-300" onClick={() => openModal()}>Free Consulation</Link>

                                </div>
                            </div>


                            <div className="mt-10 px-4 md:px-0 mx-auto">
                                <Image src="/images/struglee.png" alt="Book Publishing Services" width={400} height={400} className="" />
                            </div>

                        </div>


                    </div>

                </div>
            </section>

            <section className="bg-[#166b7e] md:py-16 cta px-4 md:px-0">
                <div className="container mx-auto width-container grid grid-cols-12 items-center">

                    <div className="col-span-12 md:col-span-8 mt-10 md:mt-0">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 font-poppins text-white">Ready to Start Writing Your Book? Let’s Help You Begin!</h2>
                        <p className="text-white">Just share your idea with us if you’re ready to write. Our team of professional writers will handle the rest. We'll help you write, develop, and polish your book step by step, with confidence!</p>
                        <div className="flex button mt-5">
                            <Link href="javascript:void(0)" className="border-2 rounded-full bg-[#1a8273] hover:bg-gray-200 hover:text-[#1a8273] text-white px-3 mr-4 py-3 font-poppins  transition duration-300" onClick={() => openModal()}>Get a Quote</Link>

                            <Link href="javascript:void(0)" className="border-2 border-[#1a8273]  rounded-full bg-gray-200 hover:text-[#1a8273] text-gray-700 px-3 mr-4 py-3 font-poppins  transition duration-300" onClick={() => openModal()}> Free Consulation </Link>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-4 mt-10 md:mt-0">
                        <Image
                            src="/images/wri-edi-simg.png"
                            alt="Book Publishing Services"
                            width={400}
                            height={400}
                            className="ml-auto"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 md:py-16 py-10">
                <div className="container mx-auto width-container">

                    <h2 className="md:text-4xl text-3xl font-black md:mb-4 font-poppins text-center">Our Simple 4-Step Process for Every Book Project
                    </h2>
                    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">

                            <div class="group flex flex-col justify-center hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 rounded-xl p-4 md:p-7" href="#">
                                <Image src="/images/placement.webp" alt="Ghost Writing" width={60} height={60} />
                                <div class="mt-5">
                                    <h3 class="group-hover:text-gray-600 text-2xl font-semibold text-gray-800 uppercase">Order Placement</h3>
                                    <p class="mt-1 text-gray-600">Start by telling us about the concept of your book and what you need. Before we move forward, our team meticulously checks everything and approves your order to make sure we're all on the same page.</p>

                                </div>
                            </div>

                            <div class="group flex flex-col justify-center hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 rounded-xl p-4 md:p-7" href="#">
                                <Image src="/images/feedback.webp" alt="Ghost Writing" width={60} height={60} />
                                <div class="mt-5">
                                    <h3 class="group-hover:text-gray-600 text-2xl font-semibold text-gray-800 uppercase">Outline Approval</h3>
                                    <p class="mt-1 text-gray-600">We make a detailed plan based on your idea. You will evaluate and approve the outline, which means you will have complete control over the path of your book from the start.</p>

                                </div>
                            </div>


                            <div class="group flex flex-col justify-center hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 rounded-xl p-4 md:p-7" href="#">
                                <Image src="/images/revision.webp" alt="Ghost Writing" width={60} height={60} />
                                <div class="mt-5">
                                    <h3 class="group-hover:text-gray-600 text-2xl font-semibold text-gray-800 uppercase">Chapter-Wise Delivery</h3>
                                    <p class="mt-1 text-gray-600">Get your content in small, easy-to-read chapters. You can read, suggest revisions, and stay up to date on the writing process to make sure your vision is portrayed precisely.</p>

                                </div>
                            </div>


                            <div class="group flex flex-col justify-center hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 rounded-xl p-4 md:p-7" href="#">
                                <Image src="/images/publishing.webp" alt="Ghost Writing" width={60} height={60} />
                                <div class="mt-5">
                                    <h3 class="group-hover:text-gray-600 text-2xl font-semibold text-gray-800 uppercase">Publishing</h3>
                                    <p class="mt-1 text-gray-600">When your manuscript is done and polished, we help you with professional publishing by preparing your book for print, formatting it, and publishing it on major platforms like Amazon, Google Books, and others.</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-gray-100 md:pt-16 Benefits bg-[url(/images/men-banner.jpg)] bg-no-repeat bg-cover">
                <div className="mx-auto width-container">
                    <div className="grid grid-cols-12 gap-8 items-center">

                        <div className="benefit-item col-span-0 md:col-span-4">
                            <Image src={"/images/men.webp"} alt="Expertise" width={440} height={771} className="" />
                        </div>

                        <div className="benefit-item p-6 col-span-12 md:col-span-8 md:max-w-4xl">
                            <h3 className="md:text-4xl text-3xl font-black mb-4 font-poppins text-white">Don’t Let Your Story Fall Flat – Acquire Experts' Help!</h3>
                            <p className="text-xl font-black mb-4 font-poppins text-white">You must have great ideas to write. But they can lose their charm and even the real message if not written well. That's why Pine Book Writing jumped into the industry - to help authors present their messages and stories in a way they actually want. Our team of professionals works diligently and creatively to make your work polished, error-free, and match your audience's expectations. Get your work done in a professional manner, whether you need to write a resume, script, website content, or a book. We make sure your story is written in a tone and flow that it actually deserves.</p>


                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:mt-10">

                                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                                    <div className="shadow rounded-full p-4 mb-4 h-[80px] w-[80px] flex justify-center items-center mx-auto bg-[#3d5a80]">
                                        <Image src="/images/about_img1.png" alt="Expertise" width={250} height={250} className="h-10 w-10 rounded-lg bg-[#3d5a80]" />
                                    </div>
                                    <h4 className="font-bold mt-2 text-[#3d5a80] text-xl">Quality Over Anything</h4>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                                    <div className="shadow rounded-full p-4 mb-4 h-[80px] w-[80px] flex justify-center items-center mx-auto bg-[#3d5a80]">
                                        <Image src="/images/about_img2.png" alt="Expertise" width={250} height={250} className="h-10 w-10 rounded-lg bg-[#3d5a80]" />
                                    </div>
                                    <h4 className="font-bold mt-2 text-[#3d5a80] text-xl">Timely Delivery</h4>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                                    <div className="shadow rounded-full p-4 mb-4 h-[80px] w-[80px] flex justify-center items-center mx-auto bg-[#3d5a80]">
                                        <Image src="/images/about_img3.png" alt="Expertise" width={250} height={250} className="h-10 w-10 rounded-lg bg-[#3d5a80]" />
                                    </div>
                                    <h4 className="font-bold mt-2 text-[#3d5a80] text-xl">Cost-Effective Packages</h4>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                                    <div className="shadow rounded-full p-4 mb-4 h-[80px] w-[80px] flex justify-center items-center mx-auto bg-[#3d5a80]">
                                        <Image src="/images/about_img4.png" alt="Expertise" width={250} height={250} className="h-10 w-10  rounded-lg bg-[#3d5a80]" />
                                    </div>
                                    <h4 className="font-bold mt-2 text-[#3d5a80] text-xl">Royalties Delivered</h4>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <section className="portfolio-books py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-4xl text-3xl font-black md:mb-20 mb-10 font-poppins text-center">
                        See Our Portfolio - Real Stories. Real Authors. Real Results.
                    </h2>

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            480: { slidesPerView: 2 }, 
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay]}
                    >
                        {portfolioBooks.map((src, i) => (
                            <SwiperSlide key={i}>
                                <div className="flex justify-center">
                                    <Image
                                        src={src}
                                        alt={`Portfolio Book ${i + 1}`}
                                        width={200}
                                        height={200}
                                        className="w-auto h-auto object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className="bg-[url(/images/cta-bannn.jpg)] bg-no-repeat bg-cover py-16 px-4 md:px-0 cta">
                <div className="container width-container text-center items-center max-w-5xl">

                    <div className="md:mt-0 text-center ">
                        <h2 className="md:text-4xl text-3xl font-black mb-4 font-poppins text-white">Don’t Wait – Start Fulfilling Your Writing & Publishing Dream Today!</h2>
                        <p className="text-white">Your story matters, and your hesitation may hold you back from success. Start your dream fulfillment today with the right team. We've made writing, editing, and publishing easier for every author of every genre.</p>
                        <div className="flex button mt-5 mx-auto justify-center ">
                            <Link href="javascript:void(0)" className="border-2 rounded-full bg-[#1a8273] hover:bg-gray-200 hover:text-[#1a8273] text-white px-3 mr-4 py-3 font-poppins  transition duration-300" onClick={() => openModal()}>Get a Quote</Link>

                            <Link href="javascript:void(0)" className="border-2 border-[#1a8273]  rounded-full bg-gray-200 hover:text-[#1a8273] text-gray-700 px-3 mr-4 py-3 font-poppins  transition duration-300" onClick={() => openModal()}>Free Consulation </Link>
                        </div>
                    </div>


                </div>
            </section>


            <section className='sec-test max-w-screen-xl mx-auto md:py-20 py-10 px-4 md:px-0'>
                <div className="text-center max-w-3xl mx-auto md:mb-10 mb-5">
                    <h2 className="font-poppins text-3xl text-[#1a8273] font-semibold md:text-3xl uppercase">
                        Our Success Stories
                    </h2>
                    <p className="text-base md:text-lg py-4">
                        Explore our Success Stories to see how Pine Book Writing has empowered authors in their
                        self-publishing journey and stands out among self-book publishers.
                    </p>
                </div>
                <div className='testimonials-wrap grid grid-cols-1 md:grid-cols-3 gap-10'>

                    {videoClient.map((videoClient) => {
                        // Extract YouTube video ID from the URL
                        const videoUrl = new URL(videoClient.src);
                        const videoId = videoUrl.pathname.split('/embed/')[1].split('?')[0];

                        return (
                            <div key={videoClient.id} className="mb-8 max-w-xl mx-auto border p-4 rounded">
                                <h2 className="font-bold text-xl text-black mb-2">{videoClient.clientname}</h2>

                                <div className="py-4">
                                      <LazyYouTube videoId={videoId} />
                                </div>


                                <h4 className="text-black">
                                    <span className="font-bold leading-normal">Book Title:</span> {videoClient.BookTitle}
                                </h4>
                                <h4 className="text-black">
                                    <span className="font-bold leading-normal">Consultant:</span> {videoClient.Consultant}
                                </h4>
                                <h4 className="text-black">
                                    <span className="font-bold leading-normal">Project Manager:</span> {videoClient.ProjectManager}
                                </h4>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="bg-gray-100 md:py-16 py-10 faq">
                <div className="text-center">
                    <h2 className="font-poppins md:text-4xl text-[#1a8273] font-semibold text-3xl uppercase">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base md:text-lg py-4">
                        Have a look at a few common questions and their answers that most authors often ask.
                    </p>
                </div>
                <div className="container mx-auto p-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="border border-gray-300 rounded mb-4 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center px-4 py-3 bg-[#1a8273] text-left text-white font-semibold font-poppins"
                            >
                                <span>{item.question}</span>
                                {openIndex === index ? (
                                    <FaChevronUp className="text-white hover:text-black ml-2" />
                                ) : (
                                    <FaChevronDown className="text-white hover:text-black ml-2" />
                                )}
                            </button>

                            <div
                                className={`transition-max-height duration-700 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0 overflow-hidden'
                                    }`}
                            >
                                <div className="p-4 bg-white text-gray-700">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section
                className="ser-cta-banner bg-no-repeat bg-cover bg-center text-white relative overflow-visible py-14  md:mb-16"
                style={{ backgroundImage: `url(/brand-img/bg-banner.png)` }}>
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4  mx-auto relative ">

                    <div className="md:col-span-3 hidden md:flex justify-center md:justify-start relative z-10">
                        <Image
                            src="/images/lef.webp"
                            alt="Book 1"
                            className="l-book absolute -top-20 md:-top-30"
                            height={600}
                            width={600}
                        />
                    </div>

                    <div className="md:col-span-6 text-center px-4">
                        <h2 className="font-poppins text-2xl text-[#98caa9] font-semibold md:text-3xl uppercase">
                            Let’s Bring Your Story to Life Together—Get Started Now!
                        </h2>
                        <p className="text-base md:text-lg py-4">
                            Share the details of what you want us to write about, and our professional writers will help you write, edit, and publish your work.
                        </p>

                        <div className="cta-btns flex flex-col sm:flex-row items-center gap-4 justify-center">
                            {/* <CTAButton /> */}

                            <a
                                href="javascript:void(0)"
                                className="bg-transparent text-white px-3 py-2 border border-white rounded-full flex items-center gap-2 hover:bg-gray-200 hover:text-black transition" onClick={() => openModal()}>
                                Get a Quote <MdKeyboardDoubleArrowRight className="inline" />
                            </a>


                            <a
                                href="tel:(866) 841-7463"
                                className="text-white flex items-center gap-2"
                            >
                                <FaPhoneVolume className="inline" /> (866) 841-7463
                            </a>

                            <a
                                href={'javascript:void(0)'}
                                className="bg-transparent text-[#fff] px-3 py-2 border border-white rounded-full flex items-center gap-2 hover:bg-gray-200 hover:text-black cta-btn-1 transition" onClick={() => openModal()}>
                                Free Consulation
                            </a>
                        </div>
                    </div>


                </div>
            </section>

            <footer className="text-white body-font">
                <div className="container px-5 pt-10 pb-10 md:pt-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col position-relative">
                    <div className="lg:w-1/3 md:w-1/2 w-full flex-shrink-0 md:mx-20  mx-auto text-center md:text-left footer-line relative">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <Image src={"/images/writing-logo.png"} width={250} height={200} className="mb-2"></Image>
                        </a>
                        <p className="mt-2 text-sm text-white leading-7">
                            Pine Book Writing is a team of passionate book writers and publishers capable of helping authors write delightful stories and publish their work on popular online platforms. Our streamlined process and dedicated support make our services a realistic and rewarding experience for any author.
                        </p>
                    </div>

                    <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/2 md:w-1/2 w-full px-4">
                            <h2 className="title-font text-white tracking-widest text-2xl md:text-2xl mb-3 font-poppins">
                                Contact Info
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link
                                        href="tel:8668417463"
                                        className="text-white text-md hover:text-white flex justify-center md:justify-start"
                                    >
                                        <FontAwesomeIcon icon={faPhone} className="me-3" />
                                        (866) 841-7463
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link
                                        href="mailto:support@pinebookwriting.com"
                                        className="text-white hover:text-white text-md flex justify-center md:justify-start"
                                    >
                                        <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                                        {" "}
                                        support@pinebookwriting.com{" "}
                                    </Link>
                                </li>
                                <li className="flex items-center justify-center md:justify-start mt-3 text-md">
                                    <FontAwesomeIcon icon={faMapLocation} className="me-3" />
                                    <div>
                                        <p className="text-white text-md"><b className="text-white">CANADA ADDRESS: </b> R-10225 Yonge St, Suite #250, Richmond Hill, ON L4C 3B2</p>
                                    </div>
                                </li>
                                <li className="flex items-center justify-center md:justify-start mt-3 text-md">
                                    <FontAwesomeIcon icon={faMapLocation} className="me-3" />
                                    <div>
                                        <p className="text-white text-md"><b className="text-white">USA ADDRESS: </b>211 E 43rd St, 7th Floor, Suite #424, New York City, NY 10017</p>
                                    </div>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 w-full px-4 payment-card">
                            <h2 className="text-white tracking-widest text-2xl mb-3 font-poppins">
                                Accepted Payment Methods
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Image
                                        src={"/images/visa.webp"}
                                        width={250}
                                        height={200}
                                    ></Image>
                                </li>
                            </nav>
                            <div className="flex flex-row">
                                <Image
                                    className="mr-2"
                                    src={"/images/s2.png"}
                                    width={100}
                                    height={150}
                                ></Image>
                                <Image src={"/images/bage5.png"} width={100} height={200}></Image>
                            </div>
                            {/* <h2 className="title-font font-medium text-white tracking-widest text-3xl mb-3 font-poppins font-bold	mt-5">
              Brand By
            </h2>
            <Image src={"/images/brand-writing-logo.png"} width={200} height={200}></Image> */}
                        </div>
                    </div>
                </div>

                <div className="copyright-sec">
                    <div className="container text-center mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-white w-full md:text-center text-sm sm:text-left">
                            Copyright © 2026 |
                            <Link
                                href="/terms-and-conditions"
                                rel="noopener noreferrer"
                                className="text-white ml-1"
                                target="_blank"
                            >
                                Terms & Conditions |
                            </Link>
                            <Link
                                href="/privacy-policy"
                                rel="noopener noreferrer"
                                className="text-white ml-1"
                                target="_blank"
                            >
                                Privacy Policy {" "}
                            </Link>
                            {/* Powered by <span className="powered-by-text">Pine Book Writing Inc.</span> */}
                        </p>

                    </div>
                </div>
            </footer>



            <ServicesBook_Popup isOpen={isModalOpen} onClose={closeModal} />



        </>




    )
}
