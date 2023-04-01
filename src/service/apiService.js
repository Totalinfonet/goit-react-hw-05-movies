import axios from 'axios';

const TRENDING_API_URL = 'https://api.themoviedb.org/3/trending/movie/day';

async function getTrendingMovies() {
  try {
    const response = await axios.get(TRENDING_API_URL, {
      params: {
        api_key: '68685731643ea27d6deb89fd83fc916a',
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting trending movies');
  }
}

export default getTrendingMovies;
