import { useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientStrip from './components/ClientStrip';
import About from './components/About';
import Services from './components/Services';
import HealthcareTeaser from './components/HealthcareTeaser';
import HealthcarePage from './components/HealthcarePage';
import Process from './components/Process';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import OurClients from './components/OurClients';
import Contact from './components/Contact';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ServicePage from './components/ServicePage';
import useHashRoute from './components/ui/useHashRoute';
import { servicePages } from './data';

function Home() {
  return (
    <>
      <Hero />
      <ClientStrip />
      <About />
      <Services />
      <HealthcareTeaser />
      <Process />
      <Work />
      <Testimonials />
      <OurClients />
      <Contact />
      <CtaBanner />
    </>
  );
}

export default function App() {
  const route = useHashRoute();
  const page = route.page === 'service' ? servicePages.find((p) => p.slug === route.slug) : null;
  const isHealthcare = route.page === 'healthcare';
  const pageKey = page ? page.slug : isHealthcare ? 'healthcare' : 'home';

  // After every route change: sub-pages open at the top; home links scroll to their section.
  useLayoutEffect(() => {
    if (page || isHealthcare) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (route.anchor) {
      document.getElementById(route.anchor)?.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }, [pageKey, route.anchor]); // eslint-disable-line react-hooks/exhaustive-deps

  const skipToMain = (e) => {
    e.preventDefault();
    const main = document.getElementById('main');
    main?.focus();
    main?.scrollIntoView();
  };

  return (
    <>
      <a
        href="#main"
        onClick={skipToMain}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar activeSlug={page?.slug ?? null} activeHref={isHealthcare ? '#/healthcare' : null} />
      <main id="main" tabIndex={-1} className="outline-none">
        {page ? <ServicePage key={page.slug} page={page} /> : isHealthcare ? <HealthcarePage /> : <Home />}
      </main>
      <Footer />
    </>
  );
}
