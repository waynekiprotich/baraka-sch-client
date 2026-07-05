import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';
import Tile from '../components/Tile.jsx';

const testimonials = [
  { name: 'Mercy Sang', role: 'Head of Sciences', initials: 'MS', quote: "I've taught in three counties. Baraka's culture of mentorship is genuinely rare." },
  { name: 'Joyce Wanjiru', role: 'Parent, Grade 5', initials: 'JW', quote: "Baraka gave our daughter a voice. Her teachers noticed things about her we hadn't." },
  { name: 'Daniel Kiptoo', role: 'Junior School Student', initials: 'DK', quote: "The small classes mean I'm never just a number. My teachers know my name and my goals." },
  { name: 'Emmanuel Kiplagat', role: 'Alumnus, Class of 2019', initials: 'EK', quote: "Everything I lead with today, I first practiced on Baraka's debate stage." },
];

const dailySchedule = [
  { time: '7:30 AM', title: 'Arrival & Morning Devotion', desc: 'A warm welcome at the gate, followed by a cheerful morning song and devotion to start the day with positive values.' },
  { time: '8:00 AM', title: 'Interactive Learning', desc: 'Hands-on math, reading, and science activities designed to make learning feel like an exciting adventure.' },
  { time: '10:00 AM', title: 'Healthy Snack & Playtime', desc: 'Fresh fruit, warm milk, and running around our safe, green playground with friends.' },
  { time: '10:30 AM', title: 'Creative Arts & Music', desc: 'Painting, clay modeling, singing, or playing instruments to let every child’s imagination run wild.' },
  { time: '12:30 PM', title: 'Nutritious Lunch', desc: 'A delicious, balanced hot meal prepared fresh daily in our school kitchen.' },
  { time: '1:30 PM', title: 'Outdoor Exploration & Sports', desc: 'Fun physical activities, athletics basics, and exploring our school garden.' },
  { time: '3:30 PM', title: 'Storytelling & Home Time', desc: 'Reflecting on the day’s blessings, a cozy story circle, and safe departure.' },
];

