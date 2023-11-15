// src/components/TimeDisplay.js
import React from 'react';

const TimeDisplay = ({ timezone, currentTime }) => {
  return (
    <div>
      <h2>{timezone} Time</h2>
      <p>{currentTime.toLocaleString()}</p>
    </div>
  );
};

export default TimeDisplay;
