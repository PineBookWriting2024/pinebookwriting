import React from 'react'
import NewBrandFooter from "./components/NewBrandFooter";
import BrandTopBar from "./components/BrandTopBar";
import BrandNavbar from "./components/BrandNavbar";
import Link from 'next/link';
import Image from 'next/image';




const notFound = () => {
  return (
    <div>
      <header id="navbar" className="header-404 bg-transparent left-0 flex justify-between items-center p-4 z-10">
                <div className='max-w-screen-xl flex justify-between items-center mx-auto w-full'>
                    <div>
                        <Link href="/" className="text-xl font-bold text-white">
                            <Image className='logo' src={'/brand-img/logo.png'} width={200} height={80} alt="brand logo" loading="lazy" />
                        </Link>
                    </div>
                </div>
            </header>

            <section class="overflow-hidden my-10">
              <div className='container mx-auto'>
              <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 items-center'>
                            
              <div class="box1 ">
              <h1 className='font-poppins text-3xl md:text-4xl uppercase font-bold'>Pages not found</h1>
              <p className='font-poppins text-xl text-left pt-3'>Pine Book Writing, a professional book writing agency founded on February 22, 2023, has been on a mission to provide expert ghostwriting services to new and seasoned authors to help them thrive in the world of literacy. </p>
              <div>
                    <button className="brand-nav-btn shadow-xl mt-10 cursor-pointer btn-g"><Link href="/">Back To Home</Link></button>
                </div>
              </div>

              <div class="box">
              <Image src={"/images/About-us-img.png"} width={100} height={200}
                layout="responsive"
                loading="lazy"
                alt="about img"/>
              </div>

              

              </div>
              </div>
          </section>

        <div className="copyright-sec copyright-sec-404">
                    <div className="container text-center mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-white w-full md:text-center text-sm sm:text-left">
                            Copyright © 2024 <span className="powered-by-text"><Link href="https://www.pinebookwriting.com/" >Pine Book Writing Inc.</Link></span> | All Rights Reserved.
                            <Link
                                href="/terms-and-conditions"
                                rel="noopener noreferrer"
                                className="text-white ml-1"
                                target="_blank"
                            >
                                Terms & Conditions |
                            </Link>
                            <Link
                                href="/privacy-policy"
                                rel="noopener noreferrer"
                                className="text-white ml-1"
                                target="_blank"
                            >
                                Privacy Policy 
                            </Link>
                            {/* Powered by <span className="powered-by-text"><Link href="https://www.pinebookwriting.com/" target="_blank">Pine Book Writing Inc.</Link></span> */}
                        </p>
                    </div>
                </div>
      
    </div>
  )
}

export default notFound
