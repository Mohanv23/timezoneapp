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
  const [currentLocalTime, setCurrentLocalTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      setLocalTime(currentTime); // Update the local time every second
      setCurrentLocalTime(currentTime); // Save current time separately
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const calculateUpdatedTime = () => {
    const updatedTime = new Date(currentLocalTime);
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
  const futureTime = new Date(updatedTime);

  return (
    <div>
      <TimezoneSelector onChange={handleTimezoneChange} />
      {/* <TimeDisplay timezone={selectedTimezone} currentTime={localTime.toLocaleString('en-US', { timeZone: selectedTimezone, hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })} /> */}
      
      <div>        
        <p>Current Time: {localTime.toLocaleString('en-US', { timeZone: selectedTimezone, hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</p>
      </div>
      {addHours !==0 || addMinutes !==0 ? (
        <div>          
          <p>Future Time: {futureTime.toLocaleString('en-US', { timeZone: selectedTimezone, hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</p>
        </div>
      ): null}
      <TimeEditor onHourChange={handleHourChange} onMinuteChange={handleMinuteChange} />
    </div>
  );
};

export default TimezoneBox;
