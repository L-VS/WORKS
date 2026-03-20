// ── CUSTOM CURSOR (desktop only) ──
const cursor = document.getElementById(‘cursor’);
const isTouch = window.matchMedia(’(hover: none) and (pointer: coarse)’).matches;

if (!isTouch) {
document.addEventListener(‘mousemove’, e => {
cursor.style.left = e.clientX + ‘px’;
cursor.style.top  = e.clientY + ‘px’;
});

document.querySelectorAll(‘a, .project-item, .stack-item’).forEach(el => {
el.addEventListener(‘mouseenter’, () => {
cursor.style.width   = ‘18px’;
cursor.style.height  = ‘18px’;
cursor.style.opacity = ‘0.6’;
});
el.addEventListener(‘mouseleave’, () => {
cursor.style.width   = ‘6px’;
cursor.style.height  = ‘6px’;
cursor.style.opacity = ‘1’;
});
});
} else {
cursor.style.display = ‘none’;
}

// ── SCROLL-TRIGGERED FADE-IN ──
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry, i) => {
if (entry.isIntersecting) {
const el = entry.target;
el.style.opacity    = ‘0’;
el.style.transform  = ‘translateY(16px)’;
el.style.transition = `opacity 0.6s ease ${i * 0.05}s, transform 0.6s ease ${i * 0.05}s`;

```
  requestAnimationFrame(() => {
    el.style.opacity   = '1';
    el.style.transform = 'translateY(0)';
  });

  observer.unobserve(el);
}
```

});
}, { threshold: 0.1 });

document.querySelectorAll(’.project-item, .stat’).forEach(el => observer.observe(el));

// ── MOBILE NAV BURGER ──
function toggleNav() {
const links  = document.getElementById(‘navLinks’);
const burger = document.getElementById(‘navBurger’);
links.classList.toggle(‘open’);
burger.classList.toggle(‘open’);
}

function closeNav() {
document.getElementById(‘navLinks’).classList.remove(‘open’);
document.getElementById(‘navBurger’).classList.remove(‘open’);
}

// Close nav on outside tap
document.addEventListener(‘click’, e => {
const nav = document.querySelector(‘nav’);
if (!nav.contains(e.target)) closeNav();
});
