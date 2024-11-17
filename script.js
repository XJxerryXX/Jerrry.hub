function zmenGradient() {
    // Získání těla stránky
    const body = document.querySelector('body');
    
    // Definování nových barev pro gradient
    const novaBarva1 = getRandomColor();
    const novaBarva2 = getRandomColor();
    const novaBarva3 = getRandomColor();

    // Nastavení nového gradientu
    body.style.background = `linear-gradient(45deg, ${novaBarva1}, ${novaBarva2}, ${novaBarva3})`;
}

// Funkce pro generování náhodné barvy
function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
}
