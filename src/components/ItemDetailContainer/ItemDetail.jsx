import React from 'react'
import "./detalle.css"
import ItemCount from '../ItemCount/ItemCount';
// import { useState } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

function ItemDetail({item}) {
  // const [añadirAlCarrito, setAñadirAlCarrito] = useState(false);
  
  const { addToCart, cart,añadirAlCarrito } = useContext(CartContext);
  console.log(cart)

function handleOnAdd(cant){
  addToCart(item, cant);
  // setAñadirAlCarrito(true);
    
  }
  
  
  return (
    <div className="detalle-libro">
        <img src={item.thumbnailUrl} alt="Logo" className='portada-libro'/>
        <section>
        <h1>{item.titulo}</h1>
        <h2>{item.resumen}</h2>
        <h3 className="boton-agregar1">${item.precio}</h3>
        <div className="boton-agregar1">
        {
          (añadirAlCarrito(item.id)) ?  (<Link to="/Cart"><button className='boton-agregar'>Ir al carrito</button></Link>) : (<ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd}/>)
        }
        </div>
        </section>
    </div>
  )
}

export default ItemDetail;