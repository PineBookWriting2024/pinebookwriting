// import Avatar from '../ui/Avatar'
import ContentfulImage from '../ui/ContentfulImage'
import DateComponent from '../ui/DateComponent'
import { client } from '../../../lib/contentful/client'

const PostHeader = ({ post }) => {
  const { title, coverImage, author, date } = post.fields
  const coverUrl = coverImage?.fields?.file?.url
  const coverWidth = coverImage?.fields?.file?.details?.image?.width || 1200
  const coverHeight = coverImage?.fields?.file?.details?.image?.height || 630

  return (
    <>
      {/* <h1 className='text-3xl font-bold mb-4'>{title}</h1> */}
      <div className='hidden md:flex md:justify-between md:items-center mb-4'>
        {/* <Avatar name={author.fields.name} picture={author.fields.picture} /> */}
        {/* <DateComponent dateString={date} className='text-sm text-gray-400' /> */}
      </div>
      <div className='mb-8 sm:mx-0'>
        {coverUrl ? (
          <ContentfulImage
            alt={`Cover Image for ${title}`}
            src={coverUrl}
            width={coverWidth}
            height={coverHeight}
          />
        ) : (
          <div className='w-full h-64 bg-gray-200 rounded-md' />
        )}
      </div>
      <div className='flex justify-between items-center md:hidden mb-6'>
        {/* <Avatar name={author.fields.name} picture={author.fields.picture} /> */}
        <DateComponent dateString={date} className='text-sm text-gray-400' />
      </div>
    </>
  )
}
export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'blog' })

  return {
    props: {
      post: response?.items?.[0],
      revalidate: 60
    }
  }
}
export default PostHeader
