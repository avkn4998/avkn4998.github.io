function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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
        createFloatingNumbers(phoneNumber[i], 5); 
    }
}

const phoneNumber = "1234567890"; 
spawnFloatingNumbers(phoneNumber);



function animateFloatingNumber(element) {
    const speedX = getRandomNumber(-3, 3);
    const speedY = getRandomNumber(-3, 3);

    function updatePosition() {
        const rect = element.getBoundingClientRect();

      
        if (rect.top + speedY < 0) {
            element.style.top = window.innerHeight + 'px';
        } else if (rect.bottom + speedY > window.innerHeight) {
            element.style.top = -rect.height + 'px';
        } else {
            element.style.top = rect.top + speedY + 'px';
        }


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



function appendToPhoneNumber(number) {
    const phoneNumberInput = document.getElementById('phoneNumber');
    phoneNumberInput.textContent += number;
}


function restartNumbers() {
    const floatingNumbers = document.querySelectorAll('.floating-number');
    floatingNumbers.forEach(number => {
        document.body.removeChild(number);
    });

    const phoneNumberInput = document.getElementById('phoneNumber');
    phoneNumberInput.textContent = '';

    spawnFloatingNumbers(phoneNumber);
}


function submitPhoneNumber() {
    const phoneNumberInput = document.getElementById('phoneNumber');
    const phoneNumber = phoneNumberInput.textContent.trim();

    if (isValidPhoneNumber(phoneNumber)) {
        // Valid phone number, you can submit it or perform any desired action
        alert('Phone number submitted: ' + phoneNumber);
    } else {
        // Invalid phone number, show a custom error message
        alert('You gotta be quicker than that!');
    }
}

function isValidPhoneNumber(phoneNumber) {
    // Simple validation for a 10-digit phone number
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
}

