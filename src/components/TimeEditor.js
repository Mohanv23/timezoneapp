// TimeEditor.js
import React from 'react';

const TimeEditor = ({ onHourChange, onMinuteChange }) => {
  return (
    <div>
      <label>Hour:</label>
      <input type="number" min="0" onChange={onHourChange} />
      <label>Minute:</label>
      <input type="number" min="0" onChange={onMinuteChange} />
    </div>
  );
};

export default TimeEditor;
