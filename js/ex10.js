function esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function generarPrimo(min, max) {
    let numeroAleatorio;
    do {
        numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (!esPrimo(numeroAleatorio));
    return numeroAleatorio;
}

let tamanoArray = parseInt(prompt("Introduce el tamaño del array"));
let arrayPrimos = [];

for (let i = 0; i < tamanoArray; i++) {
    arrayPrimos.push(generarPrimo(1, 100));
}

let maximo = Math.max(...arrayPrimos);

console.log("Array de números primos:", arrayPrimos);
console.log("El número primo más grande es:", maximo);
