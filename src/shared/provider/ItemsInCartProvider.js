import { createContext, useState } from "react";

export const ItemsInCartContext = createContext();

export const ItemsInCartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState(["Test Item, remove later"]);

  return (
    <ItemsInCartContext.Provider value={[itemsInCart, setItemsInCart]}>
      {children}
    </ItemsInCartContext.Provider>
  );
};
