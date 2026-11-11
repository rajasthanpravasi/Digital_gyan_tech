import Button from './ui/Button';
import Reveal from './ui/Reveal';
import { cta } from '../data';

export default function CtaBanner() {
  return (
    <section aria-labelledby="cta-title" className="bg-white py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-coral px-7 py-14 sm:px-14 sm:py-16">
            <svg
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-80 w-80"
              viewBox="0 0 200 200"
              fill="none"
            >
              <circle cx="100" cy="100" r="96" stroke="#0F2233" strokeOpacity=".14" />
              <circle cx="100" cy="100" r="66" stroke="#0F2233" strokeOpacity=".14" />
            </svg>
            <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <h2 id="cta-title" className="max-w-[720px] text-[clamp(30px,3.6vw,46px)] leading-[1.08] text-ink">
                {cta.title}
              </h2>
              <Button href={cta.button.href} variant="white" arrow className="shrink-0">
                {cta.button.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
