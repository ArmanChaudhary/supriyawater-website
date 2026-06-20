// Safe storage wrapper to prevent SecurityError on file:// or restricted environments
// Safe storage wrapper to prevent SecurityError on file:// or restricted environments

// ============================================
// COMPANY INFORMATION & DYNAMIC CALCULATIONS
// ============================================

/**
 * Calculate years of experience based on company establishment year
 * Company established: 2012
 * @returns {number} Years of experience (e.g., 14 for 2026)
 */
function getYearsOfExperience() {
    const ESTABLISHMENT_YEAR = 2012;
    const currentYear = new Date().getFullYear();
    return currentYear - ESTABLISHMENT_YEAR;
}

/**
 * Update all elements with years of experience
 * Updates elements with class 'years-experience' or data-years-experience attribute
 */
function updateYearsOfExperience() {
    const years = getYearsOfExperience();
    
    // Update elements with class 'years-experience'
    document.querySelectorAll('.years-experience').forEach(element => {
        element.textContent = years + '+';
    });
    
    // Update elements with data-years-experience attribute
    document.querySelectorAll('[data-years-experience]').forEach(element => {
        element.textContent = years + '+';
    });
    
    // Update stat counters with data-target attribute for years
    document.querySelectorAll('[data-target-years]').forEach(element => {
        element.setAttribute('data-target', years);
    });
    
    // Update meta tags
    updateMetaTagsWithYears(years);
}

/**
 * Update meta description tags with current years of experience
 * @param {number} years - Years of experience
 */
function updateMetaTagsWithYears(years) {
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        const content = metaDescription.getAttribute('content');
        if (content) {
            metaDescription.setAttribute('content', content.replace(/\d+\+?\s*years?\s*experience/gi, years + '+ years experience'));
        }
    }
    
    // Update OG description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        const content = ogDescription.getAttribute('content');
        if (content) {
            ogDescription.setAttribute('content', content.replace(/\d+\+?\s*years?\s*experience/gi, years + '+ years experience'));
        }
    }
    
    // Update Twitter description
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
        const content = twitterDescription.getAttribute('content');
        if (content) {
            twitterDescription.setAttribute('content', content.replace(/\d+\+?\s*years?\s*experience/gi, years + '+ years experience'));
        }
    }
    
    // Update title if it contains years
    const title = document.querySelector('title');
    if (title && title.textContent.match(/\d+\+?\s*Years/i)) {
        title.textContent = title.textContent.replace(/\d+\+?\s*Years/gi, years + '+ Years');
    }
}

// Initialize years of experience on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateYearsOfExperience);
} else {
    updateYearsOfExperience();
}

// ============================================
// END COMPANY INFORMATION
// ============================================

if (!window.safeLocalStorage || !window.safeSessionStorage) {
    // Find the highest available window reference to share state across tabs/frames
    let rootWindow = window;
    try {
        while (rootWindow.parent && rootWindow.parent !== rootWindow) {
            rootWindow = rootWindow.parent;
        }
    } catch(e) {}
    try {
        if (window.opener) {
            let openerRoot = window.opener;
            while (openerRoot.parent && openerRoot.parent !== openerRoot) {
                openerRoot = openerRoot.parent;
            }
            rootWindow = openerRoot;
        }
    } catch(e) {}

    if (!rootWindow.globalFallbackStore) {
        rootWindow.globalFallbackStore = {
            localStorage: {},
            sessionStorage: {}
        };
    }

    const safeStorage = (storageType) => {
        let storage;
        try {
            storage = window[storageType];
            const testKey = '__storage_test__';
            storage.setItem(testKey, testKey);
            storage.removeItem(testKey);
        } catch (e) {
            console.warn(`${storageType} is not accessible. Using shared fallback.`);
            const fallback = rootWindow.globalFallbackStore[storageType];
            storage = {
                getItem: (key) => key in fallback ? fallback[key] : null,
                setItem: (key, value) => { fallback[key] = String(value); },
                removeItem: (key) => { delete fallback[key]; },
                clear: () => { for (const key in fallback) delete fallback[key]; },
                key: (index) => Object.keys(fallback)[index] || null,
                get length() { return Object.keys(fallback).length; }
            };
        }
        return storage;
    };
    
    if (!window.safeLocalStorage) {
        window.safeLocalStorage = safeStorage('localStorage');
    }
    if (!window.safeSessionStorage) {
        window.safeSessionStorage = safeStorage('sessionStorage');
    }
}


