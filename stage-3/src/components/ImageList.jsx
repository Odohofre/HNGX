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

  return (
    <div>
      {isLoading ? (
        <Skeleton />
      ) : (
        images.map((image) => <ImageCard image={image} />)
      )}
    </div>
  );
}
