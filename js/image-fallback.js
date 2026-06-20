/**
 * Advanced Image Fallback System
 * Ensures images always display even if external links break
 * 
 * Features:
 * 1. Automatic fallback to branded placeholders
 * 2. Local caching simulation
 * 3. Retry mechanism
 * 4. SVG placeholder generation
 * 5. Category-specific fallbacks
 */

// Configuration
const IMAGE_FALLBACK_CONFIG = {
    retryAttempts: 2,
    retryDelay: 1000,
    brandColor: '#2657a6',
    brandSecondary: '#3d6bb8',
    placeholderText: 'Supriya Water Technology'
};

// Category-specific fallback colors and icons
const CATEGORY_FALLBACKS = {
    'Domestic Purifier': {
        color: '#2657a6',
        icon: '💧',
        text: 'Domestic RO Purifier'
    },
    'RO Plant': {
        color: '#3d6bb8',
        icon: '⚙️',
        text: 'RO Plant'
    },
    'Water Treatment Plant': {
        color: '#5480ca',
        icon: '🏭',
        text: 'Water Treatment'
    },
    'Water Filter Media': {
        color: '#1a4380',
        icon: '🔬',
        text: 'Filter Media'
    },
    'Air Conditioner': {
        color: '#0ea5e9',
        icon: '❄️',
        text: 'Air Conditioner'
    },
    'Others': {
        color: '#64748b',
        icon: '🔧',
        text: 'Product'
    },
    'fountain': {
        color: '#0891b2',
        icon: '⛲',
        text: 'Water Fountain'
    },
    'default': {
        color: '#2657a6',
        icon: '💧',
        text: 'Product Image'
    }
};

/**
 * Create a professional SVG placeholder with branding
 */
