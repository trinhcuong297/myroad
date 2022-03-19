import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, height }) => (
  <div className={` ${height} w-1/2 p-4 md:w-1/4`}>
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border border-indigo-600 border-opacity-60 shadow-md shadow-indigo-500/50 dark:border-gray-700`}
    >
      <div className="flex h-full flex-col justify-between p-4">
        <div className="">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-blue-500">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        </div>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Học ngay &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
