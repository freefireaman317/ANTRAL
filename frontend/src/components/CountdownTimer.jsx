import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date(siteConfig.eventDate).getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 min-w-[70px] sm:min-w-[100px] transform hover:scale-105 transition-transform duration-300 shadow-lg">
        <div className="text-3xl sm:text-5xl font-bold text-white">{String(value).padStart(2, '0')}</div>
      </div>
      <div className="mt-2 text-xs sm:text-sm font-medium text-white/80 uppercase tracking-wider">{label}</div>
    </div>
  );

  return (
    <div className="flex justify-center items-center space-x-2 sm:space-x-4">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="text-2xl sm:text-4xl text-white font-bold pb-8">:</div>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="text-2xl sm:text-4xl text-white font-bold pb-8">:</div>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <div className="text-2xl sm:text-4xl text-white font-bold pb-8">:</div>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
