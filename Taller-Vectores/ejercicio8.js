// se dispone de una lista de 100 numeros enteros calcular su valor maximo y el orden que ocupa en la tabla

let lista = [
    -1, 201, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, -44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100
];

let maximo = 0;

for (let i = 0; i < lista.length; i++) {
    if (lista[i] > maximo) {
        maximo = lista[i];
    }
}

console.log("El valor máximo es:", maximo);
document.write("<p>El valor máximo es: " + maximo + "</p>");

let orden = 0;

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === maximo) {
        orden = i + 1;
    }
}

console.log("El valor máximo ocupa el orden:", orden);

document.write("<p>El valor máximo ocupa el orden: " + orden + "</p>");

// mostrando todo el vector en el html

document.write("<h1>Lista</h1>");
document.write("<table border='1'>");
for (let i = 0; i < lista.length; i++) {
    document.write("<tr>");
    document.write("<td>" + lista[i] + "</td>");
    document.write("</tr>");
}
document.write("</table>");