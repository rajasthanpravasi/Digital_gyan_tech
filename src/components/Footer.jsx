import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';
import Logo from './ui/Logo';
import { company, footer } from '../data';

const socialIcons = { Facebook, Instagram, Linkedin, Youtube, Twitter };

function ColumnTitle({ children }) {
  return <h2 className="font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-tealDark">{children}</h2>;
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.1fr_1.2fr]">
        <div>
          <Logo className="h-20" />
          <p className="mt-6 max-w-[340px] text-[15px] leading-[1.7] text-muted">{footer.blurb}</p>
          <ul className="mt-7 flex gap-2.5">
            {footer.socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:-translate-y-0.5 hover:border-ink"
                  >
                    <Icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.9} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {footer.columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <ColumnTitle>{col.title}</ColumnTitle>
            <ul className="mt-6 space-y-3.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[15px] text-muted transition-colors hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <ColumnTitle>Get in touch</ColumnTitle>
          <ul className="mt-6 space-y-4 text-[15px]">
            <li>
              <a href={company.phoneHref} className="inline-flex items-center gap-3 text-muted transition-colors hover:text-ink">
                <Phone aria-hidden="true" className="h-4 w-4 text-tealDark" /> {company.phone}
              </a>
            </li>
            <li>
              <a href={company.emailHref} className="inline-flex items-center gap-3 break-all text-muted transition-colors hover:text-ink">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-tealDark" /> {company.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-3 text-muted">
              <Clock aria-hidden="true" className="h-4 w-4 text-tealDark" /> {company.hours}
            </li>
          </ul>
        </div>
      </div>


      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-7 text-[14px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <p>{footer.cities}</p>
        </div>
      </div>
    </footer>
  );
}
