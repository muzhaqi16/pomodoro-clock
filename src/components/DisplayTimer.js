import React, { useEffect, useState } from 'react'
import './DisplayTimer.css';

function DisplayTimer(props) {
    const [minutes, setMinutes] = useState(() =>
        props.time
    );
    const audio = document.getElementById("beep");
    const timerSpeed = 100;
    const [seconds, setSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [session, setSession] = useState(true)

    const changeTimer = () => {
        if (session) {
            setMinutes(() => props.break);
            setIntervalId((prevId) => {
                clearInterval(prevId);
                let interval = setInterval(() => {
                    updateTime();
                }, timerSpeed);
                return interval;
            });
            setSession((prevSession) => !prevSession);

        } else {
            setMinutes(() => props.time);
            setIntervalId((prevId) => {
                clearInterval(prevId);
                let interval = setInterval(() => {
                    updateTime();
                }, timerSpeed);
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
                        playAudio();
                        return 0;
                    }
                    return prevMinutes - 1
                });
                return 59;

            }
            return seconds - 1;
        })
    }
    const playAudio = () => {
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
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
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    }, [props.time]);
    return (
        <div>
            <h1 id="timer-label">{session ? "Session" : "Break"}</h1>
            <span id="time-left" className="timer">
                {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
            </span>
            <audio id="beep"
                src={require("../assets/sound.wav")}>
                Your browser does not support the
                    <code>audio</code> element.
                </audio>
        </div>
    )
}

export default DisplayTimer
