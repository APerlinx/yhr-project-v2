import { fetchSingleProject } from '../../../services/apiCloudinary'
import { useLoaderData } from 'react-router-dom'
import translations from '../../../translations/translations'
import { useLanguage } from '../../../context/LanguageContext'
import ImageLightbox from './ImageLightbox/ImageLightbox'
import { useState } from 'react'

function ProjectDetails() {
  const project = useLoaderData()
  const { lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [img, setImg] = useState('')

  function handleImgZoom(ev) {
    setOpen(true)
    setImg(ev.target.src)
  }

  return (
    <div
      className="mt-32 grid min-h-screen grid-rows-[auto_1fr] gap-12 border-b-2 border-[#948979] px-8 pb-12 sm:mt-48 sm:px-32"
      dir="rtl"
    >
      {/* Project Title And main image (Background Image) */}
      <div
        className="relative -mx-32 flex h-[441px] items-center justify-center bg-cover bg-center sm:h-[500px] md:h-[541px] lg:h-[600px]"
        style={{ backgroundImage: `url(${project[0].imageUrl})` }}
      >
        {/* Left gradient overlay */}
        <div className="absolute inset-y-0 left-0 w-3/6 bg-gradient-to-r from-[#171717]/100 to-[#171717]/20" />

        {/* Right gradient overlay */}
        <div className="absolute inset-y-0 right-0 w-3/6 bg-gradient-to-l from-[#171717]/100 to-[#171717]/20" />

        {/* Title */}
        <h1 className="relative z-10 px-4 text-center text-2xl font-semibold text-[#f3f3f3] sm:text-5xl">
          {translations[project[0].desc]?.[lang]}
        </h1>

        <span className="absolute bottom-0 left-5 h-[2px] w-40 origin-left bg-[#DFD0B8] bg-gradient-to-r from-[#171717]/100 to-[#171717]/20"></span>
        <span className="absolute right-5 top-0 h-[2px] w-40 origin-right bg-[#DFD0B8] bg-gradient-to-l from-[#171717]/100 to-[#171717]/20  "></span>
      </div>

      {/* Project Images */}
      <div className="mb-8 grid h-full w-full grid-cols-1 items-center justify-items-center gap-8 sm:grid-cols-2">
        {project.map((img, index) =>
          index ? (
            <img
              src={img.imageUrl}
              alt={`Enlargeable ${index}`}
              key={img.id}
              className={`${
                project.length === 1 ? 'col-span-2' : ''
              } cursor-pointer`}
              onClick={(event) => handleImgZoom(event)}
            />
          ) : (
            ''
          )
        )}
        {project.length < 2 ? (
          <p className="col-span-2 text-lg ">
            {' '}
            {translations.noPhotos?.[lang]}
          </p>
        ) : (
          ''
        )}
      </div>
      {/* Project Images Enlargement component */}
      {open && <ImageLightbox imageUrl={img} open={open} onOpen={setOpen} />}
    </div>
  )
}

export default ProjectDetails

export async function loader({ params }) {
  const { projectName } = params
  const data = await fetchSingleProject(projectName)
  return data
}
