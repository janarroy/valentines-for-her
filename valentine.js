const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const dogImage = document.getElementById("dogImage");

// Image paths
const defaultImg = "Images/Default.png";
const noImg = "Images/No.png";
const yesImg = "Images/Yes.png";

// Move No button randomly
function moveNoButton() {
  const x = Math.random() * 220 - 110;
  const y = Math.random() * 160 - 80;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Confetti
function launchConfetti() {
  const colors = ["#e5e5ea", "#d1d1d6", "#f2f2f7"];

  for (let i = 0; i < 45; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration =
      2 + Math.random() * 1.5 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

// Hover / click NO
noBtn.addEventListener("mouseenter", () => {
  dogImage.src = noImg;
  moveNoButton();
});

noBtn.addEventListener("click", () => {
  dogImage.src = noImg;
  moveNoButton();
});

// YES click
yesBtn.addEventListener("click", () => {
  dogImage.src = yesImg;
  noBtn.style.display = "none";
  yesBtn.innerText = "BANANA & PAPAYAAAA";

  document.body.classList.add("show-photos");
  launchConfetti();
});
