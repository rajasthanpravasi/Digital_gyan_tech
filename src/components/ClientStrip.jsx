import { clients } from '../data';

export default function ClientStrip() {
  return (
    <section id="clients" aria-label="Our clients" className="border-y border-line bg-ivory">
      <div className="container-x flex flex-col items-center gap-8 py-12">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">{clients.label}</p>
        <ul className="flex w-full flex-wrap items-center justify-center gap-x-12 gap-y-6 xl:justify-between">
          {clients.names.map((c) => (
            <li
              key={c.name}
              className={`whitespace-nowrap font-semibold text-[#6B7385] transition-colors hover:text-ink ${c.className}`}
            >
              {c.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
