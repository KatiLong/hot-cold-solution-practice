import React from 'react';

import './feedback.css';

export default function Feedback(props) {
    //Generates a key so that Rect treats the feedback message as a DOM change - important for ARIA aural feedback
    const key = props.guessCount;

    let guessAgain;
    if (key !== 0) {
        guessAgain = <span className="visuallyhidden">Guess again!</span>;
    }

    return {
        <h2
            key={key}
            id="feedback"
            role="status"
            aria-live="assertive"
            aria-atomic="true"
        >{props.feedback} {guessAgain}
        </h2>
    }
}
