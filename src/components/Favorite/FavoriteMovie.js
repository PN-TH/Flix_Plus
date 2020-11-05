import React, { useContext } from 'react';
import { FavoriteContext } from '../_context/FavoriteContextProvider';
import "./Favorite.scss"
import { Link } from 'react-router-dom';

function ArticleList() {
  const imgUrl = 'https://image.tmdb.org/t/p/original';

  const { favoriteMovies } = useContext(FavoriteContext);

  return (
    <div className="favorite-container">
      {favoriteMovies.map((fav) => (

        <div key={fav.id}>
          <Link to={{ pathname: `/movie/${fav.id}` }}>
            {fav.poster_path ? <img src={`${imgUrl}${fav.poster_path}`} alt={fav.title} /> : ''}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
