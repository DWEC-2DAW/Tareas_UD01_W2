/* Crea una función llamada sumNumbers que acepte un número arbitrario de argumentos (de
    cualquier tipo) y devuelva la suma de los argumentos numéricos.
    Por ejemplo:
    sumNumbers('hola', 2, 3, [10, 20, 30], { value: 300 }) => 5 */

function sumNumbers(...parameter) {
    let sum = 0;
    for (let i = 0; i < parameter.length; i++) {
        if (!isNaN(parameter[i]))
            sum += parameter[i];
        }
    
    return sum;
}

console.log(sumNumbers('hola', 2, 3, [10, 20, 30], { value: 300 })); 
