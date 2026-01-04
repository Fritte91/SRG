import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll reveal animations
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @param {boolean} options.once - Only trigger animation once
 * @returns {Object} - Ref to attach to elements
 */
export const useScrollReveal = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
  } = options;

  const observerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold,
      rootMargin,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // If once is true, stop observing after first intersection
          if (once) {
            observerRef.current?.unobserve(entry.target);
          }
        } else if (!once) {
          // Remove visible class if we want animations to re-trigger
          entry.target.classList.remove('is-visible');
        }
      });
    }, observerOptions);

    // Observe all elements with reveal classes
    const elements = document.querySelectorAll('.reveal-on-scroll, .mobile-scale-in');
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observerRef.current?.unobserve(el);
      });
      observerRef.current?.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return observerRef;
};

/**
 * Hook to initialize scroll reveal for a component
 * Call this in components that need scroll animations
 */
export const useInitScrollReveal = (options = {}) => {
  useScrollReveal(options);
};
