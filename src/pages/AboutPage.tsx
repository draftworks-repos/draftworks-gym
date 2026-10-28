import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Award, Users, Dumbbell, ShieldCheck, Zap, HeartPulse, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigateContact: () => void;
  onExploreCoaches: () => void;
  onJoinClick: () => void;
}

const heroStats = [
  { value: 10, suffix: '+' },
  { value: 16, suffix: 'K+' },
  { value: 45, suffix: '+' },
  { value: 28, suffix: 'K' },
];
const COUNTER_DURATION = 3000;

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateContact,
  onExploreCoaches,
  onJoinClick,
}) => {
  const metricsRef = useRef<HTMLDivElement>(null);
  const [metricValues, setMetricValues] = useState(heroStats.map(() => 0));

  useEffect(() => {
    const metricsElement = metricsRef.current;
    if (!metricsElement) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setMetricValues(heroStats.map(({ value }) => value));
      return;
    }

    let animationFrame = 0;
    let observer: IntersectionObserver | undefined;

    const startAnimation = () => {
      const startTime = performance.now();

      const updateValues = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / COUNTER_DURATION, 1);
        const easedProgress = 1 - (1 - progress) ** 3;

        setMetricValues(heroStats.map(({ value }) => Math.round(value * easedProgress)));

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(updateValues);
        }
      };

      animationFrame = window.requestAnimationFrame(updateValues);
    };

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            observer?.disconnect();
            startAnimation();
          }
        },
        { threshold: 0.2 },
      );
      observer.observe(metricsElement);
    } else {
      startAnimation();
    }

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const scrollToContent = () => {
    const el = document.getElementById('about-story-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-wrapper about-page-wrapper">
      {/* 1. Big Full Screen Hero Section */}
      <section className="page-hero-fullscreen">
        <div className="page-hero-bg-media">
          <img
            src="/assets/aistudio/img-2_c7462009.webp"
            alt="Draftworks Gym Training Atmosphere"
            className="page-hero-bg-img"
          />
          <div className="page-hero-overlay" />
          <div className="page-hero-radial" />
        </div>

        <div className="site-container page-hero-content">
          <div className="page-hero-inner">
            <div className="hero-rating-badge">
              <span className="star-icon">★</span>
              <span>15 Years of Experience</span>
            </div>

            <h1 className="page-hero-title">
              <span className="title-accent">WHERE CHAINS</span>
              <span>GET BROKEN.</span>
            </h1>

            <p className="page-hero-desc">
              Draftworks was born from an uncompromising standard: human potential has no ceiling when backed by science-backed biomechanics, world-class coaching, and relentless discipline. No trends. No shortcuts. Just tangible human transformation.
            </p>

            <div className="page-hero-actions">
              <button
                type="button"
                className="btn-primary-yellow"
                onClick={onNavigateContact}
              >
                TALK TO A COACH
              </button>
              <button
                type="button"
                className="btn-page-hero-secondary"
                onClick={scrollToContent}
              >
                OUR STORY &amp; ETHOS
                <ArrowDown size={16} />
              </button>
            </div>

            {/* Quick Metrics Strip */}
            <div className="page-hero-metrics" ref={metricsRef}>
              <div className="page-metric-card">
                <span className="metric-val">{metricValues[0]}{heroStats[0].suffix}</span>
                <span className="metric-label">Years of Excellence</span>
              </div>
              <div className="page-metric-divider" />
              <div className="page-metric-card">
                <span className="metric-val">{metricValues[1]}{heroStats[1].suffix}</span>
                <span className="metric-label">Athletes Transformed</span>
              </div>
              <div className="page-metric-divider" />
              <div className="page-metric-card">
                <span className="metric-val">{metricValues[2]}{heroStats[2].suffix}</span>
                <span className="metric-label">Certified Coaches</span>
              </div>
              <div className="page-metric-divider" />
              <div className="page-metric-card">
                <span className="metric-val">{metricValues[3]}{heroStats[3].suffix}</span>
                <span className="metric-label">Sq Ft Arena</span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="page-hero-scroll-indicator"
          onClick={scrollToContent}
          aria-label="Scroll to content"
        >
          <ArrowDown size={20} />
        </button>
      </section>

      {/* 2. Our Origin & Story Section */}
      <section id="about-story-section" className="about-story-section">
        <div className="site-container">
          <div className="about-split-grid">
            <div className="about-story-text-col">
              <div className="section-kicker">
                <Award size={15} className="kicker-icon" />
                <span>Our Heritage</span>
              </div>
              <h2 className="section-title">
                FROM A RAW WAREHOUSE TO A TEMPLE OF HIGH PERFORMANCE
              </h2>
              <p className="about-body-text">
                Over the past decade, we transformed that underground haven into one of the most respected athletic development facilities in the region. We discarded the spa fluff, fake machines, and hollow trends in favor of what actually produces results: periodized strength cycles, heavy compound lifts, conditioning on 50-meter turf, and coaches who practice what they preach.
              </p>
              <p className="about-body-text">
                Today, Draftworks is home to competitive powerlifters, Olympic lifters, combat athletes, tactical personnel, and everyday professionals dedicated to being the strongest version of themselves.
              </p>

              <div className="about-quote-box">
                <p className="about-quote-content">
                  "The barbell never lies. It will never tell you that you had a bad day or cheer for your excuses. It demands respect, humility, and relentless work."
                </p>
                <span className="about-quote-author">— Marcus Vance, Head Coach &amp; Founder</span>
              </div>
            </div>

            <div className="about-story-media-col">
              <div className="about-story-img-frame">
                <img
                  src="/assets/aistudio/img-1_8a23722a.webp"
                  alt="Draftworks training floor and barbell loading"
                  className="about-story-img"
                />
                <div className="about-story-badge">
                  <span className="badge-big">100%</span>
                  <span className="badge-small">Commitment to Form &amp; Iron</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4 Core Pillars of Draftworks */}
      <section className="about-pillars-section">
        <div className="site-container">
          <div className="section-header-center">
            <div className="section-kicker">
              <ShieldCheck size={15} className="kicker-icon" />
              <span>The Standard</span>
            </div>
            <h2 className="section-title">THE 4 CORE PILLARS</h2>
            <p className="section-subtitle">
              Every program, workout, and coaching cue at Draftworks is anchored in these four foundational beliefs.
            </p>
          </div>

          <div className="pillars-grid">
            {/* Pillar 1 */}
            <div className="pillar-card">
              <div className="pillar-num">01</div>
              <div className="pillar-icon-box">
                <Dumbbell size={24} />
              </div>
              <h3 className="pillar-title">BIOMECHANICAL MASTERY</h3>
              <p className="pillar-desc">
                Load follows movement quality. We deconstruct joint angles, bar paths, and posture before adding weight to ensure maximum muscle recruitment with zero reckless wear.
              </p>
              <ul className="pillar-bullets">
                <li><CheckCircle2 size={14} /> Full kinetic chain evaluation</li>
                <li><CheckCircle2 size={14} /> Structural symmetry and balance</li>
                <li><CheckCircle2 size={14} /> Safe progression into PR weights</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="pillar-card">
              <div className="pillar-num">02</div>
              <div className="pillar-icon-box">
                <Zap size={24} />
              </div>
              <h3 className="pillar-title">STRUCTURED PROGRESSION</h3>
              <p className="pillar-desc">
                Random workouts yield random results. We implement progressive overload, periodized deloads, and tracked metrics to systematically build strength week over week.
              </p>
              <ul className="pillar-bullets">
                <li><CheckCircle2 size={14} /> 8-week structured microcycles</li>
                <li><CheckCircle2 size={14} /> Objective performance tracking</li>
                <li><CheckCircle2 size={14} /> Peak testing and reassessment</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="pillar-card">
              <div className="pillar-num">03</div>
              <div className="pillar-icon-box">
                <Users size={24} />
              </div>
              <h3 className="pillar-title">COMMUNITY OF UNBROKEN DRIVE</h3>
              <p className="pillar-desc">
                Iron sharpens iron. When you step onto our lifting platform, you train alongside individuals who refuse to settle. The peer energy eliminates self doubt and expands your ceiling.
              </p>
              <ul className="pillar-bullets">
                <li><CheckCircle2 size={14} /> Zero ego, 100% accountability</li>
                <li><CheckCircle2 size={14} /> Spotters and team camaraderie</li>
                <li><CheckCircle2 size={14} /> Shared milestones and PR bells</li>
              </ul>
            </div>

            {/* Pillar 4 */}
            <div className="pillar-card">
              <div className="pillar-num">04</div>
              <div className="pillar-icon-box">
                <HeartPulse size={24} />
              </div>
              <h3 className="pillar-title">LIFELONG RESILIENCE</h3>
              <p className="pillar-desc">
                True strength isn't just about what you lift today; it's about being capable, durable, and pain free twenty years from now through dedicated recovery, mobility, and tendon health.
              </p>
              <ul className="pillar-bullets">
                <li><CheckCircle2 size={14} /> Integrated active recovery protocol</li>
                <li><CheckCircle2 size={14} /> Cold plunge &amp; contrast therapy</li>
                <li><CheckCircle2 size={14} /> Joint durability &amp; tendon conditioning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Facility & Equipment Arsenal */}
      <section className="about-facility-section">
        <div className="site-container">
          <div className="about-split-grid reverse-grid">
            <div className="about-story-media-col">
              <div className="about-facility-img-frame">
                <img
                  src="/assets/aistudio/about_0c1cde98.webp"
                  alt="Draftworks weight room equipment"
                  className="about-facility-img"
                />
              </div>
            </div>

            <div className="about-story-text-col">
              <div className="section-kicker">
                <Sparkles size={15} className="kicker-icon" />
                <span>The Arsenal</span>
              </div>
              <h2 className="section-title">BUILT WITH WORLD CLASS SPECIFICATIONS</h2>
              <p className="about-lead-text">
                Every square foot of our 28,000 sq ft facility was engineered by strength coaches, not interior decorators.
              </p>

              <div className="specs-list">
                <div className="spec-item">
                  <div className="spec-bullet" />
                  <div>
                    <h4 className="spec-title">14 Eleiko Olympic Platforms</h4>
                    <p className="spec-desc">Competition grade calibrated steel plates, stainless steel bars, and shock absorbing oak platforms.</p>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-bullet" />
                  <div>
                    <h4 className="spec-title">50 Meter Sprint &amp; Sled Turf</h4>
                    <p className="spec-desc">High friction athletic turf for prowler pushes, farmer's walks, speed ladders, and explosive agility drills.</p>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-bullet" />
                  <div>
                    <h4 className="spec-title">Custom Heavy Dumbbells to 150 LBS</h4>
                    <p className="spec-desc">Solid steel urethane dumbbells in 2.5 lb increments, plus kettlebells up to 106 lbs (48kg).</p>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-bullet" />
                  <div>
                    <h4 className="spec-title">Contrast Hydro &amp; Recovery Suite</h4>
                    <p className="spec-desc">38°F chilled cold plunge tanks, medical grade infrared saunas, and pneumatic compression boots.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom About CTA Banner */}
      <section className="about-bottom-cta">
        <div className="site-container">
          <div className="about-cta-card">
            <h2 className="about-cta-title">READY TO WRITE YOUR OWN STRENGTH STORY?</h2>
            <p className="about-cta-subtitle">
              Schedule a comprehensive baseline physical assessment and meet our coaching staff in person at the facility.
            </p>
            <div className="about-cta-buttons">
              <button
                type="button"
                className="btn-primary-yellow"
                onClick={onNavigateContact}
              >
                SCHEDULE A TOUR &amp; TALK TO A COACH
              </button>
              <button
                type="button"
                className="btn-page-hero-secondary"
                onClick={onExploreCoaches}
              >
                EXPLORE COACHES
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
