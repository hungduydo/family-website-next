import { LoadMore } from '@/components/LoadMore'
import { Movies } from '@/components/MoviesList'
import VideoItem from '@/components/VideoItem'
import { genPageMetadata } from 'app/seo'
import { fecthUpcoming } from 'app/utils/fetch'

export const metadata = genPageMetadata({ title: 'Upcomming' })
export default async function UpcommingPage() {
  const { results, total_pages, page } = await fecthUpcoming()
  return (
    <>
      <section className="mt-8">
        <div className="mx-8">
          <div className="">
            <h1 className="mb-10 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
              Upcomming
            </h1>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <Movies movies={results} />
              <LoadMore total={total_pages} start={page} url="/api/video/upcoming" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
