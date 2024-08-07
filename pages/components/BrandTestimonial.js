import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BrandTestimonial() {

    return (
        <>
            <section className="brand-testimonials-section overflow-hidden">
                <div className="max-w-screen-xl mx-auto px-4 my-20 relative py-22">
                    <div className="text-center mb-6">
                        <h2 className="font-poppins text-4xl text-black font-bold">TESTIMONIALS</h2>
                    </div>
                  
                    <div className="flex justify-center gap-5 flex-col md:flex-row">
                        <div className="brand-testimonials-card relative aos-init aos-animate" data-aos="flip-left">
                            <Link href={"https://www.trustpilot.com/reviews/65e634c30515c28c7a696898"} target="_blank">
                                <div className="flex justify-between items-center mb-5">
                                    <Image src={"/brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="flex items-center relative left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">US</span>
                                    </div>
                                </div>
                                <h2 className="font-poppins text-xl font-bold pt-3">My experience with Pine Book Writing</h2>
                                <p className="mb-5 pt-2">My experience with Pine Book Writing was beyond excellent. I love working with Lia Sinclair and i hope when it is time to publish my next book i get her. I love the fact that they design the cover to go with the book.

</p>
                                <span className="absolute bottom-0 mb-2">jacqueline cunningham, May 24, 2024</span>
                            </Link>
                        </div>

                        <div className="brand-testimonials-card relative aos-animate" data-aos="flip-right">
                            <Link href={"https://www.trustpilot.com/users/6650efdb713a439e98e1faaf"} target="_blank">
                                <div className="flex justify-between items-center mb-5">
                                    <Image src={"/brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="flex items-center relative left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">US</span>
                                    </div>
                                </div>
                                <h2 className="font-poppins text-xl font-bold pt-3">Good Work on Publishing</h2>
                                <p className="mb-5 pt-2">Pine Book Writing did a good job on printing and delivering copies of my book of poetry written in Russian. They did it expeditiously and in promised time, actually, a bit faster. The quality of the paper used and printing was quite adequate. Ryan Peters, the publication manager, was very approachable, friendly, and quick to reply to my requests and questions. Dealing with Damon, the owner, was a good experience as well.</p>
                                <span className="absolute bottom-0 mb-2">Fima, Feb 16, 2024</span>
                            </Link>
                        </div>

                        <div className="brand-testimonials-card relative aos-animate" data-aos="flip-left">
                            <Link href={"https://www.trustpilot.com/reviews/6659123899d40666a7b06b45"} target="_blank">
                                <div className="flex justify-between items-center mb-5">
                                    <Image src={"/brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="flex items-center relative left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">US</span>
                                    </div>
                                </div>
                                <h2 className="font-poppins text-xl font-bold pt-3">This is John Bowman</h2>
                                <p className="mb-5 pt-2">This is John Bowman. I would just love to give a shout out to Pine Book Writing, my experience with them has really been beyond words. From.Lia Sinclair, Damon Peters for taking me on. I am a Christian and it has been an answer to my prayers after 4 1/2 years looking for an honest publisher thank you all so much.</p>
                                <span className="absolute bottom-0 mb-2">John Bowman, May 30, 2024</span>
                            </Link>
                        </div>

                    </div>

                    <div className="flex justify-center gap-5 mt-5 flex-col md:flex-row">
                      
                        <div className="brand-testimonials-card relative aos-animate" data-aos="flip-up" data-aos-delay="0" data-aos-duration="500">
                            <Link href={"https://www.trustpilot.com/reviews/669d127512bc98c19572c5d1"} target="_blank">
                                <div className="flex justify-between items-center mb-5">
                                    <Image src={"/brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="flex items-center relative left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">US</span>
                                    </div>
                                </div>
                                <h2 className="font-poppins text-xl font-bold pt-3">results for value</h2>
                                <p className="mb-5 pt-2">I had a great experience because as a first-time author I didn't really know the process. They helped walk me through the process step by step. Whenever I needed to talk with them, they made time for me. We had a big project, and they helped me finish it. My time spent with Pine Book Writing produced results. They helped me finish my project and for that I am very thankful.

</p>
                                <span className="absolute bottom-0 mb-2">kyle climer, July 21, 2024</span>
                            </Link>
                        </div>

                        <div className="brand-testimonials-card relative aos-animate" data-aos="flip-right"  data-aos-easing="ease-out-cubic" data-aos-delay="0" data-aos-duration="500">
                            <Link href={"https://www.trustpilot.com/reviews/64c9be4dd5f3423b1473d2e3"} target="_blank">
                                <div className="flex justify-between items-center mb-5">
                                    <Image src={"/brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="flex items-center relative left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">US</span>
                                    </div>
                                </div>
                                <h2 className="font-poppins text-xl font-bold pt-3">
                                Commendable Service</h2>
                                <p className="mb-5 pt-2">I sought Pine Book Writing's ghostwriting expertise for my self-help book, and I must say, they did an excellent job. The writer displayed a deep understanding of the subject matter and articulated it coherently. The turnaround time was quite reasonable, and they were receptive to my inputs. With just a few proofreading hiccups, their service proved to be commendable, and I'm pleased with the final result.
</p>
                                <span className="absolute bottom-0 mb-2">
                                Eldon Meeker, July 31, 2023</span>
                            </Link>
                        </div>

                        <div className="brand-testimonials-card relative aos-animate" data-aos="flip-down" data-aos-delay="0" data-aos-duration="500">
                            <Link href={"https://www.trustpilot.com/reviews/657218558d2388bbf298cfff"} target="_blank">
                                <div className="flex justify-between items-center mb-5">
                                    <Image src={"/brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="flex items-center relative left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">CA</span>
                                    </div>
                                </div>
                                <h2 className="font-poppins text-xl font-bold pt-3">
                                Pine books and their associates are</h2>
                                <p className="mb-5 pt-2">Pine books and their associates are excellent. Everyone is helpful and care about you, your ideas, and how hard you've worked with your manuscript. Steve, Lia, Ryan, and David go beyond their job. They deserve a raise. I recommend Pine books for all your writing needs.

.



</p>
                                <span className="absolute bottom-0 mb-2">Katie Loftis, September 20, 2023</span>
                            </Link>
                        </div>

                    </div>

                    {/* <p className="font-poppins mb-2 text-center mt-8 text-3xl">Rated 4.2 / 5 Based on 9 Reviews. Showing our latest reviews.</p> */}
                </div>
            </section>
        </>
    );
}