import { useState } from 'react';
import { ChevronDown, Mail, MessageCircle, Phone, Send } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import { company, contact } from '../data';

/*
 * FORM SETUP (one time):
 * 1. Go to https://web3forms.com, enter info@digitalgyantech.com and click "Create Access Key".
 * 2. The key arrives on that email. Paste it below.
 * Every enquiry is then emailed to that address straight from the website,
 * without the visitor needing an email app.
 */
const WEB3FORMS_ACCESS_KEY = '2c14b856-682d-4cac-a3f0-da064c94adb9';

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
  // status: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Hidden spam trap: real visitors never fill this in
    if (data.botcheck) return;

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.startsWith('PASTE_')) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New website enquiry: ${data.interest}`,
          from_name: 'Digital Gyan Technology website',
          name: data.name,
          phone: data.phone,
          email: data.email,
          interest: data.interest,
          message: data.message || '(no message)',
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const sending = status === 'sending';

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="bg-tealTint py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Left */}
        <Reveal>
          <SectionHeading id={`${id}-title`} title={title ?? contact.title} />
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
              {/* Spam trap (hidden from people) */}
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

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
              <Button type="submit" variant="coral" className="w-full" disabled={sending}>
                {sending ? 'Sending…' : 'Send message'}
                {!sending && <Send aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={2.2} />}
              </Button>
              <p
                role="status"
                className={`min-h-[1.5em] text-center text-[14px] font-medium ${
                  status === 'error' ? 'text-red-600' : 'text-tealDark'
                }`}
              >
                {status === 'success' && 'Thank you! Your enquiry has been sent. We will reply within one working day.'}
                {status === 'error' &&
                  `Sorry, your message could not be sent. Please call ${company.phone} or email ${company.email}.`}
              </p>
            </form>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}