import Head from "next/head";
import BrandTopBar from "./components/BrandTopBar";
import BrandFooter from "./components/BrandFooter";
import BrandAbout from "./components/BrandAbout";
import BrandNavbar from "./components/BrandNavbar";
import BrandHero from "./components/BrandHero";
import BrandBannerLogo from "./components/BrandBannerLogo";
import BrandCTA from "./components/BrandCTA";
import BrandServices from "./components/BrandServices";
import BrandChooseUs from "./components/BrandChooseUs";
import BrandTestimonial from "./components/BrandTestimonial";
import BrandFaqs from "./components/BrandFaqs";
import BrandContact from "./components/BrandContactForm";
import BrandLogo from "./components/BrandLogo";
import BrandSister from "./components/BrandSister";
import BrandBannerVideo from "./components/BrandBannerVideo";
import NewServicesBrand from "./components/NewServicesBrand";
import NewBrandFooter from "./components/NewBrandFooter";
import BrandPrimaryHeader from "./components/BrandPrimaryHeader"

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";


const books = [
    { id: 1, title: 'Children’s Fiction', category: 'Fiction', imageUrl: '/images/Icons-01.png' },
    { id: 2, title: 'Romance', category: 'Fiction', imageUrl: '/images/Icons-02.png' },
    { id: 3, title: 'Crime', category: 'Fiction', imageUrl: '/images/Icons-03.png' },
    { id: 4, title: 'Thriller', category: 'Fiction', imageUrl: '/images/Icons-04.png' },
    { id: 5, title: 'Adventure', category: 'Fiction', imageUrl: '/images/Icons-05.png' },
    { id: 6, title: 'Historical Fiction', category: 'Fiction', imageUrl: '/images/Icons-06.png' },
    { id: 7, title: 'Adult Fiction', category: 'Fiction', imageUrl: '/images/Icons-07.png' },
    { id: 8, title: 'Horror', category: 'Fiction', imageUrl: '/images/Icons-08.png' },
    { id: 9, title: 'Fantasy', category: 'Fiction', imageUrl: '/images/Icons-09.png' },
    { id: 10, title: 'Sci-Fi', category: 'Fiction', imageUrl: '/images/Icons-10.png' },
    { id: 11, title: 'Suspense', category: 'Fiction', imageUrl: '/images/Icons-11.png' },
    { id: 12, title: 'Mystery', category: 'Fiction', imageUrl: '/images/Icons-12.png' },
    { id: 13, title: 'LGBTQ+', category: 'Fiction', imageUrl: '/images/Icons-13.png' },
    { id: 14, title: 'Dystopian', category: 'Fiction', imageUrl: '/images/Icons-14.png' },
    { id: 15, title: 'Religious Fiction', category: 'Fiction', imageUrl: '/images/Icons-15.png' },
  
    // { id: 16, title: 'Memoir', category: 'Non-Fiction', imageUrl: '/images/Icons-16.png' },
    // { id: 17, title: 'Autobiography', category: 'Non-Fiction', imageUrl: '/images/Icons-17.png' },
    // { id: 18, title: 'Biography', category: 'Non-Fiction', imageUrl: '/images/Icons-18.png' },
    // { id: 19, title: 'Religion', category: 'Non-Fiction', imageUrl: '/images/Icons-19.png' },
    // { id: 20, title: 'Spirituality', category: 'Non-Fiction', imageUrl: '/images/Icons-20.png' },
    // { id: 21, title: 'Self-Help', category: 'Non-Fiction', imageUrl: '/images/Icons-21.png' },
    // { id: 22, title: 'Biblical', category: 'Non-Fiction', imageUrl: '/images/Icons-22.png' },
    // { id: 23, title: 'History', category: 'Non-Fiction', imageUrl: '/images/Icons-23.png' },
    // { id: 24, title: 'Travel', category: 'Non-Fiction', imageUrl: '/images/Icons-24.png' },
    // { id: 25, title: 'Health & Fitness', category: 'Non-Fiction', imageUrl: '/images/Icons-25.png' },
    // { id: 26, title: 'Relationships', category: 'Non-Fiction', imageUrl: '/images/Icons-26.png' },
    // { id: 27, title: 'Cooking', category: 'Non-Fiction', imageUrl: '/images/Icons-27.png' },
    // { id: 28, title: 'Beverages', category: 'Non-Fiction', imageUrl: '/images/Icons-28.png' },
    // { id: 29, title: 'Art', category: 'Non-Fiction', imageUrl: '/images/Icons-29.png' },
    // { id: 30, title: 'Photography', category: 'Non-Fiction', imageUrl: '/images/Icons-30.png' },
  
  
  ];

export default function FictionPage() {
    
  const [activeCategory, setActiveCategory] = useState('Fiction');

  const filteredBooks = books.filter(book => book.category === activeCategory);

  const lightboxRef = useRef(null);

  useEffect(() => {
      if (typeof window !== "undefined") {
          if (lightboxRef.current) {
              lightboxRef.current.destroy();
          }
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
  }, [filteredBooks]);

    return (
        <>
            <Head>
                <title>Ghostwriting | Pine Book Writing</title>
                    <link rel="canonical" href="https://www.pinebookwriting.com/fiction-page" />
                <meta
                    name="description"
                    content="Everything about Pine Book Writing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                </Head>
            <BrandTopBar />
            <BrandNavbar />
            <BrandPrimaryHeader
                photo_banner={"/brand-img/ghostwriting.png"}
                title="Fiction"
                desc="Bringing your story to the shelves and screens of the world."
            />

            <BrandBannerLogo />

            <BrandAbout
                headingmain="Overcome Writer's Block with Pine Book Writing"

                subdescone="Are you having a hard time writing your book? The frustrating sight of a blank page can stop you in your tracks. Know that you're not the only one going through this. Many people who want to be writers run into this problem. Don't worry, though; Pine Book Writing is here to help.
"
                subdesctwo="We help writers find their way through the maze of creativity by providing them with the support and tools they need to turn their ideas into beautiful words. No more writer's block! With Pine Book Writing by your side, you can start your road to becoming a successful author.
"
                subdescthree=""
            />

            <BrandCTA
                title="Achieve Your Writing Dreams With Professional Ghostwriting Company!"
                desc="Don’t have time to write your fascinating story? Let our team of experts guide you. Contact us today and take the first step towards becoming the best author.."
                btntext="Speak to our Consultant"
            />

                 <section className="book_genres my-12">
          <div className="container mx-auto text-center">
            <div className="genres-h mx-auto w-[80%] pb-8">
              <h3 className="font-poppins text-3xl md:text-4xl leading-10">From a Memoir & Romance to Sci-Fi Novel<br/> 
              <span className="leading font-semibold"> We Write It All </span></h3>

              
              <p className="pt-3">At Pine Book Writing, we take pride in having a large team of skilled ghostwriters whose expertise lies in working for numerous book genres. Have a look at the array of genres we're competent enough to work for:</p>
            </div>

   

            <div className="grid md:grid-cols-5 grid-cols-2 md:gap-6 gap-3">
                  {filteredBooks.map(book => (
                    <div className='genres-icon border' key={book.id} >
                          <Image src={book.imageUrl} className="genres-pic text-center mx-auto" height={"90"} width={"90"}></Image>
                          <h4><span>{book.title}</span></h4>
                    </div>
                  ))}
            </div>

          </div>
        </section>



            {/* <BrandProcess /> */}
            <BrandChooseUs />


            <BrandFaqs />
            <BrandContact />
            {/* <BrandSister/> */}
            <NewBrandFooter />
        </>
    );
}
