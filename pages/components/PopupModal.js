import Image from 'next/image';
import { usePopupcta } from '../../context/PopupContext';
import { useState } from 'react';

const PopupModal = () => {
  const { isPopupOpen, closeModal} = usePopupcta();
  const [form, setForm] = useState({
    fulName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });
  const [phoneError, setPhoneError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isPopupOpen) return null;

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
      closeModal();
      setShowSuccess(false);
      setForm({ fulName: '', phoneNumber: '', email: '', message: '' });
    }, 3000);
  };

  return (
    // <section className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
    //   <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-xl">
    //     <button onClick={closeModal} className="absolute top-2 right-2 text-xl font-bold">×</button>
    //     <div className="text-center">
    //       <Image src="/images/form-badge.png" alt="Badge" width={80} height={80} />
    //       <h2 className="text-2xl mt-2">Come Celebrate with Us!</h2>
    //       <p className="text-xl">
    //         Expert Book Writing at <span className="text-red-500 font-bold">50% Off</span>!
    //       </p>
    //     </div>
    //     <form onSubmit={handleSubmit} className="mt-4 space-y-4">
    //       <input type="text" name="fulName" value={form.fulName} onChange={handleChange} required placeholder="Enter your Name" className="w-full p-2 border rounded" />
    //       <input type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} required placeholder="Enter your Number" className="w-full p-2 border rounded" />
    //       {phoneError && <p className="text-red-500">{phoneError}</p>}
    //       <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Enter your Email" className="w-full p-2 border rounded" />
    //       <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Enter your Message" className="w-full p-2 border rounded resize-none" rows={3} />
    //       <input type="hidden" name="service" value={popupService} readOnly />
    //       {showSuccess && <p className="text-green-600">Form submitted successfully!</p>}
    //       <button type="submit" className="w-full p-3 bg-green-600 text-white rounded uppercase">Activate Your Discount Coupon</button>
    //     </form>
    //   </div>
    // </section>

       <section className="btm-form dark-form-bg flex-col md:flex-row fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center w-auto">
                        <div className="home-popup-modal-wrapper relative my-20">
                            <Image
                                className="text-center form-off-badge"
                                src={"/images/form-badge.png"}
                                width={100}
                                height={100}
                                loading="lazy"
                            ></Image>
                            <div className="form-mid-wrap bg-gray-200 connect-form-border mb-12 relative transparent-connect-form-border">
                                <div className="flex flex-col md:flex-row items-center justify-start gap-10 relative mx-0 md:mx-10 px-3">
                                    <button type="button" onClick={closeModal} className="home-close-btn-modal ml-4 bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded">
                                        <svg width="100px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"></path> </g></svg>
                                    </button>
                                    {/* <div className="text-center">
                                        <Image
                                            className="text-center hidden md:block home-popup-img-bg"
                                            src={"/images/pop-img2.jpg"}
                                            width={690}
                                            height={200}
                                            loading="lazy"
                                        ></Image>
                                    </div> */}
    
                                    <form className="popup-form-wrapper" onSubmit={handleSubmit}>
                                        <div className="text-center">
                                            <h2 className="font-poppins text-white text-2xl mt-2">Come Celebrate with Us!</h2>
                                            <p className="font-poppins text-white text-2xl">Exclusive Offer: Expert Book Writing at <span className="text-blink">50% Off</span> – Your Story Deserves to be Heard!</p>
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
                                            Activate Your Discount Coupon
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    
  );
};

export default PopupModal;