// Main JavaScript for Supriya Water Technology Website


// Load Copyright
function loadCopyright() {
    const copyright = DataManager.getCopyright();
    const footerBottomElements = document.querySelectorAll('.footer-bottom p');
    
    footerBottomElements.forEach(element => {
        element.innerHTML = `&copy; ${copyright.year} Supriya Water Technology. ${copyright.text}. | Purity in Each Drop<br><span style="font-size: 0.875rem; opacity: 0.8;">Developed by Inhouse Team of Supriya Water Technology</span>`;
    });
}

// Load Announcement Bar
function loadAnnouncementBar() {
    const announcementBar = document.getElementById('announcementBar');
    const announcementText = document.getElementById('announcementText');
    
    if (announcementBar && announcementText) {
        const savedAnnouncement = safeLocalStorage.getItem('announcementText');
        const isEnabled = safeLocalStorage.getItem('announcementEnabled');
        
        if (savedAnnouncement) {
            announcementText.textContent = savedAnnouncement;
        }
        
        if (isEnabled === 'false') {
            announcementBar.style.display = 'none';
            document.querySelector('.navbar').style.top = '0';
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                heroSection.style.paddingTop = '85px';
            }
        }
    }
}

// Typing Animation
const typingText = document.querySelector('.typing-text');
const words = [
    'DIGITAL FOUNTAINS',
    'WATER TREATMENT PLANT',
    'DOMESTIC RO PURIFIER',
    'INDUSTRIAL RO PURIFIER',
    'SEWAGE TREATMENT PLANT',
    'EFFLUENT TREATMENT PLANT',
    'WATER ATM',
    'WATER DISPENSING UNIT'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    if (!typingText) return;
    
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 30;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 60;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
        // Pause at end of word
        typingSpeed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 300;
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Typing Animation for "Pleasure to Serve/Work"
function initServeTyping() {
    const serveText = document.querySelector('.serve-text');
    if (!serveText) return;
    
    const serveWords = ['Serve', 'Work'];
    let serveWordIndex = 0;
    let serveCharIndex = 0;
    let serveIsDeleting = false;
    let serveTypingSpeed = 100;

    function serveTypeEffect() {
        const currentWord = serveWords[serveWordIndex];
        
        if (serveIsDeleting) {
            serveText.textContent = currentWord.substring(0, serveCharIndex - 1);
            serveCharIndex--;
            serveTypingSpeed = 50;
        } else {
            serveText.textContent = currentWord.substring(0, serveCharIndex + 1);
            serveCharIndex++;
            serveTypingSpeed = 150;
        }
        
        if (!serveIsDeleting && serveCharIndex === currentWord.length) {
            // Pause at end of word
            serveTypingSpeed = 2000;
            serveIsDeleting = true;
        } else if (serveIsDeleting && serveCharIndex === 0) {
            serveIsDeleting = false;
            serveWordIndex = (serveWordIndex + 1) % serveWords.length;
            serveTypingSpeed = 500;
        }
        
        setTimeout(serveTypeEffect, serveTypingSpeed);
    }
    
    serveTypeEffect();
}

// Start typing animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadAnnouncementBar();
    loadCopyright();
    
    if (typingText) {
        setTimeout(typeEffect, 1000);
    }
    
    setTimeout(initServeTyping, 1500);
    
    // Initialize smooth scroll animations
    initSmoothScrollAnimations();
    
    // Initialize hero slider if on homepage
    if (document.querySelector('.hero-slider')) {
        initHeroSlider();
    }
    
    // Initialize interactive star rating for Google Reviews page
    if (document.getElementById('interactiveStars')) {
        initInteractiveStars();
    }
});

