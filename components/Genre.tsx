import Link from 'next/link'
import { slug } from 'github-slugger'
import { Genre } from 'app/types'
interface Props {
  genre: Genre
}

const Genre = ({ genre }: Props) => {
  return (
    <Link
      href={`/genre/${slug(genre.name)}`}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {genre.name}
    </Link>
  )
}

export default Genre
