import React, { createContext, useState, useEffect } from 'react';

export const FavoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {

  const initialState = JSON.parse(localStorage.getItem('favoriteMovies')) || []

  const [favoriteMovies, setFavoriteMovies] = useState([...initialState]);

  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies))
  }, [favoriteMovies])




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

  const handleDelete = id => {
    const temp = [...favoriteMovies];
    temp.splice(id, 1);
    setFavoriteMovies((favoriteMovies) => favoriteMovies = temp)
}

  return (
    <FavoriteContext.Provider value={{ favoriteMovies, addCart, handleDelete }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
