// Función para encriptar el texto
function encriptar(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Función para desencriptar el texto
function desencriptar(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Función para mostrar el texto en la sección de salida
function displayOutput(text) {
    const outputTextElement = document.getElementById('output-text');
    outputTextElement.style.display = 'block';
    outputTextElement.value = text;
    document.getElementById('copy-btn').style.display = 'block';
}

// Validación para solo aceptar letras minúsculas y espacios, sin números ni acentos
function validarTexto(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

// Evento para encriptar texto
document.getElementById('encrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const errorMessage = document.getElementById('error-message');
    const noImagen = document.querySelector('.mensaje');
    noImagen.style.backgroundImage = 'none';
    document.querySelector('.mensaje__final').style.display = 'none';
    document.querySelector('.mensaje__salida').style.display = 'none';

    if (validarTexto(inputText)) {
        const encryptedText = encriptar(inputText);
        displayOutput(encryptedText);
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Por favor, ingresa solo letras minúsculas sin acentos y espacios.";
    }
});

// Evento para desencriptar texto
document.getElementById('decrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const errorMessage = document.getElementById('error-message');
    const noImagen = document.querySelector('.mensaje');
    noImagen.style.backgroundImage = 'none';
    document.querySelector('.mensaje__final').style.display = 'none';
    document.querySelector('.mensaje__salida').style.display = 'none';

    if (validarTexto(inputText)) {
        const decryptedText = desencriptar(inputText);
        displayOutput(decryptedText);
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Por favor, ingresa solo letras minúsculas sin acentos y espacios.";
    }
});

// Evento para copiar texto
document.getElementById('copy-btn').addEventListener('click', function() {
    const outputText = document.getElementById('output-text').value;
    navigator.clipboard.writeText(outputText).then(function() {
        alert('Texto copiado al portapapeles');
    }, function() {
        alert('Error al copiar el texto');
    });
});
