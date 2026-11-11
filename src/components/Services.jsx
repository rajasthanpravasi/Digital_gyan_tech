import { ArrowUpRight, Code2, Megaphone, PenTool } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Reveal from './ui/Reveal';
import { servicePages, servicePath, services } from '../data';

// Each row links to its sub-page when one exists, otherwise to the contact form
const rowHref = (row) => {
  const page = servicePages.find((p) => p.title.toLowerCase() === row.toLowerCase());
  return page ? servicePath(page.slug) : '#contact';
};

const icons = { Code2, Megaphone, PenTool };

export default function Services() {
  return (
    <section aria-labelledby="services-title" className="bg-ivory py-28">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-20">
          <Reveal>
            <SectionHeading id="services-title" eyebrow={services.eyebrow} title={services.title} />
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-[420px] text-[18px] leading-[1.7] text-muted lg:ml-auto">{services.text}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.id} delay={i * 100} className="flex">
                <Card as="article" id={service.id} className="flex w-full scroll-mt-28 flex-col p-7 sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tealTint">
                      <Icon aria-hidden="true" className="h-6 w-6 text-tealDark" strokeWidth={2} />
                    </span>
                    <span className="font-display text-[15px] font-semibold text-muted">{service.number}</span>
                  </div>
                  <h3 className="mt-8 text-[26px] leading-tight">{service.title}</h3>
                  <p className="mt-3 text-[15.5px] leading-[1.65] text-muted">{service.text}</p>

                  <ul className="-mx-3 mt-7 border-t border-line pt-3">
                    {service.rows.map((row) => (
                      <li key={row}>
                        <a
                          href={rowHref(row)}
                          className="group flex items-center justify-between gap-4 rounded-2xl px-3 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-tealTint"
                        >
                          {row}
                          <ArrowUpRight
                            aria-hidden="true"
                            className="h-[18px] w-[18px] shrink-0 text-coral transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            strokeWidth={2.2}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
