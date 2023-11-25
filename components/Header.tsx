import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { getServerSession } from 'next-auth'
import { nextauthOptions } from '@/lib/nextauthOptions'
import CustomLink from './Link'
import Logout from './Logout'

const Header = async () => {
  const session = await getServerSession(nextauthOptions)
  return (
    <header className="flex items-center justify-between p-5">
      <div className="flex">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>

        <div className="mt-2 flex items-center space-x-6 px-8">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
              >
                {link.title}
              </Link>
            ))}
        </div>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <SearchButton />
        <ThemeSwitch />
        {session?.user && (
          <div className="flex items-center justify-center space-x-3">
            <CustomLink href={'login'}>{session?.user?.name || session?.user?.email}</CustomLink>
            <Logout />
          </div>
        )}

        <MobileNav />
      </div>
    </header>
  )
}

export default Header
