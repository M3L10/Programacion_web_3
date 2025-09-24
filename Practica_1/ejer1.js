// 1. Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el
//resultado en un objeto.
//let obj = miFuncion(“euforia”)
//console.log(obj) // { a: 1, e: 1, i: 1, o: 1, u: 1 }
function miFuncion(texto) {
  let obj = { a:0, e:0, i:0, o:0, u:0 };
  for (let l of texto) {
    if (obj[l] >= 0) obj[l]++;
  }
  return obj;
}

let obj = miFuncion("euforia");
console.log(obj);
