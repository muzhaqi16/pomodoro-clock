import React, { useEffect, useState, useRef } from 'react'
import './DisplayTimer.css';

function DisplayTimer(props) {
    const [minutes, setMinutes] = useState(() =>
        props.time
    );

    const [seconds, setSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const intervalRef = useRef(intervalId);
    const updateTime = () => {

        setSeconds(prevSeconds => {
            if (prevSeconds === 0) {
                setMinutes(prevMinutes => {
                    if (prevMinutes === 0) {
                        clearInterval(intervalRef.current);
                        return 0;
                    }
                    return prevMinutes - 1
                });
                return 59;
            }
            return prevSeconds - 1;
        })
    }
    useEffect(() => {
        if (props.status) {
            let interval = setInterval(() => {
                updateTime();
            }, 1000);
            setIntervalId(interval);
            intervalRef.current = interval;
            console.log(interval);
        } else {
            clearInterval(intervalId);
        }
    }, [props.status]);

    useEffect(() => {
        console.log("I changed too")
        setMinutes(props.time);
        setSeconds(0);
    }, [props.time]);
    return (
        <div>
            <span id="time-left" className="timer">
                {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
            </span>
        </div>
    )
}

export default DisplayTimer
