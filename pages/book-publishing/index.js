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
import PopupBundleBookPublish from "../components/PopupBundleBookPublish";
import Footer from "../components/Footer";
import BrandContact from "../components/BrandContactForm";
import PortfolioSlider1LP from "../components/PortfolioSlider1LP";
import PortfolioSlider2LP from "../components/PortfolioSlider2LP";
import PortfolioSlider3LP from "../components/PortfolioSlider3LP";


const handleOpenChat = () => {
  window.zE && window.zE('webWidget', 'open');
};

const steps = [
  { title: "Editing", imgTop: "/images/p-img-top.webp", imgBottom: "/images/p-img-bottom.webp", img: "/images/p-img.webp", img1: "/images/p-img1.webp", icon: "/images/Editing.png" },
  { title: "Proofreading", imgTop: "/images/p-img-top.webp", imgBottom: "/images/p-img-bottom.webp", img: "/images/p-img.webp", img1: "/images/p-img1.webp", icon: "/images/Proofreading.png" },
  { title: "TypeSetting", imgTop: "/images/p-img-top.webp", imgBottom: "/images/p-img-bottom.webp", img: "/images/p-img.webp", img1: "/images/p-img1.webp", icon: "/images/Typesetting & Layout adjustment.png" },
  { title: "Layout Adjustment", imgTop: "/images/p-img-top.webp", imgBottom: "/images/p-img-bottom.webp", img: "/images/p-img.webp", img1: "/images/p-img1.webp", icon: "/images/Typesetting & Layout adjustment.png" },
  { title: "Formatting", imgTop: "/images/p-img-top.webp", imgBottom: "/images/p-img-bottom.webp", img: "/images/p-img.webp", img1: "/images/p-img1.webp", icon: "/images/Formatting.png" },
  { title: "Cover Designing", imgTop: "/images/p-img-top.webp", imgBottom: "/images/p-img-bottom.webp", img: "/images/p-img.webp", img1: "/images/p-img1.webp", icon: "/images/Cover Design.png" },
  { title: "Adjustment", imgTop: "/images/p-img-top.webp", imgBottom: "/images/p-img-bottom.webp", img: "/images/p-img.webp", img1: "/images/p-img1.webp", icon: "/images/Cover Design.png" },
  { title: "Publishing", imgTop: "/images/p-img-top.webp", imgBottom: "/images/p-img-bottom.webp", img: "/images/p-img.webp", img1: "/images/p-img1.webp", icon: "/images/Publishing.png" },
  // ... Add other steps similarly
];

const processItems = [
  { icon: '/images/Editing.png', text: 'Editing' },
  { icon: '/images/Proofreading.png', text: 'Proofreading' },
  { icon: '/images/Typesetting & Layout adjustment.png', text: 'TypeSetting' },
  { icon: '/images/Typesetting & Layout adjustment.png', text: 'Layout Adjustment' },
  { icon: '/images/Formatting.png', text: 'Formatting' },
  { icon: '/images/Cover Design.png', text: 'Cover Designing' },
  { icon: '/images/Cover Design.png', text: 'Adjustment' },
  { icon: '/images/Publishing.png', text: 'Publishing' },
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
import { faArrowRight, faArrowLeft, faPlusCircle, faCheckCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
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
import Packages from "../components/Packages";
// import HomePopup from "../components/HomePopup";
import 'glightbox/dist/css/glightbox.min.css';

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
        <HeavyComponent Component={HeroFormBookOffer} />

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


        <section className="about pt-14 overflow-hidden">
          <div className="container mx-auto px-5 md:px-0 w-100 lg:w-5/6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
              {/* <AnimateFade type={"top"}> */}
              <div className="abt-txt m1-h p1">
                <h3 className="font-poppins text-3xl md:text-5xl font-bold">
                  About<span>Pine Book Writing</span>
                </h3>
                <p className="pt-3">
                  Pine Book Writing was founded on February 22, 2023, with the mission of providing quality editing and publishing services for the authors worldwide.
                  Our founders understood that many authors need support in editing and publishing their works to make them distinct from the rest in the crowded marketplace. They had a vision of creating a company that would help these authors bring their ideas to life and turn them into successful books. That was when Pine Book Writing was officially established with a mission of providing authors with the best Book Writing & Publishing experience.<br></br>
                  We have a qualified team of professionals who will work hand in hand with you from the moment you decide to publish your book to the moment your book in known to the world.
                </p>

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

            <div className="book-joun relative p-5 rounded-lg md:p-10 mb-9">
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
            </div>
          </div>
        </section>

        <section className="portfolio-book-publishing-offer-bg">
          <PortfolioSlider3LP />
          <PortfolioSlider1LP />
          <PortfolioSlider2LP />

        </section>

      
        <Packages />

        {/* process section start */}


        {/* process section end */}



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

        <Story />

        
        <section className="book-publishing-cta-section mx-auto md:px-6 py-10 md:py-0 relative">
          <div className="container flex items-center flex-col md:flex-row max-w-screen-xl mx-auto">
            <div className="basis-1/2 text-center flex justify-end">
              <Image src={"/images/book-image-big.webp"} width={400} height={200} className="aos-init aos-animate book-publishing-cta-img" data-aos="fade-right" data-aos-duration="1000"></Image>
            </div>
            <div className="basis-1/2 md:ml-20 md:text-left text-center">
              <h2 className="text-white font-poppins text-3xl md:text-5xl aos-init aos-animate font-bold" data-aos="flip-down">Let's Tell Your Story to the World!
              </h2>
              <p className="text-white mt-7">Ready to share your fascinating story with your potential audience? Contact Pine Book Writing and get a free quote now!
              </p>
              <div className="flex gap-6 md:justify-start justify-center">
                <button className="package-get-started-btn text-md mt-5" onClick={handleOpenChat}><Link href={'javascript:;'}>Talk to an Expert</Link></button>
                <button className="package-get-started-btn text-md mt-5"><Link href="tel:(866)-841-7463">(866)-841-7463</Link></button>
              </div>
            </div>
          </div>
        </section>

        <Faq />

      

        <BrandContact />
        <Footer />

      </main>
    </>
  );
}
