import Highlight from './Highlight';

/**
 * Eyebrow label + H2 with highlighted serif words.
 */
export default function SectionHeading({ eyebrow, title, id, className = '', align = 'left' }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 id={id} className="text-h2 leading-[1.05]">
        <Highlight text={title} />
      </h2>
    </div>
  );
}
