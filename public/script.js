// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#3B82F6'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#3B82F6',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Typing Animation
const texts = [
    'Generative AI Engineer',
    'Full Stack Developer', 
    'Machine Learning Expert',
    'AI Innovation Specialist'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenTexts = 2000;

function typeWriter() {
    const currentText = texts[textIndex];
    const typedElement = document.getElementById('typed-text');
    
    if (isDeleting) {
        typedElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, 500);
            return;
        }
        setTimeout(typeWriter, deletingSpeed);
    } else {
        typedElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            setTimeout(() => {
                isDeleting = true;
                typeWriter();
            }, delayBetweenTexts);
            return;
        }
        setTimeout(typeWriter, typingSpeed);
    }
}

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Animate skill bars
            if (entry.target.classList.contains('skills')) {
                animateSkillBars();
            }
        } else {
            entry.target.classList.remove('animate'); // Remove animate class when out of view
            // Reset skill bars if they are part of the skills section
            if (entry.target.classList.contains('skills')) {
                resetSkillBars();
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.section-title, .timeline-item, .project-card, .education-card, .skills').forEach(el => {
    observer.observe(el);
});

// Animate Skill Bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
}

// Reset Skill Bars
function resetSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        bar.style.width = '0%'; // Reset width to 0
    });
}

// Navbar Background on Scroll
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollY = currentScrollY;
});

// Active Navigation Link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Contact Form - Commented out as there is no form with class 'contact-form' in index.html
/*
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Create mailto link
    const mailtoLink = `mailto:malisheikhg772@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your message! Your email client should open now.');
    
    // Reset form
    this.reset();
});
*/

// Add active class to nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter, 1000);
});



// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color) !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Add this to your existing script.js file

// Create cursor elements
const cursorDot = document.createElement('div');
cursorDot.className = 'cursor-dot';
const cursorOutline = document.createElement('div');
cursorOutline.className = 'cursor-outline';

// Append to body
document.body.appendChild(cursorDot);
document.body.appendChild(cursorOutline);

// Mouse move event
document.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Animate dot to follow cursor exactly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Animate outline to follow cursor with slight delay
    cursorOutline.style.left = `${posX - 13}px`;
    cursorOutline.style.top = `${posY - 13}px`;
});

// Click animation
document.addEventListener('mousedown', () => {
    cursorDot.classList.add('active');
    cursorOutline.classList.add('active');
});

document.addEventListener('mouseup', () => {
    cursorDot.classList.remove('active');
    cursorOutline.classList.remove('active');
});

// Hover animation for clickable elements
const clickables = document.querySelectorAll('a, button, .btn, .nav-link');
clickables.forEach((element) => {
    element.addEventListener('mouseover', () => {
        cursorDot.classList.add('active');
        cursorOutline.classList.add('active');
    });
    
    element.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('active');
        cursorOutline.classList.remove('active');
    });
});

// Add ripple effect on click
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 1000);
});

// Enhanced Cursor Lightning Trail Effect
class EnhancedCursorTrail {
    constructor() {
        this.trails = [];
        this.init();
    }

    init() {
        // Remove any existing trail elements
        document.querySelectorAll('.cursor-trail').forEach(el => el.remove());
        
        let moveTimer = null;
        
        document.addEventListener('mousemove', (e) => {
            clearTimeout(moveTimer);
            
            // Create trail immediately
            this.createTrail(e.clientX, e.clientY);
            
            // Create additional trails for smoother effect
            moveTimer = setTimeout(() => {
                this.createTrail(e.clientX + Math.random() * 4 - 2, e.clientY + Math.random() * 4 - 2);
            }, 20);
        });
    }

    createTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, #3B82F6 0%, #60A5FA 70%, transparent 100%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 10px #3B82F6, 0 0 20px rgba(59, 130, 246, 0.5);
            opacity: 0.9;
        `;
        
        document.body.appendChild(trail);
        
        // Animate and remove
        let opacity = 0.9;
        let scale = 1;
        
        const fadeOut = () => {
            opacity -= 0.05;
            scale -= 0.03;
            
            if (opacity <= 0) {
                trail.remove();
                return;
            }
            
            trail.style.opacity = opacity;
            trail.style.transform = `translate(-50%, -50%) scale(${scale})`;
            requestAnimationFrame(fadeOut);
        };
        
        // Start fade after small delay
        setTimeout(fadeOut, 50);
    }
}

// Initialize the enhanced trail
document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia('(hover: hover)').matches) {
        // Wait a bit to ensure all other cursor effects are loaded
        setTimeout(() => {
            new EnhancedCursorTrail();
        }, 500);
    }
});

// Debug version - add this temporarily to test
// Smooth Thick Lightning Trail
// Ultra Smooth Round Lightning Trail
let trailPoints = [];
let currentTrail = null;

document.addEventListener('mousemove', (e) => {
    const point = { x: e.clientX, y: e.clientY, time: Date.now() };
    trailPoints.push(point);
    
    // Keep more points for ultra-smooth curves
    const maxAge = 800;
    trailPoints = trailPoints.filter(p => point.time - p.time < maxAge);
    
    // Only update if we have enough points for smooth curves
    if (trailPoints.length >= 4) {
        updateTrail();
    }
});

function updateTrail() {
    if (currentTrail) currentTrail.remove();
    
    if (trailPoints.length < 4) return;
    
    // Smooth the points first
    const smoothedPoints = smoothPoints(trailPoints);
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'lightning-trail');
    svg.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 99999;
    `;
    
    // Create ultra-smooth path using Catmull-Rom splines
    let pathData = `M ${smoothedPoints[0].x} ${smoothedPoints[0].y}`;
    
