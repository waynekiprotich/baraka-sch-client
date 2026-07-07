export default function Tile({ swatch = 'p1', bgImage, alt = '', label, title, wide, tall, onClick, className = '' }) {
  const classes = `tile ${swatch} ${wide ? 'wide' : ''} ${tall ? 'tall' : ''} ${onClick ? 'm-item' : ''} ${className}`.trim();
  const handleKeyDown = (e) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };
  return (
    <div 
      className={classes} 
      onClick={onClick} 
      onKeyDown={handleKeyDown} 
      role={onClick ? 'button' : undefined} 
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick && alt ? `View larger image: ${alt}` : undefined}
    >
      {bgImage && (
        <div 
          className="tile-bg-image" 
          role="img"
          aria-label={alt || "Baraka School Kapsabet Campus visual"}
          style={{ 
            position: 'absolute', 
            inset: 0, 
            zIndex: -1, 
            backgroundImage: `url(${bgImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }} 
        />
      )}
      {onClick && (
        <div className="zoom-icon" style={{ zIndex: 2 }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        </div>
      )}
      {label && <span style={{ zIndex: 1 }}>{label}</span>}
      {title && <h4 style={{ zIndex: 1 }}>{title}</h4>}
    </div>
  );
}