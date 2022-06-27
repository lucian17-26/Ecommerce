import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from "./components/cart/Cart";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Nuestro cátalogo"/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Encontradas"/>}/>
          <Route path="/detalle/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
