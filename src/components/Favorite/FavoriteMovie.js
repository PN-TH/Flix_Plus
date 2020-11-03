import React, { useContext } from 'react';
import { FavoriteContext } from '../_context/FavoriteContextProvider';

function ArticleList() {
  const imgUrl = 'https://image.tmdb.org/t/p/original';

  const { favoriteMovies } = useContext(FavoriteContext);

  return (
    <div>
      {favoriteMovies.map((fav) => (
        <div>
          <h1>{fav.title}</h1>
          <img src={`${imgUrl}${fav.poster_path}`} alt={fav.title} />
          <p>{fav.overview}</p>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
