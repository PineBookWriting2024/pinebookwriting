import Link from 'next/link';
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import BrandPrimaryHeader from "./components/BrandPrimaryHeader";
import { useRouter } from "next/router";
import { Send, Upload, Check, X } from 'lucide-react';


export default function LogoBrief() {
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Location info
    const [userInfo, setUserInfo] = useState({
        ip: "",
        city: "",
        region: "",
        country: "",
    });

    // Form state
    const [formData, setFormData] = useState({
        email: '',
        exactName: '',
        slogan: '',
        companyName: '',
        industry: '',
        likesLinks: '',
        dislikesLinks: '',
        competitors: '',
        description: '',
        website: '',
        socialMediaSizes: '',
        logoStyle: '',
        usageContext: [],
        usageOther: '',
        colors: [],
        colorOther: '',
        fontStyle: '',
        fontOther: '',
        lookAndFeel: '',
        additionalNotes: '',
        sendCopy: false
    });

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

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const toggleArrayField = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].includes(value)
                ? prev[field].filter(item => item !== value)
                : [...prev[field], value]
        }));
    };

    const sendLogoEmailNotification = async (payload) => {
        try {
            const response = await fetch("/api/logo-brief", {
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

        // Basic validation
        if (!formData.email || !formData.exactName || !formData.companyName || !formData.industry) {
            alert("Please fill in all required fields.");
            return;
        }

        setIsSubmitting(true);

        try {
            const emailResult = await sendLogoEmailNotification(formData);

            if (emailResult?.success) {
                setShowSuccess(true);
                // Reset form
                setFormData({
                    email: '',
                    exactName: '',
                    slogan: '',
                    companyName: '',
                    industry: '',
                    likesLinks: '',
                    dislikesLinks: '',
                    competitors: '',
                    description: '',
                    website: '',
                    socialMediaSizes: '',
                    logoStyle: '',
                    usageContext: [],
                    usageOther: '',
                    colors: [],
                    colorOther: '',
                    fontStyle: '',
                    fontOther: '',
                    lookAndFeel: '',
                    additionalNotes: '',
                    sendCopy: false
                });
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

    const logoStyles = [
        { value: 'just-fonts', label: 'Just Fonts', img: '/brand-img/logo-style-1.png' },
        { value: 'font-meaning', label: 'Font & Meaning', img: '/brand-img/logo-style-2.png' },
        { value: 'handmade', label: 'Handmade', img: '/brand-img/logo-style-3.png' },
        { value: 'font-in-shape', label: 'Font in Shape', img: '/brand-img/logo-style-4.png' },
        { value: 'silhouette', label: 'Silhouette Symbol', img: '/brand-img/logo-style-5.png' },
        { value: 'geometric', label: 'Geometric Symbol', img: '/brand-img/logo-style-6.png' },
        { value: 'initials', label: 'Initials', img: '/brand-img/logo-style-7.png' },
        { value: 'abstract', label: 'Abstract Symbol', img: '/brand-img/logo-style-8.png' }
    ];

    const usageOptions = [
        { value: 'web', label: 'Web (Website, banner ads, email marketing)' },
        { value: 'print', label: 'Print (Business cards, letterhead, stationery)' },
        { value: 'clothing', label: 'Clothing (T-Shirts, hats, embroidery)' }
    ];

    const colorOptions = [
        { value: 'red', label: 'Red: Passion, Anger, Love, Confidence', color: '#EF4444' },
        { value: 'orange', label: 'Orange: Youthfulness, Cheer, Warmth', color: '#F97316' },
        { value: 'yellow', label: 'Yellow: Sunshine, Happiness, Energy', color: '#EAB308' },
        { value: 'green', label: 'Green: Nature, Balance, Cleanliness', color: '#22C55E' },
        { value: 'blue', label: 'Blue: Water, Tranquillity, Trust, Power', color: '#3B82F6' },
        { value: 'purple', label: 'Purple: Technology, Deep, Powerful', color: '#A855F7' },
        { value: 'white', label: 'White: Peace, Balance, Purity, Simplicity', color: '#FFFFFF' },
        { value: 'grey', label: 'Grey: Neutral, Sophistication, Wisdom', color: '#6B7280' },
        { value: 'black', label: 'Black: Modern, Power, Mystery', color: '#000000' },
        { value: 'brown', label: 'Brown: Earth, Stability, Tradition, Nature', color: '#92400E' },
        { value: 'pink', label: 'Pink: Love, Romance, Feminine', color: '#EC4899' },
        { value: 'turquoise', label: 'Turquoise: Compassion, Healing', color: '#14B8A6' }
    ];

    const fontStyles = [
        { value: 'serif', label: 'Serif', example: 'Elegant & Traditional', img: '/brand-img/font-1.png' },
        { value: 'brush', label: 'Brush', example: 'Artistic & Flowing', img: '/brand-img/font-2.png' },
        { value: 'decorative', label: 'Decorative', example: 'Ornate & Unique', img: '/brand-img/font-3.png' },
        { value: 'grunge', label: 'Grunge', example: 'Rough & Edgy', img: '/brand-img/font-1.png' },
        { value: 'handwritten', label: 'Hand Written', example: 'Personal & Casual', img: '/brand-img/font-4.png' },
        { value: 'medieval', label: 'Medieval', example: 'Gothic & Historic', img: '/brand-img/font-5.png' },
        { value: 'retro', label: 'Retro', example: 'Vintage & Nostalgic', img: '/brand-img/font-6.png' },
        { value: 'sans-serif', label: 'Sans Serif', example: 'Clean & Modern', img: '/brand-img/font-7.png' },
        { value: 'script', label: 'Script', example: 'Cursive & Elegant', img: '/brand-img/font-8.png' },
        { value: 'techno', label: 'Techno', example: 'Futuristic & Digital', img: '/brand-img/font-9.png' },
        { value: 'typed', label: 'Typed', example: 'Typewriter Style', img: '/brand-img/font-10.png' },
        { value: 'western', label: 'Western', example: 'Rustic & Bold', img: '/brand-img/font-11.png' }
    ];

    const lookAndFeelOptions = [
        { value: 'royal', label: 'Royal/Sophisticated', emoji: '/brand-img/look-logo-1.png' },
        { value: 'minimal', label: 'Minimal', emoji: '/brand-img/look-logo-2.png' },
        { value: 'fun', label: 'Fun', emoji: '/brand-img/look-logo-3.png' },
        { value: 'corporate', label: 'Corporate', emoji: '/brand-img/look-logo-4.png' },
        { value: 'artistic', label: 'Artistic', emoji: '/brand-img/look-logo-5.png' },
        { value: 'web2', label: 'Web 2.0', emoji: '/brand-img/look-logo-6.png' },
        { value: 'feminine', label: 'Feminine', emoji: '/brand-img/look-logo-7.png' },
        { value: 'masculine', label: 'Masculine', emoji: '/brand-img/look-logo-8.png' }
    ];

    return (
        <>
            <Head>
                <title>Logo Design Brief | Pine Book Writing</title>
                <meta name="robots" content="noindex" />
                <meta
                    name="description"
                    content="Submit your logo design brief to Pine Book Writing. Let us create the perfect logo for your brand."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
                <meta name="robots" content="noindex, nofollow" />
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
                photo_banner={"brand-img/Logo-brief-banner.webp"}
                title="Create Your Perfect Logo"
                desc="Share your vision and let us design a logo that captures the essence of your brand and resonates with your audience."
            />


            <div className="w-full lg:max-w-4xl mx-auto p-4 lg:p-14">
                <div className="w-full lg:max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border-t-4 border-blue-600">
                        <h1 className="text-4xl font-bold text-gray-900 mb-3">LOGO DESIGN BRIEF</h1>
                        <p className="text-gray-600 text-lg mb-4">
                            Please fill out this form and provide us with all the necessary details for your logo design.
                        </p>
                        <p className="text-sm text-gray-500">
                            <span className="text-red-500">*</span> Indicates required question
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <label className="block text-base font-medium text-gray-900 mb-3">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Your email"
                                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none  bg-transparent"
                            />
                        </div>

                        {/* Exact Name */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <label className="block text-base font-medium text-gray-900 mb-3">
                                Exact name that want in your logo: <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="exactName"
                                required
                                value={formData.exactName}
                                onChange={handleInputChange}
                                placeholder="Your answer"
                                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none  bg-transparent"
                            />
                        </div>

                        {/* Slogan */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <label className="block text-base font-medium text-gray-900 mb-2">
                                Slogan or tagline in your logo:
                            </label>
                            <p className="text-sm text-gray-600 mb-3">(Optional)</p>
                            <input
                                type="text"
                                name="slogan"
                                value={formData.slogan}
                                onChange={handleInputChange}
                                placeholder="Your answer"
                                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none  bg-transparent"
                            />
                        </div>

                        {/* Company/Book Name */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <label className="block text-base font-medium text-gray-900 mb-3">
                                Company/book name: <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                required
                                value={formData.companyName}
                                onChange={handleInputChange}
                                placeholder="Your answer"
                                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none  bg-transparent"
                            />
                        </div>

                        {/* Business Industry */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <label className="block text-base font-medium text-gray-900 mb-3">
                                Business industry/book genre: <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="industry"
                                required
                                value={formData.industry}
                                onChange={handleInputChange}
                                placeholder="Your answer"
                                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none  bg-transparent"
                            />
                        </div>

                        {/* Logos You Like */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <label className="block text-base font-medium text-gray-900 mb-2">
                                Any logos you like: <span className="text-red-500">*</span>
                            </label>
                            <p className="text-sm text-gray-600 mb-3">Please provide the links of all the logos you like.</p>
                            <textarea
                                name="likesLinks"
                                required
                                value={formData.likesLinks}
                                onChange={handleInputChange}
                                placeholder="Your answer"
                                rows="3"
                                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none  bg-transparent"
                            />
                        </div>

                        {/* Logos You Don't Like */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <label className="block text-base font-medium text-gray-900 mb-2">
                                Any logos you don't like: <span className="text-red-500">*</span>
                            </label>
                            <p className="text-sm text-gray-600 mb-3">Please provide the links of all the logos you don't like.</p>
                            <textarea
                                name="dislikesLinks"
                                required
                                value={formData.dislikesLinks}
                                onChange={handleInputChange}
                                placeholder="Your answer"
                                rows="3"
                                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none  bg-transparent"
                            />
                        </div>

                        {/* Competitors */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <label className="block text-base font-medium text-gray-900 mb-3">
                                Possible competitors of your business/book.
                            </label>
                            <textarea
                                name="competitors"
                                value={formData.competitors}
                                onChange={handleInputChange}
                                placeholder="Your answer"
                                rows="3"
                                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none  bg-transparent"
                            />
                        </div>

                        {/* Business Description */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <label className="block text-base font-medium text-gray-900 mb-2">
                                Tell us about your business/book? <span className="text-red-500">*</span>
                            </label>
                            <p className="text-sm text-gray-600 mb-3">Please provide a short description about your company/book.</p>
                            <textarea
                                name="description"
                                required
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="Your answer"
                                rows="4"
                                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none  bg-transparent"
                            />
                        </div>

                        {/* Website */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <label className="block text-base font-medium text-gray-900 mb-2">
                                Do you have an existing website?
                            </label>
                            <p className="text-sm text-gray-600 mb-3">If yes, please provide us with the website link (URL).</p>
                            <input
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange}
                                placeholder="Your answer"
                                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none  bg-transparent"
                            />
                        </div>

                        {/* Social Media Sizes */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <label className="block text-base font-medium text-gray-900 mb-4">
                                Do you need your logo in different sizes for social media?
                            </label>
                            <div className="space-y-3">
                                {['Yes', 'No', 'Maybe', "I don't know"].map((option) => (
                                    <label key={option} className="flex items-center cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="socialMediaSizes"
                                            value={option}
                                            checked={formData.socialMediaSizes === option}
                                            onChange={handleInputChange}
                                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <span className="ml-3 text-gray-700 group-hover:text-gray-900">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Logo Style */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <label className="block text-base font-medium text-gray-900 mb-2">
                                Which logo style do you want? <span className="text-red-500">*</span>
                            </label>
                            <p className="text-sm text-gray-600 mb-4">Please select 1 style from the list.</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {logoStyles.map((style) => (
                                    <button
                                        key={style.value}
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, logoStyle: style.value }))}
                                        className={`p-4 rounded-lg border-2 -all ${formData.logoStyle === style.value
                                            ? 'border-blue-600 bg-blue-50 shadow-md'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <div className="w-full h-32 mb-3 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={style.img}
                                                alt={style.label}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <p className="text-sm font-medium text-gray-900 text-center">{style.label}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Usage Context */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <label className="block text-base font-medium text-gray-900 mb-4">
                                Where are you planning to use your logo?
                            </label>
                            <div className="space-y-3">
                                {usageOptions.map((option) => (
                                    <label key={option.value} className="flex items-start cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            checked={formData.usageContext.includes(option.value)}
                                            onChange={() => toggleArrayField('usageContext', option.value)}
                                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                                        />
                                        <span className="ml-3 text-gray-700 group-hover:text-gray-900">{option.label}</span>
                                    </label>
                                ))}
                                <div className="flex items-start">
                                    <input
                                        type="text"
                                        name="usageOther"
                                        value={formData.usageOther}
                                        onChange={handleInputChange}
                                        placeholder="Other:"
                                        className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none  bg-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Colors */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <label className="block text-base font-medium text-gray-900 mb-2">
                                Are there any specific colors you'd like us to use in your logo design? <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-4 space-y-2">
                                {colorOptions.map((color) => (
                                    <label key={color.value} className="flex items-center cursor-pointer group py-2">
                                        <input
                                            type="checkbox"
                                            checked={formData.colors.includes(color.value)}
                                            onChange={() => toggleArrayField('colors', color.value)}
                                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <div
                                            className="w-8 h-8 rounded ml-3 border border-gray-300"
                                            style={{ backgroundColor: color.color }}
                                        />
                                        <span className="ml-3 text-gray-700 group-hover:text-gray-900 text-sm">{color.label}</span>
                                    </label>
                                ))}
                                <div className="flex items-center mt-3">
                                    <input
                                        type="text"
                                        name="colorOther"
                                        value={formData.colorOther}
                                        onChange={handleInputChange}
                                        placeholder="Other:"
                                        className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none  bg-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Font Style */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <label className="block text-base font-medium text-gray-900 mb-2">
                                Which font style do you want? <span className="text-red-500">*</span>
                            </label>
                            <p className="text-sm text-gray-600 mb-4">
                                Fonts shown below are for generalized style preview only; these are not the only fonts that will be used.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {fontStyles.map((font) => (
                                    <button
                                        key={font.value}
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, fontStyle: font.value }))}
                                        className={`p-4 rounded-lg border-2 -all text-left ${formData.fontStyle === font.value
                                            ? 'border-blue-600 bg-blue-50 shadow-md'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <div className="w-full h-32 mb-3 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={font.img}
                                                alt={font.label}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        {/* <p className="font-bold text-gray-900 mb-1 text-center">{font.label}</p> */}
                                    </button>
                                ))}
                                <div className="col-span-2 md:col-span-3">
                                    <input
                                        type="text"
                                        name="fontOther"
                                        value={formData.fontOther}
                                        onChange={handleInputChange}
                                        placeholder="Other:"
                                        className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none  bg-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Look and Feel */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <label className="block text-base font-medium text-gray-900 mb-2">
                                Look and Feel of your logo. <span className="text-red-500">*</span>
                            </label>
                            <p className="text-sm text-gray-600 mb-4">Please select the look and feel of your logo.</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {lookAndFeelOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, lookAndFeel: option.value }))}
                                        className={`p-4 rounded-lg border-2 -all ${formData.lookAndFeel === option.value
                                            ? 'border-blue-600 bg-blue-50 shadow-md'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <div className="w-full h-32 mb-3 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={option.emoji}
                                                alt={option.label}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Additional Notes */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <label className="block text-base font-medium text-gray-900 mb-3">
                                Is there anything else you would like to add?
                            </label>
                            <textarea
                                name="additionalNotes"
                                value={formData.additionalNotes}
                                onChange={handleInputChange}
                                placeholder="Your answer"
                                rows="4"
                                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none  bg-transparent"
                            />
                        </div>

                        {/* Submit Buttons */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex items-center justify-center gap-2 p-4 py-3 text-white uppercase header-submit-btn rounded-xl shadow-xl text-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2" size={20} />
                                            Submit
                                        </>
                                    )}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (confirm('Are you sure you want to clear the form?')) {
                                            setFormData({
                                                email: '',
                                                exactName: '',
                                                slogan: '',
                                                companyName: '',
                                                industry: '',
                                                likesLinks: '',
                                                dislikesLinks: '',
                                                competitors: '',
                                                description: '',
                                                website: '',
                                                socialMediaSizes: '',
                                                logoStyle: '',
                                                usageContext: [],
                                                usageOther: '',
                                                colors: [],
                                                colorOther: '',
                                                fontStyle: '',
                                                fontOther: '',
                                                lookAndFeel: '',
                                                additionalNotes: '',
                                                sendCopy: false
                                            });
                                        }
                                    }}
                                    className="sm:w-auto bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 -all"
                                >
                                    Clear form
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
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
                                Your logo design brief has been submitted successfully.
                                Our team is reviewing your details and will reach out shortly to discuss your logo design.
                            </p>

                            <button
                                onClick={() => setShowSuccess(false)}
                                className="bg-[#0d0f38] text-white px-6 py-2 rounded-lg text-base font-semibold hover:opacity-90 "
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
