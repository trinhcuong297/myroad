import { useEffect, useState } from 'react'

const LoveIt = () => {
  const [mounted, setMounted] = useState(true)

  // When mounted on client, now we can show the UI
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="absolute right-[1rem] top-[-1rem] h-8 w-8 rounded-full bg-white p-1 hover:scale-150"
      onClick={() => setMounted(mounted ? false : true)}
    >
      {mounted ? (
        <img src="https://www.svgrepo.com/show/3569/heart.svg" />
      ) : (
        <img src="https://www.svgrepo.com/show/33090/heart.svg" />
      )}
    </button>
  )
}

export default LoveIt
