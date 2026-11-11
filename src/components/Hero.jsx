import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Button from './ui/Button';
import Highlight from './ui/Highlight';
import { hero } from '../data';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Full-width image slider with text overlay.
 * Autoplays (pauses on hover/focus, or with the pause button), swipeable, keyboard arrows,
 * and falls back to a branded backdrop if an image fails to load.
 */
export default function Hero() {
  const { slides, autoplayMs = 6500 } = hero;
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());
  const [hovered, setHovered] = useState(false);
  const [failed, setFailed] = useState({});
  const [cycle, setCycle] = useState(0); // restarts the progress bar animation
  const touchX = useRef(null);

  const go = useCallback(
    (next) => {
      setIndex(((next % count) + count) % count);
      setCycle((c) => c + 1);
    },
    [count]
  );

  const running = playing && !hovered;

  useEffect(() => {
    if (!running) return undefined;
    const t = setTimeout(() => go(index + 1), autoplayMs);
    return () => clearTimeout(t);
  }, [running, index, cycle, autoplayMs, go]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') go(index + 1);
    if (e.key === 'ArrowLeft') go(index - 1);
  };
  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 45) go(index + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  return (
    <section
      id="top"
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative isolate overflow-hidden bg-ink text-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setHovered(false)}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Fallback backdrop (visible if an image is missing) */}
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <svg className="absolute -right-24 -top-24 h-[520px] w-[520px]" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="96" stroke="#F26A3D" strokeOpacity=".35" />
          <circle cx="100" cy="100" r="66" stroke="#22B5C4" strokeOpacity=".35" />
        </svg>
      </div>

      {/* Images */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {slides.map((s, i) =>
          failed[i] ? null : (
            <img
              key={s.image}
              src={s.image}
              alt=""
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchpriority={i === 0 ? 'high' : undefined}
              onError={() => setFailed((f) => ({ ...f, [i]: true }))}
              className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1200ms] ease-out ${
                i === index ? 'scale-100 opacity-100' : 'scale-[1.06] opacity-0'
              }`}
            />
          )
        )}
        {/* Scrim for text legibility */}
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,34,51,.92)_0%,rgba(15,34,51,.7)_45%,rgba(15,34,51,.15)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(0deg,rgba(15,34,51,.85),transparent)]" />
      </div>

      {/* Slides (text) */}
      <div className="container-x relative flex min-h-[640px] flex-col justify-center pb-44 pt-20 sm:min-h-[700px] lg:min-h-[min(820px,calc(100vh-88px))]">
        <div className="grid">
          {slides.map((s, i) => {
            const active = i === index;
            const Heading = i === 0 ? 'h1' : 'h2';
            return (
              <div
                key={s.title}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}: ${s.tab}`}
                aria-hidden={!active}
                inert={active ? undefined : ''}
                className={`col-start-1 row-start-1 max-w-[720px] transition-all duration-700 ease-out ${
                  active ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
                }`}
              >
                <p className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
                  {s.eyebrow}
                </p>
                <Heading className="mt-7 text-h1 leading-[1.05] text-white">
                  <Highlight text={s.title} />
                </Heading>
                <p className="mt-7 max-w-[560px] text-[18px] leading-[1.65] text-white/80">{s.text}</p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button href={s.primaryCta.href} variant="coral" arrow>
                    {s.primaryCta.label}
                  </Button>
                  <Button
                    href={s.secondaryCta.href}
                    variant="outline"
                    className="!border-white/40 !bg-white/5 !text-white backdrop-blur-sm hover:!border-white hover:!bg-white/10"
                  >
                    {s.secondaryCta.label}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="container-x flex items-end justify-between gap-6 pb-8">
          {/* Tabs with progress */}
          <div role="tablist" aria-label="Choose slide" className="grid flex-1 grid-cols-5 gap-3 sm:gap-5">
            {slides.map((s, i) => {
              const active = i === index;
              return (
                <button
                  key={s.tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Slide ${i + 1}: ${s.tab}`}
                  onClick={() => go(i)}
                  className="group text-left"
                >
                  <span className="relative block h-[3px] overflow-hidden rounded-full bg-white/25">
                    <span
                      key={active ? `${cycle}-${running}` : 'idle'}
                      className={`absolute inset-y-0 left-0 rounded-full bg-coral ${
                        active ? (running ? 'animate-[heroProgress_linear_forwards]' : 'w-full') : i < index ? 'w-full bg-white/60' : 'w-0'
                      }`}
                      style={active && running ? { animationDuration: `${autoplayMs}ms` } : undefined}
                    />
                  </span>
                  <span
                    className={`mt-3 hidden text-[13px] font-semibold transition-colors md:block ${
                      active ? 'text-white' : 'text-white/55 group-hover:text-white/85'
                    }`}
                  >
                    <span className="mr-2 font-display text-coral">{String(i + 1).padStart(2, '0')}</span>
                    {s.tab}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Arrows + pause */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
              className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-white sm:flex"
            >
              {playing ? <Pause aria-hidden="true" className="h-4 w-4" /> : <Play aria-hidden="true" className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-white"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-coral text-ink transition hover:-translate-y-0.5"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {count}: {slides[index].tab}
      </p>
    </section>
  );
}
