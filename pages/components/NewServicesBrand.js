import React from 'react'
import Image from 'next/image'

const NewServicesBrand = () => {
  return (
    <div>
      <section className='max-w-screen-xl mx-auto text-center brand-choose-us-section md:p-20 p-10'>
        <div className='flex flex-col'>
        <div className='new-ser-text flex flex-col md:px-9'>
            <h4 className='font-bold md:text-2xl leading-loose md:pb-6 text-white'>Need Extra Support to Achieve Your Writing to Publishing Goals?</h4>
            <h2 className='font-bold md:text-4xl text-2xl py-6 uppercase font-poppins leading-relaxed text-white'>Our Additional Services - Beyond Professional
            Writing</h2>
            <p className='font-medium text-xl  font-poppins leading-relaxed text-white py-4 md:py-0'>Stuck on what to do after writing your story? We're here to help! We offer a range of
additional services to help our clients/authors get their inspiring stories published
and noticed by a global audience.</p>
        </div>

        <div className='new-ser-img-wrap flex justify-center items-center basis-2 md:gap-44 md:flex-row flex-col md:pt-16'>
           
            <div className='new-ser-img text-center pb-4'>
                <Image className='inline pb-4 invert' src={"/brand-img/service-editing.webp"} height={45} width={45}></Image>
                <h3 className='font-semibold text-3xl uppercase font-poppins leading-loose text-white'>Editing</h3>
                <p className='text-lg  font-poppins leading-relaxed text-white'>We offer our all-inclusive editing services ranging from content editing and 
                proofreading to structural editing to make your write-up worth reading.</p>
            </div>

            
            <div className='new-ser-img text-center pb-4'>
                <Image className='inline md:pb-4 invert' src={"/brand-img/service-formating.webp"} height={45} width={45}></Image>
                <h3 className='font-semibold text-3xl uppercase font-poppins leading-loose text-white'>Formatting</h3>
                <p className='text-lg  font-poppins leading-relaxed text-white'>We offer impeccable book formatting services according to industry standards. We 
handle everything from typesetting to cover design to ensure your book is ready to 
publish.</p>
            </div>
        </div>

        <div className='new-ser-img-wrap flex justify-center  items-center md:gap-44 md:flex-row flex-col md:pt-16'>
           
            <div className='new-ser-img text-center pb-4'>
                <Image className='inline md:pb-4 invert' src={"/brand-img/service-publishing.webp"} height={45} width={45}></Image>
                <h3 className='font-semibold text-3xl uppercase font-poppins leading-loose text-white'>Publishing</h3>
                <p className='text-lg  font-poppins leading-relaxed text-white'>To help you achieve your publishing goals, we offer comprehensive book publishing 
                services for different formats and numerous popular publishing platforms.</p>
            </div>

            
            <div className='new-ser-img text-center pb-4'>
                <Image className='inline md:pb-4 invert' src={"/brand-img/isbn.png"} height={55} width={60}></Image>
                <h3 className='font-semibold text-3xl uppercase font-poppins leading-loose text-white'>ISBN + Barcode</h3>
                <p className='text-lg  font-poppins leading-relaxed text-white'>An ISBN is a unique identifier of your book. We help register your book’s ISBN along 
                with high-quality barcode generation to make sure your book is ready for sale.</p>
            </div>
        </div>

            <div className='pub-btn mt-14'>
            <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 brand-nav-btn font-poppins text-sm inline-block" target="_blank" href="https://pinebookpublishing.com/packages">Learn More</a>
            </div>
        </div>
      </section>
    </div>
  )
}

export default NewServicesBrand
