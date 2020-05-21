import React from 'react'
import PropTypes from 'prop-types'; // ES6

import './TimeButton.css';

function TimeButton(props) {
    const handleClick = (e) => {
        const clicked = e.target.innerText;
        if (clicked === '-') {
            if (props.minutes > 0) {
                props.onClick(props.minutes - 1)
            }
        } else if (clicked === '+') {
            props.onClick(props.minutes + 1)
        } else {
            props.onClick(true);
        }

    }
    return (
        <div className="round-button-time">
            {props.minutes &&
                (<><span className="decrease box" onClick={handleClick}> - </span>
                    <span className="time box"> {props.minutes} </span>
                    <span className="increase box" onClick={handleClick}> + </span></>)
            }
            {props.text && <span className="time box" onClick={handleClick}> {props.text} </span>}
        </div>
    )
}
TimeButton.propTypes = {
    type: PropTypes.oneOf(['timer', 'text']).isRequired,
    text: PropTypes.string,
    minutes: PropTypes.number

}
export default TimeButton
