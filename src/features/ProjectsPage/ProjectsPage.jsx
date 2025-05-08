import React, { useState } from 'react';
import GridView from './GridView';
// import FilterSection from './FilterSection';
import { fetchPreviewProjects } from '../../services/apiCloudinary';
import { useLoaderData } from 'react-router-dom';
import ScrollToTopButton from '../../utils/ScrollToTopButton';

function ProjectsPage() {
  const projects = useLoaderData();

  const [filter, setFilter] = useState('all');
  // const [showFilters, setShowFilters] = useState(false);

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.projectType === filter);

  return (
    <div
      className="relative mt-32 min-h-screen w-screen gap-8 border-b-2 border-stone-800 px-8 pb-12 sm:mt-36 sm:px-32"
      dir="rtl"
    >
      {/* Filter Section */}
      {/* <FilterSection
        showFilters={showFilters}
        filter={filter}
        setFilter={setFilter}
      /> */}

      {/* Project Display */}
      <GridView projects={filteredProjects} />
      <div>
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default ProjectsPage;

export async function loader() {
  const projects = await fetchPreviewProjects();
  return projects;
}
