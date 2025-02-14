const answers_no = [
    "No",
    "Are you sure?",
    "Are you really sure??",
    "Are you really really sure???",
    "Think again?",
    "Don't believe in second chances?",
    "Why are you being so cold?",
    "Maybe we can talk about it?",
    "I am not going to ask again!",
    "Ok now this is hurting my feelings!",
    "You are now just being mean!",
    "Why are you doing this to me?",
    "Please give me a chance!",
    "I am begging you to stop!"
];

const yes_button = document.getElementById('yes-button');
const no_button = document.getElementById('no-button');
const banner = document.getElementById('banner');
const messageDiv = document.querySelector('.message');
const buttonsDiv = document.querySelector('.buttons');
let index = 0;
let size = 50;
let clicks = 0;

// Handle "No" button clicks
no_button.addEventListener('click', () => {
    clicks++;

    if (index < answers_no.length - 1) {
        no_button.innerHTML = answers_no[index];
        index++;
    }

    if (index === answers_no.length - 1) {
        moveNoButton();
    }

    // Increase "Yes" button size
    size += 10;
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
});

// Moves "No" button randomly when last text is reached
function moveNoButton() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    no_button.style.position = "absolute";
    no_button.style.left = `${x}px`;
    no_button.style.top = `${y}px`;
}

// Handle "Yes" button click
yes_button.addEventListener('click', () => {
    banner.src = "public/images/yes.gif";
    buttonsDiv.style.display = "none";
    messageDiv.style.display = "block";
    
    startConfetti();
    createFloatingEmojis();
});

// 🎉 Confetti Effect
function startConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-container");
    document.body.appendChild(confetti);

    for (let i = 0; i < 50; i++) {
        let confettiPiece = document.createElement("div");
        confettiPiece.classList.add("confetti");
        confettiPiece.style.left = Math.random() * 100 + "vw";
        confettiPiece.style.animationDuration = (Math.random() * 3 + 2) + "s";
        confettiPiece.style.backgroundColor = randomColor();
        confetti.appendChild(confettiPiece);
    }

    setTimeout(() => confetti.remove(), 5000);
}

function randomColor() {
    const colors = ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1bd"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 💖 Floating Heart Emojis
function createFloatingEmojis() {
    const emojis = ['💖', '💘', '💕', '💞', '💓', '😍'];
    for (let i = 0; i < 15; i++) {
        let emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.querySelector('.emoji-container').appendChild(emoji);
        setTimeout(() => emoji.remove(), 5000);
    }
}
