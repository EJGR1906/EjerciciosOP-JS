const mis_datos = {
  nombre: "Eduardo",
  apellido: "Gonzalez",
  edad: 21,
  altura: 1.64,
  eresDesarrollador: true,
};
console.log(mis_datos)

let miEdad = mis_datos.edad;
console.log(miEdad)

const listaObjetos = [
  mis_datos,
  {
    nombre: "Jose",
    apellido: "Oliveira",
    edad: 22,
    altura: 1.81,
    eresDesarrollador: true,
  },
  {
    nombre: "Bernardo",
    apellido: "Torres",
    edad: 20,
    altura: 1.72,
    eresDesarrollador: false,
  },
];
console.log(listaObjetos)

const listaObjetosOrdenadas = listaObjetos
listaObjetosOrdenadas.sort((a,b) => a.edad - b.edad)
console.log(listaObjetosOrdenadas)
