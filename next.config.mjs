/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['imperiumdesigners.com', 'https://videos.ctfassets.net/0g2c0d4v74kt/7JddRckDmiDTFoj2zkuibz/19a06bc6173d8b205ead99ba8b0a0307/'],
  },
  async redirects() { return [ 
    { source: '/publishing-bundles', destination: '/book-publishing', permanent: true, },
    { source: 'https://www.pinebookwriting.com/pricing', destination: 'https://www.pinebookwriting.com/packages', permanent: true, },
   ] }, 
};


export default nextConfig;