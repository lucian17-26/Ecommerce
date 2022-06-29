import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

// 1. Creo el contexto y lo exporto para poder consumirlo luego en los componentes que necesitren información
export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    //estados
    const [cart, setCart] = useState([]);

    useEffect(() => {
    }, [cart]);

    const prueba = () => {
        
    };

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            
            
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
        
    };

    
    const isInCart = (id) => {
        
        return cart.some((prod) => prod.id === id);
    };


    return (
        <CartContext.Provider value={{ cart, prueba, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};