import { ArrowRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { about } from '../data';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-20">
          <Reveal>
            <SectionHeading id="about-title" eyebrow={about.eyebrow} title={about.title} />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[18px] leading-[1.7] text-muted">{about.text}</p>
            <a
              href={about.link.href}
              className="group mt-7 inline-flex items-center gap-2 border-b-2 border-coral pb-1 text-[16px] font-semibold text-ink transition-colors hover:border-ink"
            >
              {about.link.label}
              <ArrowRight
                aria-hidden="true"
                className="h-[18px] w-[18px] transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>

        <dl className="mt-20 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {about.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 90}
              className={`flex flex-col-reverse pt-10 pb-2 sm:pr-8 ${
                i > 0 ? 'lg:border-l lg:border-line lg:pl-8' : ''
              } ${i % 2 === 1 ? 'sm:border-l sm:border-line sm:pl-8' : ''}`}
            >
              <dt className="mt-4 max-w-[220px] text-[15px] leading-snug text-muted">{stat.label}</dt>
              <dd className="font-display text-[52px] font-semibold leading-none tracking-tightest text-ink">
                {stat.value}
                {stat.suffix && <span className={stat.suffixClass}>{stat.suffix}</span>}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
