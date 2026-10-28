import React from 'react';
import { Users, Award, Shield, ArrowUpRight } from 'lucide-react';

interface CoachItem {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  experience: string;
  bio: string;
  image: string;
}

const COACHES_DATA: CoachItem[] = [
  {
    id: 'marcus-vance',
    name: 'MARCUS VANCE',
    role: 'HEAD STRENGTH & CONDITIONING',
    specialties: ['Olympic Weightlifting', 'Progressive Overload', 'Athletic Biomechanics'],
    experience: '10+ Years Exp',
    bio: 'Former collegiate strength director specializing in barbell kinetic chain optimization and power development for serious lifters.',
    image: '/assets/aistudio/img-1_8a23722a.webp',
  },
  {
    id: 'elena-rostova',
    name: 'ELENA ROSTOVA',
    role: 'MOBILITY & BIOMECHANICS DIRECTOR',
    specialties: ['Functional Movement', 'Gymnastic Strength', 'Injury Prevention'],
    experience: '8+ Years Exp',
    bio: 'Elite movement authority combining progressive calisthenics with targeted fascial restoration to build supple, durable physiques.',
    image: '/assets/aistudio/about_0c1cde98.webp',
  },
  {
    id: 'carlos-mendez',
    name: 'CARLOS MENDEZ',
    role: 'LEAD HYPERTROPHY & NUTRITION',
    specialties: ['Body Composition', 'Metabolic Periodization', 'Contest Prep'],
    experience: '12+ Years Exp',
    bio: 'Clinical nutritionist and physique specialist using science-backed hypertrophy volume and nutrient timing to drive body recomposition.',
    image: '/assets/aistudio/img-10_3694ba38.webp',
  },
];

interface CoachesProps {
  onBookCoach: (coachName: string) => void;
}

export const Coaches: React.FC<CoachesProps> = ({ onBookCoach }) => {
  return (
    <section id="coaches" className="coaches-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="coaches-header-row">
          <div>
            <div className="section-kicker">
              <Users size={15} className="kicker-icon" />
              <span>ELITE COACHING STAFF</span>
            </div>
            <h2 className="coaches-heading">
              TRAIN WITH WORLD-CLASS SPECIALISTS
            </h2>
          </div>
          <p className="coaches-subheading">
            Our certified masters don't just count reps. They engineer personalized biomechanical programming tailored to your unique anatomical structure.
          </p>
        </div>

        {/* 3 Coaches Grid */}
        <div className="coaches-grid">
          {COACHES_DATA.map((coach) => (
            <div key={coach.id} className="coach-card">
              {/* Coach Media */}
              <div className="coach-media-box">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="coach-img"
                  loading="lazy"
                />
                <div className="coach-media-gradient" />
                
                <div className="coach-badge-exp">
                  <Award size={13} className="badge-icon" />
                  <span>{coach.experience}</span>
                </div>
              </div>

              {/* Coach Info */}
              <div className="coach-content">
                <div className="coach-role-tag">{coach.role}</div>
                <h3 className="coach-name">{coach.name}</h3>
                <p className="coach-bio">{coach.bio}</p>

                {/* Action Button */}
                <button
                  type="button"
                  className="btn-coach-book"
                  onClick={() => onBookCoach(coach.name)}
                >
                  <span>BOOK 1-ON-1 CONSULTATION</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
