import { useState } from 'react';
import { createContext } from 'react';

// 1. Creo el contexto y lo exporto para poder consumirlo luego en los componentes que necesitren información
export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    //estados
    const [cart, setCart] = useState([]);

    

    const addToCart = (item, cant) => {
            if(añadirAlCarrito(item.id)){
                const idAgregar = item.id
                let itemToAdd = cart.find( cadaItem => cadaItem.id === idAgregar)
                itemToAdd.cant += cant;
            }else {
                setCart([...cart, { ...item, cant }]);
            }
            
    };

    const removerItem = (id) => {
        let newCart = cart.filter(item => item.id !== id);
        return setCart(newCart);
    };

    const añadirAlCarrito = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const qntyInCart = () =>{
        let total = 0;
        cart.forEach((item) => (total = total + item.cant));
        return total;
    }

    const clearCart = ()=>{
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart,  addToCart , añadirAlCarrito, qntyInCart, clearCart , removerItem}}>
            {children}
        </CartContext.Provider>
    );
};