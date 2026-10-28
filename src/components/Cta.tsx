import React from 'react';
import { Flame, CheckCircle, ArrowRight } from 'lucide-react';

interface CtaProps {
  onJoinClick: () => void;
  onTourClick: () => void;
}

export const Cta: React.FC<CtaProps> = ({ onJoinClick, onTourClick }) => {
  return (
    <section className="cta-section">
      {/* Background Graphic & Overlays */}
      <div className="cta-bg-wrapper">
        <img
          src="/assets/aistudio/img-4_758a261f.webp"
          alt="Draftworks Gym Training Atmosphere"
          className="cta-bg-img"
          loading="lazy"
        />
        <div className="cta-overlay" />
      </div>

      <div className="site-container cta-container">
        <div className="cta-content-box">
          <div className="section-kicker">
            <Flame size={16} className="kicker-icon" />
            <span>START YOUR TRANSFORMATION</span>
          </div>

          <h2 className="cta-headline">
            STOP WAITING FOR MONDAY.<br />
            <span className="cta-headline-accent">THE TIME IS NOW.</span>
          </h2>

          <p className="cta-description">
            Experience the intensity, culture, and precision that makes Draftworks the premier training destination in the Iron District. Step onto our floor and see what dedicated coaching and elite equipment can do for your potential.
          </p>

          {/* Action Buttons */}
          <div className="cta-buttons-row">
            <button
              type="button"
              className="btn-primary-yellow btn-cta-primary"
              onClick={onJoinClick}
            >
              <span>CLAIM FREE 7-DAY PASS</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              className="btn-cta-secondary"
              onClick={onTourClick}
            >
              BOOK FACILITY TOUR
            </button>
          </div>

          {/* Value Badges */}
          <div className="cta-perks-row">
            <div className="cta-perk-item">
              <CheckCircle size={15} className="perk-icon" />
              <span>No Long-Term Lock-Ins</span>
            </div>
            <div className="cta-perk-item">
              <CheckCircle size={15} className="perk-icon" />
              <span>Complimentary 3D Body Scan</span>
            </div>
            <div className="cta-perk-item">
              <CheckCircle size={15} className="perk-icon" />
              <span>Full Locker &amp; Recovery Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
