import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function GridView({ projects }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {projects.map((project) => {
        const fullImage = project.imageUrl;
        const lowResImage = fullImage.replace('/upload/', '/upload/w_20,q_10/');

        return (
          <div key={project.id} className="group aspect-[1/1] overflow-hidden">
            <LazyLoadImage
              src={fullImage}
              alt="Building"
              placeholderSrc={lowResImage}
              effect="blur"
              className="aspect-[1/1] h-full w-full object-cover brightness-90"
            />
          </div>
        );
      })}
    </div>
  );
}

export default GridView;
