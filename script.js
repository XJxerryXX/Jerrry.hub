// Funkce pro změnu pozadí
function zmenGradient() {
    // Získání těla dokumentu (celého HTML)
    const body = document.body;

    // Definice nových barev pro gradient
    const novyGradient = `linear-gradient(45deg, rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}), rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}), rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}))`;

    // Nastavení nového pozadí
    body.style.background = novyGradient;
}

// Funkce pro generování náhodného čísla mezi min a max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Změna pozadí každých 5 sekund
setInterval(zmenGradient, 5000);
