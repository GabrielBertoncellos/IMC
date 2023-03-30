function calculo() {
    var peso = document.querySelector('input#peso')
    var altura = document.querySelector('input#altura')

    var nPeso = Number(peso.value)
    var nAltura = Number(altura.value)

    var imc = nPeso / (nAltura * nAltura)
    var res = document.querySelector('span.resultado')
    
    if (imc < 18) {
        res.innerHTML = `Seu IMC é de ${imc} e você está abaixo do ideal.`
    } if (imc >= 18 && imc <= 25) {
        res.innerHTML = `Seu IMC é de ${imc} e você está no peso ideal.`
    } if (imc > 25) {
        res.innerHTML = `Seu IMC é de ${imc} e está sobre-peso.`
    }
    
}