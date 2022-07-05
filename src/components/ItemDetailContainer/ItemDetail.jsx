import React from 'react'
import "./detalle.css"
import ItemCount from '../ItemCount/ItemCount';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

function ItemDetail({item}) {
  const [añadirAlCarrito, setAñadirAlCarrito] = useState(false);
  
  const { addToCart, cart } = useContext(CartContext);
  console.log(cart)

function handleOnAdd(cant){
    setAñadirAlCarrito(true);
    addToCart(item, cant);
    
  }
  
  return (
    <div className='detalle-libro'>
        <img src={item.thumbnailUrl} alt="Logo" className='portada-libro'/>
        <section>
        <h1>{item.titulo}</h1>
        <h2>{item.resumen}</h2>
        <h3 class="boton-agregar1">${item.precio}</h3>
        <div class="boton-agregar1">
        
        {
          añadirAlCarrito === false ? <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd}/> : <Link to="/Cart"><button className='boton-agregar'>Ir al carrito</button></Link>
        }
        </div>
        </section>
    </div>
  )
}

export default ItemDetail;