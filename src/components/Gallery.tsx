import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Camera, MoveHorizontal } from 'lucide-react';

const ROW_1_IMAGES = [
  { id: 'r1-1', src: '/assets/aistudio/img-1_8a23722a.webp', alt: 'Barbell deadlift training' },
  { id: 'r1-2', src: '/assets/aistudio/img-2_c7462009.webp', alt: 'Calisthenics pullups' },
  { id: 'r1-3', src: '/assets/aistudio/img-3_db8633e3.webp', alt: 'Dumbbell bench press' },
  { id: 'r1-4', src: '/assets/aistudio/img-4_758a261f.webp', alt: 'Heavy squat session' },
  { id: 'r1-5', src: '/assets/aistudio/img-5_57effde2.webp', alt: 'High intensity conditioning' },
  { id: 'r1-6', src: '/assets/aistudio/about_0c1cde98.webp', alt: 'Athlete conditioning' },
  { id: 'r1-7', src: '/assets/aistudio/img-3_db8633e3.webp', alt: 'Barbell press session' },
  { id: 'r1-8', src: '/assets/aistudio/img-7_00b0718e.webp', alt: 'Deadlift focus' },
];

const ROW_2_IMAGES = [
  { id: 'r2-1', src: '/assets/aistudio/img-6_dc2985c0.webp', alt: 'Cable crossover machine' },
  { id: 'r2-2', src: '/assets/aistudio/img-7_00b0718e.webp', alt: 'Strength training' },
  { id: 'r2-3', src: '/assets/aistudio/img-8_b3b1976b.webp', alt: 'Plate loaded chest press' },
  { id: 'r2-4', src: '/assets/aistudio/img-10_3694ba38.webp', alt: 'Mobility and recovery' },
  { id: 'r2-5', src: '/assets/aistudio/why_us_3e0876af.jpg', alt: 'Training hall atmosphere' },
  { id: 'r2-6', src: '/assets/aistudio/hero_a0ad6fc8.jpg', alt: 'Weight room energy' },
  { id: 'r2-7', src: '/assets/aistudio/about_0e367e33.jpg', alt: 'Gym floor' },
  { id: 'r2-8', src: '/assets/aistudio/img-2_c7462009.webp', alt: 'Bodyweight control' },
];

