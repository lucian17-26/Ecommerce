import React from 'react';
import Item from '../Item/Item';
import "./itemList.css";

const ItemList = ({ items }) => {
    
    return (
    <div className='contenedor'>
        {items.map((item) => (
            <Item key={item.id} stock={item.stock} item={item}/>
        ))}
    </div>
    )
};

export default ItemList;