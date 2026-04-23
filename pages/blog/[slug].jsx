import BrandNavbar from '../components/BrandNavbar'
import BrandPrimaryHeader from '../components/BrandPrimaryHeader'
import PostBody from '../components/posts/PostBody'
import PostHeader from '../components/posts/PostHeader'
import Head from "next/head";
// import PreviewAlert from '../components/ui/PreviewAlert'
import Skeleton from '../components/ui/Skeleton'
import ContentfulImage from '../components/ui/ContentfulImage'
import { client } from '../../lib/contentful/client'
import { useRouter } from 'next/router'
import BrandFooter from '../components/BrandFooter';
import DateComponent from '../components/ui/DateComponent';

const safeParseSchema = (schemaValue) => {
  if (!schemaValue) return null
  if (typeof schemaValue !== 'string') return schemaValue

  try {
    return JSON.parse(schemaValue)
  } catch (error) {
    console.error('Invalid JSON-LD schema in blog entry:', error)
    return null
  }
}

const Post = ({ post, recentPosts }) => {
  const router = useRouter()
  const blogSchema = safeParseSchema(post?.fields?.blogSchema)
  const faqSchema = safeParseSchema(post?.fields?.faqSchema)


  return (
    <>
      <Head>

        <title>{post?.fields?.metaTitle || post?.fields?.title}</title>
        <meta
          name="description"
          content={post?.fields?.metaDescription || post?.fields?.excerpt || 'Read this blog post'}
        />
        {post?.fields?.canonicalUrl && (
          <link rel="canonical" href={post.fields.canonicalUrl} key="canonical" />
        )}
        <link rel="shortcut icon" href="/images/fav.png" />
        {/* <meta name="robots" content="noindex, nofollow" /> */}
        {blogSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(blogSchema),
            }}
          />
        )}

        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema),
            }}
          />
        )}

      </Head>
      <BrandNavbar />

      {/* Header Banner */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-32"
        style={{
          backgroundColor: `#2e3845`,
        }}
      >
        <div className="container max-w-screen-xl mx-auto">
          <div className="row">
            <div className="col-12 text-center px-5">
              <h1 className="text-2xl md:text-4xl font-bold text-white font-poppins drop-shadow-lg pt-20">
                {post?.fields?.title}
              </h1>
              {post?.fields?.date && (
                <p className="text-sm text-white mb-3 pt-3">
                  {new Date(post.fields.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              )}
              {post?.fields?.author?.fields?.name && (
                <span className="ml-2 text-white font-bold text-xl"> By {post.fields.author.fields.name}</span>
              )}
            </div>
          </div>
        </div>
      </section>


      <section className='overflow-hidden'>
        <div className='max-w-screen-xl mx-auto px-4 my-20 relative py-22 flex flex-col lg:flex-row'>
          {/* Main Post Column */}
          <article className='prose mx-auto w-full lg:w-2/3'>
            {router.isFallback ? (
              <Skeleton />
            ) : (
              <>
                <PostHeader post={post} />
                <PostBody post={post} />
              </>
            )}
          </article>
          <aside className='w-full lg:w-1/3 lg:pl-8'>
            <div className='bg-gray-100 p-6 rounded-lg'>
              <h3 className='text-xl font-semibold mb-4'>Recent Blogs</h3>
              <hr className='mb-3'></hr>
              <ul>
                {recentPosts && recentPosts.length > 0 ? (
                  recentPosts.map((recentPost) => (
                    <li key={recentPost.sys.id} className='mb-4 '>
                      <a href={`/blog/${recentPost.fields.slug}`} className='text-black hover:underline'>
                        <div className='flex items-center'>
                          {recentPost?.fields?.coverImage?.fields?.file?.url ? (
                            <ContentfulImage
                              alt={`Cover Image for ${recentPost.fields.title}`}
                              src={recentPost.fields.coverImage.fields.file.url}
                              width={recentPost?.fields?.coverImage?.fields?.file?.details?.image?.width || 96}
                              height={recentPost?.fields?.coverImage?.fields?.file?.details?.image?.height || 64}
                              className='w-24 h-16 object-cover mr-4 rounded-lg'
                            />
                          ) : (
                            <div className='w-24 h-16 mr-4 rounded-lg bg-gray-200 shrink-0' />
                          )}
                          <h4 className='font-bold'>
                            {recentPost.fields.title}
                          </h4>
                        </div>
                      </a>
                    </li>
                  ))
                ) : (
                  <p>No recent posts available.</p>
                )}
              </ul>
            </div>
          </aside>

        </div>
      </section>
      <BrandFooter />
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params

  try {
    const postResponse = await client.getEntries({
      content_type: 'blog',
      'fields.slug': slug
    })

    const recentPostsResponse = await client.getEntries({
      content_type: 'blog',
      select: 'fields.title,fields.slug,fields.coverImage,fields.excerpt',
      limit: 6,
      order: '-sys.createdAt'
    })

    if (!postResponse?.items?.length) {
      return {
        redirect: {
          destination: '/blog',
          permanent: false
        }
      }
    }

    const recentPosts = (recentPostsResponse?.items || [])
      .filter((item) => item?.fields?.slug && item?.fields?.title)
      .filter((item) => item?.fields?.slug !== slug)
      .slice(0, 5)

    return {
      props: {
        post: postResponse?.items?.[0],
        recentPosts,
      },
      revalidate: 60
    }
  } catch (error) {
    console.error(`Failed to fetch blog static props for slug "${slug}":`, error)
    return {
      redirect: {
        destination: '/blog',
        permanent: false
      },
      revalidate: 60
    }
  }
}

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'blog' })
  const paths = response.items.map(item => ({
    params: { slug: item.fields.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export default Post
