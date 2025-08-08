import React, { useEffect , useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Popup from "./popup";


export default function Header() {
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = "https://static.zdassets.com/ekr/snippet.js?key=6ad75b0f-d085-4cae-9a7a-48abeb69b973";
    //     script.async = true;
    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);

    // const handleOpenChat = () => {
    //     window.zE && window.zE('webWidget', 'open');
    // };
        const [isModalOpen, setModalOpen] = useState(false);
        const [selectedService, setSelectedService] = useState('');
    
    
        const openModal = (service) => {
            setSelectedService(service);
            setModalOpen(true);
        };
    
        const closeModal = () => {
            setModalOpen(false);
        };
    return (
        <header className="container mx-auto py-2 width-container z-20">
                        <Popup isOpen={isModalOpen} onClose={closeModal} service={selectedService} />
            <div className="flex items-center justify-between px-2 flex-wrap md:justify-strat">
                <div className="head-logo">
                    <Link className="text-center" href="/book-publishing">
                        <Image alt="LOGO" src={'/images/writing-logo.png'} width={200} height={80} loading="lazy" />
                    </Link>
                </div>

                <div className="flex items-center justify-end md:flex-row gap-3 flex-col-reverse">
                    <button className=" btn-a items-center bg-gray-800 md:py-2 py-4 md:mr-2 mr-0 px-3 focus:outline-none hover:bg-gray-700">
                        <Link className="" href={'tel:(866)-841-7463'}>(866)-841-7463</Link>
                    </button>

                    <button className=" hidden btn-a items-center bg-gray-800 md:mr-2 mr-0 md:py-2 py-4 px-3 focus:outline-none hover:bg-gray-700 md:block">
                        <Link className="" href={'mailto:support@pinebookwriting.com'}>support@pinebookwriting.com</Link>
                    </button>


                       <button className="btn-a items-center bg-gray-800 md:py-2 py-4 px-3 focus:outline-none hover:bg-gray-700" onClick={() => openModal('Basic')}>
                                        Talk to an Expert
                                    </button>
                </div>
            </div>
        </header>
    );
}