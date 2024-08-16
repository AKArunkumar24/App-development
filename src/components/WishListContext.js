import React, { createContext, useContext, useState } from 'react';

// Create a context for the wishlist
const WishListContext = createContext();

// Custom hook to use the WishListContext
export const useWishList = () => useContext(WishListContext);

// Provider component
export const WishListProvider = ({ children }) => {
  const [wishListItems, setWishListItems] = useState([]);

  const addToWishList = (product) => {
    setWishListItems((prevItems) => [...prevItems, product]);
  };

  const removeFromWishList = (id) => {
    setWishListItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <WishListContext.Provider value={{ wishListItems, addToWishList, removeFromWishList }}>
      {children}
    </WishListContext.Provider>
  );
};
