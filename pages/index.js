import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'
import Card from '@/components/Cad'
import CardXemThem from '@/components/CardXemThem'
import learnData from '@/data/learnData'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import Image from '@/components/Image'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const tags = await getAllTags('blog')

  return { props: { posts, tags } }
}

export default function Home({ posts, tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="">
        <div className="relative overflow-hidden bg-white dark:bg-gray-900">
          <div className="block">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="hidden h-56 w-full rounded-br-[5rem] rounded-tl-[5rem] object-cover sm:h-72 md:block md:h-96 lg:h-full lg:w-full"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                alt=""
              />
            </div>

            <div className="relative flex h-[35rem] bg-white dark:bg-gray-900 lg:w-full lg:max-w-2xl">
              <svg
                className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" className="dark:hidden" />
              </svg>
              <svg
                className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
                fill="#171717"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" className="hidden dark:block" />
              </svg>

              <main className="mx-auto flex max-w-5xl items-center justify-items-center px-4 sm:px-6 lg:px-8">
                <div className="sm:text-center lg:text-left">
                  <div className="ml-4">
                    <svg
                      width="72"
                      height="67"
                      viewBox="0 0 72 67"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="67" cy="26" r="5" fill="#637EDC" fillOpacity="0.63" />
                      <circle cx="52" cy="52" r="6" fill="#637EDC" fillOpacity="0.79" />
                      <circle cx="36" cy="6" r="6" fill="#637EDC" fillOpacity="0.63" />
                      <circle cx="52" cy="34" r="7" fill="#637EDC" />
                      <circle cx="6" cy="43" r="5" fill="#637EDC" fillOpacity="0.63" />
                      <circle cx="37" cy="61" r="6" fill="#637EDC" fillOpacity="0.63" />
                      <circle cx="5" cy="27" r="5" fill="#637EDC" fillOpacity="0.63" />
                      <circle cx="20" cy="17" r="6" fill="#637EDC" fillOpacity="0.79" />
                      <circle cx="67" cy="42" r="5" fill="#637EDC" fillOpacity="0.63" />
                      <circle cx="20" cy="52" r="6" fill="#637EDC" fillOpacity="0.79" />
                      <circle cx="36" cy="43" r="7" fill="#637EDC" />
                      <circle cx="52" cy="17" r="6" fill="#637EDC" fillOpacity="0.79" />
                      <circle cx="20" cy="34" r="7" fill="#637EDC" />
                      <circle cx="36" cy="24" r="7" fill="#637EDC" />
                    </svg>
                  </div>
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="dark:text-[#e0e7ff] lg:inline">
                      Blog về
                      <span className="text-indigo-600 lg:inline"> code</span>
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-lg lg:mx-0">
                    Chào các bạn, mình là Trịnh Cao Cường - một người thích khám phá thế giới của
                    câu lệnh. Blog này là nơi mình chia sẻ những kiến thức và trải nghiệm của mình.
                    <br />
                    Mong rằng những chia sẻ của mình sẽ hữu ích với mọi người!
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow" id="get">
                      <Link
                        href="#get"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                      >
                        {' '}
                        Blog này có gì?{' '}
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link
                        href="/about"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                      >
                        {' '}
                        Về Cường{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 divide-y divide-gray-200 px-4 dark:divide-gray-700 sm:px-4 lg:px-16">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <Link href="/blog">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-indigo-600 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Bài viết mới nhất
            </h1>
          </Link>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          {/* <div className="container">
            <div className="-m-4 flex flex-wrap">
              <Card key={learnData[0].title} title={learnData[0].title} href={learnData[0].href} />
              <Card key={learnData[1].title} title={learnData[1].title} href={learnData[1].href} />
              <Card key={learnData[2].title} title={learnData[2].title} href={learnData[2].href} />
            </div>
          </div> */}
        </div>
        <div className="cusscroll flex w-full snap-y snap-mandatory overflow-auto overflow-y-hidden">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <Link
                key={t}
                href={`/tags/${kebabCase(t)}`}
                className="-ml-2 flex text-sm font-semibold text-gray-600 dark:text-gray-300"
              >
                <Card
                  key={learnData[0].title}
                  title={t}
                  href={learnData[0].href}
                  more={` (${tags[t]})`}
                />
              </Link>
            )
          })}
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 lg:grid lg:grid-cols-4 lg:items-baseline lg:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 lg:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
