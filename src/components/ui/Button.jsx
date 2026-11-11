import { ArrowRight } from 'lucide-react';

const variants = {
  coral: 'bg-coral text-ink shadow-coral hover:bg-[#F47A50]',
  ink: 'bg-ink text-white hover:bg-[#1A3348]',
  outline: 'border border-ink/20 bg-white text-ink hover:border-ink',
  white: 'bg-white text-ink hover:bg-ivory',
};

/**
 * Pill button. Renders an <a> when `href` is set, otherwise a <button>.
 */
export default function Button({
  href,
  variant = 'coral',
  arrow = false,
  size = 'lg',
  className = '',
  children,
  ...rest
}) {
  const sizing = size === 'sm' ? 'h-12 px-6 text-[15px]' : 'h-14 px-7 text-[16px]';
  const classes = `group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 ${sizing} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={2.2}
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
