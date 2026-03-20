// ── CUSTOM CURSOR ──
const cursor = document.getElementById(‘cursor’);

document.addEventListener(‘mousemove’, e => {
cursor.style.left = e.clientX + ‘px’;
cursor.style.top  = e.clientY + ‘px’;
});

// Cursor grow on interactive elements
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
