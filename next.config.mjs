/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: ['imperiumdesigners.com', 'https://videos.ctfassets.net/0g2c0d4v74kt/7JddRckDmiDTFoj2zkuibz/19a06bc6173d8b205ead99ba8b0a0307/'],
  // },
 compiler: {    styledComponents: true,  },

  async redirects() { return [ 
    { source: '/publishing-bundles', destination: '/book-publishing', permanent: true, },
    { source: '/pricing', destination: '/packages', permanent: true, },
    { source: '/contact', destination: '/contact-us', permanent: true, },
    { source: '/editing', destination: '/services', permanent: true, },
    { source: '/proofreading', destination: '/services', permanent: true, },
    { source: '/document_processing', destination: '/services', permanent: true, },
    { source: '/book-marketing', destination: '/services', permanent: true, },
    { source: '/graphic-designing', destination: '/services', permanent: true, },
    { source: '/author-website', destination: '/services', permanent: true, },
    { source: '/book-trailer', destination: '/services', permanent: true, },
    { source: '/book-formatting', destination: '/services', permanent: true, },
    { source: '/web-content', destination: '/services', permanent: true, },
    { source: '/book-cover', destination: '/services', permanent: true, },
    { source: '/book-cover', destination: '/services', permanent: true, },
    { source: '/audio-book', destination: '/services', permanent: true, },
    { source: '/term-and-condition', destination: '/terms-and-conditions', permanent: true, },
    // { source: '/blog', destination: '/', permanent: false, },
   ] }, 
};


export default nextConfig;