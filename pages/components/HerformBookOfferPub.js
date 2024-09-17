import useHubspotForm from "@/hooks/hubspot";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import FadeIn from "./FadeIn";


export default function HeroFormBookOfferPub() {
  const router = useRouter();
  const { submitMainContactForm } = useHubspotForm();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  // const [budgets, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const budgetOptions = [
    "$500 - $1000", "$1001 - $2000", "$2001 - $3000", "$3001 - $4000",
    "$4001 - $5000", "$5001 - $6000", "$6001 - $7000", "$7001 - $8000",
    "$8001 - $9000", "$9001 - $10000"
  ];

  // Object
  // const clientLogos = [
  //   {
  //     src: "/images/logo-img1.png",
  //     alt: "LOGO",
  //     width: 150,
  //     height: 60
  //   },
  //   {
  //     src: "/images/logo-img2.png",
  //     alt: "LOGO",
  //     width: 150,
  //     height: 60
  //   },
  //   {
  //     src: "/images/logo-img3.png",
  //     alt: "LOGO",
  //     width: 150,
  //     height: 60
  //   },
  //   {
  //     src: "/images/logo-img4.png",
  //     alt: "LOGO",
  //     width: 150,
  //     height: 60
  //   },
  // ];


  const clientLogos = [
    {
      href: "https://goo.gl/maps/D6kJBoXBJYwcZWkP7",
      src: "/images/Google Partner.png",
      alt: "LOGO",
      width: 130,
      height: 60
    },
    {
      href: "https://www.bbb.org/ca/on/richmond-hill/profile/publishers-book/pine-book-writing-inc-0107-1406919",
      src: "/images/BBB.png",
      alt: "LOGO",
      width: 130,
      height: 60
    },
    {
      href: "https://www.trustpilot.com/review/pinebookwriting.com",
      src: "/images/s3.png",
      alt: "LOGO",
      width: 130,
      height: 60
    },
    {
      href: "https://www.yelp.com/biz/pine-book-writing-richmond-hill",
      src: "/images/s4.png",
      alt: "LOGO",
      width: 130,
      height: 60
    },
    {
      href: "https://clutch.co/profile/pine-book-writing",
      src: "/images/s6.png",
      alt: "LOGO",
      width: 130,
      height: 60
    }
  ];


  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/publishing-lp');
  //   }, 3000);
  // }, [router]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    const setters = {
      firstName: setFirstName,
      email: setEmail,
      message: setMessage,
      // budgets: setBudget,
      phone: setPhone,
    };

    console.log(value);

    const setter = setters[name];
    if (setter) {
      if (name === 'phone') {
        const phoneRegex = /^\d{0,}$/;
        if (phoneRegex.test(value)) {
          setter(value);
          if (value.length < 9) {
            setPhoneError("Phone number must be at least 9 digits");
          } else {
            setPhoneError("");
          }
        } else {
          setPhoneError("Invalid phone number format");
        }
      } else {
        setter(value);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phone.length < 9) {
      setPhoneError("Phone number must be at least 9 digits");
      return;
    }
    const response = await submitMainContactForm(
      firstName,
      email,
      phone,
      // budgets,
      message
    );
    if (response) {
      setShowSuccess(true);
      router.push('/thank-you'); 
      // router.push('/thankyou-offer')
      setTimeout(() => {
        setShowSuccess(false);
        setEmail("");
        setFirstName("");
        setPhone("");
        // setBudget("");
        setMessage("");
      }, 3000);
    }

    console.log("response", response);
  };

  return (
    <div className="container mx-4 pt-20 md:mx-32 tablet-margin-banner brand-hero-section ">
      <div className="grid grid-cols-1 sm:gap-8 sm:py-0 md:grid-cols-2 text-left items-center justify-between md:gap-8 md:py-36">
        <div className="mb-4">
          {/* <h2 className="text-sm md:base scroll-animation">
            <span> #1 SELF </span> PUBLISHING COMPANY
          </h2> */}
          <h3 className="font-poppins text-2xl mb-4 aos-init aos-animate text-white"><span className="px-2 py-0">#1</span> Book Writing Company</h3>
          <FadeIn>
            <h1 className="font-poppins text-3xl md:text-4xl text-white font-bold">
            WANT TO PEN YOUR IDEAS? HIRE EXPERT GHOSTWRITING COMPANY!
            </h1>
          </FadeIn>
          {/* <WavyText text="DO YOU HAVE A MANUSCRIPT READY TO BE PUBLISHED?" replay={true} style={{ color: 'white' }} className="font-poppins text-3xl md:text-5xl text-white font-bold" /> */}
          {/* <FadeIn> */}
          <p className="text-xl text-white pt-4">
          Are you a first-time author? or a seasoned author looking for an all-inclusive book writing service that can help streamline your author journey? You've come to the right place. At Pine Book Writing, we can turn your idea in a book with our expert ghostwriting service.
          </p>
          <h4 className="font-poppins text-2xl mt-8 text-white uppercase font-bold">Our Credibility</h4>
          {/* <button className="get-premium-btn" onClick={handleOpenChat}>Get premium book publishing services</button> */}
          {/* <div className="flex justify-start items-center mt-8 gap-2 md:gap-x-8 client-logo-sec">
            {clientLogos.map((logo, index) => (
              <Link key={index} href={logo.href} target="_blank">
                <Image
                  alt={logo.alt}
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                />
              </Link>
            ))}
          </div> */}
          <div className="flex justify-start items-center mt-8 gap-2 md:gap-x-8 client-logo-sec about-logos-sec">
            {clientLogos.map((logo, index) => (
              <Link key={index} href={logo.href} target="_blank">
                <Image
                  alt={logo.alt}
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                />
              </Link>
            ))}
          </div>
        </div>
        <div>

          <div className="w-full rounded-2xl px-8 py-8 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border-gray-100 relative">
            <Image
              className="text-center header-form-off-badge"
              src={"/images/form-badge.png"}
              width={160}
              height={200}
              loading="lazy"
            ></Image>
            <div className="text-center">
              <h4 className="font-poppins text-white text-2xl md:text-2xl">Avail Discount</h4>
              <h5 className="font-poppins text-white text-lg mb-3">Exclusive Offer: Expert Book Publishing at <span className="text-blink">50% Off</span> – <br></br>Your Story Deserves to be Heard!</h5>
            </div>
            <div>

            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  value={firstName}
                  required
                  className="pl-4 pr-4 py-2 border rounded-lg w-full text-md"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  onChange={handleChange}
                  value={phone}
                  name="phone"
                  required
                  className="pl-4 pr-4 py-2 border rounded-lg w-full text-md"
                  placeholder="Enter your Phone"
                />
                {phoneError && (
                  <span className="text-red-500 text-md mt-1">{phoneError}</span>
                )}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  required
                  className="pl-4 pr-4 py-2 border rounded-lg w-full text-md"
                  placeholder="Enter your Email"
                />
              </div>
              {/* <div className="relative">
                <select name="budgets" value={budgets} onChange={handleChange} className="text-grey outline-0 pl-4 pr-4 py-2 border text-md rounded-lg w-full header-form-input">
                  <option value="" className="text-md">Select Budget Range</option>
                  {budgetOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div> */}
              <div className="relative">
                <textarea
                  className="pl-4 pr-4 py-2 border rounded-lg w-full text-md"
                  rows={3}
                  onChange={handleChange}
                  value={message}
                  required
                  placeholder="Enter your Message"
                  name="message"
                ></textarea>
                <div
                  className="absolute inset-y-0 left-0 pl-3 pt-3 
                  flex items-start  
                  pointer-events-none"
                ></div>
              </div>
              {showSuccess && (
                <p className="px-1 py-2 text-green-700">
                  Form submitted Successfully!
                </p>
              )}
              <button
                className="w-full p-4 py-2 text-white uppercase header-submit-btn rounded font-poppins"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
