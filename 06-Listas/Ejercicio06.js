// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const lista_compras = ["Ajo", "Brocoli", "Cebolla", "Lechuga", "Papas"];
console.log(lista_compras);

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
lista_compras.push("Aceite de Girasol");
console.log(lista_compras);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista_compras.pop();
console.log(lista_compras);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const lista_peliculas = [
  { titulo: "Avatar 2", director: "James Cameron", fecha: "2022" },
  { titulo: "scarface", director: "Brian De Palma", fecha: "1983" },
  { titulo: "London Has Fallen", director: "Babak Najafi", fecha: "2016" },
];
console.log(lista_peliculas);

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const lista_peliculas_2010 = lista_peliculas.filter(
  (value) => value.fecha >= 2010
);
console.log(lista_peliculas_2010);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores_peliculas = lista_peliculas.map((value) => value.director);
console.log(directores_peliculas);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos_peliculas = lista_peliculas.map((value) => value.titulo);
console.log(titulos_peliculas);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const titulos_directores = titulos_peliculas.concat(directores_peliculas);
console.log(titulos_directores);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const titulos_directores_2 = [...titulos_peliculas, ...directores_peliculas];
console.log(titulos_directores_2);
