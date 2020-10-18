import React, { useContext } from 'react';
import Movie from './Movie';
import { MoviesContext } from '../_context/MoviesContextProvider';
import Button from '@material-ui/core/Button';
import './Movies.scss';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function MovieList() {
  const {
    movies,
    nextPage,
    previousPage,
    page_num,
    query,
    filterSearch,
    handleChangeCheckBox,
    checked,
    yearFilter,
    year,
  } = useContext(MoviesContext);

  return (
    <div className='container'>
      <select value={year} onChange={yearFilter}>
        <option value='2009'>2009</option>
        <option value='2010'>2010</option>
      </select>
      <div className='changePage-btn'>
        <Button
          style={{
            borderRadius: 35,
            backgroundColor: 'rgb(8, 68, 63)',
            padding: '12px 24px',
            fontSize: '10px',
            color: 'rgb(199, 199, 199)',
            margin: '10px',
          }}
          variant='contained'
          color='#cccccc'
          onClick={previousPage}
        >
          Previous Page
        </Button>
        <Button
          style={{
            borderRadius: 35,
            backgroundColor: 'rgb(8, 68, 63)',
            padding: '12px 24px',
            fontSize: '10px',
            color: 'rgb(199, 199, 199)',
            margin: '10px',
          }}
          className='btn'
          variant='contained'
          color='primary'
          onClick={nextPage}
        >
          Next Page
        </Button>
        <div className='checkbox'>
          {query.length < 3 ? (
            <FormControlLabel
              control={
                <Checkbox
                  label='Best Movies'
                  checked={checked}
                  onChange={handleChangeCheckBox}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                  style={{
                    color: 'rgb(199, 199, 199)',
                    margin: '10px',
                    fontSize: '5px',
                  }}
                />
              }
              label={
                <span
                  style={{
                    fontSize: '12px',
                    fontFamily: 'Times New Roman',
                    marginRight: '10px',
                  }}
                >
                  Best Movies
                </span>
              }
              style={{
                fontSize: 5,
                color: 'rgb(199, 199, 199)',
                margin: '10px',
              }}
            />
          ) : (
            ''
          )}
        </div>
      </div>
      <div className='movies-container'>
        {movies.map((item) => (
          <Movie data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
