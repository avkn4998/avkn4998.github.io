function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let numbersStarted = false;

document.getElementById('startButton').addEventListener('click', function() {
    if (!numbersStarted) {
        const phoneNumber = "1234567890"; 
        spawnFloatingNumbers(phoneNumber);
        numbersStarted = true;
    }
});


function createFloatingNumbers(digit, count) {
    for (let i = 0; i < count; i++) {
        createFloatingNumber(digit);
    }
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

function createFloatingNumbers(digit, count) {
    for (let i = 0; i < count; i++) {
        createFloatingNumber(digit);
    }
}

function spawnFloatingNumbers(phoneNumber) {
    for (let i = 0; i < phoneNumber.length; i++) {
        createFloatingNumbers(phoneNumber[i], 5); // Adjust the count as needed
    }
}

const phoneNumber = "1234567890"; // Your phone number
spawnFloatingNumbers(phoneNumber);



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

function updateProgressBar() {
    const phoneNumberInput = document.getElementById('phoneNumber');
    const progressBar = document.getElementById('progressBar');
    
    // Set the width of the progress bar based on the percentage of completion
    const percentage = (phoneNumberInput.textContent.length / 10) * 100; // Assuming a maximum length of 10
    progressBar.style.width = percentage + '%';
}

function appendToPhoneNumber(number) {
    const phoneNumberInput = document.getElementById('phoneNumber');
    phoneNumberInput.textContent += number;

    // Update the progress bar
    updateProgressBar();
}


