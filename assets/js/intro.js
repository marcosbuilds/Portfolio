(() => {
    const STORAGE_KEY = 'portfolio-intro-seen';
    const root = document.documentElement;
    const screen = document.querySelector('.intro-screen');
    const word = document.querySelector('[data-intro-word]');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const params = new URLSearchParams(window.location.search);
    const forceIntro = params.has('intro');
    let introFinished = false;

    function hasSeenIntro() {
        try {
            return sessionStorage.getItem(STORAGE_KEY) === 'true';
        } catch (error) {
            return false;
        }
    }

    function markIntroSeen() {
        try {
            sessionStorage.setItem(STORAGE_KEY, 'true');
        } catch (error) {
            console.warn('Intro preference could not be saved:', error);
        }
    }

    function shouldPlayIntro() {
        return Boolean(screen && word && !prefersReducedMotion && (forceIntro || !hasSeenIntro()));
    }

    function getText(key, fallback) {
        return window.portfolioI18n?.t(key) || fallback;
    }

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function finishIntro() {
        if (introFinished) return;
        introFinished = true;
        root.classList.remove('intro-pending');
        document.body.classList.remove('is-intro-running');
        document.body.classList.add('intro-complete');
        screen?.setAttribute('hidden', '');
        if (!forceIntro) {
            markIntroSeen();
        }
    }

    async function showWord(text, visibleMs) {
        if (introFinished) return;
        word.textContent = text;
        screen.classList.add('is-visible');
        await delay(visibleMs);
        if (introFinished) return;
        screen.classList.remove('is-visible');
        await delay(260);
    }

    async function runIntro() {
        document.body.classList.add('is-intro-running');
        screen.removeAttribute('hidden');

        const skip = () => {
            screen.classList.add('is-exiting');
            finishIntro();
        };

        screen.addEventListener('click', skip, { once: true });
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                skip();
            }
        }, { once: true });

        await delay(80);
        await showWord(getText('intro.hey', 'hey'), 700);
        if (introFinished) return;
        await showWord(getText('intro.identity', 'i am'), 780);
        if (introFinished) return;

        screen.classList.add('is-exiting');
        await delay(560);
        finishIntro();
    }

    if (!shouldPlayIntro()) {
        root.classList.remove('intro-pending');
        screen?.setAttribute('hidden', '');
        return;
    }

    runIntro();
})();
