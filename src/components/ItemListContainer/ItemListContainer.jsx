import ItemList from "../ItemList/ItemList"
import React, {useState, useEffect } from "react";
import  libros  from "../Libros/libros.json";
import { useParams } from "react-router-dom";


function ItemListContainer(props){
    const [libro, setLibro] = useState([]);
    const{ categoryId} = useParams();

    useEffect(() =>{
        // llamar a la API
        const traerLibros= new Promise ((res, rej) =>{
            setTimeout(() =>{
                if(categoryId === undefined){
                    res(libros)
                }else{
                    const itemsFound = libros.filter( detalle =>{
                        return detalle.category === categoryId;
                    })
                    res(itemsFound);
                }
            }, 800);
        })
        traerLibros
        .then((res)=>{
            setLibro(res);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [categoryId]);

    return(
        <div class="Item-Lista">
            <h1>{props.greeting}</h1>
            <ItemList items={libro}/>
        </div>
    )
}

export default ItemListContainer; 