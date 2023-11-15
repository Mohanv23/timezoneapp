// src/App.js
import React from 'react';
import './App.css'; // Import your CSS file if you have one
import TimezoneBox from './components/TimezoneBox';

function App() {
  return (
    <div className="App">
      <TimezoneBox />
      <TimezoneBox />
      <TimezoneBox />
      <TimezoneBox />
    </div>
  );
}

export default App;
