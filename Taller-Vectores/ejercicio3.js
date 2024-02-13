// calcular el numero de elementos negativos, cero y positivos de un vector dado de sesenta elementos

let vector = [
    -1, 15, 51, 99, 24, 1, 6, 0, 0, -12, -15, -51, -99, -24, -1, -6, -77, -20,
    12, 11, 51, 91, 14, 41, 16, 2, 20, -12, -15, -51, -99, -24, -1, -6, -18, -20,
    15, 15, 51, 92, 4, 1, 6, 7, 0, -12, -15, -51, -99, -24, -1, -6, -12, -20,
    12, 15, 51, 9, 0, 1, 4, 70, 20, -4, 0, -51, -99, -24, -1, -6, -17, -20
];

let cero = 0;
let positivos = 0;
let negativos = 0;

for (let i = 0; i < vector.length; i++) {
    if (vector[i] > 0) {
        positivos++;
    } else if (vector[i] === 0) {
        cero++;
    } else {
        negativos++;
    }
}

console.log("Número de elementos negativos:", negativos);
console.log("Número de elementos igual a cero:", cero);
console.log("Número de elementos positivos:", positivos);

// mostrando todo el vector en el html y los resultados

document.write("<h1>Vector</h1>");
document.write("<table border='1'>");
for (let i = 0; i < vector.length; i++) {
    if (i % 9 === 0) {
        document.write("<tr>"); // Iniciar una nueva fila después de cada noveno elemento
    }
    document.write("<td>" + vector[i] + "</td>");
    if ((i + 1) % 9 === 0) {
        document.write("</tr>"); // Cerrar la fila después de cada noveno elemento
    }
}
document.write("</table>");

document.write("<h1>Resultado</h1>");
document.write("<p>Hay " + negativos + " numeros negativos</p>");
document.write("<p>Hay " + cero + " numeros iguales a cero</p>");
document.write("<p>Hay " + positivos + " numeros positivos</p>");