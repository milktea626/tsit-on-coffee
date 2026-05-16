# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tsit On Coffee (捷安咖啡) — a bilingual (Traditional Chinese / English) static website for a Hong Kong coffee wholesale business established in 1970. The site is hosted on Firebase Hosting and features:

- **Bilingual content**: Traditional Chinese (繁中) and English with automatic language detection based on browser preferences
- **Product showcase**: Coffee beans, HK milk tea blends, and dry goods for restaurants
- **Business services**: Wholesale partnerships, custom blending, logistics, and roastery information
- **Static HTML architecture**: No build process, plain HTML/CSS/JS served directly

## Key Architecture

### Language System

The entire site uses a client-side bilingual system (`js/main.js:10-63`):

- **Language detection priority**: localStorage → browser language → default to Traditional Chinese
- **Implementation**: CSS class toggling on `<html>` element (`.lang-zh` or `.lang-en`)
- **Content markup**: Dual `<span data-lang="zh">` and `<span data-lang="en">` elements throughout HTML, with CSS hiding the inactive language
- **Persistence**: Language choice saved to localStorage as `tsiton_lang`

When editing content:
- Always provide both Chinese and English versions wrapped in `<span data-lang="zh">` and `<span data-lang="en">`
- Update both `data-title-zh`/`data-title-en` and `data-desc-zh`/`data-desc-en` attributes on meta tags
- Maintain parallel bilingual structure in all user-facing text

### File Structure

```
.
├── index.html                    # Homepage
├── about.html                    # Company history
├── contact.html                  # Contact form
├── wholesale.html                # B2B partnership info
├── roastery.html                 # Factory information
├── custom-blending.html          # Custom blend service
├── logistics.html                # Delivery information
├── news.html                     # Blog/news listing
├── products/
│   ├── coffee.html               # Coffee products
│   ├── milk-tea.html             # Tea products
│   └── dry-goods.html            # Dry goods catalog
├── news/
│   ├── *.html                    # Individual news articles
├── css/
│   └── style.css                 # Single stylesheet, warm coffee color scheme
├── js/
│   └── main.js                   # All client-side JS
├── dev_resources/                # Business reference materials (not deployed)
│   ├── drinks-desription-recipes.txt
│   └── tsiton-products-highlights.txt
├── firebase.json                 # Hosting config
├── sitemap.xml                   # SEO sitemap
└── robots.txt                    # Search engine directives
```

### Navigation and Mobile Menu

- **Sticky header** with scroll detection (adds `.scrolled` class at `scrollY > 40`)
- **Hamburger menu** for mobile with overlay navigation (`.nav-mobile`)
- **Dropdown submenu** for product categories in desktop view
- Language toggle buttons synchronized across desktop and mobile navs

### Styling System

CSS custom properties define the coffee-themed color palette (`css/style.css:10-34`):

- `--espresso: #2C1810` (dark brown, primary text)
- `--amber: #C8860A` (gold accent, CTAs)
- `--cream: #FAF7F2` (warm background)
- `--latte: #F0E6D3` (secondary background)

Typography:
- Headings: `Playfair Display` serif (English) + `Noto Serif TC` (Chinese)
- Body: `Noto Sans HK` for Chinese, fallback sans-serif for English

### Forms

Contact forms use **Formspree** for backend handling:
- Forms marked with `data-formspree` attribute trigger AJAX submission
- Success/error messaging via `.form-success` and `.form-error` elements
- Bilingual button text updated after submission

### Scroll Animations

IntersectionObserver-based fade-in animations for elements with `.animate-on-scroll` class. Fallback to immediate visibility if IntersectionObserver not supported.

## Development Workflow

### Local Development

Firebase Hosting serves the site with clean URLs:

```bash
# Install Firebase CLI (if not already installed)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Serve locally on http://localhost:5000
firebase serve
```

The `firebase.json` configuration:
- Serves files from current directory (`.`)
- Clean URLs enabled (`.html` extension optional)
- Cache headers configured (1 hour for HTML, 1 year for static assets)
- SPA-style rewrite: all unknown routes → `index.html` (fallback)

### Deployment

```bash
# Deploy to Firebase Hosting
firebase deploy
```

Site hosted at: `https://www.tsiton.com.hk`

### Testing Checklist

When making changes:

1. **Bilingual consistency**: Verify both Chinese and English versions display correctly
2. **Language toggle**: Test switching between 繁中 and EN persists across page navigation
3. **Mobile responsive**: Check hamburger menu, touch targets, and layout on small screens
4. **Cross-browser**: Test in Chrome, Safari, Firefox (especially Chinese font rendering)
5. **SEO elements**: Update `<title>`, meta description, Open Graph tags in both languages
6. **Accessibility**: Ensure `aria-label`, `role`, and semantic HTML are preserved

## Content Guidelines

### Brand Voice

- **Chinese tone**: Professional yet warm, emphasizing heritage (自1970年), quality (品質), and trust (信譽)
- **English tone**: Authentic Hong Kong character, use "cha chaan teng" not "tea restaurant", "HK milk tea" not "Hong Kong-style milk tea"

### Product Naming

Refer to `dev_resources/tsiton-products-highlights.txt` for accurate product descriptions and business highlights when writing new content.

### Image Placeholders

Currently using emoji/icon placeholders (☕ 🍵 🥫 🏭) with decorative CSS styling. When adding real product images:
- Use WebP format with JPEG fallback
- Add descriptive `alt` text in current language context
- Maintain 16:9 or 1:1 aspect ratio for consistency

## SEO and Performance

- **Structured data**: JSON-LD schema for Organization and WebSite (in `<head>`)
- **Hreflang tags**: `zh-Hant` and `en` alternate links for international SEO
- **Cache strategy**: Long cache for immutable assets (CSS/JS with versioning), shorter for HTML
- **Security headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection configured in `firebase.json`
- **Sitemap**: `sitemap.xml` lists all static pages for search engines

## Common Edits

### Adding a New Page

1. Copy an existing HTML file as template (e.g., `about.html`)
2. Update `<title>` data attributes, meta description, canonical URL, og:url
3. Ensure navigation links in header/footer include the new page
4. Add bilingual content with proper `data-lang` span wrappers
5. Update `sitemap.xml` with new URL and lastmod date

### Adding a News Article

1. Create new HTML file in `news/` directory
2. Follow existing article structure (see `news/hk-milk-tea-culture.html`)
3. Add link to article in `news.html` listing page
4. Update sitemap

### Editing Product Information

Product pages are in `products/` directory. Each product page includes:
- Hero section with product category
- Product grid with name, description, origin/blend info
- Custom blending CTA
- Wholesale inquiry CTA

## Notes

- This is a static site with no build step — changes to HTML/CSS/JS are deployed as-is
- Firebase Hosting config handles URL rewriting and caching
- No backend API except Formspree for contact forms
- `dev_resources/` directory is ignored by Firebase hosting (not deployed)
- Site targets primarily Hong Kong restaurant owners and F&B businesses
