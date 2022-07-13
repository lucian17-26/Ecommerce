import React from 'react'
import "./Cart.css"
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
// import Item from '../Item/Item';


function Cart() {

  const { cart, clearCart, removerItem } = useContext(CartContext);

  if(cart.length === 0){
    return <h1>Carrito vacio</h1>
  }
  return (
    <div className='estilo'>
      {
        cart.map(item =>(
          <>
          <h1>{item.titulo}</h1>
          <h2>${item.precio}</h2>
          <p>cantidad de unidades : {item.cant}</p>
          <p>cantidad de unidades : {item.stock}</p>
          <button>Terminar compra</button>
          <button onClick={clearCart}>Cancelar compra</button>
          <button onClick={() => removerItem(item.id)}>eliminar producto</button>
          </>
        ))
      }
    </div>
  )
}

export default Cart;
