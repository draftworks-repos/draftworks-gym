import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Smooth progress counter from 0 to 100
    const duration = 1500; // 1.5 seconds for snappy, premium feel
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      
      // Ease out quad for smooth deceleration towards 100
      const easedProgress = 1 - Math.pow(1 - rawProgress, 2.5);
      const currentNumber = Math.round(easedProgress * 100);

      setProgress(currentNumber);

      if (rawProgress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        // Hold at 100% for 180ms, then trigger fade out
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            onComplete();
          }, 500);
        }, 180);
      }
    };

    const animFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animFrame);
  }, [onComplete]);

  return (
    <div className={`loader-overlay ${isFading ? 'fade-out' : ''}`} aria-hidden="true">
      <div className="loader-number-wrapper">
        <span className="loader-number">{progress}</span>
        <span className="loader-percent">%</span>
      </div>
    </div>
  );
};
