import { Helmet } from 'react-helmet-async'
import { useEffect, useMemo } from 'react'
import { fetchPreviewProjects } from '../../services/apiCloudinary'
import { useLoaderData, useLocation } from 'react-router-dom'
import ScrollToTopButton from '../../utils/ScrollToTopButton'
import ProjectsFilter from './ProjectsFilter/ProjectsFilter'
import { useState } from 'react'
import ProjectGallery from './ProjectGallery'

function ProjectsPage() {
  const previewProjects = useLoaderData()
  const location = useLocation()

  const [filter, setFilter] = useState(false)

  useEffect(() => {
    if (location.state?.filter !== undefined) {
      setFilter(location.state.filter)
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  const filteredProjects = useMemo(() => {
    return filter === false
      ? previewProjects
      : previewProjects.filter(
          (projectImages) => projectImages[0]?.residential === true
        )
  }, [previewProjects, filter])

  return (
    <>
      <Helmet>
        <title>פרויקטים של יאיר הרמן | תכנון וילות ובתים פרטיים</title>
        <meta
          name="description"
          content="עיינו בגלריית פרויקטים של משרד האדריכלים יאיר הרמן – תכנון וילות, בתים פרטיים ומבני ציבור."
        />
        <link rel="canonical" href="https://hermanarchitects.com/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta
          property="og:url"
          content="https://hermanarchitects.com/projects"
        />
        <meta
          property="og:title"
          content="פרויקטים של יאיר הרמן | תכנון וילות ובתים פרטיים"
        />
        <meta
          property="og:description"
          content="גלריית פרויקטים של משרד האדריכלים יאיר הרמן – השראה לאדריכלות מודרנית מותאמת אישית."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dayojijed/image/upload/v1746526152/r1p_frontview/sdn47dv7ua5colzyw0yy.jpg"
        />
      </Helmet>

      <div
        className="relative mt-36 min-h-screen w-screen gap-8 border-b-2 border-[#948979] pb-12 sm:mt-40 sm:px-32"
        dir="rtl"
      >
        {/* Projects Display */}
        <ProjectsFilter onFilterChange={setFilter} currentFilter={filter} />
        <ProjectGallery previewProjects={filteredProjects} />
        <div>
          <ScrollToTopButton />
        </div>
      </div>
    </>
  )
}

export default ProjectsPage

export async function loader() {
  const previewProjects = await fetchPreviewProjects()
  const projectOne = previewProjects.filter((project) => project.code === 'r1p')
  const projectTwo = previewProjects.filter((project) => project.code === 'h1p')
  const projectThree = previewProjects.filter(
    (project) => project.code === 'r2p'
  )
  return [projectOne, projectTwo, projectThree]
}
