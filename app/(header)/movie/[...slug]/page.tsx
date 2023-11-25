import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Authors, Blog } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'
import MovieBanner from './components/MovieBanner'
import { fecthDetail } from 'app/utils/fetch'
import { POSTER_URL } from 'app/constants'

// const defaultLayout = 'PostLayout'
// const layouts = {
//   PostSimple,
//   PostLayout,
//   PostBanner,
// }

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const videoId = slug.split('_')[1]
  if (!videoId) {
    return notFound()
  }
  const movie = await fecthDetail(videoId)
  if (!movie) {
    return
  }

  const publishedAt = new Date(movie.release_date).toISOString()
  let ogImages = siteMetadata.siteUrl + siteMetadata.socialBanner
  if (movie.poster_path) {
    ogImages = POSTER_URL + movie.poster_path
  }

  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      title: movie.title,
      description: movie.overview,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      url: './',
      images: ogImages,
    },
  }
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  const videoId = slug.split('_')[1]
  if (!videoId) {
    return notFound()
  }
  const movie = await fecthDetail(videoId)

  return (
    <>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({}) }}
      /> */}
      <MovieBanner movie={movie}></MovieBanner>
    </>
  )
}
