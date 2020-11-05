import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import MoviesList from './components/Movies/MovieList';
import MoviesDetail from './components/Movies/MovieDetail';
import ArticleContextProvider from './components/_context/MoviesContextProvider';
import FavoriteContextProvider from './components/_context/FavoriteContextProvider';
import FavoriteMovie from './components/Favorite/FavoriteMovie';
import Navbar from './components/Navbar/Navbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './components/Home'
import About from './components/About/About';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#15cdfc'
    }
  }
});

function App() {
  return (
    <div className='App'>
      <ArticleContextProvider>
        <FavoriteContextProvider>
          <MuiThemeProvider theme={theme}>
            <Router>
              <Navbar />
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About} />
                <Route exact path='/movies' component={MoviesList} />
                <Route path='/movie/:id' component={MoviesDetail} />
                <Route path='/favorite' component={FavoriteMovie} />
                
              </Switch>
            </Router>
          </MuiThemeProvider>
        </FavoriteContextProvider>
      </ArticleContextProvider>
    </div>
  );
}

export default App;