// Функция для рандомного расположения эмодзи по странице
function randomPositionEmoji() {
    const emojis = document.querySelectorAll('.alien-emoji');
    emojis.forEach(emoji => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        const randomDuration = Math.random() * 1 + 0.2; // Быстрое время мигания

        emoji.style.left = `${randomX}px`;
        emoji.style.top = `${randomY}px`;
        emoji.style.animationDuration = `${randomDuration}s`;
    });
}

// Функция для анимации каждой буквы текста
function animateText() {
    const textElement = document.querySelector('.neon-text');
    const textContent = textElement.textContent;
    textElement.innerHTML = '';  // Очищаем текст

    // Создаем span для каждой буквы
    textContent.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;

        // Применяем анимацию для каждой буквы с задержкой
        span.style.animation = `neonBlinkLetter 1s infinite`;
        span.style.animationDelay = `${Math.random()}s`; // Случайная задержка для каждой буквы

        textElement.appendChild(span);
    });
}

// Запускаем функции при загрузке страницы
window.onload = function() {
    randomPositionEmoji();
    animateText();
};

// Обновляем позиции эмодзи при изменении размера окна
window.onresize = randomPositionEmoji;
