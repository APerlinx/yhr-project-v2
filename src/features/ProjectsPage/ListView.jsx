function ListView({ projects }) {
  const textDesign = 'text-base font-semibold text-stone-600 py-1 md:py-0s';
  return (
    <div className="space-y-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group grid cursor-pointer grid-cols-[2fr_1fr_1fr] items-center gap-8 border-b border-stone-300 pb-4"
        >
          {/* Image */}
          <div className="flex items-center gap-4">
            <img
              src={project.imageUrl}
              alt={project.caption}
              className="hidden h-32 w-48 object-cover custom-sm:inline-block"
            />

            <h3 className="py-1.5 text-xl font-bold text-stone-800 transition-colors duration-200 group-hover:text-yellow-500">
              {project.caption}
            </h3>
          </div>

          {/* Year and Place */}
          <p className={textDesign}>{project.location}</p>
          <p className={textDesign}> הושלם ב- {project.year}</p>
        </div>
      ))}
    </div>
  );
}

export default ListView;
