import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  /** delay in ms for staggered reveals */
  delay?: number;
  /** distance to move up while animating */
  y?: number;
  /** optional className to pass to wrapper */
  className?: string;
}

export default function Reveal({ children, delay = 0, y = 16, className = '' }: RevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  const transformStart = `translateY(${y}px)`;
  const transformEnd = 'translateY(0)';

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? transformEnd : transformStart,
        transition: 'opacity 700ms ease, transform 700ms ease',
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}


