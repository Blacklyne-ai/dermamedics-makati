import Lenis from "lenis";

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ---------- Smooth scroll (Lenis) ---------- */
let lenis: Lenis | null = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothWheel: true });
  (window as unknown as { __lenis: Lenis }).__lenis = lenis;
  const raf = (time: number) => { lenis?.raf(time); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (target) { e.preventDefault(); lenis?.scrollTo(target as HTMLElement, { offset: -90 }); }
    });
  });
}

/* ---------- Scroll progress ---------- */
const bar = document.getElementById("scroll-progress");
const updateProgress = () => {
  if (!bar) return;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const p = h > 0 ? window.scrollY / h : 0;
  bar.style.transform = `scaleX(${p})`;
};

/* ---------- Parallax ---------- */
const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
const applyParallax = () => {
  if (reduce) return;
  const vh = window.innerHeight;
  for (const el of parallaxEls) {
    const speed = parseFloat(el.dataset.parallax || "0");
    const rect = el.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    const offset = (center - vh / 2) * speed * -1;
    el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
  }
};

let ticking = false;
const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { updateProgress(); applyParallax(); ticking = false; });
};
if (lenis) lenis.on("scroll", onScroll);
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", () => { applyParallax(); }, { passive: true });
updateProgress(); applyParallax();

/* ---------- Reveal on scroll ---------- */
const revealEls = document.querySelectorAll<HTMLElement>(".reveal, [data-reveal]");
if (!reduce && "IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const el = e.target as HTMLElement;
        const delay = el.dataset.delay;
        if (delay) el.style.transitionDelay = `${delay}ms`;
        el.classList.add("is-in");
        io.unobserve(el);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

  revealEls.forEach((el) => {
    if (el.hasAttribute("data-stagger")) {
      Array.from(el.children).forEach((c, i) => {
        (c as HTMLElement).classList.add("reveal");
        (c as HTMLElement).dataset.delay = String(i * 80);
        io.observe(c as HTMLElement);
      });
    }
    io.observe(el);
  });

  const failsafe = () => {
    document.querySelectorAll<HTMLElement>(".reveal:not(.is-in), [data-reveal]:not(.is-in)").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 1.1) el.classList.add("is-in");
    });
  };
  window.addEventListener("load", () => setTimeout(failsafe, 200));
  setTimeout(failsafe, 2500);
} else {
  revealEls.forEach((el) => el.classList.add("is-in"));
  document.querySelectorAll<HTMLElement>("[data-stagger] > *").forEach((c) => c.classList.add("is-in"));
}

/* ---------- Animated counters ---------- */
const counters = document.querySelectorAll<HTMLElement>("[data-count]");
if (counters.length && "IntersectionObserver" in window) {
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement;
      cio.unobserve(el);
      const target = parseFloat(el.dataset.count || "0");
      const suffix = el.dataset.suffix || "";
      if (reduce) { el.textContent = `${target}${suffix}`; return; }
      const dur = 1400; const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = `${Math.round(target * eased)}${suffix}`;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => cio.observe(c));
}

/* ---------- Magnetic buttons + tilt (fine pointers) ---------- */
if (fine && !reduce) {
  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    const strength = parseFloat(el.dataset.magnetic || "0.3");
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });

  document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
    const max = parseFloat(el.dataset.tilt || "6");
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateZ(0)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });
}

/* ---------- Click feedback ---------- */
if (!reduce) {
  const targets = document.querySelectorAll<HTMLElement>("[data-tilt], a.group");
  targets.forEach((el) => {
    el.addEventListener("pointerdown", () => {
      el.classList.remove("click-pulse");
      void el.offsetWidth;
      el.classList.add("click-pulse");
    });
    el.addEventListener("animationend", (e) => {
      if (e.animationName === "clickpulse") el.classList.remove("click-pulse");
    });
  });
}
