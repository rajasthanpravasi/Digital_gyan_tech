# Digital Gyan Technology — website

Single-page site built with React (Vite) + Tailwind CSS. Icons: lucide-react.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Where things live

- `src/data.js` — every piece of copy, link, address and list on the page. Words wrapped in `*asterisks*` in a heading render in coral Instrument Serif italic.
- `tailwind.config.js` — brand colours, fonts, type scale, shadows (`lg` breakpoint is 960px).
- `src/index.css` — Google Fonts import, base styles, fade-up animation.
- `src/components/ui/` — reusable `Button`, `SectionHeading`, `Card`, `Logo`, `Highlight`, `Reveal`.
- `src/components/` — one component per section.

## Service sub-pages (navbar dropdowns)

IT Solutions, Marketing Solutions and Design Studio each open a dropdown. Every item has its own page,
built from one template (`src/components/ServicePage.jsx`) using the `servicePages` list in `src/data.js`.

- Page address: `#/service/<slug>` — e.g. `yoursite.com/#/service/logo-design`
- To edit a page: change its entry in `servicePages` (headline, intro, offerings, benefits).
- To add a page: add an entry with a new `slug`, its `group` and an `icon` (icon names are mapped in `src/components/ui/serviceIcons.js`). It appears in the dropdown automatically.
- The page copy is placeholder text written for this build — replace it with your own.

## Before going live

- **Hero slider photos:** the 5 slides use free Unsplash placeholder photos. To use your own, put the images in `src/assets/hero/`, import them in `src/data.js` and set each slide's `image` (instructions are above `hero` in data.js). Slide text, buttons and timing (`autoplayMs`) are edited there too.

- **Testimonials:** replace each `quote` in `data.js` with the client's real review text.
- **Social links:** Facebook, Instagram, LinkedIn and X are set; add your YouTube channel URL in `footer.socials`.
- **Contact form:** currently opens the visitor's email app with the enquiry pre-filled. Replace `handleSubmit` in `Contact.jsx` with your form service or API.

`lucide-react` is pinned to 0.469.0 because newer versions removed the brand icons (Facebook, Instagram, LinkedIn, YouTube, X).