// Smooth Scroll Animations
function initSmoothScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    const cards = document.querySelectorAll('.highlight-card, .stat-box, .service-box, .brand-logo');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Observe individual cards for staggered animation
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
            }
        });
    }, { threshold: 0.2 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        cardObserver.observe(card);
    });
    
    // Smooth parallax effect for decorative elements
    let ticking = false;
    let lastScrollY = window.pageYOffset;
    
    window.addEventListener('scroll', () => {
        lastScrollY = window.pageYOffset;
        
        if (!ticking) {
            window.requestAnimationFrame(() => {
                parallaxEffect(lastScrollY);
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// Enhanced parallax effect for background decorations
function parallaxEffect(scrolled) {
    const decorations = document.querySelectorAll('.about-bg-decoration, .deco-circle, .deco-line, .deco-dot-grid');
    
    decorations.forEach((decoration, index) => {
        const speed = 0.3 + (index * 0.05);
        const yPos = -(scrolled * speed / 10);
        const rotation = scrolled * 0.02;
        
        if (decoration.classList.contains('deco-circle')) {
            decoration.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
        } else {
            decoration.style.transform = `translateY(${yPos}px)`;
        }
    });
    
    // Parallax for hero content
    const heroContent = document.querySelector('.hero-content-left');
    if (heroContent && scrolled < window.innerHeight) {
        const heroParallax = scrolled * 0.5;
        heroContent.style.transform = `translateY(${heroParallax}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
}

// Smooth scroll for anchor links with custom easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 125;
                
                // Smooth scroll with custom easing
                smoothScrollTo(offsetTop, 1000);
            }
        }
    });
});

// Custom smooth scroll function with easing
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function (ease-in-out-cubic)
        const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// Hero Slider Functionality
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        if (index >= slides.length) currentSlide = 0;
        if (index < 0) currentSlide = slides.length - 1;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showSlide(currentSlide);
    }
    
    // Auto play
    function startAutoPlay() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoPlay() {
        clearInterval(slideInterval);
    }
    
    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoPlay();
            nextSlide();
            startAutoPlay();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoPlay();
            prevSlide();
            startAutoPlay();
        });
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoPlay();
            currentSlide = index;
            showSlide(currentSlide);
            startAutoPlay();
        });
    });
    
    // Start auto play
    startAutoPlay();
    
    // Pause on hover
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', stopAutoPlay);
        heroSlider.addEventListener('mouseleave', startAutoPlay);
    }
}

// Navbar scroll effect with smooth transition
const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scrollProgress');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for styling
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update scroll progress bar
    if (scrollProgress) {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (currentScroll / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    }
    
    // Hide/show navbar on scroll (optional - uncomment if desired)
    // if (currentScroll > lastScroll && currentScroll > 200) {
    //     navbar.style.transform = 'translateY(-100%)';
    // } else {
    //     navbar.style.transform = 'translateY(0)';
    // }
    
    lastScroll = currentScroll;
}, { passive: true });

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking the close button (X)
    navMenu.addEventListener('click', (e) => {
        // Check if clicked on the ::after pseudo-element area (close button)
        const rect = navMenu.getBoundingClientRect();
        const clickX = e.clientX;
        const clickY = e.clientY;
        
        // Close button is in top-right corner (approximately 40x40px)
        if (clickX > rect.right - 60 && clickX < rect.right - 10 && 
            clickY > rect.top + 10 && clickY < rect.top + 60) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Close menu when clicking outside (on blur background)
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active')) {
            // Check if click is outside the menu and not on hamburger
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });

    // Mobile dropdown toggle for Gallery
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.nav-link');
        
        if (dropdownLink && window.innerWidth <= 968) {
            dropdownLink.addEventListener('click', (e) => {
                // Only prevent default and toggle on mobile
                if (window.innerWidth <= 968) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                    
                    // Close other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                }
            });
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
            }
        }
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Load Clients
function loadClients() {
    const clients = DataManager.getClients();
    const clientsGrid = document.getElementById('clientsGrid');
    
    if (clientsGrid) {
        clientsGrid.innerHTML = clients.map(client => `
            <div class="client-card">
                <img src="${client.logo}" alt="${client.name}" class="client-logo">
                <h4 class="client-name">${client.name}</h4>
            </div>
        `).join('');
    }
}

// Load Pleasure to Serve Brand Logos
function loadPleasureServeLogos() {
    const pleasureServe = DataManager.getPleasureServe();
    const brandsTrack = document.querySelector('.brands-track');
    
    if (brandsTrack && pleasureServe && pleasureServe.length > 0) {
        // Generate brand logos HTML (duplicate for seamless loop)
        const logosHTML = pleasureServe.map(brand => `
            <div class="brand-logo">
                <img src="${brand.logo}" alt="${brand.name}">
            </div>
        `).join('');
        
        // Add logos twice for seamless infinite scroll
        brandsTrack.innerHTML = logosHTML + logosHTML;
    }
}

// Load Achievements Carousel
function loadAchievementsCarousel() {
    const achievements = DataManager.getAchievements();
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselIndicators = document.querySelector('.carousel-indicators');
    
    if (carouselTrack && achievements && achievements.length > 0) {
        // Generate achievement slides HTML
        const slidesHTML = achievements.map((achievement, index) => `
            <div class="achievement-slide ${index === 0 ? 'active' : ''}">
                <div class="achievement-image">
                    <img src="${achievement.image}" alt="${achievement.title}"
                        onerror="this.src='https://via.placeholder.com/1920x700/2657a6/ffffff?text=${encodeURIComponent(achievement.title)}'">
                    <div class="achievement-overlay">
                        <h4>${achievement.title}</h4>
                        <p>${achievement.description}</p>
                    </div>
                </div>
            </div>
        `).join('');
        
        carouselTrack.innerHTML = slidesHTML;
        
        // Generate indicators
        if (carouselIndicators) {
            const indicatorsHTML = achievements.map((_, index) => `
                <button class="indicator ${index === 0 ? 'active' : ''}" data-slide="${index}" aria-label="Go to slide ${index + 1}"></button>
            `).join('');
            
            carouselIndicators.innerHTML = indicatorsHTML;
        }
        
        // Reinitialize carousel after loading new content
        setTimeout(() => {
            initAchievementsCarousel();
        }, 100);
    }
}

// Load Blog Carousel
function loadBlogCarousel() {
    const blog = DataManager.getBlog();
    const blogTrack = document.getElementById('blogCarouselTrack');
    const blogIndicators = document.getElementById('blogCarouselIndicators');
    
    if (blogTrack && blog && blog.length > 0) {
        // Generate blog slides HTML - Image Left, Content Right
        const slidesHTML = blog.map((post, index) => `
            <div class="blog-carousel-slide ${index === 0 ? 'active' : ''}">
                <div class="blog-card">
                    <div class="blog-carousel-image">
                        <img src="${post.image}" alt="${post.title}"
                            onerror="this.src='https://via.placeholder.com/600x500/2657a6/ffffff?text=${encodeURIComponent(post.title)}'">
                    </div>
                    <div class="blog-carousel-content">
                        <div class="blog-meta">
                            <div class="blog-meta-item">
                                <i class="fas fa-calendar-alt"></i>
                                <span>${new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            <div class="blog-meta-item">
                                <i class="fas fa-user"></i>
                                <span>${post.author}</span>
                            </div>
                        </div>
                        <h3>${post.title}</h3>
                        <p>${post.excerpt}</p>
                        <a href="blog.html" class="blog-read-more">
                            <span>Read Full Article</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
        
        blogTrack.innerHTML = slidesHTML;
        
        // Generate indicators
        if (blogIndicators) {
            const indicatorsHTML = blog.map((_, index) => `
                <button class="blog-indicator ${index === 0 ? 'active' : ''}" data-slide="${index}" aria-label="Go to blog ${index + 1}"></button>
            `).join('');
            
            blogIndicators.innerHTML = indicatorsHTML;
        }
        
        // Initialize blog carousel after loading
        setTimeout(() => {
            initBlogCarousel();
        }, 100);
    }
}

// Initialize Blog Carousel
function initBlogCarousel() {
    const track = document.getElementById('blogCarouselTrack');
    const slides = document.querySelectorAll('.blog-carousel-slide');
    const prevBtn = document.getElementById('blogPrevBtn');
    const nextBtn = document.getElementById('blogNextBtn');
    const indicators = document.querySelectorAll('.blog-indicator');
    
    if (!track || slides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;
    let isTransitioning = false;
    
    function updateCarousel(index) {
        if (isTransitioning) return;
        isTransitioning = true;
        
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to current slide and indicator
        slides[index].classList.add('active');
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
        
        // Move track
        const offset = -index * 100;
        track.style.transform = `translateX(${offset}%)`;
        
        currentSlide = index;
        
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % totalSlides;
        updateCarousel(next);
    }
    
    function prevSlide() {
        const prev = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel(prev);
    }
    
    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(nextSlide, 7000);
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            if (index !== currentSlide) {
                updateCarousel(index);
                stopAutoPlay();
                startAutoPlay();
            }
        });
    });
    
    // Start autoplay
    startAutoPlay();
}

// ===== Interactive Star Rating for Google Reviews =====
function initInteractiveStars() {
    const stars = document.querySelectorAll('.interactive-star');
    const googleReviewUrl = 'https://g.page/r/CQGTfXPgp5VLEBM/review';
    
    if (!stars || stars.length === 0) return;
    
    // Hover effect - highlight all stars up to hovered star
    stars.forEach((star, index) => {
        star.addEventListener('mouseenter', () => {
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
    
    // Remove highlight when mouse leaves the star container
    const starContainer = document.getElementById('interactiveStars');
    if (starContainer) {
        starContainer.addEventListener('mouseleave', () => {
            stars.forEach(s => s.classList.remove('active'));
        });
    }
    
    // Click event - fill stars up to clicked one and redirect
    stars.forEach((star, clickedIndex) => {
        star.addEventListener('click', () => {
            // Fill all stars up to and including the clicked star
            stars.forEach((s, i) => {
                if (i <= clickedIndex) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
            
            // Small delay for visual feedback, then redirect
            setTimeout(() => {
                window.open(googleReviewUrl, '_blank');
            }, 300);
        });
    });
}

// ===== Achievements Carousel =====
function initAchievementsCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.achievement-slide');
    const prevBtn = document.querySelector('.trust-achievements-section .prev-btn');
    const nextBtn = document.querySelector('.trust-achievements-section .next-btn');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    const carouselContainer = document.querySelector('.carousel-container');
    
    if (!track || slides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;
    let isTransitioning = false;
    
    // Function to update carousel with smooth animation
    function updateCarousel(index) {
        if (isTransitioning) return;
        isTransitioning = true;
        
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to current slide and indicator
        slides[index].classList.add('active');
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
        
        // Move track with smooth animation
        const offset = -index * 100;
        track.style.transform = `translateX(${offset}%)`;
        
        currentSlide = index;
        
        // Reset transition lock after animation completes
        setTimeout(() => {
            isTransitioning = false;
        }, 800);
    }
    
    // Next slide
    function nextSlide() {
        const next = (currentSlide + 1) % totalSlides;
        updateCarousel(next);
    }
    
    // Previous slide
    function prevSlide() {
        const prev = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel(prev);
    }
    
    // Auto play
    function startAutoPlay() {
        stopAutoPlay(); // Clear any existing interval
        autoPlayInterval = setInterval(nextSlide, 6000); // Change slide every 6 seconds
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    // Event listeners for navigation buttons
    if (nextBtn) {
        // Remove any existing listeners
        const newNextBtn = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
        
        newNextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }
    
    if (prevBtn) {
        // Remove any existing listeners
        const newPrevBtn = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
        
        newPrevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }
    
    // Indicator click events
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            if (index !== currentSlide) {
                updateCarousel(index);
                stopAutoPlay();
                startAutoPlay();
            }
        });
    });
    
    // Pause on hover
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoPlay);
        carouselContainer.addEventListener('mouseleave', startAutoPlay);
    }
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (carouselContainer) {
        carouselContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        carouselContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            stopAutoPlay();
            startAutoPlay();
        }
    }
    
    // Start auto play
    startAutoPlay();
}

// Animated Counter
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    
    // Skip if no data-target or if NaN (for text-based stat numbers like "NEA", "RGB", etc.)
    if (!element.hasAttribute('data-target') || isNaN(target)) {
        return;
    }
    
    const isYears = element.hasAttribute('data-target-years');
    const duration = 2000; // 2 seconds animation
    const frameRate = 16; // ~60fps
    const totalFrames = duration / frameRate;
    const increment = target / totalFrames;
    let current = 0;
    let frame = 0;

    const updateCounter = () => {
        frame++;
        const progress = frame / totalFrames;
        
        // Easing function for smooth acceleration/deceleration
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        current = target * easeOutQuart;

        if (frame < totalFrames) {
            // Format number with commas for large numbers
            const displayValue = Math.floor(current);
            const formattedValue = displayValue.toLocaleString('en-US');
            
            if (target >= 1000 || isYears) {
                element.textContent = formattedValue + '+';
            } else {
                element.textContent = formattedValue;
            }
            requestAnimationFrame(updateCounter);
        } else {
            // Final value with proper formatting
            const formattedTarget = target.toLocaleString('en-US');
            if (target >= 1000 || isYears) {
                element.textContent = formattedTarget + '+';
            } else {
                element.textContent = formattedTarget;
            }
        }
    };

    updateCounter();
}

// Intersection Observer for counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.3 });

// Observe stat numbers on page load
document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        counterObserver.observe(stat);
    });
    
    // Also animate inline hero stats
    const inlineStats = document.querySelectorAll('.stat-number-inline[data-target]');
    inlineStats.forEach(stat => {
        counterObserver.observe(stat);
    });
    
    // Special handling for water counter - add continuous live updates with running last 3 digits
    const waterCounter = document.getElementById('waterCounter');
    if (waterCounter) {
        // First do the initial count-up animation
        counterObserver.observe(waterCounter);
        
        // After initial animation, make last 3 digits run continuously
        setTimeout(() => {
            let baseValue = 15000000; // Base value (15,000,xxx)
            let runningDigits = 0; // Last 3 digits that will continuously change
            
            // Fast running animation for last 3 digits (updates every 50ms)
            setInterval(() => {
                runningDigits += Math.floor(Math.random() * 3) + 1; // Increment by 1-3
                if (runningDigits >= 1000) {
                    runningDigits = 0;
                    baseValue += 1000; // Increment the thousands when last 3 digits roll over
                }
                
                const totalValue = baseValue + runningDigits;
                waterCounter.textContent = totalValue.toLocaleString('en-US');
            }, 50); // Update every 50ms for smooth running effect
        }, 2500); // Start after initial animation completes
    }
});

