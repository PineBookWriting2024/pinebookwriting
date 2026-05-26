const contentful = require('contentful')

const space = process.env.CONTENTFUL_SPACE_ID || process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const emptyResponse = { items: [], total: 0, skip: 0, limit: 0 }

const stubClient = {
  getEntries: async () => emptyResponse,
  getEntry: async () => null,
  getAsset: async () => null,
  getAssets: async () => emptyResponse,
}

let realClient = null
if (space && accessToken) {
  try {
    realClient = contentful.createClient({ space, accessToken })
  } catch (error) {
    console.warn('Contentful client init failed, falling back to empty stub:', error?.message)
  }
} else {
  console.warn('Contentful env vars missing (CONTENTFUL_SPACE_ID / CONTENTFUL_ACCESS_TOKEN). Blog will render empty.')
}

export const client = realClient || stubClient
