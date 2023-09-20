import React, { Suspense, useState, useEffect } from 'react';
import ImageList from '../components/ImageList';
import Skeleton from '../components/Skeleton';
import { DragDropContextProvider } from '../context/DragDropContextProvider';
import { fetchData, fetchImages } from '../api/utils';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    setLoading(true);
    if (searchText) {
      fetchImages(searchText)
        .then((data) => {
          setTimeout(() => {
            setImages(data);
            setLoading(false);
          }, 2000);
        })
        .catch((error) => {
          console.error('Error fetching images:', error);
          setLoading(false);
        });
    } else {
      fetchData()
        .then((data) => {
          setTimeout(() => {
            setImages(data);
            setLoading(false);
          }, 1000);
        })
        .catch((error) => {
          console.error('Error fetching tags:', error);
          setLoading(false);
        });
    }
  }, [searchText]);

  const moveImage = (fromIndex, toIndex) => {
    const updateImages = [...images];
    const [movedImage] = updateImages.splice(fromIndex, 1);
    updateImages.splice(toIndex, 0, movedImage);
    setImages(updateImages);
  };

  return (
    <main>
      <h1>Welcome</h1>
      <h3>Random images from Pixabay</h3>
      <input
        type="text"
        name="search"
        value={searchText}
        onChange={handleInputChange}
        className="block w-full lg:max-w-xs rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 mb-4 text-gray-500"
      />
      {loading ? (
        <Skeleton />
      ) : (
        <DragDropContextProvider>
          <ImageList images={images} moveImage={moveImage} />
        </DragDropContextProvider>
      )}
    </main>
  );
}
