import "../styles/globals.css";
import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePopupNew from "./components/HomePopupNew";
import PopupBundle from "./components/PopupBundle";


import PopupModal from './components/PopupModal';
import { PopupProvider } from '../context/PopupContext';

/* Preline Variants */
import 'preline/variants.css';




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

        <HomePopupNew />
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
            !function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://b2bjsstore.s3.us-west-2.amazonaws.com/b/" + key + "/961Y0H4M4KNG.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("961Y0H4M4KNG");}();`,
        }}
      />

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








 <script
        dangerouslySetInnerHTML={{
          __html: `_linkedin_partner_id = "8533857";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);`,
        }}
      />


 {/* <script
        dangerouslySetInnerHTML={{
          __html: `(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);`,
        }}
      />

     <noscript>
      <img height="1" width="1" style={{ display: "none" }} 
        alt=""
        className="linkedin-pixel"
      src="https://px.ads.linkedin.com/collect/?pid=8533857&fmt=gif" />
      </noscript> */}





    </main>
  );
}
