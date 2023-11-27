const PI = 3.1416;
let result;

function calcularArea() {
    let figura = prompt("Introduce la figura para la cual deseas calcular el área (círculo, triángulo o cuadrado):");

    switch (figura.toLowerCase()) {
        case 'círculo':
            areaCirculo();
            break;
        case 'triángulo':
            areaTriangulo();
            break;
        case 'cuadrado':
            areaCuadrado();
            break;
        default:
            console.log('Figura no reconocida.');
    }

    console.log("El área es " + result);
}

function areaCirculo() {
    let radio = prompt("Introduce el radio del círculo:");
    radio = parseFloat(radio);
    result = (radio ** 2) * PI;
}

function areaTriangulo() {
    let base = prompt("Introduce la base del triángulo:");
    let altura = prompt("Introduce la altura del triángulo:");
    base = parseFloat(base);
    altura = parseFloat(altura);
    result = (base * altura) / 2;
}

function areaCuadrado() {
    let lado = prompt("Introduce el lado del cuadrado:");
    lado = parseFloat(lado);
    result = lado * lado;
}
calcularArea();