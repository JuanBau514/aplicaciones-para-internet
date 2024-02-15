/*
se dispone de una lista de N nombres de alumnos escribir un algoritmo
que solicite el nombre de un alumno y busque en la lista (array) si el 
nombre esta en la lista
*/

let nombres = ["Juan", "Pedro", "Luis", "Ana", "Maria", "Jose", "Carlos", "Rosa", "Luisa", "Marta"];

let nombre = prompt("Introduce un nombre:");

let encontrado = false;

for (let i = 0; i < nombres.length; i++) {
    if (nombre === nombres[i]) {
        encontrado = true;
    }
}

if (encontrado) {
    console.log("El nombre", nombre, "está en la lista");
    document.write("<p>El nombre " + nombre + " está en la lista</p>");
} else {
    console.log("El nombre", nombre, "no está en la lista");
    document.write("<p>El nombre " + nombre + " no está en la lista</p>");
}

// mostrando todo el vector en el html

document.write("<h1>Nombres</h1>");
document.write("<table border='1'>");
for (let i = 0; i < nombres.length; i++) {
    document.write("<tr>");
    document.write("<td>" + nombres[i] + "</td>");
    document.write("</tr>");
}
document.write("</table>");

// mostrando el nombre buscado en el html

document.write("<h1>Nombre buscado</h1>");
document.write("<p>El nombre buscado es: " + nombre + "</p>");