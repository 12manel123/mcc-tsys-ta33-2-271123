let euros = parseFloat(prompt("Introduce la cantidad de euros a convertir"));
let moneda = prompt("Tipo de moneda: libras, dólares o yenes");

const Libras = 0.86;
const Dolares = 1.28611;
const Yenes = 129.852;

function convertirMoneda(euros, moneda) {
    if (esNumeroPositivo(euros)) {
        switch (moneda.toLowerCase()) {
            case "libras":
                mostrarCambio(euros * Libras, moneda);
                break;
            case "dólares":
                mostrarCambio(euros * Dolares, moneda);
                break;
            case "yenes":
                mostrarCambio(euros * Yenes, moneda);
                break;
            default:
                alert("Por favor, introduce una moneda válida");
                break;
        }
    } else {
        alert("La cantidad de euros debe ser un número positivo");
    }
}

function esNumeroPositivo(num) {
    return !isNaN(num) && parseFloat(num) > 0;
}

function mostrarCambio(cantidad, monedaDestino) {
    console.log(`El cambio de ${euros} euros a ${monedaDestino} es: ${cantidad.toFixed(2)}`);
}

convertirMoneda(euros, moneda);
