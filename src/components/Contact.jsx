import { useState } from 'react';
import { ChevronDown, Mail, MessageCircle, Phone, Send } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import { company, contact } from '../data';

const channels = [
  { icon: Phone, label: company.phone, href: company.phoneHref },
  { icon: Mail, label: company.email, href: company.emailHref },
  { icon: MessageCircle, label: 'Chat on WhatsApp', href: company.whatsappHref, external: true },
];

function Field({ id, label, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[14px] font-semibold text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact({ id = 'contact', defaultInterest, title, text }) {
  const [sent, setSent] = useState(false);

  // No backend: the form opens the visitor's email app with the enquiry pre-filled.
  // Swap this handler for your form service / API endpoint when you have one.
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const subject = `New enquiry: ${data.interest}`;
    const body = [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Interested in: ${data.interest}`,
      '',
      data.message,
    ].join('\n');
    window.location.href = `${company.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="bg-tealTint py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Left */}
        <Reveal>
          <SectionHeading id={`${id}-title`} eyebrow={contact.eyebrow} title={title ?? contact.title} />
          <p className="mt-6 max-w-[480px] text-[18px] leading-[1.7] text-muted">{text ?? contact.text}</p>

          <ul className="mt-10 space-y-4">
            {channels.map(({ icon: Icon, label, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group inline-flex items-center gap-4 text-[17px] font-semibold text-ink"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-card transition group-hover:-translate-y-0.5">
                    <Icon aria-hidden="true" className="h-5 w-5 text-tealDark" strokeWidth={2} />
                  </span>
                  <span className="border-b border-transparent transition-colors group-hover:border-ink">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right */}
        <Reveal delay={140}>
          <Card className="p-7 sm:p-10">
            <h3 className="text-[28px] leading-tight">{contact.form.title}</h3>
            <p className="mt-2 text-[15px] text-muted">Fields marked * are required.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <Field id="name" label="Full name *">
                <input id="name" name="name" type="text" autoComplete="name" required className="field" placeholder="Your name" />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="phone" label="Phone *">
                  <input id="phone" name="phone" type="tel" autoComplete="tel" required className="field" placeholder="+91" />
                </Field>
                <Field id="email" label="Email *">
                  <input id="email" name="email" type="email" autoComplete="email" required className="field" placeholder="you@company.com" />
                </Field>
              </div>
              <Field id="interest" label="I'm interested in">
                <div className="relative">
                  <select id="interest" name="interest" defaultValue={defaultInterest} key={defaultInterest} className="field cursor-pointer appearance-none pr-12">
                    {contact.form.interests.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-ink"
                  />
                </div>
              </Field>
              <Field id="message" label="Message">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="field h-auto resize-y py-3.5"
                  placeholder="Tell us about your business and goals"
                />
              </Field>
              <Button type="submit" variant="coral" className="w-full">
                Send message
                <Send aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={2.2} />
              </Button>
              <p role="status" className="min-h-[1.5em] text-center text-[14px] font-medium text-tealDark">
                {sent ? 'Thanks — your email app should open with your enquiry ready to send.' : ''}
              </p>
            </form>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
