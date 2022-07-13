// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, doc, collection, query, where , setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4NOawcmBNxGsIOj99FXOMAHPK2VU4DnM",
  authDomain: "react-37070.firebaseapp.com",
  projectId: "react-37070",
  storageBucket: "react-37070.appspot.com",
  messagingSenderId: "93709144567",
  appId: "1:93709144567:web:4e3b738e07d56b7a215ef2"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const appFirestore = getFirestore(appFirebase);

export async function traerLibros() {
    const librosCollection = collection(appFirestore, "libros");
    const librosSnapshot = await getDocs(librosCollection);

    let respuesta = librosSnapshot.docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        };
    });

    return respuesta;
}

export async function traerProductosDeCategoria(idcategory) {
    /* query "where" */
    
    const librosCollection = collection(appFirestore, "libros");
    
    const q = query(librosCollection, where("category", "==", idcategory));
    
    const librosSnapshot = await getDocs(q);
    
    let respuesta = librosSnapshot.docs.map((doc) => {
        return {
        ...doc.data(),
        id: doc.id,
        };
    });
    
    return respuesta;
}

export async function traerUnProducto(itemId) {
    const docref = doc(appFirestore, "libros", itemId);
    
    const docSnapshot = await getDoc(docref);
    
    return {
        id: docSnapshot.id,
        ...docSnapshot.data(),
    };
}

export async function exportarDataFirestore(){
    const libros = [
        {
            "titulo": "1984",
            "precio": 500,
            "id": 0,
            "stock": 8,
            "thumbnailUrl": "../imagenes/1984.jpg",
            "category": "drama",
            "resumen": "1984 de George Orwell es una novela de distopía cuya trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden."
        },
        {
            "titulo": "El mundo esta en venta",
            "precio": 600,
            "id": 1,
            "stock": 6,
            "thumbnailUrl": "../imagenes/el-mundo-esta-en-venta.jpg",
            "category": "drama",
            "resumen": "1984 de George Orwell es una novela de distopía cuya trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden."
        },
        {
            "titulo": "El niño de la nieve",
            "precio": 350,
            "id": 2,
            "stock": 7,
            "thumbnailUrl": "../imagenes/el-niño-de-la-nieve.jpg",
            "category": "drama",
            "resumen": "1984 de George Orwell es una novela de distopía cuya trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden."
        },
        {
            "titulo": "El señor de los anillos",
            "precio": 900,
            "id": 3,
            "stock": 3,
            "thumbnailUrl": "../imagenes/el-señor-de-los-anillos-01.jpg",
            "category": "aventura",
            "resumen": "1984 de George Orwell es una novela de distopía cuya trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden."
        },
        {
            "titulo": "El señor de los anillos 2",
            "precio": 750,
            "id": 4,
            "stock": 4,
            "thumbnailUrl": "../imagenes/el-señor-de-los-anillos-02.jpg",
            "category": "aventura",
            "resumen": "1984 de George Orwell es una novela de distopía cuya trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden."
        },
        {
            "titulo": "El señor de los anillos 3",
            "precio": 1000,
            "id": 5,
            "stock": 5,
            "thumbnailUrl": "../imagenes/el-señor-de-los-anillos.jpg",
            "category": "aventura",
            "resumen": "1984 de George Orwell es una novela de distopía cuya trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden."
        },
        {
            "titulo": "El ultimo pasajero",
            "precio": 800,
            "id": 6,
            "stock": 3,
            "thumbnailUrl": "../imagenes/el-ultimo-pasajero.jpg",
            "category": "drama",
            "resumen": "1984 de George Orwell es una novela de distopía cuya trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden."
        },
        {
            "titulo": "Hamblet",
            "precio": 700,
            "id": 7,
            "stock": 6,
            "thumbnailUrl": "../imagenes/hamlet-by-isidro-ferrer.jpg",
            "category": "aventura",
            "resumen": "1984 de George Orwell es una novela de distopía cuya trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden."
        },
        {
            "titulo": "Harry Potter",
            "precio": 900,
            "id": 8,
            "stock": 4,
            "thumbnailUrl": "../imagenes/harry-potter-01.jpg",
            "category": "ciencia-ficcion",
            "resumen": "1984 de George Orwell es una novela de distopía cuya trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden."
        },
        {
            "titulo": "Harry Potter 2",
            "precio": 1000,
            "id": 9,
            "stock": 2,
            "thumbnailUrl": "../imagenes/harry-potter-el-pricionero.jpg",
            "category": "ciencia-ficcion",
            "resumen": "1984 de George Orwell es una novela de distopía cuya trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden."
        },
        {
            "titulo": "Harry Potter 3",
            "precio": 800,
            "id": 10,
            "stock": 5,
            "thumbnailUrl": "../imagenes/harry-potter.jpg",
            "category": "ciencia-ficcion",
            "resumen": "1984 de George Orwell es una novela de distopía cuya trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden."
        },
        {
            "titulo": "La naranja mecanica",
            "precio": 1200,
            "id": 11,
            "stock": 1,
            "thumbnailUrl": "../imagenes/la-naranja-mecanica-anthony-burgess.jpg",
            "category": "veridica",
            "resumen": "1984 de George Orwell es una novela de distopía cuya trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden."
        },
        {
            "titulo": "La revolucion glucosa",
            "precio": 650,
            "id": 12,
            "stock": 2,
            "thumbnailUrl": "../imagenes/la-revolucion-glucosa.jpg",
            "category": "veridica",
            "resumen": "1984 de George Orwell es una novela de distopía cuya trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden."
        },
        {
            "titulo": "Moby Dick",
            "precio": 1100,
            "id": 13,
            "stock": 2,
            "thumbnailUrl": "../imagenes/moby-dick.jpg",
            "category": "veridica",
            "resumen": "1984 de George Orwell es una novela de distopía cuya trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden."
        }
    ]

    const librosCollection = collection(appFirestore, "libros");

    libros.forEach((item) => {
    const newDoc = doc(librosCollection);
    setDoc(newDoc, item)
    .then((res) => {
        console.log("Documento guardado:", newDoc.id);
    })
    .catch((error) => console.log("error obteniendo los datos: ", error));
    });

}

export default appFirestore;