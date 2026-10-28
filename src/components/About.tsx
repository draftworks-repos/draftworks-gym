import React from 'react';
import { Dumbbell, Utensils, Award } from 'lucide-react';

interface AboutProps {
  onMeetTrainers: () => void;
}

export const About: React.FC<AboutProps> = ({ onMeetTrainers }) => {
  return (
    <section id="about" className="about-section">
      <div className="site-container">
        <div className="about-grid">
          {/* Left Column: Athlete Gym Image */}
          <div className="about-image-column">
            <div className="about-image-card">
              <img
                src="/assets/aistudio/about_0c1cde98.webp"
                alt="Draftworks Athlete Training"
                className="about-main-img"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="about-text-column">
            <div className="section-kicker">
              <Dumbbell size={15} className="kicker-icon" />
              <span>ABOUT US</span>
            </div>

            <h2 className="about-heading">
              BEGIN YOUR FITNESS STORY WITH DRAFTWORKS
            </h2>

            <p className="about-lead-text">
              We're more than just a fitness center, we're a movement built around real transformation. Our mission is simple: help people become stronger, healthier, and more confident every single day.
            </p>

            {/* Feature Highlights Grid */}
            <div className="about-features-grid">
              <div className="about-feature-item">
                <div className="about-feature-header">
                  <div className="about-feature-icon-circle">
                    <Utensils size={16} />
                  </div>
                  <h3 className="about-feature-title">NUTRITION GUIDANCE</h3>
                </div>
                <p className="about-feature-desc">
                  We measure progress, not just promises and we deliver.
                </p>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-header">
                  <div className="about-feature-icon-circle">
                    <Award size={16} />
                  </div>
                  <h3 className="about-feature-title">FOCUSED COACHING</h3>
                </div>
                <p className="about-feature-desc">
                  Backed by experience, a deep commitment to your success.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              className="btn-primary-yellow"
              onClick={onMeetTrainers}
            >
              MEET OUR TRAINERS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
