import React, {useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import libros from "../Libros/libros.json";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
    const [libro, setLibro] = useState([]);
    const { itemId } = useParams();

    useEffect(() =>{
        // llamar a la API
        const traerLibros= new Promise ((res, rej) =>{
            setTimeout(() =>{
                let itemNumber = parseInt(itemId)
            res(libros[itemNumber]);
            }, 900);
        })

        traerLibros
        .then((res)=>{
            setLibro(res);
        })

        .catch((error) => {
            console.log(error);
        });
    }, [itemId]);

    return (
        <div>
            <Link to="/"><button>Volver al catalogo</button></Link>
            <Link to="/category/drama"><button>Drama</button></Link>
            <Link to="/category/ciencia-ficcion"><button>Ciencia Ficcion</button></Link>
            <Link to="/category/aventura"><button>Aventura</button></Link>
            <Link to="/category/veridica"><button>Veridicas</button></Link>
            <div>
                <ItemDetail item={libro}/>
            </div>
        </div>
        )
}
