import axios from "axios";


axios.defaults.baseURL = 'https://api.themoviedb.org';
const options = {
    method: 'GET',
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjEyZjExN2UwNmY2MDE5OGY1ZTI3ZTYzMmEwNGE2MSIsInN1YiI6IjY0YjJiNWUxNzg1NzBlMDBjNmQ0NTQ1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RAysOSRtE4nE4mWHweiQSs8NW_JIokLQnS_489tlcD0',
        accept: 'application/json',
    },
};

export async function fetchTrendMovies () {
    const response = await axios.get('/3/trending/all/day?language=en-US', options);
    return response.data.results;
};

export async function fetchSearchMovies(query) {
    const response = await axios.get(`/3/search/movie?query=${query}&language=en-US`, options);
    return response.data.results;
};

export async function fetchMovieDetails(id) {
    const response = await axios.get(`/3/movie/${id}?language=en-US`);
    return response.data;
};

export async function fetchInformation(id, params) {
    const response = await axios.get(`/3/movie/${id}/${params}?language=en-US`, options);
    return response.data;
}




