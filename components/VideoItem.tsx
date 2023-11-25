import { POSTER_URL } from 'app/constants'
import { Movie } from 'app/types'
import { movieToPath, slugify } from 'app/utils/slug'
import Image from 'next/image'
import Link from 'next/link'
import { NoPoster } from './icons'

const VideoItem = ({ movie }: { movie: Movie }) => {
  return (
    <div>
      <div className="relative overflow-hidden rounded-lg text-white h-full bg-gray-200">
        {/* <span className="absolute left-0 top-0 rounded-lg bg-blue-400 opacity-50 p-2">{post.vote_average}</span> */}
        <Link href={`/movie/${movieToPath(movie)}`}>
          {movie.poster_path ? (
            <Image
              className="w-full transition-transform duration-500 hover:scale-125"
              src={POSTER_URL + movie.poster_path}

              alt="video alt"
              width={320}
              height={480}
            />
          ) : (
            <NoPoster />
          )}

        </Link>
        <div className="min-h absolute bottom-0 w-full bg-gray-900/70 p-4 text-gray-200 dark:text-gray-100">
          <p
            className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-bold"
            title={movie.title}
          >
            {movie.title}
          </p>
          <p className="max-h-16 overflow-hidden text-ellipsis text-sm">{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoItem
