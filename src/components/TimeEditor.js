// TimeEditor.js
import React from 'react';
import '../../src/styles/Timestyle.css';

const TimeEditor = ({ onHourChange, onMinuteChange }) => {
  return (
    <div className='time-editor mt-1'>
      <label>Add</label>
      <label>Hr:</label>
      <input type="number" min="0" onChange={onHourChange} />
      <label>Min:</label>
      <input type="number" min="0" onChange={onMinuteChange} />
    </div>
  );
};

export default TimeEditor;
