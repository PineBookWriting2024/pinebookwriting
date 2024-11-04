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

  { id: 16, title: 'Memoir', category: 'Non-Fiction', imageUrl: '/images/Icons-16.png' },
  { id: 17, title: 'Autobiography', category: 'Non-Fiction', imageUrl: '/images/Icons-17.png' },
  { id: 18, title: 'Biography', category: 'Non-Fiction', imageUrl: '/images/Icons-18.png' },
  { id: 19, title: 'Religion', category: 'Non-Fiction', imageUrl: '/images/Icons-19.png' },
  { id: 20, title: 'Spirituality', category: 'Non-Fiction', imageUrl: '/images/Icons-20.png' },
  { id: 21, title: 'Self-Help', category: 'Non-Fiction', imageUrl: '/images/Icons-21.png' },
  { id: 22, title: 'Biblical', category: 'Non-Fiction', imageUrl: '/images/Icons-22.png' },
  { id: 23, title: 'History', category: 'Non-Fiction', imageUrl: '/images/Icons-23.png' },
  { id: 24, title: 'Travel', category: 'Non-Fiction', imageUrl: '/images/Icons-24.png' },
  { id: 25, title: 'Health & Fitness', category: 'Non-Fiction', imageUrl: '/images/Icons-25.png' },
  { id: 26, title: 'Relationships', category: 'Non-Fiction', imageUrl: '/images/Icons-26.png' },
  { id: 27, title: 'Cooking', category: 'Non-Fiction', imageUrl: '/images/Icons-27.png' },
  { id: 28, title: 'Beverages', category: 'Non-Fiction', imageUrl: '/images/Icons-28.png' },
  { id: 29, title: 'Art', category: 'Non-Fiction', imageUrl: '/images/Icons-29.png' },
  { id: 30, title: 'Photography', category: 'Non-Fiction', imageUrl: '/images/Icons-30.png' },


];

export default function BookGenres () {

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
     <section className="book_genres my-12">
          <div className="container mx-auto text-center">
            <div className="genres-h mx-auto w-[80%] pb-8">
              <h3 className="font-poppins text-3xl md:text-4xl leading-10">From a Memoir & Romance to Sci-Fi Novel<br/> 
              <span className="leading font-semibold">We Write It All</span></h3>

              
              <p className="pt-3">At Pine Book Writing, we take pride in having a large team of skilled ghostwriters whose expertise lies in working for numerous book genres. Have a look at the array of genres we're competent enough to work for:





</p>
            </div>

            {['Fiction', 'Non-Fiction'].map(category => (
                <button
                    key={category}
                    className={`tab-btn ${activeCategory === category ? 'active' : 'in-active'}`}
                    onClick={() => setActiveCategory(category)}
                >
                    {category}
                </button>
            ))}

            <div className="grid md:grid-cols-5 grid-cols-2 md:gap-6 gap-3">
                  {filteredBooks.map(book => (
                    <div className='genres-icon border genres-icon-ho' key={book.id} >

                     
                          <Image src={book.imageUrl} className="genres-pic text-center mx-auto" height={"90"} width={"90"}></Image>
                          <h4><span>{book.title}</span></h4>
                     
                    
                    </div>
                  ))}

                {/* <div className='genres-icon'>
                  <Image className='genres-pic text-center mx-auto' src={"/images/Icons-01.png"} height={"90"} width={"90"}></Image>
                  <h4><span>Children’s Fiction</span></h4>
                </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-02.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Romance</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-03.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Crime</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-04.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Thriller</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-05.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Adventure</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-06.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Historical Fiction</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-07.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Adult Fiction</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-08.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Horror</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-09.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Fantasy</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-10.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Sci-Fi</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-11.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Suspense</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-12.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Mystery</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-13.png"} height={"90"} width={"90"}></Image>
                    <h4><span>LGBTQ+</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-14.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Dystopian</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-15.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Religious Fiction</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-16.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Memoir</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-17.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Autobiography</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-18.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Biography</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-19.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Religion</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-20.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Spirituality</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-21.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Self-Help</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-22.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Biblical</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-23.png"} height={"90"} width={"90"}></Image>
                    <h4><span>History</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-24.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Travel</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-25.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Health & Fitness</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-26.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Relationships</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-27.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Cooking</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-28.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Beverages</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-29.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Art</span></h4>
                  </div>

                  <div className='genres-icon'>
                    <Image className='genres-pic text-center mx-auto' src={"/images/Icons-30.png"} height={"90"} width={"90"}></Image>
                    <h4><span>Photography</span></h4>
                  </div> */}

            </div>

          </div>
        </section>
    </>
  );
};


