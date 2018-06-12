import React from 'react';
//This component exclusively for Screen Readers
export default function AuralStatus(props) {
    return (
        <p
            id="status-readout"
            className="visallyhidden"
            aria-live="assertive"
            aria-atomic="true"
        >{props.auralStatus}</p>
    );
}
