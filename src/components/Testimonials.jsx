import { Quote } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Reveal from './ui/Reveal';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-white py-28">
      <div className="container-x">
        <Reveal className="max-w-[720px]">
          <SectionHeading id="testimonials-title" eyebrow={testimonials.eyebrow} title={testimonials.title} />
        </Reveal>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.items.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 90} className="flex">
              <Card as="figure" className="flex w-full flex-col p-7">
                <Quote aria-hidden="true" className="h-8 w-8 fill-teal text-teal" strokeWidth={1.5} />
                <h3 className="mt-6 text-[19px] leading-snug">{t.title}</h3>
                <blockquote className="mt-3 flex-1 text-[15px] leading-[1.65] text-muted">
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-peach font-display text-[13px] font-semibold text-ink"
                  >
                    {t.initials}
                  </span>
                  <span className="text-[14px] leading-tight">
                    <span className="block font-semibold text-ink">{t.name}</span>
                    <span className="text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </Card>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
