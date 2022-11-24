export const API_KEY = 'dd75d9358e4456e8c1a33ce64131a5ff';

export async function fetchTrendingFilms() {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}

export async function fetchSearchFilms() {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}

export async function fetchDetailsFilms(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}

export async function fetchReviews(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY_API}&language=en-US&page=1`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}

export async function fetchCasts(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY_API}&language=en-US`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}

export async function fetchReviews(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY_API}&language=en-US&page=1`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}
