const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

// Function to play sound
function playSound(key) {
  const audio = document.getElementById(key);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  // Get pad name (parent id)
  const pad = audio.parentElement;
  display.innerText = pad.id;
}

// Click event
pads.forEach(pad => {
  pad.addEventListener("click", () => {
    const key = pad.innerText;
    playSound(key);
  });
});

// Keyboard event
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  playSound(key);
});