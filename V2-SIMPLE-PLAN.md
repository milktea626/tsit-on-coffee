# V2-SIMPLE WEBSITE PLAN
**Tsit On Coffee - Simplified Version**

Generated: 2026-05-16  
Status: Planning Complete - Ready for Implementation

---

## 📊 EXECUTIVE SUMMARY

### Goals:
- Reduce complexity by **60%** (15 pages → 6 pages)
- Maintain bilingual functionality
- Preserve brand identity and core content
- Improve load time and maintainability
- Focus on B2B conversion (wholesale enquiries)

### Key Metrics:

| Metric | v1-Elaborate | v2-Simple | Change |
|--------|--------------|-----------|--------|
| Total Pages | 15 | 6 | -60% |
| Navigation Items | 9 + dropdown | 5 flat | -44% |
| Homepage Sections | 9 | 4 | -56% |
| Forms | 3 complex | 2 simple | -33% |
| News Articles | 4 + hub | 0 | -100% |
| Footer Columns | 4 | 2 | -50% |

---

## 🗺️ SITE STRUCTURE

```
v2-simple/
├── index.html           (Home - 4 sections)
├── products.html        (All products consolidated)
├── about.html           (Brief story + values)
├── services.html        (Roastery + Custom + Logistics)
├── wholesale.html       (Partnership + simple form)
└── contact.html         (Contact info + enquiry form)
```

---

## 📄 PAGE-BY-PAGE BREAKDOWN

### **1. HOME (index.html)**

**Sections (4 total):**
1. **Hero** - Single CTA, coffee-hero-1.jpg background
2. **Products Preview** - 3 cards (Coffee, Tea, Dry Goods)
3. **Why Choose Us** - 3 value points (Roastery, Delivery, Trust)
4. **Contact CTA** - Single button to contact page

**Content Sources:**
- Hero text: v1 index.html lines 128-135
- Product cards: Simplified from v1 lines 251-279
- Why Us: Consolidated from v1 feature strip (lines 168-199)

**Images:**
- Hero: `images/hero/coffee-hero-1.jpg`
- Products: `beans.jpg`, `milkteancup.jpg`, + icon for dry goods

**Components to Reuse:**
- ✅ Navigation structure (v1 index.html lines 56-117)
- ✅ Hero stats pattern (v1 lines 146-163) - SIMPLIFIED to 3 stats
- ✅ Product card layout (v1 lines 251-279)
- ✅ CTA banner (v1 lines 377-386)

**Components to CUT:**
- ❌ About snippet section (redundant with About page)
- ❌ Roastery highlight (moved to Services page)
- ❌ Testimonials (no real content)
- ❌ Animated counters (simplify to static numbers)

---

### **2. PRODUCTS (products.html)**

**Single Page with 3 Sections:**
1. **Coffee Beans** - Image left, content right
2. **Milk Tea Blends** - Content left, image right
3. **Dry Goods** - Image left, content right

**Content Sources:**
- Coffee: v1 products/coffee.html lines 79-203 (SIMPLIFIED)
- Milk Tea: `dev_resources/tsiton-products-highlights.txt` + v1 products/milk-tea.html
- Dry Goods: v1 products/dry-goods.html lines 76-146 (overview only)

**NEW Content from dev_resources:**
- 自家品牌: 佳高植脂淡奶, 利美植脂淡奶, 佳高甜奶
- 代理品牌: 皇冠牌西洋菜蜜及菊蜜

**Images:**
- Coffee: `images/products/beans.jpg`
- Milk Tea: `images/products/milkteancup.jpg`
- Dry Goods: `dev_resources/images/hk-cafe-all-drinks.jpeg`

**Components to Reuse:**
- ✅ Roast level cards (v1 coffee.html lines 79-106) - Keep pattern, reduce to 3
- ✅ Product grid/table pattern (v1 coffee.html lines 118-172)
- ✅ Category listing (v1 dry-goods.html lines 76-146)

**Components to CUT:**
- ❌ 8 origin cards (reduce to 3-4 key origins)
- ❌ Detailed product tables (show highlights only)
- ❌ "Also See" cross-links (redundant)

---

### **3. ABOUT (about.html)**

**Sections (3 total):**
1. **Our Story** - Brief narrative (3-4 paragraphs)
2. **Key Milestones** - 3 cards (1970, 1995, 2025)
3. **Our Values** - 3 icons + text (Quality, Partnership, Reliability)

**Content Sources:**
- Story: v1 about.html lines 79-107 (CONDENSED)
- Timeline: v1 about.html lines 145-197 (8 milestones → 3 key dates)
- Values: v1 about.html lines 200-225

**Images:**
- Logo/Brand: `images/logo/toclogo_bg.jpg`

