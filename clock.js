let clockInterval = null;

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function startClock() {
  if (!clockInterval) {
    updateClock(); // run once immediately
    clockInterval = setInterval(updateClock, 1000);
  }
}

function stopClock() {
  clearInterval(clockInterval);
  clockInterval = null;
}
