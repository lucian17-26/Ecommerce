import React, {useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import libros from "../Libros/libros.json";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { traerUnProducto} from "../../services/firestore";

export default function ItemDetailContainer() {
    // const [libro, setLibro] = useState([]);
    // const { itemId } = useParams();
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
            {/* <Link to="/"><button>Volver al catalogo</button></Link>
            <Link to="/category/drama"><button>Drama</button></Link>
            <Link to="/category/ciencia-ficcion"><button>Ciencia Ficcion</button></Link>
            <Link to="/category/aventura"><button>Aventura</button></Link>
            <Link to="/category/veridica"><button>Veridicas</button></Link> */}
            <div>
                { estaCargando 
                ? <h3>Cargando...</h3>: 
                <ItemDetail item={products}/>
                }
            </div>
        </div>
        )
}
