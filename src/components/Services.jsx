import { ArrowUpRight, Code2, Megaphone, PenTool } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Reveal from './ui/Reveal';
import { servicePath, services } from '../data';

// Row label -> sub-page slug. Rows with no sub-page go to the contact form.
const rowSlugs = {
  'IT Consulting': 'it-consulting',
  'Application Development & Maintenance': 'application-development-maintenance',
  'Mobility': 'mobility',
  'E-Commerce': 'e-commerce',
  'UI/UX': 'ui-ux',
  'Branding': 'branding',
  'Content Marketing': 'content-marketing',
  'Digital Analytics': 'digital-analytics',
  'Lead Generation': 'lead-generation',
  'Logo Design': 'logo-design',
  'Video Creation': 'video-creation',
  'Brochure Design': 'brochure-design',
  'Catalog Design': 'catalog-design',
  'Menu Design': 'menu-design',
};

const rowHref = (row) => (rowSlugs[row] ? servicePath(rowSlugs[row]) : '#contact');

const icons = { Code2, Megaphone, PenTool };

export default function Services() {
  return (
    <section aria-labelledby="services-title" className="bg-ivory py-20 sm:py-24">
      <div className="container-x !max-w-[1320px] !px-5 sm:!px-7 lg:!px-10">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
          <Reveal>
            <SectionHeading id="services-title" title={services.title} />
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-[420px] text-[18px] leading-[1.7] text-muted lg:ml-auto">{services.text}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.id} delay={i * 100} className="flex">
                <Card as="article" id={service.id} className="flex w-full scroll-mt-28 flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tealTint">
                      <Icon aria-hidden="true" className="h-6 w-6 text-tealDark" strokeWidth={2} />
                    </span>
                    <span className="font-display text-[15px] font-semibold text-muted">{service.number}</span>
                  </div>
                  <h3 className="mt-6 text-[26px] leading-tight">{service.title}</h3>
                  <p className="mt-3 text-[15.5px] leading-[1.65] text-muted">{service.text}</p>

                  <ul className="-mx-3 mt-5 border-t border-line pt-3">
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