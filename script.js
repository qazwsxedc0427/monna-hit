document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const startButton = document.getElementById('start-button');
    const counterDisplay = document.getElementById('counter');
    const messageContainer = document.getElementById('message-container');
    let counter = 0;

    startButton.addEventListener('click', () => {
        video.currentTime = 0;
        video.play();
    });

    video.addEventListener('ended', () => {
        counter++;
        counterDisplay.textContent = `功德數: ${counter}`;
        showRandomMessage();
    });

    function showRandomMessage() {
        const message = document.createElement('div');
        message.textContent = '功德+1';
        message.className = 'message';
        message.style.color = getRandomColor();
        message.style.fontSize = `${getRandomSize()}px`;
        message.style.position = 'absolute';
        message.style.left = `${getRandomPosition()}%`;
        message.style.top = `${getRandomPosition()}%`;
        messageContainer.appendChild(message);

        // 設置消息在一段時間後消失
        setTimeout(() => {
            messageContainer.removeChild(message);
        }, 3000);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getRandomSize() {
        return Math.floor(Math.random() * (48 - 24 + 1)) + 24; // 字體大小在24px到48px之間
    }

    function getRandomPosition() {
        return Math.random() * 80; // 位置在0%到80%之間
    }
});
