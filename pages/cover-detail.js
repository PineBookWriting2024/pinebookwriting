import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

import Image from "next/image";


export default function Bookcover() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [selectedBookSize, setSelectedBookSize] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const formData = new FormData(form);
      const coverImages = formData.getAll('coverImages') || [];
      const authorPhoto = formData.get('authorPhoto');
      const fileToBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const result = String(reader.result || "");
            const base64 = result.includes(",") ? result.split(",")[1] : "";
            resolve({
              filename: file.name,
              contentType: file.type || "application/octet-stream",
              contentBase64: base64,
            });
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

      const encodedCoverImages = await Promise.all(
        coverImages
          .filter((f) => f && typeof f === 'object' && f.name)
          .map((f) => fileToBase64(f))
      );

      const encodedAuthorPhoto =
        authorPhoto && typeof authorPhoto === 'object' && authorPhoto.name
          ? await fileToBase64(authorPhoto)
          : null;

      const payload = {
        authorName: formData.get('authorName'),
        contactEmail: formData.get('contactEmail'),
        bookName: formData.get('bookName'),
        bookDescription: formData.get('bookDescription'),
        aboutAuthor: formData.get('aboutAuthor'),
        isbn: formData.get('isbn'),
        genre: formData.get('genre'),
        bookSize: formData.get('bookSize'),
        customBookSize: formData.get('customBookSize'),
        coverFinish: formData.get('coverFinish'),
        coverIdea: formData.get('coverIdea'),
        colorScheme: formData.get('colorScheme'),
        coverStyle: formData.get('coverStyle'),
        coverImages: encodedCoverImages,
        authorPhoto: encodedAuthorPhoto,
        referringPage: document.referrer || '',
        currentPage: window.location.href,
      };

      const response = await fetch('/api/cover-detail-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.message || 'Failed to send email');

      setSubmitMessage('');
      setShowSuccessModal(true);
      form.reset();
      setSelectedBookSize('');
    } catch (error) {
      setSubmitMessage(error.message || 'Something went wrong while submitting.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Book Cover Design | Pine Book Writing</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Submit your book cover design brief to Pine Book Writing. Let us create the perfect cover for your book."
        />
        <link rel="shortcut icon" href="/images/fav.webp" />
      </Head>

      <header id="navbar" className="absolute left-0 z-10 flex items-center justify-between w-full p-4 bg-transparent top-10">
        {/* <div className='flex items-center justify-between w-full max-w-screen-xl mx-auto'>
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              <Image 
                className='logo' 
                src={'https://www.pinebookwriting.com/brand-img/Logo-brief-banner.webp'} 
                width={200} 
                height={80} 
                alt="brand logo" 
                priority // Better for logos/headers than loading="lazy"
              />
            </Link>
          </div>
        </div> */}
      </header>

      <main>
        <section className="relative h-[400px] flex items-center justify-center text-center text-white overflow-hidden">


          <div className="absolute inset-0">
            <img
              src="/brand-img/Logo-brief-banner.webp"
              alt="banner"
              className="object-cover w-full h-full"
            />
          </div>


          <div className="absolute inset-0 bg-black/50"></div>


          <div className="relative z-10 max-w-2xl px-4">
            <h1 className="mb-3 text-3xl font-bold">
              Create Your Perfect Brand Cover
            </h1>
            <p className="text-lg">
              Share your vision and let us design a Book cover that captures the essence of your brand and resonates with your audience.
            </p>
          </div>

        </section>

        <form className="min-h-screen px-4 py-10 font-sans bg-white" onSubmit={handleSubmit}>
          <div className="max-w-3xl mx-auto space-y-4">


            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="h-1 bg-[#4285f4] w-full rounded" />
              <div className="p-6 sm:p-8">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 uppercase font-poppins">
                  BOOK COVER DETAILS
                </h1>
                <p className="mb-6 text-sm text-gray-700">
                  Please fill out this form and provide us with all the necessary details for your logo design.
                </p>
                <p className="text-xs font-medium text-red-600">
                  * Indicates required question
                </p>
              </div>
            </div>


            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <label className="block mb-6 text-base font-normal text-gray-900">
                Official Pen/Author Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Auther Name"
                name="authorName"
                className="w-full py-2 text-sm transition-colors duration-200 border-b border-gray-300 focus:border-blue-600 focus:outline-none"
                required
              />
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <label className="block mb-6 text-base font-normal text-gray-900">
                Contact Email<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                name="contactEmail"
                className="w-full py-2 text-sm transition-colors duration-200 border-b border-gray-300 focus:border-blue-600 focus:outline-none"
                required
              />
            </div>


            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <label className="block mb-6 text-base font-normal text-gray-900">
                Official Book Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="bookName"
                placeholder="Your answer"
                className="w-full py-2 text-sm transition-colors duration-200 border-b border-gray-300 focus:border-blue-600 focus:outline-none"
                required
              />
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <label className="block mb-6 text-base font-normal text-gray-900">
                Book Description<span className="text-red-600">*</span>
              </label>
              <textarea
                placeholder="Add the book description"
                name="bookDescription"
                className="w-full py-2 text-sm transition-colors duration-200 border-b border-gray-300 focus:border-blue-600 focus:outline-none"
                rows="4"
                required
              />
            </div>


            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <label className="block mb-1 text-base font-normal text-gray-900">
                About the Author
              </label>
              <p className="mb-6 text-sm text-gray-500">(Optional)</p>
              <textarea
                name="aboutAuthor"
                placeholder="Your answer"
                className="w-full py-2 text-sm transition-colors duration-200 border-b border-gray-300 focus:border-blue-600 focus:outline-none"
                rows="4"
              />
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <label className="block mb-1 text-base font-normal text-gray-900">
                ISBN
              </label>
              <p className="mb-6 text-sm text-gray-500">(Optional)</p>
              <textarea
                name="isbn"
                placeholder="Your answer"
                className="w-full py-2 text-sm transition-colors duration-200 border-b border-gray-300 focus:border-blue-600 focus:outline-none"
                rows="4"
              />
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <label className="block mb-6 text-base font-normal text-gray-900">
                Genre<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="genre"
                placeholder="Your answer"
                className="w-full py-2 text-sm transition-colors duration-200 border-b border-gray-300 focus:border-blue-600 focus:outline-none"
                required
              />
            </div>
            <div className="max-w-3xl p-6 mx-auto mt-4 font-sans bg-white border border-gray-200 rounded-lg shadow-sm">

              <label className="block mb-4 text-base font-normal text-gray-900">
                Book Dimensions: <span className="text-red-600">*</span>
              </label>


              <div className="flex flex-row items-center gap-6 pb-2 overflow-x-auto">

                <div className="flex flex-wrap justify-center gap-6">


                  <label className="flex flex-col items-center space-y-3 cursor-pointer group">
                    <div className="flex items-center justify-center w-32 h-32 text-lg font-semibold transition-colors border border-black rounded-lg group-hover:border-blue-500 group-hover:shadow-md">
                      6x9
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="bookSize"
                        value="6x9"
                        onChange={(e) => setSelectedBookSize(e.target.value)}
                        className="w-5 h-5 accent-blue-600"
                        required
                      />
                    </div>
                  </label>


                  <label className="flex flex-col items-center space-y-3 cursor-pointer group">
                    <div className="flex items-center justify-center w-32 h-32 text-lg font-semibold transition-colors border border-black rounded-lg group-hover:border-blue-500 group-hover:shadow-md">
                      5.5x8.5
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="bookSize"
                        value="5.5x8.5"
                        onChange={(e) => setSelectedBookSize(e.target.value)}
                        className="w-5 h-5 accent-blue-600"
                      />
                    </div>
                  </label>


                  <label className="flex flex-col items-center space-y-3 cursor-pointer group">
                    <div className="flex items-center justify-center w-32 h-32 text-lg font-semibold transition-colors border border-black rounded-lg group-hover:border-blue-500 group-hover:shadow-md">
                      8.5x11
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="bookSize"
                        value="8.5x11"
                        onChange={(e) => setSelectedBookSize(e.target.value)}
                        className="w-5 h-5 accent-blue-600"
                      />
                    </div>
                  </label>

                  <label className="flex flex-col items-center space-y-3 cursor-pointer group">
                    <div className="flex items-center justify-center w-32 h-32 px-2 text-center text-lg font-semibold transition-colors border border-black rounded-lg group-hover:border-blue-500 group-hover:shadow-md">
                      Custom Size
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="bookSize"
                        value="custom"
                        onChange={(e) => setSelectedBookSize(e.target.value)}
                        className="w-5 h-5 accent-blue-600"
                      />
                    </div>
                  </label>

                </div>

              </div>

              {selectedBookSize === 'custom' ? (
                <div className="mt-4">
                  <input
                    type="text"
                    name="customBookSize"
                    placeholder="Enter custom size (e.g. 7 x 10 inches)"
                    className="w-full py-2 text-sm transition-colors duration-200 border-b border-gray-300 focus:border-blue-600 focus:outline-none"
                    required
                  />
                </div>
              ) : null}


            </div>



            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">

              <label className="block mb-6 text-base font-normal text-gray-900">
                Cover Finish:
                <span className="text-red-600">*</span>
              </label>

              <div className="space-y-4">

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="coverFinish"
                    value="matte"
                    className="w-5 h-5 accent-blue-600"
                    required
                  />
                  <span className="text-base font-medium text-gray-800">Matte Finish</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="coverFinish"
                    value="glossy"
                    className="w-5 h-5 accent-blue-600"
                  />
                  <span className="text-base font-medium text-gray-800">Glossy Finish</span>
                </label>

              </div>
            </div>

          </div>
          <h1 className="max-w-3xl px-6 py-4 mx-auto mt-8 text-2xl font-bold text-center text-gray-900 uppercase font-poppins bg-none">

            Design Questions
          </h1>

          <h4 className="max-w-3xl px-6 py-4 mx-auto text-2xl text-center text-gray-900 uppercase font-poppins bg-none">

            Please answer these questions for better design understanding:
          </h4>

          <div className="max-w-3xl p-6 mx-auto mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">


            <label className="block mb-2 text-base font-normal text-gray-900">
              1. Your Cover Ideas
              <span className="text-red-600">*</span>
            </label>

            <p className="mb-6 text-sm text-gray-500">
              Select a cover style that best matches your vision for the book. You can also share reference images if needed.
            </p>


            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">


              <label className="cursor-pointer group">
                <input type="radio" name="coverIdea" value="cover1" className="sr-only peer" required />

                <div className="flex items-center justify-center w-full text-lg font-semibold transition-colors border border-gray-300 rounded-lg h-60 group-hover:border-blue-500 peer-checked:border-blue-600 peer-checked:shadow-md">
                  <img
                    src="/brand-img/cover-detail/1.png"
                    className="w-full h-60 rounded-lg object-contain bg-gray-50"
                    alt=""
                  />

                </div>
              </label>

              <label className="cursor-pointer group">
                <input type="radio" name="coverIdea" value="cover2" className="sr-only peer" required />

                <div className="flex items-center justify-center w-full text-lg font-semibold transition-colors border border-gray-300 rounded-lg h-60 group-hover:border-blue-500 peer-checked:border-blue-600 peer-checked:shadow-md">
                  <img
                    src="/brand-img/cover-detail/2.jpg"
                    className="w-full h-60 rounded-lg object-contain bg-gray-50"
                    alt=""
                  />

                </div>
              </label>
              <label className="cursor-pointer group">
                <input type="radio" name="coverIdea" value="cover3" className="sr-only peer" required />

                <div className="flex items-center justify-center w-full text-lg font-semibold transition-colors border border-gray-300 rounded-lg h-60 group-hover:border-blue-500 peer-checked:border-blue-600 peer-checked:shadow-md">
                  <img
                    src="/brand-img/cover-detail/3.png"
                    className="w-full h-60 rounded-lg object-contain bg-gray-50"
                    alt=""
                  />

                </div>
              </label>
              <label className="cursor-pointer group">
                <input type="radio" name="coverIdea" value="cover4" className="sr-only peer" required />

                <div className="flex items-center justify-center w-full text-lg font-semibold transition-colors border border-gray-300 rounded-lg h-60 group-hover:border-blue-500 peer-checked:border-blue-600 peer-checked:shadow-md">
                  <img
                    src="/brand-img/cover-detail/4.jpg"
                    className="w-full h-60 rounded-lg object-contain bg-gray-50"
                    alt=""
                  />

                </div>
              </label>
              <label className="cursor-pointer group">
                <input type="radio" name="coverIdea" value="cover5" className="sr-only peer" required />

                <div className="flex items-center justify-center w-full text-lg font-semibold transition-colors border border-gray-300 rounded-lg h-60 group-hover:border-blue-500 peer-checked:border-blue-600 peer-checked:shadow-md">
                  <img
                    src="/brand-img/cover-detail/5.jpg"
                    className="w-full h-60 rounded-lg object-contain bg-gray-50"
                    alt=""
                  />

                </div>
              </label>

              <label className="cursor-pointer group">
                <input type="radio" name="coverIdea" value="cover6" className="sr-only peer" required />

                <div className="flex items-center justify-center w-full text-lg font-semibold transition-colors border border-gray-300 rounded-lg h-60 group-hover:border-blue-500 peer-checked:border-blue-600 peer-checked:shadow-md">
                  <img
                    src="/brand-img/cover-detail/6.png"
                    className="w-full h-60 rounded-lg object-contain bg-gray-50"
                    alt=""
                  />

                </div>
              </label>

              <label className="cursor-pointer group">
                <input type="radio" name="coverIdea" value="cover7" className="sr-only peer" required />

                <div className="flex items-center justify-center w-full text-lg font-semibold transition-colors border border-gray-300 rounded-lg h-60 group-hover:border-blue-500 peer-checked:border-blue-600 peer-checked:shadow-md">
                  <img
                    src="/brand-img/cover-detail/7.png"
                    className="w-full h-60 rounded-lg object-contain bg-gray-50"
                    alt=""
                  />

                </div>
              </label>

              <label className="cursor-pointer group">
                <input type="radio" name="coverIdea" value="cover8" className="sr-only peer" required />

                <div className="flex items-center justify-center w-full text-lg font-semibold transition-colors border border-gray-300 rounded-lg h-60 group-hover:border-blue-500 peer-checked:border-blue-600 peer-checked:shadow-md">
                  <img
                    src="/brand-img/cover-detail/8.png"
                    className="w-full h-60 rounded-lg object-contain bg-gray-50"
                    alt=""
                  />

                </div>
              </label>

              <label className="cursor-pointer group">
                <input type="radio" name="coverIdea" value="cover9" className="sr-only peer" required />

                <div className="flex items-center justify-center w-full text-lg font-semibold transition-colors border border-gray-300 rounded-lg h-60 group-hover:border-blue-500 peer-checked:border-blue-600 peer-checked:shadow-md">
                  <img
                    src="/brand-img/cover-detail/9.png"
                    className="w-full h-60 rounded-lg object-contain bg-gray-50"
                    alt=""
                  />

                </div>
              </label>

              <label className="cursor-pointer group">
                <input type="radio" name="coverIdea" value="cover10" className="sr-only peer" required />

                <div className="flex items-center justify-center w-full text-lg font-semibold transition-colors border border-gray-300 rounded-lg h-60 group-hover:border-blue-500 peer-checked:border-blue-600 peer-checked:shadow-md">
                  <img
                    src="/brand-img/cover-detail/10.png"
                    className="w-full h-60 rounded-lg object-contain bg-gray-50"
                    alt=""
                  />

                </div>
              </label>

            </div>
          </div>

          <div className="max-w-3xl p-6 mx-auto mt-6 font-sans bg-white border border-gray-200 rounded-lg shadow-sm">

            <label className="block mb-2 text-base font-semibold text-gray-900">
              2. Cover Images <span className="text-red-600">*</span>
            </label>

            <p className="mb-6 text-sm text-gray-500">
              Upload any existing artwork or photos that should be included in the design.
            </p>


            <div className="relative">
              <input
                type="file"
                accept="image/*"
                multiple
                name="coverImages"
                className='w-full text-sm text-gray-500 transition-colors duration-200 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700'
              />
            </div>


          </div>


          <div className="max-w-3xl p-8 mx-auto mt-6 font-sans bg-white border border-gray-200 shadow-sm rounded-2xl">


          <div className="mb-6">
            <label className="block text-base font-semibold tracking-tight text-gray-900">
              Do you have any additional comments or special instructions for your book cover design? <span className="text-red-600">*</span>
            </label>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Please share any specific details, preferences, or requirements you'd like our designers to know.
            </p>
          </div>


            <div className="relative mt-4">
              <textarea
                rows="3"
                name="colorScheme"
                placeholder="blue, white, black, etc."
                className='border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg'
                required
              ></textarea>


            </div>

          </div>

          <div className="max-w-3xl p-8 mx-auto mt-6 font-sans bg-white border border-gray-200 shadow-sm rounded-2xl">

            <div className="mb-6">
              <label className="block text-base font-semibold tracking-tight text-gray-900">
                What overall style you would want to have in the book cover? <span className="text-red-600">*</span>
              </label>
              <p className="mt-1 text-sm text-gray-500">
                Please select the visual direction for your artwork.
              </p>
            </div>

            <div className="space-y-4">

              {[
                { label: "Illustrated", desc: "Hand-crafted illustrations, sketches, or line art.", color: "bg-red-500" },
                { label: "Photographic Quality", desc: "Realistic, high-fidelity, or stock-photo based.", color: "bg-blue-500" },
                { label: "Artist Discretion", desc: "Let our experts choose the best style for your genre.", color: "bg-purple-500" }
              ].map((item) => (
                <label key={item.label} className="flex items-center space-x-4 cursor-pointer group">

                  <input
                    type="radio"
                    name="coverStyle"
                    value={item.label}
                    className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500 accent-blue-600"
                    required
                  />


                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-800">
                      <span className="font-bold">{item.label}:</span> {item.desc}
                    </span>
                  </div>
                </label>
              ))}

            </div>

            <p className="mt-6 text-[11px] italic text-gray-400">
              Select one option to proceed with your brief.
            </p>
          </div>

          <div className="max-w-3xl p-8 mx-auto mt-6 font-sans bg-white border border-gray-200 shadow-sm rounded-2xl">


            <div className="mb-4">
              <label className="block text-base font-semibold tracking-tight text-gray-900">
                Your Author Photo <span className="text-red-600">*</span>
              </label>
              <p className="mt-1 text-sm text-gray-500">
                Please attach a high-resolution photo for the back cover or "About the Author" section.
              </p>
            </div>


            <div className="relative">
              <input
                type="file"
                accept="image/*"
                name="authorPhoto"
                className='w-full text-sm text-gray-500 transition-colors duration-200 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700'
                required
              />
            </div>
          </div>

          <div className="max-w-3xl px-4 mx-auto mt-8 mb-10">
            <div className="flex items-center space-x-4">


              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-lg text-[#e8e9eb] font-medium bg-[#335c36] hover:bg-[#e2e8f0] transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>


              <button
                type="reset"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-lg text-[#2a3b52] font-medium bg-[#f0f3f7] hover:bg-[#e2e8f0] transition-colors"
              >
                Clear form
              </button>

            </div>
            {submitMessage ? (
              <p className="mt-4 text-sm text-gray-700">{submitMessage}</p>
            ) : null}
          </div>
        </form>

        {showSuccessModal ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900">Thank You!</h3>
              <p className="mt-2 text-sm text-gray-700">
                Your form has been submitted successfully. Our team will contact you soon.
              </p>
              <div className="mt-5 text-right">
                <button
                  type="button"
                  onClick={() => setShowSuccessModal(false)}
                  className="px-4 py-2 text-sm font-medium text-white bg-[#335c36] rounded-lg hover:opacity-90"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </main>


    </>


  );
}
