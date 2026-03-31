import Head from 'next/head';
import Link from 'next/link';

import Image from "next/image";


export default function Bookcover() {
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

  <div className="min-h-screen px-4 py-10 font-sans bg-white">
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
            placeholder="Your answer"
            className="w-full py-2 text-sm transition-colors duration-200 border-b border-gray-300 focus:border-blue-600 focus:outline-none"
            required
          />
        </div>

        
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <label className="block mb-1 text-base font-normal text-gray-900">
           About the Author
          </label>
          <p className="mb-6 text-sm text-gray-500">(Optional)</p>
          <textarea 
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
        className="w-5 h-5 accent-blue-600"
      />
    </div>
  </label>

</div>

  </div>
  
  
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
                src="/cover1.png"
                class=" rounded-lg h-60 object-cover w-full"
                alt=""
            />
            
        </div>
    </label>

    <label className="cursor-pointer group">
      <input type="radio" name="coverIdea" value="cover1" className="sr-only peer" required />

        <div className="flex items-center justify-center w-full text-lg font-semibold transition-colors border border-gray-300 rounded-lg h-60 group-hover:border-blue-500 peer-checked:border-blue-600 peer-checked:shadow-md">        
            <img
                src="/cover2.png"
                class=" rounded-lg h-60 object-cover w-full"
                alt=""
            />
            
        </div>
    </label>
    <label className="cursor-pointer group">
      <input type="radio" name="coverIdea" value="cover1" className="sr-only peer" required />

        <div className="flex items-center justify-center w-full text-lg font-semibold transition-colors border border-gray-300 rounded-lg h-60 group-hover:border-blue-500 peer-checked:border-blue-600 peer-checked:shadow-md">        
            <img
                src="/cover3.jpg"
                class=" rounded-lg h-60 object-cover w-full"
                alt=""
            />
            
        </div>
    </label>
    <label className="cursor-pointer group">
      <input type="radio" name="coverIdea" value="cover1" className="sr-only peer" required />

        <div className="flex items-center justify-center w-full text-lg font-semibold transition-colors border border-gray-300 rounded-lg h-60 group-hover:border-blue-500 peer-checked:border-blue-600 peer-checked:shadow-md">        
            <img
                src="/cover4.png"
                class=" rounded-lg h-60 object-cover w-full"
                alt=""
            />
            
        </div>
    </label>
    <label className="cursor-pointer group">
      <input type="radio" name="coverIdea" value="cover1" className="sr-only peer" required />

        <div className="flex items-center justify-center w-full text-lg font-semibold transition-colors border border-gray-300 rounded-lg h-60 group-hover:border-blue-500 peer-checked:border-blue-600 peer-checked:shadow-md">        
            <img
                src="/cover5.jpg"
                class=" rounded-lg h-60 object-cover w-full"
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
            className='w-full text-sm text-gray-500 transition-colors duration-200 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700'
    />
  </div>
  
 
</div>


<div className="max-w-3xl p-8 mx-auto mt-6 font-sans bg-white border border-gray-200 shadow-sm rounded-2xl">
  

  <div className="mb-6">
    <label className="block text-base font-semibold tracking-tight text-gray-900">
      1. Do you have a Color Scheme in mind? <span className="text-red-600">*</span>
    </label>
    <p className="mt-2 text-sm leading-relaxed text-gray-500">
      If yes, what major colors do you want us to use and what not? Please mention below:
    </p>
  </div>

 
  <div className="relative mt-4">
    <textarea
      rows="3"
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
      { label: "Drawn", desc: "Hand-crafted illustrations, sketches, or line art.", color: "bg-red-500" },
      { label: "Painted", desc: "Digital or oil-style brush strokes, rich textures.", color: "bg-orange-500" },
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
        
       
        <div className={`w-8 h-8 rounded-md shadow-sm transition-transform group-hover:scale-110 ${item.color}`}></div>
        
        
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
            className='w-full text-sm text-gray-500 transition-colors duration-200 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700'
            required
        />
    </div>
</div>

<div className="max-w-3xl px-4 mx-auto mt-8 mb-10">
  <div className="flex items-center space-x-4">
    
    
    <button 
      type="submit"
      className="px-6 py-3 rounded-lg text-[#e8e9eb] font-medium bg-[#335c36] hover:bg-[#e2e8f0] transition-colors"
    >
        Submit
    </button>

  
    <button 
      type="reset"
      className="px-6 py-3 rounded-lg text-[#2a3b52] font-medium bg-[#f0f3f7] hover:bg-[#e2e8f0] transition-colors"
    >
      Clear form
    </button>

  </div>
</div>
</main>


    </>

    
  );
}