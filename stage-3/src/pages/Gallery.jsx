import React, { Suspense, useState, useEffect } from 'react';
import ImageList from '../components/ImageList';
import Skeleton from '../components/Skeleton';
import { DragDropContextProvider } from '../context/DragDropContextProvider';
import { fetchData, fetchImages } from '../api/utils';
import { useNavigate } from 'react-router-dom';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <main className="mx-5 mt-3 mb-10 space-y-4">
      <div>
        <div className='flex items-center justify-between mb-4'>
          <h1 className="text-2xl">Welcome</h1>
          <button
            type="submit"
            onClick={handleLogout}
            className="text-black px-3 text-center font-medium py-2 lg:w-36 bg-[#F9ED32] hover:text-label rounded-[10px]"
          >
            Logout
          </button>
        </div>
        <h3>Use the arrows to arrange the images</h3>
      </div>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Search tags"
          value={searchText}
          onChange={handleInputChange}
          className="block w-full lg:max-w-xs rounded-md  px-1.5 mb-4 tex-gray-500 bg-input/40 text-black/50 py-2.5 pl-4 mt-1 focus:ring-black focus:outline-none focus:ring-2"
        />
      </div>
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
