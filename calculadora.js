const suma = require('./sumar');
const resta = require('./restar');
const divida = require('./dividir');
const multiplica = require('./multiplicar');
const process = require('process');
let operacion = process.argv[2].toLowerCase(); /* operacion por consola */
let numero1 = Number(process.argv[3]); /* primer numero */
let numero2 = Number(process.argv[4]); /* segundo numero */
if (operacion == "suma") {
    console.log("El resultado de la suma es: " + suma(numero1, numero2))
}
if (operacion == "resta") {
    console.log("El resultado de la resta es: " + resta(numero1, numero2))
}
if (operacion == "multiplica") {
    console.log("El resultado de la multiplicación es: " + multiplica(numero1, numero2))
}
if (operacion == "divida") {
    console.log("El resultado de la división es: " + divida(numero1, numero2))
}