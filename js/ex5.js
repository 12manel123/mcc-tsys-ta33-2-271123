let num = parseInt(prompt("Indica qué número quieres convertir en binario"));
let binario = pasarABinario(num);

function pasarABinario(num) {
    let binario = [];

    while (num > 0) {
        binario.push(num % 2);
        num = Math.floor(num / 2);
    }

    if (binario.length === 0) {
        binario.push(0);
    }

    binario.reverse();
    return binario.join('');
}

alert(`El número ${num} en binario es: ${binario}`);
