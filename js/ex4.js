let num = parseInt(prompt("Introduce número a factorizar"));

const calculaFactorial = (parametro) => {
    if (parametro < 0) {
        alert("Por favor, introduce un número no negativo.");
        return;
    }

    let numFinal = 1;

    for (let i = 2; i <= parametro; i++) {
        numFinal *= i;
    }

    alert(numFinal);
}

calculaFactorial(num);
