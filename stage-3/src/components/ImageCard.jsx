import React from 'react';

export default function ImageCard({ image }) {
  return (
    <div key={image.id}>
      <img width="640" height="360" src={image.webformatURL} alt={image.tags} />
      <span className="tag">{image.tags}</span>
    </div>
  );
}
