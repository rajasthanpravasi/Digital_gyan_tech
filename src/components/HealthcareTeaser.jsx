import { HeartPulse } from 'lucide-react';
import Button from './ui/Button';
import Highlight from './ui/Highlight';
import Reveal from './ui/Reveal';
import { healthcare, ourClients } from '../data';

/**
 * Short band on the home page that links to the full Healthcare page (#/healthcare).
 */
export default function HealthcareTeaser() {
  const logos = healthcare.clientNames
    .slice(0, 6)
    .map((n) => ourClients.logos.find((l) => l.name === n))
    .filter(Boolean);
  const total = healthcare.clientNames.length;

  return (
    <section id="healthcare" aria-labelledby="hc-teaser-title" className="bg-white py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-ink px-7 py-12 text-white sm:px-12 lg:py-14">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
            <svg aria-hidden="true" className="absolute -right-24 -top-24 h-80 w-80" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="96" stroke="#22B5C4" strokeOpacity=".25" />
              <circle cx="100" cy="100" r="66" stroke="#F26A3D" strokeOpacity=".3" />
            </svg>

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
              <div>
                <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-teal">
                  <HeartPulse aria-hidden="true" className="h-4 w-4 text-coral" strokeWidth={2.2} />
                  Healthcare Digital Marketing
                </p>
                <h2 id="hc-teaser-title" className="mt-6 text-[clamp(30px,3.6vw,46px)] leading-[1.08] text-white">
                  <Highlight text={healthcare.title} />
                </h2>
                <p className="mt-5 max-w-[560px] text-[17px] leading-[1.7] text-white/70">{healthcare.tagline}</p>
                <div className="mt-8">
                  <Button href={healthcare.path} variant="coral" arrow>
                    Explore healthcare marketing
                  </Button>
                </div>
              </div>

              <div>
                <ul className="grid grid-cols-3 gap-3 sm:gap-4">
                  {logos.map((l) => (
                    <li key={l.name}>
                      <div title={l.name} className="flex aspect-square items-center justify-center rounded-full bg-white">
                        <img src={l.src} alt={l.name} loading="lazy" className="max-h-[50%] max-w-[72%] object-contain" />
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-center text-[14px] text-white/65">
                  <span className="font-display text-[18px] font-semibold text-white">{total}+</span> hospitals, clinics &amp; doctors trust us
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
