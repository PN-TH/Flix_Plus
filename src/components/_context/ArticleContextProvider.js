import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ArticleContext = createContext();

const ArticleContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [page_num, setPageNum] = useState(1);
  const [total_pages, setTotalPages] = useState(null);
  const [query, SetQuery] = useState('');

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
        `${URL}${filterLink}${API_KEY}${language}&query=${query}&page=${page_num}`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch(console.error);
  }, [query, page_num]);

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

  // fetchMovies(search) {
  //   fetch(URL + `${API_KEY}` + language + query + search + "&page=" + this.state.page_num)
  //     .then(res => res.json())
  //     .then(json => this.setState({ movies: json.results, total_pages: json.total_pages }));
  // }

  return (
    <ArticleContext.Provider
      value={{
        movies,
        query,
        page_num,
        total_pages,
        filterSearch,
        nextPage,
        previousPage,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContextProvider;
