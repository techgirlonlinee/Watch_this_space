window.onload = function () {
  // 1. Initial number placement
  placeNumbers();
  window.addEventListener('resize', placeNumbers);

  // 2. Timer setup
  setInterval(myTimer, 1000);
  myTimer(); // Run once immediately

  // 3. Modal interaction setup
  const indicator = document.querySelector(".day-indicator");
  const modal = document.querySelector(".about-modal");

  if (indicator && modal) {
    indicator.style.cursor = "pointer";
    indicator.addEventListener("click", () => {
      modal.classList.toggle("open");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
  }
};

function placeNumbers() {
  document.querySelectorAll('.clock-num').forEach(n => n.remove());

  const W = window.innerWidth;
  const H = window.innerHeight;
  const m = H * 0.05;
  const cx = W / 2;
  const cy = H / 2;
  const bx = cx - m;
  const by = cy - m;

  for (let n = 1; n <= 12; n++) {
    const angle = n * 30;
    const rad = (angle * Math.PI) / 180;
    const dx = Math.sin(rad);
    const dy = -Math.cos(rad);
    const tx = dx !== 0 ? bx / Math.abs(dx) : Infinity;
    const ty = dy !== 0 ? by / Math.abs(dy) : Infinity;
    const t = Math.min(tx, ty);

    const el = document.createElement('div');
    el.className = 'clock-num';
    el.innerText = n;
    el.style.position = 'absolute';
    el.style.left = (cx + dx * t) + 'px';
    el.style.top = (cy + dy * t) + 'px';
    el.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(el);
  }
}

function myTimer() {
  const now = new Date();
  const hour = now.getHours() * 30 + Math.floor(now.getMinutes() / 12) * 6;

  // Your requested gradient string
  document.body.style.backgroundImage = `conic-gradient(from ${hour}deg, #c4c4c4, #fff)`;

  const line = document.querySelector('.day-indicator');
  if (line) {
    line.innerHTML = now.getHours() >= 12 ? 'PM' : 'AM';
  }
}
