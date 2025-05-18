import ImageStackSlider from '../../ui/ImageStackSlider'

function HomePage() {
  return (
    <div
      className="flex min-h-screen w-screen flex-col justify-start border-b-2 border-[#948979] bg-[#171717] pt-40 sm:px-32 sm:pb-10"
      dir="rtl"
    >
      <ImageStackSlider />
    </div>
  )
}

export default HomePage
