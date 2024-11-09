const contentful = require('contentful')

export const client = contentful.createClient({
  space: '4y118mg1ah13',
  accessToken: 'X6QSAjguIrEZMMGU29oR7eH_gQxRkKB_o1DlFqm1Qis'
})

// export const previewClient = contentful.createClient({
//   host: 'preview.contentful.com',
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
// })
