import siteMetadata from '@/data/siteMetadata'

const HomeBanner = () => {
  return (
    <section className="w-full+90 background-image z+1 h-screen bg-center bg-no-repeat">
      <div className="flex h-screen items-center justify-center">
        <div className="mx-4 text-center text-white">
          <h1 className="mb-4 text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {siteMetadata.headerTitle}
          </h1>
          <h3 className="mb-12 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {siteMetadata.description}
          </h3>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner
