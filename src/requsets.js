const api_key = process.env.REACT_APP_API_KEY;
const requests = {
  popular: `movie/popular?api_key=${api_key}&language=en-US&page=1`,
  top_rated: `movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
  upcoming: `movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
  trending: `trending/all/day?api_key=${api_key}`,
  action: `discover/movie?api_key=${api_key}&with_genres=28`,
  horror: `discover/movie?api_key=${api_key}&with_genres=27`,
  comedy: `discover/movie?api_key=${api_key}&with_genres=35`,
};

export default requests;
