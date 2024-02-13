/*
Escribir un logaritmo que permita calcular el cuadrado de los 100
primeros numeros enteros y a continuacion una tabla que contenga dichos cuadrados
*/

let cuadrados = [];

for (let i = 1; i <= 100; i++) {
    cuadrados.push(i ** 2);
}

console.log(cuadrados);

// mostrando la tabla en el html

document.write("<h1>Cuadrados</h1>");
document.write("<table border='1'>");
for (let i = 0; i < cuadrados.length; i++) {
    if (i % 10 === 0) {
        document.write("<tr>"); // Iniciar una nueva fila después de cada décimo elemento
    }
    document.write("<td>" + cuadrados[i] + "</td>");
    if ((i + 1) % 10 === 0) {
        document.write("</tr>"); // Cerrar la fila después de cada décimo elemento
    }
}
document.write("</table>");