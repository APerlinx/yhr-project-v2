import { useNavigate } from 'react-router-dom';

function GridView({ projects }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4">
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
        </div>
      ))}
    </div>
  );
}

export default GridView;
