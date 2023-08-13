import axios from "axios";


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const options = {
    method: 'GET',
  headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjEyZjExN2UwNmY2MDE5OGY1ZTI3ZTYzMmEwNGE2MSIsInN1YiI6IjY0YjJiNWUxNzg1NzBlMDBjNmQ0NTQ1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RAysOSRtE4nE4mWHweiQSs8NW_JIokLQnS_489tlcD0',
        
    },
};


/*const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/authentication',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjEyZjExN2UwNmY2MDE5OGY1ZTI3ZTYzMmEwNGE2MSIsInN1YiI6IjY0YjJiNWUxNzg1NzBlMDBjNmQ0NTQ1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RAysOSRtE4nE4mWHweiQSs8NW_JIokLQnS_489tlcD0'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });*/






export async function fetchTrendMovies () {
    const response = await axios.get('trending/all/day?language=en-US', options);
    return response.data.results;
};

export async function fetchSearchMovies(query) {
    const response = await axios.get(`search/movie?query=${query}&language=en-US`, options);
    return response.data.results;
};

export async function fetchMovieDetails(id) {
    const response = await axios.get(`movie/${id}?language=en-US`);
    return response.data;
};

export async function fetchInformation(id, params) {
    const response = await axios.get(`movie/${id}/${params}?language=en-US`, options);
    return response.data;
}




