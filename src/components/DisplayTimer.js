import React, { useEffect, useState } from 'react'
import './DisplayTimer.css';

function DisplayTimer(props) {
    const [minutes, setMinutes] = useState(() =>
        props.time
    );
    const timerSpeed = 100;
    const [seconds, setSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [session, setSession] = useState(true)

    const changeTimer = () => {
        if (session) {
            setMinutes(() => props.break);
            setIntervalId((prevId) => {
                clearInterval(prevId);
                console.log("Clearing interval id : ", prevId);
                let interval = setInterval(() => {
                    updateTime();
                }, timerSpeed);
                console.log("Setting interval id : ", interval);
                return interval;
            });
            setSession((prevSession) => !prevSession);

        } else {
            setMinutes(() => props.time);
            setIntervalId((prevId) => {
                clearInterval(prevId);
                console.log("Clearing interval id : ", prevId);
                let interval = setInterval(() => {
                    updateTime();
                }, timerSpeed);
                console.log("Setting interval id : ", interval);
                return interval;
            });
            setSession((prevSession) => !prevSession)
        }
    }
    const updateTime = () => {
        setSeconds((seconds) => {
            if (seconds === 0) {
                setMinutes((prevMinutes) => {
                    if (prevMinutes === 0) {
                        changeTimer();
                        return 0;
                    }
                    return prevMinutes - 1
                });
                return 59;

            }
            return seconds - 1;
        })
    }
    useEffect(() => {
        if (props.status) {
            let interval = setInterval(() => {
                updateTime();
            }, timerSpeed);
            setIntervalId(interval);
        }
        return clearInterval(intervalId);
    }, [props.status]);

    useEffect(() => {
        setMinutes(props.time);
        setSeconds(0);// <-- Changes this to 0 when ready for deployment
    }, [props.time]);
    return (
        <div>
            <h1 id="timer-label">{session ? "Session" : "Break"}</h1>
            <span id="time-left" className="timer">
                {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
            </span>
        </div>
    )
}

export default DisplayTimer
