const canvas = document.querySelector("#orb");
const context = canvas.getContext("2d");

function drawOrb(rotation = 0) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  const center = canvas.width / 2;
  const radius = 208;
  const tilt = .37;
  const yaw = .31;
  const tau = 2 * Math.PI;
  const project = (latitude, longitude) => {
    const x = Math.cos(latitude) * Math.cos(longitude);
    const y = Math.sin(latitude);
    const z = Math.cos(latitude) * Math.sin(longitude);
    const height = y * Math.cos(yaw) - z * Math.sin(yaw);
    return {
      x: center + radius * (x * Math.cos(tilt) - height * Math.sin(tilt)),
      y: center + radius * (x * Math.sin(tilt) + height * Math.cos(tilt)),
      depth: y * Math.sin(yaw) + z * Math.cos(yaw),
    };
  };

  const glow = context.createRadialGradient(center - 40, center - 40, 20, center, center, 265);
  glow.addColorStop(0, "#8f182b70");
  glow.addColorStop(.72, "#54121d80");
  glow.addColorStop(1, "#360b1000");
  context.fillStyle = glow;
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (const [rx, ry, angle] of [[292, 91, -.47], [269, 142, .57], [242, 238, 0]]) {
    context.beginPath();
    context.setLineDash([4, 7]);
    context.ellipse(center, center, rx, ry, angle, 0, tau);
    context.strokeStyle = "#ff9ba55b";
    context.stroke();
  }
  context.setLineDash([]);

  const rings = Array.from({ length: 18 }, (_, row) =>
    Array.from({ length: 36 }, (_, column) =>
      project(Math.PI * ((row + .5) / 18 - .5), tau * (column + (row % 2) * .5) / 36 + rotation)
    )
  );

  const opacityLevels = [.08, .2, .3, .4, .52];
  const segments = opacityLevels.map(() => []);

  function connect(start, end) {
    const depth = (start.depth + end.depth) / 2;
    const level = depth <= 0 ? 0 : Math.ceil(depth * 4);
    segments[level].push([start, end]);
  }

  rings.forEach((ring, row) => ring.forEach((point, column) => {
    connect(point, ring[(column + 1) % ring.length]);
    const next = rings[row + 1];
    if (next) {
      connect(point, next[column]);
      connect(point, next[(column + ring.length + (row % 2 ? 1 : -1)) % ring.length]);
    }
  }));

  segments.forEach((lines, index) => {
    context.beginPath();
    for (const [start, end] of lines) {
      context.moveTo(start.x, start.y);
      context.lineTo(end.x, end.y);
    }
    context.strokeStyle = `rgba(255, 109, 122, ${opacityLevels[index]})`;
    context.stroke();
  });

  rings.flat().forEach(({ x, y, depth }, index) => {
    if (depth < .1 || index % 4 !== 0) return;
    const bright = index % 11 === 0;
    context.beginPath();
    context.arc(x, y, bright ? 3.2 : 1.45, 0, tau);
    context.fillStyle = bright ? "#ffe2e4" : "#ff858e";
    context.shadowColor = "#ff234b";
    context.shadowBlur = bright ? 17 : 4;
    context.fill();
  });
  context.shadowBlur = 0;

  for (const [x, y] of [[112, 143], [516, 165], [541, 409], [172, 532], [81, 363]]) {
    context.beginPath();
    context.moveTo(x - 6, y);
    context.lineTo(x + 6, y);
    context.moveTo(x, y - 6);
    context.lineTo(x, y + 6);
    context.strokeStyle = "#ffb4bcc4";
    context.stroke();
  }
}

if (context) drawOrb();

const motion = window.Motion;
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

const header = document.querySelector(".site-header");
const headerLine = header.querySelector(".header-scroll-line");
const scrollRoot = document.scrollingElement ?? document.documentElement;

function updateHeader() {
  const maxScroll = scrollRoot.scrollHeight - scrollRoot.clientHeight;
  const scrollTop = scrollRoot.scrollTop;
  const progress = maxScroll > 0 ? Math.max(0, Math.min(scrollTop / maxScroll, 1)) : 0;

  header.classList.toggle("is-scrolled", scrollTop > 24);
  headerLine.style.transform = `scaleX(${progress})`;
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", updateHeader);
window.addEventListener("pageshow", updateHeader);
if ("ResizeObserver" in window) {
  new ResizeObserver(updateHeader).observe(document.body);
}

if (motion && !reducedMotion.matches) {
  const { animate, inView, stagger } = motion;
  animate(".hero-item", { opacity: [0, 1], y: [22, 0] }, {
    duration: .64,
    delay: stagger(.1),
    ease: "easeOut",
  });
  animate(canvas, { opacity: [0, 1], scale: [.86, 1], rotate: [-6, 0] }, {
    duration: 1.15,
    ease: "easeOut",
  });
  if (context) {
    let lastFrame = -1;
    const steps = 108;
    const rotation = animate(0, steps, {
      duration: 4.6,
      ease: "easeOut",
      onUpdate: (value) => {
        const frame = Math.floor(value);
        if (frame === lastFrame) return;
        lastFrame = frame;
        drawOrb(frame / steps * Math.PI * 2);
      },
    });
    reducedMotion.addEventListener("change", (event) => {
      if (event.matches) rotation.stop();
    });
  }
  animate(".orb-scan", { opacity: [0, .75, 0], y: [-75, 0, 75] }, {
    duration: 1.55,
    delay: .48,
    ease: "easeInOut",
  });
  animate(".fact > div", { opacity: [0, 1], y: [8, 0] }, {
    duration: .45,
    delay: stagger(.08, { startDelay: .28 }),
    ease: "easeOut",
  });

  if ("IntersectionObserver" in window) {
    inView("[data-reveal]", (element) => {
      const cards = [...element.parentElement.querySelectorAll(":scope > .day, :scope > .step, :scope > .project")];
      const position = Math.max(0, cards.indexOf(element));
      animate(element, { opacity: [.45, 1], y: [16, 0] }, {
        duration: .48,
        delay: Math.min(position, 3) * .075,
        ease: "easeOut",
      });
    }, { amount: .18 });
  }
}
