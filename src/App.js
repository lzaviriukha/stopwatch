import React, {useEffect, useState} from 'react';
import TimerDisplay from './Components/TimerDisplay';
import TimerButtons from './Components/TimerButtons';
import { TIMER_STATUSES } from './constant';
import './App.css';

const INITIAL_TIME = { seconds: 0, minutes: 0, hours: 0 }

function App() {
  const [time, setTime] = useState({ ...INITIAL_TIME });
  const [status, setStatus] = useState(0);

 useEffect(() => {
   const timerId = setInterval(() => {
     if (status === TIMER_STATUSES.STARTED) {
       const { seconds, minutes, hours } = time;
       let nextSeconds = seconds + 1;
       let nextMinutes = minutes;
       let nextHours = hours;

       if (nextSeconds === 60) {
         nextMinutes++;
         nextSeconds = 0;
       }

       if (nextMinutes === 60) {
         nextHours++;
         nextMinutes = 0;
       }

       return setTime({
         seconds: nextSeconds,
         minutes: nextMinutes,
         hours: nextHours
       });
     }
   }, 1000)

   return () => clearInterval(timerId)
 }, [time, status])

 const resetTime = () => {
   setTime({ ...INITIAL_TIME })
 };

 const handleStart = () => {
   setStatus(TIMER_STATUSES.STARTED)
 };

 const handleStop = () => {
   setStatus(TIMER_STATUSES.NOT_STARTED);
   resetTime();
 };

 const handleWait = () => {
   setStatus(TIMER_STATUSES.WAIT);
 };

 const handleReset = () => {
   resetTime();
 }
 

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <TimerDisplay time={time} />

          <TimerButtons 
            status={status} 
            onStart={handleStart} 
            onStop={handleStop} 
            onWait={handleWait} 
            onReset={handleReset} />
        </div>
      </div>
    </div>
  );
}

export default App;
