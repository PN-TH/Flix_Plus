import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Articles.scss';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../_context/FavoriteContextProvider';

function ArticleDetail(props) {
  const data = props.match.params;
  const [movie, setMovie] = useState([]);
  const imgUrl = 'https://image.tmdb.org/t/p/original';

  const { favorite } = useContext(FavoriteContext);
  const { addCart } = useContext(FavoriteContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        `https://api.themoviedb.org/3/movie/${data.id}?api_key=f22eb05a70b166bd4e2c1312e15d8e8b`
      );
      setMovie(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className='movie-detail-container'>
      <Link to={{ pathname: `/` }}>Home</Link>
      <Link to={{ pathname: `/favorite` }}>Favorite Movies</Link>

      <h1>{movie.title}</h1>
      <img src={`${imgUrl}${movie.poster_path}`} />
      <p>{movie.overview}</p>
      <Button
        variant='contained'
        color='primary'
        onClick={() => addCart(movie)}
      >
        Add to List
      </Button>
    </div>
  );
}

export default ArticleDetail;
