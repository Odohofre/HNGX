import React, { useEffect, useState } from 'react';
import { getRandomImages } from '../api/api';
import Skeleton from './Skeleton';
import ImageCard from './ImageCard';

export default function ImageList() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await getRandomImages();
      setImages(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const moveImage = (fromIndex, toIndex) => {
    const updateImages = [...images];
    const [movedImage] = updateImages.splice(fromIndex, 1);
    updateImages.splice(toIndex, 0, movedImage);
    setImages(updateImages)
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] object-cover gap-x-8 gap-y-14 lg:gap-y-10">
      {isLoading ? (
        <Skeleton />
      ) : (
        images.map((image, index) => <ImageCard key={image.id} index={index} image={image} moveImage={moveImage} />)
      )}
    </div>
  );
}
