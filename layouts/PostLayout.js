import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { useRouter } from 'next/router'
import SocialIcon from '@/components/social-icons'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags } = frontMatter
  const { asPath, pathname } = useRouter()

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div className="lg:divide-y lg:divide-gray-200 lg:dark:divide-gray-700">
          <header className="pt-6 lg:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-6 pb-4 lg:border-b lg:border-gray-200 lg:pt-11 lg:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 sm:space-x-12 lg:block lg:space-x-0 lg:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width="38px"
                          height="38px"
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="text-md whitespace-nowrap font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-emerald-700 dark:text-gray-100">{author.name}</dd>
                        {/* <dt className="sr-only">Facebook</dt>
                        <dd>
                          {author.facebook && (
                            <Link
                              href={author.facebook}
                              className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                              Facebook
                            </Link>
                          )}
                        </dd> */}
                        <div className="flex space-x-3 pt-2">
                          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
                          <SocialIcon kind="github" href={siteMetadata.github} size={5} />
                          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={5} />
                          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={5} />
                          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
                          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={5} />
                        </div>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 lg:col-span-3 lg:row-span-2 lg:px-6 lg:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
              <div className="flex space-x-8 pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex space-x-2">
                  <SocialIcon kind="discord" href={'https://discord.gg/yNhcEWK7Dy'} size={5} />

                  <Link href={discussUrl(slug)} rel="nofollow">
                    {'Discuss on Discord'}
                  </Link>
                </div>
                <div className="flex space-x-2">
                  <SocialIcon
                    kind="facebook"
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://myroad.vercel.app${asPath}`}
                    size={5}
                  />
                  <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://myroad.vercel.app${asPath}`}
                  >
                    {'Share on Facebook'}
                  </Link>
                </div>
                <div className="flex space-x-2">
                  <SocialIcon kind="messenger" href={siteMetadata.linkedin} size={5} />
                  <Link href={`https://www.facebook.com/profile.php?id=100031175888976`}>
                    {'Contact me via Messenger'}
                  </Link>
                </div>
              </div>
              <Comments
                id={`https://www.facebook.com/profile.php?id=100031175888976`}
                title={title}
              />
            </div>
            <footer
              style={{
                boxShadow:
                  'rgb(0 146 255 / 30%) 0px 1px 2px 0px, rgb(94 135 159 / 30%) 0px 2px 6px 2px',
              }}
              className="mb-4 rounded-md border-[1px] border-indigo-600 border-opacity-60 p-4 shadow-md shadow-indigo-500/50 dark:border-gray-700 lg:fixed lg:bottom-0 lg:w-[18.5rem]"
            >
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 lg:col-start-1 lg:row-start-2 lg:divide-y">
                {tags && (
                  <div className="py-1 lg:pb-4">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Chủ đề
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 lg:block lg:space-y-8 lg:py-4">
                    {prev && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Post trước
                        </h2>
                        <div className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Post sau
                        </h2>
                        <div className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 pb-2 lg:pt-4">
                <Link
                  href="/blog"
                  className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  &larr; Trở lại blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
