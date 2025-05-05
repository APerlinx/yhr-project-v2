import { useNavigate } from 'react-router-dom';

function GridView({ projects }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className={`group aspect-[1/1] overflow-hidden`}
            onClick={() => navigate(`/projects/${project.projectName}`)}
          >
            <img
              src={project.imageUrl}
              alt={project.caption}
              className="brightness-77 h-full w-full object-cover filter transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        );
      })}
    </div>
  );
}

export default GridView;
