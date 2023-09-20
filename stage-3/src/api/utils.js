import { getRandomImages, searchImages } from './api';


export const fetchData = async () => {
  const data = await getRandomImages();

  return data;
};

export const fetchImages = async (text) => {
  if (text) {
    const data = await searchImages(text);
    return data;
  }
};
