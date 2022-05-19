import Link from './Link'

const Cad = ({ title, href, more }) => (
  <div className=" h-min w-max p-4 duration-200 hover:scale-105">
    <div
      className="
        h-full
        overflow-hidden rounded-md border border-indigo-600 border-opacity-60 shadow-md shadow-indigo-500/50 dark:border-gray-700"
    >
      <div className="flex h-full flex-col justify-between px-4 pt-4">
        <div className="flex max-h-32 md:max-h-max">
          <h2 className="mb-3 text-xl font-bold leading-6 tracking-tight text-blue-500">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          {more}
        </div>
      </div>
    </div>
  </div>
)

export default Cad
