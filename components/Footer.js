import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={8} />
          <SocialIcon kind="github" href={siteMetadata.github} size={8} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={8} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={8} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={8} />
          <SocialIcon kind="discord" href={siteMetadata.discord} size={8} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400"></div>
      </div>
    </footer>
  )
}
