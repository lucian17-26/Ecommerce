Proyecto Ecommerce con React basado en tienda de libros 

Proyecto realizado mediante la instalacion de  Node.js con el comando "npm install" creando un app con "npx create-react-app (nombre-de-app)"
Teniendo creada la app de React prodeci a crear la carpeta "components" en la cual se encuentran las carpetas:
-NavBar
-Libros
-ItemListContainer
-ItemList
-ItemDelaitContainer
-ItemCount
-Item

NavBar es el contenedor que recibe; 5 Link navegables, una imagen contenedora con "Logo" y el archivo CartWidget.js que contiene el carro de compras del Ecommerce

Libros, es el JSON creado para traer las promesas que se utilizan en ItemListContainer.jsx

ItemListContainer recibe mediante promesa el JSON de Libros y contiene ItemList.jsx

ItemList hace un .map de item 

Item parsea la promesa de JSON de Libros, agrega el ItemCount  y forma las Cards utilizadas 

itemDelait muestra un detalle de la Card seleccionada 
