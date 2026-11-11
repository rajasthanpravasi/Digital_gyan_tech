import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Reveal from './ui/Reveal';
import { work } from '../data';

const tiles = ['bg-peach', 'bg-tealSoft'];

/* ===== CHANGED: NEW COMPONENT (added) =====
 * Card picture: project image (fills tile) → client logo on a white panel → monogram letters.
 * Falls back automatically if an image fails to load.
 */
function ProjectVisual({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  if (project.image && !imageFailed) {
    return (
      <>
        <img
          src={project.image}
          alt={`${project.name} — ${project.subtitle}`}
          loading="lazy"
          onError={() => setImageFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(15,34,51,.25),transparent)]" />
      </>
    );
  }

  if (project.logo && !logoFailed) {
    return (
      <span className="mt-10 flex h-[52%] w-[72%] items-center justify-center rounded-3xl bg-white p-5 shadow-card transition-transform duration-500 group-hover:scale-[1.03] sm:mt-6 sm:h-[58%] sm:p-8">
        <img
          src={project.logo}
          alt={`${project.name} logo`}
          loading="lazy"
          onError={() => setLogoFailed(true)}
          className="max-h-full max-w-full object-contain"
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="font-serif text-[clamp(96px,12vw,150px)] italic leading-none text-ink/85 transition-transform duration-500 group-hover:scale-105"
    >
      {project.monogram}
    </span>
  );
}
/* ===== END NEW COMPONENT ===== */

/**
 * "Selected projects" — filterable horizontal slider.
 * Swipe on touch, scroll with trackpad, or use the arrow buttons / keyboard arrows.
 */
export default function Work() {
  const [active, setActive] = useState('All');
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [progress, setProgress] = useState(0);
  const trackRef = useRef(null);

  const visible = work.projects.filter((p) => active === 'All' || p.category === active);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
    setProgress(max > 0 ? el.scrollLeft / max : 1);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: 0 });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [active, update]);

  const slide = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('li');
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      slide(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      slide(-1);
    }
  };

  const arrowBtn =
    'flex h-12 w-12 items-center justify-center rounded-full border transition disabled:cursor-not-allowed disabled:opacity-35';

  return (
    <section id="work" aria-labelledby="work-title" className="overflow-hidden bg-ivory py-28">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading id="work-title" eyebrow={work.eyebrow} title={work.title} />
          </Reveal>
          <Reveal delay={120}>
            <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
              {work.filters.map((f) => {
                const isActive = f === active;
                return (
                  <button
                    key={f}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActive(f)}
                    className={`h-11 rounded-full px-5 text-[14px] font-semibold transition ${
                      isActive ? 'bg-ink text-white' : 'border border-line bg-white text-ink hover:border-ink/40'
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <ul
            ref={trackRef}
            onScroll={update}
            onKeyDown={onKeyDown}
            tabIndex={0}
            aria-label="Projects carousel"
            aria-live="polite"
            className="no-scrollbar -mx-2 mt-14 flex snap-x snap-mandatory scroll-px-2 gap-6 overflow-x-auto scroll-smooth px-2 pb-8 pt-2 focus-visible:outline-offset-4"
          >
            {visible.map((project) => {
              const index = work.projects.indexOf(project);
              return (
                <li
                  key={project.name}
                  className="w-[86%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((100%-48px)/2.5)]"
                >
                  <Card
                    as="article"
                    className="group h-full overflow-hidden p-3 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <div
                      className={`relative flex aspect-[16/11] items-center justify-center overflow-hidden rounded-[18px] ${
                        tiles[index % 2]
                      }`}
                    >
                      {/* CHANGED: picture (image → logo → letters) replaces the old monogram <span> */}
                      <ProjectVisual project={project} />
                      {/* CHANGED: added z-10 and shadow-sm so the label sits on top of photos */}
                      <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3.5 py-1.5 text-[12.5px] font-semibold text-ink shadow-sm">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-4 px-3 pb-3 pt-5">
                      <div>
                        <h3 className="text-[21px] leading-tight">{project.name}</h3>
                        <p className="mt-1 text-[14.5px] text-muted">{project.subtitle}</p>
                      </div>
                      <a
                        href="#contact"
                        aria-label={`Ask about the ${project.name} project`}
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-ink transition hover:border-coral hover:bg-coral"
                      >
                        <ArrowUpRight aria-hidden="true" className="h-5 w-5" strokeWidth={2.2} />
                      </a>
                    </div>
                  </Card>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* Controls */}
        <div className="mt-2 flex items-center gap-6">
          <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-line" aria-hidden="true">
            <span
              className="absolute inset-y-0 left-0 rounded-full bg-ink transition-[width] duration-200"
              style={{ width: `${Math.max(12, progress * 100)}%` }}
            />
          </div>
          <span className="font-display text-[14px] font-semibold text-muted" aria-live="polite">
            {String(visible.length).padStart(2, '0')} {visible.length === 1 ? 'project' : 'projects'}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => slide(-1)}
              disabled={!canPrev}
              aria-label="Previous projects"
              className={`${arrowBtn} border-line bg-white text-ink enabled:hover:border-ink`}
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => slide(1)}
              disabled={!canNext}
              aria-label="Next projects"
              className={`${arrowBtn} border-ink bg-ink text-white enabled:hover:-translate-y-0.5`}
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}