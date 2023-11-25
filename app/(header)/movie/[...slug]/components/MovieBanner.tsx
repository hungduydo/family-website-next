'use client'
import Genre from '@/components/Genre'
import siteMetadata from '@/data/siteMetadata'
import { MovieDetail } from 'app/types'
import Image from 'next/image'

const MovieBanner = ({ movie }: { movie: MovieDetail }) => {
  const bannerBgURL = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces'
  const POSTER_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'

  return (
    <section className="z+1 relative flex bg-center">
      {movie.backdrop_path && (
        <Image
          className="-z-10 object-cover opacity-50"
          src={bannerBgURL + movie.backdrop_path}
          fill={true}
          alt={movie.overview}
        ></Image>
      )}

      <div className=" flex items-center justify-center p-12">
        <Image
          className="rounded-lg"
          src={POSTER_URL + movie.poster_path}
          width={300}
          height={450}
          alt={movie.overview}
        ></Image>
        <div className="mx-8 ">
          <h1 className="mb-4 text-3xl font-bold tracking-tight">{movie.title}</h1>
          <p className="mb-2">
            <span className="mr-2">{movie.release_date}</span>
            {movie.genres.map((genre) => (
              <Genre genre={genre} key={genre.id}></Genre>
            ))}
          </p>
          <p>
            <span className="pr-2 font-semibold">Populity:</span> {movie.popularity}
            <span className="px-2">-</span>
            <span className="pr-2 font-semibold">User score:</span> {movie.vote_average}
          </p>
          <h3 className="mb-3 text-lg italic">{movie.tagline}</h3>
          <h3 className="text-xl font-semibold"> Overview</h3>
          <div> {movie.overview} </div>
        </div>
      </div>
    </section>
  )
}

export default MovieBanner
