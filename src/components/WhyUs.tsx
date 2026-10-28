import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Users, Award, CalendarCheck, Zap } from 'lucide-react';

interface WhyUsProps {
  onJoinClick: () => void;
}

const stats = [
  { value: 160, suffix: '+' },
  { value: 2000, suffix: '+' },
  { value: 92, suffix: '%' },
];
const COUNTER_DURATION = 3000;

export const WhyUs: React.FC<WhyUsProps> = ({ onJoinClick }) => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const statsElement = statsRef.current;
    if (!statsElement) return;

    const showFinalValues = () => setValues(stats.map(({ value }) => value));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      showFinalValues();
      return;
    }

    let animationFrame = 0;
    let observer: IntersectionObserver | undefined;

    const startAnimation = () => {
      const startTime = performance.now();

      const updateValues = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / COUNTER_DURATION, 1);
        const easedProgress = 1 - (1 - progress) ** 3;

        setValues(stats.map(({ value }) => Math.round(value * easedProgress)));

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
      observer.observe(statsElement);
    } else {
      startAnimation();
    }

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section id="why-us" className="why-us-section">
      <div className="site-container">
        {/* Top Grid: Copy + Feature Image */}
        <div className="why-us-top-grid">
          {/* Left: Content */}
          <div className="why-us-text-side">
            <div className="section-kicker">
              <Sparkles size={15} className="kicker-icon" />
              <span>Why Choose Us</span>
            </div>

            <h2 className="why-us-heading">
              WHY CHOOSE DRAFTWORKS?
            </h2>

            <p className="why-us-lead-text">
              We're not just a gym we're your partner in transformation. At Draftworks, we combine smart training, real support, and a vibe that keeps you coming back. Leveling up, Draftworks is where your transformation begins and sticks.
            </p>

            {/* 4 Feature Points in 2x2 Grid */}
            <div className="why-us-points-grid">
              <div className="why-point-item">
                <div className="why-point-icon-wrap">
                  <Users size={15} />
                </div>
                <span className="why-point-title">YOUTH-FOCUSED PROGRAMS</span>
              </div>

              <div className="why-point-item">
                <div className="why-point-icon-wrap">
                  <Award size={15} />
                </div>
                <span className="why-point-title">CERTIFIED COACHES WHO CARE</span>
              </div>

              <div className="why-point-item">
                <div className="why-point-icon-wrap">
                  <CalendarCheck size={15} />
                </div>
                <span className="why-point-title">FLEXIBLE, NO-PRESSURE PLANS</span>
              </div>

              <div className="why-point-item">
                <div className="why-point-icon-wrap">
                  <Zap size={15} />
                </div>
                <span className="why-point-title">REAL RESULTS, REAL FAST</span>
              </div>
            </div>

            <button
              type="button"
              className="btn-primary-yellow"
              onClick={onJoinClick}
            >
              JOIN DRAFTWORKS NOW
            </button>
          </div>

          {/* Right: Featured Workout Image */}
          <div className="why-us-media-side">
            <div className="why-us-feature-card">
              <img
                src="/assets/aistudio/img-8_b3b1976b.webp"
                alt="Draftworks Athlete Training Machine"
                className="why-us-feature-img"
              />
            </div>
          </div>
        </div>

        {/* Bottom: 3 High-Impact Stat Cards */}
        <div className="why-us-stats-grid" ref={statsRef}>
          {/* Stat Card 1 */}
          <div className="stat-card">
            <img
              src="/assets/aistudio/img-7_00b0718e.webp"
              alt="Trainer Background"
              className="stat-card-bg-img"
            />
            <div className="stat-card-overlay" />
            <div className="stat-card-content">
              <span className="stat-card-label">
                OUR TRAINER FOCUSED ON YOUR TRUE TRANSFORMATION.
              </span>
              <span className="stat-card-value">{values[0]}{stats[0].suffix}</span>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="stat-card">
            <img
              src="/assets/aistudio/img-3_db8633e3.webp"
              alt="Active Members Background"
              className="stat-card-bg-img"
            />
            <div className="stat-card-overlay" />
            <div className="stat-card-content">
              <span className="stat-card-label">
                ACTIVE MEMBERS AND GROWING EVERY DAY
              </span>
              <span className="stat-card-value">{values[1]}{stats[1].suffix}</span>
            </div>
          </div>

          {/* Stat Card 3 */}
          <div className="stat-card">
            <img
              src="/assets/aistudio/img-2_c7462009.webp"
              alt="Member Retention Background"
              className="stat-card-bg-img"
            />
            <div className="stat-card-overlay" />
            <div className="stat-card-content">
              <span className="stat-card-label">
                RETENTION RATE PEOPLE DON'T JUST JOIN, THEY STAY
              </span>
              <span className="stat-card-value">{values[2]}{stats[2].suffix}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
