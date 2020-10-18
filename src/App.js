import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import ArticleList from './components/Movies/MovieList';
import ArticleDetail from './components/Movies/MovieDetail';
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
              <Route exact path='/' component={ArticleList} />
              <Route path='/movie/:id' component={ArticleDetail} />
              <Route path='/favorite' component={FavoriteMovie} />
            </Switch>
          </Router>
        </FavoriteContextProvider>
      </ArticleContextProvider>
    </div>
  );
}

export default App;
