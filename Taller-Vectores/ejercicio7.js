/*
Una empesa tiene 10 almacenes y necesita crear un algotirmo que lea las ventas 
mensuales de los 10 almacenes, calcular la medide las ventas y obtener un listado
de los almacenes cuyas ventas son mayores o iguales que la media
*/

let ventas = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

let suma = 0;
let media = 0;
let mayores = [];

for (let i = 0; i < ventas.length; i++) {
    suma += ventas[i];
}

media = suma / ventas.length;

for (let i = 0; i < ventas.length; i++) {
    if (ventas[i] >= media) {
        mayores.push(ventas[i]);
    }
}

console.log("La media es:", media);
console.log("Ventas mayores o iguales que la media:", mayores);

// mostrando todo el vector en el html y los resultados

document.write("<h1>Ventas</h1>");
document.write("<table border='1'>");
for (let i = 0; i < ventas.length; i++) {
    document.write("<tr>");
    document.write("<td>" + ventas[i] + "</td>");
    document.write("</tr>");
}
document.write("</table>");

document.write("<h1>Resultado</h1>");

document.write("<p>La media de las ventas es " + media + "</p>");

document.write("<p>Las ventas mayores o iguales que la media son: </p>");
document.write("<table border='1'>");
for (let i = 0; i < mayores.length; i++) {
    document.write("<tr>");
    document.write("<td>" + mayores[i] + "</td>");
    document.write("</tr>");
}

document.write("</table>");