import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function BrandAbout(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const router = useRouter();
    const isHomePage = router.pathname === "/";

    return (
        <>
            <div className="container mx-auto max-w-screen-xl overflow-hidden pt-0 md:pt-20">
                <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row px-4 md:px-0 py-10 md:py-0 pb-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        <h4 className="font-poppins text-3xl md:text-5xl font-bold">
                        {props.headingmain}
                        </h4>
                        <p className="font-poppins text-xl pt-4">
                            {props.subdescone}
                        </p>
                        <p className="font-poppins text-xl mb-5">
                            {props.subdesctwo}
                        </p>
                        <p className="font-poppins text-xl mb-8">
                            {props.subdescthree}
                        </p>
                        {isHomePage && (
                            <Link href="/about" className="button font-poppins brand-nav-btn-1 brand-nav-btn shadow-xl mt-10 cursor-pointer btn-f ">READ MORE</Link>
                        )}
                        {/* </FadeIn> */}
                    </div>
                    <div className="basis-1/2 abt-pic text-center flex justify-center md:justify-end mt-10">
                        <motion.div
                            initial={false}
                            animate={
                                isLoaded && isInView
                                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                            }
                            transition={{ duration: 1, delay: 0 }}
                            viewport={{ once: true }}
                            onViewportEnter={() => setIsInView(true)}
                        >
                            <Image src={"/images/About-us-img.png"} width={500} height={570}
                                layout="responsive"
                                loading="lazy"
                                alt="about img"
                                onLoad={() => setIsLoaded(true)}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
