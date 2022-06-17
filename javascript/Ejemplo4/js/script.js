// creación de objetos
var empresa = new Object();

empresa.nombre = "Facebook";
empresa.ceo = new Object();
empresa.ceo.nombre = "Adrian Ulises";
empresa.ceo.apellido = "Mercado";

console.log(empresa);
console.table(empresa);

console.log(empresa.ceo.nombre);
console.log(empresa["nombre"]);

var attr ="No de usuarios";
empresa[attr]= 100000000000;

console.log(empresa[attr]);
console.log(empresa["No de usuarios"]);

var Facebook ={
    nombre :"Facebook",
    ceo:{
        nombre: "Adrian",
        apellido: "Mercado"
    },
    "No de usuario" : 10000000000
};

console.log(Facebook);