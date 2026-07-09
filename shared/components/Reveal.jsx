import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, dir = 'up', delay = 0, as = 'div', className = '', ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const dirClass = dir === 'left' ? 'reveal-left' : dir === 'right' ? 'reveal-right' : '';

  return (
    <Tag
      ref={ref}
      className={`reveal ${dirClass} ${inView ? 'in' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}