// Modal Close
const modal = document.getElementById('productModal');
if (modal) {
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    if (modal) {
        modal.style.display = 'none';
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadClients();
    loadPleasureServeLogos();
    loadAchievementsCarousel();
    loadBlogCarousel();
    initAboutWaterAnimation();
    initLiveWaterCounter();
    initServicesCursorGlow();
});

// Services Section Cursor Glow Effect
function initServicesCursorGlow() {
    const servicesSection = document.getElementById('servicesSection');
    if (!servicesSection) return;
    
    let glowElement = null;
    
    // Create glow element
    function createGlowElement() {
        glowElement = document.createElement('div');
        glowElement.className = 'cursor-glow-effect';
        glowElement.style.cssText = `
            position: absolute;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(74, 222, 128, 0.4) 0%, rgba(38, 87, 166, 0.3) 30%, transparent 70%);
            pointer-events: none;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 10;
            filter: blur(40px);
            mix-blend-mode: screen;
        `;
        servicesSection.appendChild(glowElement);
    }
    
    createGlowElement();
    
    // Mouse move handler
    servicesSection.addEventListener('mousemove', (e) => {
        const rect = servicesSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (glowElement) {
            glowElement.style.left = x + 'px';
            glowElement.style.top = y + 'px';
            glowElement.style.opacity = '1';
        }
    });
    
    // Mouse enter
    servicesSection.addEventListener('mouseenter', () => {
        if (glowElement) {
            glowElement.style.opacity = '1';
        }
    });
    
    // Mouse leave
    servicesSection.addEventListener('mouseleave', () => {
        if (glowElement) {
            glowElement.style.opacity = '0';
        }
    });
}

