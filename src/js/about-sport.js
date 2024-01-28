// Отримуємо елемент іконки
const iconElement = document.querySelector('.icon-about-sport');

// Ініціалізуємо кут обертання
let rotationAngle = 0;

// Функція для крутіння іконки
function rotateIcon() {
    rotationAngle += 1; // Швидкість обертання
    iconElement.style.transform = `rotate(${rotationAngle}deg)`;
}

// Встановлюємо інтервал для виклику функції rotateIcon кожні 50 мілісекунд
const rotationInterval = setInterval(rotateIcon, 10);
