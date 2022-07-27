import React from 'react'
import "./Cart.css"
import  cartContext  from '../../context/CartContext';
import { useContext } from 'react';
import Button from '../Boton/Button';
import { Link } from 'react-router-dom';



function Cart() {

  const { cart, removerItem, precioTotalPorProducto, clearCart, precioTotal} = useContext(cartContext);

  if(cart.length === 0){
    return (
      <div className='carrito-vacio'>
        <h1>Carrito vacio</h1>
        <Link to="/"><h2 className='color-texto'>Empieza a comprar</h2></Link>
      </div>
    )
  }
  return (
    
    <div className='estilo'>
      <div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>
                  <h1>Titulo</h1>
                </th>
                <th>
                  <h1>Precio</h1>
                </th>
                <th>
                  <h1>Cantidad</h1>
                </th>
                <th>
                  <h1>Accion</h1>
                </th>
                <th>
                  <h1>Total</h1>
                </th>
              </tr>
            </thead>
            {
            cart.map((item) =>(
            <tbody>
              <tr>
                <td>
                  <img src={item.thumbnailUrl} alt="Logo" className="libro-cart"/></td>
                <td><h2>{item.titulo}</h2></td>
                <td><h2>${item.precio}</h2></td>
                <td><h2>{item.qnty}</h2></td>
                <td>
                <button className='style-boton-eliminar' onClick={() => removerItem(item.id)}>Eliminar Libro</button>
                </td>
                <td><h2>${precioTotalPorProducto(item)}</h2></td>
              </tr>
            </tbody>
            ))
            }
          </table>
          <div className='style-finalizar-compra'>
            <h2 className='style-finalizar-compra-hijo'>Subtotal ${precioTotal()}</h2>
            <div className=' style-finalizar-compra-hijo' onClick={clearCart} >
            < Button   button="Cancelar Compra"/>
            < Button  button="Finalizar Compra" />
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default Cart;