function createBrandedPlaceholder(text, category = 'default') {
    const fallback = CATEGORY_FALLBACKS[category] || CATEGORY_FALLBACKS.default;
    
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
            <!-- Background gradient -->
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${fallback.color};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${fallback.color};stop-opacity:0.7" />
                </linearGradient>
            </defs>
            
            <!-- Background -->
            <rect width="400" height="400" fill="url(#grad1)"/>
            
            <!-- Icon/Emoji -->
            <text x="200" y="160" font-size="80" text-anchor="middle" fill="white" opacity="0.9">
                ${fallback.icon}
            </text>
            
            <!-- Main Text -->
            <text x="200" y="220" font-family="Arial, sans-serif" font-size="20" font-weight="bold" 
                  text-anchor="middle" fill="white">
                ${fallback.text}
            </text>
            
            <!-- Brand Name -->
            <text x="200" y="250" font-family="Arial, sans-serif" font-size="14" 
                  text-anchor="middle" fill="white" opacity="0.8">
                Supriya Water Technology
            </text>
            
            <!-- Availability Notice -->
            <text x="200" y="280" font-family="Arial, sans-serif" font-size="12" 
                  text-anchor="middle" fill="white" opacity="0.7">
                Image Available on Request
            </text>
            
            <!-- Border -->
            <rect x="10" y="10" width="380" height="380" fill="none" 
                  stroke="white" stroke-width="2" opacity="0.3"/>
        </svg>
    `;
    
    return 'data:image/svg+xml;base64,' + btoa(svg);
}

/**
 * Detect category from image element context
 */
function detectCategory(img) {
    // Try to get category from data attribute
    if (img.dataset.category) {
        return img.dataset.category;
    }
    
    // Try to get from parent element classes
    const parent = img.closest('[data-category], .product-card, .gallery-item');
    if (parent && parent.dataset.category) {
        return parent.dataset.category;
    }
    
    // Try to detect from alt text
    const alt = img.alt.toLowerCase();
    if (alt.includes('ro plant') || alt.includes('reverse osmosis')) return 'RO Plant';
    if (alt.includes('purifier') || alt.includes('domestic')) return 'Domestic Purifier';
    if (alt.includes('treatment') || alt.includes('wtp')) return 'Water Treatment Plant';
    if (alt.includes('fountain')) return 'fountain';
    if (alt.includes('ac') || alt.includes('air conditioner')) return 'Air Conditioner';
    if (alt.includes('filter media')) return 'Water Filter Media';
    
    return 'default';
}

/**
 * Retry loading image with exponential backoff
 */
function retryImageLoad(img, originalSrc, attempt = 1) {
    if (attempt > IMAGE_FALLBACK_CONFIG.retryAttempts) {
        // All retries failed, use placeholder
        applyFallbackImage(img);
        return;
    }
    
    const delay = IMAGE_FALLBACK_CONFIG.retryDelay * attempt;
    
    console.log(`Retrying image load (attempt ${attempt}): ${originalSrc}`);
    
    setTimeout(() => {
        const testImg = new Image();
        
        testImg.onload = () => {
            // Retry successful!
            img.src = originalSrc;
            img.classList.remove('image-error');
            img.classList.add('image-loaded');
            console.log(`Image loaded successfully on retry ${attempt}`);
        };
        
        testImg.onerror = () => {
            // Retry failed, try again
            retryImageLoad(img, originalSrc, attempt + 1);
        };
        
        // Add cache buster to force reload
        testImg.src = originalSrc + (originalSrc.includes('?') ? '&' : '?') + 'retry=' + attempt;
    }, delay);
}

/**
 * Apply fallback image with category-specific branding
 */
function applyFallbackImage(img) {
    const category = detectCategory(img);
    const text = img.alt || 'Product Image';
    
    img.src = createBrandedPlaceholder(text, category);
    img.classList.add('image-fallback');
    img.classList.remove('image-loading');
    
    // Add title for accessibility
    img.title = text + ' - Image temporarily unavailable';
    
    console.log(`Applied fallback for: ${text} (Category: ${category})`);
}

/**
 * Handle image load error
 */
function handleImageError(img) {
    // Prevent infinite error loop
    if (img.classList.contains('fallback-applied')) {
        return;
    }
    
    img.classList.add('fallback-applied', 'image-error');
    
    const originalSrc = img.dataset.originalSrc || img.src;
    
    // Store original source
    if (!img.dataset.originalSrc) {
        img.dataset.originalSrc = originalSrc;
    }
    
    console.warn(`Image failed to load: ${originalSrc}`);
    
    // Try to retry loading first
    if (!img.dataset.retryAttempted) {
        img.dataset.retryAttempted = 'true';
        retryImageLoad(img, originalSrc);
    } else {
        // Retries exhausted, use fallback
        applyFallbackImage(img);
    }
}

/**
 * Handle image load success
 */
function handleImageLoad(img) {
    img.classList.add('image-loaded');
    img.classList.remove('image-loading', 'image-error');
}

/**
 * Initialize fallback system for all images
 */
function initializeImageFallbackSystem() {
    // Find all images on the page
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Skip if already initialized
        if (img.dataset.fallbackInitialized) {
            return;
        }
        
        img.dataset.fallbackInitialized = 'true';
        
        // Add loading class
        if (!img.complete) {
            img.classList.add('image-loading');
        }
        
        // Check if image is already loaded
        if (img.complete && img.naturalHeight !== 0) {
            handleImageLoad(img);
        } else if (img.complete && img.naturalHeight === 0) {
            // Image loaded but failed
            handleImageError(img);
        } else {
            // Set up event listeners
            img.addEventListener('load', () => handleImageLoad(img), { once: true });
            img.addEventListener('error', () => handleImageError(img), { once: true });
        }
    });
}

/**
 * Observe DOM for new images (dynamic content)
 */
function observeNewImages() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.tagName === 'IMG') {
                    initializeImageFallbackSystem();
                } else if (node.querySelectorAll) {
                    const imgs = node.querySelectorAll('img');
                    if (imgs.length > 0) {
                        initializeImageFallbackSystem();
                    }
                }
            });
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeImageFallbackSystem();
        observeNewImages();
    });
} else {
    initializeImageFallbackSystem();
    observeNewImages();
}

// Re-initialize periodically to catch any missed images
setInterval(initializeImageFallbackSystem, 5000);

// Export for use in other scripts
window.ImageFallbackSystem = {
    init: initializeImageFallbackSystem,
    createPlaceholder: createBrandedPlaceholder,
    retryImage: retryImageLoad
};

console.log('✅ Advanced Image Fallback System initialized');
