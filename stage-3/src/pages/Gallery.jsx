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
    const getImages = async () => {
      try {
        let data;
        if (searchText) {
          data = await fetchImages(searchText);
        } else {
          data = await fetchData(searchText);
        }
        setTimeout(() => {
          setImages(data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false);
      }
    };

    getImages();
  }, [searchText]);

  const moveImage = (fromIndex, toIndex) => {
    const updateImages = [...images];
    const [movedImage] = updateImages.splice(fromIndex, 1);
    updateImages.splice(toIndex, 0, movedImage);
    setImages(updateImages);
  };

  return (
    <main className="mx-5 my-10 space-y-4">
      <div>
        <h1 className="text-2xl">Welcome</h1>
        <h3>Use the arrows to arrange the images</h3>
      </div>
      <input
        type="text"
        name="search"
        placeholder="Search tags"
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
