class Persona {
    //Private -> #
    #nombre;
    #edad;

    //Protected -> _
    _isDeveloper = true;
    constructor(nom, edad) {
        this.#nombre = nom;
        this.#edad = edad;
    }
    saludo() {
        console.log(
            `Hola mi nombre es ${this.#nombre} tengo ${this.#edad} años`
        );
    }
    nombre() {
        return this.#nombre;
    }
}

const persona = new Persona("Eduardo", 21);
console.log(persona.nombre());
persona.saludo();
