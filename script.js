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

// When clicking YES
yesBtn.addEventListener("click", () => {
  dogImage.src = yesImg;

  // Optional: disable the No button so it stops moving
  noBtn.style.display = "none";

  // Optional: change text
  yesBtn.innerText = "YAY 💖";
});
