// Arreglo
var array = new Array();
array[0] = "cadena";
array[1] = 2;
array[2] = 3.56;
array[3] = function(nombre){
    console.log("Hola "+ nombre);
}
array[4] = {curso: "HTML, CSS Y javascript"};

console.log(array);
console.log(array[4].curso);

// Creación de un arreglo asignando valores
var nombres =["Ricardo", "Carlos", "Stephan", "Emmanuel"];
console.log(nombres);

for(var i=0; i < nombres.length; i++)
{
    console.log("Hola "+nombres[i]);
}

nombres[100] = "Juan";
for(var i=0; i < nombres.length; i++)
{
    console.log("Hola "+nombres[i]);
}

var miObj = {
    nombre: "Adrian",
    curso: "Html, css y javascript",
    unidad: "Multimedia"
};

for(var prop in miObj)
{
    console.log(prop + ":" + miObj[prop]);
}

for(var nombre in nombres)
{
    console.log("Hola " + nombres[nombre]);
}