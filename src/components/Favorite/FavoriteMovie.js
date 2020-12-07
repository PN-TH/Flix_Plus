import React, { useContext } from 'react';
import { FavoriteContext } from '../_context/FavoriteContextProvider';
import "./Favorite.scss"
import { Link } from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';

function ArticleList() {
  const imgUrl = 'https://image.tmdb.org/t/p/original';

  const { favoriteMovies, handleDelete } = useContext(FavoriteContext);

  return (
    <div className="favorite-container">
      {favoriteMovies.map((fav, id) => (

        <div key={fav.id}>
          <ClearIcon 
          style={{position: "absolute", Zindex: 1000}} 
          color="primary" 
          onClick={() => handleDelete(id)}/>
          <Link to={{ pathname: `/movie/${fav.id}` }}>
            <div className="aaa">
              
              {fav.poster_path ? <img src={`${imgUrl}${fav.poster_path}`} alt={fav.title} /> : ''}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
