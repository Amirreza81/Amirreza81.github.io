// Dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const favicon = document.getElementById('site-favicon');
    const logo = document.getElementById('site-logo');

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isDark = savedTheme === 'dark';

    html.classList.toggle('dark', isDark);

    // Set favicon according to current theme
    if (favicon) {
        favicon.href = isDark
            ? '/images/favicon_dark.png'
            : '/images/favicon_l.png';
    }

    if (logo) {
        logo.src = isDark
            ? '/images/favicon_dark.png'
            : '/images/favicon_l.png';
    }

    themeToggle.addEventListener('click', function() {
        html.classList.toggle('dark');

        const isDark = html.classList.contains('dark');

        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Update favicon
        if (favicon) {
            favicon.href = isDark
                ? '/images/favicon_dark.png'
                : '/images/favicon_l.png';
        }

        if (logo) {
            logo.src = isDark
                ? '/images/favicon_dark.png'
                : '/images/favicon_l.png';
        }
    });
});

// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    if (tabButtons.length === 0 || tabContents.length === 0) {
        return;
    }
    
    function showTab(tabSlug) {
        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });
        
        // Remove active state from all buttons
        tabButtons.forEach(button => {
            button.classList.remove('border-primary-600', 'text-primary-600', 'dark:border-primary-400', 'dark:text-primary-400');
            button.classList.add('border-transparent', 'text-gray-500', 'dark:text-gray-400');
            button.setAttribute('data-active', 'false');
        });
        
        // Show selected tab content
        const selectedContent = document.getElementById(`tab-${tabSlug}`);
        if (selectedContent) {
            selectedContent.classList.remove('hidden');
        }
        
        // Add active state to selected button
        const selectedButton = document.querySelector(`[data-tab="${tabSlug}"]`);
        if (selectedButton) {
            selectedButton.classList.add('border-primary-600', 'text-primary-600', 'dark:border-primary-400', 'dark:text-primary-400');
            selectedButton.classList.remove('border-transparent', 'text-gray-500', 'dark:text-gray-400');
            selectedButton.setAttribute('data-active', 'true');
        }
        
        // Update URL hash
        window.location.hash = `#${tabSlug}`;
    }
    
    // Add click event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabSlug = this.getAttribute('data-tab');
            showTab(tabSlug);
        });
    });
    
    // Handle hash changes (back/forward navigation)
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            showTab(hash);
        }
    });
    
    // Show tab from URL hash on page load, default to about-me
    window.addEventListener('load', function() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            showTab(hash);
        } else {
            // Default to Education tab
            showTab('about-me');
        }
    });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Intersection Observer for fade-in animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all cards and content sections
    const elements = document.querySelectorAll('.bg-white, .dark\\:bg-gray-800, article');
    elements.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('neural-network-bg');

    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const hero = canvas.parentElement;

    let width;
    let height;
    let nodes = [];

    const MAX_NODES = 400;
    const CONNECTION_DISTANCE = 150;

    let mouse = {
        x: -1000,
        y: -1000,
        active: false
    };
    const HERO_INTERACTION_RADIUS = 220;
    const heroContent = hero.querySelector('.max-w-5xl');

    let pulses = [];
    let signals = [];
    let clickCount = 0;
    let easterEggActive = false;

    function resizeCanvas() {
        const rect = hero.getBoundingClientRect();

        width = rect.width;
        height = rect.height;

        const dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createNode(x, y) {
        return {
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            radius: Math.random() * 1.5 + 1
        };
    }

    function initNodes() {
        nodes = [];

        const MIN_DISTANCE = 80;

        for (let i = 0; i < 55; i++) {
            let x;
            let y;
            let valid = false;
            let attempts = 0;

            while (!valid && attempts < 100) {
                x = Math.random() * width;
                y = Math.random() * height;
                valid = true;

                for (const node of nodes) {
                    const dx = x - node.x;
                    const dy = y - node.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < MIN_DISTANCE) {
                        valid = false;
                        break;
                    }
                }

                attempts++;
            }

            if (valid) {
                nodes.push(createNode(x, y));
            }
        }
    }

    function updateNodes() {
        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;

            if (node.x < 0 || node.x > width) {
                node.vx *= -1;
            }

            if (node.y < 0 || node.y > height) {
                node.vy *= -1;
            }

            if (mouse.active) {
                const dx = mouse.x - node.x;
                const dy = mouse.y - node.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120 && distance > 0) {
                    const force = (120 - distance) / 120;

                    node.x -= (dx / distance) * force * 3;
                    node.y -= (dy / distance) * force * 3;
                }
            }
        });
    }

    function drawNodes() {
        nodes.forEach(node => {
            const highlight = node.highlight || 0;

            const radius =
                node.radius + highlight * 2;

            const opacity =
                0.35 + highlight * 0.5;

            ctx.beginPath();
            ctx.arc(
                node.x,
                node.y,
                radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                `rgba(232, 184, 92, ${opacity})`;

            ctx.fill();
        });
    }

    function drawConnections() {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const a = nodes[i];
                const b = nodes[j];

                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < CONNECTION_DISTANCE) {
                    const opacity =
                        (1 - distance / CONNECTION_DISTANCE) * 0.30;

                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);

                    ctx.strokeStyle =
                        `rgba(232, 184, 92, ${opacity})`;

                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
            }
        }
    }

    hero.addEventListener('mousemove', function (event) {
        const rect = canvas.getBoundingClientRect();

        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
        mouse.active = true;
    });

    hero.addEventListener('mouseleave', function () {
        mouse.active = false;
    });

    hero.addEventListener('click', function (event) {
        if (event.target.closest('a, button')) return;

        const rect = canvas.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (nodes.length < MAX_NODES) {
            nodes.push(createNode(x, y));
        }

        clickCount++;

        if (clickCount >= 15 && !easterEggActive) {
            startEasterEgg();
        }
    });

    function createSignal() {
        if (nodes.length < 2) return;

        const aIndex = Math.floor(Math.random() * nodes.length);
        let bIndex = Math.floor(Math.random() * nodes.length);

        if (aIndex === bIndex) return;

        const a = nodes[aIndex];
        const b = nodes[bIndex];

        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > CONNECTION_DISTANCE) return;

        signals.push({
            a: a,
            b: b,
            progress: 0,
            speed: 0.012
        });
    }

    function updateSignals() {
        signals.forEach(signal => {
            signal.progress += signal.speed;
        });

        signals = signals.filter(
            signal => signal.progress <= 1
        );
    }

    function drawSignals() {
        signals.forEach(signal => {
            const x =
                signal.a.x +
                (signal.b.x - signal.a.x) * signal.progress;

            const y =
                signal.a.y +
                (signal.b.y - signal.a.y) * signal.progress;

            // Glow
            ctx.beginPath();
            ctx.arc(x, y, 7, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(232, 184, 92, 0.15)';
            ctx.fill();

            // Signal core
            ctx.beginPath();
            ctx.arc(x, y, 3.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 225, 150, 1)';
            ctx.fill();
        });
    }

    function drawPulses() {
        pulses.forEach(pulse => {
            ctx.beginPath();
            ctx.arc(
                pulse.x,
                pulse.y,
                pulse.radius,
                0,
                Math.PI * 2
            );

            ctx.strokeStyle =
                `rgba(232, 184, 92, ${pulse.opacity})`;

            ctx.lineWidth = 0.7;
            ctx.stroke();

            pulse.radius += 1.5;
            pulse.opacity *= 0.96;
        });

        pulses = pulses.filter(
            pulse => pulse.radius < pulse.maxRadius
        );
    }        
    
    setInterval(function () {
        if (signals.length < 3) {
            createSignal();
        }
    }, 135);

    function highlightHeroContent() {
        if (!heroContent) return;

        const rect = heroContent.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2 - canvasRect.left;
        const centerY = rect.top + rect.height / 2 - canvasRect.top;

        nodes.forEach(node => {
            const dx = node.x - centerX;
            const dy = node.y - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < HERO_INTERACTION_RADIUS) {
                const intensity =
                    1 - distance / HERO_INTERACTION_RADIUS;

                node.highlight = intensity;
            } else {
                node.highlight = 0;
            }
        });
    }       
    
    
    function startEasterEgg() {
        easterEggActive = true;

        const egg = document.getElementById('easter-egg');
        const progress = document.getElementById('easter-progress');
        const status = document.getElementById('easter-status');
        const ready = document.getElementById('easter-ready');

        if (!egg || !progress || !status || !ready) return;

        egg.classList.remove('hidden');
        egg.classList.add('flex');

        progress.style.width = '0%';
        status.textContent = 'INITIALIZING...';
        ready.classList.add('hidden');

        let value = 0;

        const interval = setInterval(() => {
            value += 2;

            progress.style.width = `${value}%`;

            if (value >= 100) {
                clearInterval(interval);

                status.textContent = 'SYSTEM ONLINE';
                ready.classList.remove('hidden');

                setTimeout(() => {
                    egg.classList.add('hidden');
                    egg.classList.remove('flex');

                    easterEggActive = false;
                    clickCount = 0;
                }, 1400);
            }
        }, 30);
    }

    
    function animate() {
        ctx.clearRect(0, 0, width, height);

        updateNodes();
        highlightHeroContent();

        drawConnections();
        drawNodes();

        updateSignals();
        drawSignals();

        drawPulses();
        requestAnimationFrame(animate);
    }

    resizeCanvas();
    initNodes();
    animate();

    window.addEventListener('resize', function () {
        resizeCanvas();
        initNodes();
    });
});
