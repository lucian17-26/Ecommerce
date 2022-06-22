import { useState } from "react";

function ItemCount({stock,initial, onAdd}){

    // let initial = 1;
    const [cantidad, setCantidad] = useState(initial);
    const [stockProducto, setStockProducto] = useState(stock);
    

    
    function suma(){
        cantidad >= stock ? alert("No queda mas stock"): (setStockProducto(stockProducto -1) || setCantidad(cantidad +1));
    }
    

    function resta(){
        cantidad <= 0 ? alert("Operacion rechazada"): (setStockProducto(stockProducto +1) || setCantidad(cantidad -1));

    }

    function actualizar(){
    return cantidad
    }

    return (  
        <div>
            <div class="agregar-carrito">
                <button class="button" onClick={resta}> - </button>
                <span>{actualizar()}</span>
                <button class="button" onClick={suma}> + </button>
            </div>
            <div>
            <button class="boton-agregar">Agregar al carrito</button>
            </div>
        </div>
        
    );
}

export default ItemCount;