import { useEffect, useState } from 'react';
import { fetchTrendingFilms } from 'fetchAPI';
import MoviesList from 'components/MoviesList';
export const Home = () => {
  const [moviesTranding, setMoviesTranding] = useState([]);

  useEffect(() => {
    fetchTrendingFilms()
      .then(movie => {
        setMoviesTranding(movie.results);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <main>
      <MoviesList moviesAr={moviesTranding} />
    </main>
  );
};
