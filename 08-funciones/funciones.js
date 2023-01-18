const funcion_sin_parametros = () => true;
console.log(funcion_sin_parametros());

function* autoid() {
    let id = 0;
    while (true) {
        id++;
        if (id === 10) {
            return id;
        }
        yield id;
    }
}
const id = autoid();

console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
