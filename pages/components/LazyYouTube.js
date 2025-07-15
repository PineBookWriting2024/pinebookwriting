import React, { useState } from 'react';



export default function LazyYouTube({ videoId }) {
    const [isPlayerActive, setIsPlayerActive] = useState(false);
    return (
        <>

            <section className='sec-test max-w-screen-xl'>
                <div className='testimonials-wrap grid grid-cols-1 gap-10'>

                    <div className="relative w-full aspect-video">
                        {isPlayerActive ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-lg"
                            />
                        ) : (
                            <div
                                className="w-full h-full bg-gray-300 flex items-center justify-center cursor-pointer"
                                onClick={() => setIsPlayerActive(true)}
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                    alt="Video Thumbnail"
                                    className="rounded-lg w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl">
                                    ▶
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

        </>
    )

}
