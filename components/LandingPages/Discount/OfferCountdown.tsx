"use client";
import { useEffect, useState } from "react";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const OfferCountdown: React.FC = () => {
  const targetDate = new Date("2024-12-20T17:25:00").getTime();

  const calculateTimeLeft = (): CountdownTime => {
    const difference = targetDate - new Date().getTime();
    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center justify-center text-white">
      {/* Mobile */}
      <div className="mx-8 flex items-center rounded-xl border border-white border-opacity-20 px-6 py-10 text-center lg:hidden">
        {["Days", "Hours", "Minutes", "Seconds"].map((unit, i) => (
          <div
            key={unit}
            className="flex min-w-24 items-end justify-center gap-1 text-[#2DC6F5]"
          >
            <p className="text-xl font-semibold">
              {formatNumber(
                timeLeft[unit.toLowerCase() as keyof CountdownTime]
              )}
            </p>
            <span className="text-sm">{unit}</span>
            {i < 3 && (
              <p className="text-base font-medium text-white opacity-60">:</p>
            )}
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden items-center space-x-6 rounded-xl border border-white border-opacity-20 p-10 text-center lg:flex">
        {["Days", "Hours", "Minutes", "Seconds"].map((unit, i) => (
          <div
            key={unit}
            className="flex min-w-36 items-end justify-center gap-1 text-[#2DC6F5]"
          >
            <p className="text-6xl font-semibold">
              {formatNumber(
                timeLeft[unit.toLowerCase() as keyof CountdownTime]
              )}
            </p>
            <span className="text-lg">{unit}</span>
            {i < 3 && (
              <p className="text-3xl font-medium text-white opacity-60">:</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferCountdown;
