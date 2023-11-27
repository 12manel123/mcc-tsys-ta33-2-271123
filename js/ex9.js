let array = [];
let tamaño = prompt("Introduce tamaño del array");
tamaño = parseInt(tamaño);
let suma = 0;

function llenarArray(min, max) {
    for (let i = 1; i <= tamaño; i++) {
        array.push(parseInt(Math.random() * (max - min + 1)) + min);
    }
}

function mostrarArrayYSuma() {
    array.forEach(numero => {
        suma = suma + numero;
    });

    console.log("Contenido del array:", array);
    console.log("Suma de los valores:", suma);
}

llenarArray(0, 9);
mostrarArrayYSuma();
