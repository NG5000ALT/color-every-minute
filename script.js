document.addEventListener("DOMContentLoaded", () => {
  function randomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 60%)`;
  }

  function changeBackground() {
    document.body.style.backgroundColor = randomColor();
  }

  // Initial color
  changeBackground();

  // Manual change (button)
  const button = document.getElementById("colorButton");
  if (button) {
    button.addEventListener("click", changeBackground);
  } else {
    console.error("Button not found");
  }

  // Sync to real minute boundary
  const now = new Date();
  const msUntilNextMinute =
    (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

  setTimeout(() => {
    changeBackground();
    setInterval(changeBackground, 60000);
  }, msUntilNextMinute);
});
