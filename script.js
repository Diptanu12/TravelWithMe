// Selecting the elements
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');
const questionText = document.querySelector('.question');
const wrapper = document.querySelector('.wrapper');

// Storing the original position of the No button
const originalPosition = {
    x: noButton.offsetLeft,
    y: noButton.offsetTop
};

// Function to get a random position within the wrapper element
function getRandomPosition() {
    const maxWidth = wrapper.offsetWidth - noButton.clientWidth;
    const maxHeight = wrapper.offsetHeight - noButton.clientHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
    return { x: randomX, y: randomY };
}

let moveInterval;

// Function to start button movement
function startMovement() {
    moveInterval = setInterval(() => {
        const newPosition = getRandomPosition();
        noButton.style.left = newPosition.x + 'px';
        noButton.style.top = newPosition.y + 'px';
    }, 50);
}

// Function to stop button movement
function stopMovement() {
    clearInterval(moveInterval);
}

// Adding event listeners for hover
noButton.addEventListener('mouseenter', startMovement);
noButton.addEventListener('mouseleave', stopMovement);

// Adding click event listener to the Yes button
yesButton.addEventListener('click', () => {
    // Reset the position of the No button
    noButton.style.position = 'static';
    noButton.style.left = originalPosition.x + 'px';
    noButton.style.top = originalPosition.y + 'px';
    questionText.textContent = "Lets Go To Kashmir 🏞⛰💕😍";
   
});