export default function Home() {
  const scrollRef = useRef(null);
  const [activeScheduleIndex, setActiveScheduleIndex] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="hero full-bleed-bg" style={{ minHeight: '85vh', display: 'flex', alignItems: 'flex-end', paddingBottom: '5rem', backgroundImage: 'url(https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(30, 24, 48, 0.75)', zIndex: 1 }}></div>
        
        <div className="container hero-content" style={{ position: 'relative', zIndex: 2, textAlign: 'left', maxWidth: '800px', margin: '0', marginLeft: '5%' }}>
          <div className="mascot-badge">
            <span style={{ fontSize: '1.2rem' }}>🦁</span>
            <span>Meet Baraka the Lion Cub — Our School Mascot!</span>
          </div>
          <h1 style={{ color: 'white', fontWeight: '700', lineHeight: '1.1', fontSize: 'clamp(2.5rem, 5vw, 4.2rem)' }}>
            Welcome to <em>Baraka</em> School Kapsabet
          </h1>
          <p style={{ color: '#F3EEFB', fontSize: '1.15rem', maxWidth: '600px', marginTop: '1rem', lineHeight: '1.6' }}>
            A warm, joyful primary school where academic excellence, creative play, leadership, and Christian values come together to nurture future leaders.
          </p>
          <div className="hero-cta" style={{ justifyContent: 'flex-start', marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <Link to="/admissions#apply" className="btn btn-primary" style={{ backgroundColor: '#f59e0b', color: '#000000', border: 'none', fontWeight: '600', boxShadow: 'none' }}>Apply Now</Link>
            <Link to="/admissions#tour" className="btn btn-ghost" style={{ color: 'white', borderColor: '#A3A3B5', background: 'transparent' }}>Book a School Tour</Link>
          </div>
        </div>
        <div className="scroll-cue" style={{ zIndex: 2 }}><span>Scroll</span><span className="dot" style={{ backgroundColor: '#f59e0b' }}></span></div>
      </section>

      {/* PLAYFUL PRIMARY HIGHLIGHTS */}
      <section className="bg-tint" style={{ padding: '5rem 0' }}>
        <div className="container">
          <Reveal className="section-head center" style={{ marginInline: 'auto' }}>
            <p className="eyebrow" style={{ marginInline: 'auto' }}>Joyful Learning</p>
            <h2>Designed for curious young minds</h2>
            <p>We believe primary school should be filled with wonder, discovery, and laughter. Here is how we make every day special:</p>
          </Reveal>
          <div className="grid grid-4 stagger">
            <Reveal className="card playful-card blue">
              <div className="card-icon" style={{ background: 'var(--sky-blue)' }}>🎨</div>
              <h3>Creative Arts</h3>
              <p>Painting, clay modeling, and music are woven into our daily schedule to spark imagination.</p>
            </Reveal>
            <Reveal className="card playful-card green" delay={60}>
              <div className="card-icon" style={{ background: 'var(--grass-green)' }}>🌱</div>
              <h3>Nature & Play</h3>
              <p>Our green campus and school garden offer endless opportunities for outdoor exploration.</p>
            </Reveal>
            <Reveal className="card playful-card pink" delay={120}>
              <div className="card-icon" style={{ background: 'var(--coral-pink)' }}>💻</div>
              <h3>Digital Explorers</h3>
              <p>Supervised, playful introduction to technology, coding, and digital citizenship.</p>
            </Reveal>
            <Reveal className="card playful-card yellow" delay={180}>
              <div className="card-icon" style={{ background: 'var(--sunny-yellow)' }}>🤝</div>
              <h3>Values & Character</h3>
              <p>Christian values, kindness, and leadership are practiced in everything we do.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DAILY SCHEDULE */}
      <section className="bg-flush" style={{ padding: '6rem 0' }}>
        <div className="container split">
          <Reveal dir="left" className="split-body">
            <p className="eyebrow" style={{ color: '#6A4C93' }}>A Day at Baraka</p>
            <h2 style={{ color: '#4A306D' }}>What does a typical day look like?</h2>
            <p style={{ marginBottom: '2rem' }}>Click through our daily schedule to see how we balance structured learning, creative play, and healthy habits.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {dailySchedule.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScheduleIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 20px',
                    borderRadius: '12px',
                    border: '1px solid',
                    borderColor: activeScheduleIndex === idx ? 'var(--purple)' : 'var(--line)',
                    background: activeScheduleIndex === idx ? 'var(--purple-04)' : 'transparent',
                    color: 'var(--text)',
                    textAlign: 'left',
                    fontWeight: activeScheduleIndex === idx ? '700' : '500',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span>{item.time} — {item.title}</span>
                  <span style={{ color: 'var(--purple)', fontSize: '1.2rem' }}>
                    {activeScheduleIndex === idx ? '👉' : '•'}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal dir="right" className="split-media" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid var(--line)', boxShadow: 'var(--shadow-lg)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '8px', background: 'linear-gradient(90deg, var(--sky-blue), var(--grass-green), var(--coral-pink), var(--sunny-yellow))' }}></div>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1.5rem' }}>
                {activeScheduleIndex === 0 && '🎒'}
                {activeScheduleIndex === 1 && '✏️'}
                {activeScheduleIndex === 2 && '🍎'}
                {activeScheduleIndex === 3 && '🎨'}
                {activeScheduleIndex === 4 && '🍲'}
                {activeScheduleIndex === 5 && '🏃'}
                {activeScheduleIndex === 6 && '📚'}
              </span>
              <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--purple)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {dailySchedule[activeScheduleIndex].time}
              </span>
              <h3 style={{ color: '#4A306D', margin: '0.5rem 0 1.5rem 0', fontSize: '1.8rem' }}>
                {dailySchedule[activeScheduleIndex].title}
              </h3>
              <p style={{ color: 'var(--ink-60)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                {dailySchedule[activeScheduleIndex].desc}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-tint" style={{ padding: '6rem 0' }}>
        <div className="container split">
          <Reveal dir="left" className="split-media">
            <Tile swatch="p3" bgImage="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" className="frame" style={{ minHeight: '550px' }} />
          </Reveal>
          <Reveal className="split-body" style={{ paddingLeft: '3rem' }}>
            <p className="eyebrow" style={{ color: '#6A4C93' }}>Our Story</p>
            <h2 style={{ color: '#4A306D' }}>Founded on a single conviction</h2>
            <p>
              Baraka School Kapsabet was founded to prove that a Kenyan day school could be both deeply nurturing and academically rigorous — that children learn best where they feel safe, seen and stretched in equal measure.
            </p>
            <ul style={{ paddingLeft: '1.2rem', marginTop: '1.5rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong>Mission —</strong> to nurture confident, principled learners equipped with the knowledge, skills and character to lead.</li>
              <li><strong>Vision —</strong> to be East Africa's benchmark for holistic, values-driven day-school education.</li>
            </ul>
            
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '2.5rem 0', padding: '1.5rem', background: '#F4F4F6', borderRadius: '12px' }}>
               <div><strong style={{ fontSize: '1.5rem', color: '#4A306D' }}><Counter target={640} suffix="+" /></strong><br/><span style={{ fontSize: '0.9rem', color: '#555' }}>Students</span></div>
               <div><strong style={{ fontSize: '1.5rem', color: '#4A306D' }}><Counter target={58} suffix="+" /></strong><br/><span style={{ fontSize: '0.9rem', color: '#555' }}>Teachers</span></div>
               <div><strong style={{ fontSize: '1.5rem', color: '#4A306D' }}><Counter target={15} suffix="+" /></strong><br/><span style={{ fontSize: '0.9rem', color: '#555' }}>Years of Excellence</span></div>
               <div><strong style={{ fontSize: '1.5rem', color: '#4A306D' }}><Counter target={98} suffix="%" /></strong><br/><span style={{ fontSize: '0.9rem', color: '#555' }}>Graduation Rate</span></div>
            </div>

            <Link to="/about" className="btn btn-primary" style={{ backgroundColor: '#4A306D', color: 'white', border: 'none' }}>Read Our Full Story</Link>
          </Reveal>
        </div>
      </section>

      {/* CREATIVE CORNER / STUDENT ART SHOWCASE */}
      <section className="bg-flush" style={{ padding: '6rem 0' }}>
        <div className="container">
          <Reveal className="section-head center" style={{ marginInline: 'auto' }}>
            <p className="eyebrow" style={{ marginInline: 'auto' }}>Creative Corner</p>
            <h2>Our little artists at work</h2>
            <p>We celebrate creativity! Here is a showcase of beautiful artwork, crafts, and projects created by our talented primary school learners.</p>
          </Reveal>
          <div className="grid grid-3 stagger">
            <Reveal className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80" alt="Student painting" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              <div style={{ padding: '24px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--sky-blue)', textTransform: 'uppercase' }}>Grade 3 Art</span>
                <h3 style={{ fontSize: '1.2rem', margin: '8px 0' }}>"My Happy Family"</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--ink-60)' }}>A vibrant watercolor painting exploring family bonds and colorful homes.</p>
              </div>
            </Reveal>
            <Reveal className="card" delay={60} style={{ padding: 0, overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=600&q=80" alt="Clay modeling" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              <div style={{ padding: '24px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--grass-green)', textTransform: 'uppercase' }}>Grade 1 Crafts</span>
                <h3 style={{ fontSize: '1.2rem', margin: '8px 0' }}>"Animals of Nandi County"</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--ink-60)' }}>Hand-sculpted clay animals created during our environmental studies class.</p>
              </div>
            </Reveal>
            <Reveal className="card" delay={120} style={{ padding: 0, overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80" alt="Science project" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              <div style={{ padding: '24px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--coral-pink)', textTransform: 'uppercase' }}>Grade 5 Science</span>
                <h3 style={{ fontSize: '1.2rem', margin: '8px 0' }}>"Our Solar System"</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--ink-60)' }}>A creative 3D model of the planets, built entirely from recycled materials.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-tint" style={{ padding: '6rem 0', backgroundColor: '#FAFAFC' }}>
        <div className="container split reverse">
          <Reveal dir="right" className="split-media">
            <Tile swatch="p2" bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" className="frame" style={{ minHeight: '650px' }} />
          </Reveal>
          <Reveal className="split-body" style={{ paddingRight: '3rem' }}>
            <p className="eyebrow" style={{ color: '#6A4C93' }}>Why Baraka</p>
            <h2 style={{ color: '#4A306D' }}>Every detail, built around the learner</h2>
            <p>
              A close-knit, well-resourced school where every child is known, challenged and cared for.
            </p>
            <ul style={{ paddingLeft: '1.2rem', marginTop: '1.5rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><strong>Qualified Teachers:</strong> TSC-registered educators who mentor as much as they teach.</li>
              <li><strong>CBC Curriculum:</strong> Competency-based learning built for real-world readiness.</li>
              <li><strong>Modern Learning:</strong> Bright, well-ventilated classrooms designed for focus.</li>
              <li><strong>Small Class Sizes:</strong> Low learner-teacher ratios for individual attention.</li>
              <li><strong>Technology Integration:</strong> Digital literacy woven through every subject, every grade.</li>
              <li><strong>Christian Values:</strong> Faith and integrity shaping character alongside academics.</li>
              <li><strong>Safe Environment:</strong> Secured campus with round-the-clock pastoral care.</li>
              <li><strong>Individual Attention:</strong> Every learner's progress tracked, celebrated and supported.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-flush" style={{ padding: '6rem 0' }}>
        <div className="container split">
          <Reveal dir="left" className="split-media">
            <Tile swatch="p4" bgImage="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80" className="frame" style={{ minHeight: '550px' }} />
          </Reveal>
          <Reveal className="split-body" style={{ paddingLeft: '3rem' }}>
            <p className="eyebrow" style={{ color: '#6A4C93' }}>Academics</p>
            <h2 style={{ color: '#4A306D' }}>A curriculum built for how children actually learn</h2>
            <p>
              Full CBC pathways from Lower Primary through Junior School, supported by digital learning and continuous assessment.
            </p>
            <ul style={{ paddingLeft: '1.2rem', marginTop: '1.5rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><strong>Lower & Upper Primary:</strong> Play-anchored foundations building into structured, subject-based learning.</li>
              <li><strong>Junior School:</strong> Pathway-focused learning preparing candidates for senior school placement.</li>
              <li><strong>Digital & Computer Studies:</strong> Hands-on coding, typing and digital-citizenship from an early age.</li>
              <li><strong>Sciences & Mathematics:</strong> Inquiry-led labs and numeracy programmes that build genuine confidence.</li>
              <li><strong>Languages:</strong> English, Kiswahili and communication skills across the curriculum.</li>
              <li><strong>Continuous Assessment:</strong> CBC-aligned assessment that tracks growth, not just grades.</li>
            </ul>
            <Link to="/academics" className="btn btn-primary" style={{ marginTop: '2rem', backgroundColor: '#4A306D', color: 'white', border: 'none' }}>Explore Academics</Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-tint" style={{ padding: '6rem 0', backgroundColor: '#FAFAFC' }}>
        <div className="container split reverse">
          <Reveal dir="right" className="split-media">
            <Tile swatch="p6" bgImage="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80" className="frame" style={{ minHeight: '500px' }} />
          </Reveal>
          <Reveal className="split-body" style={{ paddingRight: '3rem' }}>
            <p className="eyebrow" style={{ color: '#6A4C93' }}>Campus & School Life</p>
            <h2 style={{ color: '#4A306D' }}>Beyond the classroom</h2>
            <p>
              Twelve clubs and programmes where learners discover talents they didn't know they had. Our facilities support every kind of growth.
            </p>
            
            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
               {[
                 'Library', 'Computer Lab', 'Science Lab', 'Playground', 
                 'Sports Field', 'School Bus', 'Dining Area', 'ICT Centre', 
                 'Music Room', 'Art Room', 'School Garden', 'Prayer Hall'
               ].map(fac => (
                 <span key={fac} style={{ background: '#E8E8EE', color: '#333', padding: '6px 14px', borderRadius: '4px', fontSize: '0.9rem', fontWeight: '500' }}>
                   {fac}
                 </span>
               ))}
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
                <p><strong><Counter target={20} suffix="+" /></strong> Active Clubs</p>
                <p><strong><Counter target={12} suffix="+" /></strong> Sports Disciplines</p>
            </div>

            <Link to="/school-life" className="btn btn-primary" style={{ marginTop: '2rem', backgroundColor: '#4A306D', color: 'white', border: 'none' }}>See All of School Life</Link>
          </Reveal>
        </div>
      </section>

      {/* RE-WORKED CENTERED VOICES SECTION */}
      <section className="bg-flush" style={{ padding: '6rem 0', backgroundColor: '#F4F4F6' }}>
        <div className="container">
          <Reveal className="section-head" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
              <span style={{ display: 'inline-block', width: '24px', height: '2px', backgroundColor: '#F5A623', marginRight: '10px' }}></span>
              <p className="eyebrow" style={{ color: '#4A306D', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Voices</p>
            </div>
            <h2 style={{ color: '#4A306D', fontSize: '2.5rem', fontWeight: '500' }}>What our community says</h2>
          </Reveal>

          <Reveal>
            <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
            
            {/* The Scrolling Track */}
            <div 
              ref={scrollRef}
              className="hide-scrollbar" 
              style={{ 
                display: 'flex', 
                overflowX: 'auto', 
                scrollSnapType: 'x mandatory', 
                gap: '2rem',
                paddingBottom: '2rem',
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none',  // IE/Edge
                cursor: 'grab'
              }}
            >
              {testimonials.map((t, i) => (
                <div 
                  key={i} 
                  className="testi-card" 
                  style={{ 
                    flex: '0 0 100%', // Each card takes full container width
                    scrollSnapAlign: 'start', 
                    background: '#FFFFFF', 
                    padding: '4rem 2rem', // Generous padding 
                    borderRadius: '8px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    textAlign: 'center',
                    maxWidth: '900px', // Prevent it from getting too wide on huge screens
                    margin: '0 auto'   // Center it within the track
                  }}
                >
                  <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '2.5rem', color: '#333', lineHeight: '1.8', maxWidth: '700px' }}>
                    “{t.quote}”
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', justifyContent: 'center' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#6A4C93', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1rem' }}>
                      {t.initials}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <strong style={{ color: '#4A306D', fontSize: '1rem' }}>{t.name}</strong>
                      <span style={{ fontSize: '0.85rem', color: '#888' }}>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* The Controls */}
            <div className="testi-controls" style={{ display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'center' }}>
              <button 
                onClick={() => scroll('left')} 
                aria-label="Previous testimonial" 
                style={{ background: 'transparent', border: '1px solid #A3A3B5', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#4A306D', transition: 'all 0.2s' }} 
                onMouseOver={(e) => e.currentTarget.style.background = '#E8E8EE'} 
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              </button>
              <button 
                onClick={() => scroll('right')} 
                aria-label="Next testimonial" 
                style={{ background: 'transparent', border: '1px solid #A3A3B5', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#4A306D', transition: 'all 0.2s' }} 
                onMouseOver={(e) => e.currentTarget.style.background = '#E8E8EE'} 
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEWS & EVENTS SECTIONS FOLLOW NORMALLY */}
      <section className="bg-flush" style={{ padding: '6rem 0' }}>
        <div className="container split">
          <Reveal dir="left" className="split-media">
             <Tile swatch="p1" bgImage="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80" className="frame" style={{ minHeight: '400px' }} />
          </Reveal>
          
          <Reveal className="split-body" style={{ paddingLeft: '3rem' }}>
            <p className="eyebrow" style={{ color: '#6A4C93' }}>Latest News</p>
            <h2 style={{ color: '#4A306D' }}>From around the school</h2>
            
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ borderLeft: '3px solid #6A4C93', paddingLeft: '1.5rem' }}>
                 <span style={{ fontSize: '0.8rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Achievement • June 2026</span>
                 <h4 style={{ margin: '0.5rem 0', fontSize: '1.2rem', color: '#222' }}>Baraka learners place first at the Nandi County Science Congress</h4>
                 <p style={{ fontSize: '0.95rem', margin: 0, color: '#555' }}>Six projects from our Upper Primary and Junior School classes earned top honours, with two advancing to regionals.</p>
              </div>
              <div style={{ borderLeft: '3px solid #6A4C93', paddingLeft: '1.5rem' }}>
                 <span style={{ fontSize: '0.8rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Sports • May 2026</span>
                 <h4 style={{ margin: '0.5rem 0', fontSize: '1.2rem', color: '#222' }}>Athletics team sweeps the county cross-country meet</h4>
              </div>
              <div style={{ borderLeft: '3px solid #6A4C93', paddingLeft: '1.5rem' }}>
                 <span style={{ fontSize: '0.8rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Community • April 2026</span>
                 <h4 style={{ margin: '0.5rem 0', fontSize: '1.2rem', color: '#222' }}>Parents' Day 2026: photos and highlights</h4>
              </div>
              <div style={{ borderLeft: '3px solid #6A4C93', paddingLeft: '1.5rem' }}>
                 <span style={{ fontSize: '0.8rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Admissions • April 2026</span>
                 <h4 style={{ margin: '0.5rem 0', fontSize: '1.2rem', color: '#222' }}>2027 intake applications now open</h4>
              </div>
            </div>
            
            <Link to="/news" className="btn btn-ghost" style={{ marginTop: '2.5rem', borderColor: '#A3A3B5', color: '#333' }}>Read More News</Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-tint" style={{ padding: '6rem 0', backgroundColor: '#FAFAFC' }}>
        <div className="container split reverse">
          <Reveal dir="right" className="split-media" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
             <Tile swatch="p3" bgImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" className="frame" style={{ minHeight: '250px' }} />
             <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '12px', border: '1px solid #E8E8EE' }}>
                <p className="eyebrow" style={{ color: '#6A4C93' }}>Calendar</p>
                <h3 style={{ color: '#4A306D', marginBottom: '1.5rem' }}>Upcoming events</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                   <li><strong style={{ color: '#6A4C93', display: 'inline-block', width: '60px' }}>14 Jul</strong> Open Day & Campus Tours<br/><span style={{ fontSize: '0.85rem', color: '#777' }}>Prospective families welcome from 9am.</span></li>
                   <li><strong style={{ color: '#6A4C93', display: 'inline-block', width: '60px' }}>2 Aug</strong> Inter-House Athletics Meet<br/><span style={{ fontSize: '0.85rem', color: '#777' }}>Annual track and field competition.</span></li>
                   <li><strong style={{ color: '#6A4C93', display: 'inline-block', width: '60px' }}>21 Aug</strong> Music & Drama Festival<br/><span style={{ fontSize: '0.85rem', color: '#777' }}>Showcasing this term's performing-arts.</span></li>
                   <li><strong style={{ color: '#6A4C93', display: 'inline-block', width: '60px' }}>9 Sep</strong> Parent-Teacher Conference<br/><span style={{ fontSize: '0.85rem', color: '#777' }}>One-on-one progress conversations.</span></li>
                </ul>
             </div>
          </Reveal>
          <Reveal className="split-body" style={{ paddingRight: '3rem' }}>
            <p className="eyebrow" style={{ color: '#6A4C93' }}>2027 Intake</p>
            <h2 style={{ color: '#4A306D' }}>Admissions Open</h2>
            <p>
              Places for Playgroup through Grade 9 are filling for the coming year. Start your child's Baraka journey today.
            </p>
            
            <div style={{ margin: '2.5rem 0', padding: '2rem', background: '#F4F4F6', borderLeft: '4px solid #4A306D', borderRadius: '0 8px 8px 0' }}>
                <h4 style={{ color: '#4A306D', marginBottom: '1rem', fontSize: '1.2rem' }}>Contact Us</h4>
                <p style={{ marginBottom: '8px', color: '#333' }}><strong>Address —</strong> Kapsabet–Eldoret Road, Kapsabet, Nandi County, Kenya</p>
                <p style={{ marginBottom: '8px', color: '#333' }}><strong>Phone —</strong> +254 700 123 456</p>
                <p style={{ marginBottom: '8px', color: '#333' }}><strong>Email —</strong> info@barakaschoolkapsabet.ac.ke</p>
                <p style={{ marginBottom: '0', color: '#333' }}><strong>WhatsApp —</strong> +254 700 123 456</p>
            </div>

            <div className="cta-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/admissions#apply" className="btn btn-primary" style={{ backgroundColor: '#4A306D', color: 'white', border: 'none' }}>Apply Online</Link>
              <Link to="/admissions#forms" className="btn btn-secondary" style={{ backgroundColor: '#E8E8EE', color: '#333', border: 'none' }}>Download Forms</Link>
              <Link to="/admissions#tour" className="btn btn-ghost" style={{ borderColor: '#A3A3B5', color: '#333' }}>Book a Tour</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}