'use client';
import { useState, useEffect } from 'react';
import '@/style/custom.css';
import { cn } from '@/lib/utils';

interface Number {
  value: number;
  className: string;
  duration: number;
  incrementPlus: number;
}
const NumberAnimation = ({
  value,
  className,
  duration,
  incrementPlus,
}: Number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) =>
        prevCount < value ? prevCount + incrementPlus : prevCount
      );
    }, duration);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [value]);

  return <div className={cn('font-bold text-brand', className)}>{count}+</div>;
};

export default NumberAnimation;
