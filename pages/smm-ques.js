import React, { useEffect, useState } from "react";
import useHubspotForm from "/hooks/hubspot";
import Link from 'next/link';
import Head from "next/head";
import Image from "next/image";
import BrandPrimaryHeader from "./components/BrandPrimaryHeader";
import { Checkbox } from "flowbite-react";

// Checkbox Object

const socialMediaObj = [
    {
        id: "1",
        name: "Facebook",
    },
    {
        id: "2",
        name: "Instagram",
    },
    {
        id: "3",
        name: "Twitter",
    },
    {
        id: "4",
        name: "LinkedIn",
    },
    {
        id: "5",
        name: "Pinterest",
    },
    {
        id: "6",
        name: "Quora",
    },
    {
        id: "7",
        name: "Reddit",
    },
    {
        id: "8",
        name: "TikTok",
    },
    {
        id: "8",
        name: "Youtube",
    },
]

const brandToneObj = [
    {
        id: "1",
        name: "Positive and Inspiring",
    },
    {
        id: "2",
        name: "Humorous",
    },
    {
        id: "3",
        name: "Strong and Aggressive",
    },
    {
        id: "4",
        name: "Considerate and Simple",
    },
    {
        id: "5",
        name: "Emotional",
    },
]
const expectationsObj = [
    {
        id: "1",
        name: "Higher brand awareness",
    },
    {
        id: "2",
        name: "Increased Video Views",
    },
    {
        id: "3",
        name: "Higher site traffic",
    },
    {
        id: "4",
        name: "Increase Page Likes",
    },
    {
        id: "5",
        name: "Increase Page Engagement",
    },
    {
        id: "6",
        name: "Increased customer calls",
    },
    {
        id: "7",
        name: "Increased customer messages",
    },
    {
        id: "8",
        name: "App installs",
    },
    {
        id: "9",
        name: "Conversion/Product Sales",
    },

]

const activitiesObj = [
    {
        id: "1",
        name: "Re-branding",
    },
    {
        id: "2",
        name: "Search Engine Optimization",
    },
    {
        id: "3",
        name: "PPC",
    },
    {
        id: "4",
        name: "Paid Ads",
    },
    {
        id: "5",
        name: "Influencer Marketing",
    },
    {
        id: "6",
        name: "Website Design & Development",
    },
    {
        id: "7",
        name: "Other",
    },

]

