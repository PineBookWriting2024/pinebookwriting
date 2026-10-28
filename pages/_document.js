import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script id="text-chat-widget" strategy="beforeInteractive">{`
          window.__lc = window.__lc || {};
          window.__lc.organizationId = "986439a4-127f-48b2-a45e-b717c6f3d5c2";
          window.__lc.integration_name = "manual_onboarding";
          window.__lc.product_name = "text";
          ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice));
        `}</Script>
      </Head>
      <body>
        <Main />
        <noscript>
          <a href="https://www.text.com/chat-with-ai-agent/986439a4-127f-48b2-a45e-b717c6f3d5c2/" rel="nofollow">Chat with AI Agent</a>
          {", powered by "}
          <a href="https://www.text.com/" rel="noopener nofollow" target="_blank">Text</a>
        </noscript>
        <NextScript />
      </body>
    </Html>
  );
}
