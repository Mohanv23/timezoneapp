// src/App.js
import React, { useState } from 'react';
import './styles/App.css'; // Import your CSS file if you have one
import TimezoneBox from './components/TimezoneBox';


const App = () => {
  
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
