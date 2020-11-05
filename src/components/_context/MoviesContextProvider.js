import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const MoviesContext = createContext();
const API_KEY = '?api_key=f22eb05a70b166bd4e2c1312e15d8e8b';
const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [page_num, setPageNum] = useState(1);
  const [total_pages, setTotalPages] = useState(null);
  const [query, SetQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [actorFilter, setActorFilter] = useState('');
  const [actorID, setActorID] = useState('');
  const [actorName, setActorName] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [checked, setChecked] = React.useState(false);
  const [year, setYear] = useState('');
  const [actors, setActors] = useState([]);
  const [actorQuery, setActorQuery] = useState(`person/popular${API_KEY}`)
  const [loading, setLoading] = useState(true)

  const URL = 'https://api.themoviedb.org/3/';
 
  const language = '&language=fr-FR';

  let filterLink = 'discover/movie';
  let queryLink = ''
  if (query.length > 2) {
    filterLink = 'search/movie';
    queryLink = '&query='
  } else {
    filterLink = 'discover/movie';
  }

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `${URL}${filterLink}${API_KEY}${language}${queryLink}${query}${ratingFilter}
        ${releaseYear}${year}${actorFilter}${actorID}&page=${page_num}`
      )
      .then((response) => {
        setTimeout(function(){ 
        setMovies(response.data.results.filter((movie) => movie.poster_path));
        setTotalPages(response.data.total_pages);
        setLoading(false)
      }, 1000);
      })
      .catch(console.error)
    }, [query, page_num, ratingFilter, checked, year, releaseYear, actorID, actorFilter, filterLink, queryLink]);

  useEffect(() => {
    axios
      .get(`${URL}${actorQuery}`)
      .then((response) => {
        setActors(response.data.results.filter(el => el.known_for_department === "Acting"));
      })
      .catch(console.error);
  }, [actorName, actorQuery]);

  const handleSearchMovies = (event) => {
      setLoading(true)
      let value = event.target.value; 
      setTimeout(function(){ 
        filterLink = 'search/movie';
        SetQuery((query) => value);
        setActorID("");
        setRatingFilter("")
        setReleaseYear("");
        setYear("");
      }, 1000);
  };

  const handleSearchActors = (event, values) => {
    setActorName(event.target.value);
    if(actorName.length > 0){
      setActorQuery(`search/person${API_KEY}&query=${actorName}`)
    } else {
      setActorQuery(`person/popular${API_KEY}`)
      setActorID("")
      setActorFilter("");
    }
  };

  const handleId = (event, values) => {
    if(values === null){
      setActorID("")
      setActorFilter("");
      setActorQuery(`person/popular${API_KEY}`)
      setActorName("")
    } else {
      setActorID(values.id)
      setActorFilter("&with_cast=");
    }
  }

  const handlePaginate = (event, value) => {
    setPageNum((page_num) => (page_num = value));
  };

  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
    if (checked) {
      setRatingFilter((ratingFilter) => (ratingFilter = ''));
    } else {
      setRatingFilter('&sort_by=vote_count.desc&vote_count.gte=1000'
      );
    }
  };

  const yearFilter = (event) => {
    if (query < 1) {
      SetQuery((query) => '');
      filterLink = 'discover/movie';
      let yearToFilter = event.target.value;
      setReleaseYear((releaseYear) => `&primary_release_year=`);
      setYear((year) => yearToFilter);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        query,
        page_num,
        total_pages,
        handleSearchMovies,
        ratingFilter,
        handleChangeCheckBox,
        checked,
        yearFilter,
        year,
        handlePaginate,
        handleSearchActors,
        actorID,
        actors,
        handleId,
        loading
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
