import { useState } from 'react'
import Masonry from 'react-masonry-css'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { fetchSingleProject } from '../../../services/apiCloudinary'
import ImageLightbox from './ImageLightbox/ImageLightbox'

function ProjectDetails() {
  const project = useLoaderData()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [img, setImg] = useState('')

  if (!project || !project.length) return null

  const { title, year, residential } = project[0]

  const projectType = residential ? 'מגורים' : 'ציבורי'

  const handleImgZoom = (ev) => {
    setOpen(true)
    setImg(ev.target.src)
  }

  function handleBack() {
    navigate('/projects')
  }

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  }

  return (
    <div
      className="mt-32 border-b-2 border-[#948979] px-4 sm:mt-48 sm:px-32"
      dir="rtl"
    >
      {/* Project Title Section */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-wide sm:text-5xl">
          {title}
        </h1>
        <p className="mt-2 text-xl text-gray-600">
          {year && <span>{year} | </span>}
          {projectType}
        </p>
      </div>
      <button
        onClick={handleBack}
        className="mb-6 text-sm text-gray-600 underline underline-offset-2 hover:text-white/80 sm:text-base"
      >
        → חזרה לגלריה
      </button>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {project.map((img, index) => (
          <img
            key={img.id}
            src={img.imageUrl}
            alt={`${index + 1}`}
            className="w-full cursor-pointer shadow-lg transition hover:opacity-80"
            onClick={handleImgZoom}
          />
        ))}
      </Masonry>

      {/* No photos */}
      {project.length < 1 && (
        <p className="mt-8 text-center text-lg text-gray-500">
          אין תמונות זמינות לפרויקט זה.
        </p>
      )}

      {/* Lightbox */}
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
