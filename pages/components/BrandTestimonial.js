import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function BrandTestimonial() {

    return (
        <>
            <section className="overflow-hidden brand-testimonials-section">
                <div className="relative max-w-screen-xl px-4 mx-auto my-10 md:my-20 py-22">
                    <div className="mb-6 text-center">
                        <h2 className="text-4xl font-bold text-black font-poppins">Our Success Stories</h2>
                    </div>

<div className="grid grid-cols-1 gap-6 md:grid-cols-3">

  {/* Video 1 */}
  <Link href="/testimonials">
    <div className="p-4 bg-white rounded-lg shadow cursor-pointer">
      <h3 className="text-xl text-black">Lesvi Ferrel</h3>

      <iframe
        className="w-full py-4"
        height="225"
        src="https://www.youtube.com/embed/xUTyiqPY6Oo"
        title="Love And Laughter"
        allowFullScreen
      ></iframe>

      <h4 className="text-black">
        <span className="font-bold">Book Title:</span> Love And Laughter
      </h4>
      <h4 className="text-black">
        <span className="font-bold">Consultant:</span> Damon Peters
      </h4>
      <h4 className="text-black">
        <span className="font-bold">Project Manager:</span> Amara Johnson & Ryan Peters
      </h4>
    </div>
  </Link>

  {/* Video 2 */}
  <Link href="/testimonials">
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl text-black">Stacey L. Joiner</h3>

      <iframe
        className="w-full py-4"
        height="225"
        src="https://www.youtube.com/embed/QMirTma0Wf4"
        title="Rising 2 B’Come"
        allowFullScreen
      ></iframe>

      <h4 className="text-black">
        <span className="font-bold">Book Title:</span> Rising 2 B’Come
      </h4>
      <h4 className="text-black">
        <span className="font-bold">Consultant:</span> Damon Peters
      </h4>
      <h4 className="text-black">
        <span className="font-bold">Project Manager:</span> Amara Johnson & Melissa
      </h4>
    </div>
  </Link>

  {/* Video 3 */}
  <Link href="/testimonials">
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl text-black">Robert A. Eckess</h3>

      <iframe
        className="w-full py-4"
        height="225"
        src="https://www.youtube.com/embed/Tv3_r0EMVH4"
        title="Stewart, BC History"
        allowFullScreen
      ></iframe>

      <h4 className="text-black">
        <span className="font-bold">Book Title:</span> Stewart, BC History
      </h4>
      <h4 className="text-black">
        <span className="font-bold">Consultant:</span> Damon Peters
      </h4>
      <h4 className="text-black">
        <span className="font-bold">Project Manager:</span> Amara Johnson & Ryan Peters
      </h4>
    </div>
  </Link>

</div>

{/* Centered Button */}
<div className="flex justify-center mt-6">
  <Link href="/testimonials">
    <button className="px-6 py-2 font-medium text-white transition duration-300 ease-in-out bg-black rounded-full shadow-md hover:bg-gray-800">
      Read More
    </button>
  </Link>
</div>

 <div className="mt-16 mb-6 text-center">
                        <h2 className="text-4xl font-bold text-black font-poppins">TESTIMONIALS</h2>
                    </div>  
                  
                    <div className="flex flex-col justify-center gap-5 md:flex-row">
                        <div className="relative brand-testimonials-card aos-init aos-animate" data-aos="flip-left">
                            <Link href={"https://www.trustpilot.com/reviews/65e634c30515c28c7a696898"} target="_blank">
                                <div className="flex items-center justify-between mb-5">
                                    <Image src={"/brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="relative flex items-center left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">US</span>
                                    </div>
                                </div>
                                <h3 className="pt-3 text-xl font-bold font-poppins">My experience with Pine Book Writing</h3>
                                <p className="pt-2 mb-5">My experience with Pine Book Writing was beyond excellent. I love working with Lia Sinclair and i hope when it is time to publish my next book i get her. I love the fact that they design the cover to go with the book.

</p>
                                <span className="absolute bottom-0 mb-2">jacqueline cunningham, Jan 14, 2026</span>
                            </Link>
                        </div>

                        <div className="relative brand-testimonials-card aos-animate" data-aos="flip-right">
                            <Link href={"https://www.trustpilot.com/users/6650efdb713a439e98e1faaf"} target="_blank">
                                <div className="flex items-center justify-between mb-5">
                                    <Image src={"/brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="relative flex items-center left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">US</span>
                                    </div>
                                </div>
                                <h3 className="pt-3 text-xl font-bold font-poppins">Good Work on Publishing</h3>
                                <p className="pt-2 mb-5">Pine Book Writing did a good job on printing and delivering copies of my book of poetry written in Russian. They did it expeditiously and in promised time, actually, a bit faster. The quality of the paper used and printing was quite adequate. Ryan Peters, the publication manager, was very approachable, friendly, and quick to reply to my requests and questions. Dealing with Damon, the owner, was a good experience as well.</p>
                                <span className="absolute bottom-0 mb-2">Fima, Feb 16, 2026</span>
                            </Link>
                        </div>

                        <div className="relative brand-testimonials-card aos-animate" data-aos="flip-left">
                            <Link href={"https://www.trustpilot.com/reviews/6659123899d40666a7b06b45"} target="_blank">
                                <div className="flex items-center justify-between mb-5">
                                    <Image src={"/brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="relative flex items-center left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">US</span>
                                    </div>
                                </div>
                                <h3 className="pt-3 text-xl font-bold font-poppins">This is John Bowman</h3>
                                <p className="pt-2 mb-5">This is John Bowman. I would just love to give a shout out to Pine Book Writing, my experience with them has really been beyond words. From.Lia Sinclair, Damon Peters for taking me on. I am a Christian and it has been an answer to my prayers after 4 1/2 years looking for an honest publisher thank you all so much.</p>
                                <span className="absolute bottom-0 mb-2">John Bowman, March 30, 2026</span>
                            </Link>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center gap-5 mt-5 md:flex-row">
                      
                        <div className="relative brand-testimonials-card aos-animate" data-aos="flip-up" data-aos-delay="0" data-aos-duration="500">
                            <Link href={"https://www.trustpilot.com/reviews/669d127512bc98c19572c5d1"} target="_blank">
                                <div className="flex items-center justify-between mb-5">
                                    <Image src={"/brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="relative flex items-center left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">US</span>
                                    </div>
                                </div>
                                <h3 className="pt-3 text-xl font-bold font-poppins">results for value</h3>
                                <p className="pt-2 mb-5">I had a great experience because as a first-time author I didn't really know the process. They helped walk me through the process step by step. Whenever I needed to talk with them, they made time for me. We had a big project, and they helped me finish it. My time spent with Pine Book Writing produced results. They helped me finish my project and for that I am very thankful.

</p>
                                <span className="absolute bottom-0 mb-2">kyle climer, Feb 21, 2026</span>
                            </Link>
                        </div>

                        <div className="relative brand-testimonials-card aos-animate" data-aos="flip-right"  data-aos-easing="ease-out-cubic" data-aos-delay="0" data-aos-duration="500">
                            <Link href={"https://www.trustpilot.com/reviews/64c9be4dd5f3423b1473d2e3"} target="_blank">
                                <div className="flex items-center justify-between mb-5">
                                    <Image src={"/brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="relative flex items-center left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">US</span>
                                    </div>
                                </div>
                                <h3 className="pt-3 text-xl font-bold font-poppins">
                                Commendable Service</h3>
                                <p className="pt-2 mb-5">I sought Pine Book Writing's ghostwriting expertise for my self-help book, and I must say, they did an excellent job. The writer displayed a deep understanding of the subject matter and articulated it coherently. The turnaround time was quite reasonable, and they were receptive to my inputs. With just a few proofreading hiccups, their service proved to be commendable, and I'm pleased with the final result.
</p>
                                <span className="absolute bottom-0 mb-2">
                                Eldon Meeker, 2 April 31, 2026</span>
                            </Link>
                        </div>

                        <div className="relative brand-testimonials-card aos-animate" data-aos="flip-down" data-aos-delay="0" data-aos-duration="500">
                            <Link href={"https://www.trustpilot.com/reviews/657218558d2388bbf298cfff"} target="_blank">
                                <div className="flex items-center justify-between mb-5">
                                    <Image src={"/brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="relative flex items-center left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">CA</span>
                                    </div>
                                </div>
                                <h3 className="pt-3 text-xl font-bold font-poppins">
                                Pine books and their associates are</h3>
                                <p className="pt-2 mb-5">Pine books and their associates are excellent. Everyone is helpful and care about you, your ideas, and how hard you've worked with your manuscript. Steve, Lia, Ryan, and David go beyond their job. They deserve a raise. I recommend Pine books for all your writing needs.</p>
                                <span className="absolute bottom-0 mb-2">Katie Loftis, December 20, 2025</span>
                            </Link>
                        </div>

                        

                    </div>

                    {/* <p className="mt-8 mb-2 text-3xl text-center font-poppins">Rated 4.2 / 5 Based on 9 Reviews. Showing our latest reviews.</p> */}
                </div>
            </section>
        </>
    );
}