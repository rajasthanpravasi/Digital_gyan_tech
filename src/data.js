/*
 * All site content lives here.
 * Headings use *asterisks* to mark the 1–3 words rendered in coral Instrument Serif italic.
 */

// Client logos — all files live in src/assets/clients/
import airawatShot from './assets/work/airawat-handicraft.jpg';
import europeShot from './assets/work/europe-work-force-solution.jpg';
import insightShot from './assets/work/insight-eye-clinic.jpg';
import maharashtraShot from './assets/work/maharashtra-electronics.jpg';
import mediport from './assets/clients/mediport-mumbai.png';
import universalBiotech from './assets/clients/universal-biotech-solution.png';
import amazingSolar from './assets/clients/amazing-solar-oz.png';
import oasisDesert from './assets/clients/the-oasis-desert-place.png';
import smps from './assets/clients/smps.png';
import saag from './assets/clients/saag-organic.png';
import ssdsc from './assets/clients/ssdsc-jaisalmer.png';
import aastha from './assets/clients/aastha-healthcare.png';
import sony from './assets/clients/sony.png';
import bharatSamay from './assets/clients/bharat-samay-network.png';
import chetna from './assets/clients/chetna-hospital.png';
import cdic from './assets/clients/cdic-smiles.png';
import clearConcepts from './assets/clients/clearconcepts-tutorials.png';
import abhangPrabhu from './assets/clients/dr-abhang-prabhu-medical-academy.png';
import mateshwari from './assets/clients/mateshwari-tanotrai-transport.png';
import maharashtraElectronics from './assets/clients/maharashtra-electronics-corporation.png';
import matruDevo from './assets/clients/matru-devo-bhava.png';
import mummyAndMe from './assets/clients/mummy-and-me-ivf.png';
import apexDental from './assets/clients/apex-dental.png';
import avChildren from './assets/clients/av-children-dental-clinic.png';
import centreForSmile from './assets/clients/centre-for-smile.png';
import pakwan from './assets/clients/pakwan.png';
import airawatHandicraft from './assets/clients/airawat-handicraft.png';
import avMultispeciality from './assets/clients/av-children-multispeciality-clinic.png';
import globalImmigration from './assets/clients/global-immigration-consultant.png';
import keloidSpecialist from './assets/clients/keloid-specialist-dr-niteen-dhepe.png';
import eyeHeart from './assets/clients/eye-heart-care-centre.png';
import galaxyHospital from './assets/clients/galaxy-hospital.png';
import drPatilsDental from './assets/clients/dr-patils-dental-care.png';
import gastrohub from './assets/clients/gastrohub.png';
import jaipurCarpentry from './assets/clients/jaipur-carpentry-workshop.png';
import faceDental from './assets/clients/face-dental-international-clinic.png';
import ashturkarPathology from './assets/clients/dr-ashturkars-pathology-laboratory.png';
import dentalCare from './assets/clients/dental-care.png';
import insightEye from './assets/clients/insight-eye-clinic.png';
import changuleFaceClinic from './assets/clients/dr-changules-face-clinic.png';
import internationalDentists from './assets/clients/international-dentists-us.png';
import deNovo from './assets/clients/de-novo-health-care.png';
import drMunde from './assets/clients/dr-mundes-speciality-centre.png';
import dentalGalaxy from './assets/clients/dental-galaxy-clinic.png';
import graandPurohit from './assets/clients/the-graand-purohit.png';
import drSwapnaliSansare from './assets/clients/dr-swapnali-sansare.png';
import drMayurPurandare from './assets/clients/dr-mayur-purandare.png';
import internationalDentistsCanada from './assets/clients/international-dentists-canada.png';
import europeWorkForce from './assets/clients/europe-work-force-solution.png';
import rajwadiGaurav from './assets/clients/rajwadi-gaurav.png';
import jeevisha from './assets/clients/jeevisha-pain-management-center.png';
import leRoyalCamps from './assets/clients/le-royal-camps.png';
import onpHospitals from './assets/clients/onp-hospitals.png';
import ssppPune from './assets/clients/sspp-pune.png';
import pit500 from './assets/clients/pit500.png';
import freshPhotography from './assets/clients/fresh-photography.png';
import pgLogo from './assets/clients/pg.png';
import silverHomes from './assets/clients/silver-homes.png';
import orionIvf from './assets/clients/orion-ivf.png';
import sayuriHospital from './assets/clients/sayuri-hospital.png';
import sriAbhishek from './assets/clients/sri-abhishek-merchandising.png';
import sahastFoundation from './assets/clients/sahast-foundation.png';
import sanjivaniVitalife from './assets/clients/sanjivani-vitalife.png';
import umangIvf from './assets/clients/umang-ivf.png';
import fiitjee from './assets/clients/fiitjee-jaipur.png';
import kpAutomotives from './assets/clients/kp-automotives.png';
import ekang from './assets/clients/ekang.png';
import niamh from './assets/clients/niamh.png';
import lotusCounty from './assets/clients/the-lotus-county.png';
import urbanLiving from './assets/clients/urban-living-night-jar.png';
import nightJar from './assets/clients/the-night-jar-reloaded.png';
import wrenchDynasty from './assets/clients/wrench-dynasty.png';

