import Link from './Link'
import { useState } from 'react'
import headerNavLinks from '@/data/headerNavLinks'
import CardCourseExplain from './CardCourseExplain'

const CardCourse = ({ title, data, href }) => (
  <div className={`w-1/2 p-4 md:w-fit`}>
    <div
      className={`overflow-hidden rounded-md border border-indigo-600 border-opacity-60 shadow-md shadow-indigo-500/50 dark:border-gray-700`}
    >
      <div className="flex h-full flex-col justify-between p-4">
        {/* <div className="">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-blue-500">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{data}</p>
        </div> */}
        <CardCourseExplain title={title} data={data} href={href} />
      </div>
    </div>
  </div>
)

export default CardCourse
