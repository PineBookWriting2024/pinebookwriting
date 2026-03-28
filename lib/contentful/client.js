const contentful = require('contentful')

const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
const isConfigured = Boolean(space && accessToken)
let contentfulClient = null

const getClient = () => {
  if (!isConfigured) return null
  if (!contentfulClient) {
    contentfulClient = contentful.createClient({
      space,
      accessToken
    })
  }
  return contentfulClient
}

export const client = {
  async getEntries (query) {
    const activeClient = getClient()
    if (!activeClient) return { items: [] }
    return activeClient.getEntries(query)
  }
}

// export const previewClient = contentful.createClient({
//   host: 'preview.contentful.com',
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
// })
