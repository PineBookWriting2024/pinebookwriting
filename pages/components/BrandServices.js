import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/effect-coverflow";
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
import { Swiper, SwiperSlide } from "swiper/react";

export default function BrandServices() {
    const swiperRef = useRef(null);
    return (
        <>
            <section className="brand-service-section overflow-hidden lg:block md:block hidden">
                <div className="max-w-screen-xl mx-auto px-4 my-20 relative">
                    <div className="text-center mb-6">

                        <h2 className="font-poppins text-3xl md:text-5xl leading-normal pb-4 text-black font-bold"> Writing Services We Offer</h2>
                        <h3 className="text-xl text-black font-poppins">Choose Pine Book Writing Services for Expert and Inspiring Content Across All Genres!
                        </h3>
                        <p className="text-black pt-3">Experience the power of expertly crafted, engaging, and exciting content with Pine Book Writing - where our best, unique, and impressive writing services are designed to help you accomplish your writing goals!</p>
                    </div>

                    {/* 1 of 2 */}
                    <div className="brand-service-content justify-center flex gap-4 flex-col md:flex-row aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                        <div className="brand-service-card flex gap-4 md:flex-row flex-col md:w-full mx-auto text-center">
                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon1.png"} className="icon" width={50} height={50}></Image>
                                    <span className="font-poppins text-4xl">01</span>
                                </div>
                                <p >Craft engaging books aligned with your voice and vision.</p>
                                <h4 className="mt-4 font-poppins text-2xl">Book Ghostwriting</h4>

                            </div>
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span class="square">
                                    <Link href="/ghostwriting">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/bgw.jpg"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>

                        <div className="brand-service-card flex gap-4 md:flex-row flex-col md:w-full mx-auto text-center">
                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon2.png"} className="icon" width={50} height={50}></Image>
                                    <span className="font-poppins text-4xl">02</span>
                                </div>
                                <p >Create noteworthy resumes that spotlight your strengths.</p>
                                <h4 className="mt-4 font-poppins text-2xl break-words">Resume Writing</h4>
                            </div>
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span class="square">
                                    <Link href="/resume-writing">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/rw.jpg"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2 of 4 */}
                    <div className="brand-service-content justify-center flex mt-4 gap-4 flex-col md:flex-row aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">

                        <div className="brand-service-card flex gap-4 md:flex-row flex-col md:w-full mx-auto text-center">
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span class="square">
                                    <Link href="/wikipedia-writing">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/ww.jpg"} width={270} height={200}></Image>
                                </div>
                            </div>

                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon3.png"} className="icon" width={50} height={50}></Image>
                                    <span className="font-poppins text-4xl">03</span>
                                </div>
                                <p >Well-researched and well-written Wikipedia articles.</p>
                                <h4 className="mt-4 font-poppins text-2xl">Wikipedia Writing</h4>
                            </div>
                        </div>

                        <div className="brand-service-card flex gap-4 md:flex-row flex-col md:w-full mx-auto text-center">
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span class="square">
                                    <Link href="/web-copywriting">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/wcw.jpg"} width={250} className="icon" height={200}></Image>
                                </div>
                            </div>
                            <div className="brand-service-card-content gap-4 basis-1/2 relative">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon4.png"} className="icon" width={50} height={50}></Image>
                                    <span className="font-poppins text-4xl">04</span>
                                </div>
                                <p >Informative yet promotional web copies that help drive conversion.</p>
                                <h4 className="mt-4 font-poppins text-2xl uppercase">Web Copywriting</h4>
                            </div>

                        </div>

                    </div>

                    {/* 4 of 6 */}
                    <div className="brand-service-content justify-center flex gap-4 mt-4 flex-col md:flex-row aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                        <div className="brand-service-card flex gap-4 md:flex-row flex-col md:w-full mx-auto text-center">
                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right-5"></span>
                                <span className="bottom-5"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon5.png"} width={50} className="icon" height={50}></Image>
                                    <span className="font-poppins text-4xl">05</span>
                                </div>
                                <p >SEO-optimized copywriting to rank your website on SERP.</p>
                                <h4 className="mt-4 font-poppins text-2xl">SEO Content Writing</h4>
                            </div>
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span class="square">
                                    <Link href="/seo-content">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/seocw.jpg"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>
                        <div className="brand-service-card flex gap-4 md:flex-row flex-col md:w-full mx-auto text-center">
                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right-5"></span>
                                <span className="bottom-5"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon6.png"} width={50} className="icon" height={50}></Image>
                                    <span className="font-poppins text-4xl">06</span>
                                </div>
                                <p >Write informative & engaging blog posts and articles.</p>
                                <h4 className="mt-4 font-poppins text-2xl">Blogs & Article Writing</h4>
                            </div>
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span class="square">
                                    <Link href="/blog-article-writing">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/b&a.jpg"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* 6 of 8 */}
                    <div className="brand-service-content  justify-center flex mt-4 gap-4 flex-col md:flex-row aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        <div className="brand-service-card flex gap-4 md:flex-row flex-col md:w-full mx-auto text-center">
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span class="square">
                                    <Link href="/press-release-writing">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/pr.jpg"} width={270} height={200}></Image>
                                </div>
                            </div>
                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon7.png"} className="icon" width={50} height={50}></Image>
                                    <span className="font-poppins text-4xl">07</span>
                                </div>
                                <p >Impactful press releases to promote/announce your news & events .</p>
                                <h4 className="mt-4 font-poppins text-2xl">PR Writing</h4>
                            </div>
                        </div>
                        <div className="brand-service-card flex gap-4 md:flex-row flex-col md:w-full mx-auto text-center">
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span class="square">
                                    <Link href="/script-writing">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/sw.jpg"} width={250} className="icon" height={200}></Image>
                                </div>
                            </div>
                            <div className="brand-service-card-content gap-4 basis-1/2 relative">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon8.png"} className="icon" width={50} height={50}></Image>
                                    <span className="font-poppins text-4xl">08</span>
                                </div>
                                <p >Expert script writing for product presentations, audios & videos.</p>
                                <h4 className="mt-4 font-poppins text-2xl uppercase">Script Writing</h4>
                            </div>

                        </div>
                    </div>

                    {/* 8 of 10 */}
                    <div className="brand-service-content justify-center flex gap-4 mt-4 flex-col md:flex-row aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">

                        <div className="brand-service-card flex gap-4 md:flex-row flex-col md:w-full mx-auto text-center">
                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right-5"></span>
                                <span className="bottom-5"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon9.png"} width={50} className="icon" height={50}></Image>
                                    <span className="font-poppins text-4xl">09</span>
                                </div>
                                <p >Produce social media post copies to engage your audience.</p>
                                <h4 className="mt-4 font-poppins text-2xl">Social Media Copywriting</h4>
                            </div>
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span class="square">
                                    <Link href="/social-media-copywriting">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/smcw.jpg"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>

                        <div className="brand-service-card flex gap-4 md:flex-row flex-col md:w-full mx-auto text-center">
                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right-5"></span>
                                <span className="bottom-5"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon10.png"} width={50} className="icon" height={50}></Image>
                                    <span className="font-poppins text-4xl">10</span>
                                </div>
                                <p >Informative & Persuasive product descriptions to uplift sales.</p>
                                <h4 className="mt-4 font-poppins text-2xl">Product Description Writing</h4>
                            </div>
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span class="square">
                                    <Link href="/product-description">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/pd.jpg"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </section>

            {/* Mobile View code  */}
            <section className="brand-service-section overflow-hidden block sm:block md:hidden lg:hidden">
                <div className="max-w-screen-xl mx-auto px-4 my-20 relative">
                    <div className="text-center mb-6">

                        <h2 className="font-poppins text-3xl md:text-5xl leading-normal pb-4 text-black font-bold"> Writing Services We Offer</h2>
                        <h3 className="text-xl text-black font-poppins">Choose Pine Book Writing Services for Expert and Inspiring Content Across All Genres!
                        </h3>
                        <p className="text-black pt-3">Experience the power of expertly crafted, engaging, and exciting content with Pine Book Writing - where our best, unique, and impressive writing services are designed to help you accomplish your writing goals!</p>
                    </div>

                    {/* 1 of 2 */}
                    <Swiper
                        // effect={"coverflow"}
                        // grabCursor={true}
                        // centeredSlides={true}
                        Autoplay={true}
                        slidesPerView={1}
                        loop={true}
                        className="mySwiper"
                        autoplay={{
                            delay: 3000,
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
                                navigation: true,
                            },
                            "@1.00": {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                        }}
                    >


                        <div className="brand-service-content justify-center flex gap-4 flex-col md:flex-row aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                            <SwiperSlide>
                                <div className="brand-service-card flex gap-4  md:w-full mx-auto text-center">
                                    <div className="brand-service-card-content basis-1/2 relative">
                                        <span className="right"></span>
                                        <span className="bottom"></span>
                                        <div className="flex justify-between mb-12">
                                            <Image src={"/brand-img/service-icon1.png"} className="icon" width={50} height={50}></Image>
                                            <span className="font-poppins text-4xl">01</span>
                                        </div>
                                        <p >Craft engaging books aligned with your voice and vision.</p>
                                        <h4 className="mt-4 font-poppins text-2xl">Book Ghostwriting</h4>

                                    </div>
                                    <div className="basis-1/2 brand-service-card-img relative">
                                        <span class="square">
                                            <Link href="/ghostwriting">Read More</Link>
                                        </span>
                                        <div className="service-card-img">
                                            <Image src={"/brand-img/bgw.jpg"} width={250} height={200}></Image>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-service-card flex gap-4  md:w-full mx-auto text-center">
                                    <div className="brand-service-card-content basis-1/2 relative">
                                        <span className="right"></span>
                                        <span className="bottom"></span>
                                        <div className="flex justify-between mb-12">
                                            <Image src={"/brand-img/service-icon2.png"} className="icon" width={50} height={50}></Image>
                                            <span className="font-poppins text-4xl">02</span>
                                        </div>
                                        <p >Create noteworthy resumes that spotlight your strengths.</p>
                                        <h4 className="mt-4 font-poppins text-2xl break-words">Resume Writing</h4>
                                    </div>
                                    <div className="basis-1/2 brand-service-card-img relative">
                                        <span class="square">
                                            <Link href="/resume-writing">Read More</Link>
                                        </span>
                                        <div className="service-card-img">
                                            <Image src={"/brand-img/rw.jpg"} width={250} height={200}></Image>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                        {/* 2 of 4 */}
                        <div className="brand-service-content justify-center flex mt-4 gap-4 flex-col md:flex-row aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                            <SwiperSlide>
                                <div className="brand-service-card flex gap-4  md:w-full mx-auto text-center">
                                    <div className="basis-1/2 brand-service-card-img relative">
                                        <span class="square">
                                            <Link href="/wikipedia-writing">Read More</Link>
                                        </span>
                                        <div className="service-card-img">
                                            <Image src={"/brand-img/ww.jpg"} width={270} height={200}></Image>
                                        </div>
                                    </div>

                                    <div className="brand-service-card-content basis-1/2 relative">
                                        <span className="right-4"></span>
                                        <span className="bottom-4"></span>
                                        <div className="flex justify-between mb-12">
                                            <Image src={"/brand-img/service-icon3.png"} className="icon" width={50} height={50}></Image>
                                            <span className="font-poppins text-4xl">03</span>
                                        </div>
                                        <p >Well-researched and well-written Wikipedia articles.</p>
                                        <h4 className="mt-4 font-poppins text-2xl">Wikipedia Writing</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-service-card flex gap-4  md:w-full mx-auto text-center">
                                    <div className="basis-1/2 brand-service-card-img relative">
                                        <span class="square">
                                            <Link href="/web-copywriting">Read More</Link>
                                        </span>
                                        <div className="service-card-img">
                                            <Image src={"/brand-img/wcw.jpg"} width={250} className="icon" height={200}></Image>
                                        </div>
                                    </div>
                                    <div className="brand-service-card-content gap-4 basis-1/2 relative">
                                        <span className="right-4"></span>
                                        <span className="bottom-4"></span>
                                        <div className="flex justify-between mb-12">
                                            <Image src={"/brand-img/service-icon4.png"} className="icon" width={50} height={50}></Image>
                                            <span className="font-poppins text-4xl">04</span>
                                        </div>
                                        <p >Informative yet promotional web copies that help drive conversion.</p>
                                        <h4 className="mt-4 font-poppins text-2xl uppercase">Web Copywriting</h4>
                                    </div>

                                </div>
                            </SwiperSlide>
                        </div>

                        {/* 4 of 6 */}
                        <div className="brand-service-content justify-center flex gap-4 mt-4 flex-col md:flex-row aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                            <SwiperSlide>
                                <div className="brand-service-card flex gap-4  md:w-full mx-auto text-center">
                                    <div className="brand-service-card-content basis-1/2 relative">
                                        <span className="right-5"></span>
                                        <span className="bottom-5"></span>
                                        <div className="flex justify-between mb-12">
                                            <Image src={"/brand-img/service-icon5.png"} width={50} className="icon" height={50}></Image>
                                            <span className="font-poppins text-4xl">05</span>
                                        </div>
                                        <p >SEO-optimized copywriting to rank your website on SERP.</p>
                                        <h4 className="mt-4 font-poppins text-2xl">SEO Content Writing</h4>
                                    </div>
                                    <div className="basis-1/2 brand-service-card-img relative">
                                        <span class="square">
                                            <Link href="/seo-content">Read More</Link>
                                        </span>
                                        <div className="service-card-img">
                                            <Image src={"/brand-img/seocw.jpg"} width={250} height={200}></Image>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-service-card flex gap-4  md:w-full mx-auto text-center">
                                    <div className="brand-service-card-content basis-1/2 relative">
                                        <span className="right-5"></span>
                                        <span className="bottom-5"></span>
                                        <div className="flex justify-between mb-12">
                                            <Image src={"/brand-img/service-icon6.png"} width={50} className="icon" height={50}></Image>
                                            <span className="font-poppins text-4xl">06</span>
                                        </div>
                                        <p >Write informative & engaging blog posts and articles.</p>
                                        <h4 className="mt-4 font-poppins text-2xl">Blogs & Article Writing</h4>
                                    </div>
                                    <div className="basis-1/2 brand-service-card-img relative">
                                        <span class="square">
                                            <Link href="/blog-article-writing">Read More</Link>
                                        </span>
                                        <div className="service-card-img">
                                            <Image src={"/brand-img/b&a.jpg"} width={250} height={200}></Image>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>



                        {/* 6 of 8 */}
                        <div className="brand-service-content  justify-center flex mt-4 gap-4 flex-col md:flex-row aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                            <SwiperSlide>
                                <div className="brand-service-card flex gap-4  md:w-full mx-auto text-center">
                                    <div className="basis-1/2 brand-service-card-img relative">
                                        <span class="square">
                                            <Link href="/press-release-writing">Read More</Link>
                                        </span>
                                        <div className="service-card-img">
                                            <Image src={"/brand-img/pr.jpg"} width={270} height={200}></Image>
                                        </div>
                                    </div>
                                    <div className="brand-service-card-content basis-1/2 relative">
                                        <span className="right-4"></span>
                                        <span className="bottom-4"></span>
                                        <div className="flex justify-between mb-12">
                                            <Image src={"/brand-img/service-icon7.png"} className="icon" width={50} height={50}></Image>
                                            <span className="font-poppins text-4xl">07</span>
                                        </div>
                                        <p >Impactful press releases to promote/announce your news & events .</p>
                                        <h4 className="mt-4 font-poppins text-2xl">PR Writing</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-service-card flex gap-4  md:w-full mx-auto text-center">
                                    <div className="basis-1/2 brand-service-card-img relative">
                                        <span class="square">
                                            <Link href="/script-writing">Read More</Link>
                                        </span>
                                        <div className="service-card-img">
                                            <Image src={"/brand-img/sw.jpg"} width={250} className="icon" height={200}></Image>
                                        </div>
                                    </div>
                                    <div className="brand-service-card-content gap-4 basis-1/2 relative">
                                        <span className="right-4"></span>
                                        <span className="bottom-4"></span>
                                        <div className="flex justify-between mb-12">
                                            <Image src={"/brand-img/service-icon8.png"} className="icon" width={50} height={50}></Image>
                                            <span className="font-poppins text-4xl">08</span>
                                        </div>
                                        <p >Expert script writing for product presentations, audios & videos.</p>
                                        <h4 className="mt-4 font-poppins text-2xl uppercase">Script Writing</h4>
                                    </div>

                                </div>
                            </SwiperSlide>
                        </div>

                        {/* 8 of 10 */}
                        <div className="brand-service-content justify-center flex gap-4 mt-4 flex-col md:flex-row aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                            <SwiperSlide>
                                <div className="brand-service-card flex gap-4  md:w-full mx-auto text-center">
                                    <div className="brand-service-card-content basis-1/2 relative">
                                        <span className="right-5"></span>
                                        <span className="bottom-5"></span>
                                        <div className="flex justify-between mb-12">
                                            <Image src={"/brand-img/service-icon9.png"} width={50} className="icon" height={50}></Image>
                                            <span className="font-poppins text-4xl">09</span>
                                        </div>
                                        <p >Produce social media post copies to engage your audience.</p>
                                        <h4 className="mt-4 font-poppins text-2xl">Social Media Copywriting</h4>
                                    </div>
                                    <div className="basis-1/2 brand-service-card-img relative">
                                        <span class="square">
                                            <Link href="/social-media-copywriting">Read More</Link>
                                        </span>
                                        <div className="service-card-img">
                                            <Image src={"/brand-img/smcw.jpg"} width={250} height={200}></Image>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-service-card flex gap-4  md:w-full mx-auto text-center">
                                    <div className="brand-service-card-content basis-1/2 relative">
                                        <span className="right-5"></span>
                                        <span className="bottom-5"></span>
                                        <div className="flex justify-between mb-12">
                                            <Image src={"/brand-img/service-icon10.png"} width={50} className="icon" height={50}></Image>
                                            <span className="font-poppins text-4xl">10</span>
                                        </div>
                                        <p >Informative & Persuasive product descriptions to uplift sales.</p>
                                        <h4 className="mt-4 font-poppins text-2xl">Product Description Writing</h4>
                                    </div>
                                    <div className="basis-1/2 brand-service-card-img relative">
                                        <span class="square">
                                            <Link href="/product-description">Read More</Link>
                                        </span>
                                        <div className="service-card-img">
                                            <Image src={"/brand-img/pd.jpg"} width={250} height={200}></Image>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                        </Swiper>


                </div>
            </section>
        </>
    );
}