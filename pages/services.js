import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BrandFooter from "./components/BrandFooter";
import BrandNavbar from "./components/BrandNavbar";
import BrandBannerLogo from "./components/BrandBannerLogo";
import BrandChooseUs from "./components/BrandChooseUs";
import BrandContact from "./components/BrandContactForm";
import BrandPrimaryHeader from "./components/BrandPrimaryHeader";
import BrandProcess from "./components/BrandProcess";
import BrandFaqs from "./components/BrandFaqs";
import BrandServices from "./components/BrandServices";
import NewBrandFooter from "./components/NewBrandFooter";
import BrandTopBar from "./components/BrandTopBar";

export default function Services() {


    return (
        <>
            <Head>
                <title>Services the Company | Pine Book Writing</title>
                                <link rel="canonical" href="https://www.pinebookwriting.com/services" />

                <meta
                    name="description"
                    content="Everything about Pine Book Writing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"brand-img/services-banner.jpg"}
                title="Supercharge Your Writing Passion with Expert Content Writing Services"
                desc="Are you in search of a professional writing agency? If yes, then you're at the right place. Pine Book Writing offers all-inclusive services, from book writing and creative marketing copies to outstanding resume writing."
            />
            <BrandBannerLogo />
            {/* <BrandServices/> */}
            <section className="brand-service-section overflow-hidden lg:block md:block">
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
                                <span className="square">
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
                                <span className="square">
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
                                <span className="square">
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
                                    <span className="font-poppins text-4xl">03</span>
                                </div>
                                <p >Impactful press releases to promote/announce your news & events .</p>
                                <h4 className="mt-4 font-poppins text-2xl">PR Writing</h4>
                            </div>
                        </div>

                        <div className="brand-service-card flex gap-4 md:flex-row flex-col md:w-full mx-auto text-center">
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span className="square">
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
                                <span className="square">
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
                                <span className="square">
                                    <Link href="/blog-article-writing">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/b&a.jpg"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="text-center mt-6">
                        <button className="brand-nav-btn shadow-xl mt-10 cursor-pointer btn-g"><Link href="/services">Read More</Link></button>
                    </div> */}

                    {/* 6 of 8 */}
                    <div className="brand-service-content  justify-center flex mt-4 gap-4 flex-col md:flex-row aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">

                        <div className="brand-service-card flex gap-4 md:flex-row flex-col md:w-full mx-auto text-center">
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span className="square">
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
                                    <span className="font-poppins text-4xl">07</span>
                                </div>
                                <p >Well-researched and well-written Wikipedia articles.</p>
                                <h4 className="mt-4 font-poppins text-2xl">Wikipedia Writing</h4>
                            </div>
                        </div>
                        <div className="brand-service-card flex gap-4 md:flex-row flex-col md:w-full mx-auto text-center">
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span className="square">
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
                                <span className="square">
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
                                <span className="square">
                                    <Link href="/product-description">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/pd.jpg"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="brand-service-content flex mt-4 gap-4 flex-col md:flex-row aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                        <div className="brand-service-card flex gap-4">

                            <div className="basis-1/2 brand-service-card-img relative">
                                <span className="square">
                                    <Link href="https://pinebookpublishing.com/book-editing" target="_blank">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/service-img1.png"} width={250} height={200}></Image>
                                </div>
                            </div>
                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon1-book-editing.png"} className="icon" width={50} height={50}></Image>
                                    <span className="font-poppins text-4xl">11</span>
                                </div>
                                <p >We turn your drafts into masterpieces.</p>
                                <h4 className="mt-4 font-poppins text-2xl">BOOK EDITING</h4>
                            </div>
                        </div>
                        <div className="brand-service-card flex gap-4">

                            <div className="basis-1/2 brand-service-card-img relative">
                                <span className="square">
                                    <Link href="https://pinebookpublishing.com/proofreading" target="_blank">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/service-img2.png"} width={250} height={200}></Image>
                                </div>
                            </div>
                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon2-proofreading.png"} className="icon" width={50} height={50}></Image>
                                    <span className="font-poppins text-4xl">12</span>
                                </div>
                                <p >Catching every typo, ensuring perfection</p>
                                <h4 className="mt-4 font-poppins text-2xl break-words">PROOFREADING</h4>
                            </div>
                        </div>
                    </div>
                    {/* 2 of 4 */}
                    <div className="brand-service-content flex mt-4 gap-4 flex-col md:flex-row aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        <div className="brand-service-card flex gap-4">
                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon3-book-formatting.png"} className="icon" width={50} height={50}></Image>
                                    <span className="font-poppins text-4xl">13</span>
                                </div>
                                <p >Giving your words the perfect structure.</p>
                                <h4 className="mt-4 font-poppins text-2xl">BOOK FORMATTING</h4>
                            </div>
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span className="square">
                                    <Link href="https://pinebookpublishing.com/book-formatting" target="_blank">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/service-img3.webp"} width={270} height={200}></Image>
                                </div>
                            </div>

                        </div>
                        <div className="brand-service-card flex gap-4">

                            <div className="brand-service-card-content gap-4 basis-1/2 relative">
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon4-typesetting.png"} className="icon" width={50} height={50}></Image>
                                    <span className="font-poppins text-4xl">14</span>
                                </div>
                                <p >Aligning your content with professional precision.</p>
                                <h4 className="mt-4 font-poppins text-2xl uppercase">Typesetting & Layout adjustment</h4>
                            </div>
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span className="square">
                                    <Link href="https://pinebookpublishing.com/typesetting-layout-adjustment" target="_blank">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/service-img4.webp"} width={250} className="icon" height={200}></Image>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4 of 6 */}
                    <div className="brand-service-content flex gap-4 mt-4 flex-col md:flex-row aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                        <div className="brand-service-card flex gap-4">
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span className="square">
                                    <Link href="https://pinebookpublishing.com/book-publishing" target="_blank">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/service-img6.webp"} width={250} height={200}></Image>
                                </div>
                            </div>
                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon-publishing.png"} width={50} className="icon" height={50}></Image>
                                    <span className="font-poppins text-4xl">15</span>
                                </div>
                                <p >Bringing your story to the shelves and screens of the world.</p>
                                <h4 className="mt-4 font-poppins text-2xl">BOOK PUBLISHING</h4>
                            </div>
                        </div>
                        <div className="brand-service-card flex gap-4">
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span className="square">
                                    <Link href="https://pinebookpublishing.com/print-on-demand" target="_blank">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/Print on Demand.jpg"} width={250} height={200}></Image>
                                </div>
                            </div>
                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/Printing Icon.png"} width={50} className="icon" height={50}></Image>
                                    <span className="font-poppins text-4xl">16</span>
                                </div>
                                <p>Streamline your book printing process with our expert Print-On-Demand Services</p>
                                <h4 className="mt-4 font-poppins text-2xl uppercase">Print On Demand</h4>
                            </div>
                        </div>
                    </div>

                    {/* <div className="text-center mt-6">
                        <button className="brand-nav-btn shadow-xl mt-10 cursor-pointer btn-g"><Link href="https://pinebookpublishing.com/services" target="_blank">Read More</Link></button>
                    </div> */}
                </div>
            </section>
            <BrandChooseUs />
            <BrandFaqs />
            <BrandContact />
            {/* <BrandFooter /> */}
            <NewBrandFooter />
        </>
    );
}
