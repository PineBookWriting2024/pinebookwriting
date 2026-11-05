import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script id="zoho-salesiq-init" strategy="beforeInteractive">{`
          window.$zoho=window.$zoho || {};
          window.$zoho.salesiq=window.$zoho.salesiq||{ready:function(){}};
        `}</Script>
        <script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siqbd2efc989c2066a4e9c5a1d1fc2a2e5aa947de2ffdfc7fef65f0b82ad608ba33"
          defer
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
