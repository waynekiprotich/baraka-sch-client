export default function Tile({ swatch = 'p1', label, title, wide, tall, onClick, className = '' }) {
  const classes = `tile ${swatch} ${wide ? 'wide' : ''} ${tall ? 'tall' : ''} ${onClick ? 'm-item' : ''} ${className}`.trim();
  const handleKeyDown = (e) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };
  return (
    <div className={classes} onClick={onClick} onKeyDown={handleKeyDown} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}>
      {onClick && (
        <div className="zoom-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        </div>
      )}
      {label && <span>{label}</span>}
      {title && <h4>{title}</h4>}
    </div>
  );
}
