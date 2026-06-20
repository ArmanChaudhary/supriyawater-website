/**
 * Image Handler - Robust Image Loading System
 * Handles image loading errors, provides fallbacks, and lazy loading
 * Supriya Water Technology
 */

// ============================================
// IMAGE ERROR HANDLING & FALLBACK SYSTEM
// ============================================

/**
 * Configuration for image fallbacks
 */
const IMAGE_CONFIG = {
    // Fallback images for different types
    fallbacks: {
        logo: 'images/logo.png',
        brand: 'images/logo-3.png', // Use company logo as fallback for brand logos
        achievement: 'images/logo-2.png',
        product: 'images/logo.png',
        gallery: 'images/banner-swt-1.png',
        default: 'images/logo.png'
    },
    
    // Placeholder colors for different types
    placeholders: {
        logo: '#2657a6',
        brand: '#3d6bb8',
        achievement: '#1a4380',
        product: '#2657a6',
        gallery: '#3d6bb8',
        default: '#2657a6'
    },
    
    // Retry configuration
    maxRetries: 2,
    retryDelay: 1000, // 1 second
    
    // Lazy loading configuration
    lazyLoadThreshold: '50px',
    
    // Cache for failed images (to avoid retrying)
    failedImages: new Set()
};

/**
 * Create a placeholder SVG for broken images
 * @param {string} text - Text to display in placeholder
 * @param {string} color - Background color
 * @returns {string} Data URL for SVG placeholder
 */
function createPlaceholderSVG(text, color = '#2657a6') {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <rect width="400" height="300" fill="${color}"/>
            <text x="50%" y="45%" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="16" font-weight="bold">
                ${text}
            </text>
            <text x="50%" y="55%" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-family="Arial, sans-serif" font-size="12">
                Image Loading...
            </text>
            <circle cx="200" cy="180" r="20" fill="none" stroke="white" stroke-width="3" opacity="0.5">
                <animate attributeName="r" from="15" to="25" dur="1s" repeatCount="indefinite"/>
                <animate attributeName="opacity" from="0.5" to="0.1" dur="1s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

/**
 * Get image type from element classes or data attributes
 * @param {HTMLImageElement} img - Image element
 * @returns {string} Image type
 */
function getImageType(img) {
    // Check data attribute first
    if (img.dataset.imageType) {
        return img.dataset.imageType;
    }
    
    // Check classes
    const classList = img.className.toLowerCase();
    if (classList.includes('logo')) return 'logo';
    if (classList.includes('brand')) return 'brand';
    if (classList.includes('achievement')) return 'achievement';
    if (classList.includes('product')) return 'product';
    if (classList.includes('gallery')) return 'gallery';
    
    // Check parent classes
    const parent = img.parentElement;
    if (parent) {
        const parentClass = parent.className.toLowerCase();
        if (parentClass.includes('brand')) return 'brand';
        if (parentClass.includes('achievement')) return 'achievement';
        if (parentClass.includes('product')) return 'product';
    }
    
    return 'default';
}

/**
 * Get fallback image for a specific type
 * @param {string} type - Image type
 * @returns {string} Fallback image path
 */
function getFallbackImage(type) {
    return IMAGE_CONFIG.fallbacks[type] || IMAGE_CONFIG.fallbacks.default;
}

/**
 * Get placeholder color for a specific type
 * @param {string} type - Image type
 * @returns {string} Placeholder color
 */
function getPlaceholderColor(type) {
    return IMAGE_CONFIG.placeholders[type] || IMAGE_CONFIG.placeholders.default;
}

/**
 * Handle image loading error with retry and fallback
 * @param {HTMLImageElement} img - Image element that failed to load
 * @param {number} retryCount - Current retry attempt
 */
function handleImageError(img, retryCount = 0) {
    const originalSrc = img.dataset.originalSrc || img.src;
    
    // Store original src if not already stored
    if (!img.dataset.originalSrc) {
        img.dataset.originalSrc = originalSrc;
    }
    
    // Check if this image has already failed permanently
    if (IMAGE_CONFIG.failedImages.has(originalSrc)) {
        loadFallbackImage(img);
        return;
    }
    
    // Retry logic
    if (retryCount < IMAGE_CONFIG.maxRetries) {
        console.log(`Retrying image load (attempt ${retryCount + 1}/${IMAGE_CONFIG.maxRetries}): ${originalSrc}`);
        
        setTimeout(() => {
            // Create a new image to test if it loads
            const testImg = new Image();
            testImg.onload = () => {
                img.src = originalSrc;
                img.classList.remove('image-error');
                img.classList.add('image-loaded');
            };
            testImg.onerror = () => {
                handleImageError(img, retryCount + 1);
            };
            testImg.src = originalSrc + '?retry=' + retryCount;
        }, IMAGE_CONFIG.retryDelay);
    } else {
        // Max retries reached, use fallback
        console.warn(`Image failed to load after ${IMAGE_CONFIG.maxRetries} retries: ${originalSrc}`);
        IMAGE_CONFIG.failedImages.add(originalSrc);
        loadFallbackImage(img);
    }
}

/**
 * Load fallback image
 * @param {HTMLImageElement} img - Image element
 */
function loadFallbackImage(img) {
    const type = getImageType(img);
    const fallback = getFallbackImage(type);
    const altText = img.alt || 'Image';
    const color = getPlaceholderColor(type);
    
    // Add error class
    img.classList.add('image-error');
    img.classList.remove('image-loaded');
    
    // Try local fallback first
    const testImg = new Image();
    testImg.onload = () => {
        img.src = fallback;
        img.title = `${altText} (Fallback)`;
    };
    testImg.onerror = () => {
        // If fallback also fails, use SVG placeholder
        img.src = createPlaceholderSVG(altText, color);
        img.title = `${altText} (Placeholder)`;
    };
    testImg.src = fallback;
}

/**
 * Initialize image error handling for all images
 */
function initializeImageHandling() {
    // Get all images on the page
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Skip if already initialized
        if (img.dataset.imageHandlerInit) return;
        
        // Mark as initialized
        img.dataset.imageHandlerInit = 'true';
        
        // Add loading class
        img.classList.add('image-loading');
        
        // Handle successful load
        img.addEventListener('load', function() {
            this.classList.remove('image-loading', 'image-error');
            this.classList.add('image-loaded');
        });
        
        // Handle error
        img.addEventListener('error', function() {
            this.classList.remove('image-loading');
            handleImageError(this, 0);
        });
        
        // If image is already in error state, handle it
        if (!img.complete || img.naturalHeight === 0) {
            // Image hasn't loaded yet or failed
            if (img.src && img.src !== window.location.href) {
                // Has a source, wait for load/error
            } else {
                // No source, add placeholder
                const type = getImageType(img);
                const color = getPlaceholderColor(type);
                img.src = createPlaceholderSVG(img.alt || 'Image', color);
            }
        }
    });
}

