import React, { useEffect, useMemo } from 'react'
import ProjectGallery from './ProjectGallery'
import { fetchPreviewProjects } from '../../services/apiCloudinary'
import { useLoaderData, useLocation } from 'react-router-dom'
import ScrollToTopButton from '../../utils/ScrollToTopButton'
import ProjectsFilter from './ProjectsFilter/ProjectsFilter'
import { useState } from 'react'

function ProjectsPage() {
  const projects = useLoaderData()
  const location = useLocation()

  const [filter, setFilter] = useState(false)

  useEffect(() => {
    if (location.state?.filter !== undefined) {
      setFilter(location.state.filter)
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  // Memoize filtered project list to avoid recalculating on each render
  const filteredProjects = useMemo(() => {
    return filter === false
      ? projects
      : projects.filter((project) => project.residential === filter)
  }, [projects, filter])

  return (
    <div
      className="relative mt-36 min-h-screen w-screen gap-8 border-b-2 border-[#948979] pb-12 sm:mt-40 sm:px-32"
      dir="rtl"
    >
      {/* Projects Display */}
      <ProjectsFilter onFilterChange={setFilter} currentFilter={filter} />
      <ProjectGallery projects={filteredProjects} />
      <div>
        <ScrollToTopButton />
      </div>
    </div>
  )
}

export default ProjectsPage

export async function loader() {
  const projects = await fetchPreviewProjects()
  return projects
}
