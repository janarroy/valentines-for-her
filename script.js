const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const dogImage = document.getElementById("dogImage");

// Image paths
const defaultImg = "Images/Default.png";
const noImg = "Images/No.png";
const yesImg = "Images/Yes.png";

// Utility: move No button randomly
function moveNoButton() {
  const x = Math.random() * 200 - 100; // left/right
  const y = Math.random() * 150 - 75;  // up/down

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// When hovering over NO
noBtn.addEventListener("mouseenter", () => {
  dogImage.src = noImg;
  moveNoButton();
});

// When clicking NO
noBtn.addEventListener("click", () => {
  dogImage.src = noImg;
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  dogImage.src = yesImg;
  noBtn.style.display = "none";
  yesBtn.innerText = "BANANA & PAPAYA!!";

  launchConfetti(); // 🌸 add this line
});


function launchConfetti() {
  const colors = [
    "#f4b6c2", // pink
    "#d6c7e8", // lavender
    "#cfe8d5", // soft green
    "#f9d5e5"  // light rose
  ];

  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration =
      2 + Math.random() * 1.5 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}

