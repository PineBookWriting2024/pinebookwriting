import useHubspotForm from "/hooks/hubspot";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import "swiper/css/effect-coverflow";
import Header from "../components/header";
import Hero from "../components/hero";
import Popup from "../components/popup";
import HeroForm from "../components/herform";
import HeroFormBookOffer from "../components/HerformBookOffer";
import Footer from "../components/Footer";
import BrandContact from "../components/BrandContactForm";


const handleOpenChat = () => {
  window.zE && window.zE('webWidget', 'open');
};

const steps = [
  { title: "Sign Up", imgTop: "/images/p-img-top.webp", imgBottom: "/images/p-img-bottom.webp", img: "/images/p-img.webp", img1: "/images/p-img1.webp", icon: "/images/Sign-Up.png" },
  { title: "Fill Questionnaires", imgTop: "/images/p-img-top.webp", imgBottom: "/images/p-img-bottom.webp", img: "/images/p-img.webp", img1: "/images/p-img1.webp", icon: "/images/Fill-Questionnaire.png" },
  { title: "Editorial Sessions", imgTop: "/images/p-img-top.webp", imgBottom: "/images/p-img-bottom.webp", img: "/images/p-img.webp", img1: "/images/p-img1.webp", icon: "/images/Editorial-Session.png" },
  { title: "Outline Creation", imgTop: "/images/p-img-top.webp", imgBottom: "/images/p-img-bottom.webp", img: "/images/p-img.webp", img1: "/images/p-img1.webp", icon: "/images/Book-Outline.png" },
  { title: "Weekly Drafts", imgTop: "/images/p-img-top.webp", imgBottom: "/images/p-img-bottom.webp", img: "/images/p-img.webp", img1: "/images/p-img1.webp", icon: "/images/Weekly-Draft.png" },
  { title: "Book Compilation", imgTop: "/images/p-img-top.webp", imgBottom: "/images/p-img-bottom.webp", img: "/images/p-img.webp", img1: "/images/p-img1.webp", icon: "/images/Book-Compilation.png" },
  { title: "Book Formatting", imgTop: "/images/p-img-top.webp", imgBottom: "/images/p-img-bottom.webp", img: "/images/p-img.webp", img1: "/images/p-img1.webp", icon: "/images/Book-Formatting.png" },
  { title: "Book Review", imgTop: "/images/p-img-top.webp", imgBottom: "/images/p-img-bottom.webp", img: "/images/p-img.webp", img1: "/images/p-img1.webp", icon: "/images/Book-Review.png" },
  // ... Add other steps similarly
];

const processItems = [
  { icon: '/images/Editing.png', text: 'Sign Up' },
  { icon: '/images/Proofreading.png', text: 'Fill Questionnaires' },
  { icon: '/images/Typesetting & Layout adjustment.png', text: 'Editorial Sessions' },
  { icon: '/images/Typesetting & Layout adjustment.png', text: 'Outline Creation' },
  { icon: '/images/Formatting.png', text: 'Weekly Drafts' },
  { icon: '/images/Cover Design.png', text: 'Book Compilation' },
  { icon: '/images/Cover Design.png', text: 'Book Formatting' },
  { icon: '/images/Publishing.png', text: 'Book Review' },
];


import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { A11y } from "swiper/modules";
import { faArrowRight, faArrowLeft, faPlusCircle, faCheckCircle, faMinusCircle, faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimateFade from "../components/fade";
import { useRouter } from 'next/navigation';

library.add(faArrowLeft, faArrowRight);
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
  nodeRef,
  rounded,
} from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import Story from "../components/Story";
import Chart from "../components/Chart";
import Faq from "../components/Faq";
import dynamic from 'next/dynamic';
// import HomePopup from "../components/HomePopup";
import 'glightbox/dist/css/glightbox.min.css';
import PopupBundle from "../components/PopupBundle";
import HeroFormBookOfferPub from "../components/HerformBookOfferPub";
import StoryPub from "../components/StoryPub";
import FaqPub from "../components/FaqPub";
import NewBrandFooterPub from "../components/NewBrandFooterPub";
import BookGenres from "../components/BookGenres";


