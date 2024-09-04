import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { faArrowRight, faArrowLeft, faPlusCircle, faCheckCircle, faMinusCircle, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
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

export default function BrandFaqs() {
    const swiperRef = useRef();

    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "What is Ghostwriting?", answer: "Ghostwriting is the name of hiring a professional writer to write your book. In return, the writer will gather all the relevant information, conduct in-depth research, and craft a manuscript that meets your vision." },
        { question: "Is your ghostwriting ethical and authentic?", answer: "Absolutely, it is both ethical and authentic. Ghostwriting is extremely common, especially in the world of book writing. This service is considered the same as having any professional hired to perform a specific task. At Pine Book Writing, we serve our expertise in writing to put your creative ideas into a manuscript." },
        { question: "Who will own the rights in Ghostwriting?", answer: "We are just your writing partner. We write it as a ghostwriting service, and you own it. As an author, you own all the rights and credits for the final product. Not only that, the royalties your book earns will also be yours." },
        { question: "Can I hire you to write one chapter of my book and later write the other chapters?", answer: "Yes, you can also hire us chapter by chapter. Here, we are confident that once you see our writing professionalism and expertise, you will definitely want to go toward the last chapter of your book. So, if you want to hire us for a single chapter, you are also welcome." },
        { question: "How long will it take to write a book?", answer: "The completion time of the ghostwriting services entirely depends on the complexity, genre, and your book's length. However, we usually take 3 to 6 months on average. Moreover, the time also depends on how much material you provide and the research required on the particular topic." },
        { question: "How much does writing a book cost?", answer: "The cost of ghostwriting also varies based on your book's length, genre, and complexity. However, it can be somewhere between a few thousand to tens of thousands of dollars. Contact our customer service team to get transparent and accurate pricing for your project." }
    ];

    return (
        <>
            <section className="brand-testimonials-section overflow-hidden">
                <div className="max-w-screen-xl mx-auto px-4 my-10 relative py-22">
                    <div className="text-center mb-6">
                        <h2 className="font-poppins text-3xl text-black uppercase mb-3 font-bold" >Frequently Asked Questions</h2>
                        {/* <h3 className="text-xl text-black font-poppins uppercase font-bold">each Out to Us for Further Assistance.</h3> */}
                    </div>
                    <div className="faq-que">
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            {Array.from({ length: 2 }).map((_, colIndex) => (
                                <div key={colIndex} className="w-full max-w-screen-sm">
                                    {faqData.slice(colIndex * 3, (colIndex + 1) * 3).map((faq, index) => {
                                        const actualIndex = index + colIndex * 3;
                                        return (
                                            <button
                                                key={actualIndex}
                                                className="w-full border-b-2 border-gray-300 text-white p-6 text-left mt-0 focus:outline-none mb-4 rounded-2xl bg-color"
                                                onClick={() => toggleFAQ(actualIndex)}
                                            >
                                                <div className={`text-lg font-semibold flex justify-between ${openFAQ === actualIndex ? 'border-b border-gray-300' : 'border-0'}`}>
                                                    {faq.question}
                                                    {/* <FontAwesomeIcon icon={openFAQ === actualIndex ? faMinusCircle : faArrowDown} color="#2c9384" /> */}
                                                    <div onClick={() => toggleFAQ()}>
                                                        {openFAQ === actualIndex ? (
                                                            <Image src="/brand-img/up-arrow.png" alt="Close" className="brand-faq-icon" width={50} height={20} />
                                                        ) : (
                                                            <Image src="/brand-img/down-arrow.png" alt="Open" className="brand-faq-icon" width={50} height={20} />
                                                        )}
                                                    </div>
                                                </div>
                                                <div className={`mt-3  text-white ${openFAQ === actualIndex ? 'faq-content-open' : 'faq-content-close'}`}>
                                                    <p>
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}