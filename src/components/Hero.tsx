import React from 'react';
import { Play } from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
  onPlayVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onPlayVideo }) => {
  return (
    <section id="hero" className="hero-section">
      {/* Background Media & Overlays */}
      <div className="hero-bg-media">
        <img
          src="/assets/aistudio/bg_c055d2fa.webp"
          alt="Draftworks Gym Training Facility"
          className="hero-bg-img"
        />
        <div className="hero-overlay" />
        <div className="hero-overlay-radial" />
      </div>

      <div className="site-container hero-content">
        {/* Top Block: Reviews Badge & Headline (stays where it is) */}
        <div className="hero-top-block">
          <div className="hero-rating-badge">
            <span className="star-icon">★</span>
            <span>4.8/5 Verified reviews</span>
          </div>

          <h1 className="hero-title">
            <span className="title-accent">TRANSFORM YOUR</span>
            <span>MIND &amp; MUSCLE.</span>
          </h1>
        </div>

        {/* Bottom Split Row: Video & Members to Left, Desc & Button to Right */}
        <div className="hero-bottom-grid">
          {/* Left Column: Video Preview + Member Avatars */}
          <div className="hero-social-proof-wrap">
            <div
              className="hero-video-box"
              onClick={onPlayVideo}
              role="button"
              tabIndex={0}
              aria-label="Play gym tour video"
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onPlayVideo()}
            >
              <img
                src="/assets/aistudio/img-4_758a261f.webp"
                alt="Gym Training Session"
              />
              <div className="hero-video-play-btn">
                <div className="hero-video-play-icon">
                  <Play size={14} fill="#0b0c0e" strokeWidth={0} />
                </div>
              </div>
            </div>

            <div className="hero-members-proof">
              <div className="hero-avatar-stack">
                <img src="/assets/aistudio/img-1_8a23722a.webp" alt="Member 1" />
                <img src="/assets/aistudio/img-6_dc2985c0.webp" alt="Member 2" />
                <img src="/assets/aistudio/img-7_00b0718e.webp" alt="Member 3" />
                <img src="/assets/aistudio/img-10_3694ba38.webp" alt="Member 4" />
              </div>
              <span className="hero-membership-caption">
                16K+ Membership enjoy<br />our facilities
              </span>
            </div>
          </div>

          {/* Right Column: Copy + CTA Button */}
          <div className="hero-action-side">
            <p className="hero-description">
              Build confidence, strength, and discipline with science-backed training, expert coaching, and a community that never lets you quit.
            </p>
            <button
              type="button"
              className="btn-primary-yellow"
              onClick={onJoinClick}
            >
              JOIN DRAFTWORKS NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
