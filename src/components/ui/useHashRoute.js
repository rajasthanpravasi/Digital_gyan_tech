import { useEffect, useState } from 'react';

/**
 * Tiny hash router (no extra dependency, works on any static host).
 *   #/healthcare      → healthcare page
 *   #/service/<slug>  → service sub-page
 *   #<section-id>     → home page, scrolled to that section
 *   (empty)           → home page
 */
function parse() {
  const hash = window.location.hash || '';
  if (/^#\/healthcare\/?$/.test(hash)) return { page: 'healthcare', slug: null, anchor: null };
  const match = hash.match(/^#\/service\/([\w-]+)/);
  if (match) return { page: 'service', slug: match[1], anchor: null };
  const anchor = hash.startsWith('#') && !hash.startsWith('#/') ? hash.slice(1) : null;
  return { page: 'home', slug: null, anchor };
}

export default function useHashRoute() {
  const [route, setRoute] = useState(parse);

  useEffect(() => {
    const onChange = () => setRoute(parse());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}
