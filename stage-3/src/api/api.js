import axios from 'axios';

const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;
const apiUrl = `https://pixabay.com/api/`;

export const getRandomImages = async () => {
  try {
    const response = await axios.get(`${apiUrl}?key=${apiKey}&q=random&per_page=20`);
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching random images from Pixabay', error);
    return [];
  }
};