// Live Water Counter
function initLiveWaterCounter() {
    const counterElement = document.getElementById('waterCounter');
    if (!counterElement) return;
    
    let currentValue = 15000000; // Starting value: 15 million liters
    const incrementAmount = 10; // Increase by 10 liters every 0.2 seconds
    const updateInterval = 200; // 0.2 seconds in milliseconds
    
    function formatNumber(num) {
        return num.toLocaleString('en-US');
    }
    
    function updateCounter() {
        currentValue += incrementAmount;
        counterElement.textContent = formatNumber(currentValue);
    }
    
    // Update counter every 0.2 seconds
    setInterval(updateCounter, updateInterval);
    
    // Initial display
    counterElement.textContent = formatNumber(currentValue);
}

// About Section Water Animation
function initAboutWaterAnimation() {
    const canvas = document.getElementById('aboutWaterCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const section = document.querySelector('.about');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Water particles
    const particles = [];
    const particleCount = 50;
    
    class WaterParticle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Wrap around edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(38, 87, 166, ${this.opacity})`;
            ctx.fill();
            
            // Add glow
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(74, 222, 128, ${this.opacity * 0.3})`;
            ctx.fill();
        }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new WaterParticle());
    }
    
    // Connect nearby particles
    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(38, 87, 166, ${0.15 * (1 - distance / 150)})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        connectParticles();
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// Services Section Cursor Glow and Water Effect
const servicesSection = document.getElementById('servicesSection');
const cursorGlow = document.querySelector('.cursor-glow');
const waterCanvas = document.getElementById('waterCanvas');

