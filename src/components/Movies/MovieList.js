import React, { useContext } from 'react';
import Movie from './Movie';
import { MoviesContext } from '../_context/MoviesContextProvider';
import './Movies.scss';
// Material-UI imports
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Pagination from '@material-ui/lab/Pagination';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import ActorList from './ActorList';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    color: 'black',
    minWidth: 90,
  },
  select: {
    color: 'whitesmoke',
  },
  FormControlLabel: {
    color: 'whitesmoke',
    fontSize: '2px',
    height: '45px',
    borderRadius: '10px',
  },
  inputLabel: {
    color: 'whitesmoke',
    fontSize: 14,
    textAlign: 'center',
   
  },
  pagination: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(3),
  },
  menuItem: {},
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  checkBox: {
    color: 'whitesmoke',
    margin: '10px',
    fontSize: '5px',
  },
}));

function MovieList() {
  const classes = useStyles();
  const {
    movies,
    total_pages,
    query,
    handleSearchMovies,
    handleChangeCheckBox,
    checked,
    yearFilter,
    year,
    handlePaginate
  } = useContext(MoviesContext);

  let actualYear = new Date().getFullYear();
  const years = [];
  for (let i = actualYear; i > 1980; i--) {
    years.push(i.toString());
  }

  const selectedYear = () => {
    return (
      <div className='selected-year'>
        {query.length < 3 ? (
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='year-label' className={classes.inputLabel}>
              Année
            </InputLabel>

            <Select
              className={classes.select}
              value={year}
              onChange={yearFilter}
              label={year}
              inputProps={{
                name: 'Année',
                id: 'year-label',
              }}
            >
              {years.map((yearToFilter) => (
                <MenuItem
                  key={yearToFilter}
                  value={yearToFilter}
                  className={classes.menuItem}
                >
                  {yearToFilter}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          ''
        )}
      </div>
    );
  };

  const bestMovieCheck = () => {
    return (
      <div className='checkbox'>
        {query.length < 3 ? (
          <FormControlLabel
            className={classes.FormControlLabel}
            control={
              <Checkbox
                className={classes.checkBox}
                label='Best Movies'
                color='primary'
                checked={checked}
                onChange={handleChangeCheckBox}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label={<span>Top Films</span>}
          />
        ) : (
          ''
        )}
      </div>
    );
  };

  return (
    <div className='container'>
      <div className="search">
      <div className='changePage-btn'>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder='Search…'
          type='text'
          onChange={handleSearchMovies}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <Pagination
            count={total_pages}
            color='primary'
            onChange={handlePaginate}
          />
        </div>
      </div>
      <div className='filter-container'>
        <div className='filter-year'>
          {selectedYear()}
        </div>
        <div className='filter-actors'>
          {bestMovieCheck()}
          <ActorList />
        </div>
        
      </div>
      {movies.length > 1 ? 
      <div className='movies-container'>
        {movies.map((item) => (
          <Movie data={item} key={item.id} />
        ))}
      </div> : 
      <p className="no-results">No results found, sorry :(</p>
      }
      <Pagination
        className={classes.pagination}
        count={total_pages}
        color='primary'
        onChange={handlePaginate}
      />
    </div>
  );
}

export default MovieList;
