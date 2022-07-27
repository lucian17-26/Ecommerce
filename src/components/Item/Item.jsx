import React from 'react';
// import ItemCount from '../ItemCount/ItemCount';
import "./item.css"
import { Link } from 'react-router-dom';


export const Item = ({item}) => {
    const urlDetalle= `/detalle/${item.id}`
    return (
        <div className="cards">
            <img src={item.thumbnailUrl} alt="Logo" />
            <h3>{item.titulo}</h3>
            <h4>${item.precio}</h4>
            <Link to={urlDetalle} className="ver-detalle">Ver Detalle</Link>
            {/* <ItemCount stock={item.stock} initial={1} /> */}
        </div>
    )
} 

export default Item;