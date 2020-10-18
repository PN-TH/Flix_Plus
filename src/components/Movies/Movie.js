import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteContextProvider from '../_context/FavoriteContextProvider';
import './Movies.scss';

function Movie(props) {
  const imgUrl = 'https://image.tmdb.org/t/p/original';
  const { data } = props;

  return (
    <FavoriteContextProvider>
      <Link to={{ pathname: `/movie/${data.id}` }}>
        <img src={`${imgUrl}${data.poster_path}`} alt={data.title} />
      </Link>
    </FavoriteContextProvider>
  );
}
export default Movie;
