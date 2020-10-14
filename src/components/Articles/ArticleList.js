import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Article from './Article';
import { ArticleContext } from '../_context/ArticleContextProvider';
import Button from '@material-ui/core/Button';
import './Articles.scss';

function ArticleList() {
  const {
    movies,
    nextPage,
    previousPage,
    page_num,
    query,
    filterSearch,
  } = useContext(ArticleContext);

  return (
    <div className='container'>
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
      </div>
      <div className='movies-container'>
        {movies.map((item) => (
          <Article data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default ArticleList;