export const ourClients = {
  eyebrow: 'Our clients',
  title: 'Brands that *grow with us.*',
  text: 'Hospitals, clinics, schools, manufacturers, retailers and hospitality brands across India and beyond trust us with their digital presence.',
  initialCount: 12, // logos shown before "View all clients"
  // Optional per-logo fields:
  //   boxed: true  → logo has its own solid background; corners get rounded
  //   scale: 1.1   → fine-tune size inside the circle (1 = default)
  logos: [
    { name: 'MediPort Mumbai', src: mediport, boxed: true },
    { name: 'Universal Biotech Solution', src: universalBiotech, scale: 1.25 },
    { name: 'Amazing Solar OZ', src: amazingSolar },
    { name: 'The Oasis Desert Place', src: oasisDesert, scale: 1.15 },
    { name: 'SMPS Public School', src: smps },
    { name: 'Saag Organic', src: saag },
    { name: 'SSDSC Jaisalmer', src: ssdsc, scale: 1.1 },
    { name: 'Aastha Healthcare', src: aastha, scale: 1.22 },
    { name: 'Sony', src: sony, boxed: true },
    { name: 'Bharat Samay Network', src: bharatSamay, boxed: true },
    { name: 'Chetna Hospital', src: chetna, scale: 1.1 },
    { name: 'CDIC Smiles', src: cdic },
    { name: 'ClearConcepts Tutorials', src: clearConcepts },
    { name: 'Dr. Abhang Prabhu Medical Academy, Pune', src: abhangPrabhu, scale: 1.22 },
    { name: 'Mateshwari Tanotrai Transport', src: mateshwari },
    { name: 'Maharashtra Electronics Corporation', src: maharashtraElectronics },
    { name: 'Matru Devo Bhava', src: matruDevo, scale: 1.4 },
    { name: 'Mummy And Me IVF', src: mummyAndMe, scale: 1.1 },
    { name: 'Apex Dental, Orthodontic & Implant Centre', src: apexDental },
    { name: 'AV Children Dental Clinic', src: avChildren, scale: 1.15 },
    { name: 'Centre for Smile', src: centreForSmile, scale: 1.1 },
    { name: 'Pakwan', src: pakwan, scale: 1.15 },
    { name: 'Airawat Handicraft', src: airawatHandicraft },
    { name: 'AV Children and Multispeciality Clinic', src: avMultispeciality, scale: 1.15 },
    { name: 'Global Immigration Consultant', src: globalImmigration, scale: 1.1 },
    { name: 'Keloid Specialist — Dr. Niteen Dhepe', src: keloidSpecialist, scale: 1.12 },
    { name: 'Eye Heart Care Centre', src: eyeHeart },
    { name: 'Galaxy Hospital', src: galaxyHospital },
    { name: 'Dr. Patil\'s Dental Care', src: drPatilsDental },
    { name: 'GastroHub', src: gastrohub, scale: 1.12 },
    { name: 'Jaipur Carpentry Workshop', src: jaipurCarpentry },
    { name: 'Face Dental International Clinic', src: faceDental },
    { name: 'Dr. Ashturkar\'s Pathology Laboratory', src: ashturkarPathology, scale: 1.1 },
    { name: 'Dental Care', src: dentalCare, scale: 1.12 },
    { name: 'Insight Eye Clinic', src: insightEye, scale: 1.15 },
    { name: 'Dr. Changule\'s Face Clinic & Research Center', src: changuleFaceClinic, scale: 1.12 },
    { name: 'International Dentists US', src: internationalDentists, scale: 1.12 },
    { name: 'De-Novo Health Care', src: deNovo },
    { name: 'Dr. Munde\'s Speciality Centre', src: drMunde, scale: 1.12 },
    { name: 'Dental Galaxy Clinic', src: dentalGalaxy, scale: 1.12 },
    { name: 'The Graand Purohit', src: graandPurohit, scale: 1.15 },
    { name: 'Dr. Swapnali Sansare', src: drSwapnaliSansare, scale: 1.12 },
    { name: 'Dr. Mayur Purandare', src: drMayurPurandare, scale: 1.12 },
    { name: 'International Dentists Canada', src: internationalDentistsCanada, scale: 1.1 },
    { name: 'Europe Work Force Solution', src: europeWorkForce },
    { name: 'Rajwadi Gaurav', src: rajwadiGaurav },
    { name: 'Jeevisha Pain Management Center', src: jeevisha, scale: 1.1 },
    { name: 'Le Royal Camps', src: leRoyalCamps },
    { name: 'ONP Hospitals', src: onpHospitals, scale: 1.1 },
    { name: 'SSPP — Pune Chapter of Indian Society for Study of Pain', src: ssppPune, scale: 1.12 },
    { name: 'PIT500', src: pit500, scale: 1.1 },
    { name: 'Fresh Photography', src: freshPhotography },
    { name: 'PG', src: pgLogo, scale: 1.1 },
    { name: 'Silver Homes', src: silverHomes, scale: 1.1 },
    { name: 'Orion IVF', src: orionIvf },
    { name: 'Sayuri Hospital', src: sayuriHospital },
    { name: 'Sri Abhishek Merchandising', src: sriAbhishek, scale: 1.12 },
    { name: 'Sahast Foundation', src: sahastFoundation },
    { name: 'Sanjivani VitaLife', src: sanjivaniVitalife },
    { name: 'Umang IVF', src: umangIvf, scale: 1.1 },
    { name: 'FIITJEE Jaipur Centre', src: fiitjee },
    { name: 'K.P. Automotives', src: kpAutomotives },
    { name: 'Ekang — Label of Luxury', src: ekang },
    { name: 'Niamh by Kriti', src: niamh },
    { name: "Archi's The Lotus County Studio Apartment", src: lotusCounty },
    { name: 'Urban Living — The Night Jar', src: urbanLiving },
    { name: 'The Night Jar Reloaded', src: nightJar },
    { name: 'Wrench Dynasty', src: wrenchDynasty },
  ],
};

