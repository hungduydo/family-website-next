'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Movie } from 'app/types'
import { Spinner } from '@/components/Spinner'
import { Movies } from '@/components/MoviesList'

export function LoadMore({ total, url = '', start = 1 }) {
  const [movies, setMovies] = useState<Movie[]>([])
  const [page, setPage] = useState(start)

  const { ref, inView } = useInView()

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  const loadMore = async () => {
    // Once the page 8 is reached repeat the process all over again.
    await delay(1000)
    const nextPage = page + 1
    const requestURL = url + (url.includes('?') ? '&page=' : '?page=') + nextPage
    const resData = await fetch(requestURL)

    const { results } = await resData.json()
    setMovies((prevProducts: Movie[]) => [...prevProducts, ...results])
    setPage(nextPage)
  }

  useEffect(() => {
    if (inView) {
      loadMore()
    }
  }, [inView])

  return (
    <>
      <Movies movies={movies} />
      {page < total && (
        <div className="col-span-full flex items-center justify-center p-4" ref={ref}>
          <Spinner />
        </div>
      )}
    </>
  )
}
