// Performance optimizations for INOX Master Landing

// Intersection Observer for lazy loading images
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Service Worker registration for caching
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Preload critical images
function preloadCriticalImages() {
    const criticalImages = [
        'img/perila.jpg',
        'img/stairs.jpg',
        'img/balcony.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Optimize animations for reduced motion preference
function setupReducedMotion() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Disable GSAP animations
        gsap.set('*', { clearProps: 'all' });
        
        // Remove animation classes
        document.querySelectorAll('.hero-title, .hero-subtitle, .hero-points, .hero-img')
            .forEach(el => el.style.animation = 'none');
    }
}

// Memory management for large galleries
function optimizeGalleryMemory() {
    // Clean up event listeners when gallery items are removed
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.removedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    // Clean up any event listeners
                    const clone = node.cloneNode(true);
                    node.replaceWith(clone);
                }
            });
        });
    });
    
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        observer.observe(galleryGrid, { childList: true, subtree: true });
    }
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', () => {
    setupLazyLoading();
    preloadCriticalImages();
    setupReducedMotion();
    optimizeGalleryMemory();
});

// Export functions for use in main script
window.PerformanceOptimizations = {
    setupLazyLoading,
    preloadCriticalImages,
    setupReducedMotion,
    optimizeGalleryMemory
};



