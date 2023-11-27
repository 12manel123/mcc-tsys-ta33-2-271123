let array = [];

function llenarArray() {
    for (let i = 1; i <= 10; i++) {
        array.push(prompt(`Introduce el número ${i} del array.`));
    }
}

function mostrarArray() {
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i]} es el valor de la posición ${i} del array.`);
    }
}

llenarArray();
mostrarArray();
