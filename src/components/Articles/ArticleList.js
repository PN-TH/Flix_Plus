import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Article from './Article';
import { ArticleContext } from '../_context/ArticleContextProvider';
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
    <div>
      <button onClick={previousPage}>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>
      <div className='movies-container'>
        {movies.map((item) => (
          <Article data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default ArticleList;
