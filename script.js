const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursor-dot');

// Track custom cursor position
window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Immediate dot tracking
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Elastic outer frame animation
    cursor.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 120, fill: "forwards" });
});

// Interactive Element Micro-Scaling Micro-interactions
const interactiveElements = document.querySelectorAll('a, button, .goal-card, .project-img-wrapper, input, textarea');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.backgroundColor = 'transparent';
    });
});