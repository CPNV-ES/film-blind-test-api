const axios = require('axios');

// Cache for movie details (in production, use Redis or similar)
const cache = new Map();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

const tmdbApi = axios.create({
    baseURL: process.env.TMDB_BASE_URL,
    params: {
        api_key: process.env.TMDB_API_KEY
    }
});

/**
 * Get random popular movies
 * @param {number} count Number of movies to fetch
 * @returns {Promise<Array>} Array of movies
 */
exports.getRandomMovies = async (count = 4) => {
    try {
        // Get popular movies
        const response = await tmdbApi.get('/movie/popular', {
            params: {
                language: 'en-US',
                page: Math.floor(Math.random() * 5) + 1 // Random page between 1-5
            }
        });

        // Shuffle and take required number of movies
        const movies = response.data.results.map(movie => ({
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            poster_path: movie.poster_path,
            vote_average: movie.vote_average
        }));

        return movies
            .sort(() => 0.5 - Math.random())
            .slice(0, count);
    } catch (error) {
        console.error('Error fetching random movies:', error.message);
        throw new Error('Failed to fetch random movies');
    }
};

/**
 * Get movie details by ID
 * @param {string} movieId TMDB movie ID
 * @returns {Promise<Object>} Movie details
 */
exports.getMovieDetails = async (movieId) => {
    try {
        const response = await tmdbApi.get(`/movie/${movieId}`, {
            params: {
                language: 'en-US',
                append_to_response: 'credits'
            }
        });

        return {
            title: response.data.title,
            description: response.data.overview,
            poster: `${process.env.TMDB_IMAGE_URL}${response.data.poster_path}`,
            rating: response.data.vote_average,
            url: response.data.homepage,
            year: response.data.release_date.split('-')[0]
        };
    } catch (error) {
        console.error(`Error fetching movie details for ${movieId}:`, error.message);
        throw new Error('Failed to fetch movie details');
    }
};

/**
 * Search movies by title
 * @param {string} query Search query
 * @returns {Promise<Array>} Array of movies
 */
exports.searchMovies = async (query) => {
    try {
        const response = await tmdbApi.get('/search/movie', {
            params: {
                query,
                language: 'en-US',
                page: 1
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error searching movies:', error.message);
        throw new Error('Failed to search movies');
    }
};

/**
 * Clear the movie cache
 * @param {string} [movieId] Optional specific movie ID to clear
 */
exports.clearCache = (movieId) => {
    if (movieId) {
        cache.delete(movieId);
    } else {
        cache.clear();
    }
}; 