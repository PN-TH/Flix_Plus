import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const addCart = (movie) => {
    setFavoriteMovies((favoriteMovies) => {
      const alreadyExists = favoriteMovies.includes(movie);
      if (alreadyExists) {
        alert('You have already add this film in your favorite list');
        return favoriteMovies;
      } else {
        const favoriteTmp = [...favoriteMovies, movie];
        return favoriteTmp;
      }
    });
  };

  return (
    <FavoriteContext.Provider value={{ favoriteMovies, addCart }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
