import { genPageMetadata } from 'app/seo'
import { fecthPopular } from 'app/utils/fetch'
import { nextauthOptions } from 'lib/nextauthOptions'
import { getServerSession } from 'next-auth'
import { Movies } from '@/components/MoviesList'
import { LoadMore } from '@/components/LoadMore'

export const metadata = genPageMetadata({ title: 'Popular' })

export default async function PopularPage({ params, searchParams }) {
  // get the session
  const session = await getServerSession(nextauthOptions)

  const queryPage = searchParams.page || '1'
  const { results, total_pages, page } = await fecthPopular(queryPage)
  return (
    <>
      <section className="mt-8">
        <div className="mx-8">
          <div className="">
            <h1 className="mb-10 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
              Popular
            </h1>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <Movies movies={results} />
              <LoadMore total={total_pages} start={page} url={'/api/video/popular'} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
