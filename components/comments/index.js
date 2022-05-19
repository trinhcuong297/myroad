import { DiscussionEmbed } from 'disqus-react'

const Comments = (id, title) => {
  const disqusShortname = 'https-myroad-vercel-app'

  const disqusConfig = {
    url: 'https://myroad.vercel.app/',
    identifier: id,
    title: title,
  }

  return <div>{/* <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} /> */}</div>
}

export default Comments

// import siteMetadata from '@/data/siteMetadata'
// import dynamic from 'next/dynamic'

// const UtterancesComponent = dynamic(
//   () => {
//     return import('@/components/comments/Utterances')
//   },
//   { ssr: false }
// )
// const GiscusComponent = dynamic(
//   () => {
//     return import('@/components/comments/Giscus')
//   },
//   { ssr: false }
// )
// const DisqusComponent = dynamic(
//   () => {
//     return import('@/components/comments/Disqus')
//   },
//   { ssr: false }
// )

// const Comments = ({ frontMatter }) => {
//   let term
//   const comment = siteMetadata?.comment
//   if (!comment || Object.keys(comment).length === 0) return <></>
//   switch (
//     siteMetadata.comment.giscusConfig.mapping ||
//     siteMetadata.comment.utterancesConfig.issueTerm
//   ) {
//     case 'pathname':
//       term = frontMatter.slug
//       break
//     case 'url':
//       term = window.location.href
//       break
//     case 'title':
//       term = frontMatter.title
//       break
//   }
//   return (
//     <div id="disqus_thread">
//       {siteMetadata.comment && siteMetadata.comment.provider === 'giscus' && (
//         <GiscusComponent mapping={term} />
//       )}
//       {siteMetadata.comment && siteMetadata.comment.provider === 'utterances' && (
//         <UtterancesComponent issueTerm={term} />
//       )}
//       {siteMetadata.comment && siteMetadata.comment.provider === 'disqus' && (
//         <DisqusComponent frontMatter={frontMatter} />
//       )}
//     </div>
//   )
// }

// export default Comments
