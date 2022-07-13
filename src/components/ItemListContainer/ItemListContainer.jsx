import ItemList from "../ItemList/ItemList"
import React, {useState, useEffect } from "react";
// import  libros  from "../Libros/libros.json";
import { useParams } from "react-router-dom";
import {traerLibros, traerProductosDeCategoria} from "../../services/firestore";


function ItemListContainer(props){
    // const [libro, setLibro] = useState([]);
    const{ categoryId} = useParams();
    const [products, setProducts] = useState([])
    

    useEffect(() =>{
        // llamar a la API
        // const traerLibros= new Promise ((res, rej) =>{
        //     setTimeout(() =>{
        //         if(categoryId === undefined){
        //             res(libros)
        //         }else{
        //             const itemsFound = libros.filter( detalle =>{
        //                 return detalle.category === categoryId;
        //             })
        //             res(itemsFound);
        //         }
        //     }, 800);
        // })
        
            if (categoryId) {
                traerProductosDeCategoria(categoryId)
                .then((res) => {
                    setProducts(res);
                })
                .catch((error) => {
                console.log(error);
                });
            } else {
        traerLibros()
        .then((res)=>{
            setProducts(res);
        })
        .catch((error) => {
            console.log(error);
        });
        }
    }, [categoryId]);

    return(
        <div className="Item-Lista">
            <h1>{props.greeting}</h1>
            <ItemList items={products}/>
        </div>
    )
}

export default ItemListContainer; 