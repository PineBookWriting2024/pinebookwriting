/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.pinebookwriting.com'],
  },

  // images: {
  //   domains: ['imperiumdesigners.com', 'https://videos.ctfassets.net/0g2c0d4v74kt/7JddRckDmiDTFoj2zkuibz/19a06bc6173d8b205ead99ba8b0a0307/'],
  // },
  compiler: { styledComponents: true, },



  async redirects() {
    return [
      { source: '/publishing-bundles', destination: '/book-publishing', permanent: true, },
      { source: '/pricing', destination: '/packages', permanent: true, },
      { source: '/contact', destination: '/contact-us', permanent: true, },
      { source: '/term-and-condition', destination: '/terms-and-conditions', permanent: true, },
      // { source: '/Book-Editing', destination: '/book-editing', permanent: true, },
      // { source: '/book-editing-services', destination: '/book-editing', permanent: true, },
      // { source: '/book-editing-writing', destination: '/book-editing', permanent: true, },
      // { source: '/Book-Editing-Services', destination: '/book-editing', permanent: true, },
      // { source: '/Book-Editing-Writing', destination: '/book-editing', permanent: true, },
      // { source: '/Book-Services', destination: '/book-services', permanent: true, },

      // { source: '/blog', destination: '/', permanent: false, },
    ]
  },
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },

};





export default nextConfig;
