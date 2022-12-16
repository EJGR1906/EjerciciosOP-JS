// Crea un archivo JS que contenga las siguientes líneas
// - Una variable que contenga tu altura en centímetros (entero)
// - Una variable que contenga tu altura en metros (número de coma flotante)
// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
// - Una variable que contenga tu altura en metros redondeada hacia arriba
// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let altura_cm = 163;
let altura_m = altura_cm / 100;
let peso = 73.5;
let altura_m_round = Math.ceil(altura_m);
let peso_round = Math.floor(peso);
let show = Number.MAX_VALUE + 1 === Number.MAX_VALUE

console.log(altura_cm)
console.log(altura_m)
console.log(peso)
console.log(altura_m_round)
console.log(peso_round)
console.log(show)