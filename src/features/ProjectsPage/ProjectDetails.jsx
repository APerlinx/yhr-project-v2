import { fetchSingleProject } from '../../services/apiCloudinary';
import { useLoaderData, useNavigate } from 'react-router-dom';

function ProjectDetails() {
  const projectData = useLoaderData();
  const navigate = useNavigate();
  const [firstImage, ...otherImages] = projectData;
  const { nextProject, prevProject } = firstImage;

  return (
    <div
      className="relative mt-32 min-h-screen w-screen gap-8 border-b-2 border-stone-300 px-8 pb-12 sm:mt-48 sm:px-32"
      dir="rtl"
    >
      {/* Project Title */}
      <h1 className="pb-5 text-right text-4xl font-bold">
        {firstImage.caption}
      </h1>

      {/* Project Details */}
      <div className="flex items-center justify-evenly pb-8">
        <div className="flex flex-col items-center">
          <span className=" pb-1 text-stone-400 sm:text-base">מיקום</span>
          <span className="sm:text-xl">{firstImage.locationHEB}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className=" pb-1 text-stone-400 sm:text-base">סוג פרוייקט</span>
          <span className="sm:text-xl">{firstImage.projectTypeHEB}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className=" pb-1 text-stone-400 sm:text-base">סטטוס</span>
          <span className="sm:text-xl">{firstImage.year}</span>
        </div>
      </div>

      {/* First Image */}
      <div className="mb-8">
        <img
          src={firstImage.imageUrl}
          alt={firstImage.alt}
          className="h-auto w-full object-cover"
        />
        <p className="mt-4 py-12 text-center text-sm font-semibold text-stone-600 sm:text-xl md:text-3xl">
          {firstImage.alt}.
        </p>
      </div>

      {/* Remaining Images in a Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {otherImages.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.imageUrl}
              alt={image.caption}
              className="h-auto w-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* More Projects Section */}
      <div className="mt-12 pt-8 ">
        <div className="flex items-end justify-center gap-8">
          {prevProject && prevProject !== 'none' && (
            <div
              className="cursor-pointer text-center"
              onClick={() => navigate(`/projects/${prevProject}`)}
            >
              <p className="mt-4 text-sm text-stone-600 sm:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 24"
                  width="100"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-yellow-500 transition-transform duration-300 hover:translate-x-2"
                >
                  <line x1="2" y1="12" x2="98" y2="12" />
                  <polyline points="92 8, 98 12, 92 16" />
                </svg>{' '}
              </p>
            </div>
          )}
          <span className="text-sm font-semibold sm:text-lg">
            עוד פרוייקטים
          </span>
          {nextProject && nextProject !== 'none' && (
            <div
              className="cursor-pointer text-center "
              onClick={() => navigate(`/projects/${nextProject}`)}
            >
              <p className="mt-4 text-sm text-stone-600 sm:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 24"
                  width="100"
                  height="24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-yellow-500 transition-all duration-300 hover:-translate-x-2"
                >
                  <line x1="98" y1="12" x2="2" y2="12" />
                  <polyline points="8 8, 2 12, 8 16" />
                </svg>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;

export async function loader({ params }) {
  const { projectName } = params;
  const data = await fetchSingleProject(projectName);
  return data;
}
