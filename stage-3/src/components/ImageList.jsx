import React from 'react';
import ImageCard from './ImageCard';

export default function ImageList({ images, moveImage }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] object-cover gap-x-4 gap-y-5 lg:gap-y-10">
      {images.map((image, index) => (
        <ImageCard
          key={image.id}
          index={index}
          image={image}
          moveImage={moveImage}
        />
      ))}
    </div>
  );
}
