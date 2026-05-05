# Changelog

All notable changes to this project will be documented in this file.

## [2026-05-05]
### Added
- **llms-full.txt (Task #6)**: Compiled a comprehensive markdown file at the root containing all service details, full FAQs, and business credentials for deep AI ingestion.
- **Voice Search Optimization (Task #7)**: Added `SpeakableSpecification` to `index.html`, `services.html`, and `about.html` with expanded CSS selectors for more complete voice assistant responses.
- **FAQ Section & Schema (Task #9)**: Added a visible, interactive FAQ block to `services.html` and implemented a matching `FAQPage` schema with service-specific questions (HRDC, coverage, lead times, cost) to comply with SEO policies and avoid cross-page duplication.

### Fixed
- **Sitemap/Canonical Mismatch (Task #1)**: Updated `sitemap.xml` to use clean URLs (removed `.html` extensions) to align with canonical tags in page headers.
- **Contact Form (Task #2)**: Replaced the placeholder Formspree action in `contact.html` with a functional email endpoint.
- **Merge Duplicate Schema (Task #3)**: Consolidated two separate `LocalBusiness` JSON-LD blocks in `index.html` into a single, comprehensive object.
- **Unique Social Previews (Task #5)**: Assigned unique, relevant Unsplash images for `og:image` and `twitter:image` tags in `about.html`, `portfolio.html`, and `services.html`.
- **Article Semantics (Task #8)**: Converted all client gallery cases and event activation cards in `portfolio.html` to semantic `<article>` tags with `h3` headings for better accessibility and SEO.
- **Documentation Cleanup (Task #10)**: Updated `docs/SEO-AI.md` to reflect all recent SEO and AI optimizations, marking previous issues as resolved.