const HeavyComponent = dynamic(() => import('../components/hero'), {
  loading: () => <p>Loading...</p>,
});

const GLightbox = dynamic(
  () => import('glightbox').then((glightboxModule) => glightboxModule.default),
  { ssr: false }
);





export default function Home() {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % steps.length);
    }, 3000); // Change step every 3 seconds
    return () => clearInterval(interval);
  }, []);


  const router = useRouter();
  const swiperRef = useRef();
  const swiperRef2 = useRef();
  const swiperRef3 = useRef();
  // Form Integration
  const { submitMainContactForm } = useHubspotForm();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState("");


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

  const lightboxRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined" && !lightboxRef.current) {
      import('glightbox').then((GLightboxModule) => {
        const GLightbox = GLightboxModule.default;
        lightboxRef.current = GLightbox({
          selector: '.glightbox'
        });
      });
    }

    return () => {
      if (lightboxRef.current) {
        lightboxRef.current.destroy();
      }
    };
  }, []);

  // Object
  const packagesCard = [
    {
      id: 1,
      image: "/images/pp1.png",
      title: "Beginner",
      description: "Launch your book with our Beginner Package, offering comprehensive editing, custom cover art, multi-platform formatting, Amazon optimization, 1 ISBN, and full royalties with a few paperback copies."
    },
    {
      id: 2,
      image: "/images/pp2.png",
      title: "Standard",
      description: "Enhance your publishing experience with our Standard Package, which ensures meticulous editing, versatile publishing options and 2 ISBNs, complete with a full suite of formats and copies for distribution."
    },
    {
      id: 3,
      image: "/images/pp3.png",
      title: "Expert",
      description: "Propel your project to new peaks with our Expert Package, which includes advanced editing, 3 ISBNs, a dynamic website, a video trailer, and widespread distribution, ensuring full ownership and royalties."
    },
    {
      id: 4,
      image: "/images/pp4.png",
      title: "Enterprise",
      description: "Embark on your authorial journey with our Enterprise Package, which encompasses detailed editing, captivating cover design, strategic marketing, 3 ISBNs, and extensive distribution to bring your book to readers worldwide."
    }
  ];

  // Books Object
  const books = [
    { src: "/images/bb-01.png", width: 260, height: 700, type: "right", alt: "book mobile img ten" },
    { src: "/images/bb-02.png", width: 260, height: 700, type: "top", alt: "book mobile img eleven" },
    { src: "/images/bb-03.png", width: 260, height: 700, type: "top", alt: "book mobile img twelve" },
    { src: "/images/bb-04.png", width: 260, height: 500, type: "right", alt: "book mobile img thirteen" },
    { src: "/images/bb-05.png", width: 260, height: 289, type: "top", alt: "book mobile img fifteen" },
    { src: "/images/bb-06.png", width: 260, height: 289, type: "bottom", alt: "book mobile img sixteen" },
    { src: "/images/bb-07.png", width: 260, height: 289, type: "left", alt: "book mobile img seventeen" },
    { src: "/images/bb-08.png", width: 260, height: 289, type: "top", alt: "book mobile img eighteen" }
  ];


  // Object
  const clientLogos = [
    {
      href: "https://goo.gl/maps/D6kJBoXBJYwcZWkP7",
      src: "/images/Google Partner.png",
      alt: "LOGO",
      width: 130,
      height: 60
    },
    {
      href: "https://www.bbb.org/ca/on/richmond-hill/profile/publishers-book/pine-book-writing-inc-0107-1406919",
      src: "/images/BBB.png",
      alt: "LOGO",
      width: 130,
      height: 60
    },
    {
      href: "https://www.trustpilot.com/review/pinebookwriting.com",
      src: "/images/Trustpilot.png",
      alt: "LOGO",
      width: 130,
      height: 60
    },
    {
      href: "https://www.yelp.com/biz/pine-book-writing-richmond-hill",
      src: "/images/Yelp.png",
      alt: "LOGO",
      width: 130,
      height: 60
    },
    {
      href: "https://clutch.co/profile/pine-book-writing",
      src: "/images/Clutch.png",
      alt: "LOGO",
      width: 130,
      height: 60
    }
  ];


  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/publishing-lp');
  //   }, 3000);
  // }, [router]);


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
        const phoneRegex = /^\d{0,10}$/;
        if (phoneRegex.test(value)) {
          setter(value);
          setPhoneError("");
        } else {
          setPhoneError("Phone number must be exactly 10 digits");
        }
      } else {
        setter(value);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
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
      router.push('/thankyou')
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

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    { question: "How do I self-publish my book?", answer: "Self-publishing your book with Pine Book Writing is simple. Start by submitting your manuscript, and our team will guide you through the editing, formatting, and cover design process." },
    { question: "Is publishing a book difficult?", answer: "Publishing a book doesn't have to be difficult, especially with Pine Book Writing's support." },
    { question: "What is an ISBN and do I need one?", answer: "An ISBN (International Standard Book Number) is a unique identifier for your book used by retailers, libraries, and distributors." },
    { question: "Will I need to have my book copyrighted?", answer: "While your book is automatically copyrighted upon creation, registering your copyright provides additional legal protection." },
    { question: "Do you offer design services?", answer: "Yes, Pine Book Writing offers comprehensive design services, including cover design, typesetting, and layout adjustment." },
    { question: "How do you handle distribution and marketing of books?", answer: "Pine Book Writing handles distribution and marketing for your books, ensuring they reach the widest audience possible." }
  ];

  const settings = {
    // slidesPerView: 3,
    // speed: 500,
    // loop: true,
    // speed:1000,
    // arrows:true,
    // autoplay:true,
    // autoplay: {
    //   delay: 300
    // },
    breakpoints: {
      414: {
        slidesPerView: 2,
        navigation: false,
        Pagination: false,
      },
      768: {
        slidesPerView: 2,
        navigation: false,
        Pagination: false,
      },
      1024: {
        slidesPerView: 3,
        autoplay: {
          delay: 200,
        },
      },
    },
  };

  function Counter({ from, to, val }) {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => {
      return Math.round(latest) + val;
    });
    const nodeRef = useRef(null);
    const inView = useInView(nodeRef);

    useEffect(() => {
      if (inView) {
        animate(count, to, { duration: 2 });
      }
    }, [count, inView, to]);
    return (
      <motion.p className="font-poppins text-black" ref={nodeRef}>
        {rounded}
      </motion.p>
    );
  }


  return (
    <>
      <Head>
        <title>Expert Book Publishing Services | Pine Book Writing</title>
        <meta
          name="description"
          content="Discover the art of book publishing with our Expert Book Publishing Services. Our expert team guides you through the process, from editing to distribution."
        />
        <meta name="google-site-verification" content="ze4i-BWHkh7f9iANJUJfoWbXrFcmFC9r2fCsoz1KZA8" />

        <link rel="shortcut icon" href="/images/fav.webp" />
      </Head>
      <main>
        <Header />
        <HeavyComponent Component={HeroFormBookOfferPub} />
        <section className="brnd-slider bg-black overflow-hidden">
          <div className="container grid grid-cols-1 width-container position-relative">
            <div className="container mx-auto position-relative">
              <div className="book-sell-text ">
                <h3 className="font-poppins text-xl md:text-xl leading-3 font-bold">Sell Your <br></br> <span>Book With</span></h3>
              </div>
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

        <PopupBundle isOpen={isModalOpen} onClose={closeModal} service={selectedService} />

        <section className="about pt-14 pb-14 overflow-hidden">
          <div className="container mx-auto px-5 md:px-0 w-100 lg:w-5/6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
              {/* <AnimateFade type={"top"}> */}
              <div className="abt-txt m1-h p1">
                <h3 className="font-poppins text-3xl md:text-5xl font-bold">
                  About<span>Pine Book Writing</span>
                </h3>
                <p className="pt-3">
                  Pine Book Writing was founded on February 22, 2023, with the mission of providing quality writing services to the authors worldwide. Our founders noticed that many authors need help to write a book that can stand out in the crowded marketplace. They had a vision of creating a company that would help these authors bring their ideas to life and turn them into successful books. That was when Pine Book Writing was officially established with a mission of providing authors with the best Book Writing experience.<br /><br />

                  We have a qualified team of professionals who will work hand-in-hand with you from the moment you decide to write your book until the moment it is known to the world.
                </p>

                <div className="flex gap-6" bis_skin_checked="1">
                  <button className="book-publishing-cta-btn-3 shadow-xl mt-10 cursor-pointer bg-white">
                    <a href="javascript:;">Talk to an Expert</a></button>
                  <button className="book-publishing-cta-btn-2 shadow-xl mt-10 cursor-pointer bg-white">
                    <a href="tel:8887867135">(888)786-7135</a></button>
                </div>

              </div>
              {/* </AnimateFade> */}
              <div className="abt-pic text-center">
                {/* <AnimateFade type={"left"}> */}
                <Image src={"/images/About-us-img.png"} width={500} height={570}
                  layout="responsive"
                  loading="lazy"
                  alt="about img"
                />
                {/* </AnimateFade> */}
              </div>
            </div>

            {/* <div className="book-joun relative p-5 rounded-lg md:p-10 mb-9">
              <div className="text-center">
                <Swiper
                  className="px-20"
                  spaceBetween={15}
                  slidesPerView={3}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  onBeforeInit={(swiper) => {
                    swiperRef3.current = swiper;
                  }}
                  modules={[Navigation, Autoplay, Pagination]}
                  breakpoints={{
                    "@0.00": {
                      slidesPerView: 1,
                      spaceBetween: 10,
                      navigation: {
                        enabled: false,
                      },
                      pagination: false,
                      navigation: true,
                    },
                    "@1.00": {
                      slidesPerView: 3,
                      spaceBetween: 15,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="bg-white rounded-xl flex flex-row justify-between items-center border-about-card">
                      <Image
                        src={"/images/b1.png"}
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="book img one"
                      ></Image>
                      <p className="p-4">
                        Explore worlds of knowledge and discovery.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-white rounded-xl flex flex-row items-center border-about-card">
                      <Image
                        src={"/images/b2.png"}
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="book img two"
                      ></Image>
                      <p className="p-4">
                        Journey through the lives and experiences of others.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-white rounded-xl flex flex-row items-center border-about-card">
                      <Image
                        src={"/images/b3.png"}
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="book img three"
                      ></Image>
                      <p className="p-4">
                        Get lost in imaginary worlds and captivating narratives.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-white rounded-xl flex flex-row items-center border-about-card">
                      <Image
                        src={"/images/b4.png"}
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="book img four"
                      ></Image>
                      <p className="p-4">
                        Discover the truth and reality behind fascinating topics.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-white rounded-xl flex flex-row items-center border-about-card">
                      <Image
                        src={"/images/b5.png"}
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="book img five"
                      ></Image>
                      <p className="p-4">
                        Dive into the personal stories and reflections of individuals.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-white rounded-xl flex flex-row items-center border-about-card">
                      <Image
                        src={"/images/b6.png"}
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="book img six"
                      ></Image>
                      <p className="p-4">
                        Learn about the lives and achievements of remarkable figures.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-white rounded-xl flex flex-row items-center border-about-card">
                      <Image
                        src={"/images/b7.png"}
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="book img seven"
                      ></Image>
                      <p className="p-4">
                        Embark on thrilling quests and adrenaline-pumping escapades.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-white rounded-xl flex flex-row items-center border-about-card">
                      <Image
                        src={"/images/b8.png"}
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="book img eight"
                      ></Image>
                      <p className="p-4">
                        Indulge in tales of love, passion, and heartwarming connections.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-white rounded-xl flex flex-row items-center border-about-card">
                      <Image
                        src={"/images/b9.png"}
                        width={100}
                        loading="lazy"
                        alt="book img nine"
                        height={100}
                      ></Image>
                      <p className="p-4">
                        Experience a collection of diverse stories and perspectives.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="bk-sil prev cursor-pointer" onClick={() => swiperRef3.current?.slidePrev()}><FontAwesomeIcon icon={faArrowLeft} /></div>
                <div className="bk-sil next cursor-pointer" onClick={() => swiperRef3.current?.slideNext()}><FontAwesomeIcon icon={faArrowRight} /></div>
              </div>
            </div> */}
          </div>
        </section>



        <BookGenres />

        <section className="portfolio overflow-hidden	 py-14">
          <div className="grid grid-cols-1 ">
            <div className="container mx-auto text-center">
              <div className="portfolio-h m1-h">
                <h3 className="font-poppins text-3xl md:text-4xl leading-10">
                  Unveiling Our Authors’ Creations
                  <br />
                  <span className="leading font-semibold">Book Showcase</span>
                </h3>
              </div>

              <div className="block md:hidden lg:hidden">
                <Swiper
                  className="px-20 gap-x-32 "
                  spaceBetween={15}
                  slidesPerView={1}
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
                      slidesPerView: 1,
                      spaceBetween: 10,

                      navigation: {
                        enabled: false,
                      },
                      pagination: false,
                      navigation: true,
                    },
                    "@1.00": {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },
                  }}
                >
                  <SwiperSlide className="mx-auto text-center">
                    <div className="flex justify-center">
                      <Image src={"/images/bb1-min.webp"} width={260} height={289} loading="lazy" className="glightbox" layout="responsive" alt="book img ten" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex justify-center">
                      <Image src={"/images/bb5-min.webp"} width={260} height={289} loading="lazy" className="glightbox" layout="responsive" alt="book img eleven" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex justify-center">
                      <Image src={"/images/bb8-min.webp"} width={260} height={289} loading="lazy" className="glightbox" layout="responsive" alt="book img twoelve" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex justify-center">
                      <Image src={"/images/bb4-min.webp"} width={260} height={289} loading="lazy" className="glightbox" layout="responsive" alt="book img thirteen" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex justify-center">
                      <Image src={"/images/bb3-min.webp"} width={260} height={289} loading="lazy" className="glightbox" layout="responsive" alt="book img fifteen" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex justify-center">
                      <Image src={"/images/bb6-min.webp"} width={260} height={289} loading="lazy" className="glightbox" layout="responsive" alt="book img sixteen" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex justify-center">
                      <Image src={"/images/bb7-min.webp"} width={260} height={289} loading="lazy" className="glightbox" layout="responsive" alt="book img seventeen" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex justify-center">
                      <Image src={"/images/bb2-min.webp"} width={260} height={289} loading="lazy" className="glightbox" layout="responsive" alt="book img eighteen" />
                    </div>
                  </SwiperSlide>
                </Swiper>

              </div>


              <div className="grid grid-cols-4 gap-4 width-container books-collage">
                {books.map((book, index) => (
                  <div key={index}>
                    {/* <AnimateFade type={book.type}> */}
                    <Image src={book.src} width={book.width} height={book.height} loading="lazy" alt={book.alt} className="book-zoom-effect glightbox" />
                    {/* </AnimateFade> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        <section className="package pb-5 pt-12">
          <div className="container mx-auto max-w-screen-xl">
            <div className="grid items-center grid-cols-1 text-center m1-h">
              <h3 className="text-3xl font-poppins md:text-4xl font-bold">
                Affordable Book Writing Packages
              </h3>
              <h4 className="text-xl font-poppins md:text-xl font-bold mt-4">Limited Time Offers – Save  <span className="blink_me fw-bold text-2xl">50%</span> on Book writing Services</h4>
            </div>
          </div>
        </section>

        <section className="bg-white pt-5 pb-5">
          <div className="width-container">
            <div className="container mx-auto">
              <div className="packages-wrapper flex flex-col md:flex-row justify-center gap-12">
                <div className="single-packages relative">

                  <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Silver Package <br />
                    <button className="tag-50-per-off"><del className="text-red italic">$3,000 USD</del> | <span className="blink_me">$1,499 USD</span></button></h4>


                  <div className="single-packages-content px-10">

                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Dedicated Project Manager
                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Pre-Planning and Research
                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Questionnaire/Brief Forms
                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Strategy Sessions (with Senior Project Manager)                                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Outline Creation
                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      25 Minute Interview Session (with Mid-Level Writer)
                    </div>

                    <div className="flex gap-2 mb-5 items-center ">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Writing upto 50 - 70 Pages
                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      2 - 4 Months production (divided into Weeks)
                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Include upto 20 Images
                    </div>

                    <div className="flex gap-2 mb-5 items-center ">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Standard Formatting
                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      2 Revision Per Draft
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
                  <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Gold Package <br />
                    <button className="tag-50-per-off"><del className="text-red italic">$4,500 USD</del> | <span className="blink_me">$2,249 USD</span></button>
                  </h4>

                  <div className="single-packages-content px-10">
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Dedicated Project Manager
                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Pre-Planning and Research

                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Questionnaire/Brief Forms

                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Strategy Sessions (with Senior Project Manager)                                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Detailed Outline Creation
                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      35 Minute Interview Session (with Senior-Level Writer)
                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Writing upto 70 - 150 Pages
                    </div>

                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      3 - 6 Months production (divided into Weeks)                                    </div>

                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Include upto 30 Images                                    </div>

                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Publishing Standard Formatting (for 2 platforms)                                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      3 Revisions Per Draft                                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Editorial support                                    </div>

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
                  <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">Platinum Package <br />
                    <button className="tag-50-per-off"><del className="text-red italic">$6,500 USD</del> | <span className="blink_me">$3,249 USD</span></button>
                  </h4>
                  <div className="single-packages-content px-10">

                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Dedicated Project Manager
                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Pre-Planning and Research                                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Questionnaire/Brief Forms
                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Strategy Sessions (with Senior Project Manager)
                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Detailed Outline Creation
                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      45 Minute Interview Session (with Premium Writer)
                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Writing upto 150 - 300 Pages                                     </div>
                    <div className="flex gap-2 mb-5 items-center  text-xl">
                      4 - 7 Months production (divided into Weeks)                                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Include upto 40 Images                                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Publishing Standard Formatting (for 3 platforms)                                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      5 Revisions Per Draft                                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Editorial support                                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Dedication page (If required)                                    </div>

                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      About the Author                                   </div>


                    <div className="flex gap-2 mb-5 items-center">
                      <Image src={"/images/check-mark.png"} className="icon" width={13} height={13}></Image>
                      Book Synopsis</div>
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
                  {/* <h3 className="mb-8 text-center font-poppins text-3xl md:text-4xl font-bold">
                        
                                </h3> */}
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
                      <table className="w-full mb-14 bundle-comparison-chart table-fixed">
                        <thead className="chart-header-custom">
                          <tr>

                            <th className="font-poppins heading">
                              <div className="heading">
                                List of Services
                              </div>
                            </th>




                            <th className="font-poppins">
                              <div className="heading">
                                Silver Package

                              </div>
                            </th >

                            <th className="font-poppins heading">
                              <div className="heading">
                                Gold Package

                              </div>
                            </th>

                            <th className="font-poppins heading">
                              <div className="heading">
                                Platinum Package

                              </div>
                            </th>
                          </tr>
                        </thead>

                        <tbody className="text-center">
                          <tr className="m-4">
                            {/* <th className="text-2xl md:text-2xl text-start p-3 font-bold"
                                                        colspan="4"
                                                        scope="row">Preparing Your Manuscript</th> */}
                          </tr>

                          <tr>
                            <td>Dedicated Project Manager</td>
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
                            <td>Pre-Planning and Research</td>
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
                            <td>Questionnaire/Brief Forms</td>
                            <td>✔️</td>
                            <td>✔️</td>
                            <td>✔️</td>
                          </tr>
                          <tr>
                            <td>Strategy Sessions with Senior Project Manager</td>
                            <td>
                              ✔️
                            </td>
                            <td>✔️</td>
                            <td>✔️</td>
                          </tr>
                          <tr>
                            <td>Outline Creation</td>
                            <td>
                              Basic
                            </td>
                            <td>Detailed</td>
                            <td>Detailed</td>
                          </tr>
                          <tr>
                            <td>Interview Session timeline</td>
                            <td>
                              25 Minutes
                            </td>
                            <td>35 Minutes</td>
                            <td>45 Minutes</td>
                          </tr>

                          <tr>
                            <td>Writers Level</td>
                            <td>Mid Level Writer</td>
                            <td>Senior Writer</td>
                            <td>Premium Writer</td>
                          </tr>

                          <tr>
                            <td>Writers Experience </td>
                            <td>
                              2 - 5 Years
                            </td>
                            <td>
                              10 - 15 Years
                            </td>
                            <td>
                              20 - 25 Years
                            </td>
                          </tr>
                          <tr>
                            <td>Writing</td>
                            <td>
                              50-70 Pages
                            </td>
                            <td>
                              70-150 Pages
                            </td>
                            <td>
                              150-300 Pages
                            </td>
                          </tr>
                          <tr>
                            <td>Production Timeline <br /><b>(Divided into Weeks)</b></td>
                            <td>2-4 Months</td>
                            <td>3-6 Months</td>
                            <td>4-7 Months</td>
                          </tr>
                          <tr>
                            <td>Include Images</td>
                            <td>
                              20
                            </td>
                            <td>30</td>
                            <td>40</td>
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

                          <tr>
                            <td>Editorial Support</td>
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
                            <td>Dedication page (If required)</td>
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
                            <td>About the Author</td>
                            <td>❌</td>
                            <td>❌</td>
                            <td>✔️</td>
                          </tr>



                          <tr>
                            <td>Book Synopsis</td>
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
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>


        <section className='max-w-screen-xl mx-auto text-center brand-choose-us-section md:p-20 p-10 mb-14'>
          <div className='flex flex-col'>
            <div className='new-ser-text flex flex-col md:px-9'>
              <h4 className='font-bold md:text-2xl leading-loose md:pb-6 text-white'>Need Extra Support to Achieve Your Writing to Publishing Goals?</h4>
              <h2 className='font-bold md:text-4xl text-2xl py-6 uppercase font-poppins leading-relaxed text-white'>Our Additional Services - Beyond Professional
                Writing</h2>
              <p className='font-medium text-xl  font-poppins leading-relaxed text-white py-4 md:py-0'>Stuck on what to do after writing your story? We're here to help! We offer a range of
                additional services to help our clients/authors get their inspiring stories published
                and noticed by a global audience.</p>
            </div>

            <div className='new-ser-img-wrap flex justify-center items-center basis-2 md:gap-44 md:flex-row flex-col md:pt-16'>

              <div className='new-ser-img text-center pb-4'>
                <Image className='inline pb-4 invert' src={"/brand-img/service-editing.webp"} height={45} width={45}></Image>
                <h3 className='font-semibold text-3xl uppercase font-poppins leading-loose text-white'>Editing</h3>
                <p className='text-lg  font-poppins leading-relaxed text-white'>We offer our all-inclusive editing services ranging from content editing and
                  proofreading to structural editing to make your write-up worth reading.</p>
              </div>


              <div className='new-ser-img text-center pb-4'>
                <Image className='inline md:pb-4 invert' src={"/brand-img/service-formating.webp"} height={45} width={45}></Image>
                <h3 className='font-semibold text-3xl uppercase font-poppins leading-loose text-white'>Formatting</h3>
                <p className='text-lg  font-poppins leading-relaxed text-white'>We offer impeccable book formatting services according to industry standards. We
                  handle everything from typesetting to cover design to ensure your book is ready to
                  publish.</p>
              </div>
            </div>

            <div className='new-ser-img-wrap flex justify-center  items-center md:gap-44 md:flex-row flex-col md:pt-16'>

              <div className='new-ser-img text-center pb-4'>
                <Image className='inline md:pb-4 invert' src={"/brand-img/service-publishing.webp"} height={45} width={45}></Image>
                <h3 className='font-semibold text-3xl uppercase font-poppins leading-loose text-white'>Publishing</h3>
                <p className='text-lg  font-poppins leading-relaxed text-white'>To help you achieve your publishing goals, we offer comprehensive book publishing
                  services for different formats and numerous popular publishing platforms.</p>
              </div>


              <div className='new-ser-img text-center pb-4'>
                <Image className='inline md:pb-4 invert' src={"/brand-img/isbn.png"} height={55} width={60}></Image>
                <h3 className='font-semibold text-3xl uppercase font-poppins leading-loose text-white'>ISBN + Barcode</h3>
                <p className='text-lg  font-poppins leading-relaxed text-white'>An ISBN is a unique identifier of your book. We help register your book’s ISBN along
                  with high-quality barcode generation to make sure your book is ready for sale.</p>
              </div>
            </div>

            <div className='pub-btn mt-14'>
              <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 brand-nav-btn-2 font-poppins text-lg inline-block" target="_blank" href="https://pinebookpublishing.com/packages">Learn More</a>
            </div>
          </div>
        </section>

        <section className="book-publishing-cta-section mx-auto md:px-6 py-10 md:py-0 relative">
          <div className="container flex items-center flex-col md:flex-row max-w-screen-xl mx-auto">
            <div className="basis-1/2 text-center flex justify-end">
              <Image src={"/images/book-image-big.webp"} width={400} height={200} className="aos-init aos-animate book-publishing-cta-img" data-aos="fade-right" data-aos-duration="1000"></Image>
            </div>
            <div className="basis-1/2 md:ml-20 md:text-left text-center">
              <h2 className="text-white font-poppins text-3xl md:text-5xl aos-init aos-animate font-bold" data-aos="flip-down">Ready to Delight Your Readers? Get in Touch!
              </h2>
              <p className="text-white mt-7">At Pine Book Writing, we take pride in having an industry-leading team of ghostwriters who have immense expertise in various genres. Contact us to book a consultation call!
              </p>
              <div className="flex gap-6 md:justify-start justify-center">
                <button className="package-get-started-btn text-md mt-5" onClick={handleOpenChat}><Link href={'javascript:;'}>Talk to an Expert</Link></button>
                <button className="package-get-started-btn text-md mt-5"><Link href="tel:(888) 786-7135">(888) 786-7135</Link></button>
              </div>
            </div>
          </div>
        </section>

        {/* new process start */}
        <section className="my-7 md:py-20 overflow-hidden">
          <div className="text-center mb-6 new-lp3-why-choose-us-title">
            <h2 className="text-3xl text-black uppercase font-bold">Our Process: From Concept to Perfection</h2>
          </div>
          <div className="lg:block md:block hidden">
            <div className="new-lp3-process-wrapper max-w-screen-xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className={`process-item ${index === activeIndex ? 'active' : ''}`}>
                  <h3>{step.title}</h3>
                  <div>
                    <Image src={step.icon} width={40} height={40} alt="icon" />
                    <Image className="p-img" src={index % 2 === 0 ? step.imgTop : step.imgBottom} width={130} height={130} alt="process" />
                    <Image src={step.img} width={130} height={130} alt="process" />
                    <Image src={step.img1} width={130} height={130} alt="process" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:hidden md:hidden block">
            <div className="new-lp3-process-wrapper max-w-screen-xl mx-auto">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                modules={[Navigation, Autoplay, Pagination]}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,

                    navigation: {
                      enabled: false,
                    },
                    pagination: false,
                    navigation: true,
                  },
                  "@1.00": {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                }}
              >
                {processItems.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className='process-item-mob'>
                      <img src={item.icon} height={40} width={40} alt="icon" />
                      <h3 className="text-black text-2xl mt-3">{item.text}</h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

        </section>

        {/* new process end  */}

        <StoryPub />

        <FaqPub />


        <BrandContact />

        <NewBrandFooterPub />
      </main>
    </>
  );
}
