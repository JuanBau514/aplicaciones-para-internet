/*
Escribir el algoritmo que permita obtener el numero de elementos positivos de una tabla
*/

let tabla = [1, -12, 3,
    4, -15, 6,
    7, -8, 9,
    10, 11, 12
];

let positivos = 0;

for (let i = 0; i < tabla.length; i++) {
    if (tabla[i] > 0) {
        positivos++;
    }
}

console.log(positivos);

// mostrando la tabla en el html y el resultado

document.write("<h1>Tabla</h1>");
document.write("<table border='1'>");
for (let i = 0; i < tabla.length; i++) {
    if (i % 3 === 0) {
        document.write("<tr>"); // Iniciar una nueva fila después de cada tercer elemento
    }
    document.write("<td>" + tabla[i] + "</td>");
    if ((i + 1) % 3 === 0) {
        document.write("</tr>"); // Cerrar la fila después de cada tercer elemento
    }
}
document.write("</table>");

document.write("<h1>Resultado</h1>");
document.write("<p>Hay " + positivos + " numeros positivos</p>");