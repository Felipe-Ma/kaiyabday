/* Minimal confetti: no deps, local-only */
function startConfetti(canvas, opts = {}) {
  const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
  const parent = canvas.parentElement;
  canvas.width = parent.clientWidth * dpr;
  canvas.height = parent.clientHeight * dpr;
  canvas.style.width = parent.clientWidth + 'px';
  canvas.style.height = parent.clientHeight + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const W = parent.clientWidth;
  const H = parent.clientHeight;
  const count = Math.min(180, Math.floor(W * H / 5000));
  const colors = ['#ff6fa3', '#ff9ec2', '#ffd1e1', '#ffe08a', '#ff8fb7'];
  const grav = 0.12;
  const drag = 0.995;
  const duration = opts.duration || 3000;
  const start = performance.now();

  const parts = Array.from({ length: count }, () => ({
    x: Math.random() * W,
    y: -10 - Math.random() * H * 0.5,
    vx: (Math.random() - 0.5) * 6,
    vy: Math.random() * -2,
    w: 8 + Math.random() * 6,
    h: 6 + Math.random() * 10,
    rot: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
    shape: Math.random() < 0.5 ? 'rect' : 'circle'
  }));

  function frame(t) {
    const elapsed = t - start;
    ctx.clearRect(0, 0, W, H);
    parts.forEach(p => {
      p.vy += grav;
      p.vx *= drag; p.vy *= drag;
      p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      if (p.y > H + 20) { p.y = -20; p.x = Math.random() * W; } // loop up
      ctx.save();
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      if (p.shape === 'rect') ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      else { ctx.beginPath(); ctx.arc(0,0, Math.min(p.w,p.h)/2, 0, Math.PI*2); ctx.fill(); }
      ctx.restore();
    });
    if (elapsed < duration) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
