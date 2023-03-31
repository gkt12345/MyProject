import { createContext, createContext, useState } from "react";
import { productsArray } from "./ProductStore";

export const cartContext = createContext({
      items: [],
      getProductQuantity: () => {},
      addOneToCart: () => {},
      removeOneToCart: () => {},
      deleteOneToCart: () => {},
      getTotalCost : () => {}  
});

export function CartProvider({children}){
    const [cartProducts, setCartProducts] = useState([]);
 
    const getProductQuantity =(id)=>{
        const quantity = cartProducts.find(product.id === id)?.quantity;
        if(quantity === undefined){
            return 0;
        }
        return quantity;
    }

    function addOneToCart(id){
        
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneToCart,
        deleteOneToCart,
        getTotalCost 

    }

    return(
        <cartContext.Provider value={contectValue}>
            {children}
        </cartContext.Provider>
    )
}