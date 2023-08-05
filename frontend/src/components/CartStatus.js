import { createContext, useState, useEffect } from "react";

export const CartStatus = createContext({});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
      }, [cartProducts]);

    useEffect(() => {
    const storedCart = localStorage.getItem("cartProducts");
    if (storedCart) {
        setCartProducts(JSON.parse(storedCart));
    }
    }, []);

    function addProduct(productId) {
        setCartProducts(prev => [...prev, productId])
    }
    return (
        <CartStatus.Provider value={{cartProducts, setCartProducts, addProduct}}>
            {children}
        </CartStatus.Provider>
    );
}