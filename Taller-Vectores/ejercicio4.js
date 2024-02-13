/*
Se dispone de una tabla T de 50 elementos numeros reales distintos a 0. crear una nueva
tabla en la que todos sus elementos resulten el cuadrado de los elementos de la tabla T.
por el elemento T[K] siendo K un valor dado.
*/

let tablaT = [
    1, 2, 5, 9, 24, 1, 6, 70, 20, 12,
    0, 51, 91, 14, 41, 16, 2, 20, 12, 15,
    1, 92, 4, 1, 6, 7, 12, 15, 51, 9,
    10, 4, 7, 20, 12, 11, 51, 91, 14, 41,
    16, 2, 20, 12, 15, 51, 92, 4, 1, 6, 7
];

let tablaK = [];

for (let i = 0; i < tablaT.length; i++) {
    tablaK[i] = tablaT[i] ** 2;
}

console.log(tablaK);

// mostrando la tabla en el html

document.write("<h1>Tabla T</h1>");
document.write("<table border='1'>");
for (let i = 0; i < tablaT.length; i++) {
    if (i % 10 === 0) {
        document.write("<tr>"); // Iniciar una nueva fila después de cada décimo elemento
    }
    document.write("<td>" + tablaT[i] + "</td>");
    if ((i + 1) % 10 === 0) {
        document.write("</tr>"); // Cerrar la fila después de cada décimo elemento
    }
}
document.write("</table>");

document.write("<h1>Tabla K</h1>");
document.write("<table border='1'>");
for (let i = 0; i < tablaK.length; i++) {
    if (i % 10 === 0) {
        document.write("<tr>"); // Iniciar una nueva fila después de cada décimo elemento
    }
    document.write("<td>" + tablaK[i] + "</td>");
    if ((i + 1) % 10 === 0) {
        document.write("</tr>"); // Cerrar la fila después de cada décimo elemento
    }
}
document.write("</table>");