export default function Smm() {


    const { submitMainContactForm } = useHubspotForm();
    const [authorName, setAuthorName] = useState("");
    const [bookName, setBookName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [website, setWebsite] = useState("");
    const [timeZone, setTimeZone] = useState("");
    const [socialMedia, setSocialMedia] = useState("");
    const [notableAreas, setNotableAreas] = useState("");
    const [briefDescription, setBriefDescription] = useState("");

    const [paidAdvertisement, setPaidAdvertisement] = useState("");
    const [brandTone, setBrandTone] = useState("");
    const [bookBranding, setBookBranding] = useState("");
    const [expectations, setExpectations] = useState("");
    const [activities, setActivities] = useState("");
    const [region, setRegion] = useState("");
    const [ageRange, setAgeRange] = useState("");
    const [gender, setGender] = useState("");
    const [marketingServices, setMarketingServices] = useState("");
    const [mediaAccounts, setMediaAccounts] = useState("");
    const [information, setInformation] = useState("");
    const [message, setMessage] = useState("");

    const handleSocialMediaChange = (event) => {
        const checkedId = event.target.value;
        if (event.target.checked) {
            setSocialMedia([...socialMedia, checkedId])
            setExpectations([...expectations, checkedId])
            setBrandTone([...brandTone, checkedId])
            setActivities([...activities, checkedId])
        } else {
            setSocialMedia(socialMedia.filter(id => id !== checkedId))
            setExpectations(socialMedia.filter(id => id !== checkedId))
            setBrandTone(socialMedia.filter(id => id !== checkedId))
            setActivities(socialMedia.filter(id => id !== checkedId))
        }
    }



    const handleChange = (e) => {
        const { name, value } = e.target;
        const setters = {
            authorName: setAuthorName,
            bookName: setBookName,
            email: setEmail,
            number: setNumber,
            website: setWebsite,
            timeZone: setTimeZone,
            socialMedia: setSocialMedia,
            notableAreas: setNotableAreas,
            briefDescription: setBriefDescription,

            paidAdvertisement: setPaidAdvertisement,
            brandTone: setBrandTone,
            bookBranding: setBookBranding,
            expectations: setExpectations,
            activities: setActivities,
            region: setRegion,
            ageRange: setAgeRange,
            gender: setGender,
            marketingServices: setMarketingServices,
            mediaAccounts: setMediaAccounts,
            information: setInformation,
            message: setMessage,

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
        const response = await submitMainContactForm(
            authorName,
            bookName,
            email,
            number,
            website,
            timeZone,
            socialMedia,
            notableAreas,
            briefDescription,

            paidAdvertisement,
            brandTone,
            bookBranding,
            expectations,
            activities,
            region,
            ageRange,
            gender,
            marketingServices,
            mediaAccounts,
            information,
            message,
        );
        if (response) {
            setShowSuccess(true);
            router.push('/thank-you')
            setTimeout(() => {
                setShowSuccess(false);
                setAuthorName("");
                setBookName("");
                setEmail("");
                setNumber("");
                setWebsite("");
                setTimeZone("");
                setSocialMedia("");
                setNotableAreas("");
                setBriefDescription("");

                setPaidAdvertisement("");
                setBrandTone("");
                setBookBranding("");
                setExpectations("");
                setActivities("");
                setRegion("");
                setAgeRange("");
                setGender("");
                setMarketingServices("");
                setMediaAccounts("");
                setInformation("");
                setMessage("");
            }, 3000);
        }

        console.log("response", response);
    };

    return (
        <>
            <Head>
                <title>Client Testimonials | Pine Book Writing</title>
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
                            <Image className='logo' src={'/brand-img/PBWChristmas.gif'} width={200} height={80} alt="brand logo" loading="lazy" />
                        </Link>
                    </div>


                </div>
            </header>
            <BrandPrimaryHeader
                photo_banner={"brand-img/testi-banner.jpg"}
                title="See What Our Clients Are Saying"
                desc="Don't rely only on our words. Explore our clients' valuable reviews about how we helped them succeed."
            />


            <div className="container mx-auto p-14">
                <form className="px-5 mb-5  md:ml-20" onSubmit={handleSubmit}>

                    <h1 className="md:text-4xl text-2xl text-black font-poppins font-bold">SMM Questionnaire</h1>
                    <p className="text-black leading-6  pb-5 text-base pt-4">This detailed questionnaire will help us in understanding your business and its goals.</p>

                    <div className="columns-2 ">
                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Author Name</label>
                            <input type="text" name="authorName" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Enter your Name" value={authorName} onChange={handleChange} />
                        </div>

                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Book Name</label>
                            <input type="text" name="bookName" onChange={handleChange} required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Book Name" value={bookName} />
                        </div>

                    </div>

                    <div className="columns-2 ">

                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Email</label>
                            <input type="text" name="email" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Enter your Email" value={email} onChange={handleChange} />
                        </div>

                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Number</label>
                            <input type="text" name="number" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Enter your number" value={number} onChange={handleChange} />
                        </div>

                    </div>

                    <div className="columns-2 ">

                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Website URL</label>
                            <input type="text" name="website" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Website URL" value={website} onChange={handleChange} />
                        </div>

                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">What time zone are you in?</label>
                            <input type="text" name="timeZone" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" value={timeZone} onChange={handleChange} />
                        </div>
                    </div>

                    <div class="relative w-full pb-4">
                        <p className="ml-2 font-semibold uppercase text-black">What social media platforms would you like us to focus?</p><br />

                        {
                            socialMediaObj.map((media, index) => (
                                <div>
                                    <label key={media.id}>
                                        <input type="checkbox" value={media.id} className="mr-3 mb-2" checked={socialMedia.includes(media.id)}
                                            onChange={(event) => { handleSocialMediaChange(event) }} />
                                        {media.name}
                                    </label>
                                </div>
                            ))
                        }

                        {/* <input type="checkbox" id="socialMedia" name="socialMedia" value="Facebook" />
                        <label for="socialMedia"> Facebook</label><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="Instagram" />
                        <label for="socialMedia"> Instagram</label><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="Twitter" />
                        <label for="socialMedia"> Twitter</label><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="LinkedIn" />
                        <label for="socialMedia"> LinkedIn</label><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="Pinterest" />
                        <label for="socialMedia"> Pinterest</label><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="Quora" />
                        <label for="socialMedia"> Quora</label><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="Reddit" />
                        <label for="socialMedia"> Reddit</label><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="TikTok" />
                        <label for="socialMedia"> TikTok</label><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="Youtube" />
                        <label for="socialMedia"> Youtube</label><br /> */}

                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">What are the few Notable areas that you are struggling with in terms of social media?</label>
                        <input type="text" name="notableAreas" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" onChange={handleChange} value={notableAreas} />
                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">Give a brief description about your book.</label>
                        <input type="text" name="briefDescription" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" value={briefDescription} onChange={handleChange} />
                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">How much are you willing to spending on your book paid advertisement?</label>
                        <input type="text" name="paidAdvertisement" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" value={paidAdvertisement} onChange={handleChange} />
                    </div>

                    <div class="relative w-full pb-4">

                        <p className="ml-2 font-semibold uppercase text-black">Your Preferred Brand Tone for Book</p><br />


                        {/* <input type="checkbox" id="inspiring" name="brandTone" value="inspiring" />
                        <label for="Positive and Inspiring"> Positive and Inspiring</label><br />

                        <input type="checkbox" id="Humorous" name="brandTone" value="Humorous" />
                        <label for="Humorous"> Humorous</label><br />

                        <input type="checkbox" id="Aggressive" name="brandTone" value="Strong and Aggressive" />
                        <label for="Strong and Aggressive"> Strong and Aggressive</label><br />

                        <input type="checkbox" id="Considerate" name="brandTone" value="Considerate and Simple" />
                        <label for="Considerate and Simple"> Considerate and Simple</label><br />

                        <input type="checkbox" id="Emotional" name="brandTone" value="Emotional" />
                        <label for="Emotional"> Emotional</label><br /> */}


                        {
                            brandToneObj.map((media, index) => (
                                <div>
                                    <label key={media.id}>
                                        <input type="checkbox" value={media.id} className="mr-3 mb-2" checked={brandTone.includes(media.id)}
                                            onChange={(event) => { handleSocialMediaChange(event) }} />
                                        {media.name}
                                    </label>
                                </div>
                            ))
                        }

                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">What kind of colors would you like to associate with your book branding?</label>
                        <input type="text" name="bookBranding" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" onChange={handleChange} value={bookBranding} />
                    </div>

                    <div class="relative w-full pb-4">
                        <p className="ml-2 font-semibold uppercase text-black">What are your goals/expectations/purpose from social media in the next 3 months?
                        </p><br />

                        {
                            expectationsObj.map((media, index) => (
                                <div>
                                    <label key={media.id}>
                                        <input type="checkbox" value={media.id} className="mr-3 mb-2" checked={expectations.includes(media.id)}
                                            onChange={(event) => { handleSocialMediaChange(event) }} />
                                        {media.name}
                                    </label>
                                </div>
                            ))
                        }
                        {/* 
                        <input type="checkbox" id="awareness" name="expectations" value="Higher brand awareness" />
                        <label for="Higher brand awareness"> Higher brand awareness</label><br />

                        <input type="checkbox" id="Video-Views" name="expectations" value="Increased Video Views" />
                        <label for="Increased Video Views"> Increased Video Views</label><br />

                        <input type="checkbox" id="traffic" name="expectations" value="Higher site traffic" />
                        <label for="Higher site traffic"> Higher site traffic</label><br />

                        <input type="checkbox" id="Increase" name="expectations" value="Increase Page Likes" />
                        <label for="Increase Page Likes"> Increase Page Likes</label><br />

                        <input type="checkbox" id="Engagement" name="expectations" value="Increase Page Engagement" />
                        <label for="Increase Page Engagement"> Increase Page Engagement</label><br />

                        <input type="checkbox" id="customer-calls" name="expectations" value="Increased customer calls" />
                        <label for="Increased customer calls"> Leads</label><br />

                        <input type="checkbox" id="Increased-customer-messages" name="expectations" value="Increased customer messages" />
                        <label for="Increased customer messages"> Increased customer messages</label><br />

                        <input type="checkbox" id="App-installs" name="expectations" value="App installs" />
                        <label for="App installs"> App installs</label><br />

                        <input type="checkbox" id="Conversion/Product-Sales" name="expectations" value="Conversion/Product Sales" />
                        <label for="Conversion/Product Sales"> Conversion/Product Sales</label><br /> */}


                    </div>

                    <div class="relative w-full pb-4">
                        <p className="ml-2 font-semibold uppercase text-black">What activities are you considering for your book in future?
                        </p><br />


                        {
                            activitiesObj.map((media, index) => (
                                <div>
                                    <label key={media.id}>
                                        <input type="checkbox" value={media.id} className="mr-3 mb-2" checked={activities.includes(media.id)}
                                            onChange={(event) => { handleSocialMediaChange(event) }} />
                                        {media.name}
                                    </label>
                                </div>
                            ))
                        }

                        {/* <input type="checkbox" id="Re-branding" name="activities" value="Re-branding" />
                        <label for="Re-branding"> Re-branding</label><br />

                        <input type="checkbox" id="Search Engine Optimization" name="activities" value="Search Engine Optimization" />
                        <label for="Search Engine Optimization"> Search Engine Optimization</label><br />

                        <input type="checkbox" id="PPC" name="activities" value="PPC" />
                        <label for="PPC"> PPC</label><br />

                        <input type="checkbox" id="Paid Ads" name="activities" value="Paid Ads" />
                        <label for="Paid Ads"> Paid Ads</label><br />

                        <input type="checkbox" id="Influencer-Marketing" name="activities" value="Influencer Marketing" />
                        <label for="Influencer Marketing"> Influencer Marketing</label><br />


                        <input type="checkbox" id="Design&Development" name="activities" value="Website Design & Development" />
                        <label for="Website Design & Development"> Website Design & Development</label><br />

                        <input type="checkbox" id="Other" name="activities" value="Other" />
                        <label for="Other"> Other</label><br /> */}
                    </div>

                    <div className="columns-2">
                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">In what region do you want to market your book?</label>
                            <input type="text" name="region" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" value={region} onChange={handleChange} />
                        </div>



                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Your book readers age range?</label>
                            <input type="text" name="ageRange" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" value={ageRange} onChange={handleChange} />
                        </div>
                    </div>

                    <div class="relative w-full pb-4">
                        <p className="ml-2 font-semibold uppercase text-black">Your book reader gender?
                        </p><br />

                        <input type="checkbox" id="Male" name="gender" value="Male" />
                        <label for="Male"> Male</label><br />

                        <input type="checkbox" id="Female" name="gender" value="Female" />
                        <label for="Female"> Female</label><br />

                        <input type="checkbox" id="Prefer-not-to-say" name="gender" value="Prefer not to say" />
                        <label for="Prefer not to say"> Prefer not to say</label><br />

                        <input type="checkbox" id="Other" name="gender" value="Other" />
                        <label for="Other"> Other</label><br />

                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">Did you have any third-party marketing agencies in the past that performed any marketing services for you? If so, what were the results they were able to achieve for you?</label>
                        <input type="text" name="marketingServices" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" value={marketingServices} onChange={handleChange} />
                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">If you have any existing Social Media Accounts, kindly provide the login IDs/Emails/Passwords.
                        </label>
                        <input type="text" name="mediaAccounts" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" onChange={handleChange} value={mediaAccounts} />
                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">Any additional information you would like to add.</label>
                        <input type="text" name="information" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" value={information} onChange={handleChange} />
                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">IS THERE ANYTHING ELSE YOU'D WANT TO ADD?</label>
                        <textarea class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" rows="3" required="" placeholder="Please use this section for any additional comments you would like to make on the design of your new logo." name="message" onChange={handleChange} value={message} />
                    </div>

                    <div class="w-full pb-4">
                        <button class="p-4 py-2 text-white uppercase header-submit-btn rounded-xl shadow-xl text-xl" type="submit">Submit</button>
                    </div>

                </form>
            </div>
        </>
    );
}
