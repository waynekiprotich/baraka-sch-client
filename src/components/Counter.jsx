import { useEffect, useRef, useState } from 'react';

export default function Counter({ target, suffix = '', duration = 1400 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (t) => {
              const p = Math.min((t - start) / duration, 1);
              setValue(Math.floor(p * target));
              if (p < 1) requestAnimationFrame(step);
              else setValue(target);
            };
            requestAnimationFrame(step);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return (
    <span className="stat-num" ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
