import { Movie } from 'app/types'
import VideoItem from '../../../components/VideoItem'
import Link from 'next/link'
interface HomeSectionProps {
  title: string
  link?: string
  movies: Array<Movie>
}

const HomeSection = ({ title, movies, link }: HomeSectionProps) => {
  return (
    <section className="mt-8">
      <div className="">
        <div>
          <div className="flex items-center justify-between">
            <h2 className=" mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {title}
            </h2>
            {link && (
              <Link href={link} className="font-bold">
                View All
              </Link>
            )}
          </div>
          <div className="flex overflow-scroll">
            {movies.slice(0, 8).map((movie) => {
              return (
                <div className="mr-6" key={movie.id} style={{ minWidth: '250px' }}>
                  <VideoItem movie={movie} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
