function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rellenarArrayAleatorio(tamano) {
    let array = [];
    for (let i = 0; i < tamano; i++) {
        array.push(generarNumeroAleatorio(1, 100));
    }
    return array;
}

function multiplicarArrays(array1, array2) {
    let resultado = [];
    for (let i = 0; i < Math.min(array1.length, array2.length); i++) {
        resultado.push(array1[i] * array2[i]);
    }
    return resultado;
}

let tamanoArray = parseInt(prompt("Introduce la dimensión de los arrays"));
let array1 = rellenarArrayAleatorio(tamanoArray);
let array2 = rellenarArrayAleatorio(tamanoArray);
let resultadoMultiplicacion = multiplicarArrays(array1, array2);

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Resultado de la multiplicación:", resultadoMultiplicacion);

