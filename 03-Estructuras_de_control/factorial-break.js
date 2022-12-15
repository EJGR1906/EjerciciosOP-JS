// Factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let i = 1;
let j = 1;
while (i <= 10) {
  j *= i;
  if (i == 10) {
    break;
  }
  i++;
}
console.log(j);
