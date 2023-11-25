import siteMetadata from '@/data/siteMetadata'
import HomeBanner from 'app/(header)/home/HomeBanner'
import { fecthPlayNow, fecthPopular, fecthUpcoming } from 'app/utils/fetch'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import HomeSection from './HomeSection'

export default async function Home() {
  const popularData = await fecthPopular()
  const upcomingData = await fecthUpcoming()
  const playnowData = await fecthPlayNow()
  return (
    <>
      <div className="flex flex-col gap-4">
        <HomeBanner></HomeBanner>
        {/* <HomeSection title="Trending" movies={posts}></HomeSection> */}
        <div className="container mx-auto py-8 md:w-10/12">
          <HomeSection title="Play Now" movies={playnowData.results}></HomeSection>
          <HomeSection
            title="What's Popular"
            movies={popularData.results}
            link="/popular"
          ></HomeSection>
          <HomeSection
            title="Upcoming"
            movies={upcomingData.results}
            link="/upcoming"
          ></HomeSection>
        </div>
      </div>

      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-12">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
