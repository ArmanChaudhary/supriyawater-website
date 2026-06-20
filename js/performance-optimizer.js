/**
 * Performance Optimizer for Smooth Animations
 * Eliminates lag and ensures 60fps animations
 */

// ============================================
// 1. OPTIMIZE SCROLL PERFORMANCE
// ============================================

// Throttle scroll events for better performance
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

// Debounce for events that don't need immediate response
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// ============================================
// 2. OPTIMIZED INTERSECTION OBSERVER
// ============================================

// Single observer instance for all animations
const animationObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing after animation to save resources
                animationObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    }
);

// ============================================
// 3. GPU ACCELERATION FOR ANIMATIONS
// ============================================

function enableGPUAcceleration() {
    const animatedElements = document.querySelectorAll(`
        .hero-content-left,
        .hero-content-right,
        .achievement-slide,
        .blog-carousel-slide,
        .brand-logo,
        .carousel-track,
        .blog-carousel-track,
        .brands-track
    `);
    
    animatedElements.forEach(el => {
        el.style.willChange = 'transform, opacity';
        el.style.transform = 'translateZ(0)';
    });
}

// ============================================
// 4. OPTIMIZED SCROLL ANIMATIONS
// ============================================

let ticking = false;
let lastScrollY = 0;

function optimizedScroll() {
    lastScrollY = window.pageYOffset;
    
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateScrollElements(lastScrollY);
            ticking = false;
        });
        ticking = true;
    }
}

function updateScrollElements(scrollY) {
    // Update navbar
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Update scroll progress
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    }
}

// ============================================
// 5. REDUCE ANIMATION COMPLEXITY
// ============================================

function simplifyAnimations() {
    // Disable parallax on mobile for better performance
    if (window.innerWidth < 768) {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        parallaxElements.forEach(el => {
            el.style.transform = 'none';
        });
    }
    
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.querySelectorAll('*').forEach(el => {
            el.style.animationDuration = '0.01ms';
            el.style.transitionDuration = '0.01ms';
        });
    }
}

// ============================================
// 6. LAZY LOAD HEAVY ANIMATIONS
// ============================================

function initializeLazyAnimations() {
    const heavyAnimations = document.querySelectorAll('[data-heavy-animation]');
    
    const lazyObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    lazyObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0,
            rootMargin: '100px'
        }
    );
    
    heavyAnimations.forEach(el => lazyObserver.observe(el));
}

// ============================================
// 7. OPTIMIZE CAROUSEL PERFORMANCE
// ============================================

function optimizeCarousels() {
    // Use CSS transforms instead of position/margin for carousel movement
    const carouselTracks = document.querySelectorAll('.carousel-track, .blog-carousel-track, .brands-track');
    
    carouselTracks.forEach(track => {
        track.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        track.style.willChange = 'transform';
    });
}

// ============================================
// 8. BATCH DOM READS AND WRITES
// ============================================

let readQueue = [];
let writeQueue = [];

function batchRead(fn) {
    readQueue.push(fn);
}

function batchWrite(fn) {
    writeQueue.push(fn);
}

function flush() {
    // Execute all reads first
    readQueue.forEach(fn => fn());
    readQueue = [];
    
    // Then execute all writes
    writeQueue.forEach(fn => fn());
    writeQueue = [];
}

function scheduleBatch() {
    requestAnimationFrame(flush);
}

// ============================================
// 9. INITIALIZE ALL OPTIMIZATIONS
// ============================================

function initPerformanceOptimizations() {
    console.log('🚀 Initializing performance optimizations...');
    
    // Enable GPU acceleration
    enableGPUAcceleration();
    
    // Simplify animations if needed
    simplifyAnimations();
    
    // Optimize carousels
    optimizeCarousels();
    
    // Initialize lazy animations
    initializeLazyAnimations();
    
    // Attach optimized scroll listener
    window.addEventListener('scroll', optimizedScroll, { passive: true });
    
    // Observe all animated elements
    document.querySelectorAll('[data-scroll-animation], .section, .highlight-card, .stat-box, .service-box').forEach(el => {
        animationObserver.observe(el);
    });
    
    console.log('✅ Performance optimizations complete');
}

// ============================================
// 10. AUTO-INITIALIZE ON DOM READY
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPerformanceOptimizations);
} else {
    initPerformanceOptimizations();
}

// Export for use in other scripts
window.PerformanceOptimizer = {
    throttle,
    debounce,
    batchRead,
    batchWrite,
    scheduleBatch
};
