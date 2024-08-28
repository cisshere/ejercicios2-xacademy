/* 1) Escribir una función que reciba un array de strings 
y devuelva un string concatenando todos sus valores */

let arrayStrings = ["hola", "chau"];

const concatenar = (arrayConcatenado) => {
    return arrayConcatenado.join("");
};

console.log(concatenar(arrayStrings));

/* 2) Dados 2 array, devolver un array con todos los elementos que coinciden entre ellos */

let array1 = ["azul", "rojo", "verde"];

let array2 = ["amarillo", "verde", "naranja", "azul"]

const elementosCoincidir = (array1, array2) => {

    const nuevoArray = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.find(elemento => elemento == array1[i])) {
            nuevoArray.push(array1[i]);
        }
    }
    return nuevoArray;
}

console.log(elementosCoincidir(array1, array2));

/* 3) completar la siguiente función para que agregue un nuevo producto al carrito y actualice su total */

let carrito = {

    total: 10,
    productos: [
        {
            nombre: 'leche',
            precio: 2,
            unidades: 5
        }
    ]

}

function agregarProducto(nombre, precio, unidades) {

    carrito.productos.push(
        {
            nombre: nombre,
            precio: precio,
            unidades: unidades
        }
    );

    const precioTotalProducto = precio * unidades;

    carrito.total += precioTotalProducto;
}

agregarProducto("pan", 1, 2);
console.log(carrito);