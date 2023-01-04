import axios from 'axios';

const BASE_URL = 'https://pixabay.com';

export async function fetchImages(name, page, perPage) {
  const params = new URLSearchParams({
    key: '32600277-e6ace95d8597489ee8b4c0ece',
    q: name,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: perPage,
  });

  try {
    const response = await axios.get(`${BASE_URL}/api/?${params}`);
    return response;
  } catch (error) {
    return error;
  }
}
