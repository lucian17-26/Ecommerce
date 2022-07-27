import { useState } from "react";

function ItemCount({stock,initial, onAdd}){

    const [cantidad, setCantidad] = useState(initial);
    const [stockProducto, setStockProducto] = useState(stock);
    

    
    function suma(){
        cantidad >= stock ? alert("No queda mas stock"): (setStockProducto(stockProducto -1) || setCantidad(cantidad +1));
    }
    

    function resta(){
        cantidad <= 0 ? alert("Operacion rechazada"): (setStockProducto(stockProducto +1) || setCantidad(cantidad -1));

    }

    function addToCart(){
    onAdd(cantidad);
    }

    return (  
        <div>
            <div className="agregar-carrito">
                <button className="button" onClick={resta}> - </button>
                <span>{cantidad}</span>
                <button className="button" onClick={suma}> + </button>
            </div>
            <div>
            <button className="boton-agregar" onClick={addToCart}>Agregar al carrito</button>
            </div>
        </div>
        
    );
}

export default ItemCount;