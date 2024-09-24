import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import 'glightbox/dist/css/glightbox.min.css';

const GLightbox = dynamic(
    () => import('glightbox').then((glightboxModule) => glightboxModule.default),
    { ssr: false }
);
const books = [
    { id: 1, title: 'Book One', category: 'Fiction', imageUrl: 'brand-img/fiction/fiction-1.png' },
    { id: 2, title: 'Book Two', category: 'Fiction', imageUrl: 'brand-img/fiction/fiction-2.png' },
    { id: 3, title: 'Book Three', category: 'Fiction', imageUrl: 'brand-img/fiction/fiction-3.png' },
    { id: 4, title: 'Book Four', category: 'Fiction', imageUrl: 'brand-img/fiction/fiction-4.png' },
    { id: 5, title: 'Book Five', category: 'Fiction', imageUrl: 'brand-img/fiction/fiction-5.png' },
    { id: 6, title: 'Book Six', category: 'Fiction', imageUrl: 'brand-img/fiction/fiction-6.png' },
    { id: 7, title: 'Book Seven', category: 'Fiction', imageUrl: 'brand-img/fiction/fiction-7.png' },
    { id: 8, title: 'Book Eight', category: 'Fiction', imageUrl: 'brand-img/fiction/fiction-8.png' },
    { id: 9, title: 'Book Nine', category: 'Fiction', imageUrl: 'brand-img/fiction/fiction-9.png' },
    { id: 10, title: 'Book Ten', category: 'Fiction', imageUrl: 'brand-img/fiction/fiction-10.png' },
    { id: 11, title: 'Book Eleven', category: 'Fiction', imageUrl: 'brand-img/fiction/fiction-11.png' },
    { id: 12, title: 'Book twelve', category: 'Fiction', imageUrl: 'brand-img/fiction/fiction-12.png' },
    { id: 13, title: 'Book Thirdteen', category: 'Non-Fiction', imageUrl: '/brand-img/Non-Fiction/non-fiction-1.png' },
    { id: 14, title: 'Book Fourteen', category: 'Non-Fiction', imageUrl: '/brand-img/Non-Fiction/non-fiction-2.png' },
    { id: 15, title: 'Book Fifteen', category: 'Non-Fiction', imageUrl: '/brand-img/Non-Fiction/non-fiction-3.png' },
    { id: 16, title: 'Book Sixteen', category: 'Non-Fiction', imageUrl: '/brand-img/Non-Fiction/non-fiction-4.png' },
    { id: 17, title: 'Book Seventeen', category: 'Non-Fiction', imageUrl: '/brand-img/Non-Fiction/non-fiction-5.png' },
    { id: 18, title: 'Book Eighteen', category: 'Non-Fiction', imageUrl: '/brand-img/Non-Fiction/non-fiction-6.png' },
    { id: 19, title: 'Book Nineteen', category: 'Non-Fiction', imageUrl: '/brand-img/Non-Fiction/non-fiction-7.png' },
    { id: 20, title: 'Book Twenty', category: 'Non-Fiction', imageUrl: '/brand-img/Non-Fiction/non-fiction-8.png' },
    { id: 21, title: 'Book TwentyOne', category: 'Non-Fiction', imageUrl: '/brand-img/Non-Fiction/non-fiction-9.png' },
    { id: 22, title: 'Book TwentyTwo', category: 'Non-Fiction', imageUrl: '/brand-img/Non-Fiction/non-fiction-10.png' },
    { id: 23, title: 'Book TwentyThree', category: 'Non-Fiction', imageUrl: '/brand-img/Non-Fiction/non-fiction-11.png' },
    { id: 24, title: 'Book TwentyFour', category: 'Non-Fiction', imageUrl: '/brand-img/Non-Fiction/non-fiction-12.png' },
    { id: 25, title: 'Book TwentyFive', category: 'Childer-Book', imageUrl: '/brand-img/Children-Book/children-book-1.png' },
    { id: 26, title: 'Book TwentySix', category: 'Childer-Book', imageUrl: '/brand-img/Children-Book/children-book-2.png' },
    { id: 27, title: 'Book TwentySeven', category: 'Childer-Book', imageUrl: '/brand-img/Children-Book/children-book-3.png' },
    { id: 28, title: 'Book TwentyEight', category: 'Childer-Book', imageUrl: '/brand-img/Children-Book/children-book-4.png' },
    { id: 29, title: 'Book TwentyNine', category: 'Childer-Book', imageUrl: '/brand-img/Children-Book/children-book-5.png' },


];

export default function BrandPortfolio() {
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
            <section className="max-w-screen-xl mx-auto brand-portfolio-books py-12">
                <div className="text-center mb-6">
                    {/* <h3 className="text-2xl text-black font-poppins">Get your Book</h3> */}
                    <h2 className=" text-4xl text-black uppercase">A Collection of Stories We’ve Helped Bring to Life</h2>
                </div>
                <div className="flex space-x-4 justify-center mb-12">
                    {['Fiction', 'Non-Fiction' , 'Childer-Book'].map(category => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded-lg ${activeCategory === category ? 'active' : 'in-active'}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
                    {filteredBooks.map(book => (
                        <div key={book.id} className="border">
                            <Link href={book.imageUrl} className="">
                                <img src={book.imageUrl} alt={book.title} className="w-full h-100 glightbox" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}