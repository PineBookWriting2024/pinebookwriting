import React from 'react'
import Image from 'next/image'

const BrandSister = () => {
  return (
    <div>
      <section className='text-center p-14 max-w-screen-xl mx-auto'>
        <div className='flex  items-center flex-col md:flex-row gap-20 '>
            <div className='sister-com-text md:basis-1/2 text-right'>
                <h2 className="text-2xl md:text-2xl mb-3 font-bold" >Pine Book Writing offers expert ghostwriting.</h2>
                <p>Pine Book Writing offers expert ghostwriting services to help new and seasoned authors tell their stories to their audiences worldwide. Our exceptional team of writers, editors, and designers brings years of experience in crafting engaging books that become the best-selling ones.</p>
            </div>

            <div className='sister-company-logo md:basis-1/2 justify-center items-center flex gap-x-28'>
                <a href='https://pinebookpublishing.com/'>
                    <Image src={"/brand-img/pub-logo.png"} height={200} width={150}></Image>
                </a>
                <a href='https://pinedigitalhub.com/'>
                <Image src={"/brand-img/hub-logo.png"} height={200} width={150}></Image>
                </a>
            </div>
        </div>
      </section>
    </div>
  )
}

export default BrandSister
