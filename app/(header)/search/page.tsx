import { LoadMore } from '@/components/LoadMore'
import { Movies } from '@/components/MoviesList'
import { genPageMetadata } from 'app/seo'
import { fecthKeyword } from 'app/utils/fetch'
import { nextauthOptions } from 'lib/nextauthOptions'
import { getServerSession } from 'next-auth'

export const metadata = genPageMetadata({ title: 'Search' })

export default async function SearchPage({ params, searchParams }) {
  // get the session
  const session = await getServerSession(nextauthOptions)
  const keyword = searchParams.keyword
  const { results, total_pages, page } = await fecthKeyword('1', keyword)
  return (
    <>
      <section className="mt-8">
        <div className="mx-8">
          <div className="">
            <h1 className="mb-10 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
              Search Results
            </h1>
            {results.length === 0 && (
              <p className="text-center font-semibold">
                There are no movies that matched your query.
              </p>
            )}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <Movies movies={results} />
              <LoadMore total={total_pages} start={page} url={`/api/video/search?${keyword}`} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
