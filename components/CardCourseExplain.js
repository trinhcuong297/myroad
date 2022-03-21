import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const CardCourseExplain = ({ title, data, href }) => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="">
      <button type="button" className="rounded py-1" aria-label="Toggle Menu" onClick={onToggleNav}>
        <h2 className="text-xl font-bold leading-8 tracking-tight text-blue-500">{title}</h2>
      </button>
      <div
        className={`fixed top-0 right-0 z-10 flex h-full w-full transform justify-center bg-lime-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${
          navShow ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed h-full w-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed flex h-full w-11/12 md:w-7/12 items-center justify-center">
          <div className="w-full rounded-md border border-indigo-600 border-opacity-60 bg-violet-50 p-5 shadow-lg shadow-indigo-500/50 dark:border-gray-700">
            {data.map((a) => {
              // eslint-disable-next-line react/jsx-key
              return <pre className="max-h-[32rem] dark:text-lime-900 overflow-auto snap-y snap-mandatory">{a}</pre>
            })}
          </div>
        </nav>
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed right-0 h-16 w-16 cursor-auto focus:outline-none"
          onClick={onToggleNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-gray-900 dark:text-gray-100"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CardCourseExplain
