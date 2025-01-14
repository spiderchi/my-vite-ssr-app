import axios from 'axios';

const NEWS_API_KEY = '52378e1aee44411db772d26d1b31add3';
const NEWS_API_URL = 'https://newsapi.org/v2/everything';

export const fetchNews = async (query) => {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        q: query,
        from: '2025-01-01',
        sortBy: 'publishedAt',
        apiKey: NEWS_API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
