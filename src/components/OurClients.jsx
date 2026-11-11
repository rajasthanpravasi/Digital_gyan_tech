import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { ourClients } from '../data';

/**
 * "Our Clients" — heading on the left, grid of round logo badges on the right.
 * Logos keep their original colours; sizing adapts to wide or square logos.
 */
export default function OurClients() {
  const { logos, initialCount = 12 } = ourClients;
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? logos : logos.slice(0, initialCount);
  const hasMore = logos.length > initialCount;

  return (
    <section id="our-clients" aria-labelledby="our-clients-title" className="bg-ivory py-28">
      <div className="container-x grid items-start gap-14 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-32">
          <SectionHeading id="our-clients-title" eyebrow={ourClients.eyebrow} title={ourClients.title} />
          <p className="mt-6 max-w-[380px] text-[17px] leading-[1.7] text-muted">{ourClients.text}</p>
          <p className="mt-8 font-display text-[44px] font-semibold leading-none tracking-tightest text-ink">
            500<span className="text-coral">+</span>
            <span className="mt-2 block font-sans text-[14px] font-medium tracking-normal text-muted">
              businesses served
            </span>
          </p>
        </Reveal>

        <div>
          <ul id="client-logos" className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-6">
            {visible.map((logo, i) => (
              <Reveal as="li" key={logo.name} delay={(i % 4) * 70}>
                <div
                  title={logo.name}
                  className="group mx-auto flex aspect-square w-full max-w-[190px] items-center justify-center rounded-full border border-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lift"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    className={`max-h-[48%] max-w-[74%] object-contain transition duration-300 group-hover:scale-105 ${
                      logo.boxed ? 'rounded-lg' : ''
                    }`}
                    style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
                  />
                </div>
              </Reveal>
            ))}
          </ul>

          {hasMore && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                aria-expanded={showAll}
                aria-controls="client-logos"
                className="group inline-flex h-14 items-center gap-2 rounded-full border border-ink/20 bg-white px-7 text-[16px] font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink"
              >
                {showAll ? 'Show fewer' : `View all ${logos.length} clients`}
                <ChevronDown
                  aria-hidden="true"
                  className={`h-[18px] w-[18px] transition-transform ${showAll ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
