function placeNumbers() {
  // remove old ones if re-running on resize
  document.querySelectorAll('.clock-num').forEach(n => n.remove());

  const W = window.innerWidth;
  const H = window.innerHeight;
  const m = H * 0.05;                 // 5vh margin
  const cx = W / 2;
  const cy = H / 2;

  // inner box the numbers are pinned to (margin pulled in from every edge)
  const bx = cx - m;                  // half-width of inner box
  const by = cy - m;                  // half-height of inner box

  for (let n = 1; n <= 12; n++) {
    const angle = n * 30;                       // 0°=12 o'clock, clockwise
    const rad   = angle * Math.PI / 180;
    const dx =  Math.sin(rad);                  // +x = right
    const dy = -Math.cos(rad);                  // +y = down (screen coords)
    const tx = dx !== 0 ? bx / Math.abs(dx) : Infinity;
    const ty = dy !== 0 ? by / Math.abs(dy) : Infinity;
    const t  = Math.min(tx, ty);

    // position of the number, relative to center
    const x = dx * t;
    const y = dy * t;

    const el = document.createElement('div');
    el.className = 'clock-num';
    el.innerText = n;
    el.style.position = 'absolute';
    el.style.left = (cx + x) + 'px';
    el.style.top  = (cy + y) + 'px';
    el.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(el);
  }
}

placeNumbers();
window.addEventListener('resize', placeNumbers);


var myVar = setInterval(myTimer, 1000);

function myTimer() {
  const now = new Date();
  const hour = now.getHours() * 30 + Math.floor(now.getMinutes() / 12) * 6;
document.body.style.backgroundImage = `conic-gradient(from ${hour}deg, #c4c4c4, #fff)`;
  const line = document.querySelector('.day-indicator');
  if (line) line.innerHTML = now.getHours() >= 12 ? 'PM' : 'AM';
}

function myStopFunction() {
  clearInterval(myVar);
}
