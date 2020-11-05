import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Carousel from 'react-material-ui-carousel'
import Item from './CarouselItem'
import "./Carousel.scss"


export default function Example(props)
{
    const apiKey = "https://api.themoviedb.org/3/movie/now_playing?api_key=f22eb05a70b166bd4e2c1312e15d8e8b&page=1"
    useEffect(() => {
        axios
          .get(
            apiKey
          )
          .then((response) => {
            setMoviesAtCinema(response.data.results);
          })
          .catch(console.error);
      }, []);

    const [moviesAtCinema, setMoviesAtCinema] = useState([]);
 
    return (
        <div className="slider-container">
            <Carousel>
                {
                    moviesAtCinema.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </div>
    )
}