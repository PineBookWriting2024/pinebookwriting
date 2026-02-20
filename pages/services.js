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
                <title>Exceptional Book writing services | Pine Book Writing</title>
                                <link rel="canonical" href="https://www.pinebookwriting.com/services" />

                <meta
                    name="description"
                    content="Explore our professional, marketing, and book writing services at Pine Book Writing. Affordable writing services for business professionals and authors."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"brand-img/services-banner.jpg"}
                title="Up Your Writing Passion with the Leading Book Writing Service "
                desc="Finding the right words is not that easy. But with a full-scale expert writers' team? It does. Our book writing services are here to create news ideas, plan a better structure, and get steady guidance in writing. Move forward with clarity and real writer support."
            />
            <BrandBannerLogo />
            {/* <BrandServices/> */}
<div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:py-20">
                <div className="flex flex-col items-center justify-center px-8 py-10 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="text-3xl font-bold uppercase font-poppins md:text-4xl">Professional Book Writing Services | Pine Book Writing</h2>

                        <h2 className="text-2xl uppercase font-poppins md:text-3xl">
                      All genres. One trusted team.
                        </h2>
                       
                        <p className="pt-3 text-xl text-left font-poppins">
                      Writing a book often starts with excitement. But then confusion hits. And that’s normal. Our book writing services are designed to support writers and authors at every stage of the journey. We work with fiction and non-fiction, short or long projects, and first-time or experienced authors. Here, you’ll collaborate with experienced project managers and experienced book writers who listen carefully before executing your vision. </p>

                        <p className="pt-3 text-xl text-left font-poppins">We don't just help with writing. But with Planning. Drafting. Editing and Revisions. We work without rushing or forcing ideas. Every manuscript is shaped around your unique voice and handled with care. We believe in simple processes, honest guidance and writing that genuinely connects with readers.
