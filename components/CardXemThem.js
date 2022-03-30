import Link from './Link'

const CardXemThem = ({ title, description, imgSrc, href, height }) => (
  <div className={` ${height} w-1/2 p-4 md:w-1/4`}>
    <Link href={href}>
      <div
        className={`${
          imgSrc && 'h-full'
        }  flex-column flex items-center justify-center overflow-hidden rounded-md border border-indigo-600 border-opacity-60 bg-indigo-100 shadow-md shadow-indigo-500/50 dark:border-gray-700 dark:bg-gray-800`}
      >
        <div className="">
          {href && (
            <Link
              href={href}
              className="text-xl font-bold leading-6 text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
              aria-label={`Link to ${title}`}
            >
              Xem thêm &rarr;
            </Link>
          )}
        </div>
      </div>
    </Link>
  </div>
)

export default CardXemThem
