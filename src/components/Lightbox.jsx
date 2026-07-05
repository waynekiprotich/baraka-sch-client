export default function Lightbox({ open, swatchClass, caption, onClose }) {
  return (
    <div className={`lightbox ${open ? 'open' : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={`box tile ${swatchClass || 'p1'}`}></div>
      <button className="lb-close btn btn-sm btn-secondary" onClick={onClose}>Close ✕</button>
      <div className="lb-cap">{caption}</div>
    </div>
  );
}
