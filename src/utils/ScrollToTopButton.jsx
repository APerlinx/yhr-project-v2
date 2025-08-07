export default function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className="right-8 z-50 rounded-lg p-1 pt-4 text-white duration-200 hover:text-[#DFD0B8]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mb-[-6px] h-6 w-6 md:h-8 md:w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
      <p className="text-xs">Top</p>
    </button>
  )
}

// Scroll to the top when button clicked
