import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const posts = getFiles('blog')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('blog')
  const slugAll = getFiles('blog')
  var samePost = []
  slugAll.map((p) => {
    if (params.slug[0] == p.split('/')[0]) {
      samePost.push(p.split('/'))
    }
  })
  // console.log(samePost)
  const postIndex = allPosts.findIndex((post) => {
    return formatSlug(post.slug) === params.slug.join('/')
  })

  var samePostDetail = []
  var samePostIndex = []
  samePost.map((p) => {
    let a = p.join('/')
    let b = allPosts.findIndex((post) => {
      // console.log(formatSlug(post.slug))
      // console.log(a.slice(0,-3))
      return formatSlug(post.slug) == a.slice(0, -3)
    })
    samePostIndex.push(b)
  })
  for (let i = 0; i < samePostIndex.length; i++) {
    // Find the minimum element in unsorted array
    let min_idx = i
    for (let j = i + 1; j < samePostIndex.length; j++) {
      if (samePostIndex[j] > samePostIndex[min_idx]) min_idx = j
    }
    samePostDetail.push(allPosts[samePostIndex[min_idx]])
    samePostIndex[min_idx] = samePostIndex[i]
  }
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('blog', params.slug.join('/'))
  const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts)
    fs.writeFileSync('./public/feed.xml', rss)
  }

  return { props: { post, authorDetails, prev, next, samePostDetail } }
}

export default function Blog({ post, authorDetails, prev, next, samePostDetail }) {
  const { mdxSource, toc, frontMatter } = post

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
          samePost={samePostDetail}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
