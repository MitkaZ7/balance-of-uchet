'use client';

import React, { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  from?: number; // Начальное значение (по умолчанию 0)
  to: number; // Конечное значение
  duration?: number; // Длительность анимации в миллисекундах
  decimals?: number; // Количество знаков после запятой
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 2000,
  decimals = 0,
}) => {
  const [currentValue, setCurrentValue] = useState(from);

  useEffect(() => {
    const startTime = Date.now();
    // const endTime = startTime + duration;

    const tick = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1); // Ограничиваем прогресс до 1
      const value = from + progress * (to - from);
      setCurrentValue(Number(value.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);

    return () => {
      // Чистим анимацию при размонтировании компонента
      setCurrentValue(from);
    };
  }, [from, to, duration, decimals]);

  return <>{currentValue}</>;
};
