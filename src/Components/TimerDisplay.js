import React from 'react';

function TimerDisplay(props) {
  const { seconds, minutes, hours } = props.time;

  return (
    <div>
        <span>{(hours >= 10) ? hours : "0" + hours}</span>&nbsp;:&nbsp;
        <span>{(minutes >= 10) ? minutes: "0" + minutes}</span>&nbsp;:&nbsp;
        <span>{(seconds >= 10) ? seconds : "0" + seconds}</span>
    </div>
  );
}

export default TimerDisplay;
