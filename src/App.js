import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import MoviesList from './components/Movies/MovieList';
import MoviesDetail from './components/Movies/MovieDetail';
import ArticleContextProvider from './components/_context/MoviesContextProvider';
import FavoriteContextProvider from './components/_context/FavoriteContextProvider';
import FavoriteMovie from './components/Favorite/FavoriteMovie';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <ArticleContextProvider>
        <FavoriteContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path='/' component={MoviesList} />
              <Route path='/movie/:id' component={MoviesDetail} />
              <Route path='/favorite' component={FavoriteMovie} />
            </Switch>
          </Router>
        </FavoriteContextProvider>
      </ArticleContextProvider>
    </div>
  );
}

export default App;