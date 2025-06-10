import "../styles/globals.css";
import React, { useEffect ,useState} from 'react';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePopupNew from "./components/HomePopupNew";
import PopupBundle from "./components/PopupBundle";

import PopupModal from './components/PopupModal';
import { PopupProvider } from '../context/PopupContext';




// Font files can be colocated inside of `pages`
// const majallab = localFont({
//   src: './majallab-webfont.woff2',
//   variable: '--font-majallab',
// });

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600'],
});


export default function App({ Component, pageProps }) {

   const [isModalOpen, setModalOpen] = useState(true);
   const closeModal = () => {
    setModalOpen(false);
};
    const [selectedService, setSelectedService] = useState('');


    const openModal = (service) => {
        setSelectedService(service);
        setModalOpen(true);
    };
  
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-9X52J8V8NK');
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 0,
      delay: 0,
      duration: 400,
      easing: 'ease',
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);


  return (
    <main className={`${poppins.variable}`}>
                <PopupProvider>

        <HomePopupNew/>
        {/* <PopupBundle isOpen={isModalOpen} onClose={closeModal} service={selectedService} /> */}
          <PopupModal />
          <Component {...pageProps} />
        </PopupProvider>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9X52J8V8NK"
        strategy="afterInteractive"
      />

    <Script src="https://www.googletagmanager.com/gtag/js?id=G-362MG93QNS">
    </Script>
      
      <Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=6ad75b0f-d085-4cae-9a7a-48abeb69b973"> </Script>


      <script
        dangerouslySetInnerHTML={{
          __html: `
             !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '685229296766479');
              fbq('track', 'PageView');
                          `,
                      }}
                    />

      <noscript>
        <img height="1" width="1" style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=685229296766479&ev=PageView&noscript=1"
        /></noscript>

       

    </main>
  );
}
