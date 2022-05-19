import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="fixed z-10 flex w-full items-center justify-between bg-white py-2 px-3 shadow-lg dark:bg-gray-800">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <h1
                    className="hidden text-2xl font-extrabold tracking-normal text-gray-900 text-indigo-500 sm:text-3xl md:text-4xl"
                    id="logoname"
                  >
                    {siteMetadata.headerTitle}
                  </h1>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden items-center sm:flex">
              {headerNavLinks.map((link, index) =>
                index == 0 ? (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="rounded-lg px-1 font-medium text-gray-900 hover:bg-indigo-100 hover:text-indigo-800 dark:text-gray-100 dark:hover:bg-black sm:px-4"
                  >
                    <img src="https://img.icons8.com/fluency/48/000000/search-bar.png" alt="" />
                  </Link>
                ) : (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="rounded-lg p-1 font-medium text-gray-900 hover:bg-indigo-100 hover:text-indigo-800 dark:text-gray-100 dark:hover:bg-black sm:p-4"
                  >
                    {link.title}
                  </Link>
                )
              )}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mx-2 mt-24 px-4 sm:px-4 lg:px-8">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
