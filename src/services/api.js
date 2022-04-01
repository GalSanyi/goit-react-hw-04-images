import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '25003367-734d14b32e98f9c9fd7c27c2f';
const fetchImages = async (query, page) => {
  const response = await axios.get(
    `.?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
export default fetchImages;
