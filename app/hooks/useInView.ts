'use client';
import { useState, useEffect, RefObject } from 'react';

export function useInView(
  ref: RefObject<HTMLElement>,
  options?: IntersectionObserverInit
) {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      const inView = entry.isIntersecting;
      setIsInView(inView);
      if (inView && !hasBeenInView) {
        setHasBeenInView(true);
      }
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options, hasBeenInView]);

  return { isInView, hasBeenInView };
}
