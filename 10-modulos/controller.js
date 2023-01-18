const errorNumero = Error("Uno de los parametros introducidos no es un numero");
//Funcion suma
export function suma(a = Number, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a + b;
    }
    throw errorNumero;
}

//Funcion multiplica
export function multiplica(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a * b;
    }
    throw errorNumero;
}
