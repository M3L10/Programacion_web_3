//7. Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros
//elementos de un arreglo, mediante desestructuración.
const numeros = [70, 900, 30, 450, 770, 80, 99, 999, 1923];

let [, , ...resto] = numeros;

console.log("Resto de los elementos:", resto);
