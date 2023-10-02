
/* Crea una función diamante que cree un diamante con todas las letras hasta la letra pasada como
parámetro. Es suficiente con que funcione con letras mayúsculas. No hace falta que hagas
validaciones sobre parámetros. */

function diamante(param) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const index = letters.indexOf(param);/*  devuelve la primera posición donde se encuentra el texto
    buscado, empezando a buscar desde la posición “indice”. Si “indice” no se indica, se toma
    por defecto el valor 0.
 */
    
    let graphic = [];

    for (let i = 0; i <= index; i++) {
        // una fila nueva del diamante  por iteración
        let row = [];
     
        for (let j = 0; j < index * 2 + 1; j++)
       // construimos cada fila del diamante
     {
            if (j === index - i || j === index + i) {
                //determinamos posicion donde debería ir una letra
                row.push(letters[i]);
            } else {
                row.push('-'); // agregamos letra o guion 
            }
        }
        graphic.push(row.join('')); // unimos row y lo importa graphic
    }


    let reverse = [...graphic];
        // Copio con el operador spread la primera parte del diamante sin modificar graphic y la invierto  para la segunda parte
    reverse.reverse();
    reverse.shift(); // Elimina la primera fila (la Z)  que está duplicada

    // Une las dos partes del diamante
    for (let i = 0; i < reverse.length; i++) {
        graphic.push(reverse[i]); // le hago un push a cada linea en graphic para duplicar pero al reves
    }

    return graphic.join('\n');
}

console.log(diamante('Z'));
