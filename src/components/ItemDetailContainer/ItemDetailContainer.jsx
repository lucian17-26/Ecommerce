import React, {useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { traerUnProducto} from "../../services/firestore";
import "./detalle.css"

export default function ItemDetailContainer() {
    const{ itemId } = useParams();
    const [products, setProducts] = useState([])
    const [estaCargando, setEstaCargando] = useState(true)

    useEffect(() =>{
        // llamar a la API
        traerUnProducto(itemId)
            .then((res) => {
                setProducts(res);
                setEstaCargando(false);
            })
            .catch((error) => {
            console.log(error);
            });
    }, [itemId]);

    return (
        <div>
            <div>
                { estaCargando 
                ? <h3>Cargando...</h3>: 
                <ItemDetail item={products}/>
                }
            </div>
        </div>
        )
}
