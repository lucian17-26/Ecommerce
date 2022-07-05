import CartWidgetCarrito from "../../Img/carrito.png"
import { CartContext } from "../../context/CartContext";
import React, { useContext } from "react";

function CartWidget(){ 
    const {qntyInCart} = useContext(CartContext);
    return(
        <>
        <img alt="logo" src={CartWidgetCarrito} />
        <span>{qntyInCart()}</span>
        </>
    )
}

export default CartWidget;