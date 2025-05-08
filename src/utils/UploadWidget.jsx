import { useEffect, useRef } from 'react';

export default function UploadWidget() {
  const widgetRef = useRef();

  useEffect(() => {
    if (window.cloudinary) {
      const cloudinary = window.cloudinary;

      widgetRef.current = cloudinary.createUploadWidget(
        {
          cloudName: 'dayojijed',
          uploadPreset: 'yhrProject',
        },
        (error, result) => {
          if (!error && result.event === 'success') {
            // console.log('Upload success:', result.info);
          }
        }
      );
    }
  }, []);

  return (
    <button
      onClick={() => widgetRef.current && widgetRef.current.open()}
      className="mt-8 rounded bg-green-600 px-4 py-2 hover:bg-green-700"
    >
      Upload Images
    </button>
  );
}