</p>
                    </div>
                    <div className="flex justify-center text-center basis-1/2 abt-pic md:justify-center">
                        <Image src={"/images/Memoir-Writing/ghost-pic.webp"} width={470} height={300}
                            loading="lazy"
                            alt="about img"
                            className="aos-init aos-animate"
                            data-aos="fade-left" data-aos-duration="1000"
                        />
                    </div>
                </div>
                {/* <p className="px-10 text-xl text-justify font-poppins md:px-0" data-aos="fade-right">
                    Working with a professional editor also gives authors the chance to learn and grow, preparing them for future writing projects. At Pine Book Writing, we support this learning process, helping authors develop their skills and reach their full potential.
                </p> */}
            </div>

            <section className="overflow-hidden brand-service-section lg:block md:block">
                <div className="relative max-w-screen-xl px-4 mx-auto my-20">
                    <div className="mb-6 text-center">

                        <h2 className="pb-4 text-3xl font-bold leading-normal text-black font-poppins md:text-5xl"> Writing Services We Offer</h2>
                        <h3 className="text-xl text-black font-poppins">Choose Pine Book Writing Services and Hire the Best Writer for Your Purpose
                        </h3>
                        <p className="pt-3 text-black">We don't just have a team of book writers for hire, Our team also includes copywriters, scriptwriters, and bloggers, allowing us to provide comprehensive writing solutions under one roof.</p>
                    </div>

                    {/* 1 of 2 */}
                    <div className="flex flex-col justify-center gap-4 brand-service-content md:flex-row aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                        <div className="flex flex-col gap-4 mx-auto text-center brand-service-card md:flex-row md:w-full">
                            <div className="relative brand-service-card-content basis-1/2">
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon1.png"} className="icon" width={50} height={50}></Image>
                                    <span className="text-4xl font-poppins">01</span>
                                </div>
                                <p >Professional assistance in writing your book, your way.</p>
                                <h4 className="mt-4 text-2xl font-poppins">Book Ghostwriting</h4>

                            </div>
                            <div className="relative basis-1/2 brand-service-card-img">
                                <span className="square">
                                    <Link href="/ghostwriting">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/bgw.jpg"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mx-auto text-center brand-service-card md:flex-row md:w-full">
                            <div className="relative brand-service-card-content basis-1/2">
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon2.png"} className="icon" width={50} height={50}></Image>
                                    <span className="text-4xl font-poppins">02</span>
                                </div>
                                <p >Creating magical worlds and unforgettable character arcs.</p>
                                <h4 className="mt-4 text-2xl break-words font-poppins">Fiction Book Writing</h4>
                            </div>
                            <div className="relative basis-1/2 brand-service-card-img">
                                <span className="square">
                                    <Link href="/resume-writing">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/fiction-9.png"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2 of 4 */}
                    <div className="flex flex-col justify-center gap-4 mt-4 brand-service-content md:flex-row aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">

                        <div className="flex flex-col gap-4 mx-auto text-center brand-service-card md:flex-row md:w-full">
                            <div className="relative basis-1/2 brand-service-card-img">
                                <span className="square">
                                    <Link href="/press-release-writing">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/non-fiction-7.png"} width={270} height={200}></Image>
                                </div>
                            </div>
                            <div className="relative brand-service-card-content basis-1/2">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon7.png"} className="icon" width={50} height={50}></Image>
                                    <span className="text-4xl font-poppins">03</span>
                                </div>
                                <p >Creating magical worlds and unforgettable character arcs.</p>
                                <h4 className="mt-4 text-2xl font-poppins">Non-Fiction Writing</h4>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mx-auto text-center brand-service-card md:flex-row md:w-full">
                            <div className="relative basis-1/2 brand-service-card-img">
                                <span className="square">
                                    <Link href="/web-copywriting">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/wcw.jpg"} width={250} className="icon" height={200}></Image>
                                </div>
                            </div>
                            <div className="relative gap-4 brand-service-card-content basis-1/2">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon4.png"} className="icon" width={50} height={50}></Image>
                                    <span className="text-4xl font-poppins">04</span>
                                </div>
                                <p >Write and build futuristic galaxies and rousing technologies.</p>
                                <h4 className="mt-4 text-2xl uppercase font-poppins">Sci-Fi Book Writing</h4>
                            </div>

                        </div>

                    </div>

                    {/* 4 of 6 */}
                    <div className="flex flex-col justify-center gap-4 mt-4 brand-service-content md:flex-row aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                        <div className="flex flex-col gap-4 mx-auto text-center brand-service-card md:flex-row md:w-full">
                            <div className="relative brand-service-card-content basis-1/2">
                                <span className="right-5"></span>
                                <span className="bottom-5"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon5.png"} width={50} className="icon" height={50}></Image>
                                    <span className="text-4xl font-poppins">05</span>
                                </div>
                                <p >Write a High-ranking copy intended to uplift your digital visibility.</p>
                                <h4 className="mt-4 text-2xl font-poppins">SEO Content Writing</h4>
                            </div>
                            <div className="relative basis-1/2 brand-service-card-img">
                                <span className="square">
                                    <Link href="/seo-content">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/seocw.jpg"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mx-auto text-center brand-service-card md:flex-row md:w-full">
                            <div className="relative brand-service-card-content basis-1/2">
                                <span className="right-5"></span>
                                <span className="bottom-5"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon6.png"} width={50} className="icon" height={50}></Image>
                                    <span className="text-4xl font-poppins">06</span>
                                </div>
                                <p >Children's Book Writing</p>
                                <h4 className="mt-4 text-2xl font-poppins">Children's Book Writing</h4>
                            </div>
                            <div className="relative basis-1/2 brand-service-card-img">
                                <span className="square">
                                    <Link href="/childrens-book-writing">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/b&a.jpg"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="mt-6 text-center">
                        <button className="mt-10 shadow-xl cursor-pointer brand-nav-btn btn-g"><Link href="/services">Read More</Link></button>
                    </div> */}

                    {/* 6 of 8 */}
                    <div className="flex flex-col justify-center gap-4 mt-4 brand-service-content md:flex-row aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">

                        <div className="flex flex-col gap-4 mx-auto text-center brand-service-card md:flex-row md:w-full">
                            <div className="relative basis-1/2 brand-service-card-img">
                                <span className="square">
                                    <Link href="/wikipedia-writing">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/ww.jpg"} width={270} height={200}></Image>
                                </div>
                            </div>

                            <div className="relative brand-service-card-content basis-1/2">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon3.png"} className="icon" width={50} height={50}></Image>
                                    <span className="text-4xl font-poppins">07</span>
                                </div>
                                <p >Informative yet persuasive web copies that help drive conversion.</p>
                                <h4 className="mt-4 text-2xl font-poppins">Web Copywriting</h4>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mx-auto text-center brand-service-card md:flex-row md:w-full">
                            <div className="relative basis-1/2 brand-service-card-img">
                                <span className="square">
                                    <Link href="/script-writing">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/sw.jpg"} width={250} className="icon" height={200}></Image>
                                </div>
                            </div>
                            <div className="relative gap-4 brand-service-card-content basis-1/2">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon8.png"} className="icon" width={50} height={50}></Image>
                                    <span className="text-4xl font-poppins">08</span>
                                </div>
                                <p >Write insightful & engaging blog posts and articles.</p>
                                <h4 className="mt-4 text-2xl uppercase font-poppins">Blogs & Article Writing</h4>
                            </div>

                        </div>
                    </div>

                    {/* 8 of 10 */}
                    <div className="flex flex-col justify-center gap-4 mt-4 brand-service-content md:flex-row aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                        <div className="flex flex-col gap-4 mx-auto text-center brand-service-card md:flex-row md:w-full">
                            <div className="relative brand-service-card-content basis-1/2">
                                <span className="right-5"></span>
                                <span className="bottom-5"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon9.png"} width={50} className="icon" height={50}></Image>
                                    <span className="text-4xl font-poppins">09</span>
                                </div>
                                <p >Expert script writing for product presentations, audios & videos.</p>
                                <h4 className="mt-4 text-2xl font-poppins">Script Writing Services</h4>
                            </div>
                            <div className="relative basis-1/2 brand-service-card-img">
                                <span className="square">
                                    <Link href="/social-media-copywriting">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/smcw.jpg"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mx-auto text-center brand-service-card md:flex-row md:w-full">
                            <div className="relative brand-service-card-content basis-1/2">
                                <span className="right-5"></span>
                                <span className="bottom-5"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon10.png"} width={50} className="icon" height={50}></Image>
                                    <span className="text-4xl font-poppins">10</span>
                                </div>
                                <p >Create digital books optimized for modern reading platforms.</p>
                                <h4 className="mt-4 text-2xl font-poppins">Ebook Writing</h4>
                            </div>
                            <div className="relative basis-1/2 brand-service-card-img">
                                <span className="square">
                                    <Link href="/product-description">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/pd.jpg"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-4 brand-service-content md:flex-row aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                        <div className="flex gap-4 brand-service-card">

                            <div className="relative basis-1/2 brand-service-card-img">
                                <span className="square">
                                    <Link href="https://pinebookpublishing.com/book-editing" target="_blank">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/service-img1.png"} width={250} height={200}></Image>
                                </div>
                            </div>
                            <div className="relative brand-service-card-content basis-1/2">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon1-book-editing.png"} className="icon" width={50} height={50}></Image>
                                    <span className="text-4xl font-poppins">11</span>
                                </div>
                                <p >Write rhythmic verses that create a catchy reading flow..</p>
                                <h4 className="mt-4 text-2xl font-poppins">Rhymes Writing</h4>
                            </div>
                        </div>
                        <div className="flex gap-4 brand-service-card">

                            <div className="relative basis-1/2 brand-service-card-img">
                                <span className="square">
                                    <Link href="https://pinebookpublishing.com/proofreading" target="_blank">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/service-img2.png"} width={250} height={200}></Image>
                                </div>
                            </div>
                            <div className="relative brand-service-card-content basis-1/2">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon2-proofreading.png"} className="icon" width={50} height={50}></Image>
                                    <span className="text-4xl font-poppins">12</span>
                                </div>
                                <p >Bringing your book to the shelves and screens of the world.</p>
                                <h4 className="mt-4 text-2xl break-words font-poppins">Book Publishing</h4>
                            </div>
                        </div>
                    </div>
                    {/* 2 of 4 */}
                    <div className="flex flex-col gap-4 mt-4 brand-service-content md:flex-row aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        <div className="flex gap-4 brand-service-card">
                            <div className="relative brand-service-card-content basis-1/2">
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon3-book-formatting.png"} className="icon" width={50} height={50}></Image>
                                    <span className="text-4xl font-poppins">13</span>
                                </div>
                                <p >Let's help make your draft into a masterpiece.</p>
                                <h4 className="mt-4 text-2xl font-poppins">Book Editing</h4>
                            </div>
                            <div className="relative basis-1/2 brand-service-card-img">
                                <span className="square">
                                    <Link href="https://pinebookpublishing.com/book-formatting" target="_blank">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/service-img3.webp"} width={270} height={200}></Image>
                                </div>
                            </div>

                        </div>
                        <div className="flex gap-4 brand-service-card">

                            <div className="relative gap-4 brand-service-card-content basis-1/2">
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon4-typesetting.png"} className="icon" width={50} height={50}></Image>
                                    <span className="text-4xl font-poppins">14</span>
                                </div>
                                <p >Let's not let any typo or any mistake be ignored.</p>
                                <h4 className="mt-4 text-2xl uppercase font-poppins">Proofreading</h4>
                            </div>
                            <div className="relative basis-1/2 brand-service-card-img">
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
                    <div className="flex flex-col gap-4 mt-4 brand-service-content md:flex-row aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                        <div className="flex gap-4 brand-service-card">
                            <div className="relative basis-1/2 brand-service-card-img">
                                <span className="square">
                                    <Link href="https://pinebookpublishing.com/book-publishing" target="_blank">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/service-img6.webp"} width={250} height={200}></Image>
                                </div>
                            </div>
                            <div className="relative brand-service-card-content basis-1/2">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon-publishing.png"} width={50} className="icon" height={50}></Image>
                                    <span className="text-4xl font-poppins">15</span>
                                </div>
                                <p >Give your words a perfect reading frame.</p>
                                <h4 className="mt-4 text-2xl font-poppins">Book Formatting</h4>
                            </div>
                        </div>
                        <div className="flex gap-4 brand-service-card">
                            <div className="relative basis-1/2 brand-service-card-img">
                                <span className="square">
                                    <Link href="https://pinebookpublishing.com/print-on-demand" target="_blank">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/Print on Demand.jpg"} width={250} height={200}></Image>
                                </div>
                            </div>
                            <div className="relative brand-service-card-content basis-1/2">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/Printing Icon.png"} width={50} className="icon" height={50}></Image>
                                    <span className="text-4xl font-poppins">16</span>
                                </div>
                                <p>We align your content with professional precision.</p>
                                <h4 className="mt-4 text-2xl uppercase font-poppins">Typesetting & Layout Adjustment</h4>
                            </div>
                        </div>
                    </div>

                    {/* <div className="mt-6 text-center">
                        <button className="mt-10 shadow-xl cursor-pointer brand-nav-btn btn-g"><Link href="https://pinebookpublishing.com/services" target="_blank">Read More</Link></button>
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
