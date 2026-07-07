import { useState } from 'react';

/**
 * tabs: [{ key, label, content }]
 */
export default function Tabs({ tabs, defaultKey }) {
  const [active, setActive] = useState(defaultKey || tabs[0]?.key);
  const activeTab = tabs.find((t) => t.key === active);

  return (
    <div>
      <div className="tabs-nav" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.key}
            className={`tab-btn ${active === t.key ? 'active' : ''}`}
            role="tab"
            aria-selected={active === t.key}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="tab-panel active">{activeTab?.content}</div>
    </div>
  );
}