import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import translations from '../../translations/translations'

function ProjectGallery({ projects }) {
  const navigate = useNavigate()
  const { lang } = useLanguage()

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-2">
      {projects.map((project) => {
        const fullImage = project.imageUrl
        const lowResImage = fullImage.replace('/upload/', '/upload/w_20,q_10/')

        return (
          <div
            key={project.id}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden"
            onClick={() => navigate(`/projects/${project.id.split('_')[0]}`)}
          >
            <div className="duration-300 hover:brightness-50">
              <LazyLoadImage
                src={fullImage}
                alt="Building"
                placeholderSrc={lowResImage}
                effect="blur"
                className="aspect-[4/3] h-full w-full object-cover brightness-90  "
              />
            </div>
            {/* Image Description */}
            <span className="absolute bottom-4 right-4 origin-bottom bg-black px-8 py-2 text-lg opacity-80 transition-transform duration-300 group-hover:scale-y-100 sm:scale-y-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-lg sm:font-light sm:opacity-100 lg:text-xl">
              {translations[project.desc]?.[lang] || project.desc}
            </span>

            <span className="absolute bottom-0 left-0 h-6 w-[2px] origin-bottom bg-[#DFD0B8] transition-transform duration-300 group-hover:scale-y-100 sm:scale-y-0"></span>
            <span className="absolute bottom-0 left-0 h-[2px] w-6 origin-left bg-[#DFD0B8] transition-transform duration-300 group-hover:scale-x-100 sm:scale-x-0"></span>
            <span className="absolute right-0 top-0 h-6 w-[2px] origin-top bg-[#DFD0B8] transition-transform duration-300 group-hover:scale-y-100 sm:scale-y-0"></span>
            <span className="absolute right-0 top-0 h-[2px] w-6 origin-right bg-[#DFD0B8] transition-transform duration-300 group-hover:scale-x-100 sm:scale-x-0"></span>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectGallery
