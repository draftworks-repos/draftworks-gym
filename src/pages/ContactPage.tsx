import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  ExternalLink,
  Copy,
  Check,
  ArrowDown,
  Navigation,
} from 'lucide-react';

interface ContactPageProps {
  onJoinClick?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    trainingInterest: 'Personal Coaching & 1-on-1 Assessment',
    experienceLevel: 'Intermediate (1 - 3 Years)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lastMailtoUrl, setLastMailtoUrl] = useState('');

  const scrollToConsole = () => {
    const el = document.getElementById('contact-console-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const generateMailBody = () => {
    return `Hello Draftworks Team,

I am submitting an inquiry to train at Draftworks Gym. Here are my details:

=====================================
ATHLETE & CONTACT INFORMATION
=====================================
Full Name: ${formData.firstName.trim()} ${formData.lastName.trim()}
Email Address: ${formData.email.trim()}
Phone Number: ${formData.phone.trim()}

=====================================
TRAINING PREFERENCES
=====================================
Preferred Program / Interest: ${formData.trainingInterest}
Current Experience Level: ${formData.experienceLevel}

=====================================
GOALS & MESSAGE
=====================================
${formData.message.trim()}

=====================================
Sent from Draftworks Gym Official Contact Portal
Facility: 108 Iron District Blvd, Suite 400
Website: https://draftworks.in`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipient = 'contact@draftworks.in';
    const subject = `Draftworks Inquiry: ${formData.trainingInterest} - ${formData.firstName} ${formData.lastName}`;
    const body = generateMailBody();

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setLastMailtoUrl(mailtoUrl);

    // Open user's default email client with pre-filled content
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleCopyDetails = () => {
    const textToCopy = generateMailBody();
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="page-wrapper contact-page-wrapper">
      {/* 1. Big Full Screen Hero Section */}
      <section className="page-hero-fullscreen">
        <div className="page-hero-bg-media">
          <img
            src="/assets/aistudio/img-1_8a23722a.webp"
            alt="Draftworks Gym Training Facility"
            className="page-hero-bg-img"
          />
          <div className="page-hero-overlay" />
          <div className="page-hero-radial" />
        </div>

        <div className="site-container page-hero-content">
          <div className="page-hero-inner">
            <div className="hero-rating-badge">
              <span className="star-icon">★</span>
              <span>GET IN TOUCH </span>
            </div>

            <h1 className="page-hero-title">
              <span className="title-accent">START YOUR TRANSFORMATION.</span>
              <span>TALK TO A COACH.</span>
            </h1>

            <p className="page-hero-desc">
              Whether you want a private walkthrough of our 28,000 sq ft facility, a 1-on-1 movement assessment, or answers to membership options, our coaching directors are standing by.
            </p>

            <div className="page-hero-actions">
              <button
                type="button"
                className="btn-primary-yellow"
                onClick={scrollToConsole}
              >
                FILL INQUIRY FORM
              </button>
              <a
                href="tel:+15553723897"
                className="btn-page-hero-secondary"
              >
                CALL (555) 372-3897
              </a>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="page-hero-scroll-indicator"
          onClick={scrollToConsole}
          aria-label="Scroll to contact form"
        >
          <ArrowDown size={20} />
        </button>
      </section>

      {/* 2. Main Contact Console Section: Details + Form */}
      <section id="contact-console-section" className="contact-console-section">
        <div className="site-container">
          <div className="contact-console-grid">
            {/* Left Column: Direct Info & Socials */}
            <div className="contact-info-panel">
              <div className="section-kicker">
                <Navigation size={15} className="kicker-icon" />
                <span>Direct Access</span>
              </div>
              <h2 className="contact-panel-title">FACILITY &amp; INQUIRY DETAILS</h2>
              <p className="contact-panel-desc">
                Drop by in person, give our athletic desk a call, or connect with our coaching team directly on social channels.
              </p>

              <div className="contact-cards-stack">
                {/* Address Card */}
                <div className="contact-detail-card">
                  <div className="contact-detail-icon-wrap">
                    <MapPin size={22} />
                  </div>
                  <div className="contact-detail-text">
                    <span className="detail-category">PRIMARY TRAINING HEADQUARTERS</span>
                    <h3 className="detail-main-text">108 Iron District Blvd, Suite 400</h3>
                    <p className="detail-sub-text">Industrial Training Zone, NY 10014 (Free athlete parking on-site)</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="contact-detail-card">
                  <div className="contact-detail-icon-wrap">
                    <Mail size={22} />
                  </div>
                  <div className="contact-detail-text">
                    <span className="detail-category">ELECTRONIC INQUIRIES</span>
                    <a href="mailto:contact@draftworks.in" className="detail-link">
                      contact@draftworks.in
                    </a>
                    <p className="detail-sub-text">All emails reviewed by head coaching staff</p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="contact-detail-card">
                  <div className="contact-detail-icon-wrap">
                    <Phone size={22} />
                  </div>
                  <div className="contact-detail-text">
                    <span className="detail-category">DIRECT PHONE / WHATSAPP</span>
                    <a href="tel:+918959690529" className="detail-link">
                      +91 89596 90529
                    </a>
                    <p className="detail-sub-text">Available 7 days/week during facility training hours</p>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="contact-detail-card">
                  <div className="contact-detail-icon-wrap">
                    <Clock size={22} />
                  </div>
                  <div className="contact-detail-text">
                    <span className="detail-category">HOURS OF OPERATION</span>
                    <div className="detail-hours-row">
                      <span className="hours-day">Weekdays (Mon – Fri):</span>
                      <span className="hours-time">5:00 AM – 11:00 PM</span>
                    </div>
                    <div className="detail-hours-row">
                      <span className="hours-day">Weekends (Sat – Sun):</span>
                      <span className="hours-time">7:00 AM – 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="contact-socials-box">
                <span className="socials-box-title">FOLLOW THE TRAINING ARCHIVE</span>
                <div className="contact-social-icons">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                    aria-label="YouTube"
                  >
                    <Youtube size={18} />
                    <span>YouTube</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                    aria-label="Twitter / X"
                  >
                    <Twitter size={18} />
                    <span>Twitter/X</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Form */}
            <div className="contact-form-panel">
              <div className="form-panel-header">
                <h3 className="form-panel-title">SEND US A DIRECT INQUIRY</h3>
                <p className="form-panel-subtitle">
                  Fill out your details below. When you click submit, your default email client will automatically open with all your information pre filled and ready to send to <strong style={{ color: 'var(--color-primary)' }}>contact@draftworks.in</strong>.
                </p>
              </div>

              {submitted && (
                <div className="contact-success-banner" role="alert">
                  <div className="success-banner-top">
                    <CheckCircle2 size={24} className="success-icon" />
                    <div>
                      <h4 className="success-title">EMAIL CLIENT INITIATED!</h4>
                      <p className="success-desc">
                        A pre-filled email draft has been opened in your system's default email app. Simply click <strong>Send</strong> in your mail application to dispatch your message to <strong>contact@draftworks.in</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="success-actions">
                    {lastMailtoUrl && (
                      <a
                        href={lastMailtoUrl}
                        className="btn-success-reopen"
                      >
                        <ExternalLink size={15} />
                        RE-OPEN EMAIL CLIENT
                      </a>
                    )}
                    <button
                      type="button"
                      className="btn-success-copy"
                      onClick={handleCopyDetails}
                    >
                      {copied ? <Check size={15} /> : <Copy size={15} />}
                      {copied ? 'COPIED TO CLIPBOARD' : 'COPY INQUIRY DETAILS'}
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-actual-form">
                <div className="form-row-2">
                  <div className="form-field-group">
                    <label htmlFor="contact-first-name" className="field-label">
                      First Name <span className="req-star">*</span>
                    </label>
                    <input
                      id="contact-first-name"
                      type="text"
                      required
                      placeholder="Alex"
                      className="field-input"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="contact-last-name" className="field-label">
                      Last Name <span className="req-star">*</span>
                    </label>
                    <input
                      id="contact-last-name"
                      type="text"
                      required
                      placeholder="Mercer"
                      className="field-input"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field-group">
                    <label htmlFor="contact-form-email" className="field-label">
                      Email Address <span className="req-star">*</span>
                    </label>
                    <input
                      id="contact-form-email"
                      type="email"
                      required
                      placeholder="alex.mercer@example.com"
                      className="field-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="contact-form-phone" className="field-label">
                      Phone Number <span className="req-star">*</span>
                    </label>
                    <input
                      id="contact-form-phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 234-5678"
                      className="field-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field-group">
                    <label htmlFor="contact-program-select" className="field-label">
                      Primary Training Interest
                    </label>
                    <select
                      id="contact-program-select"
                      className="field-select"
                      value={formData.trainingInterest}
                      onChange={(e) => setFormData({ ...formData, trainingInterest: e.target.value })}
                    >
                      <option value="Personal Coaching & 1-on-1 Assessment">Personal Coaching &amp; 1-on-1 Assessment</option>
                      <option value="Elite Strength & Conditioning">Elite Strength &amp; Conditioning</option>
                      <option value="Olympic Weightlifting & Powerlifting">Olympic Weightlifting &amp; Powerlifting</option>
                      <option value="Functional High-Intensity Group Training">Functional High-Intensity Group Training</option>
                      <option value="Membership Inquiries (Starter / Pro / Elite)">Membership Inquiries (Starter / Pro / Elite)</option>
                      <option value="Facility Tour & Walkthrough">Facility Tour &amp; Walkthrough</option>
                      <option value="General Question / Other">General Question / Other</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="contact-exp-select" className="field-label">
                      Current Experience Level
                    </label>
                    <select
                      id="contact-exp-select"
                      className="field-select"
                      value={formData.experienceLevel}
                      onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    >
                      <option value="Beginner (0 - 1 Years)">Beginner (0 – 1 Years)</option>
                      <option value="Intermediate (1 - 3 Years)">Intermediate (1 – 3 Years)</option>
                      <option value="Advanced / Competitive Athlete (3+ Years)">Advanced / Competitive Athlete (3+ Years)</option>
                    </select>
                  </div>
                </div>

                <div className="form-field-group">
                  <label htmlFor="contact-form-message" className="field-label">
                    Goals, Background &amp; Message <span className="req-star">*</span>
                  </label>
                  <textarea
                    id="contact-form-message"
                    required
                    rows={5}
                    placeholder="Tell us about your fitness background, any injuries or targets, and when you would like to visit or start training..."
                    className="field-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-submit-contact"
                >
                  <Send size={18} />
                  <span>SUBMIT INQUIRY &amp; OPEN EMAIL CLIENT</span>
                </button>

                <p className="form-privacy-note">
                  Draftworks will never share or sell your contact information. By submitting, you agree to have an email draft generated to our training desk.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Google Map Section */}
      <section className="contact-map-section">
        <div className="site-container">
          <div className="map-header-row">
            <div>
              <div className="section-kicker">
                <MapPin size={15} className="kicker-icon" />
                <span>Facility Map</span>
              </div>
              <h2 className="section-title">FIND DRAFTWORKS ON THE MAP</h2>
              <p className="section-subtitle">
                Centrally located in the Industrial District with dedicated athlete parking and transit access.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=108+Iron+District+Blvd+New+York+NY"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-map-directions"
            >
              <Navigation size={16} />
              OPEN IN GOOGLE MAPS
            </a>
          </div>

          <div className="map-frame-wrapper">
            <iframe
              title="Draftworks Gym Facility Location"
              src="https://maps.google.com/maps?q=108+Iron+District+Blvd,+New+York,+NY&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="460"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="google-map-iframe"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
