import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { about } from '../data';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-20">
          <Reveal>
            <SectionHeading id="about-title" title={about.title} />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[18px] leading-[1.7] text-muted">{about.text}</p>
          </Reveal>
        </div>

        <dl className="mt-20 grid grid-cols-1 border-t border-line sm:grid-cols-3">
          {about.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 90}
              className={`flex flex-col-reverse pt-10 pb-2 sm:pr-8 ${
                i > 0 ? 'sm:border-l sm:border-line sm:pl-8' : ''
              }`}
            >
              <dt className="mt-4 max-w-[220px] text-[15px] leading-snug text-muted">
                {stat.label}
              </dt>
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