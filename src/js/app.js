// Dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.classList.toggle('dark', savedTheme === 'dark');
    
    themeToggle.addEventListener('click', function() {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});

// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
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