const ctx = (servicesSection && cursorGlow && waterCanvas && waterCanvas.getContext) ? waterCanvas.getContext('2d') : null;

if (ctx) {
    let ripples = [];
    
    // Set canvas size
    function resizeCanvas() {
        waterCanvas.width = servicesSection.offsetWidth;
        waterCanvas.height = servicesSection.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Mouse move handler
    servicesSection.addEventListener('mousemove', (e) => {
        const rect = servicesSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Update cursor glow position
        cursorGlow.style.left = x + 'px';
        cursorGlow.style.top = y + 'px';
        cursorGlow.style.opacity = '1';
        
        // Create ripple
        ripples.push({
            x: x,
            y: y,
            radius: 0,
            maxRadius: 150,
            opacity: 0.8,
            speed: 2
        });
    });
    
    // Mouse enter/leave
    servicesSection.addEventListener('mouseenter', () => {
        cursorGlow.style.opacity = '1';
    });
    
    servicesSection.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });
    
    // Animate ripples
    function animateRipples() {
        ctx.clearRect(0, 0, waterCanvas.width, waterCanvas.height);
        
        ripples = ripples.filter(ripple => {
            ripple.radius += ripple.speed;
            ripple.opacity -= 0.01;
            
            if (ripple.opacity > 0 && ripple.radius < ripple.maxRadius) {
                // Draw ripple
                ctx.beginPath();
                ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(74, 222, 128, ${ripple.opacity * 0.5})`;
                ctx.lineWidth = 2;
                ctx.stroke();
                
                // Draw inner glow
                ctx.beginPath();
                ctx.arc(ripple.x, ripple.y, ripple.radius * 0.7, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(38, 87, 166, ${ripple.opacity * 0.3})`;
                ctx.lineWidth = 3;
                ctx.stroke();
                
                return true;
            }
            return false;
        });
        
        requestAnimationFrame(animateRipples);
    }
    
    animateRipples();
}

