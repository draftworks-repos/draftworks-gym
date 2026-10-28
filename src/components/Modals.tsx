import React, { useState, useEffect, useRef } from "react";
import { X, CheckCircle2, Play } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-box">
            <div className="modal-success-icon">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="modal-title">MESSAGE RECEIVED</h3>
            <p className="modal-desc">
              Thank you {formData.name || "there"}! A Draftworks fitness advisor
              will reach out to you within 24 hours.
            </p>
            <button
              type="button"
              className="btn-primary-yellow"
              style={{ width: "100%" }}
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
            >
              DONE
            </button>
          </div>
        ) : (
          <div>
            <h3 className="modal-title">CONTACT DRAFTWORKS</h3>
            <p className="modal-desc">
              Have a question about our facility, training programs, or coaches?
              Send us a quick note.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-phone">
                  Phone Number (Optional)
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-msg">
                  How can we help?
                </label>
                <textarea
                  id="contact-msg"
                  placeholder="Tell us about your fitness goals or questions..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="btn-primary-yellow"
                style={{ width: "100%", marginTop: "10px" }}
              >
                SEND INQUIRY
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

interface JoinModalProps {
  isOpen: boolean;
  selectedPlan: string;
  selectedPrice: string;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  selectedPlan,
  selectedPrice,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-box">
            <div className="modal-success-icon">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="modal-title">YOU'RE READY TO DRAFT!</h3>
            <p className="modal-desc">
              Welcome {name}! Your invitation and access pass for{" "}
              <strong>{selectedPlan}</strong> ({selectedPrice}) has been sent to{" "}
              <strong>{email}</strong>.
            </p>
            <button
              type="button"
              className="btn-primary-yellow"
              style={{ width: "100%" }}
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
            >
              CLOSE
            </button>
          </div>
        ) : (
          <div>
            <h3 className="modal-title">JOIN DRAFTWORKS</h3>
            <p className="modal-desc">
              Selected:{" "}
              <strong style={{ color: "var(--color-primary)" }}>
                Immediate Access
              </strong>
              . Start your transformation today.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="join-name">
                  Full Name
                </label>
                <input
                  id="join-name"
                  type="text"
                  required
                  placeholder="Alex Rivera"
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="join-email">
                  Email Address
                </label>
                <input
                  id="join-email"
                  type="email"
                  required
                  placeholder="alex@gmail.com"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="join-start">
                  Preferred Start Time
                </label>
                <select id="join-start" className="form-select">
                  <option>Immediate Access (Today)</option>
                  <option>Starting next Monday</option>
                  <option>Schedule facility orientation first</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-primary-yellow"
                style={{ width: "100%", marginTop: "12px" }}
              >
                CONFIRM &amp; GET ACCESS PASS
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted without user interaction/unmuted; controls are readily available.
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Draftworks Facility & Workout Video"
    >
      <div
        className="modal-dialog video-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          style={{
            top: 12,
            right: 12,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            color: "#ffffff",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            zIndex: 20,
            cursor: "pointer",
          }}
          onClick={onClose}
          aria-label="Close video"
        >
          <X size={22} />
        </button>

        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            backgroundColor: "#000000",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <video
            ref={videoRef}
            src="https://www.pexels.com/download/video/39347711/"
            poster="/assets/aistudio/img-4_758a261f.webp"
            controls
            autoPlay
            playsInline
            preload="auto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "#000000",
              display: "block",
            }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

