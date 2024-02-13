/*
Se dispone de N temperaturas almacenadas en un array se desea calcular 
su media y obtener el numero de temperaturas mayores o 
iguales que la media y el numero de temperaturas menores que la media
*/

let temperaturas = [12, 15, 51, 99, 24, 1, 6, 70, 20];
let suma = 0;
let media = 0;
let mayores = 0;
let menores = 0;

for (let i = 0; i < temperaturas.length; i++) {
    suma += temperaturas[i];
}

media = suma / temperaturas.length;

for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] >= media) {
        mayores++;
    } else {
        menores++;
    }
}

console.log("La media es:", media);
console.log("Temperaturas mayores o iguales que la media:", mayores);
console.log("Temperaturas menores que la media:", menores);

// mostrando todo el vector en el html y los resultados

document.write("<h1>Temperaturas</h1>");
document.write("<table border='1'>");
for (let i = 0; i < temperaturas.length; i++) {
    document.write("<tr>");
    document.write("<td>" + temperaturas[i] + "</td>");
    document.write("</tr>");
}

document.write("</table>");

document.write("<h1>Resultado</h1>");
document.write("<p>La media de las temperaturas es " + media + "</p>");
document.write("<p>Hay " + mayores + " temperaturas mayores o iguales que la media</p>");
document.write("<p>Hay " + menores + " temperaturas menores que la media</p>");