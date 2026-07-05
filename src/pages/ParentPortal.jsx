import { useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';

const NAV = [
  { key: 'overview', label: 'Overview', icon: 'M3 12l9-9 9 9M5 10v10h14V10' },
  { key: 'calendar', label: 'Calendar', icon: 'M4 6h16v14H4zM4 10h16M8 3v6M16 3v6' },
  { key: 'homework', label: 'Homework', icon: 'M4 4h12l4 4v12H4z' },
  { key: 'results', label: 'Results', icon: 'M4 20V10M12 20V4M20 20v-7' },
  { key: 'attendance', label: 'Attendance', icon: 'M9 11l3 3 8-8M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11' },
  { key: 'fees', label: 'Fee Statements', icon: 'M3 6h18M3 12h18M3 18h18' },
  { key: 'messages', label: 'Messages', icon: 'M4 4h16v12H8l-4 4z' },
  { key: 'downloads', label: 'Downloads', icon: 'M12 3v12m0 0l-4-4m4 4l4-4M4 19h16' },
];

export default function ParentPortal() {
  const [tab, setTab] = useState('overview');

  return (
    <>
      <PageHero crumb="Parent Portal" title="Everything about your child, in one place">
        A concept dashboard for tracking homework, attendance, results and fee statements — this preview uses sample data.
      </PageHero>

      <section className="bg-flush">
        <div className="container">
          <Reveal className="dash-shell">
            <aside className="dash-side">
              <div className="who">
                <div className="avatar"></div>
                <div>
                  <strong style={{ display: 'block', fontSize: '.92rem' }}>Joyce Wanjiru</strong>
                  <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.6)' }}>Parent · Grade 5</span>
                </div>
              </div>
              <nav className="dash-nav">
                {NAV.map((n) => (
                  <a key={n.key} className={tab === n.key ? 'active' : ''} onClick={() => setTab(n.key)} href={`#${n.key}`}
                     onClickCapture={(e) => e.preventDefault()}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={n.icon} /></svg>
                    {n.label}
                  </a>
                ))}
              </nav>
            </aside>
            <div className="dash-main">
              {tab === 'overview' && <Overview />}
              {tab === 'calendar' && <SimplePanel title="School Calendar" rows={[
                ['14 Jul', 'Open Day & Campus Tours'], ['2 Aug', 'Inter-House Athletics Meet'], ['21 Aug', 'Music & Drama Festival'], ['9 Sep', 'Parent-Teacher Conference'],
              ]} cols={['Date', 'Event']} />}
              {tab === 'homework' && <SimplePanel title="Homework & Assignments" rows={[
                ['Mathematics', 'Fractions worksheet', 'Due 8 Jul', 'ok'], ['English', 'Book report — Chapter 4', 'Due 10 Jul', 'due'], ['Science', 'Plant growth journal', 'Due 12 Jul', 'due'],
              ]} cols={['Subject', 'Assignment', 'Due', 'Status']} statusCol={3} />}
              {tab === 'results' && <SimplePanel title="Term 2 Results" rows={[
                ['Mathematics', '88%', 'Exceeding Expectation'], ['English', '81%', 'Meeting Expectation'], ['Science', '90%', 'Exceeding Expectation'], ['Kiswahili', '76%', 'Meeting Expectation'],
              ]} cols={['Subject', 'Score', 'Competency Level']} />}
              {tab === 'attendance' && <SimplePanel title="Attendance — Term 2" rows={[
                ['Days present', '58 / 60', 'ok'], ['Days absent (excused)', '2', 'ok'], ['Late arrivals', '1', 'ok'],
              ]} cols={['Metric', 'Value', 'Status']} statusCol={2} />}
              {tab === 'fees' && <SimplePanel title="Fee Statement" rows={[
                ['Term 2 Tuition', 'KES 38,000', 'ok'], ['Meals', 'KES 7,000', 'ok'], ['Transport', 'KES 5,000', 'due'],
              ]} cols={['Item', 'Amount', 'Status']} statusCol={2} />}
              {tab === 'messages' && <SimplePanel title="Messages from School" rows={[
                ['Mrs. Sang (Sciences)', 'Great progress on the plant journal — keep it up!', '2 Jul'], ['Front Office', 'Term 2 fee statement is now available.', '1 Jul'],
              ]} cols={['From', 'Message', 'Date']} />}
              {tab === 'downloads' && <SimplePanel title="Downloads" rows={[
                ['Term 2 Report Card', 'PDF'], ['Fee Structure 2026', 'PDF'], ['School Calendar', 'PDF'],
              ]} cols={['Document', 'Format']} />}
            </div>
          </Reveal>
          <p style={{ textAlign: 'center', marginTop: '18px', fontSize: '.82rem', color: 'var(--ink-40)' }}>
            This is a design concept with sample data — no real student records are connected in this build.
          </p>
        </div>
      </section>
    </>
  );
}

function Overview() {
  return (
    <>
      <h2 style={{ marginBottom: '24px' }}>Welcome back, Joyce</h2>
      <div className="dash-cards">
        <div className="dash-card"><span className="n" style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', display: 'block' }}>96.7%</span><span>Attendance</span></div>
        <div className="dash-card"><span className="n" style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', display: 'block' }}>2</span><span>Pending Homework</span></div>
        <div className="dash-card"><span className="n" style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', display: 'block' }}>84%</span><span>Term Average</span></div>
        <div className="dash-card"><span className="n" style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', display: 'block' }}>1</span><span>Fee Item Due</span></div>
      </div>
      <h3 style={{ fontSize: '1.05rem', marginBottom: '14px' }}>Recent Announcements</h3>
      <table className="dash-table">
        <thead><tr><th>Date</th><th>Announcement</th></tr></thead>
        <tbody>
          <tr><td>2 Jul</td><td>Term 2 fee statement is now available for download.</td></tr>
          <tr><td>28 Jun</td><td>Reminder: Open Day tours begin 14 July.</td></tr>
          <tr><td>20 Jun</td><td>Science Congress results — Baraka placed first county-wide.</td></tr>
        </tbody>
      </table>
    </>
  );
}

function SimplePanel({ title, rows, cols, statusCol }) {
  return (
    <>
      <h2 style={{ marginBottom: '24px', fontSize: '1.4rem' }}>{title}</h2>
      <table className="dash-table">
        <thead><tr>{cols.map((c) => <th key={c}>{c}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((cell, j) => (
                <td key={j}>
                  {j === statusCol ? (
                    <span className={`pill-status ${cell === 'ok' ? 'ok' : 'due'}`}>{cell === 'ok' ? 'On track' : 'Due'}</span>
                  ) : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
