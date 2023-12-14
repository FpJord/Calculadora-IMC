const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const peso = document.getElementById('weight').value;
    const altura = document.getElementById('height').value;

    const imc = (peso / (altura * altura)).toFixed(2)

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden')

    if (imc < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
        value.style.color='red'
    } else if (imc >= 18.5 && imc <= 25) {
        description = 'Você esta no peso ideal!';
        value.style.color='green';
    } else if (imc > 25 && imc <= 30) {
        description = "Cuidado! Você está com sobrepeso!"
    } else if (imc > 30 && imc <= 35) {
        description = "Cuidado! Você está com obesidade mórbida!"
    } else {
        description = "Cuidado! Você está com obesidade mórbida!"
    }

    value.textContent = imc.replace('.', ',')
    document.getElementById('description').textContent = description;


})