**Components to Reuse:**
- ✅ Page hero pattern (v1 about.html lines 94-103)
- ✅ Timeline structure (v1 lines 145-197) - SIMPLIFIED
- ✅ Mission/Vision/Values grid (v1 lines 200-225)

**Components to CUT:**
- ❌ 8-milestone detailed timeline (reduce to 3)
- ❌ Certifications section (no real certs)
- ❌ Image placeholders (use real logo only)

---

### **4. SERVICES (services.html)**

**Consolidated Page (3 Services):**
1. **Own Roastery** - Process + HK coffee brewing method
2. **Custom Blending** - Coffee & tea customization
3. **Logistics** - HK-wide + international delivery

**Content Sources:**
- Roastery: v1 roastery.html lines 79-151 (6 steps → 4 points)
- Brewing: `dev_resources/tsiton-drinks-desription-recipes.txt` (港式咖啡 process)
- Custom: v1 custom-blending.html lines 79-182 (SIMPLIFIED)
- Logistics: v1 logistics.html lines 79-223 (regions only, not 18 districts)

**NEW Content from dev_resources:**
- 港式咖啡特色: "香、濃、甘、苦"
- 5-step brewing process for classic HK coffee

**Images:**
- Roastery: `images/hero/coffee-hero-2.jpg`
- Custom: `images/products/beans.jpg`
- Logistics: Icon only (from Lucide)

**Components to Reuse:**
- ✅ 2-column grid layout (v1 roastery.html lines 85-151)
- ✅ Checklist pattern (v1 roastery.html lines 128-131)
- ✅ Service card layout (v1 custom-blending.html lines 89-124)

**Components to CUT:**
- ❌ 6-step detailed roasting process (simplify to 4 points)
- ❌ Equipment & capability section (too technical)
- ❌ Gallery placeholder (no images)
- ❌ 18-district breakdown (show regions only)

---

### **5. WHOLESALE (wholesale.html)**

**Sections (4 total):**
1. **Partner Benefits** - 4 value cards
2. **Who We Serve** - 3 customer types (reduced from 6)
3. **Partnership Enquiry Form** - 7 fields (reduced from 10+)
4. **FAQ** - 3 essential questions (reduced from 4+)

**Content Sources:**
- Benefits: v1 wholesale.html lines 79-110
- Customer types: v1 wholesale.html lines 113-178 (6 types → 3)
- Form: v1 wholesale.html lines 181-262 (SIMPLIFIED)
- FAQ: v1 wholesale.html lines 265-331 (pick top 3)

**Form Fields (7 total):**
1. Company Name
2. Contact Person
3. Phone
4. Email
5. Products of Interest (checkboxes: Coffee, Tea, Dry Goods)
6. Message
7. Submit button

**Components to Reuse:**
- ✅ Value cards (v1 wholesale.html lines 85-110)
- ✅ Form structure (v1 contact.html lines 159-202 as base)
- ✅ FAQ accordion pattern (v1 wholesale.html lines 265-331)

**Components to CUT:**
- ❌ 6 detailed customer segments (reduce to 3 categories)
- ❌ Complex multi-select fields (simplify to checkboxes)
- ❌ Redundant FAQ questions (keep only top 3)

---

### **6. CONTACT (contact.html)**

**Sections (3 total):**
1. **Contact Info** - 4 cards (Phone, Email, WhatsApp, Address)
2. **General Enquiry Form** - 4 fields (Name, Email, Phone, Message)
3. **Quick Links** - 3 buttons (Products, Wholesale, Catalog)

**Content Sources:**
- Contact cards: v1 contact.html lines 111-142
- Form: v1 contact.html lines 159-202 (SIMPLIFIED to 4 fields)
- Quick links: v1 contact.html lines 209-232

**Form Fields (4 total):**
1. Name *
2. Email *
3. Phone
4. Message *

**Components to Reuse:**
- ✅ Contact method cards (v1 contact.html lines 111-142)
- ✅ Form structure (v1 lines 159-202) - SIMPLIFIED
- ✅ Quick links cards (v1 lines 209-232)

**Components to CUT:**
- ❌ Google Maps embed (no real location)
- ❌ Select dropdown for enquiry type (keep it simple)
- ❌ Additional form fields (Company, Subject)

---

## 🎨 DESIGN SYSTEM

### **Colors (Keep from v1):**
```css
--espresso:     #2C1810  /* Dark brown, headers, footer */
--brown:        #8B4513  /* Medium brown, accents */
--amber:        #C8860A  /* Gold, CTAs, highlights */
--cream:        #FAF7F2  /* Main background */
--latte:        #F0E6D3  /* Section backgrounds */
--white:        #FFFFFF  /* Cards, light text */
```

