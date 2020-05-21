import React from 'react'
import PropTypes from 'prop-types'; // ES6

import './TimeButton.css';

function TimeButton(props) {
    return (
        <div className="round-button-time">
            <span className="decrease box"> - </span>
            <span className="time box"> 25 </span>
            <span className="increase box"> + </span>
        </div>
    )
}
TimeButton.propTypes = {
    type: PropTypes.oneOf(['timer', 'text']).isRequired,
    text: PropTypes.string,
    minutes: PropTypes.number

}
export default TimeButton
