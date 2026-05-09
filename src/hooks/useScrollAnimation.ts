'use client';

import { useEffect, useRef } from 'react';

export function useScrollAnimation(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('section-hidden');
            entry.target.classList.add('section-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useStaggerAnimation(childSelector: string, delay = 120, options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll(childSelector);
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.remove('section-hidden');
                child.classList.add('section-reveal');
              }, i * delay);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [childSelector, delay]);

  return ref;
}
