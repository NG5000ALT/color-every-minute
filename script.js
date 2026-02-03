document.addEventListener("DOMContentLoaded", () => {
  let hue = Math.floor(Math.random() * 360);
  const saturation = 70;
  let lightness = 60;

  const slider = document.getElementById("brightnessSlider");
  const button = document.getElementById("colorButton");

  function applyColor() {
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    document.body.style.backgroundColor = color;
  }

  function generateNewColor() {
    hue = Math.floor(Math.random() * 360);
    applyColor();
  }

  // 🔥 Force initial state
  if (slider) {
    lightness = Number(slider.value);
  }

  applyColor();

  // Manual color change
  if (button) {
    button.addEventListener("click", generateNewColor);
  }

  // Brightness slider
  if (slider) {
    slider.addEventListener("input", (e) => {
      lightness = Number(e.target.value);
      applyColor();
    });
  } else {
    console.error("Brightness slider not found");
  }

  // Sync to real minute boundary
  const now = new Date();
  const msUntilNextMinute =
    (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

  setTimeout(() => {
    generateNewColor();
    setInterval(generateNewColor, 60000);
  }, msUntilNextMinute);
});
