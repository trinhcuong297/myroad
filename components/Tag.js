import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="text-md mr-3 font-medium uppercase text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
