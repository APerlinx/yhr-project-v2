import { useNavigate } from 'react-router-dom'

export default function ProjectGallery({ previewProjects }) {
  const navigate = useNavigate()

  console.log(previewProjects)
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 ">
      {previewProjects.map((project) => (
        <button
          className="group relative aspect-[4/3] cursor-pointer"
          key={project[0].id}
          onClick={() => navigate(`/projects/${project[0].code}`)}
        >
          <div className="duration-300 hover:shadow-lg hover:brightness-50">
            <div className="justify-items-center overflow-hidden  rounded-md border-[1px] border-gray-400/5 ">
              {/* Project title */}
              <h2 className="pt-6 text-center text-2xl font-bold tracking-wide lg:text-3xl ">
                {project[0].title}
              </h2>
              {/* 2x2 image grid */}
              <div className="grid  max-w-full grid-cols-2 grid-rows-2 gap-2 p-12">
                {project.map((item) => (
                  <div
                    key={item.id}
                    className="flex aspect-square items-center justify-center overflow-hidden"
                  >
                    <img
                      src={item.imageUrl}
                      alt={`Preview ${item.id} + 1}`}
                      className="h-full w-full object-cover shadow-2xl brightness-90"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
