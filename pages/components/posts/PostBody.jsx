import RichText from '../RichText'

const PostBody = ({ post }) => {
  const content = post?.fields?.content

  if (!content) {
    return (
      <div className='mx-auto prose'>
        <p>Content is not available for this post yet.</p>
      </div>
    )
  }

  return (
    <div className='mx-auto prose'>
      <RichText content={content} />
    </div>
  )
}

export default PostBody
