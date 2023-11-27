let num = parseInt(prompt("Introduce un número"));

const calcPrimo = (valorNum) => {
    let primo = true;

    for (let i = 2; i < valorNum; i++) {
        if (valorNum % i === 0) {
            primo = false;
            break;
        }
    }
    
    alert(primo);
}

calcPrimo(num);
