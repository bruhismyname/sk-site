'use client';
import { useState, useEffect } from 'react';

export function useCounter(
  end: number,
  duration: number = 2000,
  startCounting: boolean = false
) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (startCounting && !hasStarted) {
      setHasStarted(true);
      let startTime: number | null = null;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        setCount(Math.floor(progress * (end - startValue) + startValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [startCounting, end, duration, hasStarted]);

  return count;
}
