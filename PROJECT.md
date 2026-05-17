# Tsit On Coffee 捷安咖啡 — Project Documentation

**Last Updated:** January 2025  
**Status:** Production-ready website for Hong Kong coffee wholesale business

---

## 📋 Table of Contents

1. [Business Context](#business-context)
2. [Technical Stack](#technical-stack)
3. [Site Architecture](#site-architecture)
4. [Design System](#design-system)
5. [Key Features](#key-features)
6. [Content Strategy](#content-strategy)
7. [Development Workflow](#development-workflow)
8. [Deployment](#deployment)
9. [Future Enhancements](#future-enhancements)
10. [Quick Start Guide](#quick-start-guide)

---

## 🏢 Business Context

**Company:** Tsit On Coffee Ltd. (捷安咖啡有限公司)  
**Founded:** 1970  
**Industry:** Coffee wholesale, food service supply  
**Primary Market:** Hong Kong F&B businesses (restaurants, cha chaan teng, cafés)

### Business Model
- **B2B Focus:** Wholesale to restaurants and food service businesses
- **Own Roasting Factory:** Quality control from green bean to delivery
- **Product Range:**
  - Premium coffee beans (Arabica & Robusta, various origins)
  - Hong Kong-style milk tea blends (custom Ceylon tea blends)
  - Cha chaan teng dry goods and canned products
- **Unique Services:**
  - Custom coffee blending for businesses
  - Island-wide logistics with own fleet
  - International shipping available

### Target Audience
- Hong Kong restaurant owners and operators
- Cha chaan teng proprietors
- Café and coffee shop owners
- F&B procurement managers
- Secondary: International buyers seeking HK-style products

### Key Differentiators
- 55+ years of industry experience (since 1970)
- Own roasting facility (quality control)
- One-stop F&B supply (coffee, tea, dry goods)
- Reliable logistics network (own fleet)
- Custom blending services

---

## 🛠 Technical Stack

### Core Technologies
- **HTML5** - Semantic markup, accessibility attributes
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks, ES6+ features

### External Dependencies
- **Google Fonts:** Playfair Display (serif), Noto Sans HK (sans-serif)
- **Web3Forms API** - Form submission handling (contact forms)
- **Firebase Hosting** - Production deployment

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (iOS Safari, Chrome Android)
- Graceful degradation for older browsers

### No Build Process
- Direct HTML/CSS/JS (no webpack, no npm build)
- Can be edited and deployed immediately
- Easy to maintain and update

---

## 🗂 Site Architecture

### Main Pages

```
/
├── index.html              # Homepage (hero, products, testimonials)
├── about.html              # Company history and values
├── contact.html            # Contact form (Web3Forms integration)
├── roastery.html          # Roasting facility details
├── custom-blending.html   # Custom blend service information
├── wholesale.html         # Wholesale partnership inquiry
├── logistics.html         # Delivery and shipping information
├── news.html              # News/blog listing page
├── 404.html               # Custom error page
├── /products/
│   ├── coffee.html        # Coffee beans & blends
│   ├── milk-tea.html      # HK milk tea leaf blends
│   └── dry-goods.html     # Dry and canned goods
└── /news/
    ├── custom-blending-upgrade.html
    ├── ethiopia-yirgacheffe-arrival.html
    ├── hk-milk-tea-culture.html
    └── how-to-choose-coffee-blend.html
```

### File Structure

```
tsit-on-coffee/
├── *.html                 # All page files
├── css/
│   └── style.css         # Main stylesheet (1012 lines)
├── js/
│   └── main.js           # All JavaScript functionality (237 lines)
├── images/               # Currently empty (placeholder emojis used)
├── firebase.json         # Firebase hosting config
├── robots.txt            # Search engine crawling rules
└── sitemap.xml           # XML sitemap for SEO
```

### Page Templates Pattern

Each page follows consistent structure:
1. **Head Section:** Meta tags, bilingual title/description, structured data
2. **Navigation:** Bilingual nav with dropdown, language toggle, mobile hamburger
3. **Main Content:** Page-specific sections with semantic HTML
4. **Footer:** Company info, product links, contact details
5. **Scripts:** main.js loaded at end of body

---

## 🎨 Design System

### Color Palette

```css
/* Brand Colors */
--espresso:     #2C1810  /* Dark brown, headings */
--brown:        #8B4513  /* Medium brown, accents */
--amber:        #C8860A  /* Golden amber, primary CTA */
--amber-light:  #E5A020  /* Light amber, hover states */

/* Neutrals */
--cream:        #FAF7F2  /* Light cream, primary background */
--latte:        #F0E6D3  /* Warm beige, secondary background */
--latte-dark:   #DDD0B8  /* Darker beige, borders/dividers */
--white:        #FFFFFF  /* Pure white for contrast */

/* Text */
--text:         #1A1008  /* Near-black for body text */
--text-muted:   #6B5744  /* Muted brown for secondary text */
```

### Typography

**Serif (Headings, Emphasis):**
- Font: `Playfair Display` (Google Fonts)
- Usage: H1-H5, hero titles, section headers
- Weights: 400 (regular), 600 (semibold), 700 (bold)
- Style: Elegant, classic, coffee-house aesthetic

**Sans-Serif (Body, UI):**
- Font: `Noto Sans HK` (Google Fonts)
- Usage: Body text, navigation, buttons, forms
- Weights: 300 (light), 400 (regular), 500 (medium), 700 (bold)
- Purpose: Excellent Traditional Chinese character support

**Scale:**
```css
h1: clamp(2rem, 5vw, 3.5rem)    /* 32-56px fluid */
h2: clamp(1.6rem, 4vw, 2.6rem)  /* 25.6-41.6px fluid */
h3: clamp(1.2rem, 3vw, 1.7rem)  /* 19.2-27.2px fluid */
h4: 1.15rem (18.4px)
h5: 1rem (16px)
body: 16px base, line-height 1.7
```

### Layout System

**Container:**
- Max-width: 1200px
- Padding: 0 24px (responsive)

**Grid Patterns:**
- `.grid-2` - Two-column layout (product features, about sections)
- `.grid-3` - Three-column layout (product cards)
- `.grid-4` - Four-column layout (value propositions)
- All grids collapse to single column on mobile

**Section Padding:**
- Default: 80px vertical, 24px horizontal
- Small: 48px vertical, 24px horizontal

### Component Styles

**Buttons:**
- `.btn-primary` - Amber background, white text (main CTAs)
- `.btn-outline` - Transparent with amber border (secondary actions)
- `.btn-outline-white` - White border on dark backgrounds
- Sizes: `.btn-sm`, default, `.btn-lg`

**Cards:**
- White background
- Subtle shadow on hover
- Image placeholder + body content
- Tag label + heading + description + link

**Feature Strip:**
- Horizontal scroll on mobile
- Icon + heading + description pattern
- Used for quick value props

---

## ✨ Key Features

### 1. Bilingual System (Traditional Chinese / English)

**Implementation:** (`js/main.js` lines 10-63)

- **Language Detection:**
  1. Check localStorage for saved preference
  2. Fall back to browser language detection
  3. Default to Traditional Chinese (zh)
  4. Any `zh-*` browser locale → Traditional Chinese

- **DOM Structure:**
  ```html
  <span data-lang="zh">繁體中文內容</span>
  <span data-lang="en">English content</span>
  ```

- **Language Switching:**
  - `.lang-zh` or `.lang-en` class on `<html>`
  - CSS controls visibility: `.lang-zh [data-lang="en"] { display: none; }`
  - Updates `<title>` and meta description dynamically
  - Syncs all language toggle buttons (nav + mobile nav)

- **Persistence:**
  - Choice saved to `localStorage` as `tsiton_lang`
  - Remembered across pages and sessions

### 2. Responsive Navigation

**Desktop Nav:** (`css/style.css` lines 111-188)
- Logo (SVG + text)
- Horizontal menu with dropdown for Products
- Language toggle buttons
- Primary CTA button ("Request Pricing")

**Mobile Nav:** (triggers at `<900px`)
- Hamburger menu (animated 3-line icon)
- Full-screen overlay navigation
- Closes on link click or outside tap
- Prevents body scroll when open

**Sticky Header:**
- Becomes sticky after scrolling 40px
- Adds subtle shadow and backdrop blur
- Smooth transition

### 3. Scroll Animations

**Implementation:** (`js/main.js` lines 117-138)

- Uses `IntersectionObserver` API
- `.animate-on-scroll` class on elements
- Triggers when element enters viewport
- Graceful fallback for older browsers (shows all immediately)
- One-time animation (unobserves after trigger)

**CSS Animations:** (`css/style.css` lines 975-1012)
- Fade in with translate up
- Staggered delays with `.fade-in-delay-1`, etc.
- Smooth opacity and transform transitions

### 4. Form Handling (Web3Forms)

**Implementation:** (`js/main.js` lines 153-203)

- **Service:** Web3Forms API (free tier)
- **Features:**
  - AJAX submission (no page reload)
  - Success/error message display
  - Form reset on success
  - Bilingual button text updates

- **Honeypot Protection:**
  - Hidden `.hp-field` input
  - Bots auto-fill it, humans leave blank
  - Silently rejects bot submissions

- **Usage:**
  - Add `data-web3form` attribute to `<form>`
  - Include hidden `<input name="access_key" value="YOUR_KEY">`
  - Add `.form-success` and `.form-error` message divs

### 5. SEO & Structured Data

**Meta Tags:**
- Bilingual title/description with data attributes
- Open Graph tags for social sharing
- Twitter Card metadata
- Canonical URLs
- `hreflang` tags for language variants

**Schema.org Structured Data:**
- Organization markup with business details
- WebSite markup with bilingual info
- JSON-LD format in `<head>`

**SEO Files:**
- `robots.txt` - Allow all crawling
- `sitemap.xml` - All pages listed with priority/changefreq

### 6. Performance Optimizations

- **Font Loading:**
  - Preconnect to Google Fonts
  - `font-display: swap` for non-blocking
  
- **Images:**
  - Currently using emoji placeholders (lightweight)
  - Ready for image optimization when photos added

- **JavaScript:**
  - Vanilla JS (no framework overhead)
  - Passive event listeners for scroll
  - Efficient DOM queries

---

## 📝 Content Strategy

### Tone of Voice

**Traditional Chinese (繁體中文):**
- Professional yet approachable
- Emphasizes heritage and trust ("自1970年")
- Uses formal business language
- Highlights local Hong Kong identity

**English:**
- Clear, professional, B2B-focused
- International-friendly (for overseas buyers)
- Emphasizes reliability and scale
- Direct and informative

### Key Messages

1. **Heritage:** "Over 55 years in Hong Kong" (since 1970)
2. **Quality Control:** Own roasting factory, strict standards
3. **Comprehensive Service:** One-stop F&B supply solution
4. **Reliability:** Own logistics fleet, scheduled deliveries
5. **Customization:** Bespoke blending for unique needs

### Content Guidelines

- **Product Descriptions:** Focus on business benefits, not flowery language
- **Service Pages:** Clear process, practical information
- **News/Blog:** Educational content about coffee/tea, industry insights
- **CTAs:** Action-oriented ("Become a Partner", "Request Pricing")

---

## 🔧 Development Workflow

### Local Development

1. **No Build Required:**
   - Open HTML files directly in browser
   - Use Live Server in VS Code (optional)
   - Edit CSS/JS and refresh to see changes

2. **Testing Checklist:**
   - [ ] Test both languages (Chinese/English toggle)
   - [ ] Test responsive breakpoints (mobile/tablet/desktop)
   - [ ] Test navigation (desktop dropdown, mobile menu)
   - [ ] Test forms (success/error states)
   - [ ] Test scroll animations
   - [ ] Validate HTML (W3C validator)
   - [ ] Check browser console for errors

3. **Browser Testing:**
   - Chrome (primary)
   - Safari (iOS testing important for HK market)
   - Firefox
   - Mobile browsers (Chrome Android, Safari iOS)

### Code Organization

**CSS Structure:** (style.css)
```
1. CSS Custom Properties
2. Reset & Base styles
3. Typography
4. Layout utilities (container, grid, flex)
5. Section styles
6. Navigation
7. Hero
8. Components (cards, buttons, forms)
9. Page-specific styles
10. Utilities
11. Animations
12. Responsive breakpoints
```

**JavaScript Modules:** (main.js)
```
1. Language System
2. Navigation (sticky + mobile)
3. Scroll Animations
4. Back-to-Top button
5. Form Handling
6. Smooth Scroll
7. Initialization
```

### Making Changes

**Adding a New Page:**
1. Copy existing page template (e.g., `about.html`)
2. Update `<title>` data attributes for bilingual
3. Update meta description data attributes
4. Update canonical URL
5. Add page-specific content
6. Update navigation links if needed
7. Add to `sitemap.xml`

**Updating Colors:**
1. Edit CSS custom properties in `:root` (style.css lines 10-34)
2. All components use these variables automatically

**Adding New Language Toggle:**
1. HTML must use `[data-lang="zh"]` and `[data-lang="en"]` structure
2. JavaScript automatically handles visibility
3. No additional coding needed

---

## 🚀 Deployment

### Firebase Hosting

**Configuration:** `firebase.json`
```json
{
  "hosting": {
    "public": ".",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{"source": "**", "destination": "/404.html"}]
  }
}
```

**Deployment Steps:**
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize (if first time): `firebase init hosting`
4. Deploy: `firebase deploy --only hosting`

**Domain:** 
- Production: `tsitoncoffee.com` (configured in Firebase console)
- Firebase subdomain: `[project-id].web.app`

**Pre-Deploy Checklist:**
- [ ] Test all pages locally
- [ ] Verify forms working (Web3Forms key active)
- [ ] Check language switching on all pages
- [ ] Test mobile navigation
- [ ] Validate HTML/CSS
- [ ] Update sitemap.xml if pages added/removed
- [ ] Check meta tags and structured data

---

## 🎯 Future Enhancements

### High Priority

1. **Add Real Product Images**
   - Replace emoji placeholders with professional photos
   - Coffee bags, roastery equipment, tea packaging
   - Optimize images (WebP format, lazy loading)

2. **Product Catalog System**
   - Database of products with pricing (for logged-in wholesale partners)
   - Filter/search functionality
   - Product detail pages

3. **Wholesale Partner Portal**
   - Login system for existing customers
   - Order history
   - Pricing access
   - Invoice downloads

4. **Enhanced Contact System**
   - WhatsApp integration (click-to-chat)
   - Phone system integration
   - Multi-language support team info

### Medium Priority

5. **Blog/News Expansion**
   - More educational content
   - Coffee brewing guides
   - Origin stories
   - Customer success stories

6. **Photo Gallery**
   - Roastery tour virtual experience
   - Behind-the-scenes content
   - Product showcase

7. **Video Content**
   - Roasting process videos
   - Customer testimonials
   - Brewing tutorials

8. **Performance Optimization**
   - Add service worker for offline capability
   - Implement lazy loading for images
   - Add CDN for static assets

### Low Priority

9. **Additional Languages**
   - Simplified Chinese for mainland market
   - Japanese for export customers

10. **Analytics Dashboard**
    - Track wholesale inquiries
    - Page performance metrics
    - Conversion tracking

11. **Live Chat Integration**
    - Real-time customer support
    - Business hours availability

---

## 🚀 Quick Start Guide

### For AI Assistants Picking Up This Project

**Read These Files First:**
1. `PROJECT.md` (this file) - Full context
2. `index.html` - Understand site structure
3. `css/style.css` (lines 1-100) - Design system
4. `js/main.js` (lines 1-64) - Language system logic

**Key Concepts to Understand:**
- Bilingual content using `[data-lang]` attributes
- No build process (direct HTML/CSS/JS)
- Web3Forms for contact forms
- Firebase for hosting

**Common Tasks:**

**Add a New Product Page:**
```html
<!-- Copy structure from products/coffee.html -->
<!-- Update bilingual content -->
<!-- Add to navigation if needed -->
```

**Change Site Colors:**
```css
/* Edit in style.css :root section */
--amber: #YOUR_NEW_COLOR;
```

**Update Business Info:**
```html
<!-- Search for "25491122" (phone number) across all HTML files -->
<!-- Update consistently -->
```

### For Human Developers

**First Time Setup:**
```bash
# Clone/download the project
cd tsit-on-coffee

# Open in VS Code
code .

# (Optional) Use Live Server extension for hot reload
# Right-click index.html > Open with Live Server
```

**No Installation Required:**
- No `npm install`
- No build process
- Just edit and refresh browser

**Testing:**
1. Open `index.html` in browser
2. Test language toggle
3. Test mobile navigation (resize browser)
4. Test forms on `contact.html`

---

## 📞 Project Support

**Project Type:** Static website (HTML/CSS/JS)  
**Complexity:** Medium (bilingual, responsive, form integration)  
**Maintenance:** Low (no CMS, no database, no backend)

**When Working on This Project:**
- Always test both languages (ZH/EN)
- Test mobile navigation thoroughly
- Maintain consistent design system
- Keep bilingual content in sync
- Test forms before deploying

**Common Issues:**
- Language toggle not working → Check `[data-lang]` attributes
- Form not submitting → Verify Web3Forms API key
- Mobile nav stuck open → Check hamburger event listeners
- Animations not showing → Check IntersectionObserver browser support

---

**Document Version:** 1.0  
**Last Reviewed:** January 2025  
**Maintained By:** Project development team

---

*This documentation should be updated whenever significant changes are made to the project architecture, design system, or core functionality.*