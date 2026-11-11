import { useEffect } from 'react';
import { ArrowUpRight, Check, ChevronRight, Phone } from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';
import Highlight from './ui/Highlight';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import serviceIcons from './ui/serviceIcons';
import Process from './Process';
import Contact from './Contact';
import { company, serviceGroups, servicePages, servicePath } from '../data';

const scrollToForm = () => document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' });

/**
 * One template for every dropdown sub-page (IT Consulting, Branding, Logo Design …).
 * All copy comes from `servicePages` in data.js.
 */
export default function ServicePage({ page }) {
  const group = serviceGroups.find((g) => g.id === page.group);
  const siblings = servicePages.filter((p) => p.group === page.group);
  const others = serviceGroups.filter((g) => g.id !== page.group);
  const Icon = serviceIcons[page.icon];

  // Lead-generation enquiries get their own option in the form
  const interest = page.slug === 'lead-generation' ? 'Lead generation' : page.slug === 'e-commerce' ? 'Website development' : group.interest;

  useEffect(() => {
    document.title = `${page.title} — Digital Gyan Technology`;
    return () => {
      document.title = 'Digital Gyan Technology — IT, Marketing & Design';
    };
  }, [page]);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section aria-labelledby="service-title" className="overflow-hidden bg-white">
        <div className="container-x pb-28 pt-10 lg:pt-12">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13.5px] font-medium text-muted">
              <li>
                <a href="#top" className="transition-colors hover:text-ink">Home</a>
              </li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
              <li>
                <a href={`#${group.id}`} className="transition-colors hover:text-ink">{group.label}</a>
              </li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
              <li aria-current="page" className="text-ink">{page.title}</li>
            </ol>
          </nav>

          <div className="mt-12 grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <Reveal key={page.slug}>
              <p className="inline-flex items-center gap-2.5 rounded-full bg-tealTint px-4 py-2 text-[13px] font-semibold text-tealDark">
                <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
                {group.label} · {page.title}
              </p>
              <h1 id="service-title" className="mt-7 text-[clamp(38px,5vw,64px)] leading-[1.05]">
                <Highlight text={page.headline} />
              </h1>
              <p className="mt-7 max-w-[540px] text-[18px] leading-[1.65] text-muted">{page.intro}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant="coral" arrow onClick={scrollToForm}>
                  Get a free consultation
                </Button>
                <Button href={company.phoneHref} variant="outline">
                  <Phone aria-hidden="true" className="h-[18px] w-[18px] text-tealDark" strokeWidth={2.2} />
                  {company.phone}
                </Button>
              </div>
            </Reveal>

            {/* Panel: this studio's services */}
            <Reveal delay={150}>
              <div className="relative overflow-hidden rounded-[32px] bg-tealTint p-5 sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-60"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(11,107,117,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(11,107,117,.08) 1px, transparent 1px)',
                    backgroundSize: '44px 44px',
                  }}
                />
                <svg aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="96" stroke="#F26A3D" strokeOpacity=".55" />
                  <circle cx="100" cy="100" r="66" stroke="#F26A3D" strokeOpacity=".55" />
                </svg>

                <div className="relative rounded-3xl border border-line bg-white p-5 shadow-lift sm:p-6">
                  <div className="flex items-center gap-4 border-b border-line pb-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-coral">
                      <Icon aria-hidden="true" className="h-6 w-6 text-ink" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-tealDark">{group.label}</p>
                      <p className="mt-1 font-display text-[18px] font-semibold tracking-tight text-ink">{siblings.length} specialist services</p>
                    </div>
                  </div>
                  <ul className="-mx-2 mt-3">
                    {siblings.map((s) => {
                      const SIcon = serviceIcons[s.icon];
                      const current = s.slug === page.slug;
                      return (
                        <li key={s.slug}>
                          <a
                            href={servicePath(s.slug)}
                            aria-current={current ? 'page' : undefined}
                            className={`group flex items-center gap-3 rounded-2xl px-2 py-2.5 transition-colors ${
                              current ? 'bg-tealTint' : 'hover:bg-ivory'
                            }`}
                          >
                            <SIcon aria-hidden="true" className="h-[18px] w-[18px] shrink-0 text-tealDark" strokeWidth={2} />
                            <span className={`flex-1 text-[15px] ${current ? 'font-semibold text-ink' : 'font-medium text-muted group-hover:text-ink'}`}>
                              {s.title}
                            </span>
                            {current ? (
                              <span className="rounded-full bg-white px-2.5 py-0.5 text-[11.5px] font-semibold text-tealDark">You’re here</span>
                            ) : (
                              <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-coral opacity-0 transition-opacity group-hover:opacity-100" />
                            )}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- What's included ---------- */}
      <section aria-labelledby="included-title" className="bg-ivory py-28">
        <div className="container-x">
          <Reveal className="max-w-[720px]">
            <SectionHeading id="included-title" eyebrow="What’s included" title={`${page.title}, *done properly.*`} />
          </Reveal>
          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {page.offerings.map((o, i) => (
              <Reveal as="li" key={`${page.slug}-${o.title}`} delay={i * 90} className="flex">
                <Card as="article" className="flex w-full flex-col p-7">
                  <span className="font-display text-[15px] font-semibold text-coral">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-6 text-[20px] leading-snug">{o.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-muted">{o.text}</p>
                </Card>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Why us ---------- */}
      <section aria-labelledby="why-title" className="bg-white py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeading id="why-title" eyebrow="Why Digital Gyan" title="What you can *count on.*" />
            <p className="mt-6 max-w-[460px] text-[17px] leading-[1.7] text-muted">
              One ISO-certified team across Pune, Jaipur and Dubai — so strategy, design, build and marketing all stay
              connected.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="divide-y divide-line rounded-3xl border border-line bg-white px-6 shadow-card sm:px-8">
              {page.benefits.map((b) => (
                <li key={b} className="flex items-center gap-4 py-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tealTint">
                    <Check aria-hidden="true" className="h-4 w-4 text-tealDark" strokeWidth={3} />
                  </span>
                  <span className="text-[16px] font-medium text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Process className="bg-ivory" />

      {/* ---------- Explore other studios ---------- */}
      <section aria-labelledby="explore-title" className="bg-white py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="explore-title" eyebrow="Explore more" title="Need the *whole journey?*" />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {others.map((g, i) => {
              const list = servicePages.filter((p) => p.group === g.id);
              return (
                <Reveal key={g.id} delay={i * 100} className="flex">
                  <Card className="w-full p-7 sm:p-9">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-[26px] leading-tight">{g.label}</h3>
                      <a href={`#${g.id}`} className="text-[14px] font-semibold text-tealDark hover:text-ink">Overview</a>
                    </div>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {list.map((p) => (
                        <li key={p.slug}>
                          <a
                            href={servicePath(p.slug)}
                            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-ivory px-4 py-2 text-[14px] font-medium text-ink transition hover:border-coral hover:bg-white"
                          >
                            {p.title}
                            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 text-coral" />
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

      <Contact
        id="enquire"
        defaultInterest={interest}
        title={`Let’s talk about *${page.title.toLowerCase() === 'ui/ux' ? 'UI/UX' : page.title}.*`}
        text="Tell us a little about your business and goals. We reply within one working day, Monday to Saturday, 9am–6pm."
      />
    </>
  );
}
