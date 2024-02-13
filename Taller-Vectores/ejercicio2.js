/* Calculo de la suma de todos los elementos de un vector asi como la media aritmetica de los mismos*/

let vector = [12, 15, 51, 99, 24, 1, 6, 70, 20]

let suma = 0;

for (let i = 0; i < vector.length; i++) {
    suma += vector[i];
}

let media = suma / vector.length;

console.log(suma);
console.log(media);

// mostrando todo el vector en el html y los resultados

document.write("<h1>Vector</h1>");
document.write("<table border='1'>");
for (let i = 0; i < vector.length; i++) {
    document.write("<tr>");
    document.write("<td>" + vector[i] + "</td>");
    document.write("</tr>");
}
document.write("</table>");

document.write("<h1>Resultado</h1>");
document.write("<p>La suma de los elementos es " + suma + "</p>");
document.write("<p>La media de los elementos es " + media + "</p>");