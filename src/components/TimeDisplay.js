// src/components/TimeDisplay.js
import React from 'react';

const TimeDisplay = ({ timezone, currentTime }) => {
  return (
    <div>
    {timezone === 'Asia/Kolkata' && <h2>Sword India</h2>}
    {timezone === 'Europe/London' && <h2>Kaplan UK</h2>}
    {timezone === 'Africa/Johannesburg' && <h2>NAV Seaside</h2>}
    {timezone === 'America/Chicago' && <h2>Pearson Vue</h2>}        
    </div>
  );
};

export default TimeDisplay;
