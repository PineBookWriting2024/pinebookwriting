import ContentfulImage from '../ui/ContentfulImage'
import DateComponent from '../ui/DateComponent'

const PostHeader = ({ post }) => {
  const title = post?.fields?.title || 'Blog Post'
  const coverImage = post?.fields?.coverImage
  const date = post?.fields?.date
  const coverUrl = coverImage?.fields?.file?.url
  const coverWidth = coverImage?.fields?.file?.details?.image?.width || 1200
  const coverHeight = coverImage?.fields?.file?.details?.image?.height || 630

  return (
    <>
      <div className='hidden md:flex md:justify-between md:items-center mb-4' />
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
        {date ? <DateComponent dateString={date} className='text-sm text-gray-400' /> : null}
      </div>
    </>
  )
}

export default PostHeader
