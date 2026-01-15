import Image from 'next/image'
import React from 'react'
import { useState } from 'react';


const ServicesBook_Popup = ({isOpen, onClose}) => {



    const [form, setForm] = useState({
      fulName: '',
      phoneNumber: '',
      email: '',
      message: '',
    });
  const [phoneError, setPhoneError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);


    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic phone validation
    if (!/^\d+$/.test(form.phoneNumber)) {
      setPhoneError("Invalid phone number");
      return;
    }
    setPhoneError('');
    setShowSuccess(true);
    setTimeout(() => {
      onClose();
      setShowSuccess(false);
      setForm({ fulName: '', phoneNumber: '', email: '', message: '' });
    }, 3000);
  };


  return (
    <div>
{      isOpen && (
           <section className="btm-form dark-form-bg flex-col md:flex-row fixed inset-0  bg-opacity-50 z-50 flex justify-center items-center w-auto">
                        <div className="relative my-20">
                            {/* <Image
                                className="text-center form-off-badge"
                                src={"/images/form-badge.png"}
                                width={100}
                                height={100}
                                loading="lazy"
                            ></Image> */}
                            <div className="form-mid-wrap bg-black connect-form-border relative transparent-connect-form-border-serv w-full mx-auto py-10 max-w-xl rounded-lg shadow-lg">
                                <div className="flex flex-col md:flex-row items-center justify-start gap-10 relative mx-0 md:mx-10 px-3">
                                    <button type="button" onClick={onClose} className="home-close-btn-modal-new ml-4 bg-[#157d6e] py-2 px-4 rounded">
                                        <svg className='w-4 h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"></path> </g></svg>
                                    </button>
                              
    
                                    <form className="w-full" onSubmit={handleSubmit}>
                                        <div className="text-center">
                                            <h2 className="font-poppins text-white text-2xl mt-2">Talk to Our Experts – Get Free Advice for Your Project!</h2>
                                            <p className="font-poppins text-white text-2xl">Have questions or need guidance? We’re here to help. Connect with our team of experienced professionals for personalized advice and support on your writing journey.</p>

                                     
                                            {/* <span className="text-blink">50% Off</span> */}
                                        </div>
    
                                        <div className="py-5">
                                            <div className="relative mb-3">
                                                <input
                                                    type="text"
                                                    name="fulName"
                                                    onChange={handleChange}
                                                    value={form.fulName}
                                                    required
                                                    className="pl-4 pr-4 py-2 border rounded-lg w-full home-connect-form-input"
                                                    placeholder="Enter your Name"
                                                />
                                            </div>
    
                                            <div className="relative mb-3">
                                                <input
                                                    type="text"
                                                    name="phoneNumber"
                                                    onChange={handleChange}
                                                    value={form.phoneNumber}
                                                    required
                                                    className="pl-4 pr-4 py-2 border rounded-lg w-full home-connect-form-input"
                                                    placeholder="Enter your Number"
                                                />
                                                {phoneError && (
                                                    <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                                                )}
                                            </div>
    
                                            <div className="relative mb-3">
                                                <input
                                                    type="text"
                                                    name="service"
                                                    value={form.service}
                                                    readOnly
                                                    required
                                                    className="pl-4 pr-4 py-2 border rounded-lg w-full home-connect-form-input hidden"
                                                    placeholder="Enter your Number"
                                                />
                                            </div>
    
                                            <div className="relative mb-3">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    onChange={handleChange}
                                                    value={form.email}
                                                    required
                                                    className="pl-4 pr-4 py-2 border rounded-lg w-full home-connect-form-input"
                                                    placeholder="Enter your Email"
                                                />
                                            </div>
    
                                            <div className="relative mb-3">
                                                <textarea
                                                    onChange={handleChange}
                                                    value={form.message}
                                                    required
                                                    placeholder="Enter your Message"
                                                    name="message"
                                                    className="resize-none pl-4 pr-4 py-2 border rounded-lg w-full home-connect-form-input"
                                                    rows={2}
                                                ></textarea>
                                                <div
                                                    className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none"
                                                ></div>
                                            </div>
                                            {showSuccess && (
                                                <p className="px-1 py-2 text-green-700">
                                                    Form submitted Successfully!
                                                </p>
                                            )}
                                            <button className="md:p-4 p-2 w-full bg-green-500 uppercase text-white rounded font-poppins submit-btn " type="submit">
                                            Book Your FREE Consultation Today!
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
      )}
    </div>
  )
}

export default ServicesBook_Popup
