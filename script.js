function randomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 60%)`;
}

function changeBackground() {
  document.body.style.backgroundColor = randomColor();
}

// Change immediately on load
changeBackground();

// Change every minute (60,000 ms)
setInterval(changeBackground, 60000);
