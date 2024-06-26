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
import { useEffect, useState } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import SocialIcon from '@/components/social-icons'
import Draggable from 'react-draggable'
import LoveIt from '@/components/loveIt'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children, samePost }) {
  const { slug, fileName, date, title, tags } = frontMatter
  const { asPath, pathname } = useRouter()
  const [show, setShow] = useState(false)

  useEffect(() => {
    smoothscroll.polyfill()
    const handleWindowScroll = () => {
      if (window.scrollY > 150) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])
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
                        <dd className="text-gray-700 dark:text-gray-100">{author.name}</dd>
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
                          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={5} />
                          <SocialIcon kind="discord" href={siteMetadata.discord} size={5} />
                        </div>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div
              style={{
                boxShadow:
                  'rgb(0 146 255 / 30%) 0px 1px 2px 0px, rgb(94 135 159 / 30%) 0px 2px 6px 2px',
              }}
              className={`mb-3 hidden divide-gray-200 rounded-md border-[1px] border-indigo-600 border-opacity-60 bg-white p-4 p-3 text-sm font-medium leading-5 shadow-md shadow-indigo-500/50 duration-1000 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900 ${
                show
                  ? 'fixed block translate-y-0 lg:w-[18.5rem]'
                  : 'mt-[1rem] lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:h-min lg:divide-y'
              } lg:block `}
            >
              {
                <div className="flex justify-between py-4 lg:block lg:space-y-4 lg:py-4 ">
                  <div>
                    <LoveIt />
                    <h1 className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Mục lục
                    </h1>
                    {frontMatter.tableOfContents.map((a, index) => {
                      return (
                        <div
                          key={index}
                          className="py-1 text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                        >
                          <Link href={`#${index + 1}`}>{a}</Link>
                        </div>
                      )
                    })}
                  </div>
                  {(next || prev) && (
                    <div className="flex justify-between border-t-2 pt-4">
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
              }
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 lg:col-span-3 lg:row-span-2 lg:px-6 lg:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
              <div id="Share" className="flex pt-2 pb-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex w-max items-center space-x-2 rounded-[0.3rem] p-4 hover:bg-gray-200">
                  <SocialIcon kind="discord" href={'https://discord.gg/yNhcEWK7Dy'} size={5} />
                  <Link href={'https://discord.gg/yNhcEWK7Dy'} rel="nofollow">
                    <div className="w-max">Discuss</div>
                  </Link>
                </div>
                <div className="flex w-max items-center space-x-2 rounded-[0.3rem] p-4 hover:bg-gray-200">
                  <SocialIcon
                    kind="facebook"
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://myroad.vercel.app${asPath}`}
                    size={5}
                  />
                  <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://myroad.vercel.app${asPath}`}
                  >
                    <div className="w-max">Share</div>
                  </Link>
                </div>
                <div className="flex w-max items-center space-x-2 rounded-[0.3rem] p-4 hover:bg-gray-200">
                  <SocialIcon
                    kind="messenger"
                    href={'https://www.facebook.com/profile.php?id=100031175888976'}
                    size={5}
                  />
                  <Link href={`https://www.facebook.com/profile.php?id=100031175888976`}>
                    <div className="w-max">Contact</div>
                  </Link>
                </div>
              </div>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 lg:col-start-1 lg:row-start-2 lg:divide-y">
                {
                  <div className="flex justify-between py-4 lg:block lg:space-y-8 lg:py-4">
                    {prev && (
                      <div>
                        <h1 className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Bài viết cùng chủ đề
                        </h1>
                        {samePost.map((a, index) => {
                          return (
                            <div
                              key={index}
                              className="py-1 text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                              <Link href={`/blog/${a.slug}`}>{a.title}</Link>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                }
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
              className="mb-4 rounded-md border-[1px] border-indigo-600 border-opacity-60 bg-white p-4 shadow-md shadow-indigo-500/50 dark:border-gray-700 dark:bg-gray-900 lg:col-span-3 lg:col-start-2 lg:row-start-3 lg:divide-y"
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
                  <div className="flex justify-between py-4">
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
