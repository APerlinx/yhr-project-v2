import { fetchSingleProject } from '../../../services/apiCloudinary';
import { useLoaderData } from 'react-router-dom';
import translations from '../../../translations/translations';
import { useLanguage } from '../../../context/LanguageContext';

function ProjectDetails() {
  const project = useLoaderData();
  const { lang } = useLanguage();

  return (
    <div
      className="mt-32 grid min-h-screen grid-rows-[auto_1fr] gap-12 border-b-2 border-[#948979] px-8 pb-12 sm:mt-48 sm:px-32"
      dir="rtl"
    >
      {/* Project Title */}
      <div
        className="relative -mx-32 flex h-[441px] items-center justify-center bg-cover bg-center sm:h-[500px] md:h-[541px] lg:h-[600px]"
        style={{ backgroundImage: `url(${project[0].imageUrl})` }}
      >
        {/* Left gradient overlay */}
        <div className="absolute inset-y-0 left-0 w-3/6 bg-gradient-to-r from-[#171717]/100 to-[#171717]/20" />

        {/* Right gradient overlay */}
        <div className="absolute inset-y-0 right-0 w-3/6 bg-gradient-to-l from-[#171717]/100 to-[#171717]/20" />

        {/* Title */}
        <h1 className="relative z-10 px-4 text-center text-2xl font-light text-[#f3f3f3] sm:text-5xl">
          {translations[project[0].desc]?.[lang]}
        </h1>

        <span className="absolute bottom-0 left-5 h-[2px] w-40 origin-left bg-[#DFD0B8] bg-gradient-to-r from-[#171717]/100 to-[#171717]/20  "></span>
        <span className="absolute right-5 top-0 h-[2px] w-40 origin-right bg-[#DFD0B8] bg-gradient-to-l from-[#171717]/100 to-[#171717]/20  "></span>
      </div>

      {/* Images */}
      <div className="mb-8 grid w-full grid-cols-2 items-center justify-items-center gap-8">
        {project.map((img, index) =>
          index ? (
            <img
              src={img.imageUrl}
              alt={`Slide ${index}`}
              key={img.id}
              className={`${project.length === 1 ? 'col-span-2' : ''}`}
            />
          ) : (
            ''
          )
        )}
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
