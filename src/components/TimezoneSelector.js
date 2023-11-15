// src/components/TimezoneSelector.js
import React from 'react';

const TimezoneSelector = ({ onChange }) => {
  // Replace with your actual list of timezones
  const timezones = ['Asia/Kolkata', 'Europe/London', 'Africa/Harare', 'America/Chicago'];

  return (
    <div>
      <label>Select Timezone:</label>
      <select onChange={onChange}>
        {timezones.map((timezone, index) => (
          <option key={index} value={timezone}>
            {timezone}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimezoneSelector;
