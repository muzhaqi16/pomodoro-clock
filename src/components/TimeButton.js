import React from 'react'
import PropTypes from 'prop-types'; // ES6

import './TimeButton.css';

function TimeButton(props) {
    const { type, label, id, dec, inc, lengthID } = props.data;
    const handleClick = (e) => {
        const clicked = e.target.innerText;
        if (clicked === '-') {
            if (props.minutes > 1) {
                props.onClick(props.minutes - 1)
            }
        } else if (clicked === '+') {
            if (props.minutes < 59) {
                props.onClick(props.minutes + 1)
            }
        } else {
            props.status ? props.onClick(false) : props.onClick(true)
        }

    }
    return (
        <div className="button-container">
            <div className="round-button-time" onClick={type === "text" ? handleClick : null}>
                {props.minutes &&
                    (<><span id={dec} className="box" onClick={handleClick}> - </span>
                        <span id={lengthID} className="box"> {props.minutes} </span>
                        <span id={inc} className="box" onClick={handleClick}> + </span></>)
                }
                {type === "text" && <span id="start_stop" className="time box"> {props.status ? "Pause" : props.text} </span>}
            </div>
            <p id={id} className="label">{label}</p>
        </div>
    )
}
TimeButton.propTypes = {
    data: PropTypes.shape({
        type: PropTypes.oneOf(['timer', 'text']).isRequired,
        label: PropTypes.string
    }),
    minutes: PropTypes.number

}
export default TimeButton
