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
            <div className="container max-w-screen-xl pt-0 mx-auto overflow-hidden md:pt-20">
                <div className="flex flex-col items-center justify-center px-4 py-10 pb-0 md:flex-row lg:flex-row md:px-0 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                       <h4 className="text-3xl font-bold font-poppins md:text-5xl">
  {props.headingmain}
</h4>

<h3 className="mt-3 text-2xl font-semibold font-poppins md:text-3xl">
  {props.headingsub}
</h3>
                        <p className="pt-4 text-xl font-poppins">
                            {props.subdescone}
                        </p>
                        <p className="mb-5 text-xl font-poppins">
                            {props.subdesctwo}
                        </p>
                        <p className="mb-8 text-xl font-poppins">
                            {props.subdescthree}
                        </p>
                        {isHomePage && (
                            <Link href="/about" className="mt-10 shadow-xl cursor-pointer button font-poppins brand-nav-btn-1 brand-nav-btn btn-f ">READ MORE</Link>
                        )}
                        {/* </FadeIn> */}
                    </div>
                    <div className="flex justify-center mt-10 text-center basis-1/2 abt-pic md:justify-end">
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
