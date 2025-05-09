import React from 'react';
import GridView from './GridView';
import { fetchPreviewProjects } from '../../services/apiCloudinary';
import { useLoaderData } from 'react-router-dom';
import ScrollToTopButton from '../../utils/ScrollToTopButton';

function ProjectsPage() {
  const projects = useLoaderData();

  return (
    <div
      className="relative mt-36 min-h-screen w-screen gap-8 border-b-2 border-stone-800 px-8 pb-12 sm:mt-40 sm:px-32"
      dir="rtl"
    >
      {/* Project Display */}
      <GridView projects={projects} />
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
