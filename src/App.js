// src/App.js
import React, { useState } from 'react';

import './App.css'; // Import your CSS file if you have one
import TimezoneBox from './components/TimezoneBox';

const App = () => {
  const [sharedAddHours, setSharedAddHours] = useState(0);
  const [sharedAddMinutes, setSharedAddMinutes] = useState(0);

  return (

    <div className='App'>      
      <TimezoneBox/>
      <TimezoneBox/>
      <TimezoneBox/>
      <TimezoneBox/>            
    </div>
  );
};
export default App;
