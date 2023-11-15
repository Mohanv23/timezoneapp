// src/components/TimeboxControl.js
import React, { useState } from 'react';

const TimeboxControl = ({ onUpdate }) => {
  const [selectedTimezone, setSelectedTimezone] = useState('Asia/Kolkata');
  const [additionalHours, setAdditionalHours] = useState(0);
  const [additionalMinutes, setAdditionalMinutes] = useState(0);

  const handleTimezoneChange = (event) => {
    setSelectedTimezone(event.target.value);
  };

  const handleHourChange = (event) => {
    setAdditionalHours(parseInt(event.target.value, 10) || 0);
  };

  const handleMinuteChange = (event) => {
    setAdditionalMinutes(parseInt(event.target.value, 10) || 0);
  };

  const handleUpdate = () => {
    onUpdate({
      timezone: selectedTimezone,
      additionalHours,
      additionalMinutes,
    });
  };

  return (
    <div>
      <h2>Timebox Control</h2>
      <div>
        <label>Select Timezone: </label>
        <select onChange={handleTimezoneChange} value={selectedTimezone}>
          {/* Add your timezone options here */}
        </select>
      </div>
      <div>
        <label>Add Hours: </label>
        <input type="number" min="0" onChange={handleHourChange} value={additionalHours} />
      </div>
      <div>
        <label>Add Minutes: </label>
        <input type="number" min="0" onChange={handleMinuteChange} value={additionalMinutes} />
      </div>
      <button onClick={handleUpdate}>Submit</button>
    </div>
  );
};

export default TimeboxControl;
