// src/components/TimezoneBox.js
import React, { useState, useEffect } from 'react';
import TimezoneSelector from './TimezoneSelector';
import TimeDisplay from './TimeDisplay';
import TimeEditor from './TimeEditor';

const TimezoneBox = () => {
  const [selectedTimezone, setSelectedTimezone] = useState('Asia/Kolkata'); // Default timezone
  const [localTime, setLocalTime] = useState(new Date());
  const [addHours, setAddHours] = useState(0);
  const [addMinutes, setAddMinutes] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLocalTime(new Date()); // Update the local time every second
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const calculateUpdatedTime = () => {
    const updatedTime = new Date(localTime);
    updatedTime.setHours(updatedTime.getHours() + addHours);
    updatedTime.setMinutes(updatedTime.getMinutes() + addMinutes);
    return updatedTime;
  };

  const handleTimezoneChange = (event) => {
    setSelectedTimezone(event.target.value);
  };

  const handleHourChange = (event) => {
    setAddHours(parseInt(event.target.value, 10) || 0);
  };

  const handleMinuteChange = (event) => {
    setAddMinutes(parseInt(event.target.value, 10) || 0);
  };

  const updatedTime = calculateUpdatedTime();

  return (
    <div>
      <TimezoneSelector onChange={handleTimezoneChange} />
      <TimeDisplay timezone={selectedTimezone} currentTime={updatedTime.toLocaleString('en-US', { timeZone: selectedTimezone, hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })} />
      <TimeEditor onHourChange={handleHourChange} onMinuteChange={handleMinuteChange} />      
    </div>
  );
};

export default TimezoneBox;