### **Typography (Keep from v1):**
```css
--font-serif:   'Playfair Display', 'Noto Serif TC', Georgia, serif;
--font-sans:    'Noto Sans HK', 'Helvetica Neue', Arial, sans-serif;
```

**Rationale:** Excellent pairing, strong Chinese support, professional B2B look.

### **Layout System (Keep from v1):**
```css
.container       /* Max-width: 1200px, centered */
.grid-2          /* 2-column responsive grid */
.grid-3          /* 3-column responsive grid */
.section         /* 80px vertical padding */
.section-cream   /* Cream background */
.section-latte   /* Latte background */
.section-espresso /* Dark brown background */
```

---

## 🖼️ IMAGE ASSETS

### **Available Images:**

| Image | Path | Usage | Size |
|-------|------|-------|------|
| **Logo** | `images/logo/toclogo.jpg` | Navigation, About page | 40KB |
| **Logo BG** | `images/logo/toclogo_bg.jpg` | About story section | 66KB |
| **Coffee Beans** | `images/products/beans.jpg` | Products, Services | 89KB |
| **Milk Tea Cup** | `images/products/milkteancup.jpg` | Products page | 31KB |
| **Tea Varieties** | `images/products/various_teas.jpg` | Products (optional) | 30KB |
| **Hero 1** | `images/hero/coffee-hero-1.jpg` | Homepage hero | 2.2MB ⚠️ |
| **Hero 2** | `images/hero/coffee-hero-2.jpg` | Services page | 4.7MB ⚠️ |
| **Drinks Recipe** | `dev_resources/images/hk-cafe-all-drinks.jpeg` | Products dry goods | ? |

**⚠️ Action Required:** Compress hero images from 7MB → ~1MB total

---

## 🎯 ICON LIBRARY

### **Recommended: Lucide Icons**
- **URL:** https://lucide.dev
- **License:** ISC (free commercial use)
- **Format:** SVG, easy to embed

### **Icons Needed (18 total):**

| Icon Name | Lucide ID | Usage |
|-----------|-----------|-------|
| Coffee cup | `coffee` | Products, navigation |
| Tea leaf | `leaf` | Milk tea products |
| Box/Package | `package` | Dry goods |
| Factory | `factory` | Roastery, services |
| Truck | `truck` | Logistics, delivery |
| Handshake | `handshake` | Partnership, values |
| Check circle | `check-circle` | Benefits, features |
| Award | `award` | Quality, trust |
| Map pin | `map-pin` | Location, contact |
| Phone | `phone` | Contact info |
| Mail | `mail` | Email contact |
| Message circle | `message-circle` | WhatsApp |
| Building | `building` | Company, wholesale |
| Users | `users` | Partnership |
| Star | `star` | Premium, quality |
| Clock | `clock` | Operating hours |
| Globe | `globe` | International shipping |
| Zap | `zap` | Fast service |

**Implementation:** Download SVG files from Lucide and embed inline in HTML.

---

## 🖼️ STOCK PHOTOS NEEDED

### **Unsplash Search Keywords:**

1. **Coffee Roasting:**
   - https://unsplash.com/s/photos/coffee-roasting
   - Target: Industrial roaster machine, fresh beans
   
2. **Hong Kong Cafe:**
   - https://unsplash.com/s/photos/hong-kong-cafe
   - Target: Cha chaan teng interior, authentic atmosphere
   
3. **Business Handshake:**
   - https://unsplash.com/s/photos/business-handshake
   - Target: Professional partnership, B2B context

4. **Tea Preparation:**
   - https://unsplash.com/s/photos/tea-preparation
   - Target: Brewing process, loose leaf tea

**Note:** All Unsplash photos are free for commercial use, no attribution required.

---

## 📝 CONTENT STRATEGY

### **Bilingual Approach:**

**Full Translation:**
- ✅ Navigation items
- ✅ Page titles (H1, H2)
- ✅ CTA buttons
- ✅ Form labels
- ✅ Product names
- ✅ Value propositions (short)

**Simplified/Single Language:**
- ⚠️ Long body paragraphs (consider English only with Chinese summary)
- ⚠️ Detailed product descriptions
- ⚠️ FAQ answers (keep concise, translate key points)

**Rationale:** Reduce HTML bloat while maintaining accessibility for both audiences.

---

## 🔧 TECHNICAL IMPLEMENTATION

### **CSS to Keep (Reusable Classes):**

```css
/* From v1 style.css */
.btn, .btn-primary, .btn-outline, .btn-lg, .btn-sm
.card, .product-card
.grid-2, .grid-3, .grid-4
.section-cream, .section-latte, .section-espresso
.eyebrow, .divider
.form-control, .form-group
.contact-card
.info-table
.nav-menu, .nav-mobile
.hero-content
.footer-grid
```

