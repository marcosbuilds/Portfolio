(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealSelector = [
        '.hero-badge',
        '.hero-title',
        '.hero-subtitle',
        '.hero-description',
        '.hero-buttons',
        '.page-header',
        '.section-title',
        '.skill-card',
        '.project-card',
        '.projects-note',
        '.timeline-item',
        '.stat-card',
        '.feature-card',
        '.metric-card',
        '.comparison-section',
        '.highlight-box',
        '.cta-section',
        '.content-section > .paragraph',
        '.section-heading',
        '.comment-panel',
        '.comments-section'
    ].join(',');

    function initReveal() {
        const elements = [...document.querySelectorAll(revealSelector)];

        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            elements.forEach((element) => element.classList.add('is-revealed'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -70px 0px'
        });

        elements.forEach((element, index) => {
            element.classList.add('reveal');
            element.style.setProperty('--reveal-delay', `${Math.min(index * 55, 360)}ms`);
            observer.observe(element);
        });
    }

    function initPointerGlow() {
        if (prefersReducedMotion || !window.matchMedia('(hover: hover)').matches) return;

        document.querySelectorAll('.skill-card, .project-card, .feature-card, .stat-card, .metric-card, .comment-item, .timeline-item').forEach((card) => {
            card.addEventListener('pointermove', (event) => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
                card.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
            });
        });
    }

    function initHeroDepth() {
        const heroContent = document.querySelector('.hero-content');
        if (!heroContent || prefersReducedMotion) return;

        let ticking = false;

        function update() {
            const progress = Math.min(window.scrollY / 700, 1);
            heroContent.style.transform = `translate3d(0, ${progress * -18}px, 0)`;
            heroContent.style.opacity = String(1 - progress * 0.18);
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (ticking) return;
            window.requestAnimationFrame(update);
            ticking = true;
        }, { passive: true });
    }

    function initBackgroundCursor() {
        if (prefersReducedMotion || !window.matchMedia('(hover: hover)').matches) return;

        const root = document.documentElement;
        let targetX = window.innerWidth / 2;
        let targetY = window.innerHeight * 0.45;
        let currentX = targetX;
        let currentY = targetY;
        let frameId = null;

        function render() {
            currentX += (targetX - currentX) * 0.12;
            currentY += (targetY - currentY) * 0.12;
            root.style.setProperty('--cursor-x', `${currentX.toFixed(1)}px`);
            root.style.setProperty('--cursor-y', `${currentY.toFixed(1)}px`);

            if (Math.abs(targetX - currentX) > 0.2 || Math.abs(targetY - currentY) > 0.2) {
                frameId = window.requestAnimationFrame(render);
            } else {
                frameId = null;
            }
        }

        function requestRender() {
            if (frameId === null) {
                frameId = window.requestAnimationFrame(render);
            }
        }

        window.addEventListener('pointermove', (event) => {
            targetX = event.clientX;
            targetY = event.clientY;
            requestRender();
        }, { passive: true });

        window.addEventListener('resize', () => {
            targetX = window.innerWidth / 2;
            targetY = window.innerHeight * 0.45;
            requestRender();
        }, { passive: true });
    }

    function init() {
        document.body.classList.add('page-loaded');
        initReveal();
        initPointerGlow();
        initHeroDepth();
        initBackgroundCursor();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