    for (let i = 1; i < smoothedPoints.length - 2; i++) {
        const p0 = smoothedPoints[i - 1] || smoothedPoints[i];
        const p1 = smoothedPoints[i];
        const p2 = smoothedPoints[i + 1];
        const p3 = smoothedPoints[i + 2] || smoothedPoints[i + 1];
        
        // Calculate control points for smooth Bezier curve
        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;
        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;
        
        pathData += ` C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${p2.x} ${p2.y}`;
    }
    
    // Create gradient
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'smoothTrailGradient');
    
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', 'rgba(59, 130, 246, 0.1)');
    
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', '#3B82F6');
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.appendChild(defs);
    
    // Extra outer glow for roundness
    const extraGlow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    extraGlow.setAttribute('d', pathData);
    extraGlow.style.cssText = `
        fill: none;
        stroke: rgba(59, 130, 246, 0.2);
        stroke-width: 16;
        stroke-linecap: round;
        stroke-linejoin: round;
        filter: blur(6px);
    `;
    
    // Outer glow
    const outerGlow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    outerGlow.setAttribute('d', pathData);
    outerGlow.style.cssText = `
        fill: none;
        stroke: rgba(59, 130, 246, 0.4);
        stroke-width: 12;
        stroke-linecap: round;
        stroke-linejoin: round;
        filter: blur(3px);
    `;
    
    // Middle glow
    const middleGlow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    middleGlow.setAttribute('d', pathData);
    middleGlow.style.cssText = `
        fill: none;
        stroke: rgba(59, 130, 246, 0.7);
        stroke-width: 12;
        stroke-linecap: round;
        stroke-linejoin: round;
        filter: blur(1px);
    `;
    
    // Main trail
    const mainPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    mainPath.setAttribute('d', pathData);
    mainPath.style.cssText = `
        fill: none;
        stroke: url(#smoothTrailGradient);
        stroke-width: 6;
        stroke-linecap: round;
        stroke-linejoin: round;
    `;
    
    svg.appendChild(extraGlow);
    svg.appendChild(outerGlow);
    svg.appendChild(middleGlow);
    svg.appendChild(mainPath);
    document.body.appendChild(svg);
    
    currentTrail = svg;
    
    // Fade out
    setTimeout(() => {
        if (svg.parentNode) {
            let opacity = 1;
            const fade = () => {
                opacity -= 0.03;
                if (opacity <= 0) {
                    svg.remove();
                    return;
                }
                svg.style.opacity = opacity;
                requestAnimationFrame(fade);
            };
            fade();
        }
    }, 400);
}

// Function to smooth points for ultra-smooth curves
function smoothPoints(points) {
    if (points.length < 3) return points;
    
    const smoothed = [];
    smoothed.push(points[0]); // Keep first point
    
    // Apply smoothing to middle points
    for (let i = 1; i < points.length - 1; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const next = points[i + 1];
        
        // Simple smoothing: average with neighbors
        const smoothX = (prev.x + curr.x + next.x) / 3;
        const smoothY = (prev.y + curr.y + next.y) / 3;
        
        smoothed.push({ x: smoothX, y: smoothY, time: curr.time });
    }
    
    smoothed.push(points[points.length - 1]); // Keep last point
    return smoothed;
}
// Cursor Lightning Trail Effect
// class CursorTrail {
//     constructor() {
//         this.trails = [];
//         this.lastX = 0;
//         this.lastY = 0;
//         this.isMoving = false;
//         this.initialize();
//     }

//     initialize() {
//         let throttleTimer = null;
        
//         document.addEventListener('mousemove', (e) => {
//             if (throttleTimer) return;
            
//             throttleTimer = setTimeout(() => {
//                 this.createTrail(e.clientX, e.clientY);
//                 throttleTimer = null;
//             }, 30); // Create trail every 30ms for smooth effect
//         });

//         // Clean up old trails periodically
//         setInterval(() => {
//             this.cleanupTrails();
//         }, 100);
//     }

//     createTrail(x, y) {
//         // Calculate distance from last position
//         const distance = Math.sqrt(
//             Math.pow(x - this.lastX, 2) + Math.pow(y - this.lastY, 2)
//         );

//         // Only create trail if cursor moved enough
//         if (distance > 5) {
//             const trail = document.createElement('div');
//             trail.className = 'cursor-trail';
//             trail.style.left = x + 'px';
//             trail.style.top = y + 'px';
            
//             // Add random slight offset for more organic feel
//             const offsetX = (Math.random() - 0.5) * 4;
//             const offsetY = (Math.random() - 0.5) * 4;
//             trail.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
            
//             document.body.appendChild(trail);
            
//             this.trails.push({
//                 element: trail,
//                 createdAt: Date.now()
//             });

//             // Remove trail after animation
//             setTimeout(() => {
//                 if (trail.parentNode) {
//                     trail.parentNode.removeChild(trail);
//                 }
//             }, 800);

//             this.lastX = x;
//             this.lastY = y;
//         }
//     }

//     cleanupTrails() {
//         const now = Date.now();
//         this.trails = this.trails.filter(trail => {
//             if (now - trail.createdAt > 800) {
//                 if (trail.element.parentNode) {
//                     trail.element.parentNode.removeChild(trail.element);
//                 }
//                 return false;
//             }
//             return true;
//         });
//     }
// }

// // Initialize cursor trail effect
// document.addEventListener('DOMContentLoaded', () => {
//     // Check if device supports hover (not mobile)
//     if (window.matchMedia('(hover: hover)').matches) {
//         new CursorTrail();
//     }
// });