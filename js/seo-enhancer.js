/**
 * Advanced SEO Enhancement Module
 * Implements enterprise-level SEO techniques
 */

(function() {
    'use strict';

    const SEO_CONFIG = {
        companyName: 'Supriya Water Technology',
        establishedYear: 2012,
        domain: 'supriyawater.com.np',
        socialProfiles: [
            'https://www.facebook.com/supriyawater/',
            'https://www.instagram.com/supriya_water/',
            'https://www.youtube.com/@supriyawater',
            'https://www.linkedin.com/company/supriya-water-technology/'
        ]
    };

    /**
     * Add FAQ Schema for better SERP features
     */
    function addFAQSchema() {
        const faqData = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What water purification services does Supriya Water Technology offer?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Supriya Water Technology offers comprehensive water purification services including RO water purifiers, water treatment plants, sewage treatment plants, water fountains, tank cleaning services, and air conditioning solutions. We serve residential, commercial, and industrial clients across Nepal with 15+ years of experience."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Where is Supriya Water Technology located in Nepal?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Supriya Water Technology is located at House No: 117, Shalik Chowk, Tankeshwar Marg, Kathmandu 44600, Nepal. We provide services across Nepal including Kathmandu, Pokhara, Chitwan, and other major cities."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the price range for RO water purifiers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our RO water purifiers range from NPR 20,400 to NPR 24,500 for domestic models. We also offer commercial and industrial RO plants with capacities from 50 LPH to 12,000 LPH. Contact us at +977-9851055247 for detailed pricing and free consultation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Supriya Water Technology provide installation and maintenance services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we provide complete installation, maintenance, and repair services for all our water purification systems. Our expert team offers filter replacement, membrane cleaning, preventive maintenance, and 24/7 support for domestic, commercial, and industrial systems."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long has Supriya Water Technology been in business?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Supriya Water Technology has been serving Nepal since 2012, with over 14 years of experience in water purification and treatment. We have successfully completed 10,000+ installations and served 6,000+ satisfied customers across Nepal."
                    }
                }
            ]
        };

        addStructuredData(faqData, 'faq-schema');
    }

    /**
     * Add Service Schema for better local SEO
     */
    function addServiceSchema() {
        const services = [
            {
                "@type": "Service",
                "serviceType": "RO Water Purifier Installation",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": SEO_CONFIG.companyName
                },
                "areaServed": {
                    "@type": "Country",
                    "name": "Nepal"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Water Purification Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Domestic RO Purifier"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Commercial RO Plant"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Water Treatment Plant"
                            }
                        }
                    ]
                }
            }
        ];

        const serviceSchema = {
            "@context": "https://schema.org",
            "@graph": services
        };

        addStructuredData(serviceSchema, 'service-schema');
    }

    /**
     * Add Review/Rating Schema
     */
    function addReviewSchema() {
        const reviewSchema = {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Water Purification Services",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "6000",
                "bestRating": "5",
                "worstRating": "1"
            },
            "brand": {
                "@type": "Brand",
                "name": SEO_CONFIG.companyName
            }
        };

        addStructuredData(reviewSchema, 'review-schema');
    }

    /**
     * Helper function to add structured data
     */
    function addStructuredData(data, id) {
        // Check if schema already exists
        if (document.getElementById(id)) return;

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = id;
        script.textContent = JSON.stringify(data, null, 2);
        document.head.appendChild(script);
    }

    /**
     * Optimize images for SEO
     */
    function optimizeImages() {
        const images = document.querySelectorAll('img:not([alt])');
        images.forEach(img => {
            if (!img.alt) {
                // Generate alt text from src or nearby text
                const src = img.src;
                const filename = src.split('/').pop().split('.')[0];
                img.alt = filename.replace(/-/g, ' ').replace(/_/g, ' ');
            }
        });
    }

    /**
     * Add canonical tags if missing
     */
    function ensureCanonical() {
        if (!document.querySelector('link[rel="canonical"]')) {
            const canonical = document.createElement('link');
            canonical.rel = 'canonical';
            canonical.href = window.location.href.split('?')[0].split('#')[0];
            document.head.appendChild(canonical);
        }
    }

    /**
     * Optimize internal links
     */
    function optimizeInternalLinks() {
        const links = document.querySelectorAll('a[href^="/"], a[href^="' + window.location.origin + '"]');
        links.forEach(link => {
            // Add title if missing
            if (!link.title && link.textContent) {
                link.title = link.textContent.trim();
            }
        });
    }

    /**
     * Add social media meta tags dynamically
     */
    function enhanceSocialMeta() {
        const metaTags = {
            'og:type': 'website',
            'og:site_name': SEO_CONFIG.companyName,
            'twitter:card': 'summary_large_image',
            'twitter:site': '@supriyawater'
        };

        Object.entries(metaTags).forEach(([property, content]) => {
            if (!document.querySelector(`meta[property="${property}"]`) && 
                !document.querySelector(`meta[name="${property}"]`)) {
                const meta = document.createElement('meta');
                meta.setAttribute(property.startsWith('og:') ? 'property' : 'name', property);
                meta.content = content;
                document.head.appendChild(meta);
            }
        });
    }

    /**
     * Track page performance for SEO
     */
    function trackPerformance() {
        if ('PerformanceObserver' in window) {
            // Largest Contentful Paint
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP (Largest Contentful Paint):', lastEntry.renderTime || lastEntry.loadTime, 'ms');
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // First Input Delay
            const fidObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    console.log('FID (First Input Delay):', entry.processingStart - entry.startTime, 'ms');
                });
            });
            fidObserver.observe({ entryTypes: ['first-input'] });

            // Cumulative Layout Shift
            let clsValue = 0;
            const clsObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                }
                console.log('CLS (Cumulative Layout Shift):', clsValue);
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });
        }
    }

    /**
     * Lazy load images for better performance
     */
    function enableLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[data-src]');
            images.forEach(img => {
                img.src = img.dataset.src;
                img.loading = 'lazy';
            });
        }
    }

    /**
     * Generate breadcrumb navigation
     */
    function generateBreadcrumbs() {
        const path = window.location.pathname;
        const segments = path.split('/').filter(s => s);
        
        if (segments.length === 0) return; // Homepage, no breadcrumbs needed

        const breadcrumbData = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": window.location.origin + "/"
                }
            ]
        };

        segments.forEach((segment, index) => {
            breadcrumbData.itemListElement.push({
                "@type": "ListItem",
                "position": index + 2,
                "name": segment.replace(/[-_]/g, ' ').replace('.html', ''),
                "item": window.location.origin + '/' + segments.slice(0, index + 1).join('/')
            });
        });

        addStructuredData(breadcrumbData, 'dynamic-breadcrumb');
    }

    /**
     * Enhance page speed insights
     */
    function enhancePageSpeed() {
        // Preload critical resources
        const criticalResources = [
            { href: '/css/style.css', as: 'style' },
            { href: '/js/main.js', as: 'script' }
        ];

        criticalResources.forEach(resource => {
            if (!document.querySelector(`link[href="${resource.href}"]`)) {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.href = resource.href;
                link.as = resource.as;
                document.head.appendChild(link);
            }
        });
    }

    /**
     * Add hreflang tags for international SEO
     */
    function addHreflangTags() {
        const hreflangData = [
            { lang: 'en', url: window.location.href },
            { lang: 'ne', url: window.location.href.replace(/\.com\.np/, '.com.np/ne') },
            { lang: 'x-default', url: window.location.href }
        ];

        hreflangData.forEach(data => {
            if (!document.querySelector(`link[hreflang="${data.lang}"]`)) {
                const link = document.createElement('link');
                link.rel = 'alternate';
                link.hreflang = data.lang;
                link.href = data.url;
                document.head.appendChild(link);
            }
        });
    }

    /**
     * Initialize all SEO enhancements
     */
    function initSEO() {
        console.log('🚀 Initializing Advanced SEO Enhancement...');

        try {
            addFAQSchema();
            addServiceSchema();
            addReviewSchema();
            optimizeImages();
            ensureCanonical();
            optimizeInternalLinks();
            enhanceSocialMeta();
            generateBreadcrumbs();
            enhancePageSpeed();
            addHreflangTags();
            trackPerformance();
            enableLazyLoading();

            console.log('✅ SEO Enhancement Complete - Ready for Top Rankings!');
        } catch (error) {
            console.error('❌ SEO initialization error:', error);
        }
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSEO);
    } else {
        initSEO();
    }

    // Export for external use
    window.SEOEnhancer = {
        init: initSEO,
        addSchema: addStructuredData
    };

})();
