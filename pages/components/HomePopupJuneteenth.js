"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useHubspotForm from "/hooks/hubspot";

export default function HomePopupJuneteenth() {
  const router = useRouter();
  const pathname = usePathname();
  const { submitMainContactForm } = useHubspotForm();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(true);


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!Object.prototype.hasOwnProperty.call(form, name)) return;

    if (name === "phoneNumber") {
      const phoneRegex = /^\d{0,}$/;
      if (phoneRegex.test(value)) {
        setForm((prev) => ({ ...prev, [name]: value }));
        if (value.length > 0 && value.length < 9) {
          setPhoneError("Phone number must be at least 9 digits");
        } else {
          setPhoneError("");
        }
      } else {
        setPhoneError("Invalid phone number format");
      }
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.phoneNumber.length < 9) {
      setPhoneError("Phone number must be at least 9 digits");
      return;
    }

    setIsSubmitting(true);

    try {
      const hubspotResponse = await submitMainContactForm(
        form.fullName,
        form.email,
        form.phoneNumber,
        form.message
      );

      if (hubspotResponse) {
        setShowSuccess(true);
        setTimeout(() => {
          router.push("/thank-you");
        }, 1500);

        setTimeout(() => {
          setShowSuccess(false);
          setForm({ fullName: "", email: "", phoneNumber: "", message: "" });
        }, 3000);
      } else {
        console.error("HubSpot submission failed");
        alert("There was an error submitting your form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (pathname === "/thank-you") return null;

  return (
    <>
      {isOpen && (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 md:p-6">
          <div className="relative w-full max-w-6xl overflow-hidden rounded-[24px] bg-[#e8e8ee] shadow-2xl">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
              className="popup-close-btn absolute top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#10163d] text-white transition hover:opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr]">
              <div className="relative min-h-[260px] md:min-h-[500px]">
                <Image
                  src="/brand-img/June_Teenth_Event_Banner.jpg"
                  alt="Juneteenth popup banner"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-5 md:p-8">
                  <h3 className="max-w-[420px] font-poppins text-3xl font-bold leading-tight text-white md:text-[56px]">
                    <span className="popup-typewriter">Get 20% OFF</span>
                  </h3>
                  <button
                    type="button"
                    className="mt-5 inline-flex items-center rounded-md bg-[#0f1438] px-6 py-3 font-poppins text-sm font-semibold uppercase text-white transition hover:bg-[#1b235e]"
                  >

                    Explore Now
                  </button>
                </div>
              </div>

              <div className="relative bg-[#f3f4f8] p-5 md:p-8">
                <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-[#f39a1f] to-[#df3369] [clip-path:polygon(100%_0,0_0,100%_100%)]" />

                <form onSubmit={handleSubmit}>
                  <div className="mb-6 text-left">
                    <h2
                      className="text-2xl font-extrabold leading-tight text-[#10163d] md:text-[34px]"
                      style={{
                        fontFamily: "'Merriweather', serif",
                        letterSpacing: "0.2px",
                        textWrap: "balance",
                      }}
                    >
                      Don't Miss a 20% Discount on Juneteenth!
                    </h2>
                    <p className="mt-3 font-poppins text-sm leading-6 text-[#3b4155] md:text-[15px]">
                      Want to have your manuscript written or polished? Pine Book Writing is offering an exclusive 20% discount this Juneteenth on all of our ghostwriting and editing packages.</p>               </div>

                  <div className="space-y-3">
                    <input
                      type="text"
                      name="fullName"
                      onChange={handleChange}
                      value={form.fullName}
                      required
                      className="h-12 w-full rounded-lg border border-[#ced3ea] bg-white px-4 font-poppins text-sm text-[#0f1535] outline-none focus:border-[#2c9384]"
                      placeholder="Enter your Name"
                    />

                    <input
                      type="text"
                      name="phoneNumber"
                      onChange={handleChange}
                      value={form.phoneNumber}
                      required
                      className="h-12 w-full rounded-lg border border-[#ced3ea] bg-white px-4 font-poppins text-sm text-[#0f1535] outline-none focus:border-[#2c9384]"
                      placeholder="Enter your Phone"
                    />
                    {phoneError && <p className="text-sm text-red-500">{phoneError}</p>}

                    <input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      value={form.email}
                      required
                      className="h-12 w-full rounded-lg border border-[#ced3ea] bg-white px-4 font-poppins text-sm text-[#0f1535] outline-none focus:border-[#2c9384]"
                      placeholder="Enter your Email"
                    />

                    <textarea
                      onChange={handleChange}
                      value={form.message}
                      required
                      placeholder="Enter your Message"
                      name="message"
                      className="min-h-[88px] w-full resize-none rounded-lg border border-[#ced3ea] bg-white px-4 py-3 font-poppins text-sm text-[#0f1535] outline-none focus:border-[#2c9384]"
                      rows={3}
                    />

                    {/* <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="popup-consent"
                          type="checkbox"
                          className="h-4 w-4 rounded-sm border border-gray-300 bg-gray-50"
                          required
                        />
                      </div>
                      <label htmlFor="popup-consent" className="ms-2 text-xs font-medium text-[#3b4155]">
                        By checking this box, I consent to received text messages related to Follow Up Messages and Appointment Reminders from Pine Book Writing and Publishing. you can reply "STOP" at any time to opt-out. Message and data rates may apply. Message Frequency may vary, text Help to <Link href="tel:(866) 841-7469" className="text-blue-600">(866) 841-7469</Link> for assistance. For more information, please refer to our <Link href="privacy-policy" className="text-blue-600" target="_blank">PRIVACY POLICY</Link> and SMS <Link href="terms-and-conditions" className="text-blue-600" target="_blank"> TERMS and CONDITIONS </Link> on our website.
                      </label>
                    </div> */}

                    {showSuccess && (
                      <p className="px-1 py-2 text-green-700">Form submitted Successfully!</p>
                    )}

                    <button
                      className="w-full rounded-lg bg-[#10163d] p-3 font-poppins text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#17205a] disabled:cursor-not-allowed disabled:opacity-50"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Activate Your 20% Discount"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
      <style jsx>{`
        .popup-close-btn {
          right: 16px;
        }

        .popup-typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #ffffff;
          width: 0;
          animation: typing 2.4s steps(11, end) infinite, blink 0.8s step-end infinite;
        }

        @keyframes typing {
          0% {
            width: 0;
          }
          45% {
            width: 11ch;
          }
          70% {
            width: 11ch;
          }
          100% {
            width: 0;
          }
        }

        @keyframes blink {
          30% {
            border-color: transparent;
          }
        }
      `}</style>
    </>
  );
}
