import React from 'react';
import {Paper} from '@material-ui/core'
import "./Carousel.scss"
import { Link } from 'react-router-dom';

export default function Item(props)
{
    const imgUrl = 'https://image.tmdb.org/t/p/original';
    return (
        <>
                <Paper>
                    <div className="carousel-container">
                    
                    <div className="img-Wrapper">
                    <Link to={{ pathname: `/movie/${props.item.id}` }}>
                        <img 
                        src={`${imgUrl}${props.item.backdrop_path}`} 
                        alt={props.item.title}
                        style={{width: "100%"}}/>
                    </Link>
                    </div>

                    </div>
            </Paper>
        </>
            
    )
}