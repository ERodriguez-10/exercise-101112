import React, { useState } from 'react';

import './App.css';

export function randomColor() {
  const redValue = Math.floor(Math.random() * 255);
  const greenValue = Math.floor(Math.random() * 255);
  const blueValue = Math.floor(Math.random() * 255);
  const rgbValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  return rgbValue
}

function App() {

  const [bgcolor, setBgcolor] = useState('rgb(0, 0, 0)')
  const [isActive, setIsActive] = useState(false)
  const [intervalId, setIntervalId] = useState(0)

  function handleColor () {
    setIsActive(true)
    if(setIsActive) {
      const newIntervalId = setInterval(() => {
        setBgcolor(randomColor())
      }, 1500);
      setIntervalId(newIntervalId)
    }
  }

  function handleExit() {
    setIsActive(false)
    if(intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }
  }

  function handleDouble() {
    setIsActive(false)
    if(intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Exercise 10, 11, 12</h1>
        <h5>How it works?</h5>
        <p className='text'>When you hover the box, it will generate a new color every 1,5 seconds.</p>
        <p className='text'>When you leave the box, it will stop the generation.</p>
        <p className='text'>Also, if you see a color and you love it, just double click the box and it will stop.</p>
        <div 
          className="box-interactive" 
          style={{backgroundColor: bgcolor}} 
          onMouseEnter={handleColor} 
          onMouseLeave={handleExit}
          onDoubleClick={handleDouble}>
        </div>
        <div className='color-text'>#{bgcolor}</div>
      </div>
    </div>
  );
}

export default App;
