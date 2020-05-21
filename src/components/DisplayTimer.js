import React, { useEffect, useState } from 'react'
import './DisplayTimer.css';

function DisplayTimer(props) {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const updateTime = () => {
        setSeconds(prevState => {
            if (prevState === 0) {
                setMinutes(minutes - 1);
                return 59;
            }
            return prevState - 1;
        })
    }
    useEffect(() => {
        setMinutes(props.time)
        setSeconds(0);
        var interval;
        if (props.status) {
            interval = setInterval(() => {
                updateTime();
            }, 1000);
        }
        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);
    return (
        <div>
            <span id="time-left" className="timer">{minutes} : {seconds}</span>
        </div>
    )
}

export default DisplayTimer
