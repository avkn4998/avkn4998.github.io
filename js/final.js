function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createFloatingNumber(number) {
    const floatingNumber = document.createElement('div');
    floatingNumber.className = 'floating-number';
    floatingNumber.textContent = number;

    floatingNumber.style.left = getRandomNumber(0, window.innerWidth - 40) + 'px';
    floatingNumber.style.top = getRandomNumber(0, window.innerHeight - 40) + 'px';

    floatingNumber.addEventListener('click', function() {
        appendToPhoneNumber(number);
        document.body.removeChild(floatingNumber);
    });

    document.body.appendChild(floatingNumber);

    animateFloatingNumber(floatingNumber);
}

function animateFloatingNumber(element) {
    const speedX = getRandomNumber(-3, 3);
    const speedY = getRandomNumber(-3, 3);

    function updatePosition() {
        const rect = element.getBoundingClientRect();

        // Check if the element is going off the top or bottom of the screen
        if (rect.top + speedY < 0) {
            element.style.top = window.innerHeight + 'px';
        } else if (rect.bottom + speedY > window.innerHeight) {
            element.style.top = -rect.height + 'px';
        } else {
            element.style.top = rect.top + speedY + 'px';
        }

        // Check if the element is going off the left or right of the screen
        if (rect.left + speedX < 0) {
            element.style.left = window.innerWidth + 'px';
        } else if (rect.right + speedX > window.innerWidth) {
            element.style.left = -rect.width + 'px';
        } else {
            element.style.left = rect.left + speedX + 'px';
        }

        requestAnimationFrame(updatePosition);
    }

    updatePosition();
}




function appendToPhoneNumber(number) {
    const phoneNumberInput = document.getElementById('phoneNumber');
    phoneNumberInput.value += number;
}


for (let i = 0; i < 10; i++) {
    createFloatingNumber(i);
}