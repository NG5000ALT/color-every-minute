document.addEventListener("DOMContentLoaded", () => {
  let hue = Math.floor(Math.random() * 360);
  const saturation = 70;
  let lightness = 60;

  const slider = document.getElementById("brightnessSlider");
  const button = document.getElementById("colorButton");

  function applyColor() {
    document.body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  function generateNewColor() {
    hue = Math.floor(Math.random() * 360);
    applyColor();
  }

  // Initial color
  applyColor();

  // Manual change
  button.addEventListener("click", generateNewColor);

  // Brightness control
  slider.addEventListener("input", (e) => {
    lightness = e.target.value;
    applyColor();
  });

  // Sync to real minute boundary
  const now = new Date();
  const msUntilNextMinute =
    (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

  setTimeout(() => {
    generateNewColor();
    setInterval(generateNewColor, 60000);
  }, msUntilNextMinute);
});
