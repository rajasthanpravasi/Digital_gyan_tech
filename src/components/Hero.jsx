import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './ui/Button';
import Highlight from './ui/Highlight';
import { hero } from '../data';

/**
 * Full-width image slider with text overlay.
 * Slides change automatically, with left / right arrows at the middle of each side,
 * swipe on touch screens, keyboard arrows, and a branded backdrop if an image fails to load.
 */
export default function Hero() {
  const { slides, autoplayMs = 6500 } = hero;
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState({});
  const [cycle, setCycle] = useState(0); // restarts the auto-change timer after a manual change
  const touchX = useRef(null);

  const go = useCallback(
    (next) => {
      setIndex(((next % count) + count) % count);
      setCycle((c) => c + 1);
    },
    [count]
  );

  // Automatic slide change
  useEffect(() => {
    const t = setTimeout(() => go(index + 1), autoplayMs);
    return () => clearTimeout(t);
  }, [index, cycle, autoplayMs, go]);

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
      </div>

      {/* Slides (text) — extra side padding keeps the text clear of the arrows */}
      <div className="container-x relative flex min-h-[520px] flex-col justify-center py-16 sm:min-h-[580px] lg:min-h-[min(680px,calc(100vh-88px))] !max-w-[1320px] !px-14 sm:!px-16 lg:!px-20">
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
                <Heading className="text-h1 leading-[1.05] text-white">
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

      {/* Arrows: middle-left and middle-right */}
      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-ink/30 text-white backdrop-blur-sm transition hover:border-coral hover:bg-coral hover:text-ink sm:left-3 sm:h-12 sm:w-12 lg:left-6"
      >
        <ChevronLeft aria-hidden="true" className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-ink/30 text-white backdrop-blur-sm transition hover:border-coral hover:bg-coral hover:text-ink sm:right-3 sm:h-12 sm:w-12 lg:right-6"
      >
        <ChevronRight aria-hidden="true" className="h-5 w-5" />
      </button>

      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {count}: {slides[index].tab}
      </p>
    </section>
  );
}