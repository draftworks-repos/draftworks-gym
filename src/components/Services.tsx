import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Dumbbell, Zap, Target, Activity, Flame, ShieldCheck } from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'strength',
    number: '01',
    category: 'PERFORMANCE',
    title: 'STRENGTH & CONDITIONING',
    description: 'Build raw muscular power and durability through science-backed barbell movements, progressive overload, and explosive kinetic chains.',
    image: '/assets/aistudio/img-4_758a261f.webp',
    icon: <Dumbbell size={18} />,
  },
  {
    id: 'personal-training',
    number: '02',
    category: '1-ON-1 COACHING',
    title: 'ELITE PERSONAL TRAINING',
    description: 'Customized programming tailored to your biomechanics, continuous technique refinement, and daily accountability from certified coaches.',
    image: '/assets/aistudio/img-1_8a23722a.webp',
    icon: <Target size={18} />,
  },
  {
    id: 'hiit',
    number: '03',
    category: 'ENDURANCE',
    title: 'HIGH INTENSITY INTERVALS',
    description: 'High-energy metabolic conditioning designed to spike your cardiovascular threshold, incinerate calories, and forge unstoppable stamina.',
    image: '/assets/aistudio/img-5_57effde2.webp',
    icon: <Flame size={18} />,
  },
  {
    id: 'hypertrophy',
    number: '04',
    category: 'PHYSIQUE',
    title: 'HYPERTROPHY & SCULPTING',
    description: 'Isolate muscle groups with pin-point precision using our biomechanically calibrated plate-loaded equipment and targeted rep schemes.',
    image: '/assets/aistudio/img-6_dc2985c0.webp',
    icon: <Zap size={18} />,
  },
  {
    id: 'calisthenics',
    number: '05',
    category: 'FUNCTIONAL',
    title: 'CALISTHENICS & CORE',
    description: 'Master your own bodyweight with progressive gymnastics strength, grip endurance, and rock-solid rotational core stability.',
    image: '/assets/aistudio/img-2_c7462009.webp',
    icon: <Activity size={18} />,
  },
  {
    id: 'mobility',
    number: '06',
    category: 'RECOVERY',
    title: 'MOBILITY & LONGEVITY',
    description: 'Bulletproof your joints, release chronic fascial tension, and accelerate tissue recovery with restorative stretching and mobility drills.',
    image: '/assets/aistudio/img-10_3694ba38.webp',
    icon: <ShieldCheck size={18} />,
  },
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);

  // Responsive items per view: 3 desktop, 2 tablet, 1 mobile
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1);
      } else if (width < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, SERVICES_DATA.length - itemsPerView);

  // Keep index in valid bounds on window resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Calculate slide percentage based on itemsPerView
  const cardWidthPercent = 100 / itemsPerView;
  const translateX = -(currentIndex * cardWidthPercent);

  return (
    <section id="services" className="services-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="services-header-row">
          <div className="services-header-text">
            <div className="section-kicker">
              <Dumbbell size={15} className="kicker-icon" />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="services-heading">
              BUILT FOR EVERY LEVEL OF AMBITION
            </h2>
          </div>

          <div className="services-counter-badge">
            <span className="counter-current">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="counter-sep">/</span>
            <span className="counter-total">
              {String(SERVICES_DATA.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div className="services-slider-viewport">
          <div
            ref={trackRef}
            className="services-slider-track"
            style={{
              transform: `translateX(${translateX}%)`,
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="service-card-slide"
                style={{
                  flex: `0 0 ${cardWidthPercent}%`,
                  maxWidth: `${cardWidthPercent}%`,
                }}
              >
                <div className="service-card-inner">
                  {/* Card Visual Header with Long Image */}
                  <div className="service-card-media">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-card-img"
                    />
                    <div className="service-card-media-overlay" />
                    
                    <div className="service-card-meta-bar">
                      <span className="service-card-category">
                        {service.category}
                      </span>
                      <span className="service-card-number">
                        {service.number}
                      </span>
                    </div>

                    <div className="service-icon-badge">
                      {service.icon}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="service-card-body">
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-desc">{service.description}</p>

                    {/* Action Button */}
                    <button
                      type="button"
                      className="btn-service-action"
                      onClick={() => onSelectService(service.title)}
                    >
                      EXPLORE SERVICE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons Row Below Container: Full Width Left & Right with margin matching card slide padding */}
        <div className="services-nav-controls-row">
          <button
            type="button"
            className="btn-services-nav btn-services-prev"
            onClick={handlePrev}
            aria-label="Previous services slide"
          >
            <ArrowLeft size={18} className="nav-arrow-icon" />
            <span>PREVIOUS</span>
          </button>

          <button
            type="button"
            className="btn-services-nav btn-services-next"
            onClick={handleNext}
            aria-label="Next services slide"
          >
            <span>NEXT</span>
            <ArrowRight size={18} className="nav-arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};
