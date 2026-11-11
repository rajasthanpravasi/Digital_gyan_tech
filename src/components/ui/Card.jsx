/**
 * White rounded card with a 1px line border and soft shadow.
 */
export default function Card({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`rounded-3xl border border-line bg-white shadow-card ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