### **CSS to Simplify/Remove:**

```css
/* Too complex for v2 */
.hero-bg, .hero-pattern              /* Flat colors only */
.animate-on-scroll                   /* Remove animations */
.timeline                            /* Simplify structure */
.about-image-badge                   /* Visual clutter */
.testimonial                         /* No real content */
.gallery-grid                        /* No photos yet */
```

### **JavaScript to Keep:**

```javascript
/* From v1 main.js */
- Language toggle system (lines 10-63)
- Navigation sticky + mobile menu (lines 65-115)
- Smooth scroll (lines 196-208)
- Form AJAX submission (lines 154-194)
- Back-to-top button (lines 141-151)
```

### **JavaScript to Remove:**

```javascript
/* Remove for v2 */
- Scroll animations / IntersectionObserver (lines 117-138)
- Animated stat counters (if implemented)
```

---

## 📋 IMPLEMENTATION CHECKLIST

### **Phase 1: Setup**
- [ ] Checkout `v2-simple` branch
- [ ] Copy base files from v1-elaborate
- [ ] Download Lucide icon SVGs (18 icons)
- [ ] Compress hero images (7MB → 1MB)
- [ ] Download 2-3 Unsplash photos

### **Phase 2: Build Pages**
- [ ] index.html (4 sections)
- [ ] products.html (3 sections consolidated)
- [ ] about.html (3 sections)
- [ ] services.html (3 services)
- [ ] wholesale.html (form + FAQ)
- [ ] contact.html (info + form)

### **Phase 3: Simplify CSS**
- [ ] Remove animation classes
- [ ] Simplify hero background
- [ ] Remove unused components
- [ ] Test responsive layouts

### **Phase 4: Update Content**
- [ ] Add dev_resources content (自家品牌, 代理品牌)
- [ ] Add HK coffee brewing process
- [ ] Replace emoji placeholders with real images
- [ ] Translate essential content

### **Phase 5: Testing**
- [ ] Test bilingual toggle
- [ ] Test all forms (contact + wholesale)
- [ ] Test mobile navigation
- [ ] Test on iPhone/Android
- [ ] Lighthouse performance audit

### **Phase 6: Deploy**
- [ ] Commit to v2-simple branch
- [ ] Push to GitHub
- [ ] Test Firebase deploy (staging)
- [ ] Review with stakeholders
- [ ] Deploy to production

---

## 🎯 SUCCESS METRICS

### **Performance Goals:**
- [ ] Page load time: < 2 seconds (currently ~4-5s with 7MB images)
- [ ] Lighthouse score: 90+ (Performance, Accessibility, Best Practices, SEO)
- [ ] Mobile-friendly: 100/100

### **Conversion Goals:**
- [ ] Reduce homepage bounce rate by 20%
- [ ] Increase wholesale enquiry submissions by 30%
- [ ] Improve time-to-conversion (fewer clicks to contact)

### **Maintenance Goals:**
- [ ] Reduce HTML lines of code by 60%
- [ ] Reduce CSS lines by 40%
- [ ] Easier to update content (fewer redundant sections)

---

## 📦 DELIVERABLES

### **Files to Create:**
```
v2-simple/
├── index.html           ✅ 4 sections
├── products.html        ✅ 3 sections
├── about.html           ✅ 3 sections
├── services.html        ✅ 3 services
├── wholesale.html       ✅ Form + FAQ
├── contact.html         ✅ Info + form
├── css/
│   └── style.css        ✅ Simplified (remove 40%)
├── js/
│   └── main.js          ✅ Keep core features
├── images/              ✅ Reuse + compress
└── firebase.json        ✅ Same config
```

### **Documentation:**
- ✅ This plan (V2-SIMPLE-PLAN.md)
- [ ] Update CLAUDE.md with v2 guidance
- [ ] Create README.md with branch strategy

---

## 🚀 NEXT STEPS

1. **Review this plan** - Confirm approach with stakeholders
2. **Gather feedback** - Any specific requirements or changes?
3. **Start implementation** - Checkout v2-simple branch and begin building
4. **Iterate** - Build → Test → Refine

---

## 📞 QUESTIONS TO RESOLVE

1. **Contact Information:** Do you have real phone/email/address to replace placeholders?
2. **Product Catalog:** Should we create a downloadable PDF product catalog?
3. **Hero Images:** Compress in-house or find replacement stock photos?
4. **Real Testimonials:** Any actual customer quotes to replace generic ones?
5. **Certifications:** Any real quality certifications or food safety licenses?

---

**End of Plan**  
Ready for implementation when approved.
