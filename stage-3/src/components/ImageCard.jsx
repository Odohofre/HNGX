import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

export default function ImageCard({ image, index, moveImage }) {
  const [{ isDragging }, refDrag] = useDrag({
    type: 'IMAGE',
    item: { id: image.id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, refDrop] = useDrop({
    accept: 'IMAGE',
    hover: (draggedImage) => {
      if (draggedImage.index !== index) {
        moveImage(draggedImage.index, index);
        draggedImage.index = index;
      }
    },
  });

  return (
    <div
      ref={refDrop}
      className={`relative ${
        isDragging
          ? 'opacity-50 transform scale-90 transition-transform duration-300'
          : 'opacity-100'
      } rounded-lg overflow-hidden borde cursor-move h-[135px`}
    >
      <img loading="lazy" src={image.webformatURL} alt={image.tags} />
      <span className="align-center mt-1">{image.tags}</span>
      <div
        className="absolute top-[5%] right-[10%] bg-white/30 backdrop-blur-sm rounded-full p-1"
        ref={refDrag}
        // draggable="true"
      >
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 572.156 572.156"
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <g>
              <polygon points="495.405,241.769 418.657,197.457 418.657,258.115 314.042,258.115 314.042,153.498 374.699,153.498 330.389,76.751 286.078,0 241.769,76.751 197.457,153.498 258.115,153.498 258.115,258.115 153.498,258.115 153.498,197.457 76.751,241.767 0,286.078 76.751,330.387 153.498,374.699 153.498,314.042 258.115,314.042 258.115,418.657 197.457,418.657 241.767,495.405 286.078,572.156 330.387,495.405 374.699,418.657 314.042,418.657 314.042,314.042 418.657,314.042 418.657,374.699 495.405,330.389 572.156,286.078 "></polygon>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
