import React from 'react';
import { TIMER_STATUSES } from '../constant';

function TimerButtons(props) {
  const { status, onStart, onStop, onWait, onReset } = props

  const startBtn = (<button className="stopwatch-btn stopwatch-btn-gre" 
    onClick={onStart}>Start</button>)

  const stopBtn = (<button className="stopwatch-btn stopwatch-btn-red"
    onClick={onStop}>Stop</button>)

  const waitBtn = (<button className="stopwatch-btn stopwatch-btn-yel"
    onDoubleClick={onWait} disabled={status !== TIMER_STATUSES.STARTED}>Wait</button>)

  const resetBtn = (<button className="stopwatch-btn stopwatch-btn-gre"
    onClick={onReset} disabled={status !== TIMER_STATUSES.STARTED}>Reset</button>  )

  return (
    <div>
      {(status === TIMER_STATUSES.NOT_STARTED) || (status === TIMER_STATUSES.WAIT) ? startBtn : null}
      {(status === TIMER_STATUSES.STARTED) ? stopBtn : null}
      {waitBtn}
      {resetBtn}
    </div>
  );
}

export default TimerButtons;
