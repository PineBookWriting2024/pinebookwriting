
"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import useHubspotForm from "/hooks/hubspot";

export default function PopupBundle({ isOpen, onClose, service }) {
    const router = useRouter();
    const { submitPopupContactForm } = useHubspotForm();
    const [email, setEmail] = useState("");
    const [fulName, setFulName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [serviceState, setServiceState] = useState(service);
    const [showSuccess, setShowSuccess] = useState(false);
    const [phoneError, setPhoneError] = useState("");


    const budgetOptions = [
        "$500 - $1000", "$1001 - $2000", "$2001 - $3000", "$3001 - $4000",
        "$4001 - $5000", "$5001 - $6000", "$6001 - $7000", "$7001 - $8000",
        "$8001 - $9000", "$9001 - $10000"
    ];

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/publishing-lp');
    //     }, 3000);
    // }, [router]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const setters = {
            fulName: setFulName,
            email: setEmail,
            message: setMessage,
            service: setServiceState,
            // budget: setBudget,
            phoneNumber: setPhoneNumber,
        };

        const setter = setters[name];
        if (setter) {
            if (name === 'phoneNumber') {
                const phoneRegex = /^\d{0,10}$/;
                if (phoneRegex.test(value)) {
                    setter(value);
                    setPhoneError("");
                } else {
                    setPhoneError("Phone number must be exactly 10 digits");
                }
            } else {
                setter(value);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (phoneNumber.length !== 10) {
            setPhoneError("Phone number must be exactly 10 digits");
            return;
        }
        const response = await submitPopupContactForm(
            fulName,
            email,
            phoneNumber,
            service,
            // budget,
            message
        );
        if (response) {
            setShowSuccess(true);
            router.push('/thank-you')
            setTimeout(() => {
                setShowSuccess(false);
                setEmail("");
                setFulName("");
                setPhoneNumber("")
                setMessage("");
                // setBudget("");
            }, 3000);
        }

        console.log("response", response);
    };

    return (
        <>
            {isOpen && (
                <section className="fixed inset-0 z-50 flex flex-col items-center justify-center w-auto bg-black bg-opacity-50 btm-form dark-form-bg md:flex-row">
                    <div className="relative my-20 max-w-7xl home-popup-modal-wrapper">
                        <Image
                            className="text-center form-off-badge"
                            src={"/images/form-badge.png"}
                            width={100}
                            height={100}
                            loading="lazy"
                        ></Image>
                        <div className="relative mb-12 bg-gray-200 form-mid-wrap connect-form-border transparent-connect-form-border">
                            <div className="relative flex flex-col items-center justify-start gap-10 px-3 mx-0 md:flex-row md:mx-10">
                                <button type="button" onClick={onClose} className="px-4 py-2 ml-4 text-black bg-gray-300 rounded home-close-btn-modal hover:bg-gray-400">
                                    <svg width="100px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"></path> </g></svg>
                                </button>
                                {/* <div className="text-center">
                                    <Image
                                        className="hidden text-center md:block home-popup-img-bg"
                                        src={"/images/pop-img2.jpg"}
                                        width={690}
                                        height={200}
                                        loading="lazy"
                                    ></Image>
                                </div> */}

                                <form className="popup-form-wrapper" onSubmit={handleSubmit}>
                                    <div className="text-center">
                                        <h2 className="mt-2 text-2xl text-white font-poppins"> Celebrate with Us!</h2>
                                        <p className="text-2xl text-white font-poppins">Exclusive Offer: Expert Book Writing at <span className="text-blink">50% Off</span> – Your Story Deserves to be Heard!</p>
                                    </div>

                                    <div className="py-5">
                                        <div className="relative mb-3">
                                            <input
                                                type="text"
                                                name="fulName"
                                                onChange={handleChange}
                                                value={fulName}
                                                required
                                                className="w-full py-2 pl-4 pr-4 border rounded-lg home-connect-form-input"
                                                placeholder="Enter your Name"
                                            />
                                        </div>

                                        <div className="relative mb-3">
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                onChange={handleChange}
                                                value={phoneNumber}
                                                required
                                                className="w-full py-2 pl-4 pr-4 border rounded-lg home-connect-form-input"
                                                placeholder="Enter your Number"
                                            />
                                            {phoneError && (
                                                <p className="mt-1 text-sm text-red-500">{phoneError}</p>
                                            )}
                                        </div>

                                        <div className="relative mb-3">
                                            <input
                                                type="text"
                                                name="service"
                                                value={service}
                                                readOnly
                                                required
                                                className="hidden w-full py-2 pl-4 pr-4 border rounded-lg home-connect-form-input"
                                                placeholder="Enter your Number"
                                            />
                                        </div>

                                        <div className="relative mb-3">
                                            <input
                                                type="text"
                                                name="email"
                                                onChange={handleChange}
                                                value={email}
                                                required
                                                className="w-full py-2 pl-4 pr-4 border rounded-lg home-connect-form-input"
                                                placeholder="Enter your Email"
                                            />
                                        </div>

                                        <div className="relative mb-3">
                                            <textarea
                                                onChange={handleChange}
                                                value={message}
                                                required
                                                placeholder="Enter your Message"
                                                name="message"
                                                className="w-full py-2 pl-4 pr-4 border rounded-lg resize-none home-connect-form-input"
                                                rows={2}
                                            ></textarea>
                                            <div
                                                className="absolute inset-y-0 left-0 flex items-start pt-3 pl-3 pointer-events-none"
                                            ></div>
                                        </div>
                                        {showSuccess && (
                                            <p className="px-1 py-2 text-green-700">
                                                Form submitted Successfully!
                                            </p>
                                        )}
                                        <button className="w-full p-2 text-white uppercase bg-green-500 rounded md:p-4 font-poppins submit-btn " type="submit">
                                        Activate Your Discount Coupon
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}