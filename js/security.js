/**
 * Advanced Website Security Module
 * Protects against XSS, injection attacks, console manipulation, and more
 */

(function() {
    'use strict';

    // Security Configuration
    const SECURITY_CONFIG = {
        enableConsoleProtection: true,
        enableRightClickProtection: false, // Set to true to disable right-click
        enableDevToolsDetection: true,
        enableXSSProtection: true,
        enableInjectionProtection: true,
        logSecurityEvents: true
    };

    /**
     * Sanitize user input to prevent XSS attacks
     */
    function sanitizeInput(input) {
        if (typeof input !== 'string') return input;
        
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/\//g, '&#x2F;');
    }

    /**
     * Detect and prevent XSS attempts
     */
    function detectXSS(str) {
        if (typeof str !== 'string') return false;
        
        const xssPatterns = [
            /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            /javascript:/gi,
            /on\w+\s*=/gi,
            /<iframe/gi,
            /<object/gi,
            /<embed/gi,
            /eval\(/gi,
            /expression\(/gi,
            /vbscript:/gi,
            /data:text\/html/gi
        ];
        
        return xssPatterns.some(pattern => pattern.test(str));
    }

    /**
     * Protect against SQL injection in URLs and forms
     */
    function detectSQLInjection(str) {
        if (typeof str !== 'string') return false;
        
        const sqlPatterns = [
            /(\bunion\b.*\bselect\b)/gi,
            /(\bselect\b.*\bfrom\b)/gi,
            /(\binsert\b.*\binto\b)/gi,
            /(\bupdate\b.*\bset\b)/gi,
            /(\bdelete\b.*\bfrom\b)/gi,
            /(\bdrop\b.*\btable\b)/gi,
            /(\bexec\b|\bexecute\b)/gi,
            /(--|#|\/\*|\*\/)/gi,
            /(\bor\b.*=.*)/gi,
            /('.*--)/gi
        ];
        
        return sqlPatterns.some(pattern => pattern.test(str));
    }

    /**
     * Console protection - prevent common console-based attacks
     */
    function protectConsole() {
        if (!SECURITY_CONFIG.enableConsoleProtection) return;
        
        const originalConsole = {
            log: console.log,
            warn: console.warn,
            error: console.error,
            info: console.info
        };
        
        // Detect suspicious console usage
        const suspiciousPatterns = [
            /password/gi,
            /token/gi,
            /secret/gi,
            /api[_-]?key/gi,
            /credit.*card/gi
        ];
        
        ['log', 'warn', 'error', 'info'].forEach(method => {
            console[method] = function(...args) {
                const message = args.join(' ');
                const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(message));
                
                if (isSuspicious) {
                    originalConsole.warn('⚠️ Security: Potentially sensitive data in console');
                }
                
                originalConsole[method].apply(console, args);
            };
        });
    }

    /**
     * Detect DevTools opening (basic detection)
     */
    function detectDevTools() {
        if (!SECURITY_CONFIG.enableDevToolsDetection) return;
        
        let devtoolsOpen = false;
        const threshold = 160;
        
        setInterval(() => {
            if (window.outerWidth - window.innerWidth > threshold || 
                window.outerHeight - window.innerHeight > threshold) {
                if (!devtoolsOpen) {
                    devtoolsOpen = true;
                    logSecurityEvent('DevTools detected as open');
                }
            } else {
                devtoolsOpen = false;
            }
        }, 1000);
    }

    /**
     * Protect against clickjacking
     */
    function preventClickjacking() {
        // Check if page is being framed
        if (window.self !== window.top) {
            // Try to break out of frame
            try {
                window.top.location = window.self.location;
            } catch (e) {
                // If that fails, hide content
                document.body.style.display = 'none';
                logSecurityEvent('Clickjacking attempt detected and blocked');
            }
        }
    }

    /**
     * Protect forms from injection attacks
     */
    function protectForms() {
        document.addEventListener('submit', function(e) {
            const form = e.target;
            if (form.tagName !== 'FORM') return;
            
            const inputs = form.querySelectorAll('input, textarea');
            let hasThreats = false;
            
            inputs.forEach(input => {
                const value = input.value;
                
                if (detectXSS(value)) {
                    logSecurityEvent('XSS attempt detected in form input');
                    hasThreats = true;
                }
                
                if (detectSQLInjection(value)) {
                    logSecurityEvent('SQL injection attempt detected in form input');
                    hasThreats = true;
                }
            });
            
            if (hasThreats) {
                e.preventDefault();
                alert('Security Warning: Invalid input detected. Please check your form data.');
                return false;
            }
        }, true);
    }

    /**
     * Protect against URL-based attacks
     */
    function protectURL() {
        const url = window.location.href;
        const params = new URLSearchParams(window.location.search);
        
        // Check URL for malicious patterns
        if (detectXSS(url) || detectSQLInjection(url)) {
            logSecurityEvent('Malicious URL detected');
            // Redirect to safe homepage
            window.location.href = '/';
            return;
        }
        
        // Check each parameter
        params.forEach((value, key) => {
            if (detectXSS(value) || detectSQLInjection(value)) {
                logSecurityEvent(`Malicious parameter detected: ${key}`);
                // Remove malicious parameter
                params.delete(key);
                const newURL = window.location.pathname + '?' + params.toString();
                window.history.replaceState({}, '', newURL);
            }
        });
    }

    /**
     * Disable right-click (optional)
     */
    function disableRightClick() {
        if (!SECURITY_CONFIG.enableRightClickProtection) return;
        
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            logSecurityEvent('Right-click disabled');
            return false;
        });
    }

    /**
     * Prevent text selection (optional - disabled by default for UX)
     */
    function preventSelection() {
        // Disabled by default - uncomment if needed
        /*
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
            return false;
        });
        */
    }

    /**
     * Detect and prevent clipboard manipulation
     */
    function protectClipboard() {
        document.addEventListener('copy', function(e) {
            // Allow normal copying but log suspicious activity
            const selection = window.getSelection().toString();
            if (selection.length > 1000) {
                logSecurityEvent('Large text copy detected');
            }
        });
    }

    /**
     * Protect against malicious scripts in localStorage/sessionStorage
     */
    function protectStorage() {
        const originalSetItem = Storage.prototype.setItem;
        
        Storage.prototype.setItem = function(key, value) {
            if (typeof value === 'string' && (detectXSS(value) || detectSQLInjection(value))) {
                logSecurityEvent('Malicious content blocked from storage');
                return;
            }
            originalSetItem.call(this, key, value);
        };
    }

    /**
     * Rate limiting for actions (prevent abuse)
     */
    const rateLimiter = {
        actions: {},
        limit: function(action, maxAttempts = 10, timeWindow = 60000) {
            const now = Date.now();
            
            if (!this.actions[action]) {
                this.actions[action] = [];
            }
            
            // Remove old attempts outside time window
            this.actions[action] = this.actions[action].filter(time => now - time < timeWindow);
            
            if (this.actions[action].length >= maxAttempts) {
                logSecurityEvent(`Rate limit exceeded for: ${action}`);
                return false;
            }
            
            this.actions[action].push(now);
            return true;
        }
    };

    /**
     * Log security events
     */
    function logSecurityEvent(message) {
        if (!SECURITY_CONFIG.logSecurityEvents) return;
        
        const timestamp = new Date().toISOString();
        console.warn(`🔒 [Security] ${timestamp}: ${message}`);
        
        // Optionally send to server for monitoring
        // sendSecurityLog(message, timestamp);
    }

    /**
     * Protect against HTTP parameter pollution
     */
    function protectHTTPParams() {
        const params = new URLSearchParams(window.location.search);
        const seen = new Set();
        
        params.forEach((value, key) => {
            if (seen.has(key)) {
                logSecurityEvent(`Duplicate parameter detected: ${key}`);
                params.delete(key);
            }
            seen.add(key);
        });
    }

    /**
     * Secure cookie handling
     */
    function protectCookies() {
        // Monitor cookie changes
        const originalCookie = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie');
        
        Object.defineProperty(document, 'cookie', {
            get: function() {
                return originalCookie.get.call(document);
            },
            set: function(value) {
                // Add security flags if not present
                if (!value.includes('Secure')) {
                    logSecurityEvent('Cookie without Secure flag');
                }
                if (!value.includes('HttpOnly')) {
                    logSecurityEvent('Cookie without HttpOnly flag');
                }
                if (!value.includes('SameSite')) {
                    value += '; SameSite=Strict';
                }
                return originalCookie.set.call(document, value);
            }
        });
    }

    /**
     * Initialize all security features
     */
    function initSecurity() {
        console.log('🔒 Initializing Advanced Security System...');
        
        try {
            preventClickjacking();
            protectConsole();
            detectDevTools();
            protectForms();
            protectURL();
            disableRightClick();
            preventSelection();
            protectClipboard();
            protectStorage();
            protectHTTPParams();
            protectCookies();
            
            // Add security meta tags dynamically if not present
            if (!document.querySelector('meta[http-equiv="X-UA-Compatible"]')) {
                const meta = document.createElement('meta');
                meta.httpEquiv = 'X-UA-Compatible';
                meta.content = 'IE=edge';
                document.head.appendChild(meta);
            }
            
            console.log('✅ Security System Active - Website Protected');
            logSecurityEvent('Security system initialized successfully');
        } catch (error) {
            console.error('❌ Security initialization error:', error);
        }
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSecurity);
    } else {
        initSecurity();
    }

    // Export for external use
    window.SecurityModule = {
        sanitize: sanitizeInput,
        detectXSS: detectXSS,
        detectSQLInjection: detectSQLInjection,
        rateLimit: rateLimiter.limit.bind(rateLimiter),
        logEvent: logSecurityEvent
    };

})();
