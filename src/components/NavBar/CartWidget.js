import CartWidgetCarrito from "../../Img/carrito.png"
import  cartContext  from "../../context/CartContext";
import React, { useContext } from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";

function CartWidget(){ 
    const { qntyInCart } = useContext(cartContext);

    return(
        <div>
        <Link to="/Cart"><img alt="logo" src={CartWidgetCarrito} /></Link>
        
        <span className="carrito-cantidad">
            {qntyInCart()=== 0 ? "" : qntyInCart()}
            </span>
        </div>
    )
}

export default CartWidget;