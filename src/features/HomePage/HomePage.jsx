import ImageStackSlider from '../../ui/ImageStackSlider';

function HomePage() {
  return (
    <div
      className="flex min-h-screen w-screen flex-col justify-start border-b-2 border-[#948979] bg-[#171717] px-4 pb-10 pt-40 sm:px-32"
      dir="rtl"
    >
      {/* <div className="relative w-full self-center">
        <img
          src="https://res.cloudinary.com/dayojijed/image/upload/v1733482274/Projects-photos/qilz0cpzr5syxsdsfuwd.jpg"
          alt="Project preview"
          className="absolute z-10 h-[541px] w-full object-cover shadow-lg shadow-black 2xl:h-[667px]"
        />
      </div> */}

      <ImageStackSlider />
    </div>
  );
}

export default HomePage;
