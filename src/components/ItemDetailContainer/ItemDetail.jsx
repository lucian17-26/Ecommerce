import React from 'react'
import "./detalle.css"
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({item}) {
  return (
    <div className='detalle-libro'>
        <img src={item.thumbnailUrl} alt="Logo" className='portada-libro'/>
        <section>
        <h1>{item.titulo}</h1>
        <h2>{item.resumen}</h2>
        <h3 class="boton-agregar1">${item.precio}</h3>
        <div class="boton-agregar1">
        <ItemCount stock={item.stock} initial={0}/>
        </div>
        </section>
    </div>
  )
}

export default ItemDetail;