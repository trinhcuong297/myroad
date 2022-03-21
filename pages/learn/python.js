import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import pydata from '@/data/learn/python'
import CardCourse from '@/components/CardCourse'


export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-2 px-3 pt-6 pb-4 md:space-y-3">
        <Link href="/learn">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-indigo-600 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Tổng hợp kiến thức lập trình C++
          </h1>
        </Link>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Click vào từng phần để xem
        </p>
      </div>
      <div className="container px-3 py-4">
        <div className="-m-4 flex flex-wrap">
          {pydata.map((d) => (
            // eslint-disable-next-line react/jsx-key
            <CardCourse key={d.title} title={d.title} data={d.data} href={d.href} />
          ))}
        </div>
      </div>
    </>
  )
}
