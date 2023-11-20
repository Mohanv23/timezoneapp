// TimeEditor.js
import React from 'react';
import '../../src/styles/Timestyle.css';

const TimeEditor = ({ onHourChange, onMinuteChange }) => {
  return (
    <div className='time-editor mt-1'>
      <div className="input-group">
        <label>Hr+</label>
        <input type="number" min="0" max="23" onChange={onHourChange} />
      </div>
      <div className="input-group">
        <label>Min+</label>
        <input type="number" min="0" max="59" onChange={onMinuteChange} />
      </div>
    </div>
  );
};

export default TimeEditor;
