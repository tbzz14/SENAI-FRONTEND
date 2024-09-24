// Função para calcular o IMC
function calculateIMC() {
    // Obtém os valores de peso e altura
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    // Verifica se os valores são válidos
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("imcResult").innerText = "Por favor, insira valores válidos.";
        return;
    }

    // Calcula o IMC
    const imc = weight / (height * height);

    // Seleciona o elemento de resultado
    const resultElement = document.getElementById("imcResult");

    // Define a cor e o texto de acordo com o valor do IMC
    if (imc < 18.5) {
        resultElement.innerText = `Seu IMC é: ${imc.toFixed(2)} (Abaixo do peso)`;
        resultElement.className = "imc-abaixo";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultElement.innerText = `Seu IMC é: ${imc.toFixed(2)} (Peso normal)`;
        resultElement.className = "imc-normal";
    } else if (imc >= 25 && imc < 29.9) {
        resultElement.innerText = `Seu IMC é: ${imc.toFixed(2)} (Sobrepeso)`;
        resultElement.className = "imc-sobrepeso";
    } else {
        resultElement.innerText = `Seu IMC é: ${imc.toFixed(2)} (Obesidade)`;
        resultElement.className = "imc-obesidade";
    }
} 