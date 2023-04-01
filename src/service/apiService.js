import axios from 'axios';

const API_KEY = '68685731643ea27d6deb89fd83fc916a';

const TRENDING_API_URL = 'https://api.themoviedb.org/3/trending/movie/day';

const MOVIE_INFO_API_URL = 'https://api.themoviedb.org/3/movie/';

async function getTrendingMovies() {
  try {
    const response = await axios.get(TRENDING_API_URL, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting trending movies');
  }
}

async function getMovieInfo(movieId) {
  try {
    const response = await axios.get(`${MOVIE_INFO_API_URL}/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting movie info');
  }
}

const apiService = {
  getTrendingMovies,
  getMovieInfo,
};

export default apiService;
