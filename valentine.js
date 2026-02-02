// main.js - minimal interactions: hover/click for No, click for Yes to reveal photos + confetti

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const dogImage = document.getElementById('dogImage');

// image paths (adjust if your names differ)
const defaultImg = 'Images/Default.png';
const yesImg = 'Images/Yes.png';
const noImg = 'Images/No.png';

// helper: simple confetti burst (small, monochrome-ish pieces)
function launchConfetti() {
  // quick, lightweight confetti — create several elements and animate via CSS
  const colors = ['#111','rgba(0,0,0,0.7)','#333'];
  for (let i = 0; i < 30; i++) {
    const el = document.createElement('div');
    el.className = 'confetti';
    el.style.left = (50 + (Math.random() - 0.5) * 300) + '%'; // spread around center
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.width = (6 + Math.random() * 10) + 'px';
    el.style.height = el.style.width;
    el.style.opacity = 0.9;
    el.style.transform = `translateY(-10vh) rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(el);
    // remove after animation
    setTimeout(()=> el.remove(), 2600);
  }
}

// NO interactions (hover shows angry dog, click moves it away)
function moveNoButton() {
  // small random move within viewport bounds
  const areaW = Math.max(window.innerWidth * 0.6, 300);
  const x = (Math.random() - 0.5) * areaW;
  const y = (Math.random() - 0.5) * 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  // briefly keep pointer-events so user sees it moved
  setTimeout(()=> {
    noBtn.style.transform = '';
  }, 700);
}

noBtn.addEventListener('mouseenter', () => {
  dogImage.src = noImg;
  moveNoButton();
});

noBtn.addEventListener('click', () => {
  dogImage.src = noImg;
  moveNoButton();
});

// YES click: show photos, change dog to happy yes image, hide no button optionally, and launch confetti
yesBtn.addEventListener('click', () => {
  dogImage.src = yesImg;
  // optional: hide/disable no button after yes
  noBtn.style.display = 'none';

  // reveal background + overlay by toggling class on body
  document.body.classList.add('show-photos');

  // launch confetti
  launchConfetti();

  // small text change for fun
  yesBtn.innerText = 'hehe ❤️';
  yesBtn.disabled = true;
});
