import * as math from "./controller.js";
import chalk from "chalk";

try {
    const suma1 = math.suma(1, 2);
    const suma2 = math.suma(4, 5);
    const multiplica = math.multiplica(suma1, suma2);

    console.log("El resultado de la primera suma es:", suma1);
    console.log("El resultado de la segunda suma es:", suma2);
    console.log(
        chalk.blue("El resultado de la multiplicacion es:", multiplica)
    );
} catch (e) {
    console.error(chalk.red(e));
}
