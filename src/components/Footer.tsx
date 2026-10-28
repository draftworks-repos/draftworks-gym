import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Youtube, Twitter, Facebook } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onNavigate?: (page: 'home' | 'about' | 'contact', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onNavigate,
}) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (e: React.MouseEvent, page: 'home' | 'about' | 'contact', sectionId?: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page, sectionId);
    }
  };

  return (
    <footer className="site-footer">
      <div className="site-container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Column: Logo only, no text */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <a
                href="#hero"
                onClick={(e) => handleNav(e, 'home', 'hero')}
                aria-label="Draftworks Home"
              >
                <img
                  src="/assets/aistudio/templogo_4279d28a.png"
                  alt="Draftworks Gym"
                  className="footer-logo-img"
                />
              </a>
            </div>
            <p className="footer-brand-desc">
              Forged for strength, longevity, and peak physical potential. Science-backed programming, world-class equipment, and an uncompromising community.
            </p>

            {/* Social Icons instead of certified training facility */}
            <div className="footer-social-row">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="YouTube"
              >
                <Youtube size={17} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Twitter / X"
              >
                <Twitter size={17} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Facebook"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">NAVIGATION</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#hero" onClick={(e) => handleNav(e, 'home', 'hero')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about-page" onClick={(e) => handleNav(e, 'about')}>
                  About Draftworks
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNav(e, 'home', 'services')}>
                  Our Services
                </a>
              </li>
              <li>
                <a href="#coaches" onClick={(e) => handleNav(e, 'home', 'coaches')}>
                  Our Coaches
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleNav(e, 'home', 'gallery')}>
                  Training Gallery
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleNav(e, 'home', 'pricing')}>
                  Membership Pricing
                </a>
              </li>
              <li>
                <a href="#contact-page" onClick={(e) => handleNav(e, 'contact')}>
                  Contact &amp; Location
                </a>
              </li>
            </ul>
          </div>

          {/* Facility Information with hours, location, phone & email */}
          <div className="footer-hours-col">
            <h4 className="footer-heading">FACILITY INFORMATION</h4>
            <ul className="footer-info-list">
              <li className="footer-info-item">
                <Clock size={16} className="info-icon" />
                <div>
                  <span className="info-label">Weekdays:</span>
                  <span className="info-val">5:00 AM – 11:00 PM</span>
                </div>
              </li>
              <li className="footer-info-item">
                <Clock size={16} className="info-icon" />
                <div>
                  <span className="info-label">Weekends:</span>
                  <span className="info-val">7:00 AM – 9:00 PM</span>
                </div>
              </li>
              <li className="footer-info-item">
                <MapPin size={16} className="info-icon" />
                <div>
                  <span className="info-label">Location:</span>
                  <span className="info-val">108 Iron District Blvd, Suite 400</span>
                </div>
              </li>
              <li className="footer-info-item">
                <Phone size={16} className="info-icon" />
                <div>
                  <span className="info-label">Phone:</span>
                  <a href="tel:+15553723897" className="footer-contact-link">
                    +1 (555) 372-3897
                  </a>
                </div>
              </li>
              <li className="footer-info-item">
                <Mail size={16} className="info-icon" />
                <div>
                  <span className="info-label">Email:</span>
                  <a href="mailto:contact@draftworks.in" className="footer-contact-link">
                    contact@draftworks.in
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Policies & Legal (Only first 2 options) */}
          <div className="footer-legal-col">
            <h4 className="footer-heading">POLICIES &amp; LEGAL</h4>
            <ul className="footer-links-list">
              <li>
                <button
                  type="button"
                  className="footer-legal-btn"
                  onClick={onOpenPrivacy}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-legal-btn"
                  onClick={onOpenTerms}
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright on left, Design & Developed by draftworks.in on right */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {currentYear} Draftworks Gym LLC. All rights reserved. Built for champions.
          </p>
          
          <p className="footer-credits">
            Design &amp; Developed by{' '}
            <a
              href="https://draftworks.in"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-domain-link"
            >
              draftworks.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
