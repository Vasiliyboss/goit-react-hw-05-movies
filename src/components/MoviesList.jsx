import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ moviesAr }) => {
  const location = useLocation();
  if (moviesAr.length === 0) {
    return;
  } else {
    return (
      <ul>
        {moviesAr.map(movie => (
          <div key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title ? movie.title : movie.name}
            </Link>
          </div>
        ))}
      </ul>
    );
  }
};

export default MoviesList;
