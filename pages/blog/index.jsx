import { client } from '../../lib/contentful/client'
import Head from "next/head";
import PostCard from '../components/posts/PostCard'
import BrandPrimaryHeader from '../components/BrandPrimaryHeader'
import BrandNavbar from '../components/BrandNavbar'
import NewBrandFooter from '../components/NewBrandFooter';

const Posts = ({ posts = [] }) => {
  return (
    <>
      <Head>
        <title>Blogs | Pine Book Writing</title>
        <meta
          name="description"
          content="Everything about Pine Book Publishing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
        />
        <link rel="shortcut icon" href="/images/fav.png" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <BrandNavbar />
      <BrandPrimaryHeader
        photo_banner={"/brand-img/banner-img.webp"}
        subtitle=""
        title="Our Blog - Helpful Writing Tips, Guides & Ideas"
        desc="Explore Pine Book Writing's blog page and find honest writing advice, writing tips, how well-known authors are thriving, and the latest writing trends written by industry experts. This section is for every writer, whether you're a content writer, business writer, or aspiring book writer. There's something here for everyone."
      />
      <section className='overflow-hidden'>
        <div className='max-w-screen-xl mx-auto px-4 my-20 relative py-22'>
          {posts.length > 0 ? (
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10'>
              {posts.map((post) => (
                <PostCard key={post?.sys?.id || post?.fields?.slug} post={post} />
              ))}
            </ul>
          ) : (
            <p className='text-center text-gray-600'>No blog posts available right now.</p>
          )}
        </div>
      </section>

      <NewBrandFooter />
    </>

  )
}


export const getStaticProps = async () => {
  try {
    const response = await client.getEntries({ content_type: 'blog' })
    const posts = [...(response?.items || [])]
      .filter((item) => item?.fields?.slug && item?.fields?.title)
      .sort((a, b) => {
        const aDate = new Date(a?.fields?.date || a?.sys?.createdAt || 0).getTime()
        const bDate = new Date(b?.fields?.date || b?.sys?.createdAt || 0).getTime()
        return bDate - aDate
      })

    return {
      props: {
        posts,
      },
      revalidate: 60
    }
  } catch (error) {
    console.error('Failed to fetch blog posts:', error)

    return {
      props: {
        posts: [],
      },
      revalidate: 60
    }
  }
}

export default Posts