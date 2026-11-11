import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, Phone, X } from 'lucide-react';
import Logo from './ui/Logo';
import Button from './ui/Button';
import serviceIcons from './ui/serviceIcons';
import { company, navLinks, servicePages, servicePath } from '../data';

const pagesFor = (group) => servicePages.filter((p) => p.group === group);

/* ---------- Desktop dropdown ---------- */
function Dropdown({ item, activeGroup, activeSlug }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const btnRef = useRef(null);
  const timer = useRef(null);
  const pages = pagesFor(item.group);
  const isActive = open || activeGroup === item.group;

  const show = () => {
    clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 140);
  };

  useEffect(() => () => clearTimeout(timer.current), []);

  // close when focus leaves the dropdown
  const onBlur = (e) => {
    if (!wrapRef.current?.contains(e.relatedTarget)) setOpen(false);
  };
  const onKeyDown = (e) => {
    if (e.key === 'Escape' && open) {
      setOpen(false);
      btnRef.current?.focus();
    }
  };

  const menuId = `menu-${item.group}`;

  return (
    <li ref={wrapRef} className="relative" onMouseEnter={show} onMouseLeave={hide} onBlur={onBlur} onKeyDown={onKeyDown}>
      <button
        ref={btnRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={`flex h-[88px] items-center gap-1 whitespace-nowrap text-[15px] font-medium transition-colors ${
          isActive ? 'text-coral' : 'text-muted hover:text-ink'
        }`}
      >
        {item.label}
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          strokeWidth={2.2}
        />
      </button>

      <div
        id={menuId}
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-0 transition duration-200 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
        }`}
      >
        <div className="w-[340px] rounded-3xl border border-line bg-white p-2.5 shadow-[0_30px_60px_-30px_rgba(15,34,51,.45)]">
          <ul>
            {pages.map((page) => {
              const Icon = serviceIcons[page.icon];
              const current = activeSlug === page.slug;
              return (
                <li key={page.slug}>
                  <a
                    href={servicePath(page.slug)}
                    onClick={() => setOpen(false)}
                    aria-current={current ? 'page' : undefined}
                    className={`group/item flex items-center gap-3.5 rounded-2xl px-3 py-2.5 transition-colors hover:bg-tealTint ${
                      current ? 'bg-tealTint' : ''
                    }`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ivory transition-colors group-hover/item:bg-white">
                      <Icon aria-hidden="true" className="h-[18px] w-[18px] text-tealDark" strokeWidth={2} />
                    </span>
                    <span className="text-[15px] font-medium leading-snug text-ink">{page.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href={`#${item.group}`}
            onClick={() => setOpen(false)}
            className="mt-1.5 flex items-center justify-between rounded-2xl border-t border-line px-3 pb-2 pt-3.5 text-[13.5px] font-semibold text-tealDark transition-colors hover:text-ink"
          >
            View all {item.label}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </li>
  );
}

/* ---------- Mobile accordion group ---------- */
function MobileGroup({ item, onNavigate, activeSlug }) {
  const [open, setOpen] = useState(false);
  const pages = pagesFor(item.group);
  const panelId = `m-${item.group}`;
  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between py-5 font-display text-[22px] font-semibold tracking-tight ${
          open ? 'text-coral' : 'text-ink'
        }`}
      >
        {item.label}
        <ChevronDown aria-hidden="true" className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <ul id={panelId} hidden={!open} className="mb-4 space-y-1 border-l-2 border-tealTint pl-4">
        {pages.map((page) => (
          <li key={page.slug}>
            <a
              href={servicePath(page.slug)}
              onClick={onNavigate}
              aria-current={activeSlug === page.slug ? 'page' : undefined}
              className={`block rounded-xl px-3 py-2.5 text-[16px] font-medium transition-colors hover:bg-tealTint ${
                activeSlug === page.slug ? 'bg-tealTint text-ink' : 'text-muted'
              }`}
            >
              {page.title}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Navbar({ activeSlug = null, activeHref = null }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeGroup = servicePages.find((p) => p.slug === activeSlug)?.group ?? null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // close mobile menu whenever the route changes
  useEffect(() => setOpen(false), [activeSlug, activeHref]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-white transition-shadow ${
        scrolled ? 'shadow-[0_10px_30px_-24px_rgba(15,34,51,.45)]' : ''
      }`}
    >
      <div className="container-x flex h-[88px] max-w-[1440px] items-center justify-between gap-6 xl:gap-10">
        <Logo href="#top" className="h-[56px] sm:h-[64px]" />

        <nav aria-label="Primary" className="hidden flex-1 xl:block">
          <ul className="flex items-center justify-between gap-4">
            {navLinks.map((link) =>
              link.group ? (
                <Dropdown key={link.label} item={link} activeGroup={activeGroup} activeSlug={activeSlug} />
              ) : (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={activeHref === link.href ? 'page' : undefined}
                    className={`whitespace-nowrap text-[15px] font-medium transition-colors ${
                      activeHref === link.href ? 'text-coral' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-6 xl:flex">
          <a
            href={company.phoneHref}
            className="hidden items-center gap-2 whitespace-nowrap text-[15px] font-semibold text-ink transition-colors hover:text-tealDark min-[1600px]:inline-flex"
          >
            <Phone aria-hidden="true" className="h-[18px] w-[18px] text-teal" strokeWidth={2.2} />
            {company.phone}
          </a>
          <Button href="#contact" variant="ink" size="sm">
            Start a project
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition hover:bg-tealTint xl:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[88px] overflow-y-auto border-t border-line bg-white transition-all duration-300 xl:hidden ${
          open ? 'visible opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="container-x py-6">
          <ul className="divide-y divide-line">
            {navLinks.map((link) =>
              link.group ? (
                <MobileGroup key={link.label} item={link} activeSlug={activeSlug} onNavigate={() => setOpen(false)} />
              ) : (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 font-display text-[22px] font-semibold tracking-tight text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className="mt-8 flex flex-col gap-4">
            <a href={company.phoneHref} className="inline-flex items-center gap-2 text-[16px] font-semibold text-ink">
              <Phone aria-hidden="true" className="h-[18px] w-[18px] text-teal" strokeWidth={2.2} />
              {company.phone}
            </a>
            <Button href="#contact" variant="ink" onClick={() => setOpen(false)}>
              Start a project
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
