// src/components/TimeEditor.js
import React from 'react';

const TimeEditor = ({ onHourChange, onMinuteChange }) => {
  // You can customize the range of hours and minutes based on your requirements
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div>
      <label>Hour:</label>
      <input type="number" min="0" onChange={onHourChange} />

      <label>Minute:</label>
      <input type="number" min="0" max="59" onChange={onMinuteChange} />
    </div>
  );
};

export default TimeEditor;
