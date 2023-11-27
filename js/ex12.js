function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rellenarArrayAleatorio(tamano) {
    let array = [];
    for (let i = 0; i < tamano; i++) {
        array.push(generarNumeroAleatorio(1, 300));
    }
    return array;
}

function filtrarPorDigito(array, digito) {
    return array.filter(numero => numero % 10 === digito);
}

let tamanoArray = parseInt(prompt("Introduce la dimensión del array"));
let arrayAleatorio = rellenarArrayAleatorio(tamanoArray);
let digitoFiltrar = parseInt(prompt("Introduce el dígito a filtrar"));
let arrayFiltrado = filtrarPorDigito(arrayAleatorio, digitoFiltrar);

console.log("Array Aleatorio:", arrayAleatorio);
console.log(`Números que terminan en ${digitoFiltrar}:`, arrayFiltrado);