interface TrainersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrainersModal: React.FC<TrainersModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const trainers = [
    {
      name: "Marcus Vance",
      role: "Head Strength & Conditioning",
      exp: "10+ Years Experience",
      image: "/assets/aistudio/img-1_8a23722a.webp",
    },
    {
      name: "David Keller",
      role: "Hypertrophy & Biomechanics Specialist",
      exp: "8+ Years Experience",
      image: "/assets/aistudio/img-6_dc2985c0.webp",
    },
    {
      name: "Carlos Mendez",
      role: "Performance Coach & Clinical Nutritionist",
      exp: "12+ Years Experience",
      image: "/assets/aistudio/img-10_3694ba38.webp",
    },
  ];

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-dialog"
        style={{ maxWidth: 680 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <h3 className="modal-title">MEET OUR ELITE COACHES</h3>
        <p className="modal-desc">
          Certified specialists dedicated to unlocking your peak physical and
          mental potential.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16,
          }}
        >
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              style={{
                background: "#1a1c22",
                borderRadius: 6,
                overflow: "hidden",
                border: "1px solid #282c35",
              }}
            >
              <div style={{ height: 180, overflow: "hidden" }}>
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "14px 12px" }}>
                <h4
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: 4,
                  }}
                >
                  {trainer.name}
                </h4>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-primary)",
                    fontWeight: 600,
                    marginBottom: 2,
                  }}
                >
                  {trainer.role}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#8c93a0" }}>
                  {trainer.exp}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-dialog modal-dialog-legal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <h3 className="modal-title">DRAFTWORKS PRIVACY POLICY</h3>
        <p className="modal-desc">
          Effective date: October 2026. Your privacy, health confidentiality,
          and data protection are fundamental to our mission.
        </p>

        <div className="legal-modal-body">
          <section className="legal-section">
            <h4>1. Information We Collect</h4>
            <p>
              When you enroll as a Draftworks member or use our training
              facilities, we collect information necessary to deliver
              exceptional athletic services:
            </p>
            <ul>
              <li>
                <strong>Contact &amp; Identity Data:</strong> Name, email
                address, phone number, emergency contacts, and photographic ID
                for secure check-ins.
              </li>
              <li>
                <strong>Physical &amp; Assessment Metrics:</strong> Voluntary
                biometric check-ins (body composition, baseline strength
                benchmarks, mobility restrictions) provided during personal
                coaching consultations.
              </li>
              <li>
                <strong>Membership &amp; Payment Records:</strong> Billing
                address, plan tier, transaction history (card details are
                processed via PCI-DSS compliant gateways and never stored on our
                local servers).
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h4>2. How We Use Your Data</h4>
            <p>
              Your data is solely used to enhance your training experience,
              manage club admissions, guarantee security across our Iron
              District facility, and send scheduling updates for coaching
              appointments.
            </p>
          </section>

          <section className="legal-section">
            <h4>3. Health &amp; Biometric Information Protection</h4>
            <p>
              We treat your physical conditioning and nutrition data with
              clinical rigor. Draftworks never sells, licenses, or exchanges
              member information with third-party advertisers or insurance
              brokers.
            </p>
          </section>

          <section className="legal-section">
            <h4>4. Security Safeguards</h4>
            <p>
              All digital communications and member access credentials are
              encrypted using industry-standard TLS protocols. Physical access
              to private evaluation suites is restricted to authorized coaches.
            </p>
          </section>

          <section className="legal-section">
            <h4>5. Your Privacy Rights</h4>
            <p>
              You have the right to inspect, correct, export, or permanently
              delete your membership records at any time by speaking with
              front-desk staff or emailing{" "}
              <strong>privacy@draftworks-gym.com</strong>.
            </p>
          </section>
        </div>

        <div
          style={{
            marginTop: "24px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            type="button"
            className="btn-primary-yellow"
            onClick={onClose}
          >
            I UNDERSTAND
          </button>
        </div>
      </div>
    </div>
  );
};

export const TermsModal: React.FC<PolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-dialog modal-dialog-legal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <h3 className="modal-title">MEMBERSHIP TERMS OF SERVICE</h3>
        <p className="modal-desc">
          Rules, facility etiquette, and terms governing your Draftworks
          membership.
        </p>

        <div className="legal-modal-body">
          <section className="legal-section">
            <h4>1. Facility Access &amp; Membership Badges</h4>
            <p>
              All members must scan their active credentials upon entering the
              facility. Memberships are non-transferable and can only be used by
              the registered individual.
            </p>
          </section>

          <section className="legal-section">
            <h4>2. Gym Etiquette &amp; Safety Standards</h4>
            <p>To maintain the standard of excellence:</p>
            <ul>
              <li>
                Re-rack all barbells, dumbbells, and weight plates to their
                designated storage horns after each set.
              </li>
              <li>Sanitize equipment with antimicrobial wipes after use.</li>
              <li>
                Chalk must remain contained in designated lifting chalk bowls.
              </li>
              <li>
                Closed-toe athletic footwear is required on all training floors.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h4>3. Physical Fitness &amp; Assumption of Risk</h4>
            <p>
              Physical resistance training and cardiovascular exertion
              inherently involve physical demand. Members acknowledge that they
              participate voluntarily and have consulted with their healthcare
              provider regarding their fitness readiness.
            </p>
          </section>

          <section className="legal-section">
            <h4>4. Cancellation &amp; Freezes</h4>
            <p>
              Draftworks memberships can be frozen or canceled with a
              straightforward 30-day notice without hidden penalties. Contact
              member services at <strong>billing@draftworks-gym.com</strong>.
            </p>
          </section>
        </div>

        <div
          style={{
            marginTop: "24px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            type="button"
            className="btn-primary-yellow"
            onClick={onClose}
          >
            ACCEPT TERMS
          </button>
        </div>
      </div>
    </div>
  );
};
