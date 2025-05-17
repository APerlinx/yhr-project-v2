import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

function ImageLightbox({ imageUrl, open, onOpen }) {
  return (
    <div className="">
      <img
        src={imageUrl}
        alt="enlargeable"
        onClick={() => onOpen(true)}
        className="cursor-pointer"
      />

      <Lightbox
        open={open}
        close={() => onOpen(false)}
        slides={[{ src: imageUrl }]}
        carousel={{ finite: true }}
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
  );
}

export default ImageLightbox;
