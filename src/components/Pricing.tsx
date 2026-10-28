import React from "react";
import { Tag, Check } from "lucide-react";

interface PricingProps {
  onSelectPlan: (planName: string, price: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="pricing-header-center">
          <div className="section-kicker">
            <Tag size={15} className="kicker-icon" />
            <span>Pricing Plan</span>
          </div>

          <h2 className="pricing-title">CHOOSE YOUR PLAN</h2>

          <p className="pricing-subtitle">
            Choose a plan that fits your goals, schedule, and lifestyle we've
            got an option for you.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="pricing-cards-grid">
          {/* Plan 1: Starter */}
          <div className="pricing-card">
            <div className="pricing-card-top">
              <h3 className="plan-name">STARTER PLAN</h3>
              <p className="plan-description">
                A simple, affordable entry into fitness.
              </p>

              <div className="plan-price-row">
                <span className="price-currency">₹</span>
                <span className="price-amount">750</span>
                <span className="price-interval">/ month</span>
              </div>

              <ul className="plan-features-list">
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} />
                  </span>
                  <span>Gym access during off-peak hours</span>
                </li>
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} />
                  </span>
                  <span>2 group fitness classes per month</span>
                </li>
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} />
                  </span>
                  <span>One-time fitness assessment</span>
                </li>
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} />
                  </span>
                  <span>Access to workout tracking app</span>
                </li>
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} />
                  </span>
                  <span>Community group support</span>
                </li>
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} />
                  </span>
                  <span>Month-to-month billing, cancel anytime</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              className="btn-plan btn-plan-dark"
              onClick={() => onSelectPlan("Starter Plan", "₹750 / month")}
            >
              GET STARTED
            </button>
          </div>

          {/* Plan 2: Pro Plan (Featured Solid Yellow Card) */}
          <div className="pricing-card featured-card">
            <div className="pricing-card-top">
              <h3 className="plan-name">PRO PLAN</h3>
              <p className="plan-description">
                For regular gym-goers aiming to level up
              </p>

              <div className="plan-price-row">
                <span className="price-currency">₹</span>
                <span className="price-amount">2000</span>
                <span className="price-interval">/ 3 month</span>
              </div>

              <ul className="plan-features-list">
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <span>Unlimited 24/7 gym access</span>
                </li>
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <span>8 group fitness classes/month</span>
                </li>
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <span>Personalized workout program</span>
                </li>
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <span>Progress tracking &amp; analytics</span>
                </li>
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <span>Priority class booking</span>
                </li>
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <span>Monthly check-ins with a coach</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              className="btn-plan btn-plan-featured"
              onClick={() => onSelectPlan("Pro Plan", "₹2000 / 3 month")}
            >
              GET STARTED
            </button>
          </div>

          {/* Plan 3: Elite Membership */}
          <div className="pricing-card">
            <div className="pricing-card-top">
              <h3 className="plan-name">ELITE MEMBERSHIP</h3>
              <p className="plan-description">
                All-in access for serious transformation
              </p>

              <div className="plan-price-row">
                <span className="price-currency">₹</span>
                <span className="price-amount">4000</span>
                <span className="price-interval">/ 6 month</span>
              </div>

              <ul className="plan-features-list">
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} />
                  </span>
                  <span>Everything in Pro Plan</span>
                </li>
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} />
                  </span>
                  <span>2 personal training sessions/month</span>
                </li>
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} />
                  </span>
                  <span>Nutrition planning &amp; coaching</span>
                </li>
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} />
                  </span>
                  <span>Full body composition analysis</span>
                </li>
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} />
                  </span>
                  <span>Exclusive workshops &amp; VIP events</span>
                </li>
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} />
                  </span>
                  <span>Direct messaging with your coach</span>
                </li>
                <li className="plan-feature-item">
                  <span className="plan-feature-check">
                    <Check size={16} />
                  </span>
                  <span>Premium customer support</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              className="btn-plan btn-plan-dark"
              onClick={() =>
                onSelectPlan("Elite Membership", "₹4000 / 6 month")
              }
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
