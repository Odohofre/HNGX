import axios from 'axios';

const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;
const apiUrl = `https://pixabay.com/api/`;

export const getRandomImages = async () => {
  try {
    const response = await axios.get(
      `${apiUrl}?key=${apiKey}&q=code&per_page=20&orientation=horizontal`
    );
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching random images from Pixabay', error);
    return [];
  }
};

export const searchImages = async (query) => {
  try {
    const encodedQuery = encodeURIComponent(query);
    const response = await axios.get(
      `${apiUrl}?key=${apiKey}&q=${encodedQuery}&safesearch=true&orientation=horizontal`
    );
    return response.data.hits;
  } catch (error) {
    console.error('Error searching images with tags:', error);
    return [];
  }
};
