const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const stickers = document.querySelectorAll(".sticker");

let noClicks = 0;

// YES CLICK
yesBtn.addEventListener("click", () => {
  stickers.forEach(sticker => {
    sticker.classList.add("show");
  });

  yesBtn.innerText = "YAY!!! 💖";
  noBtn.style.display = "none";
});

// NO CLICK
noBtn.addEventListener("click", () => {
  noClicks++;

  // Shrink NO button
  const noScale = Math.max(0.35, 1 - noClicks * 0.15);
  noBtn.style.transform = `scale(${noScale})`;

  // Grow YES button
  const yesScale = 1 + noClicks * 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Show one sticker at a time
  if (noClicks < stickers.length) {
    stickers[noClicks].classList.add("show");
  }
});
