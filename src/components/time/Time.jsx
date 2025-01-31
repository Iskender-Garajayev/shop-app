import React, { useState, useEffect } from 'react';
import './Time.css'


const Time = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countdownDate = new Date('2025-12-31T00:00:00Z').getTime(); // Change this to your desired countdown date

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  return (
    <div className='time-container' >
      <div> <p>day</p>
       {countdown.days}
      </div>
      
      <span>:</span>
      <div> <p>hours</p> {countdown.hours}  </div>
      <span>:</span>
      <div> <p>minutes</p> {countdown.minutes} </div>
      <span>:</span>
      <div> <p>seconds</p> {countdown.seconds} </div>
    </div>
  );
};

export default Time;
