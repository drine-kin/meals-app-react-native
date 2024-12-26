import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    favourites: [],
    addToFavourite: (id) => {},
    removeFromFavourite: (id) => {},
});

function FavouritesContextProvider({ children }) {
    const [favourites, setFavourites] = useState([]);

    const addToFavourite = (id) => {
        setFavourites((prev) => [...prev, id]);
    };

    const removeFromFavourite = (id) => {
        setFavourites((prev) => prev.filter((p) => p !== id));
    };

    const value = {
        favourites: favourites,
        addToFavourite: addToFavourite,
        removeFromFavourite: removeFromFavourite,
    };

    return (
        <FavouritesContext.Provider value={value}>
            {children}
        </FavouritesContext.Provider>
    );
}

export default FavouritesContextProvider;
