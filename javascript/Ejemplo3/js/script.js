//Concatenación de cadenas
var str= "Hola";
// str += " Mundo";
str = str + " Mundo";
console.log("¡"+str+"!" );

// Operadores matemáticos
console.log((5+4)/2);
console.log(6-2);
console.log(4%2);
console.log(4*1000);
console.log(undefined/5);

function test(a)
{
    console.log(a/5);
}

test();
test(10);

//Operadores relacionales
var x =4, y = 4;
if( x == y){
    console.log("x=4 es igual a y=4");
}
x="4";
if(x == y){
    console.log("x='4' es igual a y=4");
}
//Operador estrictamente igual
if(x === y){
    console.log("Estrictamente: x='4' es igual a y=4");
}else{
    console.
        log("Estrictamente: x='4' NO ES IGUAL a y=4")
}

x=5;
if(x!=y){
    console.log("x=5 es distinto de y=4");
}

if(x > y){
    console.log("x=5 es mayor que y=4");
}

x=3;
if(x < y){
    console.log("x=3 es menor que y=4");
}
x=10;
if(x >= y){
    console.log("x=5 es mayor o igual que y=4");
}

x=3;
if(x <= y){
    console.log("x=3 es menor o igual que y=4");
}


/******************************************************
 * Operadores lógicos
 ******************************************************/

console.log(true || false);
console.log(true || true);
console.log(false || false);


console.log(true && false);
console.log(true && true);
console.log(false && false);

if(false || null || undefined || "" || 0 || NaN){
    console.log("Este código siempre se ejecuta");
}else{
    console.log("Todo es falso");
}

if(true && "hello" && 1 && -1 && "false"){
    console.log("Todo es verdadero");
}

var sum = 0;
for(var i=1; i <= 100; i++){
    console.log(i);
    sum+=i; // sum = sum +i
}
console.log("La suma de los primeros 100 núumeros es: "+sum);

var sum2=0;
var j=1;
while(j<101){
    sum2+=j;
    j++;
}
console.log("La suma de los primeros 100 núumeros es: "+sum2);

function test2(arg1){
    arg1 = arg1 || "predeterminado";
    console.log("Valor: "+ arg1);
}

test2();
test2("Hola");