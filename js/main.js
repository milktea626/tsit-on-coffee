/**
 * Tsit On Coffee 捷安咖啡 — main.js
 * - Bilingual ZH/EN toggle with browser language auto-detection
 * - Sticky nav + mobile hamburger
 * - Scroll animations
 * - Back-to-top button
 * - Formspree AJAX form handling
 */

/* ─── 1. LANGUAGE SYSTEM ─────────────────────────────────────────── */

/**
 * Detect preferred language.
 * Priority: 1) localStorage saved pref → 2) browser lang → 3) default ZH
 * Any zh-* browser locale (zh-TW, zh-HK, zh-CN, zh-SG, zh) → Traditional Chinese
 */
function detectLang() {
  const saved = localStorage.getItem('tsiton_lang');
  if (saved === 'zh' || saved === 'en') return saved;

  const langs = navigator.languages
    ? Array.from(navigator.languages)
    : [navigator.language || navigator.userLanguage || ''];

  for (const l of langs) {
    const lc = l.toLowerCase();
    if (lc.startsWith('zh')) return 'zh'; // any Chinese variant → Traditional Chinese
    if (lc.startsWith('en')) return 'en';
  }
  return 'zh'; // default
}

function applyLang(lang) {
  const html = document.documentElement;
  html.classList.remove('lang-zh', 'lang-en');
  html.classList.add('lang-' + lang);
  html.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  localStorage.setItem('tsiton_lang', lang);

  // Update page title
  const titleEl = document.querySelector('title');
  if (titleEl) {
    const key = lang === 'zh' ? 'titleZh' : 'titleEn';
    if (titleEl.dataset[key]) titleEl.textContent = titleEl.dataset[key];
  }

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    const key = lang === 'zh' ? 'descZh' : 'descEn';
    if (metaDesc.dataset[key]) metaDesc.setAttribute('content', metaDesc.dataset[key]);
  }

  // Sync all lang-toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

}

function setLang(lang) {
  applyLang(lang);
}

/* ─── 2. NAVIGATION ──────────────────────────────────────────────── */

function initNav() {
  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');

  // Sticky nav on scroll
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile hamburger
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!open));
      hamburger.classList.toggle('open', !open);
      mobileNav.classList.toggle('open', !open);
      document.body.style.overflow = !open ? 'hidden' : '';
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (
        mobileNav.classList.contains('open') &&
        !mobileNav.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    // Close on nav link click
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ─── 3. SCROLL ANIMATIONS ───────────────────────────────────────── */

function initAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

/* ─── 4. BACK-TO-TOP ─────────────────────────────────────────────── */

function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─── 5. FORMSPREE AJAX ──────────────────────────────────────────── */

function initForms() {
  document.querySelectorAll('form[data-formspree]').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const submitBtn = form.querySelector('[type="submit"]');
      const successEl = form.querySelector('.form-success');
      const errorEl = form.querySelector('.form-error');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = '…';
      }
      if (successEl) successEl.classList.add('hidden');
      if (errorEl) errorEl.classList.add('hidden');

      try {
        const resp = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (resp.ok) {
          form.reset();
          if (successEl) successEl.classList.remove('hidden');
        } else {
          throw new Error('Server error');
        }
      } catch {
        if (errorEl) errorEl.classList.remove('hidden');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          const lang = document.documentElement.classList.contains('lang-en') ? 'en' : 'zh';
          submitBtn.innerHTML =
            '<span data-lang="zh">發送查詢</span><span data-lang="en">Send Message</span>';
        }
      }
    });
  });
}

/* ─── 6. SMOOTH SCROLL FOR ANCHOR LINKS ─────────────────────────── */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ─── 7. INIT ────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Detect & apply language
  const lang = detectLang();
  applyLang(lang);

  // 2. Bind ALL .lang-btn buttons (nav-actions + mobile nav)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // 3. Other features
  initNav();
  initAnimations();
  initBackToTop();
  initForms();
  initSmoothScroll();
});