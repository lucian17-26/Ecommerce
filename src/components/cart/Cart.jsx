import React from 'react'
import "./Cart.css"
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';


function Cart() {

  const { prueba } = useContext(CartContext);

  return (
    <div className='estilo'>
        <h1 className='h1'>Hola soy un Cart</h1>
        
        <button onClick={prueba}>Click</button>
    </div>
  )
}

export default Cart;