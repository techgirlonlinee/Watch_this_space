window.onload = function () {
  // --- 1. Number Placement ---
  const margin = (window.innerHeight * 0.05) + "px";
  const margin2 = (window.innerHeight * 0.05);
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const tan30 = Math.tan((Math.PI) / 6);
  const tan60 = Math.tan((Math.PI) / 3);
  const root3 = Math.sqrt(3);
  const root33 = (Math.sqrt(3)) / 3;

  function createNum(label, css) {
    const el = document.createElement("div");
    el.innerText = label;
    el.style.position = 'absolute';
    Object.assign(el.style, css);
    document.body.appendChild(el);
  }

  // Cardinals
  createNum("12", { top: margin, left: "50%", transform: "translateX(-50%)" });
  createNum("6", { bottom: margin, left: "50%", transform: "translateX(-50%)" });
  createNum("9", { left: margin, top: "50%", transform: "translateY(-50%)" });
  createNum("3", { right: margin, top: "50%", transform: "translateY(-50%)" });

  // Angled Numbers
  const angled = [
    { label: "1", cond: ((windowHeight / 2 - margin2) / (windowWidth / 2 - margin2)) > root3, top: (((0.5 * windowHeight) - ((0.5 * windowWidth) - margin2) * tan60)) + "px", topAlt: margin, right: margin, rightAlt: ((0.5 * windowWidth) - (((0.5 * windowHeight) - margin2) * tan30)) + "px" },
    { label: "2", cond: ((windowHeight / 2 - margin2) / (windowWidth / 2 - margin2)) > root33, top: (((0.5 * windowHeight) - ((0.5 * windowWidth) - margin2) * tan30)) + "px", topAlt: margin, right: margin, rightAlt: ((0.5 * windowWidth) - (((0.5 * windowHeight) - margin2) * tan60)) + "px" },
    { label: "4", cond: ((windowHeight / 2 - margin2) / (windowWidth / 2 - margin2)) > root33, bottom: (((0.5 * windowHeight) - ((0.5 * windowWidth) - margin2) * tan30)) + "px", bottomAlt: margin, right: margin, rightAlt: ((0.5 * windowWidth) - (((0.5 * windowHeight) - margin2) * tan60)) + "px" },
    { label: "5", cond: ((windowHeight / 2 - margin2) / (windowWidth / 2 - margin2)) > root3, bottom: (((0.5 * windowHeight) - ((0.5 * windowWidth) - margin2) * tan60)) + "px", bottomAlt: margin, right: margin, rightAlt: ((0.5 * windowWidth) - (((0.5 * windowHeight) - margin2) * tan30)) + "px" },
    { label: "7", cond: ((windowHeight / 2 - margin2) / (windowWidth / 2 - margin2)) > root3, bottom: (((0.5 * windowHeight) - ((0.5 * windowWidth) - margin2) * tan60)) + "px", bottomAlt: margin, left: margin, leftAlt: ((0.5 * windowWidth) - (((0.5 * windowHeight) - margin2) * tan30)) + "px" },
    { label: "8", cond: ((windowHeight / 2 - margin2) / (windowWidth / 2 - margin2)) > root33, bottom: (((0.5 * windowHeight) - ((0.5 * windowWidth) - margin2) * tan30)) + "px", bottomAlt: margin, left: margin, leftAlt: ((0.5 * windowWidth) - (((0.5 * windowHeight) - margin2) * tan60)) + "px" },
    { label: "10", cond: ((windowHeight / 2 - margin2) / (windowWidth / 2 - margin2)) > root33, top: (((0.5 * windowHeight) - ((0.5 * windowWidth) - margin2) * tan30)) + "px", topAlt: margin, left: margin, leftAlt: ((0.5 * windowWidth) - (((0.5 * windowHeight) - margin2) * tan60)) + "px" },
    { label: "11", cond: ((windowHeight / 2 - margin2) / (windowWidth / 2 - margin2)) > root3, top: (((0.5 * windowHeight) - ((0.5 * windowWidth) - margin2) * tan60)) + "px", topAlt: margin, left: margin, leftAlt: ((0.5 * windowWidth) - (((0.5 * windowHeight) - margin2) * tan30)) + "px" },
  ];

  angled.forEach(n => {
    let css = {};
    if (n.cond) {
      if (n.top) css.top = n.top; else css.bottom = n.bottom;
      css[n.right ? 'right' : 'left'] = margin;
    } else {
      if (n.top) css.top = n.topAlt; else css.bottom = n.bottomAlt;
      css[n.right ? 'right' : 'left'] = n.rightAlt || n.leftAlt;
    }
    createNum(n.label, css);
  });

  // --- 2. Timer Setup ---
  setInterval(myTimer, 1000);
  myTimer();

  // --- 3. Modal Interaction ---
  const indicator = document.querySelector(".day-indicator");
  const modal = document.querySelector(".about-modal");
  const closeBtn = document.querySelector(".about-close");

  if (indicator && modal) {
    indicator.style.cursor = "pointer";
    indicator.addEventListener("click", () => modal.classList.add("open"));

    if (closeBtn) {
      closeBtn.addEventListener("click", () => modal.classList.remove("open"));
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
  }
};

// --- Helper Functions ---
function myTimer() {
  const now = new Date();
  const hour = now.getHours() * 30 + Math.floor(now.getMinutes() / 12) * 6;
  document.body.style.backgroundImage = `conic-gradient(from ${hour}deg, #c4c4c4, #fff)`;

  const line = document.querySelector(".day-indicator");
  if (line) {
    line.innerHTML = now.getHours() >= 12 ? 'PM' : 'AM';
  }
}
