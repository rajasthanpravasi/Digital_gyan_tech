/**
 * Renders a string where *wrapped words* become coral Instrument Serif italic.
 * "Putting your business on the *digital track.*"
 */
export default function Highlight({ text }) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return parts.map((part, i) =>
    part.startsWith('*') && part.endsWith('*') ? (
      <em
        key={i}
        className="font-serif font-normal italic tracking-normal text-coral"
        style={{ fontSize: '1.08em' }}
      >
        {part.slice(1, -1)}
      </em>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
