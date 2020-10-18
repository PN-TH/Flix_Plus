import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [page_num, setPageNum] = useState(1);
  const [total_pages, setTotalPages] = useState(null);
  const [query, SetQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [checked, setChecked] = React.useState(false);
  const [year, setYear] = useState('');

  const URL = 'https://api.themoviedb.org/3/';
  const API_KEY = '?api_key=f22eb05a70b166bd4e2c1312e15d8e8b';
  const language = '&language=fr';

  let filterLink = 'discover/movie';
  if (query.length > 2) {
    filterLink = 'search/movie';
  } else {
    filterLink = 'discover/movie';
  }

  useEffect(() => {
    axios
      .get(
        `${URL}${filterLink}${API_KEY}${language}&query=${query}${ratingFilter}primary_release_year=${year}&page=${page_num}`
      )
      .then((response) => {
        setMovies(response.data.results.filter((movie) => movie.poster_path));
      })
      .catch(console.error);
  }, [query, page_num, ratingFilter, checked, movies, year]);

  const filterSearch = (event) => {
    let term = event.target.value;
    filterLink = 'search/movie';
    SetQuery((query) => term);
  };

  const nextPage = () => {
    setPageNum((page_num) => (page_num += 1));
  };

  const previousPage = () => {
    if (page_num > 1) {
      setPageNum((page_num) => (page_num -= 1));
    }
  };

  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
    if (checked) {
      setRatingFilter((ratingFilter) => (ratingFilter = ''));
    } else {
      setRatingFilter(
        (ratingFilter) => (ratingFilter = '&sort_by=vote_count.desc')
      );
    }
  };

  const yearFilter = (event) => {
    let yearToFilter = event.target.value;
    setYear((year) => yearToFilter);
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        query,
        page_num,
        total_pages,
        filterSearch,
        nextPage,
        previousPage,
        ratingFilter,
        handleChangeCheckBox,
        checked,
        yearFilter,
        year,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
