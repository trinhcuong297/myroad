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
      {/* <div className="space-y-2 pt-6 pb-4 md:space-y-3">
      </div> */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <Link href="/blog">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-cyan-600 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
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
