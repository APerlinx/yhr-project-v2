import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function TeamMember({ image, name, description }) {
  return (
    <div className="justify-items-center text-center">
      <LazyLoadImage
        src={image}
        alt={name}
        effect="blur"
        className="h-64 w-72 "
      />
      <h5 className="text-xl font-bold">{name}</h5>
      <p className="text-lg leading-relaxed">
        <span dir="rtl">{description}</span>
      </p>
    </div>
  );
}

export default TeamMember;