// Scroll Animations for Hero Section
const scrollObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, index * 100);
        }
    });
}, scrollObserverOptions);

// Observe all elements with scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-scroll-animation]');
    animatedElements.forEach(el => scrollObserver.observe(el));
});


// ========================================
// YouTube Video Carousel Functionality
// ========================================
function initVideoCarousel() {
    const track = document.getElementById('videoCarouselTrack');
    const slides = document.querySelectorAll('.video-carousel-slide');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const indicators = document.querySelectorAll('.indicator-dot');
    
    if (!track || slides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;
    let isTransitioning = false;
    
    function updateCarousel(index) {
        if (isTransitioning) return;
        isTransitioning = true;
        
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to current slide and indicator
        slides[index].classList.add('active');
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
        
        currentSlide = index;
        
        setTimeout(() => {
            isTransitioning = false;
        }, 800);
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % totalSlides;
        updateCarousel(next);
    }
    
    function prevSlide() {
        const prev = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel(prev);
    }
    
    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(nextSlide, 8000);
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            if (index !== currentSlide) {
                updateCarousel(index);
                stopAutoPlay();
                startAutoPlay();
            }
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        }
    });
    
    // Pause on hover
    const carouselWrapper = document.querySelector('.video-carousel-wrapper');
    if (carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', stopAutoPlay);
        carouselWrapper.addEventListener('mouseleave', startAutoPlay);
    }
    
    // Start autoplay
    startAutoPlay();
}

