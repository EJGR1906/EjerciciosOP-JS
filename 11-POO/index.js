class Estudiante {
    #nombre;
    #asignaturas = ["Javascript", "HTML", "CSS"];

    constructor(nombre) {
        this.#nombre = nombre;
    }
    obtenDatos() {
        return { Nombre: this.#nombre, Asignaturas: this.#asignaturas };
    }
}

const primer_estudiante = new Estudiante("Eduardo");

console.log(primer_estudiante.obtenDatos());
