import { NextResponse } from 'next/server'

const legacyCaseRedirects = {
  '/Action-Adventure': '/action-adventure-writing',
  '/ghostwriting': '/ghostwriting-service',
  '/ghostwriting-services': '/ghostwriting-service',
  '/Autobiography-Writing': '/autobiography-writing',
  '/Biography-Writing': '/biography-writing',
  '/Book-Formatting-Writing': '/book-formatting-writing',
  '/Book-Self-Publishing': '/book-self-publishing',
  '/Book-Editing': '/book-editing',
  '/Book-Editing-Services': '/book-editing',
  '/Book-Editing': '/book-editing',
  '/Childrens-Books': '/children-book-writing',
  '/Children-book-writing': '/children-book-writing',
  '/Comedy-Writing': '/comedy-writing',
  '/Comic-Book-Writing': '/comic-book-writing',
  '/Fantasy-Writing-Services': '/fantasy-writing-services',
  '/Hip-Hop-Writing': '/hip-hop-writing',
  '/Horror-Writing': '/horror-book-writing',
  '/Memoir-Writing': '/memoir-writing',
  '/Military-Fiction-Writing': '/military-fiction-writing',
  '/Movie-Writing': '/movie-writing',
  '/Narrative-Writing': '/narrative-writing',
  '/Non-Fiction-Writing': '/non-fiction-writing',
  '/Novel-Writing': '/novel-writing',
  '/Proofreading-Writing': '/proofreading-writing',
  '/movie-script-writing-services': '/script-writing',
  '/book-editing-services': '/book-editing',
  '/book-editing-writing': '/book-editing',
  '/Rhymes-Writing': '/rhymes-writing',
  '/Sci-Fi-writing': '/sci-fi-writing',
  '/Screen-Writing': '/screen-writing',
  '/Song-Writing': '/song-writing',
  '/speech-writing-services': '/speech-writing',
  '/Story-Writing': '/story-writing',
  '/Wiki-Writing': '/wiki-writing'
}

export function middleware(request) {
  const { pathname } = request.nextUrl
  const destination = legacyCaseRedirects[pathname]

  if (!destination) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = destination
  return NextResponse.redirect(url, 308)
}