// Initialize video carousel on page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.video-carousel-wrapper')) {
        initVideoCarousel();
    }
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

/**
 * Initialize scroll to top button functionality
 * Shows button after scrolling down 300px
 * Smooth scroll to top when clicked
 */
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    
    if (!scrollBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    
    // Smooth scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top on page load
document.addEventListener('DOMContentLoaded', initScrollToTop);

// ============================================
// BOOK DEMO MODAL
// ============================================

/**
 * Initialize book demo modal functionality
 * Opens modal, collects form data, and redirects to WhatsApp
 */
function initBookDemoModal() {
    const demoBtn = document.getElementById('bookDemoBtn');
    const modalOverlay = document.getElementById('demoModalOverlay');
    const closeBtn = document.getElementById('closeDemoModal');
    const demoForm = document.getElementById('demoForm');
    
    if (!demoBtn || !modalOverlay || !demoForm) return;
    
    // Open modal
    demoBtn.addEventListener('click', () => {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
    
    // Close modal
    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    };
    
    closeBtn.addEventListener('click', closeModal);
    
    // Close on overlay click (outside modal)
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Handle form submission
    demoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('demoName').value.trim();
        const phone = document.getElementById('demoPhone').value.trim();
        const email = document.getElementById('demoEmail').value.trim();
        const service = document.getElementById('demoService').value;
        const message = document.getElementById('demoMessage').value.trim();
        
        // Construct WhatsApp message
        let whatsappMessage = `Hello Supriya Water Technology,\n\n`;
        whatsappMessage += `I would like to book a demo.\n\n`;
        whatsappMessage += `*Name:* ${name}\n`;
        whatsappMessage += `*Phone:* ${phone}\n`;
        if (email) whatsappMessage += `*Email:* ${email}\n`;
        whatsappMessage += `*Service Interested:* ${service}\n`;
        if (message) whatsappMessage += `*Message:* ${message}\n`;
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // WhatsApp number
        const whatsappNumber = '9779802355547';
        
        // Construct WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');
        
        // Close modal and reset form
        closeModal();
        demoForm.reset();
    });
}

// Initialize book demo modal on page load
document.addEventListener('DOMContentLoaded', initBookDemoModal);
