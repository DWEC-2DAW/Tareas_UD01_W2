/* Escribe una función combineArrays que, usando el operador spread, reciba dos arrays como
parámetros y devuelva un array con el contenido de ambos arrays: primero el segundo y después el
primero.
Por ejemplo:
combineArrays([1,2], [3,4]) => [3,4,1,2] */

function combineArrays(arrayOne, arrayTwo) {
    let newArray = [...arrayOne, ...arrayTwo]  // desestructuro los dos array en un array nuevo
    return newArray; 
}

console.log(combineArrays([1,2], [3,4])); 
