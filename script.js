// Funkce pro změnu barvy pozadí
function changeBackgroundColor() {
    // Generujeme náhodnou barvu v hexadecimálním formátu
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Měníme barvu pozadí stránky
    document.body.style.backgroundColor = randomColor;
}

// Přidáme událost na kliknutí
document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);
