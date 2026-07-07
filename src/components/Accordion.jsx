import { useState } from 'react';

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`accordion-item ${isOpen ? 'open' : ''}`} key={item.q}>
            <button
              className="accordion-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              {item.q}
              <span className="plus"></span>
            </button>
            <div
              className="accordion-panel"
              style={{ maxHeight: isOpen ? '260px' : '0px' }}
            >
              <div className="accordion-panel-inner">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}