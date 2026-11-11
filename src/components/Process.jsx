import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { process } from '../data';

export default function Process({ className = 'bg-white' }) {
  return (
    <section aria-labelledby="process-title" className={`${className} py-28`}>
      <div className="container-x">
        <Reveal className="max-w-[720px]">
          <SectionHeading id="process-title" eyebrow={process.eyebrow} title={process.title} />
        </Reveal>

        <ol className="relative mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* horizontal track (desktop) */}
          <span aria-hidden="true" className="absolute left-0 right-0 top-[7px] hidden h-px bg-line lg:block" />
          {process.steps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 110} className="relative pl-8 lg:pl-0 lg:pr-6">
              {/* vertical track (mobile) */}
              {i < process.steps.length - 1 && (
                <span aria-hidden="true" className="absolute bottom-[-48px] left-[7px] top-4 w-px bg-line sm:hidden" />
              )}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-[15px] w-[15px] rounded-full border-[3px] border-white bg-coral ring-1 ring-coral lg:relative lg:block"
              />
              <p className="font-display text-[14px] font-semibold text-tealDark lg:mt-8">{step.number}</p>
              <h3 className="mt-2 text-[24px] leading-tight">{step.title}</h3>
              <p className="mt-3 text-[15.5px] leading-[1.65] text-muted">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
