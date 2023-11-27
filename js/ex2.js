let cantidad = prompt("Introduce la cantidad de numeros");
let limInf = parseInt(prompt("Introduce límite inferior"));
let limSup = parseInt(prompt("Introduce límite superior"));
let numeros = [];

function numeroAleatorio(cantidad, limInf, limSup) {
    while (numeros.length < cantidad) {
        let numero = parseInt(Math.random() * (limSup - limInf + 1) + limInf);
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }
}

numeroAleatorio(cantidad, limInf, limSup);
console.log(numeros);