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
    { source: '/Autobiography-Writing', destination: '/autobiography-writing', permanent: true, },
    { source: '/Biography-Writing', destination: '/biography-writing', permanent: true, },
    { source: '/Book-Formatting-Writing', destination: '/book-formatting-writing', permanent: true, },
    { source: '/Book-Self-Publishing', destination: '/book-self-publishing', permanent: true, },
    { source: '/Children-book-writing', destination: '/children-book-writing', permanent: true, },
    { source: '/Comedy-Writing', destination: '/comedy-writing', permanent: true, },
    { source: '/Comic-Book-Writing', destination: '/comic-book-writing', permanent: true, },
    { source: '/Fantasy-Writing-Services', destination: '/fantasy-writing-services', permanent: true, },
    { source: '/Hip-Hop-Writing', destination: '/hip-hop-writing', permanent: true, },
    { source: '/Memoir-Writing', destination: '/memoir-writing', permanent: true, },
    { source: '/Military-Fiction-Writing', destination: '/military-fiction-writing', permanent: true, },
    { source: '/Movie-Writing', destination: '/movie-writing', permanent: true, },
    { source: '/Narrative-Writing', destination: '/narrative-writing', permanent: true, },
    { source: '/Non-Fiction-Writing', destination: '/non-fiction-writing', permanent: true, },
    { source: '/Novel-Writing', destination: '/novel-writing', permanent: true, },
    { source: '/Proofreading-Writing', destination: '/proofreading-writing', permanent: true, },
    { source: '/Rhymes-Writing', destination: '/rhymes-writing', permanent: true, },
    { source: '/Sci-Fi-writing', destination: '/sci-fi-writing', permanent: true, },
    { source: '/Screen-Writing', destination: '/screen-writing', permanent: true, },
    { source: '/Song-Writing', destination: '/song-writing', permanent: true, },
    { source: '/Speech-Writing', destination: '/speech-writing', permanent: true, },
    { source: '/Story-Writing', destination: '/story-writing', permanent: true, },
    { source: '/Wiki-Writing', destination: '/wiki-writing', permanent: true, },
    // { source: '/Book-Services', destination: '/book-services', permanent: true, },

    // { source: '/blog', destination: '/', permanent: false, },
   ] }, 
   experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },

};


export default nextConfig;