export const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef1 = useRef<HTMLDivElement>(null);
  const trackRef1 = useRef<HTMLDivElement>(null);
  const wrapperRef2 = useRef<HTMLDivElement>(null);
  const trackRef2 = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  // Position and drag states
  const [dragOffset1, setDragOffset1] = useState(0);
  const [isDragging1, setIsDragging1] = useState(false);
  const startX1 = useRef(0);
  const startOffset1 = useRef(0);

  const [dragOffset2, setDragOffset2] = useState(0);
  const [isDragging2, setIsDragging2] = useState(false);
  const startX2 = useRef(0);
  const startOffset2 = useRef(0);

  // Track scroll position
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const totalTravel = windowHeight + rect.height;
            const currentPosition = windowHeight - rect.top;
            const progress = Math.max(0, Math.min(1, currentPosition / totalTravel));
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to get boundary bounds for a track
  const getBounds = (
    wrapper: HTMLDivElement | null,
    track: HTMLDivElement | null
  ) => {
    if (!wrapper || !track) return { minX: -1000, maxX: 0 };
    const vpWidth = wrapper.clientWidth;
    const trWidth = track.scrollWidth;
    const minX = Math.min(0, vpWidth - trWidth);
    const maxX = 0;
    return { minX, maxX };
  };

  // Row 1 Handlers (starts near minX, moves right)
  const handlePointerDown1 = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging1(true);
    startX1.current = e.clientX;
    startOffset1.current = dragOffset1;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove1 = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging1) return;
    const deltaX = e.clientX - startX1.current;
    const { minX, maxX } = getBounds(wrapperRef1.current, trackRef1.current);

    // Calculate raw position including scroll
    const scrollTravelRange = Math.abs(minX) * 0.4;
    const baseScrollX = minX * 0.7 + scrollProgress * scrollTravelRange;
    const rawPos = baseScrollX + startOffset1.current + deltaX;

    // Strict boundary clamping:
    // If rawPos > maxX (0), stop dragging right so first image stays in vp.
    // If rawPos < minX, stop dragging left so last image stays in vp.
    if (rawPos > maxX) {
      setDragOffset1(maxX - baseScrollX);
    } else if (rawPos < minX) {
      setDragOffset1(minX - baseScrollX);
    } else {
      setDragOffset1(startOffset1.current + deltaX);
    }
  };

  const handlePointerUp1 = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging1) return;
    setIsDragging1(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
  };

  // Row 2 Handlers (starts near maxX (0), moves left)
  const handlePointerDown2 = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging2(true);
    startX2.current = e.clientX;
    startOffset2.current = dragOffset2;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove2 = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging2) return;
    const deltaX = e.clientX - startX2.current;
    const { minX, maxX } = getBounds(wrapperRef2.current, trackRef2.current);

    const scrollTravelRange = Math.abs(minX) * 0.4;
    const baseScrollX = -0.1 * Math.abs(minX) - scrollProgress * scrollTravelRange;
    const rawPos = baseScrollX + startOffset2.current + deltaX;

    // Strict boundary clamping
    if (rawPos > maxX) {
      setDragOffset2(maxX - baseScrollX);
    } else if (rawPos < minX) {
      setDragOffset2(minX - baseScrollX);
    } else {
      setDragOffset2(startOffset2.current + deltaX);
    }
  };

  const handlePointerUp2 = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging2) return;
    setIsDragging2(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
  };

  // Compute final positions with clamping
  const bounds1 = getBounds(wrapperRef1.current, trackRef1.current);
  const scrollRange1 = Math.abs(bounds1.minX) * 0.4;
  const baseScrollX1 = bounds1.minX * 0.7 + scrollProgress * scrollRange1;
  const rawX1 = baseScrollX1 + dragOffset1;
  const finalX1 = Math.max(bounds1.minX, Math.min(bounds1.maxX, rawX1));

  const bounds2 = getBounds(wrapperRef2.current, trackRef2.current);
  const scrollRange2 = Math.abs(bounds2.minX) * 0.4;
  const baseScrollX2 = -0.1 * Math.abs(bounds2.minX) - scrollProgress * scrollRange2;
  const rawX2 = baseScrollX2 + dragOffset2;
  const finalX2 = Math.max(bounds2.minX, Math.min(bounds2.maxX, rawX2));

  return (
    <section id="gallery" ref={sectionRef} className="gallery-section">
      <div className="site-container gallery-header-container">
        <div className="section-kicker">
          <Camera size={15} className="kicker-icon" />
          <span>TRAINING GALLERY</span>
        </div>
        <div className="gallery-header-row">
          <h2 className="gallery-title">MOMENTS FORGED IN IRON</h2>
          <div className="gallery-hint-badge">
            <MoveHorizontal size={14} />
            <span>GRAB &amp; DRAG ROWS</span>
          </div>
        </div>
      </div>

      {/* Gallery Strip 1: Moves RIGHT on scroll, clamped dragging */}
      <div
        ref={wrapperRef1}
        className={`gallery-row-wrapper ${isDragging1 ? 'is-dragging' : ''}`}
        onPointerDown={handlePointerDown1}
        onPointerMove={handlePointerMove1}
        onPointerUp={handlePointerUp1}
        onPointerCancel={handlePointerUp1}
      >
        <div
          ref={trackRef1}
          className="gallery-row-track"
          style={{
            transform: `translate3d(${finalX1}px, 0, 0)`,
            transition: isDragging1 ? 'none' : 'transform 0.2s ease-out',
          }}
        >
          {ROW_1_IMAGES.map((img, idx) => (
            <div key={`${img.id}-${idx}`} className="gallery-photo-item">
              <img
                src={img.src}
                alt={img.alt}
                className="gallery-photo-img"
                draggable={false}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Strip 2: Moves LEFT on scroll, clamped dragging */}
      <div
        ref={wrapperRef2}
        className={`gallery-row-wrapper ${isDragging2 ? 'is-dragging' : ''}`}
        onPointerDown={handlePointerDown2}
        onPointerMove={handlePointerMove2}
        onPointerUp={handlePointerUp2}
        onPointerCancel={handlePointerUp2}
      >
        <div
          ref={trackRef2}
          className="gallery-row-track"
          style={{
            transform: `translate3d(${finalX2}px, 0, 0)`,
            transition: isDragging2 ? 'none' : 'transform 0.2s ease-out',
          }}
        >
          {ROW_2_IMAGES.map((img, idx) => (
            <div key={`${img.id}-${idx}`} className="gallery-photo-item">
              <img
                src={img.src}
                alt={img.alt}
                className="gallery-photo-img"
                draggable={false}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
