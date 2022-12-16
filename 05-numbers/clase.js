//Sesion 05 - Numbers

//Principales operaciones aritmeticas
let a = 3.4;
let b = 3.1;

// Suma(+)
console.log(a + b);
//Resta(-)
console.log(a - b);
//Multiplicacion(*)
console.log(a * b);
//Division(/)
console.log(a / b);

// representacion de los numeros en cadenas de texto
console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

let c = 3.3;
let d = c * 3;

console.log(d);
console.log(typeof d);

// Redondeo de numeros decimales

//.toFixed(x) - Limitar el numero de decimales al valor x
console.log(d.toFixed(1));
console.log(typeof d.toFixed(1));

//.toPrecision(x) - Limita el numero de cifras significativas al valor x
console.log(d.toPrecision(2));
console.log(typeof d.toPrecision(2));

///////////////////////////////////////////////////////////

//Operador .valueOf() - Obtener valores numericos a partir de lliterales
let a_ = new Number(3);
let b_ = new Number(4);

console.log(typeof b_);
console.log(a_.valueOf());
console.log(a_ + b_);

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

//NaN (NOt a Number) - Infinity
let n = Number("Adios");

console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);

let divisor_2 = null;
console.log(numerador / divisor_2);

// Como convertir los string a valores numericos con Number, parseInt y parseFloat
let numero = "5.89";
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2);

console.log(Number(numero));

console.log(parseInt(numero));

console.log(parseFloat(numero));

// Numeros hexadecimales

let numHex = "0x3a980";

console.log(parseInt(numHex, 16));

// Obtener los valores maximos y minimos en javascript
let min_precision = Number.EPSILON;
let min_value = Number.MIN_VALUE;
let max_value = Number.MAX_VALUE;

console.log(min_precision)
console.log(min_value)
console.log(max_value)