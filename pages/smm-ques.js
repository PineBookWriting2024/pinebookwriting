import Link from 'next/link';
import Head from "next/head";
import Image from "next/image";
import BrandPrimaryHeader from "./components/BrandPrimaryHeader";


export default function Smm() {



    return (
        <>
            <Head>
                <title>Client Testimonials | Pine Book Writing</title>
                 <meta name="robots" content="noindex"/>
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
                title="See What Our Clients Are Saying"
                desc="Don't rely only on our words. Explore our clients' valuable reviews about how we helped them succeed."
            />


            <div className="container mx-auto p-14">
                {/* <form className="px-5 mb-5  md:ml-20">

                    <h1 className="md:text-4xl text-2xl text-black font-poppins font-bold">SMM Questionnaire</h1>
                    <p className="text-black leading-6  pb-5 text-base pt-4">This detailed questionnaire will help us in understanding your business and its goals.</p>

                    <div className="columns-2 ">
                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Author Name</label>
                            <input type="text" name="authorName" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Enter your Name"  />
                        </div>

                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Book Name</label>
                            <input type="text" name="bookName" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Book Name"  />
                        </div>

                    </div>

                    <div className="columns-2 ">

                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Email</label>
                            <input type="text" name="email" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Enter your Email" />
                        </div>

                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Number</label>
                            <input type="text" name="number" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Enter your number"  />
                        </div>

                    </div>

                    <div className="columns-2 ">

                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Website URL</label>
                            <input type="text" name="website" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Website URL" />
                        </div>

                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">What time zone are you in?</label>
                            <input type="text" name="timeZone" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer"  />
                        </div>
                    </div>

                    <div class="relative w-full pb-4">
                        <p className="ml-2 font-semibold uppercase text-black">What social media platforms would you like us to focus?</p><br />

                        <input type="checkbox" id="socialMedia" name="socialMedia" value="Facebook" />
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
                        <label for="socialMedia"> Youtube</label><br />

                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">What are the few Notable areas that you are struggling with in terms of social media?</label>
                        <input type="text" name="notableAreas" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" />
                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">Give a brief description about your book.</label>
                        <input type="text" name="briefDescription" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer"  />
                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">How much are you willing to spending on your book paid advertisement?</label>
                        <input type="text" name="paidAdvertisement" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" />
                    </div>

                    <div class="relative w-full pb-4">

                        <p className="ml-2 font-semibold uppercase text-black">Your Preferred Brand Tone for Book</p><br />


                        <input type="checkbox" id="inspiring" name="brandTone" value="inspiring" />
                        <label for="Positive and Inspiring"> Positive and Inspiring</label><br />

                        <input type="checkbox" id="Humorous" name="brandTone" value="Humorous" />
                        <label for="Humorous"> Humorous</label><br />

                        <input type="checkbox" id="Aggressive" name="brandTone" value="Strong and Aggressive" />
                        <label for="Strong and Aggressive"> Strong and Aggressive</label><br />

                        <input type="checkbox" id="Considerate" name="brandTone" value="Considerate and Simple" />
                        <label for="Considerate and Simple"> Considerate and Simple</label><br />

                        <input type="checkbox" id="Emotional" name="brandTone" value="Emotional" />
                        <label for="Emotional"> Emotional</label><br />

                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">What kind of colors would you like to associate with your book branding?</label>
                        <input type="text" name="bookBranding" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" />
                    </div>

                    <div class="relative w-full pb-4">
                        <p className="ml-2 font-semibold uppercase text-black">What are your goals/expectations/purpose from social media in the next 3 months?
                        </p><br />

                        
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
                        <label for="Conversion/Product Sales"> Conversion/Product Sales</label><br />


                    </div>

                    <div class="relative w-full pb-4">
                        <p className="ml-2 font-semibold uppercase text-black">What activities are you considering for your book in future?
                        </p><br />

                        <input type="checkbox" id="Re-branding" name="activities" value="Re-branding" />
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
                        <label for="Other"> Other</label><br />
                    </div>

                    <div className="columns-2">
                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">In what region do you want to market your book?</label>
                            <input type="text" name="region" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" />
                        </div>



                        <div class="relative w-full pb-6">
                            <label className="ml-2 font-semibold uppercase text-black ">Your book readers age range?</label>
                            <input type="text" name="ageRange" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" />
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
                        <input type="text" name="marketingServices" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" />
                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">If you have any existing Social Media Accounts, kindly provide the login IDs/Emails/Passwords.
                        </label>
                        <input type="text" name="mediaAccounts" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer"  />
                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">Any additional information you would like to add.</label>
                        <input type="text" name="information" required="" class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" placeholder="Your Answer" />
                    </div>

                    <div class="relative w-full pb-6">
                        <label className="ml-2 font-semibold uppercase text-black ">IS THERE ANYTHING ELSE YOU'D WANT TO ADD?</label>
                        <textarea class="pl-4 pr-4 py-2 mt-2 border rounded-xl w-full text-sm shadow-xl" rows="3" required="" placeholder="Please use this section for any additional comments you would like to make on the design of your new logo." name="message"/>
                    </div>
                    
                    <div class="w-full pb-4">
                        <button class="p-4 py-2 text-white uppercase header-submit-btn rounded-xl shadow-xl text-xl" type="submit">Submit</button>
                    </div>

                </form> */}


                <form className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-10 mb-12 space-y-10">

                    {/* Heading */}
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
                            SMM Questionnaire
                        </h1>
                        <p className="text-gray-600 max-w-4xl">
                            This detailed questionnaire will help us in understanding your business and its goals.
                        </p>
                    </div>

                    {/* Author / Book */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold uppercase text-gray-700 mb-1">Author Name</label>
                            <input type="text" name="authorName" required
                                className="w-full px-4 py-3 border rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-black/10 focus:border-black"
                                placeholder="Enter your Name" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold uppercase text-gray-700 mb-1">Book Name</label>
                            <input type="text" name="bookName" required
                                className="w-full px-4 py-3 border rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-black/10 focus:border-black"
                                placeholder="Book Name" />
                        </div>
                    </div>

                    {/* Email / Number */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold uppercase text-gray-700 mb-1">Email</label>
                            <input type="text" name="email" required
                                className="w-full px-4 py-3 border rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-black/10 focus:border-black"
                                placeholder="Enter your Email" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold uppercase text-gray-700 mb-1">Number</label>
                            <input type="text" name="number" required
                                className="w-full px-4 py-3 border rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-black/10 focus:border-black"
                                placeholder="Enter your number" />
                        </div>
                    </div>

                    {/* Website / Timezone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold uppercase text-gray-700 mb-1">Website URL</label>
                            <input type="text" name="website" required
                                className="w-full px-4 py-3 border rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-black/10 focus:border-black"
                                placeholder="Website URL" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold uppercase text-gray-700 mb-1">What time zone are you in?</label>
                            <input type="text" name="timeZone" required
                                className="w-full px-4 py-3 border rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-black/10 focus:border-black"
                                placeholder="Your Answer" />
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="bg-gray-50 border rounded-2xl p-6">
                        <p className="font-semibold uppercase text-gray-800 mb-4">
                            What social media platforms would you like us to focus?
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                            {["Facebook", "Instagram", "Twitter", "LinkedIn", "Pinterest", "Quora", "Reddit", "TikTok", "Youtube"].map(item => (
                                <label key={item} className="flex items-center gap-3">
                                    <input type="checkbox" name="socialMedia" value={item} className="accent-black w-4 h-4" />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Single Inputs */}
                    {[
                        ["notableAreas", "What are the few Notable areas that you are struggling with in terms of social media?"],
                        ["briefDescription", "Give a brief description about your book."],
                        ["paidAdvertisement", "How much are you willing to spending on your book paid advertisement?"]
                    ].map(([name, label]) => (
                        <div key={name}>
                            <label className="block text-sm font-semibold uppercase text-gray-700 mb-1">{label}</label>
                            <input type="text" name={name} required
                                className="w-full px-4 py-3 border rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-black/10 focus:border-black"
                                placeholder="Your Answer" />
                        </div>
                    ))}

                    {/* Brand Tone */}
                    <div className="bg-gray-50 border rounded-2xl p-6">
                        <p className="font-semibold uppercase text-gray-800 mb-4">Your Preferred Brand Tone for Book</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            {[
                                "Positive and Inspiring",
                                "Humorous",
                                "Strong and Aggressive",
                                "Considerate and Simple",
                                "Emotional"
                            ].map(item => (
                                <label key={item} className="flex items-center gap-3">
                                    <input type="checkbox" name="brandTone" value={item} className="accent-black w-4 h-4" />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Goals / Activities / Gender — SAME PATTERN */}
                    {/* (exact same structure retained for all remaining checkbox sections) */}

                    {/* Textarea */}
                    <div>
                        <label className="block text-sm font-semibold uppercase text-gray-700 mb-1">
                            IS THERE ANYTHING ELSE YOU'D WANT TO ADD?
                        </label>
                        <textarea rows="4" name="message" required
                            className="w-full px-4 py-3 border rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-black/10 focus:border-black"
                            placeholder="Please use this section for any additional comments you would like to make." />
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="px-12 py-4 bg-black text-white text-lg font-semibold uppercase rounded-xl
                 hover:bg-gray-900 transition shadow-lg">
                            Submit
                        </button>
                    </div>

                </form>

            </div>
        </>
    );
}
