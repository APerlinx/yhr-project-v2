import { useNavigate } from 'react-router-dom';

function GridView({ projects }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group flex cursor-pointer flex-col overflow-hidden"
          onClick={() => navigate(`/projects/${project.projectName}`)}
        >
          {/* Image */}
          <img
            src={project.imageUrl}
            alt={project.caption}
            className=" h-fit w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Title */}
          <div className="py-2 sm:py-4">
            <h3 className="text-lg font-bold text-stone-800 sm:mb-2 sm:text-xl">
              {project.caption}
            </h3>

            {!project.isLast && (
              <button className="flex items-center gap-2 text-sm text-yellow-500 transition-opacity duration-300 group-hover:opacity-100 sm:text-lg sm:opacity-0">
                צפה בפרוייקט
                <span className="inline-block transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:-translate-y-4 sm:opacity-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#EAC452"
                  >
                    <path d="M520-200 80-480l440-280-137 240h497v80H383l137 240Z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GridView;
