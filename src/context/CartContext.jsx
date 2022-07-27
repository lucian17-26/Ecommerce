import { useState, createContext } from 'react';

// 1. Creo el contexto y lo exporto para poder consumirlo luego en los componentes que necesitren información
const cartContext = createContext();

export function CartContextProvider(props) {
    //estados
    const [cart, setCart] = useState([]);
    
    function addToCart(item, cant ) {
        if(añadirAlCarrito(item.id)){
            const idAgregar = item.id;
            let itemToAdd = cart.find( (cadaItem) => cadaItem.id === idAgregar)
            itemToAdd.qnty += cant;

            let newCart = cart.filter((cadaItem) => cadaItem.id !== item.id);
            setCart([...newCart, {...itemToAdd }]);
            }else {
            setCart([...cart, { ...item, qnty: cant }]);
        }
    };

    function removerItem(id){
        let newCart = cart.filter((item) => item.id !== id);
        return setCart(newCart);
        
    };

    

    function añadirAlCarrito(id){
        return cart.some((item) => item.id === id);
    };

    function qntyInCart(){
        let total = 0;
        cart.forEach((item) => (total = total + item.qnty ));
        return total;
    }

    function precioTotal(){
        let total = 0;
        cart.forEach((item) => (total = total + (item.qnty * item.precio) ));
        return total;
    }

    function precioTotalPorProducto(item){
        let total = "";
         total= item.qnty * item.precio;
        return total;
    }

    function clearCart(){
        setCart([]);
    }

    return (
        <cartContext.Provider value={{ cart,  addToCart , añadirAlCarrito, qntyInCart, clearCart , removerItem, precioTotalPorProducto, precioTotal}}>
            {props.children}
        </cartContext.Provider>
    );
};

export default cartContext;