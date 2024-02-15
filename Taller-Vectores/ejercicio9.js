/*
Se introducen una serie de valores numericos desde el teclado siendo el valor final de entrada de datos
o centinela -99. se desea calcular e imprimir el numero de valores leidos, la suma y media de los valores y una tabla 
que muestre cada valor leido y sus desviaciones de la media
*/

let valores = [];

let suma = 0;

let media = 0;

let desviaciones = [];

let valor = 0;

let contador = 0;

let desviacion = 0;

let sumaDesviaciones = 0;

let mediaDesviaciones = 0;

let contadorDesviaciones = 0;

do {
    valor = parseInt(prompt("Introduce un valor:"));
    if (valor !== -99) {
        valores.push(valor);
        suma += valor;
        contador++;
    }
}
while (valor !== -99);

media = suma / contador;

for (let i = 0; i < valores.length; i++) {

    desviacion = valores[i] - media;

    desviaciones.push(desviacion);

    sumaDesviaciones += desviacion;

    contadorDesviaciones++;
}

mediaDesviaciones = sumaDesviaciones / contadorDesviaciones;

console.log("El número de valores leidos es:", contador);

console.log("La suma de los valores es:", suma);

console.log("La media de los valores es:", media);

console.log("La tabla de valores leidos y sus desviaciones de la media es:");

console.log("Valor\tDesviación");

for (let i = 0; i < valores.length; i++) {

    console.log(valores[i] + "\t" + desviaciones[i]);
}

console.log("La suma de las desviaciones es:", sumaDesviaciones);

console.log("La media de las desviaciones es:", mediaDesviaciones);

document.write("<h1>Valores</h1>");
document.write("<table border='1'>");
for (let i = 0; i < valores.length; i++) {
    document.write("<tr>");
    document.write("<td>" + valores[i] + "</td>");
    document.write("<td>" + desviaciones[i] + "</td>");
    document.write("</tr>");
}
document.write("</table>");

document.write("<h1>Resultado</h1>");

document.write("<p>El número de valores leidos es " + contador + "</p>");

document.write("<p>La suma de los valores es " + suma + "</p>");

document.write("<p>La media de los valores es " + media + "</p>");

document.write("<p>La tabla de valores leidos y sus desviaciones de la media es:</p>");

document.write("<table border='1'>");

document.write("<tr>");

document.write("<td>Valor</td>");

document.write("<td>Desviación</td>");

document.write("</tr>");

for (let i = 0; i < valores.length; i++) {

    document.write("<tr>");

    document.write("<td>" + valores[i] + "</td>");

    document.write("<td>" + desviaciones[i] + "</td>");

    document.write("</tr>");
}

document.write("</table>");

document.write("<p>La suma de las desviaciones es " + sumaDesviaciones + "</p>");

document.write("<p>La media de las desviaciones es " + mediaDesviaciones + "</p>");

// mostrando todo el vector en el html y los resultados

document.write("<h1>Valores</h1>");
document.write("<table border='1'>");
for (let i = 0; i < valores.length; i++) {
    document.write("<tr>");
    document.write("<td>" + valores[i] + "</td>");
    document.write("<td>" + desviaciones[i] + "</td>");
    document.write("</tr>");
}
document.write("</table>");

document.write("<h1>Resultado</h1>");

document.write("<p>El número de valores leidos es " + contador + "</p>");

document.write("<p>La suma de los valores es " + suma + "</p>");

document.write("<p>La media de los valores es " + media + "</p>");