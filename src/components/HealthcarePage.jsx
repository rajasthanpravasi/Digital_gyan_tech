import { useEffect, useState } from 'react';
import {
  CalendarHeart,
  ChevronRight,
  FileText,
  Fingerprint,
  HeartPulse,
  MessageCircle,
  Mic,
  MonitorSmartphone,
  Phone,
  SearchCheck,
  Send,
  Share2,
  Stethoscope,
  Target,
} from 'lucide-react';
import Button from './ui/Button';
import Highlight from './ui/Highlight';
import Reveal from './ui/Reveal';
import Contact from './Contact';
import { company, healthcare } from '../data';

const icons = { Share2, Fingerprint, MonitorSmartphone, Target, FileText, SearchCheck, Mic, CalendarHeart };

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

/* Heartbeat line motif */
function Pulse({ className = '' }) {
  return (
    <svg viewBox="0 0 480 80" fill="none" className={className} aria-hidden="true" preserveAspectRatio="none">
      <path d="M0 44h150l14-26 18 52 16-62 16 50 10-14h256" stroke="#F26A3D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Healthcare page (#/healthcare).
 * Every piece of text comes from `healthcare` in data.js, in the same order as the content brief.
 */
export default function HealthcarePage() {
  const { hero, intro, partner, services, experience, vision, closing } = healthcare;
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    document.title = 'Healthcare — Digital Gyan Technology';
    return () => {
      document.title = 'Digital Gyan Technology — IT, Marketing & Design';
    };
  }, []);

  return (
    <>
      {/* ---------- 1. Transforming Healthcare Through Digital Innovation ---------- */}
      <section aria-labelledby="hc-title" className="overflow-hidden bg-white">
        <div className="container-x pb-28 pt-10 lg:pt-12">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[13.5px] font-medium text-muted">
              <li><a href="#top" className="hover:text-ink">Home</a></li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
              <li aria-current="page" className="text-ink">Healthcare</li>
            </ol>
          </nav>

          <div className="mt-12 grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full bg-tealTint px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-tealDark">
                <HeartPulse aria-hidden="true" className="h-4 w-4 text-coral" strokeWidth={2.2} />
                {healthcare.brand}
              </p>
              <h1 id="hc-title" className="mt-7 text-[clamp(38px,5.2vw,68px)] leading-[1.05]">
                <Highlight text={healthcare.title} />
              </h1>
              <p className="mt-7 font-display text-[20px] font-semibold leading-snug tracking-tight text-ink">
                {healthcare.tagline}
              </p>
              <p className="mt-5 max-w-[560px] text-[17px] leading-[1.7] text-muted">{intro[0]}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant="coral" arrow onClick={() => scrollTo('enquire')}>
                  Get in touch
                </Button>
                <Button href={company.whatsappHref} target="_blank" rel="noopener noreferrer" variant="outline">
                  <MessageCircle aria-hidden="true" className="h-[18px] w-[18px] text-tealDark" strokeWidth={2.2} />
                  WhatsApp us
                </Button>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative aspect-[4/4.2] overflow-hidden rounded-[32px] bg-tealTint sm:aspect-[4/3.4] lg:aspect-[4/4.4]">
                {!imgFailed && hero.image ? (
                  <img
                    src={hero.image}
                    alt={hero.imageAlt}
                    onError={() => setImgFailed(true)}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(11,107,117,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(11,107,117,.08) 1px, transparent 1px)',
                        backgroundSize: '44px 44px',
                      }}
                    />
                    <Stethoscope className="relative h-28 w-28 text-tealDark/30" strokeWidth={1.2} />
                  </div>
                )}
                <svg aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="96" stroke="#fff" strokeOpacity=".7" />
                  <circle cx="100" cy="100" r="66" stroke="#fff" strokeOpacity=".7" />
                </svg>
                <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 px-5 py-4 shadow-lift">
                  <Pulse className="h-8 w-full" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Intro (paragraphs 2 & 3) ---------- */}
      <section aria-label="About our healthcare work" className="border-y border-line bg-ivory py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="font-display text-[clamp(22px,2.4vw,30px)] font-semibold leading-[1.3] tracking-tight text-ink">
              {intro[1]}
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:pt-2">
            <p className="text-[18px] leading-[1.75] text-muted">{intro[2]}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- 2. Your Complete Digital Marketing Partner for Healthcare ---------- */}
      <section aria-labelledby="hc-partner" className="relative overflow-hidden bg-ink py-28 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'linear-gradient(to bottom, #000 0%, transparent 70%)',
            WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, transparent 70%)',
          }}
        />
        <div className="container-x relative">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-20">
            <Reveal>
              <h2 id="hc-partner" className="text-h2 leading-[1.05] text-white">
                <Highlight text={partner.title} />
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-[440px] text-[17px] leading-[1.7] text-white/70 lg:ml-auto">{partner.text}</p>
            </Reveal>
          </div>

          <Reveal>
            <p className="mt-16 text-[13px] font-semibold uppercase tracking-[0.16em] text-teal">{partner.servicesLabel}</p>
          </Reveal>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = icons[s.icon];
              return (
                <Reveal as="li" key={s.title} delay={(i % 4) * 80} className="flex">
                  <article className="group flex w-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-teal/50 hover:bg-white/[0.07]">
                    <div className="flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/15 transition-colors group-hover:bg-coral">
                        <Icon aria-hidden="true" className="h-[22px] w-[22px] text-teal transition-colors group-hover:text-ink" strokeWidth={2} />
                      </span>
                      <span className="font-display text-[14px] font-semibold text-white/40">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="mt-7 font-display text-[19px] font-semibold leading-snug tracking-tight text-white">{s.title}</h3>
                    <p className="mt-3 text-[15px] leading-[1.65] text-white/65">{s.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---------- 3 & 4. Our Experience / More Than Marketing ---------- */}
      <section aria-label="Our experience and vision" className="bg-white py-28">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Reveal className="flex">
            <article className="flex w-full flex-col rounded-[32px] bg-tealTint p-8 sm:p-12">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                <Stethoscope aria-hidden="true" className="h-6 w-6 text-tealDark" strokeWidth={2} />
              </span>
              <h2 className="mt-8 text-[clamp(30px,3.4vw,44px)] leading-[1.08]">
                <Highlight text={experience.title} />
              </h2>
              <div className="mt-6 space-y-4 text-[16.5px] leading-[1.75] text-muted">
                {experience.text.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={120} className="flex">
            <article className="relative flex w-full flex-col overflow-hidden rounded-[32px] border border-line bg-white p-8 shadow-card sm:p-12">
              <svg aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="96" stroke="#F26A3D" strokeOpacity=".35" />
                <circle cx="100" cy="100" r="66" stroke="#F26A3D" strokeOpacity=".35" />
              </svg>
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-coral">
                <HeartPulse aria-hidden="true" className="h-6 w-6 text-ink" strokeWidth={2} />
              </span>
              <h2 className="relative mt-8 text-[clamp(30px,3.4vw,44px)] leading-[1.08]">
                <Highlight text={vision.title} />
              </h2>
              <div className="relative mt-6 space-y-4 text-[16.5px] leading-[1.75] text-muted">
                {vision.text.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ---------- 5. Closing statement ---------- */}
      <section aria-labelledby="hc-closing" className="bg-ivory py-28">
        <Reveal className="container-x text-center">
          <p className="font-logo text-[14px] font-semibold uppercase tracking-[0.32em] text-tealDark">{closing.brand}</p>
          <h2 id="hc-closing" className="mx-auto mt-6 max-w-[900px] text-h2 leading-[1.05]">
            <Highlight text={closing.title} />
          </h2>
          <p className="mt-6 font-serif text-[clamp(20px,2.2vw,28px)] italic text-muted">{closing.subtitle}</p>
          <Pulse className="mx-auto mt-8 h-10 w-[260px]" />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="ink" arrow onClick={() => scrollTo('enquire')}>
              Get in touch
            </Button>
            <Button href={company.phoneHref} variant="outline">
              <Phone aria-hidden="true" className="h-[18px] w-[18px] text-tealDark" strokeWidth={2.2} />
              {company.phone}
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Enquiry form */}
      <Contact id="enquire" defaultInterest="Healthcare marketing" />

      {/* ---------- Mobile sticky action bar ---------- */}
      <div className="h-[76px] lg:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-3 py-3 shadow-[0_-10px_30px_-20px_rgba(15,34,51,.4)] lg:hidden">
        <div className="grid grid-cols-3 gap-2">
          <a href={company.phoneHref} className="flex h-12 items-center justify-center gap-2 rounded-full border border-line text-[14px] font-semibold text-ink">
            <Phone aria-hidden="true" className="h-4 w-4 text-tealDark" /> Call
          </a>
          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center gap-2 rounded-full border border-line text-[14px] font-semibold text-ink"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4 text-tealDark" /> WhatsApp
          </a>
          <button
            type="button"
            onClick={() => scrollTo('enquire')}
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-coral text-[14px] font-semibold text-ink"
          >
            <Send aria-hidden="true" className="h-4 w-4" /> Enquire
          </button>
        </div>
      </div>
    </>
  );
}