export const company = {
  name: 'Digital Gyan Technology',
  phone: '+91 78878 81488',
  phoneHref: 'tel:+917887881488',
  email: 'info@digitalgyantech.com',
  emailHref: 'mailto:info@digitalgyantech.com',
  whatsappHref: 'https://api.whatsapp.com/send?phone=917887881488',
  hours: 'Mon–Sat, 9am–6pm',
  cities: ['Pune', 'Jaipur', 'Dubai'],
};

/*
 * NAVIGATION
 * Items with `group` open a dropdown listing that group's service pages (see servicePages below).
 */
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'IT Solutions', group: 'it-solutions' },
  { label: 'Marketing Solutions', group: 'marketing' },
  { label: 'Design Studio', group: 'design-studio' },
  { label: 'Healthcare', href: '#/healthcare' }, // separate page
  { label: 'Our Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

/*
 * SERVICE SUB-PAGES (one page per dropdown item)
 * URL of each page: #/service/<slug>   e.g.  #/service/it-consulting
 * NOTE: page copy below is placeholder written for this build — replace it with your own text.
 * Headlines use *asterisks* for the coral serif words.
 */
export const serviceGroups = [
  { id: 'it-solutions', label: 'IT Solutions', interest: 'IT consulting & apps' },
  { id: 'marketing', label: 'Marketing Solutions', interest: 'Digital marketing (SEO / SMM)' },
  { id: 'design-studio', label: 'Design Studio', interest: 'Branding & design' },
];

export const servicePath = (slug) => `#/service/${slug}`;

export const servicePages = [
  /* ---------- IT SOLUTIONS ---------- */
  {
    slug: 'it-consulting',
    group: 'it-solutions',
    icon: 'Lightbulb',
    title: 'IT Consulting',
    summary: 'The right technology plan for your business.',
    headline: 'Technology decisions, made *with confidence.*',
    intro:
      'Our IT consulting team helps you choose, plan and roll out the right technology for your business — so every rupee you spend on IT supports a clear business goal.',
    offerings: [
      { title: 'Technology assessment', text: 'A review of your current systems, software and workflows to find gaps, risks and quick wins.' },
      { title: 'IT strategy & roadmap', text: 'A phased plan that matches technology investments to your growth goals and budget.' },
      { title: 'Software & vendor selection', text: 'Unbiased guidance on platforms, tools and partners that genuinely fit your needs.' },
      { title: 'Digital transformation', text: 'Moving manual, paper-based processes online to save time and reduce errors.' },
    ],
    benefits: [
      'Clear, jargon-free recommendations',
      'Lower long-term IT costs',
      'Systems that scale as you grow',
      'Better security and data practices',
      'One team from advice through to delivery',
    ],
  },
  {
    slug: 'application-development-maintenance',
    group: 'it-solutions',
    icon: 'Code2',
    title: 'Application Development & Maintenance',
    summary: 'Custom software, built and supported.',
    headline: 'Custom applications, built and *kept running.*',
    intro:
      'We design, build and support web and business applications around the way your team actually works — and stay on after launch to keep them fast, secure and up to date.',
    offerings: [
      { title: 'Custom web applications', text: 'Portals, dashboards and web apps built for your exact workflow.' },
      { title: 'Business software', text: 'CRM, booking, inventory, billing and internal tools that replace spreadsheets.' },
      { title: 'Integrations & APIs', text: 'Connect payment gateways, CRMs, accounting and third-party services.' },
      { title: 'Maintenance & support', text: 'Updates, bug fixes, backups, monitoring and performance tuning.' },
    ],
    benefits: [
      'Software shaped around your process',
      'Secure, well-documented code',
      'Regular updates and quick fixes',
      'Room to add features as you grow',
      'A single point of contact for support',
    ],
  },
  {
    slug: 'mobility',
    group: 'it-solutions',
    icon: 'Smartphone',
    title: 'Mobility',
    summary: 'Mobile apps for Android and iOS.',
    headline: 'Your business, *in every pocket.*',
    intro:
      'Your customers and teams live on their phones. We build mobile apps and mobile-first experiences that make it easy to book, buy, track and stay in touch — wherever they are.',
    offerings: [
      { title: 'Android & iOS apps', text: 'Native-quality apps designed for speed, clarity and everyday use.' },
      { title: 'Cross-platform apps', text: 'One codebase for both stores — faster to launch and simpler to maintain.' },
      { title: 'Progressive web apps', text: 'App-like experiences that open straight from the browser, no download needed.' },
      { title: 'Store publishing & upkeep', text: 'Play Store and App Store listing, OS updates and ongoing improvements.' },
    ],
    benefits: [
      'Mobile-first design from day one',
      'Push notifications to re-engage users',
      'Secure logins and data handling',
      'Analytics to see how the app is used',
      'Support after launch',
    ],
  },
  {
    slug: 'e-commerce',
    group: 'it-solutions',
    icon: 'ShoppingCart',
    title: 'E-Commerce',
    summary: 'Online stores that sell around the clock.',
    headline: 'Online stores that *sell around the clock.*',
    intro:
      'From your first product listing to a full-scale store, we build e-commerce websites that are easy to manage, quick to load and designed to turn visitors into paying customers.',
    offerings: [
      { title: 'Store design & development', text: 'Custom, mobile-first storefronts on the platform that suits you.' },
      { title: 'Payments, shipping & GST', text: 'Payment gateways, delivery partners and tax settings configured correctly.' },
      { title: 'Catalogue & inventory', text: 'Product pages, variants, stock tracking and easy bulk updates.' },
      { title: 'Growth integrations', text: 'SEO, analytics, marketplaces and marketing tools connected from day one.' },
    ],
    benefits: [
      'Fast, secure checkout',
      'Easy-to-use admin for your team',
      'SEO-ready product pages',
      'Order, stock and customer reports',
      'Ongoing support and upgrades',
    ],
  },
  {
    slug: 'ui-ux',
    group: 'it-solutions',
    icon: 'Palette',
    title: 'UI/UX',
    summary: 'Interfaces people enjoy using.',
    headline: 'Interfaces people *enjoy using.*',
    intro:
      'Good design is more than how it looks — it is how easily people get things done. Our UI/UX team designs websites and apps that feel simple, clear and trustworthy.',
    offerings: [
      { title: 'User research', text: 'Understanding your users, their goals and where they get stuck today.' },
      { title: 'Wireframes & prototypes', text: 'Clickable flows that let you test ideas before a line of code is written.' },
      { title: 'Visual UI design', text: 'Polished screens, components and design systems in your brand style.' },
      { title: 'Usability review & redesign', text: 'Finding friction in existing products and fixing it.' },
    ],
    benefits: [
      'Higher conversions and fewer drop-offs',
      'Consistent look across every screen',
      'Accessible, mobile-friendly layouts',
      'Developer-ready design files',
      'Decisions backed by user feedback',
    ],
  },

  /* ---------- MARKETING SOLUTIONS ---------- */
  {
    slug: 'branding',
    group: 'marketing',
    icon: 'Gem',
    title: 'Branding',
    summary: 'A brand people remember and trust.',
    headline: 'A brand people *remember and trust.*',
    intro:
      'Your brand is the feeling people have about your business. We help you define it clearly and express it consistently — online, in print and everywhere customers meet you.',
    offerings: [
      { title: 'Brand strategy & positioning', text: 'Who you serve, what makes you different and how you should sound.' },
      { title: 'Visual identity', text: 'Logo, colours, typography and imagery that work together.' },
      { title: 'Brand guidelines', text: 'A simple rulebook so every team and vendor stays on-brand.' },
      { title: 'Brand rollout', text: 'Stationery, signage, social profiles and website applied consistently.' },
    ],
    benefits: [
      'Stand out from local competitors',
      'Build trust before the first call',
      'Consistent messaging everywhere',
      'Easier, faster marketing decisions',
      'An identity that grows with you',
    ],
  },
  {
    slug: 'content-marketing',
    group: 'marketing',
    icon: 'PenLine',
    title: 'Content Marketing',
    summary: 'Content that earns attention.',
    headline: 'Content that *earns attention.*',
    intro:
      'Helpful, well-planned content brings the right people to you. We plan, write and design content that answers your customers’ questions and keeps your brand top of mind.',
    offerings: [
      { title: 'Content strategy & calendar', text: 'Topics, formats and a posting plan tied to your business goals.' },
      { title: 'Blogs & website copy', text: 'SEO-friendly articles and pages written in your brand voice.' },
      { title: 'Social media content', text: 'Posts, carousels and reels designed for each platform.' },
      { title: 'Video & visual content', text: 'Short videos, infographics and creatives that are easy to share.' },
    ],
    benefits: [
      'Steady, consistent publishing',
      'Better search visibility',
      'Content your audience actually reads',
      'Stronger trust and authority',
      'Monthly performance insights',
    ],
  },
  {
    slug: 'digital-analytics',
    group: 'marketing',
    icon: 'BarChart3',
    title: 'Digital Analytics',
    summary: 'Know what’s working — and why.',
    headline: 'Know what’s working — *and why.*',
    intro:
      'Stop guessing where your enquiries come from. We set up tracking and reporting that show exactly which channels, pages and campaigns are driving results.',
    offerings: [
      { title: 'Analytics setup & tracking', text: 'Google Analytics, Tag Manager and conversion tracking set up properly.' },
      { title: 'Dashboards & reporting', text: 'Clear, visual reports you can read in minutes.' },
      { title: 'Campaign analysis', text: 'Measuring return on ads, SEO and social so budget goes where it works.' },
      { title: 'Conversion optimisation', text: 'Finding and fixing the points where visitors drop off.' },
    ],
    benefits: [
      'Decisions based on real data',
      'Less wasted ad spend',
      'Every enquiry traced to its source',
      'Simple monthly reports',
      'Ongoing recommendations',
    ],
  },
  {
    slug: 'lead-generation',
    group: 'marketing',
    icon: 'Magnet',
    title: 'Lead Generation',
    summary: 'A steady pipeline of qualified leads.',
    headline: 'A steady pipeline of *qualified leads.*',
    intro:
      'We combine targeted ads, landing pages and quick follow-up systems to bring you a steady flow of enquiries from people who are ready to buy.',
    offerings: [
      { title: 'Paid campaigns', text: 'Google and Meta ads targeted by location, interest and intent.' },
      { title: 'Landing pages & forms', text: 'Focused pages built to turn clicks into enquiries.' },
      { title: 'SEO & local search', text: 'Rank for the searches your customers make, including Google Maps.' },
      { title: 'Lead follow-up', text: 'WhatsApp, email and CRM automations so no lead goes cold.' },
    ],
    benefits: [
      'More enquiries from the right people',
      'Lower cost per lead over time',
      'Fast, automated follow-up',
      'Transparent lead tracking',
      'Campaigns optimised every month',
    ],
  },

  /* ---------- DESIGN STUDIO ---------- */
  {
    slug: 'logo-design',
    group: 'design-studio',
    icon: 'PenTool',
    title: 'Logo Design',
    summary: 'A logo that says who you are.',
    headline: 'A logo that *says who you are.*',
    intro:
      'Your logo is often the first thing people see. We design distinctive, versatile logos that look sharp on a signboard, a business card and a phone screen alike.',
    offerings: [
      { title: 'Discovery & concepts', text: 'We learn your story, then explore several original directions.' },
      { title: 'Refinement', text: 'Rounds of feedback to perfect the shape, colour and type.' },
      { title: 'Final file pack', text: 'Every format you need — for print, web, social and signage.' },
      { title: 'Usage guide', text: 'Simple rules for colours, spacing and do’s and don’ts.' },
    ],
    benefits: [
      '100% original artwork',
      'Works in colour and in black & white',
      'Scales from favicon to billboard',
      'Full ownership of the final files',
      'Matching social media profile kit',
    ],
  },
  {
    slug: 'video-creation',
    group: 'design-studio',
    icon: 'Clapperboard',
    title: 'Video Creation',
    summary: 'Videos that tell your story.',
    headline: 'Videos that *tell your story.*',
    intro:
      'Video is the fastest way to explain what you do and why it matters. From short reels to brand films, we script, shoot and edit videos built for the platforms your audience uses.',
    offerings: [
      { title: 'Brand & corporate films', text: 'Introduce your business, team and values in a few minutes.' },
      { title: 'Social reels & shorts', text: 'Snappy vertical videos made for Instagram, YouTube and Facebook.' },
      { title: 'Explainers & motion graphics', text: 'Animated videos that make complex services easy to understand.' },
      { title: 'Testimonial & event videos', text: 'Real customer stories and event highlights, professionally edited.' },
    ],
    benefits: [
      'Scripting and storyboarding included',
      'Formats sized for every platform',
      'Subtitles for silent autoplay',
      'Music, voice-over and branding',
      'Quick turnaround on social edits',
    ],
  },
  {
    slug: 'brochure-design',
    group: 'design-studio',
    icon: 'BookOpen',
    title: 'Brochure Design',
    summary: 'Brochures that make the sale easier.',
    headline: 'Brochures that *make the sale easier.*',
    intro:
      'A well-designed brochure does the explaining for you. We write and design brochures and company profiles that present your business clearly and leave a lasting impression.',
    offerings: [
      { title: 'Company profiles', text: 'Your story, services and credentials in one polished document.' },
      { title: 'Product & service brochures', text: 'Clear layouts that highlight features, benefits and pricing.' },
      { title: 'Flyers & leaflets', text: 'Single-page designs for events, offers and launches.' },
      { title: 'Print & digital versions', text: 'Print-ready files plus lightweight PDFs for WhatsApp and email.' },
    ],
    benefits: [
      'Copywriting support available',
      'Layouts that guide the reader',
      'Consistent with your brand identity',
      'Print-ready with correct bleed & colour',
      'Easy-to-share digital PDF',
    ],
  },
  {
    slug: 'catalog-design',
    group: 'design-studio',
    icon: 'LayoutGrid',
    title: 'Catalog Design',
    summary: 'Catalogues that showcase every product.',
    headline: 'Catalogues that *showcase every product.*',
    intro:
      'Whether you have twenty products or two thousand, we design catalogues that are easy to browse, easy to update and make every item look its best.',
    offerings: [
      { title: 'Product catalogues', text: 'Structured layouts with images, specs and codes that are easy to scan.' },
      { title: 'Photography direction', text: 'Guidance on product shots so the whole catalogue looks consistent.' },
      { title: 'Digital & interactive catalogues', text: 'Clickable PDFs and flipbooks to share online.' },
      { title: 'Print production support', text: 'Paper, finish and printer coordination for a quality result.' },
    ],
    benefits: [
      'Logical, buyer-friendly structure',
      'Templates that are easy to update',
      'Consistent product presentation',
      'Print and digital editions',
      'Ideal for dealers, distributors and exhibitions',
    ],
  },
  {
    slug: 'menu-design',
    group: 'design-studio',
    icon: 'UtensilsCrossed',
    title: 'Menu Design',
    summary: 'Menus that make guests order more.',
    headline: 'Menus that *make guests order more.*',
    intro:
      'A great menu is part design, part psychology. We create menus for restaurants, cafés and cloud kitchens that are easy to read, true to your brand and gently steer guests to your best dishes.',
    offerings: [
      { title: 'Dine-in menus', text: 'Elegant, durable layouts that match your restaurant’s style.' },
      { title: 'Takeaway & delivery menus', text: 'Compact designs for flyers, inserts and delivery apps.' },
      { title: 'QR & digital menus', text: 'Mobile-friendly menus guests can open by scanning a code.' },
      { title: 'Menu boards & signage', text: 'Counter boards, standees and displays for your outlet.' },
    ],
    benefits: [
      'Layouts that highlight signature dishes',
      'Clear pricing and dietary icons',
      'Easy updates when prices change',
      'Print-ready and digital formats',
      'Consistent with your brand identity',
    ],
  },
];

/*
 * HEALTHCARE PAGE  →  #/healthcare
 * All text below is the page content, in order. *asterisks* = coral serif words.
 */
export const healthcare = {
  path: '#/healthcare',
  brand: 'Digital Gyan Technology',
  title: 'Transforming Healthcare Through *Digital Innovation*',
  tagline: 'Your Healthcare Brand. Our Digital Expertise. One Complete Growth Solution.',
  intro: [
    'At Digital Gyan Technology, we believe that healthcare deserves more than just an online presence. It deserves a strong digital identity, meaningful communication and a strategy that builds trust.',
    'With experience working alongside hospitals, clinics and healthcare professionals, we understand the unique communication and marketing requirements of the healthcare industry.',
    'We bring together creativity, technology and strategic digital marketing to help healthcare organisations strengthen their brand identity, reach the right audience and grow their digital presence.',
  ],
  hero: {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=75',
    imageAlt: 'Doctor reviewing information on a tablet',
  },
  partner: {
    title: 'Your Complete Digital Marketing Partner for *Healthcare*',
    text: 'From establishing your brand online to managing your complete digital communication, we offer integrated digital solutions under one roof.',
    servicesLabel: 'Our Services Include:',
  },
  services: [
    { icon: 'Share2', title: 'Healthcare Social Media Management', text: 'Strategic planning, content creation, creative posts, campaigns and platform management.' },
    { icon: 'Fingerprint', title: 'Branding & Digital Identity', text: 'Building a distinctive and professional identity for hospitals, clinics and healthcare brands.' },
    { icon: 'MonitorSmartphone', title: 'Website Design & Development', text: 'Creating professional, user-friendly and informative websites for healthcare organisations.' },
    { icon: 'Target', title: 'Digital Advertising & Promotions', text: 'Targeted digital campaigns to increase visibility, engagement and relevant enquiries.' },
    { icon: 'FileText', title: 'Healthcare Content Creation', text: 'Informative healthcare content, awareness campaigns, educational creatives and digital storytelling.' },
    { icon: 'SearchCheck', title: 'SEO & Online Reputation Management', text: 'Improving online visibility and helping healthcare brands build credibility.' },
    { icon: 'Mic', title: 'Video, Podcast & Media Production', text: 'Creating engaging healthcare discussions, expert interviews, podcasts and informational content.' },
    { icon: 'CalendarHeart', title: 'Healthcare Campaigns & Promotions', text: 'Designing strategic campaigns for hospital services, health check-ups, medical events and awareness initiatives.' },
  ],
  experience: {
    title: 'Our Experience. *Your Growth.*',
    text: [
      'Having worked with hospitals, clinics and healthcare professionals, we understand that every healthcare organisation has a different audience, identity and growth objective.',
      'Our approach combines industry understanding with innovative digital strategies to deliver communication that is professional, informative and audience-focused.',
    ],
  },
  vision: {
    title: 'More Than Marketing. *Building Healthcare Connections.*',
    text: [
      'Our vision goes beyond conventional digital marketing. We aim to create a connected healthcare ecosystem where healthcare providers, medical professionals and communities can interact through reliable information, digital platforms and meaningful communication.',
      'From hospital branding and clinic promotions to healthcare podcasts, local healthcare updates and future healthcare discovery platforms, we are building possibilities for the next generation of healthcare communication.',
    ],
  },
  closing: {
    brand: 'Digital Gyan Technology',
    title: 'Think Digital. Communicate Better. *Grow Smarter.*',
    subtitle: 'One Partner. Complete Digital Solutions. Endless Possibilities.',
  },
  // Used only by the small Healthcare band on the HOME page (names must match ourClients.logos)
  clientNames: [
    'Galaxy Hospital', 'Sayuri Hospital', 'Chetna Hospital', 'ONP Hospitals', 'Orion IVF', 'Aastha Healthcare',
    'Umang IVF', 'Mummy And Me IVF', 'Insight Eye Clinic', 'Eye Heart Care Centre', 'GastroHub', 'Jeevisha Pain Management Center',
    "Dr. Munde's Speciality Centre", 'Dr. Mayur Purandare', 'Dr. Swapnali Sansare', "Dr. Changule's Face Clinic & Research Center",
    'Keloid Specialist — Dr. Niteen Dhepe', "Dr. Ashturkar's Pathology Laboratory", 'De-Novo Health Care', 'Sanjivani VitaLife',
    'AV Children and Multispeciality Clinic', 'Matru Devo Bhava', 'Centre for Smile', 'CDIC Smiles', 'Apex Dental, Orthodontic & Implant Centre',
    "Dr. Patil's Dental Care", 'Dental Galaxy Clinic', 'Dental Care', 'Face Dental International Clinic', 'AV Children Dental Clinic',
    'International Dentists US', 'International Dentists Canada', 'Universal Biotech Solution', 'MediPort Mumbai',
    'Dr. Abhang Prabhu Medical Academy, Pune', 'SSPP — Pune Chapter of Indian Society for Study of Pain',
  ],
};

/*
 * HERO SLIDER
 * `image` can be a web URL (as below) or your own photo:
 *   1. put the file in src/assets/hero/   e.g. src/assets/hero/team.jpg
 *   2. import it at the top of this file:  import heroTeam from './assets/hero/team.jpg';
 *   3. use it here:                        image: heroTeam,
 * Best size: 1920 × 1080 px, JPG/WebP, under ~400 KB.
 * The placeholder photos below are free Unsplash images — swap them for your own.
 */
const unsplash = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1920&q=75`;

export const hero = {
  autoplayMs: 6500, // time each slide stays on screen
  slides: [
    {
      tab: 'Digital growth',
      eyebrow: 'ISO Certified · Pune · Jaipur · Dubai',
      title: 'Putting your business on the *digital track.*',
      text: 'IT consulting, websites, digital marketing and design — handled by one expert team, with strategies tailored to make your brand stand out in a crowded online world.',
      primaryCta: { label: 'Get a free consultation', href: '#contact' },
      secondaryCta: { label: 'See our work', href: '#work' },
      image: unsplash('photo-1522071820081-009f0129c71c'),
      alt: 'A team collaborating around laptops',
    },
    {
      tab: 'IT Solutions',
      eyebrow: 'IT Solutions',
      title: 'Software that works *the way you do.*',
      text: 'IT consulting, custom applications, mobile apps and e-commerce — planned, built, launched and supported by one team.',
      primaryCta: { label: 'Explore IT Solutions', href: '#it-solutions' },
      secondaryCta: { label: 'Talk to an expert', href: '#contact' },
      image: unsplash('photo-1498050108023-c5249f4df085'),
      alt: 'Code on a laptop screen',
    },
    {
      tab: 'Marketing',
      eyebrow: 'Marketing Solutions',
      title: 'Marketing that brings *real enquiries.*',
      text: 'SEO, social media, content and lead generation — measured, reported and improved every single month.',
      primaryCta: { label: 'Explore Marketing', href: '#marketing' },
      secondaryCta: { label: 'Get a free audit', href: '#contact' },
      image: unsplash('photo-1460925895917-afdab827c52f'),
      alt: 'Analytics dashboard on a laptop',
    },
    {
      tab: 'Design Studio',
      eyebrow: 'Design Studio',
      title: 'Design that makes your brand *unforgettable.*',
      text: 'Logos, brochures, catalogues, menus and videos crafted to look great everywhere your customers see you.',
      primaryCta: { label: 'Explore Design Studio', href: '#design-studio' },
      secondaryCta: { label: 'Start a project', href: '#contact' },
      image: unsplash('photo-1561070791-2526d30994b5'),
      alt: 'Designer working on brand artwork',
    },
    {
      tab: 'Healthcare',
      eyebrow: 'Healthcare Digital Marketing',
      title: 'Transforming healthcare through *digital innovation.*',
      text: 'Branding, websites and patient-friendly marketing for hospitals, clinics and healthcare professionals.',
      primaryCta: { label: 'Healthcare solutions', href: '#/healthcare' },
      secondaryCta: { label: 'See our clients', href: '#our-clients' },
      image: unsplash('photo-1576091160550-2173dba999ef'),
      alt: 'Doctor using a tablet',
    },
  ],
};

export const clients = {
  label: 'Trusted by 500+ businesses',
  names: [
    { name: 'Insight Eye Clinic', className: 'font-serif italic text-[26px] tracking-normal' },
    { name: 'Airawat Handicraft', className: 'font-logo text-[21px] tracking-tight' },
    { name: 'MAHARASHTRA ELECTRONICS', className: 'font-display text-[15px] tracking-[0.18em]' },
    { name: 'Jeevisha Pain Clinic', className: 'font-sans font-semibold text-[19px] tracking-tight' },
    { name: 'Europe Work For Solution', className: 'font-serif text-[24px]' },
  ],
};

export const about = {
  eyebrow: 'About us',
  title: 'A digital marketing & technology partner built for *real results.*',
  text: 'From website development and digital marketing to IT consulting, we deliver effortless solutions built on cutting-edge technology. Our expert team creates personalised strategies and purposeful insights so your business stands out — and keeps growing.',
  link: { label: 'Meet the team', href: '#contact' },
  stats: [
    { value: '500', suffix: '+', suffixClass: 'text-coral', label: 'Businesses trust us' },
    { value: '3', suffix: '', label: 'Offices — Pune, Jaipur, Dubai' },
    { value: 'ISO', suffix: '', label: 'Certified quality processes' },
    { value: '360', suffix: '°', suffixClass: 'text-teal', label: 'IT, marketing & design under one roof' },
  ],
};

export const services = {
  eyebrow: 'What we do',
  title: 'Three studios. *One growth engine.*',
  text: 'Pick a single service or bring us the whole journey — strategy, build, launch and growth.',
  items: [
    {
      id: 'it-solutions',
      number: '01',
      icon: 'Code2',
      title: 'IT Solutions',
      text: 'Reliable software, apps and online stores engineered around how your business actually works.',
      rows: ['IT Consulting', 'Application Development & Maintenance', 'Mobility', 'E-Commerce', 'UI/UX'],
    },
    {
      id: 'marketing',
      number: '02',
      icon: 'Megaphone',
      title: 'Marketing Solutions',
      text: 'Search, social and content programmes that bring in qualified leads — and show you the numbers.',
      rows: ['Digital Marketing (SEO / SMM)', 'Branding', 'Content Marketing', 'Digital Analytics', 'Lead Generation'],
    },
    {
      id: 'design-studio',
      number: '03',
      icon: 'PenTool',
      title: 'Design Studio',
      text: 'Identity, print and motion design that gives your brand a consistent, memorable look.',
      rows: ['Logo Design', 'Video Creation', 'Brochure Design', 'Catalog Design', 'Menu Design'],
    },
  ],
};

export const process = {
  eyebrow: 'How we work',
  title: 'From first call to *measurable growth.*',
  steps: [
    { number: '01', title: 'Discover', text: 'We learn your business, audience and goals in a free consultation.' },
    { number: '02', title: 'Strategise', text: 'A clear plan with channels, timelines and the metrics that matter.' },
    { number: '03', title: 'Build & launch', text: 'Design, development and campaigns shipped by one coordinated team.' },
    { number: '04', title: 'Grow', text: 'Ongoing reporting and optimisation to keep results climbing.' },
  ],
};

export const work = {
  eyebrow: 'Our work',
  title: 'Selected *projects*',
  filters: ['All', 'Website', 'Design', 'Social Media'],
  projects: [
    { name: 'Airawat Handicraft', monogram: 'Ah', category: 'Website', subtitle: 'E-commerce website', image: airawatShot, logo: airawatHandicraft },
    { name: 'Europe Work For Solution', monogram: 'Ew', category: 'Design', subtitle: 'Brand & visual identity', image: europeShot, logo: europeWorkForce },
    { name: 'Insight Eye Clinic', monogram: 'Ie', category: 'Social Media', subtitle: 'Social media marketing', image: insightShot, logo: insightEye },
    { name: 'Maharashtra Electronics', monogram: 'Me', category: 'Website', subtitle: 'Corporate website', image: maharashtraShot, logo: maharashtraElectronics },
  ],
};

/*
 * TESTIMONIALS — replace each `quote` with the client's own review text
 * (e.g. copied from your Google reviews) before going live.
 */
export const testimonials = {
  eyebrow: 'Testimonials',
  title: 'What our *clients say.*',
  items: [
    {
      title: 'Fast, quality work',
      quote: 'Add Dr Aparna Pitre’s review here, in their own words.',
      name: 'Dr Aparna Pitre',
      role: 'Client',
      initials: 'AP',
    },
    {
      title: 'Excellent work',
      quote: 'Add Dr Sanjog Mekewar’s review here, in their own words.',
      name: 'Dr Sanjog Mekewar',
      role: 'Jeevisha Pain Clinic',
      initials: 'SM',
    },
    {
      title: 'Highly recommended',
      quote: 'Add Insight Eye Clinic’s review here, in their own words.',
      name: 'Insight Eye Clinic',
      role: 'Pune',
      initials: 'IE',
    },
    {
      title: 'Real business growth',
      quote: 'Add Jivan More’s review here, in their own words.',
      name: 'Jivan More',
      role: 'Client',
      initials: 'JM',
    },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  title: 'Your digital success partner. *Let’s talk.*',
  text: 'Tell us where you want to take your business. We reply within one working day, Monday to Saturday, 9am–6pm.',
  form: {
    title: 'Start your project',
    interests: [
      'Website development',
      'Digital marketing (SEO / SMM)',
      'Branding & design',
      'IT consulting & apps',
      'Lead generation',
      'Healthcare marketing',
    ],
  },
};

export const cta = {
  title: 'Ready to put your business on the digital track?',
  button: { label: 'Book a free call', href: '#contact' },
};

export const footer = {
  blurb: 'IT consulting, websites, digital marketing and design for growing businesses — from offices in Pune, Jaipur and Dubai.',
  offices: [
    { city: 'Pune', address: '604, Fortuna Complex, Pimple Saudagar, Pune (MH)' },
    { city: 'Jaipur', address: '403, City Corporate Tower, Malviya Marg, C Scheme, Jaipur 302001' },
    { city: 'Dubai', address: 'D Wing, 4th floor, DSO HQ, Dubai Silicon Oasis, UAE' },
  ],
  socials: [
    { label: 'Facebook', icon: 'Facebook', href: 'https://www.facebook.com/Digitalgyatech' },
    { label: 'Instagram', icon: 'Instagram', href: 'https://www.instagram.com/digitalgyantech/' },
    { label: 'LinkedIn', icon: 'Linkedin', href: 'https://www.linkedin.com/company/digital-gyan-tech/' },
    { label: 'YouTube', icon: 'Youtube', href: '#' }, // TODO: paste your YouTube channel URL
    { label: 'X (Twitter)', icon: 'Twitter', href: 'https://x.com/digtialgyantech' },
  ],
  columns: [
    {
      title: 'Company',
      links: [
        { label: 'About us', href: '#about' },
        { label: 'Our clients', href: '#our-clients' },
        { label: 'Healthcare marketing', href: '#/healthcare' },
        { label: 'ISO certified', href: '#about' },
        { label: 'Contact us', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Application development', href: '#/service/application-development-maintenance' },
        { label: 'Digital analytics', href: '#/service/digital-analytics' },
        { label: 'Content marketing', href: '#/service/content-marketing' },
        { label: 'E-commerce', href: '#/service/e-commerce' },
        { label: 'Lead generation', href: '#/service/lead-generation' },
      ],
    },
  ],
  copyright: '© 2026 Digital Gyan Technology. All rights reserved.',
  cities: 'Pune · Jaipur · Dubai',
};
