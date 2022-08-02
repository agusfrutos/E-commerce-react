import React, { useState, useEffect } from "react";
import { createContext } from "react";

export const FavContext = createContext();

const FavProvider = (props) => {
  const [fav, setFav] = useState(() => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
  });

  const addFav = (item) => {
    if (isInFav(item.id)) {
      const favoritos = fav
        .map((fav) => (fav.id === item.id ? { ...fav, favorite: false } : fav))
        .filter((fav) => fav.id !== item.id);

      setFav(favoritos);
    } else {
      setFav([...fav, { ...item, favorite: true }]);
    }
  };

  const isInFav = (id) => {
    return fav.some((favorite) => favorite.id === id);
  };

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(fav));
  }, [fav]);

  return (
    <>
      <FavContext.Provider value={{ fav, addFav }}>
        {props.children}
      </FavContext.Provider>
    </>
  );
};

export default FavProvider;
