'use client';

import { useEffect } from 'react';

export default function ScrollMotion() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      elements.forEach((element) => { element.dataset.visible = 'true'; });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.visible = 'true';
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -56px 0px' });

    elements.forEach((element) => observer.observe(element));
    document.documentElement.dataset.motionReady = 'true';

    return () => {
      observer.disconnect();
      delete document.documentElement.dataset.motionReady;
    };
  }, []);

  return null;
}
