import { genPageMetadata } from 'app/seo'
import LoginForm from './form'
import Logo from '@/data/logo.svg'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default function LoginPage() {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <div className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <Logo />
            <span className="ml-4">{siteMetadata.headerTitle}</span>
          </div>
          <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Sign in to your account
              </h1>
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
