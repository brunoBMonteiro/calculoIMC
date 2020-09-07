const nome = "Carlos";
const peso = 120;
const altura = 1.88;
const imc = peso / (altura * altura);

function calculaImc () {
    if (imc >= 30) {
        console.log('Carlos você está acima do peso')
    } else {
        console.log('Carlos você nao está acima do peso')
    }
}

calculaImc();
