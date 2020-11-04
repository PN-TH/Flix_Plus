import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const MoviesContext = createContext();

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

  const URL = 'https://api.themoviedb.org/3/';
  const API_KEY = '?api_key=f22eb05a70b166bd4e2c1312e15d8e8b';
  const language = '&language=fr-FR';

  let filterLink = 'discover/movie';
  let queryLink = ''
  if (query.length > 2) {
    filterLink = 'search/movie';
    queryLink = '&query='
  } else {
    filterLink = 'discover/movie';
  }
  let filterLinkActor = `person/popular${API_KEY}`
  if(actorName.length > 0){
    filterLinkActor = `search/person${API_KEY}&query=${actorName}`
  } else {
    filterLinkActor = `person/popular${API_KEY}`
  }

  useEffect(() => {
    axios
      .get(
        `${URL}${filterLink}${API_KEY}${language}${queryLink}${query}${ratingFilter}
        ${releaseYear}${year}${actorFilter}${actorID}&page=${page_num}`
      )
      .then((response) => {
        setMovies(response.data.results.filter((movie) => movie.poster_path));
        setTotalPages(response.data.total_pages);
      })
      .catch(console.error);
  }, [query, page_num, ratingFilter, checked, year, releaseYear, actorID, actorName]);

  useEffect(() => {
    axios
      .get(`${URL}${filterLinkActor}`)
      .then((response) => {
        setActors(response.data.results.filter(el => el.known_for_department === "Acting"));
      })
      .catch(console.error);
  }, [actorName, filterLinkActor]);

  const handleSearchMovies = (event) => {
    let term = event.target.value;
    SetQuery((query) => term);
    filterLink = 'search/movie';
  };

  const handleSearchActors = (event, values) => {
    console.log(event.target.value)
    console.log("name " + actorName)
    setActorName((actorName) => event.target.value);
    setActorFilter((actorFilter) => (actorFilter = '&with_cast='));
    console.log(actors)
  };

  const handleId = (values) => {
    setActorID((actorID) => values.id)
  }



  const handlePaginate = (event, value) => {
    setPageNum((page_num) => (page_num = value));
  };

  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
    if (checked) {
      setRatingFilter((ratingFilter) => (ratingFilter = ''));
    } else {
      setRatingFilter(
        (ratingFilter) =>
          (ratingFilter = '&vote_count.gte=1000&sort_by=vote_average.desc')
      );
    }
  };

  const yearFilter = (event) => {
    if (query < 3) {
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
        handleId
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
