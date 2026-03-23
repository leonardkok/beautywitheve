# Mobile-Friendly Checklist for Beauty with EVE

This checklist outlines the critical steps and best practices to ensure your website is fully responsive and provides an excellent user experience on mobile devices.

## 1. Meta Tags and Global Setup
- [x] **Viewport Meta Tag Included**: Ensure `<meta name="viewport" content="width=device-width, initial-scale=1.0">` is present in the `<head>` of all HTML files. *(Already present)*
- [ ] **Box-sizing and Reset**: Ensure `box-sizing: border-box` is applied globally (mostly done) and that the `body` and `html` tags have `overflow-x: hidden` to prevent horizontal scrolling on mobile. 
- [ ] **Theme Color Meta Tag**: The `<meta name="theme-color" content="#FFEA99">` is present. Check if it matches the current top background on all pages to ensure the mobile browser UI blends nicely.

## 2. Layout and Structure
- [ ] **Responsive Grid/Flexbox Overrides**: Check that elements styled with `display: grid` or `display: flex` with multiple columns on desktop (like `.fabric-grid`, `.experience__steps`, `.why-drape__grid`) properly stack into 1 column on smaller screens (`max-width: 768px`). 
- [ ] **Avoid Fixed Widths**: Avoid hard-coding pixel widths (e.g., `width: 800px`). Ensure containers use percentages (e.g., `width: 100%`) alongside `max-width` so they can shrink gracefully.
- [ ] **Padding and Margins**: Replace large fixed paddings/margins (e.g., `padding: 6rem`) with relative units or reduce them in media queries for mobile to preserve screen real estate. Use `clamp()` for spacing if necessary.

## 3. Typography
- [ ] **Fluid Typography**: You are already using `clamp()` (e.g., `font-size: clamp(1.4rem, 2vw, 1.7rem)`) for many headings, which is great! Ensure the minimum value in `clamp()` is appropriate for mobile screens (usually ~1.5rem to 2rem for headings).
- [ ] **Minimum Font Size**: Ensure body text is at least `16px` (1rem). Smaller fonts are hard to read on phones.
- [ ] **Input Font Size (Critical for iOS)**: Ensure all form `<input>` and `<textarea>` elements have a `font-size` of at least `16px`. If it's smaller, iOS Safari will automatically zoom into the page when the user taps the input field, hurting UX.

## 4. Images and Media
- [ ] **Fluid Images**: Ensure all images have `max-width: 100%; height: auto;` in the baseline CSS so they never overflow their containers on mobile.
- [ ] **Fixed-Size Assets**: Check visual components with fixed dimensions like `.hero-drape__wheel` (currently set to `380px` width) or `.hero-drape__portrait`. If the screen is thinner than these elements (e.g., 320px phone), it might cause overflow or cropping. Consider scaling these down using media queries or using `transform: scale()` inside `@media (max-width: 400px)`.

## 5. Navigation and Touch Targets
- [ ] **Hamburger Menu Functionality**: The mobile navigation `.nav__mobile` and hamburger button `.nav__hamburger` are set up in HTML. Ensure the JavaScript correctly toggles them, and that `.nav__mobile` takes up the full screen/drawer when open.
- [ ] **Adequate Touch Targets**: Ensure all buttons, links, and form elements are at least 44x44 pixels to be easily tappable without accidentally hitting adjacent links. Add `padding` to nav links if necessary.
- [ ] **Scroll-to Functionality**: Verify that anchor links (e.g., skip to main content, clicking nav items) have clear offsets if a sticky mobile header is covering part of the screen (`scroll-margin-top`).

## 6. Interactions and Hover Effects
- [ ] **Hover States on Mobile**: Touch devices don't have a reliable "hover" state. Ensure all critical information revealed by hover is also accessible via tap, or visible by default on mobile. Check `.fabric-card:hover` to see how it works on mobile devices.
- [ ] **Animations and Performance**: Re-check CSS animations (like `.hero-drape__aurora`) to ensure they don't cause performance issues or excessive battery drain on mobile devices. Ensure `@media (prefers-reduced-motion: reduce)` removes intense animations.

## 7. Forms (Contact Page)
- [ ] **Tappable Labels**: Ensure clicking a `<label>` correctly focuses its `<input>` (the `for` attributes in `contact.html` are correctly set up, which is great).
- [ ] **Mobile Keyboards**: Check input types to ensure they trigger the correct keyboard on mobile:
    - `<input type="email">` triggers the email keyboard. *(Already present)*
    - Autocomplete attributes are added correctly (`autocomplete="name"`, `autocomplete="email"`). *(Already present)*
- [ ] **Button Widths**: Consider making the submit button (`.contact-submit`) 100% width on mobile form views for easier tapping.

---
**Next Steps**: Review the `styles.css` specifically looking for overrides inside `@media (max-width: 768px)` for grids and flexboxes, and check `.hero-drape__wheel` scaling to fully apply this checklist.
