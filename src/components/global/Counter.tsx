"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  targetNumber: number;
  duration: number; // in milliseconds
}

export default function Counter({ targetNumber, duration }: CounterProps) {
  const [count, setCount] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("counter-section");
      if (!element) return; // guard against null

      const rect = element.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        if (!hasStarted) {
          setHasStarted(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasStarted]);

  useEffect(() => {
    let start = 0;
    if (hasStarted) {
      const increment = targetNumber / (duration / 10); // 10ms steps
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 10);

      return () => clearInterval(timer);
    }
  }, [hasStarted, targetNumber, duration]);

  return (
    <div id="counter-section" className="text-4xl font-bold text-center">
      {count}
    </div>
  );
}
