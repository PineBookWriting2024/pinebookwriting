import Link from 'next/link';
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import BrandPrimaryHeader from "./components/BrandPrimaryHeader";
import { useRouter } from "next/router";

export default function Smm() {
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Location info (same as your other form)
    const [userInfo, setUserInfo] = useState({
        ip: "",
        city: "",
        region: "",
        country: "",
    });

    // Form state
    const [form, setForm] = useState({
        authorName: "",
        bookName: "",
        penName: "",
        genres: "",
        email: "",
        number: "",
        website: "",
        timeZone: "",
        idealReaderAge: "",
        idealReaderInterests: "",
        idealReaderLocation: "",
        idealReaderFavoriteAuthors: "",
        notableAreas: "",
        briefDescription: "",
        paidAdvertisement: "",
        bookBranding: "",
        regionToMarket: "",
        ageRange: "",
        marketingServices: "",
        mediaAccounts: "",
        information: "",
        message: "",
        // checkbox groups (arrays)
        publishingStage: [],
        primaryGoal: [],
        socialMedia: [],
        targeting: [],
        assets: [],
        brandTone: [],
        expectations: [],
        activities: [],
        gender: [],
    });

    const [phoneError, setPhoneError] = useState("");

    useEffect(() => {
        fetchUserRegion();
    }, []);

    const fetchUserRegion = async () => {
        try {
            const response = await fetch("https://ipwhois.app/json/");
            const data = await response.json();

            setUserInfo({
                ip: data.ip || "",
                city: data.city || "",
                region: data.region || "",
                country: data.country || "",
            });
        } catch (error) {
            console.error("Failed to fetch user region:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // Checkbox groups
        const checkboxGroups = new Set([
            "publishingStage",
            "primaryGoal",
            "socialMedia",
            "targeting",
            "assets",
            "brandTone",
            "expectations",
            "activities",
            "gender",
        ]);

        if (type === "checkbox" && checkboxGroups.has(name)) {
            setForm((prev) => {
                const current = prev[name] || [];
                if (checked) return { ...prev, [name]: [...current, value] };
                return { ...prev, [name]: current.filter((v) => v !== value) };
            });
            return;
        }

        // Phone validation (keep it simple, digits only, min 9)
        if (name === "number") {
            const phoneRegex = /^\d*$/;
            if (!phoneRegex.test(value)) {
                setPhoneError("Invalid phone number format");
                return;
            }
            setForm((prev) => ({ ...prev, [name]: value }));
            if (value.length > 0 && value.length < 9) setPhoneError("Phone number must be at least 9 digits");
            else setPhoneError("");
            return;
        }

        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const sendSmmEmailNotification = async (payload) => {
        try {
            const response = await fetch("/api/smm-questionnaire-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...payload,
                    currentPage: typeof window !== "undefined" ? window.location.href : "",
                    referringPage: typeof document !== "undefined" ? document.referrer || "Direct visit" : "Direct visit",
                    userIP: userInfo.ip,
                    userCity: userInfo.city,
                    userRegion: userInfo.region,
                    userCountry: userInfo.country,
                }),
            });

            const result = await response.json();
            if (!result?.success) console.error("Email sending failed:", result?.message || result);
            return result;
        } catch (error) {
            console.error("Error sending email:", error);
            return { success: false, message: error?.message || "Unknown error" };
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.number?.length < 9) {
            setPhoneError("Phone number must be at least 9 digits");
            return;
        }

        setIsSubmitting(true);

        try {
            const emailResult = await sendSmmEmailNotification(form);

            if (emailResult?.success) {
                setShowSuccess(true);
                setTimeout(() => {
                    setShowSuccess(false);
                }, 4000);
            } else {
                alert("There was an error submitting your form. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("There was an error submitting your form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const t = setTimeout(() => {
            if (typeof window !== "undefined" && window.zE) {
                window.zE("webWidget", "hide");
            }
            const style = document.createElement("style");
            style.setAttribute("data-hide-zendesk", "true");
            style.innerHTML = `
        #launcher, .zEWidget-launcher, iframe[title="Zendesk Chat widget"], iframe[id*="launcher"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `;
            document.head.appendChild(style);
        }, 500);
        return () => {
            clearTimeout(t);
            if (typeof window !== "undefined" && window.zE) {
                window.zE("webWidget", "show");
            }
            const injected = document.querySelector('style[data-hide-zendesk="true"]');
            if (injected) injected.remove();
        };
    }, []);


    return (
        <>
            <Head>
                <title>Client Testimonials | Pine Book Writing</title>
                <meta name="robots" content="noindex" />
                <meta
                    name="description"
                    content="Explore the real success stories and glowing feedback from our satisfied clients. See how Pine Book Writing delivers results."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <header id="navbar" className="bg-transparent absolute top-10 left-0 flex justify-between items-center p-4 z-10">
                <div className='max-w-screen-xl flex justify-between items-center mx-auto w-full'>
                    <div>
                        <Link href="/" className="text-xl font-bold text-white">
                            <Image className='logo' src={'/images/writing-logo.png'} width={200} height={80} alt="brand logo" loading="lazy" />
                        </Link>
                    </div>


                </div>
            </header>
            <BrandPrimaryHeader
                photo_banner={"brand-img/testi-banner.jpg"}
                title="Helping Authors Turn Stories Into Bestsellers"
                desc="We help authors build strong online presence, connect with readers, and promote their books through proven social media and advertising strategies."
            />


            <div className="container mx-auto p-14">
                <form className="px-5 mb-5  md:ml-20" onSubmit={handleSubmit}>

                    <h1 className="md:text-4xl text-2xl text-black font-poppins font-bold">SMM Questionnaire</h1>
                    <p className="text-black leading-6  pb-5 text-base pt-4">This detailed questionnaire will help us in understanding your business and its goals.</p>

                    <div className="columns-2 ">
                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Author Name</label>
                            <input
                                type="text"
                                name="authorName"
                                required
                                value={form.authorName}
                                onChange={handleChange}
                                className="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl"
                                placeholder="Enter your Name"
                            />
                        </div>

                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Book Name</label>
                            <input
                                type="text"
                                name="bookName"
                                required
                                value={form.bookName}
                                onChange={handleChange}
                                className="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl"
                                placeholder="Book Name"
                            />
                        </div>

                    </div>

                    <div className="columns-2 ">
                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Pen Name (if any):</label>
                            <input
                                type="text"
                                name="penName"
                                value={form.penName}
                                onChange={handleChange}
                                className="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl"
                                placeholder="Enter your Pen Name"
                            />
                        </div>

                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Genre(s):</label>
                            <input
                                type="text"
                                name="genres"
                                value={form.genres}
                                onChange={handleChange}
                                className="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl"
                                placeholder="Genres"
                            />
                        </div>

                    </div>

                    <div className="columns-2 ">

                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl"
                                placeholder="Enter your Email"
                            />
                        </div>

                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Number</label>
                            <input
                                type="text"
                                name="number"
                                required
                                value={form.number}
                                onChange={handleChange}
                                className="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl"
                                placeholder="Enter your number"
                            />
                            {phoneError ? <p className="text-red-600 text-sm mt-2 ml-2">{phoneError}</p> : null}
                        </div>

                    </div>

                    <div className="columns-2 ">

                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Website URL</label>
                            <input type="text" name='website' value={form.website} onChange={handleChange} required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Website URL" />
                        </div>

                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">What time zone are you in?</label>
                            <input type="text" name='timeZone' value={form.timeZone} onChange={handleChange} required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" />
                        </div>
                    </div>

                    <div className="relative w-full pb-4">
                        <p className="ml-2 font-semibold uppercase text-black">Publishing Stage</p>
                        <br />

                        <label className="block">
                            <input type="checkbox" name="publishingStage" value="Writing" onChange={handleChange} />
                            <span className="ml-2">Writing</span>
                        </label>

                        <label className="block">
                            <input type="checkbox" name="publishingStage" value="Editing" onChange={handleChange} />
                            <span className="ml-2">Editing</span>
                        </label>

                        <label className="block">
                            <input type="checkbox" name="publishingStage" value="Published" onChange={handleChange} />
                            <span className="ml-2">Published</span>
                        </label>

                        <label className="block">
                            <input type="checkbox" name="publishingStage" value="Pre-Launch" onChange={handleChange} />
                            <span className="ml-2">Pre-Launch</span>
                        </label>
                    </div>

                    <div class="relative w-full pb-4">
                        {/* <p className="ml-2 font-semibold uppercase text-black">Marketing Goals</p><br /> */}
                        <p className="ml-2 font-semibold uppercase text-black">What is your primary goal?</p><br />

                        <input type="checkbox" id="PublishingStage" name="primaryGoal" value="Increase Book Sales" onChange={handleChange} />
                        <label for="primaryGoal"> Increase Book Sales</label><br />

                        <input type="checkbox" id="PublishingStage" name="primaryGoal" value="Build Author Brand" onChange={handleChange} />
                        <label for="primaryGoal"> Build Author Brand</label><br />

                        <input type="checkbox" id="PublishingStage" name="primaryGoal" value="Grow Social Media Following" onChange={handleChange} />
                        <label for="primaryGoal"> Grow Social Media Following</label><br />

                        <input type="checkbox" id="PublishingStage" name="primaryGoal" value="Email List Growth" onChange={handleChange} />
                        <label for="primaryGoal"> Email List Growth</label><br />

                        <input type="checkbox" id="PublishingStage" name="primaryGoal" value="Launch Promotion" onChange={handleChange} />
                        <label for="primaryGoal"> Launch Promotion</label><br />

                    </div>

                    <div class="relative w-full pb-4">
                        <p className="ml-2 font-semibold uppercase text-black">What social media platforms would you like us to focus?</p><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="Facebook" onChange={handleChange} />
                        <label for="socialMedia"> Facebook</label><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="Instagram" onChange={handleChange} />
                        <label for="socialMedia"> Instagram</label><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="Twitter" onChange={handleChange} />
                        <label for="socialMedia"> Twitter</label><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="LinkedIn" onChange={handleChange} />
                        <label for="socialMedia"> LinkedIn</label><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="Pinterest" onChange={handleChange} />
                        <label for="socialMedia"> Pinterest</label><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="Quora" onChange={handleChange} />
                        <label for="socialMedia"> Quora</label><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="Reddit" onChange={handleChange} />
                        <label for="socialMedia"> Reddit</label><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="TikTok" onChange={handleChange} />
                        <label for="socialMedia"> TikTok</label><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="Youtube" onChange={handleChange} />
                        <label for="socialMedia"> Youtube</label><br />

                    </div>


                    <div class="relative w-full pb-4">
                        <p className="ml-2 font-semibold uppercase text-black">Are you targeting:</p><br />

                        <input type="checkbox" id="PublishingStage" name="targeting" value="Local Readers" onChange={handleChange} />
                        <label for="targeting"> Local Readers</label><br />

                        <input type="checkbox" id="targeting" name="targeting" value="International Readers" onChange={handleChange} />
                        <label for="targeting"> International Readers</label><br />

                        <input type="checkbox" id="targeting" name="targeting" value="Niche Community" onChange={handleChange} />
                        <label for="targeting"> Niche Community</label><br />
                    </div>


                    <div class="relative w-full pb-4">
                        <p className="ml-2 font-semibold uppercase text-black">Do you have:</p><br />

                        <input type="checkbox" id="PublishingStage" name="assets" value="Author photos" onChange={handleChange} />
                        <label for="assets"> Author photos</label><br />

                        <input type="checkbox" id="targeting" name="assets" value="Book covers" onChange={handleChange} />
                        <label for="assets"> Book covers</label><br />
                    </div>

                    <p className="ml-2 font-semibold uppercase text-black"> Who is your ideal reader?</p><br />


                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">Age</label>
                        <input type="text" name="idealReaderAge" value={form.idealReaderAge} onChange={handleChange} required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Age" />
                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">interests</label>
                        <input type="text" name="idealReaderInterests" value={form.idealReaderInterests} onChange={handleChange} required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="interests" />
                    </div>
                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">location</label>
                        <input type="text" name="idealReaderLocation" value={form.idealReaderLocation} onChange={handleChange} required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="location" />
                    </div>
                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">favorite authors</label>
                        <input type="text" name="idealReaderFavoriteAuthors" value={form.idealReaderFavoriteAuthors} onChange={handleChange} required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="favorite authors" />
                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">What are the few Notable areas that you are struggling with in terms of social media?</label>
                        <input type="text" name="notableAreas" value={form.notableAreas} onChange={handleChange} required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" />
                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">Give a brief description about your book.</label>
                        <input type="text" name="briefDescription" value={form.briefDescription} onChange={handleChange} required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" />
                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">How much are you willing to spending on your book paid advertisement?</label>
                        <input type="text" name="paidAdvertisement" value={form.paidAdvertisement} onChange={handleChange} required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" />
                    </div>

                    <div class="relative w-full pb-4">

                        <p className="ml-2 font-semibold uppercase text-black">Your Preferred Brand Tone for Book</p><br />


                        <input type="checkbox" id="inspiring" name="brandTone" value="inspiring" onChange={handleChange} />
                        <label for="Positive and Inspiring"> Positive and Inspiring</label><br />

                        <input type="checkbox" id="Humorous" name="brandTone" value="Humorous" onChange={handleChange} />
                        <label for="Humorous"> Humorous</label><br />

                        <input type="checkbox" id="Aggressive" name="brandTone" value="Strong and Aggressive" onChange={handleChange} />
                        <label for="Strong and Aggressive"> Strong and Aggressive</label><br />

                        <input type="checkbox" id="Considerate" name="brandTone" value="Considerate and Simple" onChange={handleChange} />
                        <label for="Considerate and Simple"> Considerate and Simple</label><br />

                        <input type="checkbox" id="Emotional" name="brandTone" value="Emotional" onChange={handleChange} />
                        <label for="Emotional"> Emotional</label><br />

                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">What kind of colors would you like to associate with your book branding?</label>
                        <input type="text" name="bookBranding" value={form.bookBranding} onChange={handleChange} required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" />
                    </div>

                    <div class="relative w-full pb-4">
                        <p className="ml-2 font-semibold uppercase text-black">What are your goals/expectations/purpose from social media in the next 3 months?
                        </p><br />

                        <input type="checkbox" id="awareness" name="expectations" value="Higher brand awareness" onChange={handleChange} />
                        <label for="Higher brand awareness"> Higher brand awareness</label><br />

                        <input type="checkbox" id="Video-Views" name="expectations" value="Increased Video Views" onChange={handleChange} />
                        <label for="Increased Video Views"> Increased Video Views</label><br />

                        <input type="checkbox" id="traffic" name="expectations" value="Higher site traffic" onChange={handleChange} />
                        <label for="Higher site traffic"> Higher site traffic</label><br />

                        <input type="checkbox" id="Increase" name="expectations" value="Increase Page Likes" onChange={handleChange} />
                        <label for="Increase Page Likes"> Increase Page Likes</label><br />

                        <input type="checkbox" id="Engagement" name="expectations" value="Increase Page Engagement" onChange={handleChange} />
                        <label for="Increase Page Engagement"> Increase Page Engagement</label><br />

                        <input type="checkbox" id="customer-calls" name="expectations" value="Increased customer calls" onChange={handleChange} />
                        <label for="Increased customer calls"> Leads</label><br />

                        <input type="checkbox" id="Increased-customer-messages" name="expectations" value="Increased customer messages" onChange={handleChange} />
                        <label for="Increased customer messages"> Increased customer messages</label><br />

                        <input type="checkbox" id="App-installs" name="expectations" value="App installs" onChange={handleChange} />
                        <label for="App installs"> App installs</label><br />

                        <input type="checkbox" id="Conversion/Product-Sales" name="expectations" value="Conversion/Product Sales" onChange={handleChange} />
                        <label for="Conversion/Product Sales"> Conversion/Product Sales</label><br />

                    </div>

                    <div class="relative w-full pb-4">
                        <p className="ml-2 font-semibold uppercase text-black">What activities are you considering for your book in future?
                        </p><br />

                        <input type="checkbox" id="Re-branding" name="activities" value="Re-branding" onChange={handleChange} />
                        <label for="Re-branding"> Re-branding</label><br />

                        <input type="checkbox" id="Search Engine Optimization" name="activities" value="Search Engine Optimization" onChange={handleChange} />
                        <label for="Search Engine Optimization"> Search Engine Optimization</label><br />

                        <input type="checkbox" id="PPC" name="activities" value="PPC" onChange={handleChange} />
                        <label for="PPC"> PPC</label><br />

                        <input type="checkbox" id="Paid Ads" name="activities" value="Paid Ads" onChange={handleChange} />
                        <label for="Paid Ads"> Paid Ads</label><br />

                        <input type="checkbox" id="Influencer-Marketing" name="activities" value="Influencer Marketing" onChange={handleChange} />
                        <label for="Influencer Marketing"> Influencer Marketing</label><br />


                        <input type="checkbox" id="Design&Development" name="activities" value="Website Design & Development" onChange={handleChange} />
                        <label for="Website Design & Development"> Website Design & Development</label><br />

                        <input type="checkbox" id="Other" name="activities" value="Other" onChange={handleChange} />
                        <label for="Other"> Other</label><br />
                    </div>

                    <div className="columns-2">
                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">In what region do you want to market your book?</label>
                            <input type="text" name="regionToMarket" value={form.regionToMarket} onChange={handleChange} required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" />
                        </div>



                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Your book readers age range?</label>
                            <input type="text" name="ageRange" value={form.regionToMarket} onChange={handleChange} required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" />
                        </div>
                    </div>

                    <div class="relative w-full pb-4">
                        <p className="ml-2 font-semibold uppercase text-black">Your book reader gender?
                        </p><br />

                        <input type="checkbox" id="Male" name="gender" value="Male" onChange={handleChange} />
                        <label for="Male"> Male</label><br />

                        <input type="checkbox" id="Female" name="gender" value="Female" onChange={handleChange} />
                        <label for="Female"> Female</label><br />

                        <input type="checkbox" id="Prefer-not-to-say" name="gender" value="Prefer not to say" onChange={handleChange} />
                        <label for="Prefer not to say"> Prefer not to say</label><br />

                        <input type="checkbox" id="Other" name="gender" value="Other" onChange={handleChange} />
                        <label for="Other"> Other</label><br />

                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">Did you have any third-party marketing agencies in the past that performed any marketing services for you? If so, what were the results they were able to achieve for you?</label>
                        <input type="text" name="marketingServices" value={form.marketingServices} onChange={handleChange} required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" />
                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">If you have any existing Social Media Accounts, kindly provide the login IDs/Emails/Passwords.
                        </label>
                        <input type="text" name="mediaAccounts" value={form.mediaAccounts} onChange={handleChange} required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" />
                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">Any additional information you would like to add.</label>
                        <input type="text" name="information" value={form.information} onChange={handleChange} required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" />
                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">IS THERE ANYTHING ELSE YOU'D WANT TO ADD?</label>
                        <textarea
                            className="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl"
                            rows={3}
                            required
                            placeholder="Please use this section for any additional comments..."
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                        />
                    </div>

                    <div class="w-full pb-4">
                        <button disabled={isSubmitting} class="p-4 py-2 text-white uppercase header-submit-btn rounded-xl shadow-xl text-xl" type="submit"> {isSubmitting ? "Submitting..." : "Submit"}</button>
                        {showSuccess ? <p className="text-green-600 mt-3">Submitted successfully.</p> : null}
                    </div>
                </form>
            </div>

            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn">

                        {/* Close Button */}
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                            aria-label="Close"
                        >
                            ×
                        </button>

                        {/* Content */}
                        <div className="text-center">
                            <div className="text-5xl mb-4">✅</div>

                            <h2 className="text-2xl font-bold text-black mb-2">
                                Thank You!
                            </h2>

                            <p className="text-gray-700 text-base leading-relaxed mb-6">
                                Your SMM questionnaire has been submitted successfully.
                                Our team is reviewing your details and will reach out shortly to discuss next steps.
                            </p>

                            <button
                                onClick={() => setShowSuccess(false)}
                                className="bg-[#0d0f38] text-white px-6 py-2 rounded-lg text-base font-semibold hover:opacity-90 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}
