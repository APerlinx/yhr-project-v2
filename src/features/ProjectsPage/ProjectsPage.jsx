import React, { useState } from 'react';
import GridView from './GridView';
import ListView from './ListView';
import FilterSection from './FilterSection';
import { fetchPreviewProjects } from '../../services/apiCloudinary';
import { useLoaderData } from 'react-router-dom';

function ProjectsPage() {
  const projects = useLoaderData();

  const [view, setView] = useState('grid');
  const [filter, setFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.projectType === filter);

  return (
    <div
      className="relative mt-32 min-h-screen w-screen gap-8 border-b-2 border-stone-300 px-8 pb-12 sm:mt-48 sm:px-32"
      dir="rtl"
    >
      <h2 className="pb-5 text-4xl font-bold">הפרוייקטים שלנו</h2>

      <div className="mb-8 flex items-center justify-between gap-8">
        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="group flex items-center font-bold text-stone-800  hover:text-yellow-500"
        >
          סוג פרוייקט
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#000000"
            className="group-hover:fill-yellow-500"
          >
            <path d="M480-360 280-559.33h400L480-360Z" />
          </svg>
        </button>

        {/* View Toggle */}
        <div className="flex items-center">
          <button
            onClick={() => setView('grid')}
            className={`p-2 transition ${
              view === 'grid' ? 'text-yellow-500' : 'text-gray-500'
            }`}
          >
            {/* Grid Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8H3z" />
            </svg>
          </button>

          <button
            onClick={() => setView('list')}
            className={`p-2 transition ${
              view === 'list' ? 'text-yellow-500' : 'text-gray-500'
            }`}
          >
            {/* List Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <FilterSection
        showFilters={showFilters}
        filter={filter}
        setFilter={setFilter}
      />

      {/* Project Display */}
      {view === 'grid' ? (
        <GridView projects={filteredProjects} />
      ) : (
        <ListView projects={filteredProjects} />
      )}
    </div>
  );
}

export default ProjectsPage;

export async function loader() {
  const projects = await fetchPreviewProjects();
  return projects;
}