/**
 * Setup lazy loading for images
 */
function setupLazyLoading() {
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Load the image
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    
                    // Stop observing this image
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: IMAGE_CONFIG.lazyLoadThreshold
        });
        
        // Observe all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

/**
 * Preload critical images
 * @param {Array<string>} imageUrls - Array of image URLs to preload
 */
function preloadImages(imageUrls) {
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

/**
 * Check if an image URL is accessible
 * @param {string} url - Image URL to check
 * @returns {Promise<boolean>} True if accessible, false otherwise
 */
async function checkImageAccessibility(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
        
        // Timeout after 5 seconds
        setTimeout(() => resolve(false), 5000);
    });
}

/**
 * Replace external image URLs with local fallbacks
 * Useful for migrating from external CDN to local storage
 */
function replaceExternalImages() {
    const images = document.querySelectorAll('img[src^="http"]');
    
    images.forEach(async (img) => {
        const src = img.src;
        
        // Skip if it's from the same domain
        if (src.startsWith(window.location.origin)) return;
        
        // Check if external image is accessible
        const isAccessible = await checkImageAccessibility(src);
        
        if (!isAccessible) {
            console.warn(`External image not accessible: ${src}`);
            handleImageError(img, 0);
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize all image handling features
 */
function initImageHandler() {
    // Initialize error handling
    initializeImageHandling();
    
    // Setup lazy loading
    setupLazyLoading();
    
    // Check external images
    replaceExternalImages();
    
    // Preload critical images
    preloadImages([
        'images/logo.png',
        'images/logo-2.png',
        'images/logo-3.png',
        'images/favicon.png'
    ]);
    
    console.log('Image Handler initialized successfully');
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImageHandler);
} else {
    initImageHandler();
}

// Re-initialize when new images are added dynamically
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.nodeName === 'IMG') {
                initializeImageHandling();
            } else if (node.querySelectorAll) {
                const images = node.querySelectorAll('img');
                if (images.length > 0) {
                    initializeImageHandling();
                }
            }
        });
    });
});

// Start observing
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Export functions for external use
window.ImageHandler = {
    init: initImageHandler,
    handleError: handleImageError,
    checkAccessibility: checkImageAccessibility,
    preload: preloadImages,
    createPlaceholder: createPlaceholderSVG
};
