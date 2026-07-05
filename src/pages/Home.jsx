import { useRef } from 'react';
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

export default function Home() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll by the width of one testimonial card + the gap (approx 100% of container width)
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="hero full-bleed-bg" style={{ minHeight: '80vh', display: 'flex', alignItems: 'flex-end', paddingBottom: '4rem', backgroundColor: '#333339', position: 'relative' }}>
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(30, 28, 36, 0.65)', zIndex: 1 }}></div>
        
        <div className="container hero-content" style={{ position: 'relative', zIndex: 2, textAlign: 'left', maxWidth: '800px', margin: '0', marginLeft: '5%' }}>
          <p className="eyebrow" style={{ color: '#A3A3B5', fontWeight: '600', letterSpacing: '0.1em' }}>
            CBC · MIXED DAY SCHOOL · KAPSABET, KENYA
          </p>
          <h1 style={{ color: 'white', fontWeight: '700', lineHeight: '1.1' }}>
            Welcome to <em>Baraka</em> School Kapsabet
          </h1>
          <p style={{ color: '#EAEAEA', fontSize: '1.1rem', maxWidth: '600px', marginTop: '1rem' }}>
            A nurturing environment where academic excellence, creativity, leadership and character come together to prepare learners for a successful future.
          </p>
          <div className="hero-cta" style={{ justifyContent: 'flex-start', marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <Link to="/admissions#apply" className="btn btn-primary" style={{ backgroundColor: '#f59e0b', color: '#000000', border: 'none', fontWeight: '600', boxShadow: 'none' }}>Apply Now</Link>
            <Link to="/admissions#tour" className="btn btn-ghost" style={{ color: 'white', borderColor: '#A3A3B5', background: 'transparent' }}>Book a School Tour</Link>
          </div>
        </div>
        <div className="scroll-cue" style={{ zIndex: 2 }}><span>Scroll</span><span className="dot" style={{ backgroundColor: '#A3A3B5' }}></span></div>
      </section>

      <section className="bg-flush" style={{ padding: '6rem 0' }}>
        <div className="container split">
          <Reveal dir="left" className="split-media">
            <Tile swatch="p3" className="frame" style={{ minHeight: '550px' }} />
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

      <section className="bg-tint" style={{ padding: '6rem 0', backgroundColor: '#FAFAFC' }}>
        <div className="container split reverse">
          <Reveal dir="right" className="split-media">
            <Tile swatch="p2" className="frame" style={{ minHeight: '650px' }} />
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
            <Tile swatch="p4" className="frame" style={{ minHeight: '550px' }} />
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
            <Tile swatch="p6" className="frame" style={{ minHeight: '500px' }} />
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
                    // No border, relying on white space and subtle shadow if any
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
             <Tile swatch="p1" className="frame" style={{ minHeight: '400px' }} />
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
             <Tile swatch="p3" className="frame" style={{ minHeight: '250px' }} />
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