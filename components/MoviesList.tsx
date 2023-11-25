import VideoItem from '@/components/VideoItem'
import { Movie } from 'app/types'

export interface MoviesProps {
  movies: Movie[] | null
}

export function Movies({ movies }: MoviesProps) {
  return (
    <>
      {movies ? (
        movies.map((beer) => <VideoItem movie={beer} key={beer.id} />)
      ) : (
        <div className="text-xl font-bold">No beers available !! </div>
      )}
    </>
  )
}
