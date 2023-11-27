let numero = prompt("Introduce un número entero positivo para saber cuántas cifras tiene");
let resultado = cifras(numero);

function cifras(numero) {
    if (esEnteroPositivo(numero)) {
        return numero.toString().length;
    } else {
        return "El número es incorrecto";
    }
}

function esEnteroPositivo(num) {
    return !isNaN(num) && Number.isInteger(parseFloat(num)) && parseFloat(num) > 0;
}

alert(`El número ${numero} contiene ${resultado} dígitos.`);
