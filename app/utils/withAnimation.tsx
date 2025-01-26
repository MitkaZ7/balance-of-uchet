'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface WithAnimationProps {
  children: React.ReactElement<React.HTMLProps<HTMLElement>>; // Типизируем дочерний элемент
  animationClass?: string; // Класс анимации
  delay?: number; // Задержка для анимации
  index?: number; // Индекс для последовательных задержек
  threshold?: number; // Порог видимости
}

export const WithAnimation: React.FC<WithAnimationProps> = ({
  children,
  animationClass = 'fade-in', // Стандартная анимация по умолчанию
  delay = 0,
  index = 0,
  threshold = 0.2,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });
  const [classApplied, setClassApplied] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setClassApplied(true), delay * index);
      return () => clearTimeout(timer); // Очищаем таймер при размонтировании
    }
  }, [inView, delay, index]);

  // Проверяем, что элемент корректен и поддерживает ref
  if (!React.isValidElement(children)) {
    console.error('WithAnimation expects a single React element as its child.');
    return null;
  }

  return React.cloneElement(children, {
    ref, // Передаем ref для наблюдения
    className: `${animationClass} ${classApplied ? 'in-view' : ''} ${children.props.className || ''}`.trim(),
  });
};
