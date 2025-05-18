import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'

function ImageLightbox({ imageUrl, open, onOpen }) {
  return (
    <div>
      <Lightbox
        open={open}
        close={() => onOpen(false)}
        slides={[{ src: imageUrl }]}
        carousel={{ finite: true }}
        plugins={[Zoom, Captions, Fullscreen]}
        render={{
          buttonPrev: true ? () => null : undefined,
          buttonNext: true ? () => null : undefined,
        }}
        styles={{
          container: {
            backgroundColor: 'rgba(23, 23, 23, 0.85)',
          },
        }}
      />
    </div>
  )
}

export default ImageLightbox
