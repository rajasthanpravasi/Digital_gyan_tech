import logoSrc from '../../assets/logo/digital-gyan-logo.png';

/**
 * Official Digital Gyan Technology logo (src/assets/logo/digital-gyan-logo.png).
 * To change the logo, replace that file — keep a transparent background.
 *
 * `className` sets the logo height, e.g. "h-16" (navbar) or "h-20" (footer).
 */
export default function Logo({ href = '#top', className = 'h-16' }) {
  return (
    <a href={href} className="inline-flex shrink-0 items-center" aria-label="Digital Gyan Technology — home">
      <img
        src={logoSrc}
        alt="Digital Gyan Technology"
        width="595"
        height="348"
        className={`w-auto select-none ${className}`}
        draggable="false"
      />
    </a>
  );
}
